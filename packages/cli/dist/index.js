#!/usr/bin/env node

// src/index.ts
import fs5 from "fs/promises";
import path4 from "path";
import { Command } from "commander";
import picocolors3 from "picocolors";

// src/utils/add/install-component.ts
import path2 from "path";
import fs from "fs/promises";
import { confirm, isCancel, log, outro } from "@clack/prompts";

// src/utils/typescript.ts
import { Project } from "ts-morph";
function createEmptyProject() {
  return new Project({
    compilerOptions: {}
  });
}

// src/constants.ts
var typescriptExtensions = [".ts", ".tsx", ".js", ".jsx"];

// src/utils/transform-references.ts
import path from "path";
function transformReferences(file, transform) {
  for (const specifier of file.getImportStringLiterals()) {
    const result = transform(specifier.getLiteralValue());
    if (!result) continue;
    specifier.setLiteralValue(result);
  }
}
function toImportSpecifier(sourceFile, referenceFile) {
  const extname = path.extname(referenceFile);
  const removeExt = typescriptExtensions.includes(extname);
  const importPath = path.relative(
    path.dirname(sourceFile),
    removeExt ? referenceFile.substring(0, referenceFile.length - extname.length) : referenceFile
  ).replaceAll(path.sep, "/");
  return importPath.startsWith("../") ? importPath : `./${importPath}`;
}

// src/registry/schema.ts
import { z } from "zod";
var namespaces = [
  "components",
  "lib",
  "css",
  "route",
  "ui",
  "block"
];
var indexSchema = z.object({
  name: z.string(),
  title: z.string().optional(),
  description: z.string().optional()
});
var fileSchema = z.object({
  type: z.literal(namespaces),
  path: z.string(),
  target: z.string().optional(),
  content: z.string()
});
var componentSchema = z.object({
  name: z.string(),
  title: z.string().optional(),
  description: z.string().optional(),
  files: z.array(fileSchema),
  dependencies: z.record(z.string(), z.string().or(z.null())),
  devDependencies: z.record(z.string(), z.string().or(z.null())),
  subComponents: z.array(z.string()).default([])
});
var rootSchema = z.object({
  name: z.string(),
  index: z.array(indexSchema),
  components: z.array(componentSchema)
});

// src/registry/client.ts
import { z as z2 } from "zod";
function validateRegistryIndex(indexes) {
  return z2.array(indexSchema).parse(indexes);
}
function validateRegistryComponent(component) {
  return componentSchema.parse(component);
}

