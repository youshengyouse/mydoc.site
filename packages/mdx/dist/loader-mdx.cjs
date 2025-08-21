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

// src/loader-mdx.ts
var loader_mdx_exports = {};
__export(loader_mdx_exports, {
  default: () => loader
});
module.exports = __toCommonJS(loader_mdx_exports);
var path4 = __toESM(require("path"), 1);
var import_node_querystring = require("querystring");

// src/utils/config.ts
var fs = __toESM(require("fs/promises"), 1);
var path = __toESM(require("path"), 1);
var import_node_url = require("url");

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

// src/utils/config.ts
var cache = null;
async function isZod3() {
  try {
    const content = JSON.parse(
      (await fs.readFile("node_modules/zod/package.json")).toString()
    );
    const version = content.version;
    return typeof version === "string" && version.startsWith("3.");
  } catch {
    return false;
  }
}
function createCompatZodPlugin() {
  return {
    name: "replace-zod-import",
    async setup(build) {
      const usingZod3 = await isZod3();
      if (!usingZod3) return;
      console.warn(
        "[Fumadocs MDX] Noticed Zod v3 in your node_modules, we recommend upgrading to Zod v4 for better compatibility."
      );
      build.onResolve({ filter: /^fumadocs-mdx\/config$/ }, () => {
        return {
          path: "fumadocs-mdx/config/zod-3",
          external: true
        };
      });
    }
  };
}
async function compileConfig(configPath, outDir) {
  const { build } = await import("esbuild");
  const transformed = await build({
    entryPoints: [{ in: configPath, out: "source.config" }],
    bundle: true,
    outdir: outDir,
    target: "node20",
    write: true,
    platform: "node",
    format: "esm",
    packages: "external",
    plugins: [createCompatZodPlugin()],
    outExtension: {
      ".js": ".mjs"
    },
    allowOverwrite: true
  });
  if (transformed.errors.length > 0) {
    throw new Error("failed to compile configuration file");
  }
}
async function loadConfig(configPath, outDir, hash, build = false) {
  if (cache && cache.hash === hash) {
    return await cache.config;
  }
  if (build) await compileConfig(configPath, outDir);
  const url = (0, import_node_url.pathToFileURL)(path.resolve(outDir, "source.config.mjs"));
  const config = import(`${url.href}?hash=${hash}`).then((loaded) => {
    return buildConfig(
      // every call to `loadConfig` will cause the previous cache to be ignored
      loaded
    );
  });
  cache = { config, hash };
  return await config;
}
async function getConfigHash(configPath) {
  const stats = await fs.stat(configPath).catch(() => void 0);
  if (stats) {
    return stats.mtime.getTime().toString();
  }
  throw new Error("Cannot find config file");
}

// src/utils/build-mdx.ts
var import_mdx = require("@mdx-js/mdx");

// src/mdx-plugins/remark-include.ts
var import_unist_util_visit = require("unist-util-visit");
var path2 = __toESM(require("path"), 1);
var fs2 = __toESM(require("fs/promises"), 1);

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
        const targetPath = path2.resolve(
          "cwd" in params ? process.cwd() : directory,
          file
        );
        const asCode = params.lang || !file.endsWith(".md") && !file.endsWith(".mdx");
        queue.push(
          fs2.readFile(targetPath).then((buffer) => buffer.toString()).then(async (content) => {
            data._compiler?.addDependency(targetPath);
            if (asCode) {
              const lang = params.lang ?? path2.extname(file).slice(1);
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
              path2.dirname(targetPath),
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
    await update.call(this, tree, path2.dirname(file.path), file.data);
  };
}

// src/utils/build-mdx.ts
var cache2 = /* @__PURE__ */ new Map();
async function buildMDX(cacheKey, source, options) {
  const { filePath, frontmatter, data, _compiler, ...rest } = options;
  function getProcessor(format) {
    const key = `${cacheKey}:${format}`;
    let processor = cache2.get(key);
    if (!processor) {
      processor = (0, import_mdx.createProcessor)({
        outputFormat: "program",
        ...rest,
        remarkPlugins: [remarkInclude, ...rest.remarkPlugins ?? []],
        format
      });
      cache2.set(key, processor);
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

// src/utils/git-timestamp.ts
var import_node_path = __toESM(require("path"), 1);
var import_tinyexec = require("tinyexec");
var cache3 = /* @__PURE__ */ new Map();
async function getGitTimestamp(file) {
  const cached = cache3.get(file);
  if (cached) return cached;
  try {
    const out = await (0, import_tinyexec.x)(
      "git",
      ["log", "-1", '--pretty="%ai"', import_node_path.default.relative(process.cwd(), file)],
      {
        throwOnError: true
      }
    );
    const time = new Date(out.stdout);
    cache3.set(file, time);
    return time;
  } catch {
    return;
  }
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

// src/utils/count-lines.ts
function countLines(s) {
  let num = 0;
  for (const c of s) {
    if (c === "\n") num++;
  }
  return num;
}

// src/loader-mdx.ts
async function loader(source, callback) {
  this.cacheable(true);
  const context = this.context;
  const filePath = this.resourcePath;
  const { configPath, outDir } = this.getOptions();
  const matter = fumaMatter(source);
  const {
    hash: configHash = await getConfigHash(configPath),
    collection: collectionId
  } = (0, import_node_querystring.parse)(this.resourceQuery.slice(1));
  const config = await loadConfig(configPath, outDir, configHash);
  let collection = collectionId !== void 0 ? config.collections.get(collectionId) : void 0;
  if (collection && collection.type === "docs") collection = collection.docs;
  if (collection && collection.type !== "doc") {
    collection = void 0;
  }
  let data = matter.data;
  const mdxOptions = collection?.mdxOptions ?? await config.getDefaultMDXOptions();
  if (collection?.schema) {
    try {
      data = await validate(
        collection.schema,
        matter.data,
        {
          source,
          path: filePath
        },
        `invalid frontmatter in ${filePath}`
      );
    } catch (e) {
      if (e instanceof ValidationError) {
        return callback(new Error(e.toStringFormatted()));
      }
      return callback(e);
    }
  }
  let timestamp;
  if (config.global?.lastModifiedTime === "git") {
    timestamp = (await getGitTimestamp(filePath))?.getTime();
  }
  try {
    const lineOffset = "\n".repeat(
      this.mode === "development" ? countLines(matter.matter) : 0
    );
    const file = await buildMDX(
      `${configHash}:${collectionId ?? "global"}`,
      lineOffset + matter.content,
      {
        development: this.mode === "development",
        ...mdxOptions,
        filePath,
        frontmatter: data,
        data: {
          lastModified: timestamp
        },
        _compiler: this
      }
    );
    callback(void 0, String(file.value), file.map ?? void 0);
  } catch (error) {
    if (!(error instanceof Error)) throw error;
    const fpath = path4.relative(context, filePath);
    error.message = `${fpath}:${error.name}: ${error.message}`;
    callback(error);
  }
}
