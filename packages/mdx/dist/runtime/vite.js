// src/runtime/vite.ts
import { createElement, lazy } from "react";
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
    const OnDemand = lazy(async () => {
      const loaded = await files[k]();
      return { default: (props) => component(loaded, props) };
    });
    if (cache) {
      renderer[k] = (props) => {
        const cached = cache.get(k);
        if (!cached) return createElement(OnDemand, props);
        return component(cached, props);
      };
    } else {
      renderer[k] = OnDemand;
    }
  }
  return renderer;
}
export {
  createClientLoader,
  fromConfig,
  toClientRenderer
};
