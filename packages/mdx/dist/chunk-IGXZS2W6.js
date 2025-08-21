import {
  fumaMatter
} from "./chunk-VWJKRQZR.js";

// src/mdx-plugins/remark-include.ts
import { visit } from "unist-util-visit";
import * as path from "path";
import * as fs from "fs/promises";
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
    visit(
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

export {
  remarkInclude
};
