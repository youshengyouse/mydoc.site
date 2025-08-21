"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/mdx-plugins/remark-exports.ts
function remarkMdxExport({ values }) {
  return (tree, vfile) => {
    for (const name of values) {
      if (!(name in vfile.data)) return;
      tree.children.unshift(getMdastExport(name, vfile.data[name]));
    }
  };
}
function getMdastExport(name, value) {
  return {
    type: "mdxjsEsm",
    value: "",
    data: {
      estree: {
        type: "Program",
        sourceType: "module",
        body: [
          {
            type: "ExportNamedDeclaration",
            specifiers: [],
            source: null,
            declaration: {
              type: "VariableDeclaration",
              kind: "let",
              declarations: [
                {
                  type: "VariableDeclarator",
                  id: {
                    type: "Identifier",
                    name
                  },
                  init: (0, import_estree_util_value_to_estree.valueToEstree)(value)
                }
              ]
            }
          }
        ]
      }
    }
  };
}
var import_estree_util_value_to_estree;
var init_remark_exports = __esm({
  "src/mdx-plugins/remark-exports.ts"() {
    "use strict";
    import_estree_util_value_to_estree = require("estree-util-value-to-estree");
  }
});

// src/utils/mdx-options.ts
var mdx_options_exports = {};
__export(mdx_options_exports, {
  getDefaultMDXOptions: () => getDefaultMDXOptions
});
function pluginOption(def, options = []) {
  const list = def(Array.isArray(options) ? options : []).filter(
    Boolean
  );
  if (typeof options === "function") {
    return options(list);
  }
  return list;
}
function getDefaultMDXOptions({
  valueToExport = [],
  rehypeCodeOptions,
  remarkImageOptions,
  remarkHeadingOptions,
  remarkStructureOptions,
  remarkCodeTabOptions,
  remarkNpmOptions,
  _withoutBundler = false,
  ...mdxOptions
}) {
  const mdxExports = [
    "structuredData",
    "frontmatter",
    "lastModified",
    ...valueToExport
  ];
  const remarkPlugins = pluginOption(
    (v) => [
      plugins.remarkGfm,
      [
        plugins.remarkHeading,
        {
          generateToc: false,
          ...remarkHeadingOptions
        }
      ],
      remarkImageOptions !== false && [
        plugins.remarkImage,
        {
          ...remarkImageOptions,
          useImport: _withoutBundler ? false : remarkImageOptions?.useImport
        }
      ],
      "remarkCodeTab" in plugins && remarkCodeTabOptions !== false && [
        plugins.remarkCodeTab,
        remarkCodeTabOptions
      ],
      "remarkNpm" in plugins && remarkNpmOptions !== false && [plugins.remarkNpm, remarkNpmOptions],
      ...v,
      remarkStructureOptions !== false && [
        plugins.remarkStructure,
        remarkStructureOptions
      ],
      [remarkMdxExport, { values: mdxExports }]
    ],
    mdxOptions.remarkPlugins
  );
  const rehypePlugins = pluginOption(
    (v) => [
      rehypeCodeOptions !== false && [plugins.rehypeCode, rehypeCodeOptions],
      ...v,
      plugins.rehypeToc
    ],
    mdxOptions.rehypePlugins
  );
  return {
    ...mdxOptions,
    outputFormat: _withoutBundler ? "function-body" : mdxOptions.outputFormat,
    remarkPlugins,
    rehypePlugins
  };
}
var plugins;
var init_mdx_options = __esm({
  "src/utils/mdx-options.ts"() {
    "use strict";
    plugins = __toESM(require("fumadocs-core/mdx-plugins"), 1);
    init_remark_exports();
  }
});

// src/vite/index.ts
var vite_exports = {};
__export(vite_exports, {
  default: () => mdx
});
module.exports = __toCommonJS(vite_exports);

