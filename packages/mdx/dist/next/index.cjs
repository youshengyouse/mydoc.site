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

// src/map/watcher.ts
var watcher_exports = {};
__export(watcher_exports, {
  watcher: () => watcher
});
function watcher(configPath, config, ignored) {
  const watcher2 = new import_chokidar.FSWatcher({
    ignoreInitial: true,
    persistent: true,
    ignored
  });
  watcher2.add(configPath);
  for (const collection of config.collections.values()) {
    if (collection.type === "docs") {
      watcher2.add(collection.docs.dir);
      watcher2.add(collection.meta.dir);
    } else {
      watcher2.add(collection.dir);
    }
  }
  return watcher2;
}
var import_chokidar;
var init_watcher = __esm({
  "src/map/watcher.ts"() {
    "use strict";
    import_chokidar = require("chokidar");
  }
});

// src/next/index.ts
var next_exports = {};
__export(next_exports, {
  createMDX: () => createMDX,
  postInstall: () => postInstall,
  start: () => start
});
module.exports = __toCommonJS(next_exports);

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
function findConfigFile() {
  return path.resolve("source.config.ts");
}
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

// src/map/index.ts
var path5 = __toESM(require("path"), 1);
var fs3 = __toESM(require("fs/promises"), 1);

// src/map/generate.ts
var path4 = __toESM(require("path"), 1);
var fs2 = __toESM(require("fs/promises"), 1);
var import_tinyglobby = require("tinyglobby");

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

// src/map/file-cache.ts
var import_lru_cache = require("lru-cache");
var map = new import_lru_cache.LRUCache({
  max: 200
});
var fileCache = {
  read(namespace, path7) {
    return map.get(`${namespace}.${path7}`);
  },
  write(namespace, path7, data) {
    map.set(`${namespace}.${path7}`, data);
  },
  removeCache(path7) {
    for (const key of map.keys()) {
      const keyPath = key.slice(key.indexOf(".") + 1);
      if (keyPath === path7) map.delete(key);
    }
  }
};

// src/map/generate.ts
var import_js_yaml2 = require("js-yaml");

// src/utils/git-timestamp.ts
var import_node_path = __toESM(require("path"), 1);
var import_tinyexec = require("tinyexec");
var cache2 = /* @__PURE__ */ new Map();
async function getGitTimestamp(file) {
  const cached = cache2.get(file);
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
    cache2.set(file, time);
    return time;
  } catch {
    return;
  }
}

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

// src/utils/import-formatter.ts
var import_node_path2 = __toESM(require("path"), 1);
function getImportCode(info) {
  const specifier = JSON.stringify(info.specifier);
  if (info.type === "default") return `import ${info.name} from ${specifier}`;
  if (info.type === "namespace")
    return `import * as ${info.name} from ${specifier}`;
  if (info.type === "named") {
    const names = info.names.map(
      (name) => Array.isArray(name) ? `${name[0]} as ${name[1]}` : name
    );
    return `import { ${names.join(", ")} } from ${specifier}`;
  }
  return `import ${specifier}`;
}
function toImportPath(file, config) {
  const ext = import_node_path2.default.extname(file);
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
    importPath = import_node_path2.default.relative(config.relativeTo, filename);
    if (!import_node_path2.default.isAbsolute(importPath) && !importPath.startsWith(".")) {
      importPath = `./${importPath}`;
    }
  } else {
    importPath = import_node_path2.default.resolve(filename);
  }
  return importPath.replaceAll(import_node_path2.default.sep, "/");
}

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
function isFileSupported(filePath, collection) {
  for (const format of getSupportedFormats(collection)) {
    if (filePath.endsWith(`.${format}`)) return true;
  }
  return false;
}

