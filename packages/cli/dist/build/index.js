// src/build/index.ts
import * as fs3 from "fs/promises";
import * as path4 from "path";
import picocolors from "picocolors";

// src/build/shadcn.ts
function mapDeps(deps) {
  return Object.entries(deps).map(([k, v]) => {
    if (v) return `${k}@${v}`;
    return k;
  });
}
function escapeName(name) {
  return name;
}
function toShadcnRegistry(out, baseUrl) {
  return {
    homepage: baseUrl,
    name: out.name,
    items: out.components.map((comp) => componentToShadcn(comp, baseUrl))
  };
}
function componentToShadcn(comp, baseUrl) {
  return {
    extends: "none",
    type: "registry:block",
    name: escapeName(comp.name),
    title: comp.title ?? comp.name,
    description: comp.description,
    dependencies: mapDeps(comp.dependencies),
    devDependencies: mapDeps(comp.devDependencies),
    registryDependencies: comp.subComponents.map((comp2) => {
      if (comp2.startsWith("https://") || comp2.startsWith("http://"))
        return comp2;
      return new URL(`/r/${escapeName(comp2)}.json`, baseUrl).toString();
    }),
    files: comp.files.map((file) => {
      return {
        type: {
          components: "registry:component",
          lib: "registry:lib",
          css: "registry:style",
          route: "registry:page",
          ui: "registry:ui",
          block: "registry:block"
        }[file.type],
        content: file.content,
        path: file.path,
        target: file.target
      };
    })
  };
}

// src/build/validate.ts
function validateOutput(registry) {
  function validateComponent(comp, ctx = {}) {
    const { stack = /* @__PURE__ */ new Map() } = ctx;
    for (const file of comp.files) {
      const parents = stack.get(file.path);
      if (parents) {
        parents.add(comp.name);
      } else {
        stack.set(file.path, /* @__PURE__ */ new Set([comp.name]));
      }
    }
    for (const name of comp.subComponents) {
      const subComp = registry.components.find((item) => item.name === name);
      if (!subComp) {
        console.warn(`skipped component ${name}: not found`);
        continue;
      }
      validateComponent(subComp, {
        stack
      });
    }
    for (const file of comp.files) {
      const parents = stack.get(file.path);
      if (!parents) continue;
      if (parents.size <= 1) continue;
      throw new Error(
        `Duplicated file in same component ${Array.from(parents).join(", ")}: ${file.path}`
      );
    }
  }
  const compSet = /* @__PURE__ */ new Set();
  for (const comp of registry.components) {
    if (compSet.has(comp.name))
      throw new Error(`duplicated component name ${comp.name}`);
    compSet.add(comp.name);
    validateComponent(comp);
  }
}

// src/build/build-registry.ts
import * as fs2 from "fs/promises";
import * as path3 from "path";