// src/config/build.ts
function buildConfig(config) {
  const collections = /* @__PURE__ */ new Map();
  let globalConfig = {};
  for (const [k, v] of Object.entries(config)) {
    if (!v) {
      continue;
    }
    if (typeof v === "object" && "type" in v) {
      if (v.type === "docs") {
        collections.set(k, v);
        continue;
      }
      if (v.type === "doc" || v.type === "meta") {
        collections.set(k, v);
        continue;
      }
    }
    if (k === "default" && v) {
      globalConfig = v;
      continue;
    }
    throw new Error(
      `Unknown export "${k}", you can only export collections from source configuration file.`
    );
  }
  const mdxOptionsCache = /* @__PURE__ */ new Map();
  return {
    global: globalConfig,
    collections,
    async getDefaultMDXOptions(mode = "default") {
      const cached = mdxOptionsCache.get(mode);
      if (cached) return cached;
      const input = this.global.mdxOptions;
      async function uncached() {
        const options = typeof input === "function" ? await input() : input;
        const { getDefaultMDXOptions: getDefaultMDXOptions2 } = await Promise.resolve().then(() => (init_mdx_options(), mdx_options_exports));
        if (options?.preset === "minimal") return options;
        return getDefaultMDXOptions2({
          ...options,
          _withoutBundler: mode === "remote"
        });
      }
      const result = uncached();
      mdxOptionsCache.set(mode, result);
      return result;
    }
  };
}

// src/utils/build-mdx.ts
var import_mdx = require("@mdx-js/mdx");

// src/mdx-plugins/remark-include.ts
var import_unist_util_visit = require("unist-util-visit");
var path = __toESM(require("path"), 1);
var fs = __toESM(require("fs/promises"), 1);

// src/utils/fuma-matter.ts
var import_js_yaml = require("js-yaml");
var regex = /^---\r?\n(.+?)\r?\n---\r?\n/s;
function fumaMatter(input) {
  const output = { matter: "", data: {}, content: input };
  const match = regex.exec(input);
  if (!match) {
    return output;
  }
  output.matter = match[0];
  output.content = input.slice(match[0].length);
  const loaded = (0, import_js_yaml.load)(match[1]);
  output.data = loaded ?? {};
  return output;
}

// src/mdx-plugins/remark-include.ts
function flattenNode(node) {
  if ("children" in node)
    return node.children.map((child) => flattenNode(child)).join("");
  if ("value" in node) return node.value;
  return "";
}
function parseSpecifier(specifier) {
  const idx = specifier.lastIndexOf("#");
  if (idx === -1) return { file: specifier };
  return {
    file: specifier.slice(0, idx),
    section: specifier.slice(idx + 1)
  };
}
function extractSection(root, section) {
  for (const node of root.children) {
    if (node.type === "mdxJsxFlowElement" && node.name === "section" && node.attributes.some(
      (attr) => attr.type === "mdxJsxAttribute" && attr.name === "id" && attr.value === section
    )) {
      return {
        type: "root",
        children: node.children
      };
    }
  }
}
function remarkInclude() {
  const TagName = "include";
  async function update(tree, directory, data) {
    const queue = [];
    (0, import_unist_util_visit.visit)(
      tree,
      ["mdxJsxFlowElement", "mdxJsxTextElement"],
      (node, _, parent) => {
        let specifier;
        const params = {};
        if ((node.type === "mdxJsxFlowElement" || node.type === "mdxJsxTextElement") && node.name === TagName) {
          const value = flattenNode(node);
          if (value.length > 0) {
            for (const attr of node.attributes) {
              if (attr.type === "mdxJsxAttribute" && (typeof attr.value === "string" || attr.value === null)) {
                params[attr.name] = attr.value;
              }
            }
            specifier = value;
          }
        }
        if (!specifier) return;
        const { file, section } = parseSpecifier(specifier);
        const targetPath = path.resolve(
          "cwd" in params ? process.cwd() : directory,
          file
        );
        const asCode = params.lang || !file.endsWith(".md") && !file.endsWith(".mdx");
        queue.push(
          fs.readFile(targetPath).then((buffer) => buffer.toString()).then(async (content) => {
            data._compiler?.addDependency(targetPath);
            if (asCode) {
              const lang = params.lang ?? path.extname(file).slice(1);
              Object.assign(node, {
                type: "code",
                lang,
                meta: params.meta,
                value: content,
                data: {}
              });
              return;
            }
            const processor = data._processor ? data._processor.getProcessor(
              targetPath.endsWith(".md") ? "md" : "mdx"
            ) : this;
            let parsed = processor.parse(fumaMatter(content).content);
            if (section) {
              const extracted = extractSection(parsed, section);
              if (!extracted)
                throw new Error(
                  `Cannot find section ${section} in ${file}, make sure you have encapsulated the section in a <section id="${section}"> tag`
                );
              parsed = extracted;
            }
            await update.call(
              processor,
              parsed,
              path.dirname(targetPath),
              data
            );
            Object.assign(
              parent && parent.type === "paragraph" ? parent : node,
              parsed
            );
          }).catch((e) => {
            throw new Error(
              `failed to read file ${targetPath}
${e instanceof Error ? e.message : String(e)}`,
              { cause: e }
            );
          })
        );
        return "skip";
      }
    );
    await Promise.all(queue);
  }
  return async (tree, file) => {
    await update.call(this, tree, path.dirname(file.path), file.data);
  };
}