// src/map/generate.ts
async function readFileWithCache(file) {
  const cached = fileCache.read("read-file", file);
  if (cached) return cached;
  return (await fs2.readFile(file)).toString();
}
async function generateJS(configPath, config, importPath, configHash = false) {
  let asyncInit = false;
  const lines = [
    getImportCode({
      type: "named",
      names: ["_runtime"],
      specifier: "fumadocs-mdx"
    }),
    getImportCode({
      type: "namespace",
      specifier: toImportPath(configPath, importPath),
      name: "_source"
    })
  ];
  const entries = Array.from(config.collections.entries());
  async function getDocEntries(collectionName, files) {
    const items = files.map(async (file, i) => {
      const importId = `${collectionName}_${i}`;
      const params = [`collection=${collectionName}`];
      if (configHash) {
        params.push(`hash=${configHash}`);
      }
      lines.unshift(
        getImportCode({
          type: "namespace",
          name: importId,
          specifier: `${toImportPath(file.absolutePath, importPath)}?${params.join("&")}`
        })
      );
      return `{ info: ${JSON.stringify(file)}, data: ${importId} }`;
    });
    return Promise.all(items);
  }
  async function getMetaEntries(collection, files) {
    const items = files.map(async (file) => {
      const source = await readFileWithCache(file.absolutePath).catch(() => "");
      let data = source.length === 0 ? {} : parseMetaEntry(file.absolutePath, source);
      if (collection?.schema) {
        data = await validate(
          collection.schema,
          data,
          {
            source,
            path: file.absolutePath
          },
          `invalid data in ${file.absolutePath}`
        );
      }
      return JSON.stringify({
        info: file,
        data
      });
    });
    return Promise.all(items);
  }
  async function getAsyncEntries(collection, files) {
    if (!asyncInit) {
      lines.unshift(
        getImportCode({
          type: "named",
          specifier: "fumadocs-mdx/runtime/async",
          names: ["_runtimeAsync", "buildConfig"]
        }),
        "const _sourceConfig = buildConfig(_source)"
      );
      asyncInit = true;
    }
    const entries2 = files.map(async (file) => {
      const parsed = fumaMatter(
        await readFileWithCache(file.absolutePath).catch(() => "")
      );
      let data = parsed.data;
      if (collection.schema) {
        data = await validate(
          collection.schema,
          parsed.data,
          { path: file.absolutePath, source: parsed.content },
          `invalid frontmatter in ${file.absolutePath}`
        );
      }
      let lastModified;
      if (config.global?.lastModifiedTime === "git") {
        lastModified = await getGitTimestamp(file.absolutePath);
      }
      return JSON.stringify({
        info: file,
        lastModified,
        data,
        content: { body: parsed.content, matter: parsed.matter }
      });
    });
    return Promise.all(entries2);
  }
  const declares = entries.map(async ([k, collection]) => {
    if (collection.type === "docs") {
      const docs = await getCollectionFiles(collection.docs);
      const metas = await getCollectionFiles(collection.meta);
      const metaEntries = (await getMetaEntries(collection.meta, metas)).join(
        ", "
      );
      if (collection.docs.async) {
        const docsEntries2 = (await getAsyncEntries(collection.docs, docs)).join(
          ", "
        );
        return `export const ${k} = _runtimeAsync.docs<typeof _source.${k}>([${docsEntries2}], [${metaEntries}], "${k}", _sourceConfig)`;
      }
      const docsEntries = (await getDocEntries(k, docs)).join(", ");
      return `export const ${k} = _runtime.docs<typeof _source.${k}>([${docsEntries}], [${metaEntries}])`;
    }
    const files = await getCollectionFiles(collection);
    if (collection.type === "doc" && collection.async) {
      return `export const ${k} = _runtimeAsync.doc<typeof _source.${k}>([${(await getAsyncEntries(collection, files)).join(", ")}], "${k}", _sourceConfig)`;
    }
    return `export const ${k} = _runtime.${collection.type}<typeof _source.${k}>([${(await getDocEntries(k, files)).join(", ")}]);`;
  });
  const resolvedDeclares = await Promise.all(declares);
  return [
    `// @ts-nocheck -- skip type checking`,
    ...lines,
    ...resolvedDeclares
  ].join("\n");
}
async function getCollectionFiles(collection) {
  const files = /* @__PURE__ */ new Map();
  const dirs = Array.isArray(collection.dir) ? collection.dir : [collection.dir];
  const patterns = getGlobPatterns(collection);
  await Promise.all(
    dirs.map(async (dir) => {
      const result = await (0, import_tinyglobby.glob)(patterns, {
        cwd: path4.resolve(dir),
        absolute: true
      });
      for (const item of result) {
        if (!isFileSupported(item, collection)) continue;
        files.set(item, {
          path: path4.relative(dir, item),
          absolutePath: item
        });
      }
    })
  );
  return Array.from(files.values());
}
function parseMetaEntry(file, content) {
  const extname2 = path4.extname(file);
  try {
    if (extname2 === ".json") return JSON.parse(content);
    if (extname2 === ".yaml") return (0, import_js_yaml2.load)(content);
  } catch (e) {
    throw new Error(`Failed to parse meta file: ${file}.`, {
      cause: e
    });
  }
  throw new Error(`Unknown meta file format: ${extname2}, in ${file}.`);
}

