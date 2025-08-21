import {
  __async,
  __objRest,
  __spreadProps,
  __spreadValues,
  renderMarkdownToHast
} from "../chunk-C45FGSN3.js";

// src/ui/auto-type-table.tsx
import { TypeTable } from "fumadocs-ui/components/type-table";
import { toJsxRuntime } from "hast-util-to-jsx-runtime";
import * as runtime from "react/jsx-runtime";
import defaultMdxComponents from "fumadocs-ui/mdx";
import "server-only";
import { jsx as jsx2 } from "react/jsx-runtime";
function AutoTypeTable(_a) {
  return __async(this, null, function* () {
    var _b = _a, {
      generator,
      options = {},
      renderMarkdown = renderMarkdownDefault
    } = _b, props = __objRest(_b, [
      "generator",
      "options",
      "renderMarkdown"
    ]);
    const output = yield generator.generateTypeTable(props, options);
    return output.map((item) => __async(null, null, function* () {
      const entries = item.entries.map(
        (entry) => __async(null, null, function* () {
          return [
            entry.name,
            {
              type: entry.type,
              description: yield renderMarkdown(entry.description),
              default: entry.tags.default || entry.tags.defaultValue,
              required: entry.required,
              deprecated: entry.deprecated
            }
          ];
        })
      );
      return /* @__PURE__ */ jsx2(
        TypeTable,
        {
          type: Object.fromEntries(yield Promise.all(entries))
        },
        item.name
      );
    }));
  });
}
function renderMarkdownDefault(md) {
  return __async(this, null, function* () {
    return toJsxRuntime(yield renderMarkdownToHast(md), {
      Fragment: runtime.Fragment,
      jsx: runtime.jsx,
      jsxs: runtime.jsxs,
      components: __spreadProps(__spreadValues({}, defaultMdxComponents), { img: void 0 })
    });
  });
}
export {
  AutoTypeTable
};