// src/utils/build-mdx.ts
var cache = /* @__PURE__ */ new Map();
async function buildMDX(cacheKey, source, options) {
  const { filePath, frontmatter, data, _compiler, ...rest } = options;
  function getProcessor(format) {
    const key = `${cacheKey}:${format}`;
    let processor = cache.get(key);
    if (!processor) {
      processor = (0, import_mdx.createProcessor)({
        outputFormat: "program",
        ...rest,
        remarkPlugins: [remarkInclude, ...rest.remarkPlugins ?? []],
        format
      });
      cache.set(key, processor);
    }
    return processor;
  }
  return getProcessor(
    options.format ?? filePath.endsWith(".mdx") ? "mdx" : "md"
  ).process({
    value: source,
    path: filePath,
    data: {
      ...data,
      frontmatter,
      _compiler,
      _processor: {
        getProcessor
      }
    }
  });
}

// src/vite/index.ts
var import_node_querystring = require("querystring");

// src/utils/count-lines.ts
function countLines(s) {
  let num = 0;
  for (const c of s) {
    if (c === "\n") num++;
  }
  return num;
}

// src/utils/validation.ts
var import_picocolors = __toESM(require("picocolors"), 1);
var ValidationError = class extends Error {
  constructor(message, issues) {
    super(
      `${message}:
${issues.map((issue) => `  ${issue.path}: ${issue.message}`).join("\n")}`
    );
    this.title = message;
    this.issues = issues;
  }
  toStringFormatted() {
    return [
      import_picocolors.default.bold(`[MDX] ${this.title}:`),
      ...this.issues.map(
        (issue) => import_picocolors.default.redBright(
          `- ${import_picocolors.default.bold(issue.path?.join(".") ?? "*")}: ${issue.message}`
        )
      )
    ].join("\n");
  }
};
async function validate(schema, data, context, errorMessage) {
  if (typeof schema === "function" && !("~standard" in schema)) {
    schema = schema(context);
  }
  if ("~standard" in schema) {
    const result = await schema["~standard"].validate(
      data
    );
    if (result.issues) {
      throw new ValidationError(errorMessage, result.issues);
    }
    return result.value;
  }
  return data;
}

// src/vite/index.ts
var import_zod = require("zod");