// src/utils/add/install-component.ts
function createComponentInstaller(options) {
  const { config, resolver } = options;
  const project = createEmptyProject();
  const installedFiles = /* @__PURE__ */ new Set();
  const downloadedComps = /* @__PURE__ */ new Map();
  function buildFileList(downloaded) {
    const map = /* @__PURE__ */ new Map();
    for (const item of downloaded) {
      for (const file of item.files) {
        const filePath = file.target ?? file.path;
        if (map.has(filePath)) {
          console.warn(
            `noticed duplicated output file for ${filePath}, ignoring for now.`
          );
          continue;
        }
        map.set(filePath, file);
      }
    }
    return Array.from(map.values());
  }
  return {
    async install(name) {
      const downloaded = await this.download(name);
      const dependencies = {};
      const devDependencies = {};
      for (const item of downloaded) {
        Object.assign(dependencies, item.dependencies);
        Object.assign(devDependencies, item.devDependencies);
      }
      const fileList = buildFileList(downloaded);
      for (const file of fileList) {
        const filePath = file.target ?? file.path;
        if (installedFiles.has(filePath)) continue;
        const outPath = this.resolveOutputPath(file);
        const output = typescriptExtensions.includes(path2.extname(filePath)) ? this.transform(outPath, file, fileList) : file.content;
        const status = await fs.readFile(outPath).then((res) => {
          if (res.toString() === output) return "ignore";
          return "need-update";
        }).catch(() => "write");
        installedFiles.add(filePath);
        if (status === "ignore") continue;
        if (status === "need-update") {
          const override = await confirm({
            message: `Do you want to override ${outPath}?`,
            initialValue: false
          });
          if (isCancel(override)) {
            outro("Ended");
            process.exit(0);
          }
          if (!override) continue;
        }
        await fs.mkdir(path2.dirname(outPath), { recursive: true });
        await fs.writeFile(outPath, output);
        log.step(`downloaded ${outPath}`);
      }
      return {
        dependencies,
        devDependencies
      };
    },
    /**
     * return a list of components, merged with child components.
     */
    async download(name) {
      const cached = downloadedComps.get(name);
      if (cached) return cached;
      const comp = validateRegistryComponent(
        await resolver(`${name}.json`).catch((e) => {
          log.error(`component ${name} not found:`);
          log.error(String(e));
          process.exit(1);
        })
      );
      const result = [comp];
      downloadedComps.set(name, result);
      for (const sub of comp.subComponents) {
        result.push(...await this.download(sub));
      }
      return result;
    },
    transform(filePath, file, fileList) {
      const sourceFile = project.createSourceFile(filePath, file.content, {
        overwrite: true
      });
      transformReferences(sourceFile, (specifier) => {
        const prefix = "@/";
        if (specifier.startsWith(prefix)) {
          const lookup = specifier.substring(prefix.length);
          const target = fileList.find((item) => {
            const filePath2 = item.target ?? item.path;
            return filePath2 === lookup;
          });
          if (!target) {
            console.warn(`cannot find the referenced file of ${specifier}`);
            return specifier;
          }
          return toImportSpecifier(filePath, this.resolveOutputPath(target));
        }
      });
      return sourceFile.getFullText();
    },
    resolveOutputPath(ref) {
      if (ref.target) {
        return path2.join(config.baseDir, ref.target);
      }
      const base = path2.basename(ref.path);
      const dir = {
        components: config.aliases.componentsDir,
        block: config.aliases.blockDir,
        ui: config.aliases.uiDir,
        css: config.aliases.cssDir,
        lib: config.aliases.libDir,
        route: "./"
      }[ref.type];
      return path2.join(config.baseDir, dir, base);
    }
  };
}
function remoteResolver(url) {
  return async (file) => {
    const res = await fetch(`${url}/${file}`);
    if (!res.ok) {
      throw new Error(`failed to fetch ${url}/${file}: ${res.statusText}`);
    }
    return await res.json();
  };
}
function localResolver(dir) {
  return async (file) => {
    const filePath = path2.join(dir, file);
    return await fs.readFile(filePath).then((res) => JSON.parse(res.toString())).catch((e) => {
      throw new Error(`failed to resolve local file "${filePath}"`, {
        cause: e
      });
    });
  };
}

// src/config.ts
import fs3 from "fs/promises";

// src/utils/fs.ts
import fs2 from "fs/promises";
import path3 from "path";
async function exists(pathLike) {
  try {
    await fs2.access(pathLike);
    return true;
  } catch {
    return false;
  }
}

// src/utils/is-src.ts
async function isSrc() {
  return exists("./src");
}

// src/config.ts
import { z as z3 } from "zod";
function createConfigSchema(isSrc2) {
  const defaultAliases = {
    uiDir: "./components/ui",
    componentsDir: "./components",
    blockDir: "./components",
    cssDir: "./styles",
    libDir: "./lib"
  };
  return z3.object({
    aliases: z3.object({
      uiDir: z3.string().default(defaultAliases.uiDir),
      componentsDir: z3.string().default(defaultAliases.uiDir),
      blockDir: z3.string().default(defaultAliases.blockDir),
      cssDir: z3.string().default(defaultAliases.componentsDir),
      libDir: z3.string().default(defaultAliases.libDir)
    }).default(defaultAliases),
    baseDir: z3.string().default(isSrc2 ? "src" : ""),
    commands: z3.object({
      /**
       * command to format output code automatically
       */
      format: z3.string().optional()
    }).default({})
  });
}
async function createOrLoadConfig(file = "./cli.json") {
  const inited = await initConfig(file);
  if (inited) return inited;
  const content = (await fs3.readFile(file)).toString();
  const src = await isSrc();
  const configSchema = createConfigSchema(src);
  return configSchema.parse(JSON.parse(content));
}
async function initConfig(file = "./cli.json") {
  if (await fs3.stat(file).then(() => true).catch(() => false)) {
    return;
  }
  const src = await isSrc();
  const defaultConfig = createConfigSchema(src).parse({});
  await fs3.writeFile(file, JSON.stringify(defaultConfig, null, 2));
  return defaultConfig;
}

