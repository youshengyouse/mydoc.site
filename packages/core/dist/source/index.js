import {
  joinPath,
  slash,
  splitPath
} from "../chunk-3JSIVMCJ.js";
import {
  basename,
  dirname,
  extname,
  parseFilePath,
  parseFolderPath
} from "../chunk-7GNSIKII.js";
import "../chunk-JSBRDJBE.js";

// src/source/page-tree/legacy.ts
function legacyTransformer(transformer) {
  return {
    file(node, file) {
      if (!transformer.attachFile) return node;
      const content = file ? this.localeStorage?.read(file) ?? this.storage.read(file) : void 0;
      return transformer.attachFile(
        node,
        content?.format === "page" ? content : void 0
      );
    },
    folder(node, folderPath, metaPath) {
      if (!transformer.attachFolder) return node;
      const files = this.storage.readDir(folderPath) ?? [];
      const meta = metaPath ? this.localeStorage?.read(metaPath) ?? this.storage.read(metaPath) : void 0;
      return transformer.attachFolder(
        node,
        {
          children: files.flatMap(
            (file) => this.localeStorage?.read(file) ?? this.storage.read(file) ?? []
          )
        },
        meta?.format === "meta" ? meta : void 0
      );
    },
    separator(node) {
      if (!transformer.attachSeparator) return node;
      return transformer.attachSeparator(node);
    }
  };
}

// src/source/page-tree/transformer-fallback.ts
function transformerFallback() {
  const addedFiles = /* @__PURE__ */ new Set();
  return {
    name: "fumadocs:fallback",
    root(root) {
      const isolatedStorage = new FileSystem();
      for (const file of this.storage.getFiles()) {
        if (addedFiles.has(file)) continue;
        const content = this.localeStorage?.read(file) ?? this.storage.read(file);
        if (!content) continue;
        isolatedStorage.write(file, content);
      }
      if (isolatedStorage.getFiles().length === 0) return root;
      root.fallback = this.builder.build({
        ...this.options,
        id: `fallback-${root.$id ?? ""}`,
        storage: isolatedStorage,
        generateFallback: false
      });
      addedFiles.clear();
      return root;
    },
    file(node, file) {
      if (file) addedFiles.add(file);
      return node;
    },
    folder(node, _dir, metaPath) {
      if (metaPath) addedFiles.add(metaPath);
      return node;
    }
  };
}