// src/map/index.ts
async function start(dev, configPath, outDir) {
  let configHash = await getConfigHash(configPath);
  let config = await loadConfig(configPath, outDir, configHash, true);
  const outPath = path5.resolve(outDir, `index.ts`);
  async function updateMapFile() {
    const start2 = performance.now();
    try {
      await fs3.writeFile(
        outPath,
        await generateJS(
          configPath,
          config,
          { relativeTo: outDir },
          configHash
        )
      );
    } catch (err) {
      if (err instanceof ValidationError) {
        console.error(err.toStringFormatted());
      } else {
        console.error(err);
      }
    }
    console.log(`[MDX] updated map file in ${performance.now() - start2}ms`);
  }
  await updateMapFile();
  if (dev) {
    const { watcher: watcher2 } = await Promise.resolve().then(() => (init_watcher(), watcher_exports));
    const instance = watcher2(configPath, config, [outPath]);
    instance.on("ready", () => {
      console.log("[MDX] started dev server");
    });
    instance.on("all", (event, file) => {
      if (typeof file !== "string") return;
      const absolutePath = path5.resolve(file);
      const onUpdate = async () => {
        const isConfigFile = absolutePath === configPath;
        if (isConfigFile) {
          configHash = await getConfigHash(configPath);
          config = await loadConfig(configPath, outDir, configHash, true);
        }
        if (event === "change") fileCache.removeCache(absolutePath);
        await updateMapFile();
      };
      void onUpdate();
    });
    process.on("exit", () => {
      console.log("[MDX] closing dev server");
      void instance.close();
    });
  }
}

// src/next/create.ts
var import_node_fs = require("fs");
var defaultPageExtensions = ["mdx", "md", "jsx", "js", "tsx", "ts"];
var isTurboExperimental;
try {
  const content = (0, import_node_fs.readFileSync)("./node_modules/next/package.json").toString();
  const version = JSON.parse(content).version;
  isTurboExperimental = version.startsWith("15.0.") || version.startsWith("15.1.") || version.startsWith("15.2.");
} catch {
  isTurboExperimental = false;
}
function createMDX({
  configPath = findConfigFile(),
  outDir = ".source"
} = {}) {
  const isDev = process.argv.includes("dev");
  const isBuild = process.argv.includes("build");
  if ((isDev || isBuild) && process.env._FUMADOCS_MDX !== "1") {
    process.env._FUMADOCS_MDX = "1";
    void start(isDev, configPath, outDir);
  }
  return (nextConfig = {}) => {
    const mdxLoaderOptions = {
      configPath,
      outDir
    };
    const turbo = {
      ...nextConfig.experimental?.turbo,
      ...nextConfig.turbopack,
      rules: {
        ...nextConfig.experimental?.turbo?.rules,
        ...nextConfig.turbopack?.rules,
        "*.{md,mdx}": {
          loaders: [
            {
              loader: "fumadocs-mdx/loader-mdx",
              options: mdxLoaderOptions
            }
          ],
          as: "*.js"
        }
      }
    };
    const updated = {
      ...nextConfig,
      pageExtensions: nextConfig.pageExtensions ?? defaultPageExtensions,
      webpack: (config, options) => {
        config.resolve ||= {};
        config.module ||= {};
        config.module.rules ||= [];
        config.module.rules.push({
          test: /\.mdx?$/,
          use: [
            options.defaultLoaders.babel,
            {
              loader: "fumadocs-mdx/loader-mdx",
              options: mdxLoaderOptions
            }
          ]
        });
        config.plugins ||= [];
        return nextConfig.webpack?.(config, options) ?? config;
      }
    };
    if (isTurboExperimental) {
      updated.experimental = { ...updated.experimental, turbo };
    } else {
      updated.turbopack = turbo;
    }
    return updated;
  };
}

// src/postinstall.ts
var path6 = __toESM(require("path"), 1);
var fs4 = __toESM(require("fs/promises"), 1);
async function postInstall(configPath = findConfigFile(), outDir = ".source") {
  const jsOut = path6.resolve(outDir, "index.ts");
  const hash = await getConfigHash(configPath);
  const config = await loadConfig(configPath, outDir, hash, true);
  await fs4.rm(path6.dirname(jsOut), { recursive: true });
  await fs4.mkdir(path6.dirname(jsOut), { recursive: true });
  await fs4.writeFile(
    jsOut,
    await generateJS(configPath, config, { relativeTo: outDir }, hash)
  );
  console.log("[MDX] types generated");
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createMDX,
  postInstall,
  start
});
