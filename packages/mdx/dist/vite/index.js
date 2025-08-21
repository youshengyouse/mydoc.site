import {
  countLines
} from "../chunk-UCY7OBZG.js";
import {
  getGlobPatterns,
  ident,
  toImportPath
} from "../chunk-6Y5JDZHD.js";
import {
  ValidationError,
  getGitTimestamp,
  validate
} from "../chunk-GX3THK2Q.js";
import {
  buildMDX
} from "../chunk-7JFPDRW7.js";
import "../chunk-IGXZS2W6.js";
import {
  buildConfig
} from "../chunk-XVL4ZQFK.js";
import {
  fumaMatter
} from "../chunk-VWJKRQZR.js";

// src/vite/index.ts
import { parse } from "querystring";
import { z } from "zod";
import * as fs from "fs/promises";
import * as path from "path";
import { load } from "js-yaml";

// src/vite/generate-glob.ts
function generateGlob(name, collection) {
  const patterns = mapGlobPatterns(getGlobPatterns(collection));
  const options = {
    query: {
      collection: name
    },
    base: getGlobBase(collection)
  };
  if (collection.type === "meta") {
    options.import = "default";
  }
  return `import.meta.glob(${JSON.stringify(patterns)}, ${JSON.stringify(options, null, 2)})`;
}
function mapGlobPatterns(patterns) {
  return patterns.map((file) => {
    if (file.startsWith("./")) return file;
    if (file.startsWith("/")) return `.${file}`;
    return `./${file}`;
  });
}
function getGlobBase(collection) {
  let dir = collection.dir;
  if (Array.isArray(dir)) {
    if (dir.length !== 1)
      throw new Error(
        `[Fumadocs MDX] Vite Plugin doesn't support multiple \`dir\` for a collection at the moment.`
      );
    dir = dir[0];
  }
  if (!dir.startsWith("./") && !dir.startsWith("/")) {
    return "/" + dir;
  }
  return dir;
}

// src/vite/index.ts
var onlySchema = z.literal(["frontmatter", "all"]);
function mdx(config, options = {}) {
  const { generateIndexFile = true, configPath = "source.config.ts" } = options;
  const loaded = buildConfig(config);
  async function transformMeta(path2, query, value) {
    const isJson = path2.endsWith(".json");
    const parsed = parse(query);
    const collection = parsed.collection ? loaded.collections.get(parsed.collection) : void 0;
    if (!collection) return null;
    let schema;
    switch (collection.type) {
      case "meta":
        schema = collection.schema;
        break;
      case "docs":
        schema = collection.meta.schema;
        break;
    }
    if (!schema) return null;
    let data;
    try {
      data = isJson ? JSON.parse(value) : load(value);
    } catch {
      return null;
    }
    const out = await validate(
      schema,
      data,
      { path: path2, source: value },
      `invalid data in ${path2}`
    );
    return {
      code: isJson ? JSON.stringify(out) : `export default ${JSON.stringify(out)}`,
      map: null
    };
  }
  async function transformContent(file, query, value) {
    const matter = fumaMatter(value);
    const isDevelopment = this.environment.mode === "dev";
    const parsed = parse(query);
    const collection = parsed.collection ? loaded.collections.get(parsed.collection) : void 0;
    const only = parsed.only ? onlySchema.parse(parsed.only) : "all";
    let schema;
    let mdxOptions;
    switch (collection?.type) {
      case "doc":
        mdxOptions = collection.mdxOptions;
        schema = collection.schema;
        break;
      case "docs":
        mdxOptions = collection.docs.mdxOptions;
        schema = collection.docs.schema;
        break;
    }
    if (schema) {
      matter.data = await validate(
        schema,
        matter.data,
        {
          source: value,
          path: file
        },
        `invalid frontmatter in ${file}`
      );
    }
    if (only === "frontmatter") {
      return {
        code: `export const frontmatter = ${JSON.stringify(matter.data)}`,
        map: null
      };
    }
    const data = {};
    if (loaded.global.lastModifiedTime === "git") {
      data.lastModified = (await getGitTimestamp(file))?.getTime();
    }
    mdxOptions ??= await loaded.getDefaultMDXOptions();
    const lineOffset = isDevelopment ? countLines(matter.matter) : 0;
    const compiled = await buildMDX(
      parsed.collection ?? "global",
      "\n".repeat(lineOffset) + matter.content,
      {
        development: isDevelopment,
        ...mdxOptions,
        data,
        filePath: file,
        frontmatter: matter.data,
        _compiler: {
          addDependency: (file2) => {
            this.addWatchFile(file2);
          }
        }
      }
    );
    return {
      code: String(compiled.value),
      map: compiled.map
    };
  }
  return {
    name: "fumadocs-mdx",
    // needed, otherwise other plugins will be executed before our `transform`.
    enforce: "pre",
    async buildStart() {
      if (!generateIndexFile) return;
      console.log("[Fumadocs MDX] Generating index files");
      const outdir = process.cwd();
      const outFile = "source.generated.ts";
      const lines = [
        '/// <reference types="vite/client" />',
        `import { fromConfig } from 'fumadocs-mdx/runtime/vite';`,
        `import type * as Config from '${toImportPath(configPath, {
          relativeTo: outdir,
          jsExtension: typeof generateIndexFile === "object" ? generateIndexFile.addJsExtension : void 0
        })}';`,
        "",
        `export const create = fromConfig<typeof Config>();`
      ];
      function docs(name, collection) {
        const args = [
          ident(`doc: ${generateGlob(name, collection.docs)}`),
          ident(`meta: ${generateGlob(name, collection.meta)}`)
        ].join(",\n");
        return `export const ${name} = create.docs("${name}", {
${args}
});`;
      }
      function doc(name, collection) {
        return `export const ${name} = create.doc("${name}", ${generateGlob(name, collection)});`;
      }
      function meta(name, collection) {
        return `export const ${name} = create.meta("${name}", ${generateGlob(name, collection)});`;
      }
      for (const [name, collection] of loaded.collections.entries()) {
        lines.push("");
        if (collection.type === "docs") {
          lines.push(docs(name, collection));
        } else if (collection.type === "meta") {
          lines.push(meta(name, collection));
        } else {
          lines.push(doc(name, collection));
        }
      }
      await fs.writeFile(path.join(outdir, outFile), lines.join("\n"));
    },
    async transform(value, id) {
      const [file, query = ""] = id.split("?");
      const ext = path.extname(file);
      try {
        if ([".yaml", ".json"].includes(ext))
          return await transformMeta(file, query, value);
        if ([".md", ".mdx"].includes(ext))
          return await transformContent.call(this, file, query, value);
      } catch (e) {
        if (e instanceof ValidationError) {
          throw new Error(e.toStringFormatted());
        }
        throw e;
      }
    }
  };
}
export {
  mdx as default
};
