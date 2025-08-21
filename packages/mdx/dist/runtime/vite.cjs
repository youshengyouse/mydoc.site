"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/runtime/vite.ts
var vite_exports = {};
__export(vite_exports, {
  createClientLoader: () => createClientLoader,
  fromConfig: () => fromConfig,
  toClientRenderer: () => toClientRenderer
});
module.exports = __toCommonJS(vite_exports);
var import_react = require("react");
function fromConfig() {
  function normalize(entries) {
    const out = {};
    for (const k in entries) {
      const mappedK = k.startsWith("./") ? k.slice(2) : k;
      out[mappedK] = entries[k];
    }
    return out;
  }
  function mapPageData(entry) {
    const { toc, structuredData, lastModified, frontmatter } = entry;
    return {
      ...frontmatter,
      default: entry.default,
      toc,
      structuredData,
      lastModified,
      _exports: entry
    };
  }
  return {
    doc(_, glob) {
      return normalize(glob);
    },
    meta(_, glob) {
      return normalize(glob);
    },
    docs(_, { doc, meta }) {
      return {
        doc: normalize(doc),
        meta: normalize(meta)
      };
    },
    source(doc, meta) {
      const virtualFiles = [];
      for (const [file, content] of Object.entries(doc)) {
        virtualFiles.push({
          type: "page",
          path: file,
          data: mapPageData(content)
        });
      }
      for (const [file, content] of Object.entries(meta)) {
        virtualFiles.push({
          type: "meta",
          path: file,
          data: content
        });
      }
      return {
        files: virtualFiles
      };
    },
    async sourceAsync(doc, meta) {
      const virtualFiles = [];
      for (const [file, content] of Object.entries(doc)) {
        virtualFiles.push({
          type: "page",
          path: file,
          data: mapPageData(await content())
        });
      }
      for (const [file, content] of Object.entries(meta)) {
        virtualFiles.push({
          type: "meta",
          path: file,
          data: await content()
        });
      }
      return {
        files: virtualFiles
      };
    }
  };
}
var loaderStore = /* @__PURE__ */ new Map();
function createClientLoader(files, options) {
  const { id = "", component } = options;
  const store = loaderStore.get(id) ?? {
    preloaded: /* @__PURE__ */ new Map()
  };
  loaderStore.set(id, store);
  let renderer;
  return {
    async preload(path) {
      const loaded = await files[path]();
      store.preloaded.set(path, loaded);
      return loaded;
    },
    getComponent(path) {
      renderer ??= toClientRenderer(files, component, {
        cache: store.preloaded
      });
      return renderer[path];
    }
  };
}
function toClientRenderer(files, component, options = {}) {
  const { cache } = options;
  const renderer = {};
  for (const k in files) {
    const OnDemand = (0, import_react.lazy)(async () => {
      const loaded = await files[k]();
      return { default: (props) => component(loaded, props) };
    });
    if (cache) {
      renderer[k] = (props) => {
        const cached = cache.get(k);
        if (!cached) return (0, import_react.createElement)(OnDemand, props);
        return component(cached, props);
      };
    } else {
      renderer[k] = OnDemand;
    }
  }
  return renderer;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createClientLoader,
  fromConfig,
  toClientRenderer
});