// src/build/build-file.ts
import * as path from "path";
import { ts } from "ts-morph";
async function buildFile(file, builder, comp, writeReference) {
  const sourceFilePath = path.join(builder.registryDir, file.path);
  const defaultResolve = (specifier, specified) => {
    let filePath;
    if (specified) {
      filePath = specified.getFilePath();
    } else if (specifier.startsWith("./") || specifier.startsWith("../")) {
      filePath = path.join(path.dirname(sourceFilePath), specifier);
    } else {
      throw new Error("Unknown specifier " + specifier);
    }
    if (path.relative(builder.registryDir, filePath).startsWith("../")) {
      return {
        type: "dependency",
        dep: builder.getDepFromSpecifier(specifier),
        specifier
      };
    }
    const sub = builder.getSubComponent(filePath);
    if (sub) {
      return {
        type: "sub-component",
        resolved: {
          type: "local",
          component: sub.component,
          file: sub.file
        }
      };
    }
    return {
      type: "file",
      file: filePath
    };
  };
  function process2(specifier, getSpecifiedFile) {
    const onResolve = comp.onResolve ?? builder.registry.onResolve;
    let resolved = defaultResolve(
      specifier.getLiteralValue(),
      getSpecifiedFile()
    );
    if (onResolve) resolved = onResolve(resolved);
    const out = writeReference(resolved);
    if (out) specifier.setLiteralValue(out);
  }
  const sourceFile = await builder.createSourceFile(sourceFilePath);
  for (const item of sourceFile.getImportDeclarations()) {
    process2(
      item.getModuleSpecifier(),
      () => item.getModuleSpecifierSourceFile()
    );
  }
  for (const item of sourceFile.getExportDeclarations()) {
    const specifier = item.getModuleSpecifier();
    if (!specifier) continue;
    process2(specifier, () => item.getModuleSpecifierSourceFile());
  }
  const calls = sourceFile.getDescendantsOfKind(ts.SyntaxKind.CallExpression);
  for (const expression of calls) {
    if (expression.getExpression().isKind(ts.SyntaxKind.ImportKeyword) && expression.getArguments().length === 1) {
      const argument = expression.getArguments()[0];
      if (!argument.isKind(ts.SyntaxKind.StringLiteral)) continue;
      process2(
        argument,
        () => argument.getSymbol()?.getDeclarations()[0].getSourceFile()
      );
    }
  }
  return {
    content: sourceFile.getFullText(),
    type: file.type,
    path: file.path,
    target: file.target
  };
}

// src/build/component-builder.ts
import path2 from "path";
import { Project } from "ts-morph";
import * as fs from "fs/promises";
function createComponentBuilder(registry, packageJson) {
  const project = new Project({
    tsConfigFilePath: path2.join(registry.dir, registry.tsconfigPath)
  });
  const fileToComponent = /* @__PURE__ */ new Map();
  for (const comp of registry.components) {
    for (const file of comp.files) {
      if (fileToComponent.has(file.path))
        console.warn(
          `the same file ${file.path} exists in multiple component, you should make the shared file a separate component.`
        );
      fileToComponent.set(file.path, [comp, file]);
    }
  }
  const deps = {
    ...packageJson?.dependencies,
    ...registry.dependencies
  };
  const devDeps = {
    ...packageJson?.devDependencies,
    ...registry.devDependencies
  };
  return {
    registryDir: registry.dir,
    registry,
    getDepFromSpecifier(specifier) {
      return specifier.startsWith("@") ? specifier.split("/").slice(0, 2).join("/") : specifier.split("/")[0];
    },
    getDepInfo(name) {
      if (name in deps)
        return {
          name,
          type: "runtime",
          version: deps[name]
        };
      if (name in devDeps)
        return {
          name,
          type: "dev",
          version: devDeps[name]
        };
      console.warn(`dep info for ${name} cannot be found`);
    },
    async createSourceFile(file) {
      const content = await fs.readFile(file);
      return project.createSourceFile(file, content.toString(), {
        overwrite: true
      });
    },
    getComponentByName(name) {
      return registry.components.find((comp) => comp.name === name);
    },
    getSubComponent(file) {
      const relativeFile = path2.relative(registry.dir, file);
      const comp = fileToComponent.get(relativeFile);
      if (!comp) return;
      return {
        component: comp[0],
        file: comp[1]
      };
    }
  };
}

