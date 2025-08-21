import {
  __async,
  __objRest,
  __spreadProps,
  __spreadValues,
  renderMarkdownToHast
} from "./chunk-C45FGSN3.js";

// src/lib/base.ts
import {
  Project as Project2,
  ts
} from "ts-morph";

// src/create-project.ts
import { Project } from "ts-morph";
function createProject(options = {}) {
  var _a;
  return new Project({
    tsConfigFilePath: (_a = options.tsconfigPath) != null ? _a : "./tsconfig.json",
    skipAddingFilesFromTsConfig: true
  });
}

// src/lib/base.ts
import fs3 from "fs";

// src/lib/type-table.ts
import * as fs from "fs/promises";
import { join } from "path";
function getTypeTableOutput(gen, _a, options) {
  return __async(this, null, function* () {
    var _b = _a, { name, type } = _b, props = __objRest(_b, ["name", "type"]);
    const file = props.path && (options == null ? void 0 : options.basePath) ? join(options.basePath, props.path) : props.path;
    let typeName = name;
    let content = "";
    if (file) {
      content = (yield fs.readFile(file)).toString();
    }
    if (type && type.split("\n").length > 1) {
      content += `
${type}`;
    } else if (type) {
      typeName != null ? typeName : typeName = "$Fumadocs";
      content += `
export type ${typeName} = ${type}`;
    }
    const output = gen.generateDocumentation(
      { path: file != null ? file : "temp.ts", content },
      typeName,
      options
    );
    if (name && output.length === 0)
      throw new Error(`${name} in ${file != null ? file : "empty file"} doesn't exist`);
    return output;
  });
}

// src/lib/cache.ts
import fs2 from "fs";
import { createHash } from "crypto";
import path from "path";
function createCache() {
  const dir = path.join(process.cwd(), ".next/fumadocs-typescript");
  try {
    fs2.mkdirSync(dir, { recursive: true });
  } catch (e) {
  }
  return {
    write(input, data) {
      const hash = createHash("SHA256").update(input).digest("hex").slice(0, 12);
      fs2.writeFileSync(path.join(dir, `${hash}.json`), JSON.stringify(data));
    },
    read(input) {
      const hash = createHash("SHA256").update(input).digest("hex").slice(0, 12);
      try {
        return JSON.parse(
          fs2.readFileSync(path.join(dir, `${hash}.json`)).toString()
        );
      } catch (e) {
        return;
      }
    }
  };
}

