import {
  __async,
  createElement,
  expressionToAttribute
} from "./chunk-BK7XF3JK.js";

// src/remark-ts2js.ts
import { visit } from "unist-util-visit";
function remarkTypeScriptToJavaScript({
  persist = false,
  disableTrigger = false,
  Tab = "Tab",
  Tabs = "Tabs"
} = {}) {
  return (tree, file) => __async(null, null, function* () {
    const oxc = yield import("oxc-transform");
    visit(tree, "code", (node) => {
      var _a, _b;
      if (node.lang !== "ts" && node.lang !== "tsx") return;
      if (!disableTrigger && !((_a = node.meta) == null ? void 0 : _a.includes("ts2js"))) return;
      const result = oxc.transform(
        `${(_b = file.path) != null ? _b : "test"}.${node.lang}`,
        node.value,
        {
          sourcemap: false,
          jsx: "preserve"
        }
      );
      const insert = createElement(
        Tabs,
        [
          ...typeof persist === "object" ? [
            {
              type: "mdxJsxAttribute",
              name: "groupId",
              value: persist.id
            },
            {
              type: "mdxJsxAttribute",
              name: "persist",
              value: null
            }
          ] : [],
          expressionToAttribute("items", {
            type: "ArrayExpression",
            elements: ["TypeScript", "JavaScript"].map((name) => ({
              type: "Literal",
              value: name
            }))
          })
        ],
        [
          {
            type: "mdxJsxFlowElement",
            name: Tab,
            attributes: [
              {
                type: "mdxJsxAttribute",
                name: "value",
                value: "TypeScript"
              }
            ],
            children: [
              {
                type: "code",
                lang: node.lang,
                meta: node.meta,
                value: node.value
              }
            ]
          },
          {
            type: "mdxJsxFlowElement",
            name: Tab,
            attributes: [
              {
                type: "mdxJsxAttribute",
                name: "value",
                value: "JavaScript"
              }
            ],
            children: [
              {
                type: "code",
                lang: "jsx",
                meta: node.meta,
                value: result.code
              }
            ]
          }
        ]
      );
      Object.assign(node, insert);
      return "skip";
    });
  });
}
export {
  remarkTypeScriptToJavaScript
};
