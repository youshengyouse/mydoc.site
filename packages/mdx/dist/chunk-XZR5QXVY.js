import {
  buildConfig
} from "./chunk-XVL4ZQFK.js";

// src/utils/config.ts
import * as fs from "fs/promises";
import * as path from "path";
import { pathToFileURL } from "url";
function findConfigFile() {
  return path.resolve("source.config.ts");
}
var cache = null;
async function isZod3() {
  try {
    const content = JSON.parse(
      (await fs.readFile("node_modules/zod/package.json")).toString()
    );
    const version = content.version;
    return typeof version === "string" && version.startsWith("3.");
  } catch {
    return false;
  }
}
function createCompatZodPlugin() {
  return {
    name: "replace-zod-import",
    async setup(build) {
      const usingZod3 = await isZod3();
      if (!usingZod3) return;
      console.warn(
        "[Fumadocs MDX] Noticed Zod v3 in your node_modules, we recommend upgrading to Zod v4 for better compatibility."
      );
      build.onResolve({ filter: /^fumadocs-mdx\/config$/ }, () => {
        return {
          path: "fumadocs-mdx/config/zod-3",
          external: true
        };
      });
    }
  };
}
async function compileConfig(configPath, outDir) {
  const { build } = await import("esbuild");
  const transformed = await build({
    entryPoints: [{ in: configPath, out: "source.config" }],
    bundle: true,
    outdir: outDir,
    target: "node20",
    write: true,
    platform: "node",
    format: "esm",
    packages: "external",
    plugins: [createCompatZodPlugin()],
    outExtension: {
      ".js": ".mjs"
    },
    allowOverwrite: true
  });
  if (transformed.errors.length > 0) {
    throw new Error("failed to compile configuration file");
  }
}
async function loadConfig(configPath, outDir, hash, build = false) {
  if (cache && cache.hash === hash) {
    return await cache.config;
  }
  if (build) await compileConfig(configPath, outDir);
  const url = pathToFileURL(path.resolve(outDir, "source.config.mjs"));
  const config = import(`${url.href}?hash=${hash}`).then((loaded) => {
    return buildConfig(
      // every call to `loadConfig` will cause the previous cache to be ignored
      loaded
    );
  });
  cache = { config, hash };
  return await config;
}
async function getConfigHash(configPath) {
  const stats = await fs.stat(configPath).catch(() => void 0);
  if (stats) {
    return stats.mtime.getTime().toString();
  }
  throw new Error("Cannot find config file");
}

export {
  findConfigFile,
  loadConfig,
  getConfigHash
};
