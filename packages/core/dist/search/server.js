import {
  searchAdvanced,
  searchSimple
} from "../chunk-KIJ7AMBP.js";
import "../chunk-KAOEMCTI.js";
import {
  createContentHighlighter
} from "../chunk-CNWEGOUF.js";
import {
  basename,
  extname
} from "../chunk-7GNSIKII.js";
import "../chunk-JSBRDJBE.js";

// src/search/server.ts
import {
  save
} from "@orama/orama";

// src/search/orama/create-endpoint.ts
function createEndpoint(server) {
  const { search } = server;
  return {
    ...server,
    async staticGET() {
      return Response.json(await server.export());
    },
    async GET(request) {
      const url = new URL(request.url);
      const query = url.searchParams.get("query");
      if (!query) return Response.json([]);
      return Response.json(
        await search(query, {
          tag: url.searchParams.get("tag")?.split(",") ?? void 0,
          locale: url.searchParams.get("locale") ?? void 0
        })
      );
    }
  };
}

// src/search/orama/create-db.ts
import {
  create,
  insertMultiple
} from "@orama/orama";
var advancedSchema = {
  content: "string",
  page_id: "string",
  type: "string",
  tags: "enum[]",
  url: "string"
};
async function createDB({
  indexes,
  tokenizer,
  search: _,
  ...rest
}) {
  const items = typeof indexes === "function" ? await indexes() : indexes;
  const db = create({
    schema: advancedSchema,
    ...rest,
    components: {
      ...rest.components,
      tokenizer: tokenizer ?? rest.components?.tokenizer
    }
  });
  const mapTo = [];
  items.forEach((page) => {
    const tags = Array.isArray(page.tag) ? page.tag : page.tag ? [page.tag] : [];
    const data = page.structuredData;
    let id = 0;
    mapTo.push({
      id: page.id,
      page_id: page.id,
      type: "page",
      content: page.title,
      tags,
      url: page.url
    });
    if (page.description) {
      mapTo.push({
        id: `${page.id}-${(id++).toString()}`,
        page_id: page.id,
        tags,
        type: "text",
        url: page.url,
        content: page.description
      });
    }
    for (const heading of data.headings) {
      mapTo.push({
        id: `${page.id}-${(id++).toString()}`,
        page_id: page.id,
        type: "heading",
        tags,
        url: `${page.url}#${heading.id}`,
        content: heading.content
      });
    }
    for (const content of data.contents) {
      mapTo.push({
        id: `${page.id}-${(id++).toString()}`,
        page_id: page.id,
        tags,
        type: "text",
        url: content.heading ? `${page.url}#${content.heading}` : page.url,
        content: content.content
      });
    }
  });
  await insertMultiple(db, mapTo);
  return db;
}
var simpleSchema = {
  url: "string",
  title: "string",
  description: "string",
  content: "string",
  keywords: "string"
};
async function createDBSimple({
  indexes,
  tokenizer,
  ...rest
}) {
  const items = typeof indexes === "function" ? await indexes() : indexes;
  const db = create({
    schema: simpleSchema,
    ...rest,
    components: {
      ...rest.components,
      tokenizer: tokenizer ?? rest.components?.tokenizer
    }
  });
  await insertMultiple(
    db,
    items.map((page) => ({
      title: page.title,
      description: page.description,
      url: page.url,
      content: page.content,
      keywords: page.keywords
    }))
  );
  return db;
}

// src/search/orama/create-from-source.ts
function pageToIndex(page) {
  if (!("structuredData" in page.data)) {
    throw new Error(
      "Cannot find structured data from page, please define the page to index function."
    );
  }
  const structuredData = page.data.structuredData;
  return {
    title: page.data.title ?? basename(page.path, extname(page.path)),
    description: "description" in page.data ? page.data.description : void 0,
    url: page.url,
    id: page.url,
    structuredData
  };
}
function createFromSource(source, _buildIndexOrOptions = pageToIndex, _options) {
  const options = {
    ...typeof _buildIndexOrOptions === "function" ? {
      buildIndex: _buildIndexOrOptions
    } : _buildIndexOrOptions,
    ..._options
  };
  if (source._i18n) {
    return createI18nSearchAPI("advanced", {
      ...options,
      i18n: source._i18n,
      indexes: source.getLanguages().flatMap((entry) => {
        return entry.pages.map((page) => {
          return {
            ...(options.buildIndex ?? pageToIndex)(page),
            locale: entry.language
          };
        });
      })
    });
  }
  return createSearchAPI("advanced", {
    ...options,
    indexes: source.getPages().map((page) => {
      return (options.buildIndex ?? pageToIndex)(page);
    })
  });
}

