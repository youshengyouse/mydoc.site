// src/config/build.ts
function buildConfig(config) {
  const collections = /* @__PURE__ */ new Map();
  let globalConfig = {};
  for (const [k, v] of Object.entries(config)) {
    if (!v) {
      continue;
    }
    if (typeof v === "object" && "type" in v) {
      if (v.type === "docs") {
        collections.set(k, v);
        continue;
      }
      if (v.type === "doc" || v.type === "meta") {
        collections.set(k, v);
        continue;
      }
    }
    if (k === "default" && v) {
      globalConfig = v;
      continue;
    }
    throw new Error(
      `Unknown export "${k}", you can only export collections from source configuration file.`
    );
  }
  const mdxOptionsCache = /* @__PURE__ */ new Map();
  return {
    global: globalConfig,
    collections,
    async getDefaultMDXOptions(mode = "default") {
      const cached = mdxOptionsCache.get(mode);
      if (cached) return cached;
      const input = this.global.mdxOptions;
      async function uncached() {
        const options = typeof input === "function" ? await input() : input;
        const { getDefaultMDXOptions } = await import("./mdx-options-3NB74EMB.js");
        if (options?.preset === "minimal") return options;
        return getDefaultMDXOptions({
          ...options,
          _withoutBundler: mode === "remote"
        });
      }
      const result = uncached();
      mdxOptionsCache.set(mode, result);
      return result;
    }
  };
}

export {
  buildConfig
};
