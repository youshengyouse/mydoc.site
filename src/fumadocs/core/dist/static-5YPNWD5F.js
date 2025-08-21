import {
  searchAdvanced,
  searchSimple
} from "./chunk-62HKBTBF.js";
import "./chunk-KAOEMCTI.js";

// src/search/client/static.ts
import { create, load } from "@orama/orama";
var cache = /* @__PURE__ */ new Map();
async function loadDB({
  from = "/api/search",
  initOrama = (locale) => create({ schema: { _: "string" }, language: locale })
}) {
  const cacheKey = from;
  const cached = cache.get(cacheKey);
  if (cached) return cached;
  async function init() {
    const res = await fetch(from);
    if (!res.ok)
      throw new Error(
        `failed to fetch exported search indexes from ${from}, make sure the search database is exported and available for client.`
      );
    const data = await res.json();
    const dbs = /* @__PURE__ */ new Map();
    if (data.type === "i18n") {
      await Promise.all(
        Object.entries(data.data).map(async ([k, v]) => {
          const db2 = await initOrama(k);
          load(db2, v);
          dbs.set(k, {
            type: v.type,
            db: db2
          });
        })
      );
      return dbs;
    }
    const db = await initOrama();
    load(db, data);
    dbs.set("", {
      type: data.type,
      db
    });
    return dbs;
  }
  const result = init();
  cache.set(cacheKey, result);
  return result;
}
async function search(query, options) {
  const { tag, locale } = options;
  const db = (await loadDB(options)).get(locale ?? "");
  if (!db) return [];
  if (db.type === "simple")
    return searchSimple(db, query);
  return searchAdvanced(db.db, query, tag);
}
export {
  search
};