// src/source/page-tree/builder.ts
var group = /^\((?<name>.+)\)$/;
var link = /^(?:\[(?<icon>[^\]]+)])?\[(?<name>[^\]]+)]\((?<url>[^)]+)\)$/;
var separator = /^---(?:\[(?<icon>[^\]]+)])?(?<name>.+)---|^---$/;
var rest = "...";
var restReversed = "z...a";
var extractPrefix = "...";
var excludePrefix = "!";
function buildAll(paths, ctx, filter, reversed = false) {
  const output = [];
  const sortedPaths = (filter ? paths.filter(filter) : [...paths]).sort(
    (a, b) => a.localeCompare(b) * (reversed ? -1 : 1)
  );
  for (const path of sortedPaths) {
    const fileNode = buildFileNode(path, ctx);
    if (!fileNode) continue;
    if (basename(path, extname(path)) === "index") output.unshift(fileNode);
    else output.push(fileNode);
  }
  for (const dir of sortedPaths) {
    const dirNode = buildFolderNode(dir, false, ctx);
    if (dirNode) output.push(dirNode);
  }
  return output;
}
function resolveFolderItem(folderPath, item, ctx, idx, restNodePaths) {
  if (item === rest || item === restReversed) return item;
  const { options, resolveName } = ctx;
  let match = separator.exec(item);
  if (match?.groups) {
    let node = {
      $id: `${folderPath}#${idx}`,
      type: "separator",
      icon: options.resolveIcon?.(match.groups.icon),
      name: match.groups.name
    };
    for (const transformer of ctx.transformers) {
      if (!transformer.separator) continue;
      node = transformer.separator.call(ctx, node);
    }
    return [node];
  }
  match = link.exec(item);
  if (match?.groups) {
    const { icon, url, name } = match.groups;
    const isRelative = url.startsWith("/") || url.startsWith("#") || url.startsWith(".");
    let node = {
      type: "page",
      icon: options.resolveIcon?.(icon),
      name,
      url,
      external: !isRelative
    };
    for (const transformer of ctx.transformers) {
      if (!transformer.file) continue;
      node = transformer.file.call(ctx, node);
    }
    return [node];
  }
  const isExcept = item.startsWith(excludePrefix);
  const isExtract = !isExcept && item.startsWith(extractPrefix);
  let filename = item;
  if (isExcept) {
    filename = item.slice(excludePrefix.length);
  } else if (isExtract) {
    filename = item.slice(extractPrefix.length);
  }
  const path = resolveName(joinPath(folderPath, filename), "page");
  restNodePaths.delete(path);
  if (isExcept) return [];
  const dirNode = buildFolderNode(path, false, ctx);
  if (dirNode) {
    return isExtract ? dirNode.children : [dirNode];
  }
  const fileNode = buildFileNode(path, ctx);
  return fileNode ? [fileNode] : [];
}
function buildFolderNode(folderPath, isGlobalRoot, ctx) {
  const { storage, localeStorage, options, resolveName, transformers } = ctx;
  const files = storage.readDir(folderPath);
  if (!files) return;
  const metaPath = resolveName(joinPath(folderPath, "meta"), "meta");
  const indexPath = resolveName(joinPath(folderPath, "index"), "page");
  let meta = localeStorage?.read(metaPath) ?? storage.read(metaPath);
  if (meta?.format !== "meta") {
    meta = void 0;
  }
  let indexDisabled = meta?.data.root ?? isGlobalRoot;
  let children;
  if (!meta?.data.pages) {
    children = buildAll(
      files,
      ctx,
      (file) => indexDisabled || file !== indexPath
    );
  } else {
    const restItems = new Set(files);
    const resolved = meta.data.pages.flatMap((item, i) => resolveFolderItem(folderPath, item, ctx, i, restItems));
    if (!indexDisabled && !restItems.has(indexPath)) {
      indexDisabled = true;
    }
    for (let i = 0; i < resolved.length; i++) {
      const item = resolved[i];
      if (item !== rest && item !== restReversed) continue;
      const items = buildAll(
        files,
        ctx,
        (file) => (indexDisabled || file !== indexPath) && restItems.has(file),
        item === restReversed
      );
      resolved.splice(i, 1, ...items);
      break;
    }
    children = resolved;
  }
  const index = !indexDisabled ? buildFileNode(indexPath, ctx) : void 0;
  let name = meta?.data.title ?? index?.name;
  if (!name) {
    const folderName = basename(folderPath);
    name = pathToName(group.exec(folderName)?.[1] ?? folderName);
  }
  let node = {
    type: "folder",
    name,
    icon: options.resolveIcon?.(meta?.data.icon) ?? index?.icon,
    root: meta?.data.root,
    defaultOpen: meta?.data.defaultOpen,
    description: meta?.data.description,
    index,
    children,
    $id: folderPath,
    $ref: !options.noRef && meta ? {
      metaFile: metaPath
    } : void 0
  };
  for (const transformer of transformers) {
    if (!transformer.folder) continue;
    node = transformer.folder.call(ctx, node, folderPath, metaPath);
  }
  return node;
}
function buildFileNode(path, ctx) {
  const { options, getUrl, storage, localeStorage, locale, transformers } = ctx;
  const page = localeStorage?.read(path) ?? storage.read(path);
  if (page?.format !== "page") return;
  const { title, description, icon } = page.data;
  let item = {
    $id: path,
    type: "page",
    name: title ?? pathToName(basename(path, extname(path))),
    description,
    icon: options.resolveIcon?.(icon),
    url: getUrl(page.slugs, locale),
    $ref: !options.noRef ? {
      file: path
    } : void 0
  };
  for (const transformer of transformers) {
    if (!transformer.file) continue;
    item = transformer.file.call(ctx, item, path);
  }
  return item;
}
function build(id, ctx) {
  const folder = buildFolderNode("", true, ctx);
  let root = {
    $id: id,
    name: folder.name,
    children: folder.children
  };
  for (const transformer of ctx.transformers) {
    if (!transformer.root) continue;
    root = transformer.root.call(ctx, root);
  }
  return root;
}
function createPageTreeBuilder(getUrl) {
  function getTransformers(options, generateFallback = true) {
    const transformers = [legacyTransformer(options)];
    if (options.transformers) {
      transformers.push(...options.transformers);
    }
    if (generateFallback) {
      transformers.push(transformerFallback());
    }
    return transformers;
  }
  function createFlattenPathResolver(storage) {
    const map = /* @__PURE__ */ new Map();
    const files = storage.getFiles();
    for (const file of files) {
      const content = storage.read(file);
      const flattenPath = file.substring(0, file.length - extname(file).length);
      map.set(flattenPath + "." + content.format, file);
    }
    return (name, format) => {
      return map.get(name + "." + format);
    };
  }
  return {
    build({ storage, id, generateFallback, ...options }) {
      const resolve = createFlattenPathResolver(storage);
      return build(id ?? "root", {
        transformers: getTransformers(options, generateFallback),
        options,
        builder: this,
        storage,
        getUrl,
        resolveName(name, format) {
          return resolve(name, format) ?? name;
        }
      });
    },
    buildI18n({ id, i18n, ...options }) {
      const storage = options.storages[i18n.defaultLanguage];
      const resolve = createFlattenPathResolver(storage);
      const transformers = getTransformers(options);
      const entries = i18n.languages.map((lang) => {
        const tree = build(id ?? lang ?? "root", {
          transformers,
          builder: this,
          options,
          getUrl,
          locale: lang,
          storage,
          localeStorage: options.storages[lang],
          resolveName(name, format) {
            return resolve(name, format) ?? name;
          }
        });
        return [lang, tree];
      });
      return Object.fromEntries(entries);
    }
  };
}
function pathToName(name) {
  const result = [];
  for (const c of name) {
    if (result.length === 0) result.push(c.toLocaleUpperCase());
    else if (c === "-") result.push(" ");
    else result.push(c);
  }
  return result.join("");
}