// src/lib/base.ts
import path2 from "path";
function createGenerator(config) {
  var _a;
  const options = config instanceof Project2 ? {
    project: config
  } : config;
  const cacheType = (_a = options == null ? void 0 : options.cache) != null ? _a : "fs";
  const cache = cacheType === "fs" ? createCache() : null;
  let instance;
  function getProject() {
    var _a2;
    instance != null ? instance : instance = (_a2 = options == null ? void 0 : options.project) != null ? _a2 : createProject(options);
    return instance;
  }
  return {
    generateDocumentation(file, name, options2) {
      var _a2;
      const content = (_a2 = file.content) != null ? _a2 : fs3.readFileSync(path2.resolve(file.path)).toString();
      const cacheKey = `${file.path}:${name}:${content}`;
      if (cache) {
        const cached = cache.read(cacheKey);
        if (cached) return cached;
      }
      const sourceFile = getProject().createSourceFile(file.path, content, {
        overwrite: true
      });
      const out = [];
      for (const [k, d] of sourceFile.getExportedDeclarations()) {
        if (name && name !== k) continue;
        if (d.length > 1)
          console.warn(
            `export ${k} should not have more than one type declaration.`
          );
        out.push(generate(getProject(), k, d[0], options2));
      }
      cache == null ? void 0 : cache.write(cacheKey, out);
      return out;
    },
    generateTypeTable(props, options2) {
      return getTypeTableOutput(this, props, options2);
    }
  };
}
function generateDocumentation(file, name, content, options = {}) {
  var _a;
  const gen = createGenerator((_a = options.project) != null ? _a : options.config);
  return gen.generateDocumentation({ path: file, content }, name, options);
}
function generate(program, name, declaration, { allowInternal = false, transform } = {}) {
  var _a;
  const entryContext = {
    transform,
    program,
    type: declaration.getType(),
    declaration
  };
  const comment = (_a = declaration.getSymbol()) == null ? void 0 : _a.compilerSymbol.getDocumentationComment(
    program.getTypeChecker().compilerObject
  );
  return {
    name,
    description: comment ? ts.displayPartsToString(comment) : "",
    entries: declaration.getType().getProperties().map((prop) => getDocEntry(prop, entryContext)).filter(
      (entry) => entry && (allowInternal || !("internal" in entry.tags))
    )
  };
}
function getDocEntry(prop, context) {
  var _a, _b, _c, _d;
  const { transform, program } = context;
  if (context.type.isClass() && prop.getName().startsWith("#")) {
    return;
  }
  const subType = program.getTypeChecker().getTypeOfSymbolAtLocation(prop, context.declaration);
  const tags = Object.fromEntries(
    prop.getJsDocTags().map((tag) => [tag.getName(), ts.displayPartsToString(tag.getText())])
  );
  let typeName = subType.getText(
    void 0,
    ts.TypeFormatFlags.UseAliasDefinedOutsideCurrentScope
  );
  if (subType.getAliasSymbol() && subType.getAliasTypeArguments().length === 0) {
    typeName = (_b = (_a = subType.getAliasSymbol()) == null ? void 0 : _a.getEscapedName()) != null ? _b : typeName;
  }
  if (prop.isOptional() && typeName.endsWith("| undefined")) {
    typeName = typeName.slice(0, typeName.length - "| undefined".length).trimEnd();
  }
  if ("remarks" in tags) {
    typeName = (_d = (_c = new RegExp("^`(?<name>.+)`").exec(tags.remarks)) == null ? void 0 : _c[1]) != null ? _d : typeName;
  }
  const entry = {
    name: prop.getName(),
    description: ts.displayPartsToString(
      prop.compilerSymbol.getDocumentationComment(
        program.getTypeChecker().compilerObject
      )
    ),
    tags,
    type: typeName,
    required: !prop.isOptional(),
    deprecated: prop.getJsDocTags().some((tag) => tag.getName() === "deprecated")
  };
  transform == null ? void 0 : transform.call(context, entry, subType, prop);
  return entry;
}

// src/lib/mdx.ts
import * as path3 from "path";
var regex = new RegExp("^---type-table---\\r?\\n(?<file>.+?)(?:#(?<name>.+))?\\r?\\n---end---$", "gm");
var defaultTemplates = {
  block: (doc, c) => `### ${doc.name}

${doc.description}

<div className='*:border-b [&>*:last-child]:border-b-0'>${c}</div>`,
  property: (c) => `<div className='text-sm text-fd-muted-foreground py-4'>

<div className="flex flex-row items-center gap-4">
  <code className="text-sm">${c.name}</code>
  <code className="text-fd-muted-foreground">{${JSON.stringify(c.type)}}</code>
</div>

${c.description || "No Description"}

${Object.entries(c.tags).map(([tag, value]) => `- ${tag}:
${replaceJsDocLinks(value)}`).join("\n")}

</div>`
};
function generateMDX(generator, source, _a = {}) {
  var _b = _a, { basePath = "./", templates: overrides } = _b, rest = __objRest(_b, ["basePath", "templates"]);
  const templates = __spreadValues(__spreadValues({}, defaultTemplates), overrides);
  return source.replace(regex, (...args) => {
    const groups = args[args.length - 1];
    const file = path3.resolve(basePath, groups.file);
    const docs = generator.generateDocumentation(
      { path: file },
      groups.name,
      rest
    );
    return docs.map(
      (doc) => templates.block(doc, doc.entries.map(templates.property).join("\n"))
    ).join("\n\n");
  });
}
function replaceJsDocLinks(md) {
  return md.replace(new RegExp("{@link (?<link>[^}]*)}", "g"), "$1");
}

