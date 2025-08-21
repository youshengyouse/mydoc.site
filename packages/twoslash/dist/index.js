import {
  __objRest,
  __spreadProps,
  __spreadValues
} from "./chunk-ORMEWXMH.js";

// src/index.ts
import { fromMarkdown } from "mdast-util-from-markdown";
import { gfmFromMarkdown } from "mdast-util-gfm";
import { defaultHandlers, toHast } from "mdast-util-to-hast";
import {
  createTransformerFactory,
  rendererRich
} from "@shikijs/twoslash";
import {
  createTwoslasher
} from "twoslash";
var cachedInstance;
function transformerTwoslash(_a = {}) {
  var _b = _a, {
    typesCache
  } = _b, options = __objRest(_b, [
    "typesCache"
  ]);
  var _a2, _b2;
  const ignoreClass = "nd-copy-ignore";
  function getInstance() {
    cachedInstance != null ? cachedInstance : cachedInstance = createTwoslasher(options.twoslashOptions);
    return cachedInstance;
  }
  let twoslasher;
  if (typesCache) {
    twoslasher = ((code, extension, options2) => {
      const cached = typesCache.read(code);
      if (cached) return cached;
      const instance = getInstance();
      const twoslashResult = instance(code, extension, options2);
      typesCache.write(code, twoslashResult);
      return twoslashResult;
    });
    twoslasher.getCacheMap = () => {
      return getInstance().getCacheMap();
    };
    (_a2 = typesCache.init) == null ? void 0 : _a2.call(typesCache);
  } else {
    twoslasher = getInstance();
  }
  const renderer = rendererRich(__spreadProps(__spreadValues({
    classExtra: ignoreClass,
    queryRendering: "line",
    renderMarkdown,
    renderMarkdownInline
  }, options == null ? void 0 : options.rendererRich), {
    hast: __spreadValues({
      hoverToken: {
        tagName: "Popup"
      },
      hoverPopup: {
        tagName: "PopupContent",
        properties: {
          class: ignoreClass
        }
      },
      hoverCompose: ({ popup, token }) => [
        popup,
        {
          type: "element",
          tagName: "PopupTrigger",
          properties: {},
          children: [token]
        }
      ],
      popupDocs: {
        class: "prose twoslash-popup-docs"
      },
      popupTypes: {
        tagName: "div",
        class: "twoslash shiki fd-codeblock prose-no-margin",
        children: (v) => {
          if (v.length === 1 && v[0].type === "element" && v[0].tagName === "pre")
            return v;
          return [
            {
              type: "element",
              tagName: "code",
              properties: {
                class: "twoslash-popup-code"
              },
              children: v
            }
          ];
        }
      },
      popupDocsTags: {
        class: "prose twoslash-popup-docs twoslash-popup-docs-tags"
      },
      nodesHighlight: {
        class: "highlighted-word twoslash-highlighted"
      }
    }, (_b2 = options == null ? void 0 : options.rendererRich) == null ? void 0 : _b2.hast)
  }));
  const fn = renderer.lineQuery;
  renderer.lineQuery = function(...args) {
    const result = fn.call(this, ...args);
    const child = result[0].children[0];
    result[0].children[0] = {
      type: "element",
      tagName: "span",
      children: [child]
    };
    return result;
  };
  return createTransformerFactory(
    twoslasher,
    renderer
  )(__spreadValues({
    explicitTrigger: true
  }, options));
}
function renderMarkdown(md) {
  const mdast = fromMarkdown(
    md.replace(new RegExp("{@link (?<link>[^}]*)}", "g"), "$1"),
    // replace jsdoc links
    { mdastExtensions: [gfmFromMarkdown()] }
  );
  return toHast(mdast, {
    handlers: {
      code: (state, node) => {
        var _a;
        if (node.lang) {
          return this.codeToHast(node.value, __spreadProps(__spreadValues({}, this.options), {
            transformers: [],
            meta: {
              __raw: (_a = node.meta) != null ? _a : void 0
            },
            lang: node.lang
          })).children[0];
        }
        return defaultHandlers.code(state, node);
      }
    }
  }).children;
}
function renderMarkdownInline(md, context) {
  const text = context === "tag:param" ? md.replace(new RegExp("^(?<link>[\\w$-]+)"), "`$1` ") : md;
  const children = renderMarkdown.call(this, text);
  if (children.length === 1 && children[0].type === "element" && children[0].tagName === "p")
    return children[0].children;
  return children;
}
export {
  transformerTwoslash
};