// src/build/build-registry.ts
async function build(registry) {
  const output = {
    name: registry.name,
    index: [],
    components: []
  };
  function readPackageJson() {
    if (typeof registry.packageJson !== "string") return registry.packageJson;
    return fs2.readFile(path3.join(registry.dir, registry.packageJson)).then((res) => JSON.parse(res.toString())).catch(() => void 0);
  }
  const packageJson = await readPackageJson();
  const builder = createComponentBuilder(registry, packageJson);
  const builtComps = await Promise.all(
    registry.components.map((component) => buildComponent(component, builder))
  );
  for (const [input, comp] of builtComps) {
    if (!input.unlisted) {
      output.index.push({
        name: input.name,
        title: input.title,
        description: input.description
      });
    }
    output.components.push(comp);
  }
  validateOutput(output);
  return output;
}
async function buildComponent(component, builder) {
  const processedFiles = /* @__PURE__ */ new Set();
  const subComponents = /* @__PURE__ */ new Set();
  const devDependencies = /* @__PURE__ */ new Map();
  const dependencies = /* @__PURE__ */ new Map();
  function toImportPath(file) {
    let filePath = file.target ?? file.path;
    if (filePath.startsWith("./")) filePath = filePath.slice(2);
    return `@/${filePath.replaceAll(path3.sep, "/")}`;
  }
  async function build2(file) {
    if (processedFiles.has(file.path)) return [];
    processedFiles.add(file.path);
    const queue = [];
    const result = await buildFile(file, builder, component, (reference) => {
      if (reference.type === "custom") return reference.specifier;
      if (reference.type === "file") {
        const refFile = builder.registry.onUnknownFile?.(reference.file);
        if (refFile) {
          queue.push(refFile);
          return toImportPath(refFile);
        }
        throw new Error(
          `Unknown file ${reference.file} referenced by ${file.path}`
        );
      }
      if (reference.type === "sub-component") {
        const resolved = reference.resolved;
        if (resolved.component.name !== component.name)
          subComponents.add(resolved.component.name);
        return toImportPath(resolved.file);
      }
      const dep = builder.getDepInfo(reference.dep);
      if (dep) {
        const map = dep.type === "dev" ? devDependencies : dependencies;
        map.set(dep.name, dep.version);
      }
      return reference.specifier;
    });
    return [result, ...(await Promise.all(queue.map(build2))).flat()];
  }
  return [
    component,
    {
      name: component.name,
      title: component.title,
      description: component.description,
      files: (await Promise.all(component.files.map(build2))).flat(),
      subComponents: Array.from(subComponents),
      dependencies: Object.fromEntries(dependencies),
      devDependencies: Object.fromEntries(devDependencies)
    }
  ];
}

// src/build/index.ts
function combineRegistry(...items) {
  const out = {
    index: [],
    components: [],
    name: items[0].name
  };
  for (const item of items) {
    out.components.push(...item.components);
    out.index.push(...item.index);
  }
  validateOutput(out);
  return out;
}
async function writeShadcnRegistry(out, options) {
  const { dir, cleanDir = false, baseUrl } = options;
  if (cleanDir) {
    await fs3.rm(dir, {
      recursive: true,
      force: true
    });
    console.log(picocolors.bold(picocolors.greenBright("Cleaned directory")));
  }
  await Promise.all(
    toShadcnRegistry(out, baseUrl).items.map(async (item) => {
      const file = path4.join(dir, `${item.name}.json`);
      await writeFile2(file, JSON.stringify(item, null, 2));
    })
  );
}
async function writeFumadocsRegistry(out, options) {
  const { dir, cleanDir = false, log = true } = options;
  if (cleanDir) {
    await fs3.rm(dir, {
      recursive: true,
      force: true
    });
    console.log(picocolors.bold(picocolors.greenBright("Cleaned directory")));
  }
  async function writeIndex() {
    const file = path4.join(dir, "_registry.json");
    const json = JSON.stringify(out.index, null, 2);
    await writeFile2(file, json, log);
  }
  const write = out.components.map(async (comp) => {
    const file = path4.join(dir, `${comp.name}.json`);
    const json = JSON.stringify(comp, null, 2);
    await writeFile2(file, json, log);
  });
  write.push(writeIndex());
  await Promise.all(write);
}
async function writeFile2(file, content, log = true) {
  await fs3.mkdir(path4.dirname(file), { recursive: true });
  await fs3.writeFile(file, content);
  if (log) {
    const size = (Buffer.byteLength(content) / 1024).toFixed(2);
    console.log(
      `${picocolors.greenBright("+")} ${path4.relative(process.cwd(), file)} ${picocolors.dim(`${size} KB`)}`
    );
  }
}
export {
  build,
  combineRegistry,
  createComponentBuilder,
  toShadcnRegistry,
  writeFumadocsRegistry,
  writeShadcnRegistry
};