// src/lib/file.ts
import * as path4 from "path";
import { mkdir, writeFile, readFile as readFile2 } from "fs/promises";
import { glob } from "tinyglobby";
function generateFiles(generator, options) {
  return __async(this, null, function* () {
    const files = yield glob(options.input, options.globOptions);
    const produce = files.map((file) => __async(null, null, function* () {
      const absolutePath = path4.resolve(file);
      const outputPath = typeof options.output === "function" ? options.output(file) : path4.resolve(
        options.output,
        `${path4.basename(file, path4.extname(file))}.mdx`
      );
      const content = (yield readFile2(absolutePath)).toString();
      let result = generateMDX(generator, content, __spreadValues({
        basePath: path4.dirname(absolutePath)
      }, options.options));
      if (options.transformOutput) {
        result = options.transformOutput(outputPath, result);
      }
      yield write(outputPath, result);
      console.log(`Generated: ${outputPath}`);
    }));
    yield Promise.all(produce);
  });
}
function write(file, content) {
  return __async(this, null, function* () {
    yield mkdir(path4.dirname(file), { recursive: true });
    yield writeFile(file, content);
  });
}

// src/lib/remark-auto-type-table.tsx
import { valueToEstree } from "estree-util-value-to-estree";
import { visit } from "unist-util-visit";
import { toEstree } from "hast-util-to-estree";
import { dirname as dirname2 } from "path";
function mapProperty(entry, renderMarkdown) {
  return __async(this, null, function* () {
    const value = valueToEstree({
      type: entry.type,
      default: entry.tags.default || entry.tags.defaultValue,
      required: entry.required
    });
    if (entry.description) {
      const hast = toEstree(yield renderMarkdown(entry.description), {
        elementAttributeNameCase: "react"
      }).body[0];
      value.properties.push({
        type: "Property",
        method: false,
        shorthand: false,
        computed: false,
        key: {
          type: "Identifier",
          name: "description"
        },
        kind: "init",
        value: hast.expression
      });
    }
    return {
      type: "Property",
      method: false,
      shorthand: false,
      computed: false,
      key: {
        type: "Literal",
        value: entry.name
      },
      kind: "init",
      value
    };
  });
}
function remarkAutoTypeTable({
  name = "auto-type-table",
  outputName = "TypeTable",
  renderMarkdown = renderMarkdownToHast,
  options = {},
  remarkStringify = true,
  generator = createGenerator()
} = {}) {
  return (tree, file) => __async(null, null, function* () {
    const queue = [];
    let basePath = options == null ? void 0 : options.basePath;
    if (!basePath && file.path) basePath = dirname2(file.path);
    visit(tree, "mdxJsxFlowElement", (node) => {
      if (node.name !== name) return;
      const props = {};
      for (const attr of node.attributes) {
        if (attr.type !== "mdxJsxAttribute" || typeof attr.value !== "string")
          throw new Error(
            "`auto-type-table` does not support non-string attributes"
          );
        props[attr.name] = attr.value;
      }
      function run() {
        return __async(this, null, function* () {
          const output = yield generator.generateTypeTable(
            props,
            __spreadProps(__spreadValues({}, options), {
              basePath
            })
          );
          const rendered = output.map((doc) => __async(null, null, function* () {
            const properties = yield Promise.all(
              doc.entries.map((entry) => mapProperty(entry, renderMarkdown))
            );
            return {
              type: "mdxJsxFlowElement",
              name: outputName,
              attributes: [
                {
                  type: "mdxJsxAttribute",
                  name: "type",
                  value: {
                    type: "mdxJsxAttributeValueExpression",
                    value: remarkStringify ? JSON.stringify(doc, null, 2) : "",
                    data: {
                      estree: {
                        type: "Program",
                        sourceType: "module",
                        body: [
                          {
                            type: "ExpressionStatement",
                            expression: {
                              type: "ObjectExpression",
                              properties
                            }
                          }
                        ]
                      }
                    }
                  }
                }
              ],
              children: []
            };
          }));
          Object.assign(node, {
            type: "root",
            attributes: [],
            children: yield Promise.all(rendered)
          });
        });
      }
      queue.push(run());
      return "skip";
    });
    yield Promise.all(queue);
  });
}
export {
  createGenerator,
  createProject,
  generateDocumentation,
  generateFiles,
  generateMDX,
  remarkAutoTypeTable,
  renderMarkdownToHast
};