// src/utils/import-formatter.ts
var import_node_path = __toESM(require("path"), 1);
function toImportPath(file, config) {
  const ext = import_node_path.default.extname(file);
  let filename;
  if (ext === ".ts" && config.jsExtension) {
    filename = file.substring(0, file.length - ext.length) + ".js";
  } else if (ext === ".ts") {
    filename = file.substring(0, file.length - ext.length);
  } else {
    filename = file;
  }
  let importPath;
  if ("relativeTo" in config) {
    importPath = import_node_path.default.relative(config.relativeTo, filename);
    if (!import_node_path.default.isAbsolute(importPath) && !importPath.startsWith(".")) {
      importPath = `./${importPath}`;
    }
  } else {
    importPath = import_node_path.default.resolve(filename);
  }
  return importPath.replaceAll(import_node_path.default.sep, "/");
}
function ident(code, tab = 1) {
  return code.split("\n").map((v) => "  ".repeat(tab) + v).join("\n");
}

// src/vite/index.ts
var fs2 = __toESM(require("fs/promises"), 1);
var path4 = __toESM(require("path"), 1);
var import_js_yaml2 = require("js-yaml");

// src/utils/collections.ts
function getSupportedFormats(collection) {
  return {
    doc: ["mdx", "md"],
    meta: ["json", "yaml"]
  }[collection.type];
}
function getGlobPatterns(collection) {
  if (collection.files) return collection.files;
  return [`**/*.{${getSupportedFormats(collection).join(",")}}`];
}

// src/vite/generate-glob.ts
function generateGlob(name, collection) {
  const patterns = mapGlobPatterns(getGlobPatterns(collection));
  const options = {
    query: {
      collection: name
    },
    base: getGlobBase(collection)
  };
  if (collection.type === "meta") {
    options.import = "default";
  }
  return `import.meta.glob(${JSON.stringify(patterns)}, ${JSON.stringify(options, null, 2)})`;
}
function mapGlobPatterns(patterns) {
  return patterns.map((file) => {
    if (file.startsWith("./")) return file;
    if (file.startsWith("/")) return `.${file}`;
    return `./${file}`;
  });
}
function getGlobBase(collection) {
  let dir = collection.dir;
  if (Array.isArray(dir)) {
    if (dir.length !== 1)
      throw new Error(
        `[Fumadocs MDX] Vite Plugin doesn't support multiple \`dir\` for a collection at the moment.`
      );
    dir = dir[0];
  }
  if (!dir.startsWith("./") && !dir.startsWith("/")) {
    return "/" + dir;
  }
  return dir;
}

// src/utils/git-timestamp.ts
var import_node_path2 = __toESM(require("path"), 1);
var import_tinyexec = require("tinyexec");
var cache2 = /* @__PURE__ */ new Map();
async function getGitTimestamp(file) {
  const cached = cache2.get(file);
  if (cached) return cached;
  try {
    const out = await (0, import_tinyexec.x)(
      "git",
      ["log", "-1", '--pretty="%ai"', import_node_path2.default.relative(process.cwd(), file)],
      {
        throwOnError: true
      }
    );
    const time = new Date(out.stdout);
    cache2.set(file, time);
    return time;
  } catch {
    return;
  }
}

