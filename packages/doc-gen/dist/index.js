import {
  __async,
  createElement,
  expressionToAttribute
} from "./chunk-BK7XF3JK.js";

// src/remark-docgen.ts
import { visit } from "unist-util-visit";
var metaRegex = new RegExp("doc-gen:(?<name>.+)");
function remarkDocGen({
  generators = []
}) {
  return (tree, file) => __async(null, null, function* () {
    generators.forEach((gen) => {
      var _a;
      return (_a = gen.onFile) == null ? void 0 : _a.call(gen, tree, file);
    });
    const queue = [];
    visit(tree, "code", (code, _, parent) => {
      if (code.lang !== "json" || !code.meta || !parent) return;
      const matches = metaRegex.exec(code.meta);
      if (!matches) return;
      const name = matches[1];
      const gen = generators.find((g) => g.name === name);
      const run = () => __async(null, null, function* () {
        const result = yield gen == null ? void 0 : gen.run(JSON.parse(code.value), {
          cwd: file.cwd,
          path: file.path,
          node: code
        });
        const index = parent.children.findIndex((c) => c === code);
        if (result && index !== -1) {
          const items = Array.isArray(result) ? result : [result];
          parent.children.splice(index, 1, ...items);
        }
      });
      queue.push(run());
    });
    yield Promise.all(queue);
  });
}

// src/file-generator.ts
import * as fs from "fs/promises";
import * as path from "path";
import { z } from "zod";
var fileGeneratorSchema = z.object({
  file: z.string(),
  /**
   * Turn file content into a code block
   *
   * @defaultValue false
   */
  codeblock: z.union([
    z.object({
      lang: z.string().optional(),
      meta: z.string().optional()
    }),
    z.boolean()
  ]).default(false)
});
function fileGenerator({
  relative = false,
  trim = true
} = {}) {
  return {
    name: "file",
    run(input, ctx) {
      return __async(this, null, function* () {
        var _a2;
        const { file, codeblock = false } = fileGeneratorSchema.parse(input);
        const dest = relative ? path.resolve(ctx.cwd, path.dirname(ctx.path), file) : path.resolve(ctx.cwd, file);
        let value = yield fs.readFile(dest).then((res) => res.toString());
        if (trim) value = value.trim();
        if (codeblock === false) {
          return {
            type: "paragraph",
            children: [{ type: "text", value }]
          };
        }
        const codeOptions = codeblock === true ? {} : codeblock;
        return {
          type: "code",
          lang: (_a2 = codeOptions.lang) != null ? _a2 : path.extname(dest).slice(1),
          meta: codeOptions.meta,
          value
        };
      });
    }
  };
}

// src/remark-install.ts
import { visit as visit2 } from "unist-util-visit";
import convert from "npm-to-yarn";
function remarkInstall({
  Tab = "Tab",
  Tabs = "Tabs",
  persist = false,
  packageManagers = [
    { command: (cmd) => convert(cmd, "npm"), name: "npm" },
    { command: (cmd) => convert(cmd, "pnpm"), name: "pnpm" },
    { command: (cmd) => convert(cmd, "yarn"), name: "yarn" },
    { command: (cmd) => convert(cmd, "bun"), name: "bun" }
  ]
} = {}) {
  return (tree) => {
    visit2(tree, "code", (node) => {
      if (node.lang !== "package-install") return "skip";
      const value = node.value.startsWith("npm") || node.value.startsWith("npx") ? node.value : `npm install ${node.value}`;
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
            elements: packageManagers.map(({ name }) => ({
              type: "Literal",
              value: name
            }))
          })
        ],
        packageManagers.map(({ command, name }) => ({
          type: "mdxJsxFlowElement",
          name: Tab,
          attributes: [{ type: "mdxJsxAttribute", name: "value", value: name }],
          children: [
            {
              type: "code",
              lang: "bash",
              meta: node.meta,
              value: command(value)
            }
          ]
        }))
      );
      Object.assign(node, insert);
    });
  };
}

// src/remark-show.ts
import { visit as visit3 } from "unist-util-visit";
function remarkShow(options) {
  var _a;
  const variables = (_a = options == null ? void 0 : options.variables) != null ? _a : {};
  return (tree, file) => __async(null, null, function* () {
    const { toJs } = yield import("estree-util-to-js");
    const tasks = [];
    visit3(tree, "mdxJsxFlowElement", (node) => {
      var _a2;
      if (node.name !== "show") return;
      for (const attr of node.attributes) {
        if (attr.type !== "mdxJsxAttribute" || attr.name !== "on") continue;
        if (!attr.value || typeof attr.value !== "object" || !((_a2 = attr.value.data) == null ? void 0 : _a2.estree))
          return "skip";
        const js = toJs(attr.value.data.estree);
        const callback = new Function(
          ...Object.keys(variables),
          `return ${js.value}`
        )(...Object.values(variables));
        tasks.push(
          (() => __async(null, null, function* () {
            const value = typeof callback === "function" ? yield callback(file) : callback;
            Object.assign(node, {
              type: "mdxJsxFlowElement",
              name: null,
              attributes: [],
              children: value === true ? node.children : []
            });
          }))()
        );
        return "skip";
      }
    });
    yield Promise.all(tasks);
  });
}
export {
  createElement,
  expressionToAttribute,
  fileGenerator,
  fileGeneratorSchema,
  remarkDocGen,
  remarkInstall,
  remarkShow
};