// src/commands/file-tree.ts
var scanned = ["file", "directory", "link"];
function treeToMdx(input, noRoot = false) {
  function toNode(item) {
    if (item.type === "file" || item.type === "link") {
      return `<File name=${JSON.stringify(item.name)} />`;
    }
    if (item.type === "directory") {
      if (item.contents.length === 1 && "name" in item.contents[0]) {
        const child = item.contents[0];
        return toNode({
          ...child,
          name: `${item.name}/${child.name}`
        });
      }
      return `<Folder name=${JSON.stringify(item.name)}>
${item.contents.map(toNode).filter(Boolean).join("\n")}
</Folder>`;
    }
    return "";
  }
  let children = input.filter((v) => scanned.includes(v.type));
  if (noRoot && children.length === 1 && input[0].type === "directory") {
    children = input[0].contents;
  }
  return `<Files>
${children.map(toNode).filter(Boolean).join("\n")}
</Files>`;
}
function treeToJavaScript(input, noRoot, importName = "fumadocs-ui/components/files") {
  return `import { File, Files, Folder } from ${JSON.stringify(importName)}

export default (${treeToMdx(input, noRoot)})`;
}

// src/utils/file-tree/run-tree.ts
import { x } from "tinyexec";
async function runTree(args) {
  const out = await x("tree", [args, "--gitignore", "--prune", "-J"]);
  try {
    return JSON.parse(out.stdout);
  } catch (e) {
    throw new Error("failed to run `tree` command", {
      cause: e
    });
  }
}

// package.json
var package_default = {
  name: "@fumadocs/cli",
  version: "1.0.0",
  description: "The CLI tool for Fumadocs",
  keywords: [
    "NextJs",
    "Docs",
    "Fumadocs"
  ],
  homepage: "https://fumadocs.vercel.app",
  repository: "github:fuma-nama/fumadocs",
  license: "MIT",
  author: "Fuma Nama",
  type: "module",
  exports: {
    "./build": {
      import: "./dist/build/index.js",
      types: "./dist/build/index.d.ts"
    }
  },
  main: "./dist/index.js",
  bin: {
    fumadocs: "./dist/index.js"
  },
  files: [
    "dist/*"
  ],
  scripts: {
    build: "tsup",
    clean: "rimraf dist",
    dev: "tsup --watch",
    lint: "eslint .",
    "types:check": "tsc --noEmit"
  },
  dependencies: {
    "@clack/prompts": "^0.11.0",
    commander: "^14.0.0",
    "package-manager-detector": "^1.3.0",
    picocolors: "^1.1.1",
    tinyexec: "^1.0.1",
    "ts-morph": "^26.0.0",
    zod: "^4.0.17"
  },
  devDependencies: {
    "@types/node": "24.3.0",
    "eslint-config-custom": "workspace:*",
    shadcn: "2.10.0",
    tsconfig: "workspace:*"
  },
  publishConfig: {
    access: "public"
  }
};

// src/commands/customise.ts
import {
  cancel,
  confirm as confirm3,
  group,
  intro as intro2,
  log as log3,
  outro as outro3,
  select
} from "@clack/prompts";
import picocolors2 from "picocolors";

// src/commands/add.ts
import {
  intro,
  isCancel as isCancel3,
  log as log2,
  multiselect,
  outro as outro2,
  spinner as spinner2
} from "@clack/prompts";
import picocolors from "picocolors";

// src/utils/get-package-manager.ts
import { detect } from "package-manager-detector";
async function getPackageManager() {
  const result = await detect();
  return result?.name ?? "npm";
}

// src/utils/add/install-deps.ts
import { confirm as confirm2, isCancel as isCancel2, spinner } from "@clack/prompts";
import { x as x2 } from "tinyexec";