// src/vite/index.ts
var onlySchema = import_zod.z.literal(["frontmatter", "all"]);
function mdx(config, options = {}) {
  const { generateIndexFile = true, configPath = "source.config.ts" } = options;
  const loaded = buildConfig(config);
  async function transformMeta(path5, query, value) {
    const isJson = path5.endsWith(".json");
    const parsed = (0, import_node_querystring.parse)(query);
    const collection = parsed.collection ? loaded.collections.get(parsed.collection) : void 0;
    if (!collection) return null;
    let schema;
    switch (collection.type) {
      case "meta":
        schema = collection.schema;
        break;
      case "docs":
        schema = collection.meta.schema;
        break;
    }
    if (!schema) return null;
    let data;
    try {
      data = isJson ? JSON.parse(value) : (0, import_js_yaml2.load)(value);
    } catch {
      return null;
    }
    const out = await validate(
      schema,
      data,
      { path: path5, source: value },
      `invalid data in ${path5}`
    );
    return {
      code: isJson ? JSON.stringify(out) : `export default ${JSON.stringify(out)}`,
      map: null
    };
  }
  async function transformContent(file, query, value) {
    const matter = fumaMatter(value);
    const isDevelopment = this.environment.mode === "dev";
    const parsed = (0, import_node_querystring.parse)(query);
    const collection = parsed.collection ? loaded.collections.get(parsed.collection) : void 0;
    const only = parsed.only ? onlySchema.parse(parsed.only) : "all";
    let schema;
    let mdxOptions;
    switch (collection?.type) {
      case "doc":
        mdxOptions = collection.mdxOptions;
        schema = collection.schema;
        break;
      case "docs":
        mdxOptions = collection.docs.mdxOptions;
        schema = collection.docs.schema;
        break;
    }
    if (schema) {
      matter.data = await validate(
        schema,
        matter.data,
        {
          source: value,
          path: file
        },
        `invalid frontmatter in ${file}`
      );
    }
    if (only === "frontmatter") {
      return {
        code: `export const frontmatter = ${JSON.stringify(matter.data)}`,
        map: null
      };
    }
    const data = {};
    if (loaded.global.lastModifiedTime === "git") {
      data.lastModified = (await getGitTimestamp(file))?.getTime();
    }
    mdxOptions ??= await loaded.getDefaultMDXOptions();
    const lineOffset = isDevelopment ? countLines(matter.matter) : 0;
    const compiled = await buildMDX(
      parsed.collection ?? "global",
      "\n".repeat(lineOffset) + matter.content,
      {
        development: isDevelopment,
        ...mdxOptions,
        data,
        filePath: file,
        frontmatter: matter.data,
        _compiler: {
          addDependency: (file2) => {
            this.addWatchFile(file2);
          }
        }
      }
    );
    return {
      code: String(compiled.value),
      map: compiled.map
    };
  }
  return {
    name: "fumadocs-mdx",
    // needed, otherwise other plugins will be executed before our `transform`.
    enforce: "pre",
    async buildStart() {
      if (!generateIndexFile) return;
      console.log("[Fumadocs MDX] Generating index files");
      const outdir = process.cwd();
      const outFile = "source.generated.ts";
      const lines = [
        '/// <reference types="vite/client" />',
        `import { fromConfig } from 'fumadocs-mdx/runtime/vite';`,
        `import type * as Config from '${toImportPath(configPath, {
          relativeTo: outdir,
          jsExtension: typeof generateIndexFile === "object" ? generateIndexFile.addJsExtension : void 0
        })}';`,
        "",
        `export const create = fromConfig<typeof Config>();`
      ];
      function docs(name, collection) {
        const args = [
          ident(`doc: ${generateGlob(name, collection.docs)}`),
          ident(`meta: ${generateGlob(name, collection.meta)}`)
        ].join(",\n");
        return `export const ${name} = create.docs("${name}", {
${args}
});`;
      }
      function doc(name, collection) {
        return `export const ${name} = create.doc("${name}", ${generateGlob(name, collection)});`;
      }
      function meta(name, collection) {
        return `export const ${name} = create.meta("${name}", ${generateGlob(name, collection)});`;
      }
      for (const [name, collection] of loaded.collections.entries()) {
        lines.push("");
        if (collection.type === "docs") {
          lines.push(docs(name, collection));
        } else if (collection.type === "meta") {
          lines.push(meta(name, collection));
        } else {
          lines.push(doc(name, collection));
        }
      }
      await fs2.writeFile(path4.join(outdir, outFile), lines.join("\n"));
    },
    async transform(value, id) {
      const [file, query = ""] = id.split("?");
      const ext = path4.extname(file);
      try {
        if ([".yaml", ".json"].includes(ext))
          return await transformMeta(file, query, value);
        if ([".md", ".mdx"].includes(ext))
          return await transformContent.call(this, file, query, value);
      } catch (e) {
        if (e instanceof ValidationError) {
          throw new Error(e.toStringFormatted());
        }
        throw e;
      }
    }
  };
}
