"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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

// src/config/zod-3.ts
var zod_3_exports = {};
__export(zod_3_exports, {
  defineCollections: () => defineCollections,
  defineConfig: () => defineConfig,
  defineDocs: () => defineDocs,
  frontmatterSchema: () => frontmatterSchema2,
  getDefaultMDXOptions: () => getDefaultMDXOptions,
  metaSchema: () => metaSchema2,
  remarkInclude: () => remarkInclude
});
module.exports = __toCommonJS(zod_3_exports);
var import_v3 = require("zod/v3");

// src/config/zod-4.ts
var import_zod = require("zod");
var metaSchema = import_zod.z.object({
  title: import_zod.z.string().optional(),
  pages: import_zod.z.array(import_zod.z.string()).optional(),
  description: import_zod.z.string().optional(),
  root: import_zod.z.boolean().optional(),
  defaultOpen: import_zod.z.boolean().optional(),
  icon: import_zod.z.string().optional()
});
var frontmatterSchema = import_zod.z.object({
  title: import_zod.z.string(),
  description: import_zod.z.string().optional(),
  icon: import_zod.z.string().optional(),
  full: import_zod.z.boolean().optional(),
  // Fumadocs OpenAPI generated
  _openapi: import_zod.z.looseObject({}).optional()
});

// src/config/define.ts
function defineCollections(options) {
  return options;
}
function defineDocs(options) {
  if (!options)
    console.warn(
      "[`source.config.ts`] Deprecated: please pass options to `defineDocs()` and specify a `dir`."
    );
  const dir = options?.dir ?? "content/docs";
  return {
    type: "docs",
    dir,
    docs: defineCollections({
      type: "doc",
      dir,
      schema: frontmatterSchema,
      ...options?.docs
    }),
    meta: defineCollections({
      type: "meta",
      dir,
      schema: metaSchema,
      ...options?.meta
    })
  };
}
function defineConfig(config = {}) {
  return config;
}

// src/utils/mdx-options.ts
var plugins = __toESM(require("fumadocs-core/mdx-plugins"), 1);

// src/mdx-plugins/remark-exports.ts
var import_estree_util_value_to_estree = require("estree-util-value-to-estree");
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

// src/utils/mdx-options.ts
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

// src/config/zod-3.ts
var metaSchema2 = import_v3.z.object({
  title: import_v3.z.string().optional(),
  pages: import_v3.z.array(import_v3.z.string()).optional(),
  description: import_v3.z.string().optional(),
  root: import_v3.z.boolean().optional(),
  defaultOpen: import_v3.z.boolean().optional(),
  icon: import_v3.z.string().optional()
});
var frontmatterSchema2 = import_v3.z.object({
  title: import_v3.z.string(),
  description: import_v3.z.string().optional(),
  icon: import_v3.z.string().optional(),
  full: import_v3.z.boolean().optional(),
  // Fumadocs OpenAPI generated
  _openapi: import_v3.z.object({}).passthrough().optional()
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  defineCollections,
  defineConfig,
  defineDocs,
  frontmatterSchema,
  getDefaultMDXOptions,
  metaSchema,
  remarkInclude
});
