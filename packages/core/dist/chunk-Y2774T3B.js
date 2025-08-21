// src/mdx-plugins/remark-heading.ts
import Slugger from "github-slugger";
import { visit } from "unist-util-visit";

// src/mdx-plugins/remark-utils.ts
function flattenNode(node) {
  if ("children" in node)
    return node.children.map((child) => flattenNode(child)).join("");
  if ("value" in node) return node.value;
  return "";
}

// src/mdx-plugins/remark-heading.ts
var slugger = new Slugger();
var regex = /\s*\[#(?<slug>[^]+?)]\s*$/;
function remarkHeading({
  slug: defaultSlug,
  customId = true,
  generateToc = true
} = {}) {
  return (root, file) => {
    const toc = [];
    slugger.reset();
    visit(root, "heading", (heading) => {
      heading.data ||= {};
      heading.data.hProperties ||= {};
      let id = heading.data.hProperties.id;
      const lastNode = heading.children.at(-1);
      if (!id && lastNode?.type === "text" && customId) {
        const match = regex.exec(lastNode.value);
        if (match?.[1]) {
          id = match[1];
          lastNode.value = lastNode.value.slice(0, match.index);
        }
      }
      let flattened = null;
      if (!id) {
        flattened ??= flattenNode(heading);
        id = defaultSlug ? defaultSlug(root, heading, flattened) : slugger.slug(flattened);
      }
      heading.data.hProperties.id = id;
      if (generateToc) {
        toc.push({
          title: flattened ?? flattenNode(heading),
          url: `#${id}`,
          depth: heading.depth
        });
      }
      return "skip";
    });
    if (generateToc) file.data.toc = toc;
  };
}

export {
  flattenNode,
  remarkHeading
};
