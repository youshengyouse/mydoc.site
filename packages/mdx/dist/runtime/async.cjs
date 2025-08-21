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

// src/runtime/async.ts
var async_exports = {};
__export(async_exports, {
  _runtimeAsync: () => _runtimeAsync,
  buildConfig: () => buildConfig
});
module.exports = __toCommonJS(async_exports);

// src/runtime/index.ts
var import_node_fs = __toESM(require("fs"), 1);
var cache = /* @__PURE__ */ new Map();
var _runtime = {
  doc(files) {
    return files.map((file) => {
      const { default: body, frontmatter, ...exports2 } = file.data;
      return {
        body,
        ...exports2,
        ...frontmatter,
        _file: file.info,
        _exports: file.data,
        get content() {
          const path2 = this._file.absolutePath;
          const cached = cache.get(path2);
          if (cached) return cached;
          const content = import_node_fs.default.readFileSync(path2).toString();
          cache.set(path2, content);
          return content;
        }
      };
    });
  },
  meta(files) {
    return files.map((file) => {
      return {
        ...file.data,
        _file: file.info
      };
    });
  },
  docs(docs, metas) {
    const parsedDocs = this.doc(docs);
    const parsedMetas = this.meta(metas);
    return {
      docs: parsedDocs,
      meta: parsedMetas,
      toFumadocsSource() {
        return createMDXSource(parsedDocs, parsedMetas);
      }
    };
  }
};
function createMDXSource(docs, meta = []) {
  return {
    files: () => resolveFiles({
      docs,
      meta
    })
  };
}
function resolveFiles({ docs, meta }) {
  const outputs = [];
  for (const entry of docs) {
    outputs.push({
      type: "page",
      absolutePath: entry._file.absolutePath,
      path: entry._file.path,
      data: entry
    });
  }
  for (const entry of meta) {
    outputs.push({
      type: "meta",
      absolutePath: entry._file.absolutePath,
      path: entry._file.path,
      data: entry
    });
  }
  return outputs;
}

// src/utils/build-mdx.ts
var import_mdx = require("@mdx-js/mdx");

// src/mdx-plugins/remark-include.ts
var import_unist_util_visit = require("unist-util-visit");
var path = __toESM(require("path"), 1);
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
        const targetPath = path.resolve(
          "cwd" in params ? process.cwd() : directory,
          file
        );
        const asCode = params.lang || !file.endsWith(".md") && !file.endsWith(".mdx");
        queue.push(
          fs2.readFile(targetPath).then((buffer) => buffer.toString()).then(async (content) => {
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

// src/runtime/async.ts
var import_client = require("@fumadocs/mdx-remote/client");
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

// src/runtime/async.ts
async function getOptions(config, collection) {
  const col = config.collections.get(collection);
  if (col?.type === "doc" && col.mdxOptions) return col.mdxOptions;
  if (col?.type === "docs" && col.docs.mdxOptions) return col.docs.mdxOptions;
  return config.getDefaultMDXOptions("remote");
}
var _runtimeAsync = {
  doc(files, collection, config) {
    const initMdxOptions = getOptions(config, collection);
    return files.map(({ info: file, data, content, lastModified }) => {
      return {
        ...data,
        _file: file,
        get content() {
          return `${content.matter}${content.body}`;
        },
        async load() {
          const mdxOptions = await initMdxOptions;
          const out = await buildMDX(collection, content.body, {
            ...mdxOptions,
            development: false,
            frontmatter: data,
            data: {
              lastModified
            },
            filePath: file.absolutePath
          });
          const executed = await (0, import_client.executeMdx)(String(out), {
            baseUrl: (0, import_node_url.pathToFileURL)(file.absolutePath)
          });
          return {
            body: executed.default,
            toc: executed.toc,
            lastModified,
            structuredData: out.data.structuredData,
            _exports: executed
          };
        }
      };
    });
  },
  docs(docs, metas, collection, config) {
    const parsedDocs = this.doc(docs, collection, config);
    const parsedMetas = _runtime.meta(metas);
    return {
      docs: parsedDocs,
      meta: parsedMetas,
      toFumadocsSource() {
        return createMDXSource(parsedDocs, parsedMetas);
      }
    };
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  _runtimeAsync,
  buildConfig
});
