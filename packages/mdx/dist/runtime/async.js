import {
  _runtime,
  createMDXSource
} from "../chunk-NUDEC6C5.js";
import {
  buildMDX
} from "../chunk-7JFPDRW7.js";
import "../chunk-IGXZS2W6.js";
import {
  buildConfig
} from "../chunk-XVL4ZQFK.js";
import "../chunk-VWJKRQZR.js";

// src/runtime/async.ts
import { executeMdx } from "@fumadocs/mdx-remote/client";
import { pathToFileURL } from "url";
async function getOptions(config, collection) {
  const col = config.collections.get(collection);
  if (col?.type === "doc" && col.mdxOptions) return col.mdxOptions;
  if (col?.type === "docs" && col.docs.mdxOptions) return col.docs.mdxOptions;
  return config.getDefaultMDXOptions("remote");
}
var _runtimeAsync = {
  doc(files, collection, config) {
    const initMdxOptions = getOptions(config, collection);
    return files.map(({ info: file, data, content, lastModified }) => {
      return {
        ...data,
        _file: file,
        get content() {
          return `${content.matter}${content.body}`;
        },
        async load() {
          const mdxOptions = await initMdxOptions;
          const out = await buildMDX(collection, content.body, {
            ...mdxOptions,
            development: false,
            frontmatter: data,
            data: {
              lastModified
            },
            filePath: file.absolutePath
          });
          const executed = await executeMdx(String(out), {
            baseUrl: pathToFileURL(file.absolutePath)
          });
          return {
            body: executed.default,
            toc: executed.toc,
            lastModified,
            structuredData: out.data.structuredData,
            _exports: executed
          };
        }
      };
    });
  },
  docs(docs, metas, collection, config) {
    const parsedDocs = this.doc(docs, collection, config);
    const parsedMetas = _runtime.meta(metas);
    return {
      docs: parsedDocs,
      meta: parsedMetas,
      toFumadocsSource() {
        return createMDXSource(parsedDocs, parsedMetas);
      }
    };
  }
};
export {
  _runtimeAsync,
  buildConfig
};