// src/source/file-system.ts
var FileSystem = class {
  constructor() {
    this.files = /* @__PURE__ */ new Map();
    this.folders = /* @__PURE__ */ new Map();
    this.folders.set("", []);
  }
  read(path) {
    return this.files.get(path);
  }
  /**
   * get the direct children of folder (in virtual file path)
   */
  readDir(path) {
    return this.folders.get(path);
  }
  write(path, file) {
    const dir = dirname(path);
    this.makeDir(dir);
    this.readDir(dir)?.push(path);
    this.files.set(path, file);
  }
  getFiles() {
    return Array.from(this.files.keys());
  }
  makeDir(path) {
    const segments = splitPath(path);
    for (let i = 0; i < segments.length; i++) {
      const segment = segments.slice(0, i + 1).join("/");
      if (this.folders.has(segment)) continue;
      this.folders.set(segment, []);
      this.folders.get(dirname(segment)).push(segment);
    }
  }
};

// src/source/load-files.ts
function isLocaleValid(locale) {
  return locale.length > 0 && !/\d+/.test(locale);
}
var parsers = {
  dir(path) {
    const [locale, ...segs] = path.split("/");
    if (locale && segs.length > 0 && isLocaleValid(locale))
      return [segs.join("/"), locale];
    return [path];
  },
  dot(path) {
    const dir = dirname(path);
    const base = basename(path);
    const parts = base.split(".");
    if (parts.length < 3) return [path];
    const [locale] = parts.splice(parts.length - 2, 1);
    if (!isLocaleValid(locale)) return [path];
    return [joinPath(dir, parts.join(".")), locale];
  },
  none(path) {
    return [path];
  }
};
function loadFiles(files, options, i18n) {
  const { buildFile, transformers = [] } = options;
  const parser = parsers[i18n.parser];
  const storages = {};
  const normalized = files.map(
    (file) => buildFile({
      ...file,
      path: normalizePath(file.path)
    })
  );
  for (const lang of i18n.languages) {
    const storage = new FileSystem();
    for (const item of normalized) {
      const [path, locale = i18n.defaultLanguage] = parser(item.path);
      if (locale !== lang) continue;
      storage.write(path, item);
    }
    for (const transformer of transformers) {
      transformer({
        storage,
        options
      });
    }
    storages[lang] = storage;
  }
  return storages;
}
function normalizePath(path) {
  const segments = splitPath(slash(path));
  if (segments[0] === "." || segments[0] === "..")
    throw new Error("It must not start with './' or '../'");
  return segments.join("/");
}

