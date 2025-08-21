import {
  executeMdx
} from "./chunk-2G4XPHHG.js";

// src/compile.ts
import * as Plugins from "fumadocs-core/mdx-plugins";
import { createProcessor } from "@mdx-js/mdx";

// src/utils.ts
import matter from "gray-matter";
function pluginOption(def, options = []) {
  const list = def(Array.isArray(options) ? options : []).filter(
    Boolean
  );
  if (typeof options === "function") {
    return options(list);
  }
  return list;
}
function parseFrontmatter(content) {
  const out = matter(content);
  return {
    frontmatter: out.data,
    content: out.content
  };
}

// src/compile.ts
import { pathToFileURL } from "url";
function createCompiler(mdxOptions) {
  let instance;
  function getProcessor() {
    if (instance) return instance;
    let format = mdxOptions?.format;
    if (!format || format === "detect") format = "mdx";
    return instance = createProcessor({
      ...mdxOptions?.preset === "minimal" ? mdxOptions : getCompileOptions(mdxOptions),
      format
    });
  }
  return {
    async render(compiled, scope, filePath) {
      return executeMdx(compiled, {
        scope,
        baseUrl: filePath ? pathToFileURL(filePath) : void 0,
        jsxRuntime: mdxOptions?.development ? await import("react/jsx-dev-runtime") : void 0
      });
    },
    /**
     * Compile VFile
     */
    async compileFile(from) {
      return getProcessor().process(from);
    },
    async compile(options) {
      const { scope = {}, skipRender } = options;
      const { frontmatter, content } = parseFrontmatter(options.source);
      const file = await this.compileFile({
        value: content,
        path: options.filePath
      });
      const compiled = String(file);
      const exports = !skipRender ? await this.render(compiled, scope, options.filePath) : null;
      return {
        vfile: file,
        compiled,
        frontmatter,
        async body(props) {
          if (!exports)
            throw new Error(
              "Body cannot be rendered when `skipRender` is set to true"
            );
          return exports.default({
            components: { ...options.components, ...props.components }
          });
        },
        toc: exports?.toc ?? file.data.toc,
        exports
      };
    }
  };
}
async function compileMDX(options) {
  const compiler = createCompiler(options.mdxOptions);
  return compiler.compile(options);
}
function getCompileOptions({
  preset: _,
  rehypeCodeOptions,
  remarkImageOptions,
  rehypeTocOptions,
  remarkHeadingOptions,
  remarkCodeTabOptions,
  remarkNpmOptions,
  imageDir = "./public",
  ...options
} = {}) {
  function getPlugin(name) {
    return name in Plugins ? Plugins[name] : null;
  }
  const remarkGfm = getPlugin("remarkGfm");
  const remarkHeading = getPlugin("remarkHeading");
  const remarkCodeTab = getPlugin("remarkCodeTab");
  const remarkNpm = getPlugin("remarkNpm");
  const remarkImage = getPlugin("remarkImage");
  const rehypeCode = getPlugin("rehypeCode");
  const rehypeToc = getPlugin("rehypeToc");
  return {
    ...options,
    outputFormat: "function-body",
    remarkPlugins: pluginOption(
      (v) => [
        remarkGfm,
        remarkHeading && remarkHeadingOptions !== false ? [remarkHeading, remarkHeadingOptions] : null,
        remarkImage && remarkImageOptions !== false ? [
          remarkImage,
          {
            useImport: false,
            publicDir: imageDir,
            ...remarkImageOptions
          }
        ] : null,
        remarkCodeTab && remarkCodeTabOptions !== false ? [remarkCodeTab, remarkCodeTabOptions] : null,
        remarkNpm && remarkNpmOptions !== false ? [remarkNpm, remarkNpmOptions] : null,
        ...v
      ],
      options.remarkPlugins
    ),
    rehypePlugins: pluginOption(
      (v) => [
        rehypeCode && rehypeCodeOptions !== false ? [rehypeCode, rehypeCodeOptions] : null,
        rehypeToc && rehypeTocOptions !== false ? [rehypeToc, rehypeTocOptions] : null,
        ...v
      ],
      options.rehypePlugins
    )
  };
}

// src/index.ts
async function executeMdx2(compiled, scope, baseUrl) {
  let jsxRuntime;
  if (process.env.NODE_ENV === "production") {
    jsxRuntime = await import("react/jsx-runtime");
  } else {
    jsxRuntime = await import("react/jsx-dev-runtime");
  }
  const fullScope = {
    opts: {
      ...jsxRuntime,
      baseUrl
    },
    ...scope
  };
  const values = Object.values(fullScope);
  const params = Object.keys(fullScope);
  params.push(`return (async () => { ${compiled} })()`);
  const hydrateFn = new Function(...params);
  return await hydrateFn.apply(hydrateFn, values);
}
export {
  compileMDX,
  createCompiler,
  executeMdx2 as executeMdx,
  parseFrontmatter
};