// src/utils/add/get-deps.ts
import fs4 from "fs/promises";
async function getDeps() {
  const dependencies = /* @__PURE__ */ new Map();
  if (!await exists("package.json")) return dependencies;
  const content = await fs4.readFile("package.json");
  const parsed = JSON.parse(content.toString());
  if ("dependencies" in parsed && typeof parsed.dependencies === "object") {
    const records = parsed.dependencies;
    Object.entries(records).forEach(([k, v]) => {
      dependencies.set(k, v);
    });
  }
  if ("devDependencies" in parsed && typeof parsed.devDependencies === "object") {
    const records = parsed.devDependencies;
    Object.entries(records).forEach(([k, v]) => {
      dependencies.set(k, v);
    });
  }
  return dependencies;
}

// src/utils/add/install-deps.ts
async function installDeps(deps, devDeps) {
  const installed = await getDeps();
  function toList(deps2) {
    return Object.entries(deps2).filter(([k]) => !installed.has(k)).map(([k, v]) => v === null || v.length === 0 ? k : `${k}@${v}`);
  }
  const items = toList(deps);
  const devItems = toList(devDeps);
  if (items.length > 0 || devItems.length > 0) {
    const manager = await getPackageManager();
    const value = await confirm2({
      message: `Do you want to install with ${manager}?
${[...items, ...devItems].map((v) => `- ${v}`).join("\n")}`
    });
    if (isCancel2(value)) {
      return;
    }
    if (value) {
      const spin = spinner();
      spin.start("Installing dependencies...");
      if (items.length > 0) await x2(manager, ["install", ...items]);
      if (devItems.length > 0) await x2(manager, ["install", ...devItems, "-D"]);
      spin.stop("Dependencies installed.");
    }
  }
}

// src/commands/add.ts
async function add(input, resolver, config) {
  const installer = createComponentInstaller({
    resolver,
    config
  });
  let target = input;
  if (input.length === 0) {
    const spin = spinner2();
    spin.start("fetching registry");
    const indexes = validateRegistryIndex(
      await resolver("_registry.json").catch((e) => {
        log2.error(String(e));
        process.exit(1);
      })
    );
    spin.stop(picocolors.bold(picocolors.greenBright("registry fetched")));
    const value = await multiselect({
      message: "Select components to install",
      options: indexes.map((item) => ({
        label: item.title,
        value: item.name,
        hint: item.description
      }))
    });
    if (isCancel3(value)) {
      outro2("Ended");
      return;
    }
    target = value;
  }
  await install(target, installer);
}
async function install(target, installer) {
  const dependencies = {};
  const devDependencies = {};
  for (const name of target) {
    intro(
      picocolors.bold(
        picocolors.inverse(picocolors.cyanBright(`Add Component: ${name}`))
      )
    );
    try {
      const output = await installer.install(name);
      Object.assign(dependencies, output.dependencies);
      Object.assign(devDependencies, output.devDependencies);
      outro2(picocolors.bold(picocolors.greenBright(`${name} installed`)));
    } catch (e) {
      log2.error(String(e));
      throw e;
    }
  }
  intro(picocolors.bold("New Dependencies"));
  await installDeps(dependencies, devDependencies);
  outro2(picocolors.bold(picocolors.greenBright("Successful")));
}