// src/search/orama/_stemmers.ts
var STEMMERS = {
  arabic: "ar",
  armenian: "am",
  bulgarian: "bg",
  czech: "cz",
  danish: "dk",
  dutch: "nl",
  english: "en",
  finnish: "fi",
  french: "fr",
  german: "de",
  greek: "gr",
  hungarian: "hu",
  indian: "in",
  indonesian: "id",
  irish: "ie",
  italian: "it",
  lithuanian: "lt",
  nepali: "np",
  norwegian: "no",
  portuguese: "pt",
  romanian: "ro",
  russian: "ru",
  serbian: "rs",
  slovenian: "ru",
  spanish: "es",
  swedish: "se",
  tamil: "ta",
  turkish: "tr",
  ukrainian: "uk",
  sanskrit: "sk"
};

// src/search/orama/create-i18n.ts
async function getTokenizer(locale) {
  return {
    language: Object.keys(STEMMERS).find((lang) => STEMMERS[lang] === locale) ?? locale
  };
}
async function initSimple(options) {
  const map = /* @__PURE__ */ new Map();
  if (options.i18n.languages.length === 0) {
    return map;
  }
  const indexes = typeof options.indexes === "function" ? await options.indexes() : options.indexes;
  for (const locale of options.i18n.languages) {
    const localeIndexes = indexes.filter((index) => index.locale === locale);
    const mapped = options.localeMap?.[locale] ?? await getTokenizer(locale);
    map.set(
      locale,
      typeof mapped === "object" ? initSimpleSearch({
        ...options,
        ...mapped,
        indexes: localeIndexes
      }) : initSimpleSearch({
        ...options,
        language: mapped,
        indexes: localeIndexes
      })
    );
  }
  return map;
}
async function initAdvanced(options) {
  const map = /* @__PURE__ */ new Map();
  if (options.i18n.languages.length === 0) {
    return map;
  }
  const indexes = typeof options.indexes === "function" ? await options.indexes() : options.indexes;
  for (const locale of options.i18n.languages) {
    const localeIndexes = indexes.filter((index) => index.locale === locale);
    const mapped = options.localeMap?.[locale] ?? await getTokenizer(locale);
    map.set(
      locale,
      typeof mapped === "object" ? initAdvancedSearch({
        ...options,
        indexes: localeIndexes,
        ...mapped
      }) : initAdvancedSearch({
        ...options,
        language: mapped,
        indexes: localeIndexes
      })
    );
  }
  return map;
}
function createI18nSearchAPI(type, options) {
  const get = type === "simple" ? initSimple(options) : initAdvanced(options);
  return createEndpoint({
    async export() {
      const map = await get;
      const entries = Array.from(map.entries()).map(async ([k, v]) => [
        k,
        await v.export()
      ]);
      return {
        type: "i18n",
        data: Object.fromEntries(await Promise.all(entries))
      };
    },
    async search(query, searchOptions) {
      const map = await get;
      const locale = searchOptions?.locale ?? options.i18n.defaultLanguage;
      const handler = map.get(locale);
      if (handler) return handler.search(query, searchOptions);
      return [];
    }
  });
}

// src/search/server.ts
function createSearchAPI(type, options) {
  if (type === "simple") {
    return createEndpoint(initSimpleSearch(options));
  }
  return createEndpoint(initAdvancedSearch(options));
}
function initSimpleSearch(options) {
  const doc = createDBSimple(options);
  return {
    async export() {
      return {
        type: "simple",
        ...save(await doc)
      };
    },
    async search(query) {
      const db = await doc;
      return searchSimple(db, query, options.search);
    }
  };
}
function initAdvancedSearch(options) {
  const get = createDB(options);
  return {
    async export() {
      return {
        type: "advanced",
        ...save(await get)
      };
    },
    async search(query, searchOptions) {
      const db = await get;
      return searchAdvanced(db, query, searchOptions?.tag, options.search);
    }
  };
}
export {
  createContentHighlighter,
  createFromSource,
  createI18nSearchAPI,
  createSearchAPI,
  initAdvancedSearch,
  initSimpleSearch
};
