import {
  remarkInclude
} from "./chunk-IGXZS2W6.js";

// src/utils/build-mdx.ts
import { createProcessor } from "@mdx-js/mdx";
var cache = /* @__PURE__ */ new Map();
async function buildMDX(cacheKey, source, options) {
  const { filePath, frontmatter, data, _compiler, ...rest } = options;
  function getProcessor(format) {
    const key = `${cacheKey}:${format}`;
    let processor = cache.get(key);
    if (!processor) {
      processor = createProcessor({
        outputFormat: "program",
        ...rest,
        remarkPlugins: [remarkInclude, ...rest.remarkPlugins ?? []],
        format
      });
      cache.set(key, processor);
    }
    return processor;
  }
  return getProcessor(
    options.format ?? filePath.endsWith(".mdx") ? "mdx" : "md"
  ).process({
    value: source,
    path: filePath,
    data: {
      ...data,
      frontmatter,
      _compiler,
      _processor: {
        getProcessor
      }
    }
  });
}

export {
  buildMDX
};
