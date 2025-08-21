(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/packages/core/dist/chunk-KAOEMCTI.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/utils/remove-undefined.ts
__turbopack_context__.s([
    "removeUndefined",
    ()=>removeUndefined
]);
function removeUndefined(value) {
    let deep = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    const obj = value;
    for (const key of Object.keys(obj)){
        if (obj[key] === void 0) delete obj[key];
        if (deep && typeof obj[key] === "object" && obj[key] !== null) {
            removeUndefined(obj[key], deep);
        } else if (deep && Array.isArray(obj[key])) {
            obj[key].forEach((v)=>removeUndefined(v, deep));
        }
    }
    return value;
}
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/core/dist/chunk-CNWEGOUF.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/search/shared.ts
__turbopack_context__.s([
    "createContentHighlighter",
    ()=>createContentHighlighter
]);
function escapeRegExp(input) {
    return input.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function buildRegexFromQuery(q) {
    const trimmed = q.trim();
    if (trimmed.length === 0) return null;
    const terms = Array.from(new Set(trimmed.split(/\s+/).map((t)=>t.trim()).filter(Boolean)));
    if (terms.length === 0) return null;
    const escaped = terms.map(escapeRegExp).join("|");
    return new RegExp("(".concat(escaped, ")"), "gi");
}
function createContentHighlighter(query) {
    const regex = typeof query === "string" ? buildRegexFromQuery(query) : query;
    return {
        highlight (content) {
            if (!regex) return [
                {
                    type: "text",
                    content
                }
            ];
            const out = [];
            let i = 0;
            for (const match of content.matchAll(regex)){
                if (i < match.index) {
                    out.push({
                        type: "text",
                        content: content.substring(i, match.index)
                    });
                }
                out.push({
                    type: "text",
                    content: match[0],
                    styles: {
                        highlight: true
                    }
                });
                i = match.index + match[0].length;
            }
            if (i < content.length) {
                out.push({
                    type: "text",
                    content: content.substring(i)
                });
            }
            return out;
        }
    };
}
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/core/dist/chunk-KIJ7AMBP.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "searchAdvanced",
    ()=>searchAdvanced,
    "searchSimple",
    ()=>searchSimple
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$dist$2f$chunk$2d$KAOEMCTI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/core/dist/chunk-KAOEMCTI.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$dist$2f$chunk$2d$CNWEGOUF$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/core/dist/chunk-CNWEGOUF.js [app-client] (ecmascript)");
// src/search/orama/search/simple.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$orama$2b$orama$40$3$2e$1$2e$11$2f$node_modules$2f40$orama$2f$orama$2f$dist$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@orama+orama@3.1.11/node_modules/@orama/orama/dist/browser/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$orama$2b$orama$40$3$2e$1$2e$11$2f$node_modules$2f40$orama$2f$orama$2f$dist$2f$browser$2f$methods$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@orama+orama@3.1.11/node_modules/@orama/orama/dist/browser/methods/search.js [app-client] (ecmascript)");
// src/search/orama/search/advanced.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$orama$2b$orama$40$3$2e$1$2e$11$2f$node_modules$2f40$orama$2f$orama$2f$dist$2f$browser$2f$methods$2f$docs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@orama+orama@3.1.11/node_modules/@orama/orama/dist/browser/methods/docs.js [app-client] (ecmascript)");
;
;
;
async function searchSimple(db, query) {
    let params = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const highlighter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$dist$2f$chunk$2d$CNWEGOUF$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContentHighlighter"])(query);
    const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$orama$2b$orama$40$3$2e$1$2e$11$2f$node_modules$2f40$orama$2f$orama$2f$dist$2f$browser$2f$methods$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["search"])(db, {
        term: query,
        tolerance: 1,
        ...params,
        boost: {
            title: 2,
            ..."boost" in params ? params.boost : void 0
        }
    });
    return result.hits.map((hit)=>({
            type: "page",
            content: hit.document.title,
            contentWithHighlights: highlighter.highlight(hit.document.title),
            id: hit.document.url,
            url: hit.document.url
        }));
}
;
async function searchAdvanced(db, query) {
    let tag = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [], extraParams = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    if (typeof tag === "string") tag = [
        tag
    ];
    let params = {
        ...extraParams,
        where: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$dist$2f$chunk$2d$KAOEMCTI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeUndefined"])({
            tags: tag.length > 0 ? {
                containsAll: tag
            } : void 0,
            ...extraParams.where
        }),
        groupBy: {
            properties: [
                "page_id"
            ],
            maxResult: 8,
            ...extraParams.groupBy
        }
    };
    if (query.length > 0) {
        params = {
            ...params,
            term: query,
            properties: [
                "content"
            ]
        };
    }
    const highlighter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$dist$2f$chunk$2d$CNWEGOUF$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContentHighlighter"])(query);
    const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$orama$2b$orama$40$3$2e$1$2e$11$2f$node_modules$2f40$orama$2f$orama$2f$dist$2f$browser$2f$methods$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["search"])(db, params);
    const list = [];
    var _result_groups;
    for (const item of (_result_groups = result.groups) !== null && _result_groups !== void 0 ? _result_groups : []){
        const pageId = item.values[0];
        const page = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$orama$2b$orama$40$3$2e$1$2e$11$2f$node_modules$2f40$orama$2f$orama$2f$dist$2f$browser$2f$methods$2f$docs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getByID"])(db, pageId);
        if (!page) continue;
        list.push({
            id: pageId,
            type: "page",
            content: page.content,
            contentWithHighlights: highlighter.highlight(page.content),
            url: page.url
        });
        for (const hit of item.result){
            if (hit.document.type === "page") continue;
            list.push({
                id: hit.document.id.toString(),
                content: hit.document.content,
                contentWithHighlights: highlighter.highlight(hit.document.content),
                type: hit.document.type,
                url: hit.document.url
            });
        }
    }
    return list;
}
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/core/dist/static-IWYDJ3C5.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "search",
    ()=>search
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$dist$2f$chunk$2d$KIJ7AMBP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/core/dist/chunk-KIJ7AMBP.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$dist$2f$chunk$2d$KAOEMCTI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/core/dist/chunk-KAOEMCTI.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$dist$2f$chunk$2d$CNWEGOUF$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/core/dist/chunk-CNWEGOUF.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$dist$2f$chunk$2d$JSBRDJBE$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/core/dist/chunk-JSBRDJBE.js [app-client] (ecmascript)");
// src/search/client/static.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$orama$2b$orama$40$3$2e$1$2e$11$2f$node_modules$2f40$orama$2f$orama$2f$dist$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@orama+orama@3.1.11/node_modules/@orama/orama/dist/browser/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$orama$2b$orama$40$3$2e$1$2e$11$2f$node_modules$2f40$orama$2f$orama$2f$dist$2f$browser$2f$methods$2f$create$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@orama+orama@3.1.11/node_modules/@orama/orama/dist/browser/methods/create.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$orama$2b$orama$40$3$2e$1$2e$11$2f$node_modules$2f40$orama$2f$orama$2f$dist$2f$browser$2f$methods$2f$serialization$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@orama+orama@3.1.11/node_modules/@orama/orama/dist/browser/methods/serialization.js [app-client] (ecmascript)");
;
;
;
;
;
var cache = /* @__PURE__ */ new Map();
async function loadDB(param) {
    let { from = "/api/search", initOrama = (locale)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$orama$2b$orama$40$3$2e$1$2e$11$2f$node_modules$2f40$orama$2f$orama$2f$dist$2f$browser$2f$methods$2f$create$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])({
            schema: {
                _: "string"
            },
            language: locale
        }) } = param;
    const cacheKey = from;
    const cached = cache.get(cacheKey);
    if (cached) return cached;
    async function init() {
        const res = await fetch(from);
        if (!res.ok) throw new Error("failed to fetch exported search indexes from ".concat(from, ", make sure the search database is exported and available for client."));
        const data = await res.json();
        const dbs = /* @__PURE__ */ new Map();
        if (data.type === "i18n") {
            await Promise.all(Object.entries(data.data).map(async (param)=>{
                let [k, v] = param;
                const db2 = await initOrama(k);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$orama$2b$orama$40$3$2e$1$2e$11$2f$node_modules$2f40$orama$2f$orama$2f$dist$2f$browser$2f$methods$2f$serialization$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["load"])(db2, v);
                dbs.set(k, {
                    type: v.type,
                    db: db2
                });
            }));
            return dbs;
        }
        const db = await initOrama();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$orama$2b$orama$40$3$2e$1$2e$11$2f$node_modules$2f40$orama$2f$orama$2f$dist$2f$browser$2f$methods$2f$serialization$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["load"])(db, data);
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
    const db = (await loadDB(options)).get(locale !== null && locale !== void 0 ? locale : "");
    if (!db) return [];
    if (db.type === "simple") return (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$dist$2f$chunk$2d$KIJ7AMBP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["searchSimple"])(db, query);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$dist$2f$chunk$2d$KIJ7AMBP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["searchAdvanced"])(db.db, query, tag);
}
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=packages_core_dist_a7292a44._.js.map