// src/commands/customise.ts
async function customise(resolver, config) {
  intro2(picocolors2.bgBlack(picocolors2.whiteBright("Customise Fumadocs UI")));
  const installer = createComponentInstaller({
    resolver,
    config
  });
  const result = await group(
    {
      target: () => select({
        message: "What do you want to customise?",
        options: [
          {
            label: "Docs Layout",
            value: "docs",
            hint: "main UI of your docs"
          },
          {
            label: "Home Layout",
            value: "home",
            hint: "the navbar for your other pages"
          }
        ]
      }),
      mode: (v) => {
        if (v.results.target !== "docs") return;
        return select({
          message: "Which variant do you want to start from?",
          options: [
            {
              label: "Start from minimal styles",
              value: "minimal",
              hint: "for those who want to build their own variant from ground up."
            },
            {
              label: "Start from default layout",
              value: "full-default",
              hint: "useful for adjusting small details."
            },
            {
              label: "Start from Notebook layout",
              value: "full-notebook",
              hint: "useful for adjusting small details."
            }
          ]
        });
      },
      page: async (v) => {
        if (v.results.target !== "docs" || v.results.mode === "minimal")
          return false;
        return confirm3({
          message: "Do you want to customise the page component too?"
        });
      }
    },
    {
      onCancel: () => {
        cancel("Installation Stopped.");
        process.exit(0);
      }
    }
  );
  if (result.target === "docs") {
    const targets = [];
    let pageAdded = false;
    if (result.mode === "minimal") {
      targets.push("layouts/docs-min");
      pageAdded = true;
    } else {
      if (result.page) {
        targets.push("layouts/page");
        pageAdded = true;
      }
      targets.push(
        result.mode === "full-default" ? "layouts/docs" : "layouts/notebook"
      );
    }
    await install(targets, installer);
    const maps = [
      ["fumadocs-ui/layouts/docs", "@/components/layout/docs"]
    ];
    if (pageAdded) {
      maps.push(["fumadocs-ui/page", "@/components/layout/page"]);
    }
    printNext(...maps);
  }
  if (result.target === "home") {
    await install(["layouts/home"], installer);
    printNext(["fumadocs-ui/layouts/home", `@/components/layout/home`]);
  }
  outro3(picocolors2.bold("Have fun!"));
}
function printNext(...maps) {
  intro2(picocolors2.bold("What is Next?"));
  log3.info(
    [
      "You can check the installed components in `components`.",
      picocolors2.dim("---"),
      "Open your `layout.tsx` files, replace the imports of components:",
      ...maps.map(
        ([from, to]) => picocolors2.greenBright(`"${from}" -> "${to}"`)
      )
    ].join("\n")
  );
}

// src/index.ts
var program = new Command().option("--config <string>");
program.name("fumadocs").description("CLI to setup Fumadocs, init a config").version(package_default.version).action(async () => {
  if (await initConfig()) {
    console.log(picocolors3.green("Initialized a `./cli.json` config file."));
  } else {
    console.log(picocolors3.redBright("A config file already exists."));
  }
});
program.command("customise").alias("customize").description("simple way to customise layouts with Fumadocs UI").option("--dir <string>", "the root url or directory to resolve registry").action(async (options) => {
  const resolver = getResolverFromDir(options.dir);
  await customise(resolver, await createOrLoadConfig(options.config));
});
var dirShortcuts = {
  ":dev": "https://preview.fumadocs.dev/registry",
  ":localhost": "http://localhost:3000/registry"
};
program.command("add").description("add a new component to your docs").argument("[components...]", "components to download").option("--dir <string>", "the root url or directory to resolve registry").action(
  async (input, options) => {
    const resolver = getResolverFromDir(options.dir);
    await add(input, resolver, await createOrLoadConfig(options.config));
  }
);
program.command("tree").argument(
  "[json_or_args]",
  "JSON output of `tree` command or arguments for the `tree` command"
).argument("[output]", "output path of file").option("--js", "output as JavaScript file").option("--no-root", "remove the root node").option("--import-name <name>", "where to import components (JS only)").action(
  async (str, output, {
    js,
    root,
    importName
  }) => {
    const jsExtensions = [".js", ".tsx", ".jsx"];
    const noRoot = !root;
    let nodes;
    try {
      nodes = JSON.parse(str ?? "");
    } catch {
      nodes = await runTree(str ?? "./");
    }
    const out = js || output && jsExtensions.includes(path4.extname(output)) ? treeToJavaScript(nodes, noRoot, importName) : treeToMdx(nodes, noRoot);
    if (output) {
      await fs5.mkdir(path4.dirname(output), { recursive: true });
      await fs5.writeFile(output, out);
    } else {
      console.log(out);
    }
  }
);
function getResolverFromDir(dir = "https://fumadocs.dev/registry") {
  if (dir in dirShortcuts) dir = dirShortcuts[dir];
  return dir.startsWith("http://") || dir.startsWith("https://") ? remoteResolver(dir) : localResolver(dir);
}
program.parse();