// src/source/loader.ts
function indexPages(storages, getUrl, i18n) {
  const result = {
    // (locale.slugs -> page)
    pages: /* @__PURE__ */ new Map(),
    // (locale.path -> page)
    pathToMeta: /* @__PURE__ */ new Map(),
    // (locale.path -> meta)
    pathToPage: /* @__PURE__ */ new Map()
  };
  const defaultLanguage = i18n?.defaultLanguage ?? "";
  for (const filePath of storages[defaultLanguage].getFiles()) {
    const item = storages[defaultLanguage].read(filePath);
    const path = `${defaultLanguage}.${filePath}`;
    if (item.format === "meta") {
      result.pathToMeta.set(path, fileToMeta(item));
    }
    if (item.format === "page") {
      const page = fileToPage(item, getUrl, defaultLanguage);
      result.pathToPage.set(path, page);
      result.pages.set(`${defaultLanguage}.${page.slugs.join("/")}`, page);
      if (!i18n) continue;
      for (const lang of i18n.languages) {
        if (lang === defaultLanguage) continue;
        const localizedItem = storages[lang].read(filePath);
        const localizedPage = fileToPage(
          localizedItem?.format === "page" ? localizedItem : item,
          getUrl,
          lang
        );
        if (localizedItem) {
          result.pathToPage.set(`${lang}.${filePath}`, localizedPage);
        }
        result.pages.set(
          `${lang}.${localizedPage.slugs.join("/")}`,
          localizedPage
        );
      }
    }
  }
  return result;
}
function createGetUrl(baseUrl, i18n) {
  const baseSlugs = baseUrl.split("/");
  return (slugs, locale) => {
    const hideLocale = i18n?.hideLocale ?? "never";
    let urlLocale;
    if (hideLocale === "never") {
      urlLocale = locale;
    } else if (hideLocale === "default-locale" && locale !== i18n?.defaultLanguage) {
      urlLocale = locale;
    }
    const paths = [...baseSlugs, ...slugs];
    if (urlLocale) paths.unshift(urlLocale);
    return `/${paths.filter((v) => v.length > 0).join("/")}`;
  };
}
function loader(options) {
  return createOutput(options);
}
function createOutput(options) {
  if (!options.url && !options.baseUrl) {
    console.warn("`loader()` now requires a `baseUrl` option to be defined.");
  }
  const {
    source,
    baseUrl = "/",
    i18n,
    slugs: slugsFn,
    url: getUrl = createGetUrl(baseUrl ?? "/", i18n),
    transformers = []
  } = options;
  const defaultLanguage = i18n?.defaultLanguage ?? "";
  const files = typeof source.files === "function" ? source.files() : source.files;
  const transformerSlugs = ({ storage }) => {
    const indexFiles = /* @__PURE__ */ new Set();
    const taken = /* @__PURE__ */ new Set();
    for (const path of storage.getFiles()) {
      const file = storage.read(path);
      if (!file || file.format !== "page" || file.slugs) continue;
      if (isIndex(path) && !slugsFn) {
        indexFiles.add(path);
        continue;
      }
      file.slugs = slugsFn ? slugsFn(parseFilePath(path)) : getSlugs(path);
      const key = file.slugs.join("/");
      if (taken.has(key)) throw new Error("Duplicated slugs");
      taken.add(key);
    }
    for (const path of indexFiles) {
      const file = storage.read(path);
      if (file?.format !== "page") continue;
      file.slugs = getSlugs(path);
      if (taken.has(file.slugs.join("/"))) file.slugs.push("index");
    }
  };
  const storages = loadFiles(
    files,
    {
      buildFile(file) {
        if (file.type === "page") {
          return {
            format: "page",
            path: file.path,
            slugs: file.slugs,
            data: file.data,
            absolutePath: file.absolutePath ?? ""
          };
        }
        return {
          format: "meta",
          path: file.path,
          absolutePath: file.absolutePath ?? "",
          data: file.data
        };
      },
      transformers: [transformerSlugs, ...transformers]
    },
    i18n ? {
      ...i18n,
      parser: i18n.parser ?? "dot"
    } : {
      defaultLanguage,
      parser: "none",
      languages: [defaultLanguage]
    }
  );
  const walker = indexPages(storages, getUrl, i18n);
  const builder = createPageTreeBuilder(getUrl);
  let pageTree;
  return {
    _i18n: i18n,
    get pageTree() {
      if (i18n) {
        pageTree ??= builder.buildI18n({
          storages,
          resolveIcon: options.icon,
          i18n,
          ...options.pageTree
        });
      } else {
        pageTree ??= builder.build({
          storage: storages[""],
          resolveIcon: options.icon,
          ...options.pageTree
        });
      }
      return pageTree;
    },
    set pageTree(v) {
      pageTree = v;
    },
    getPageByHref(href, { dir = "", language } = {}) {
      const [value, hash] = href.split("#", 2);
      let target;
      if (value.startsWith(".") && (value.endsWith(".md") || value.endsWith(".mdx"))) {
        const path = joinPath(dir, value);
        target = walker.pathToPage.get(`${language}.${path}`);
      } else {
        target = this.getPages(language).find((item) => item.url === value);
      }
      if (target)
        return {
          page: target,
          hash
        };
    },
    getPages(language = defaultLanguage) {
      const pages = [];
      for (const [key, value] of walker.pages.entries()) {
        if (key.startsWith(`${language}.`)) pages.push(value);
      }
      return pages;
    },
    getLanguages() {
      const list = [];
      if (!options.i18n) return list;
      for (const language of options.i18n.languages) {
        list.push({
          language,
          pages: this.getPages(language)
        });
      }
      return list;
    },
    getPage(slugs = [], language = defaultLanguage) {
      return walker.pages.get(`${language}.${slugs.join("/")}`);
    },
    getNodeMeta(node, language = defaultLanguage) {
      const ref = node.$ref?.metaFile;
      if (!ref) return;
      return walker.pathToMeta.get(`${language}.${ref}`);
    },
    getNodePage(node, language = defaultLanguage) {
      const ref = node.$ref?.file;
      if (!ref) return;
      return walker.pathToPage.get(`${language}.${ref}`);
    },
    getPageTree(locale) {
      if (options.i18n) {
        return this.pageTree[locale ?? defaultLanguage];
      }
      return this.pageTree;
    },
    // @ts-expect-error -- ignore this
    generateParams(slug, lang) {
      if (options.i18n) {
        return this.getLanguages().flatMap(
          (entry) => entry.pages.map((page) => ({
            [slug ?? "slug"]: page.slugs,
            [lang ?? "lang"]: entry.language
          }))
        );
      }
      return this.getPages().map((page) => ({
        [slug ?? "slug"]: page.slugs
      }));
    }
  };
}
function fileToMeta(file) {
  return {
    path: file.path,
    absolutePath: file.absolutePath,
    get file() {
      return parseFilePath(this.path);
    },
    data: file.data
  };
}
function fileToPage(file, getUrl, locale) {
  return {
    get file() {
      return parseFilePath(this.path);
    },
    absolutePath: file.absolutePath,
    path: file.path,
    url: getUrl(file.slugs, locale),
    slugs: file.slugs,
    data: file.data,
    locale
  };
}
var GroupRegex = /^\(.+\)$/;
function isIndex(file) {
  return basename(file, extname(file)) === "index";
}
function getSlugs(file) {
  if (typeof file !== "string") return getSlugs(file.path);
  const dir = dirname(file);
  const name = basename(file, extname(file));
  const slugs = [];
  for (const seg of dir.split("/")) {
    if (seg.length > 0 && !GroupRegex.test(seg)) slugs.push(encodeURI(seg));
  }
  if (GroupRegex.test(name))
    throw new Error(`Cannot use folder group in file names: ${file}`);
  if (name !== "index") {
    slugs.push(encodeURI(name));
  }
  return slugs;
}
export {
  FileSystem,
  createGetUrl,
  createPageTreeBuilder,
  getSlugs,
  loadFiles,
  loader,
  parseFilePath,
  parseFolderPath
};
