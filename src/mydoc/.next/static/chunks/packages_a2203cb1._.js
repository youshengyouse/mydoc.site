(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/packages/openapi/dist/media/adapter.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "defaultAdapters",
    ()=>defaultAdapters
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$openapi$2f$dist$2f$utils$2f$input$2d$to$2d$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/openapi/dist/utils/input-to-string.js [app-client] (ecmascript)");
// @ts-expect-error -- untyped
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xml$2d$js$40$1$2e$6$2e$11$2f$node_modules$2f$xml$2d$js$2f$lib$2f$js2xml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/xml-js@1.6.11/node_modules/xml-js/lib/js2xml.js [app-client] (ecmascript)");
;
;
const defaultAdapters = {
    'application/json': {
        encode (data) {
            return JSON.stringify(data.body);
        },
        generateExample (data, ctx) {
            return str(data.body, 'application/json', ctx);
        }
    },
    'application/xml': {
        encode (data) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xml$2d$js$40$1$2e$6$2e$11$2f$node_modules$2f$xml$2d$js$2f$lib$2f$js2xml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(data.body, {
                compact: true,
                spaces: 2
            });
        },
        generateExample (data, ctx) {
            return str(data.body, 'application/xml', ctx);
        }
    },
    'application/x-ndjson': {
        encode (data) {
            if (Array.isArray(data.body)) {
                return data.body.map((v)=>JSON.stringify(v)).join('\n');
            }
            return JSON.stringify(data.body);
        },
        generateExample (data, ctx) {
            return str(data.body, 'application/x-ndjson', ctx);
        }
    },
    'application/x-www-form-urlencoded': {
        encode (data) {
            if (typeof data.body !== 'object') throw new Error("Input value must be object, received: ".concat(typeof data.body));
            const params = new URLSearchParams();
            for(const key in data.body){
                params.set(key, String(data.body[key]));
            }
            return params;
        },
        generateExample (data, ctx) {
            if (ctx.lang === 'js') {
                return "const body = new URLSearchParams(".concat(JSON.stringify(data.body, null, 2), ")");
            }
            return str(data.body, 'application/x-www-form-urlencoded', ctx);
        }
    },
    'multipart/form-data': {
        encode (data) {
            const formData = new FormData();
            const body = data.body;
            if (typeof body !== 'object' || !body) {
                throw new Error("Unsupported body type: ".concat(typeof body, ", expected: object"));
            }
            for(const key in body){
                const prop = body[key];
                if (prop === null || prop === undefined || Number.isNaN(prop)) continue;
                // Arrays (multi-value field)
                if (Array.isArray(prop)) {
                    for (const item of prop){
                        if (item === null || item === undefined) continue;
                        if (item instanceof File) {
                            formData.append(key, item, item.name);
                        } else if (item instanceof Blob) {
                            formData.append(key, item, 'blob');
                        } else if (typeof item === 'object') {
                            formData.append(key, JSON.stringify(item));
                        } else {
                            formData.append(key, String(item));
                        }
                    }
                } else if (prop instanceof File) {
                    formData.set(key, prop, prop.name);
                } else if (prop instanceof Blob) {
                    formData.set(key, prop, 'blob');
                } else if (typeof prop === 'object') {
                    formData.set(key, JSON.stringify(prop));
                } else {
                    formData.set(key, String(prop));
                }
            }
            return formData;
        },
        generateExample (data, ctx) {
            if (ctx.lang === 'python') {
                return "body = ".concat(JSON.stringify(data.body, null, 2));
            }
            const s = [];
            if (ctx.lang === 'js') {
                s.push("const body = new FormData();");
                for (const [key, value] of Object.entries(data.body)){
                    s.push("body.set(".concat(key, ", ").concat(JSON.stringify((0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$openapi$2f$dist$2f$utils$2f$input$2d$to$2d$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inputToString"])(value)), ")"));
                }
            }
            if (ctx.lang === 'go') {
                const { addImport } = ctx;
                addImport('mime/multipart');
                addImport('bytes');
                s.push('body := new(bytes.Buffer)');
                s.push('mp := multipart.NewWriter(payload)');
                for (const [key, value] of Object.entries(data.body)){
                    if (!value) continue;
                    const escaped = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$openapi$2f$dist$2f$utils$2f$input$2d$to$2d$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["escapeString"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$openapi$2f$dist$2f$utils$2f$input$2d$to$2d$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inputToString"])(value, 'application/json'), '`');
                    s.push('mp.WriteField("'.concat(key, '", ').concat(escaped, ")"));
                }
            }
            if (ctx.lang === 'java') {
                const { addImport } = ctx;
                addImport('java.net.http.HttpRequest.BodyPublishers');
                s.push("var body = BodyPublishers.ofByteArray(new byte[] { ... });");
            }
            if (ctx.lang === 'csharp') {
                s.push("var body = new MultipartFormDataContent();");
            }
            if (s.length > 0) return s.join('\n');
        }
    },
    'application/octet-stream': {
        encode (data) {
            return data.body;
        },
        generateExample () {
            // not supported
            return undefined;
        }
    }
};
function str(init, mediaType, ctx) {
    if (ctx.lang === 'js') {
        if (mediaType === 'application/json') {
            return "const body = JSON.stringify(".concat(JSON.stringify(init, null, 2), ")");
        }
        return "const body = ".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$openapi$2f$dist$2f$utils$2f$input$2d$to$2d$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["escapeString"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$openapi$2f$dist$2f$utils$2f$input$2d$to$2d$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inputToString"])(init, mediaType), '`'));
    }
    if (ctx.lang === 'python') {
        if (mediaType === 'application/json') return "body = ".concat(JSON.stringify(init, null, 2));
        return "body = ".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$openapi$2f$dist$2f$utils$2f$input$2d$to$2d$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["escapeString"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$openapi$2f$dist$2f$utils$2f$input$2d$to$2d$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inputToString"])(init, mediaType), '"""'));
    }
    if (ctx.lang === 'go') {
        const { addImport } = ctx;
        addImport('strings');
        return "body := strings.NewReader(".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$openapi$2f$dist$2f$utils$2f$input$2d$to$2d$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["escapeString"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$openapi$2f$dist$2f$utils$2f$input$2d$to$2d$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inputToString"])(init, mediaType), '`'), ")");
    }
    if (ctx.lang === 'java') {
        const { addImport } = ctx;
        addImport('java.net.http.HttpRequest.BodyPublishers');
        return "var body = BodyPublishers.ofString(".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$openapi$2f$dist$2f$utils$2f$input$2d$to$2d$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["escapeString"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$openapi$2f$dist$2f$utils$2f$input$2d$to$2d$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inputToString"])(init, mediaType), '"""'), ");");
    }
    if (ctx.lang === 'csharp') {
        const input = "\n".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$openapi$2f$dist$2f$utils$2f$input$2d$to$2d$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inputToString"])(init, mediaType), "\n");
        return "var body = new StringContent(".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$openapi$2f$dist$2f$utils$2f$input$2d$to$2d$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["escapeString"])(input, '"""'), ', Encoding.UTF8, "').concat(mediaType, '");');
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/openapi/dist/ui/contexts/api.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ApiProvider",
    ()=>ApiProvider,
    "useApiContext",
    ()=>useApiContext,
    "useServerSelectContext",
    ()=>useServerSelectContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.0_@babel+core@7.28.3_@opentelemetry+api@1.9.0_babel-plugin-macros@3.1.0_react-dom@1_j6u7u72df46a4ml46cu3en6mca/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.0_@babel+core@7.28.3_@opentelemetry+api@1.9.0_babel-plugin-macros@3.1.0_react-dom@1_j6u7u72df46a4ml46cu3en6mca/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$openapi$2f$dist$2f$media$2f$adapter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/openapi/dist/media/adapter.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
'use client';
;
;
;
const ApiContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
const ServerSelectContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function useApiContext() {
    _s();
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ApiContext);
    if (!ctx) throw new Error('Component must be used under <ApiProvider />');
    return ctx;
}
_s(useApiContext, "/dMy7t63NXD4eYACoT93CePwGrg=");
function useServerSelectContext() {
    _s1();
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ServerSelectContext);
    if (!ctx) throw new Error('Component must be used under <ApiProvider />');
    return ctx;
}
_s1(useServerSelectContext, "/dMy7t63NXD4eYACoT93CePwGrg=");
function ApiProvider(param) {
    let { defaultBaseUrl, children, servers, mediaAdapters, shikiOptions } = param;
    _s2();
    const [server, setServer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "ApiProvider.useState": ()=>{
            const defaultItem = defaultBaseUrl ? servers.find({
                "ApiProvider.useState": (item)=>item.url === defaultBaseUrl
            }["ApiProvider.useState"]) : servers.at(0);
            return defaultItem ? {
                url: defaultItem.url,
                variables: getDefaultValues(defaultItem)
            } : null;
        }
    }["ApiProvider.useState"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ApiProvider.useEffect": ()=>{
            const cached = localStorage.getItem('apiBaseUrl');
            if (!cached) return;
            try {
                const obj = JSON.parse(cached);
                if (!obj || typeof obj !== 'object') return;
                setServer(obj);
            } catch (e) {
            // ignore
            }
        }
    }["ApiProvider.useEffect"], []);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(ApiContext.Provider, {
        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
            "ApiProvider.useMemo": ()=>({
                    shikiOptions,
                    mediaAdapters: {
                        ...__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$openapi$2f$dist$2f$media$2f$adapter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultAdapters"],
                        ...mediaAdapters
                    },
                    servers
                })
        }["ApiProvider.useMemo"], [
            mediaAdapters,
            servers,
            shikiOptions
        ]),
        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(ServerSelectContext.Provider, {
            value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
                "ApiProvider.useMemo": ()=>({
                        server,
                        setServerVariables (variables) {
                            setServer({
                                "ApiProvider.useMemo": (prev)=>{
                                    if (!prev) return null;
                                    const updated = {
                                        ...prev,
                                        variables
                                    };
                                    localStorage.setItem('apiBaseUrl', JSON.stringify(updated));
                                    return updated;
                                }
                            }["ApiProvider.useMemo"]);
                        },
                        setServer (value) {
                            const obj = servers.find({
                                "ApiProvider.useMemo.obj": (item)=>item.url === value
                            }["ApiProvider.useMemo.obj"]);
                            if (!obj) return;
                            const result = {
                                url: value,
                                variables: getDefaultValues(obj)
                            };
                            localStorage.setItem('apiBaseUrl', JSON.stringify(result));
                            setServer(result);
                        }
                    })
            }["ApiProvider.useMemo"], [
                server,
                servers
            ]),
            children: children
        })
    });
}
_s2(ApiProvider, "VPseEuR70/7F02iEiLjDyYHlE70=");
_c = ApiProvider;
function getDefaultValues(server) {
    var _server_variables;
    return Object.fromEntries(Object.entries((_server_variables = server.variables) !== null && _server_variables !== void 0 ? _server_variables : {}).map((param)=>{
        let [k, v] = param;
        return [
            k,
            v.default
        ];
    }));
}
var _c;
__turbopack_context__.k.register(_c, "ApiProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/core/dist/chunk-NJLFLPV4.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/highlight/shiki.ts
__turbopack_context__.s([
    "defaultThemes",
    ()=>defaultThemes,
    "getHighlighter",
    ()=>getHighlighter,
    "highlight",
    ()=>highlight
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.0_@babel+core@7.28.3_@opentelemetry+api@1.9.0_babel-plugin-macros@3.1.0_react-dom@1_j6u7u72df46a4ml46cu3en6mca/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$hast$2d$util$2d$to$2d$jsx$2d$runtime$40$2$2e$3$2e$6$2f$node_modules$2f$hast$2d$util$2d$to$2d$jsx$2d$runtime$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/hast-util-to-jsx-runtime@2.3.6/node_modules/hast-util-to-jsx-runtime/lib/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.0_@babel+core@7.28.3_@opentelemetry+api@1.9.0_babel-plugin-macros@3.1.0_react-dom@1_j6u7u72df46a4ml46cu3en6mca/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.0_@babel+core@7.28.3_@opentelemetry+api@1.9.0_babel-plugin-macros@3.1.0_react-dom@1_j6u7u72df46a4ml46cu3en6mca/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
;
;
;
var defaultThemes = {
    light: "github-light",
    dark: "github-dark"
};
var highlighters = /* @__PURE__ */ new Map();
async function _highlight(code, options) {
    const { lang: initialLang, fallbackLanguage, components: _, engine = "oniguruma", ...rest } = options;
    let lang = initialLang;
    let themes;
    let themesToLoad;
    if ("theme" in options && options.theme) {
        themes = {
            theme: options.theme
        };
        themesToLoad = [
            themes.theme
        ];
    } else {
        themes = {
            themes: "themes" in options && options.themes ? options.themes : defaultThemes
        };
        themesToLoad = Object.values(themes.themes).filter((v)=>v !== void 0);
    }
    let highlighter;
    if (typeof engine === "string") {
        highlighter = await getHighlighter(engine, {
            langs: [],
            themes: themesToLoad
        });
    } else {
        highlighter = await getHighlighter("custom", {
            engine,
            langs: [],
            themes: themesToLoad
        });
        if ("TURBOPACK compile-time truthy", 1) {
            console.warn("[Fumadocs `highlight()`] Avoid passing `engine` directly. For custom engines, use `shiki` directly instead.");
        }
    }
    try {
        await highlighter.loadLanguage(lang);
    } catch (e) {
        lang = fallbackLanguage !== null && fallbackLanguage !== void 0 ? fallbackLanguage : "text";
        await highlighter.loadLanguage(lang);
    }
    return highlighter.codeToHast(code, {
        lang,
        ...rest,
        ...themes,
        defaultColor: "themes" in themes ? false : void 0
    });
}
function _renderHighlight(hast, options) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$hast$2d$util$2d$to$2d$jsx$2d$runtime$40$2$2e$3$2e$6$2f$node_modules$2f$hast$2d$util$2d$to$2d$jsx$2d$runtime$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toJsxRuntime"])(hast, {
        jsx: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"],
        jsxs: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"],
        development: false,
        components: options === null || options === void 0 ? void 0 : options.components,
        Fragment: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"]
    });
}
async function getHighlighter(engineType, options) {
    const { createHighlighter } = await __turbopack_context__.A("[project]/node_modules/.pnpm/shiki@3.11.0/node_modules/shiki/dist/index.mjs [app-client] (ecmascript, async loader)");
    let highlighter = highlighters.get(engineType);
    if (!highlighter) {
        let engine;
        if (engineType === "js") {
            engine = __turbopack_context__.A("[project]/node_modules/.pnpm/shiki@3.11.0/node_modules/shiki/dist/engine-javascript.mjs [app-client] (ecmascript, async loader)").then((res)=>res.createJavaScriptRegexEngine());
        } else if (engineType === "oniguruma" || !options.engine) {
            engine = __turbopack_context__.A("[project]/node_modules/.pnpm/shiki@3.11.0/node_modules/shiki/dist/engine-oniguruma.mjs [app-client] (ecmascript, async loader)").then((res)=>res.createOnigurumaEngine(__turbopack_context__.A("[project]/node_modules/.pnpm/shiki@3.11.0/node_modules/shiki/dist/wasm.mjs [app-client] (ecmascript, async loader)")));
        } else {
            engine = options.engine;
        }
        highlighter = createHighlighter({
            ...options,
            engine
        });
        highlighters.set(engineType, highlighter);
        return highlighter;
    }
    return highlighter.then(async (instance)=>{
        await Promise.all([
            // @ts-expect-error unknown
            instance.loadLanguage(...options.langs),
            // @ts-expect-error unknown
            instance.loadTheme(...options.themes)
        ]);
        return instance;
    });
}
async function highlight(code, options) {
    return _renderHighlight(await _highlight(code, options), options);
}
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/core/dist/highlight/client.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useShiki",
    ()=>useShiki
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$dist$2f$chunk$2d$NJLFLPV4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/core/dist/chunk-NJLFLPV4.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$dist$2f$chunk$2d$JSBRDJBE$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/core/dist/chunk-JSBRDJBE.js [app-client] (ecmascript)");
// src/highlight/client.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.0_@babel+core@7.28.3_@opentelemetry+api@1.9.0_babel-plugin-macros@3.1.0_react-dom@1_j6u7u72df46a4ml46cu3en6mca/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
var promises = {};
function useShiki(code, options, deps) {
    var _promises, _key;
    _s();
    const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])();
    const key = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useShiki.useMemo[key]": ()=>{
            const state = deps ? JSON.stringify(deps) : "".concat(options.lang, ":").concat(code);
            return "".concat(id, ":").concat(state);
        }
    }["useShiki.useMemo[key]"], [
        code,
        deps,
        id,
        options.lang
    ]);
    var _options_engine, _;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["use"])((_ = (_promises = promises)[_key = key]) !== null && _ !== void 0 ? _ : _promises[_key] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$dist$2f$chunk$2d$NJLFLPV4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["highlight"])(code, {
        ...options,
        engine: (_options_engine = options.engine) !== null && _options_engine !== void 0 ? _options_engine : "js"
    }));
}
_s(useShiki, "IxT9N3QWLS7HeV4RVUPOsM9CdWc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"]
    ];
});
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/ui/dist/components/dynamic-codeblock.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DynamicCodeBlock",
    ()=>DynamicCodeBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.0_@babel+core@7.28.3_@opentelemetry+api@1.9.0_babel-plugin-macros@3.1.0_react-dom@1_j6u7u72df46a4ml46cu3en6mca/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$components$2f$codeblock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/dist/components/codeblock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$dist$2f$highlight$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/core/dist/highlight/client.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$utils$2f$cn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/ui/dist/utils/cn.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwind$2d$merge$40$3$2e$3$2e$1$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__twMerge__as__cn$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tailwind-merge@3.3.1/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript) <export twMerge as cn>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.0_@babel+core@7.28.3_@opentelemetry+api@1.9.0_babel-plugin-macros@3.1.0_react-dom@1_j6u7u72df46a4ml46cu3en6mca/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
const PropsContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function DefaultPre(props) {
    const extraProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["use"])(PropsContext);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$components$2f$codeblock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CodeBlock"], {
        ...props,
        ...extraProps,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwind$2d$merge$40$3$2e$3$2e$1$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__twMerge__as__cn$3e$__["cn"])('my-0', props.className, extraProps === null || extraProps === void 0 ? void 0 : extraProps.className),
        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$components$2f$codeblock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Pre"], {
            children: props.children
        })
    });
}
_c = DefaultPre;
function DynamicCodeBlock(param) {
    let { lang, code, codeblock, options, wrapInSuspense = true } = param;
    const shikiOptions = {
        lang,
        ...options,
        components: {
            pre: DefaultPre,
            ...options === null || options === void 0 ? void 0 : options.components
        }
    };
    let children = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Internal, {
        code: code,
        options: shikiOptions
    });
    if (wrapInSuspense) children = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
        fallback: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Placeholder, {
            code: code,
            components: shikiOptions.components
        }),
        children: children
    });
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(PropsContext, {
        value: codeblock,
        children: children
    });
}
_c1 = DynamicCodeBlock;
function Placeholder(param) {
    let { code, components = {} } = param;
    const { pre: Pre = 'pre', code: Code = 'code' } = components;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Pre, {
        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Code, {
            children: code.split('\n').map((line, i)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("span", {
                    className: "line",
                    children: line
                }, i))
        })
    });
}
_c2 = Placeholder;
function Internal(param) {
    let { code, options } = param;
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$dist$2f$highlight$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useShiki"])(code, options);
}
_s(Internal, "4DkAfkGGYOpVgq94KPGwMEj9Gq4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$dist$2f$highlight$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useShiki"]
    ];
});
_c3 = Internal;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "DefaultPre");
__turbopack_context__.k.register(_c1, "DynamicCodeBlock");
__turbopack_context__.k.register(_c2, "Placeholder");
__turbopack_context__.k.register(_c3, "Internal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/openapi/dist/utils/url.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "joinURL",
    ()=>joinURL,
    "resolveRequestData",
    ()=>resolveRequestData,
    "resolveServerUrl",
    ()=>resolveServerUrl,
    "withBase",
    ()=>withBase
]);
function joinURL(base, pathname) {
    if (pathname.startsWith('/')) pathname = pathname.slice(1);
    if (base.endsWith('/')) base = base.slice(0, -1);
    if (pathname.length > 0) return base + '/' + pathname;
    else return base;
}
function withBase(url, base) {
    if (!url.startsWith('https://') && !url.startsWith('http://')) {
        return joinURL(base, url);
    }
    return url;
}
function resolveServerUrl(template, variables) {
    for (const [key, value] of Object.entries(variables)){
        template = template.replaceAll("{".concat(key, "}"), value);
    }
    return template;
}
function resolveRequestData(pathname, param) {
    let { path, query } = param;
    for(const key in path){
        const param = path[key];
        if (Array.isArray(param.value)) {
            pathname = pathname.replace("{".concat(key, "}"), param.value.join('/'));
        } else {
            pathname = pathname.replace("{".concat(key, "}"), param.value);
        }
    }
    const searchParams = new URLSearchParams();
    for(const key in query){
        const param = query[key];
        if (Array.isArray(param.value)) {
            for (const item of param.value){
                searchParams.append(key, item);
            }
        } else {
            searchParams.append(key, param.value);
        }
    }
    return searchParams.size > 0 ? "".concat(pathname, "?").concat(searchParams) : pathname;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/openapi/dist/ui/contexts/code-example.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CodeExample",
    ()=>CodeExample,
    "CodeExampleProvider",
    ()=>CodeExampleProvider,
    "CodeExampleSelector",
    ()=>CodeExampleSelector,
    "useRequestDataUpdater",
    ()=>useRequestDataUpdater,
    "useRequestInitialData",
    ()=>useRequestInitialData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.0_@babel+core@7.28.3_@opentelemetry+api@1.9.0_babel-plugin-macros@3.1.0_react-dom@1_j6u7u72df46a4ml46cu3en6mca/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.0_@babel+core@7.28.3_@opentelemetry+api@1.9.0_babel-plugin-macros@3.1.0_react-dom@1_j6u7u72df46a4ml46cu3en6mca/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$openapi$2f$dist$2f$ui$2f$contexts$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/openapi/dist/ui/contexts/api.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$components$2f$dynamic$2d$codeblock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/dist/components/dynamic-codeblock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$openapi$2f$dist$2f$ui$2f$components$2f$select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/openapi/dist/ui/components/select.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$dist$2f$utils$2f$use$2d$effect$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/core/dist/utils/use-effect-event.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$openapi$2f$dist$2f$utils$2f$url$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/openapi/dist/utils/url.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
const CodeExampleContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function CodeExampleProvider(param) {
    let { route, examples, initialKey, children } = param;
    _s();
    const [key, setKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialKey !== null && initialKey !== void 0 ? initialKey : examples[0].key);
    const listeners = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const setData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$dist$2f$utils$2f$use$2d$effect$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffectEvent"])({
        "CodeExampleProvider.useEffectEvent[setData]": (data, encoded)=>{
            for (const example of examples){
                if (example.key === key) {
                    // persistent changes
                    example.data = data;
                    example.encoded = encoded;
                    break;
                }
            }
            for (const listener of listeners.current){
                listener(data, encoded);
            }
        }
    }["CodeExampleProvider.useEffectEvent[setData]"]);
    const updateKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$dist$2f$utils$2f$use$2d$effect$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffectEvent"])({
        "CodeExampleProvider.useEffectEvent[updateKey]": (newKey)=>{
            const example = examples.find({
                "CodeExampleProvider.useEffectEvent[updateKey].example": (example)=>example.key === newKey
            }["CodeExampleProvider.useEffectEvent[updateKey].example"]);
            if (!example) return;
            setKey(newKey);
            for (const listener of listeners.current){
                listener(example.data, example.encoded);
            }
        }
    }["CodeExampleProvider.useEffectEvent[updateKey]"]);
    const addListener = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$dist$2f$utils$2f$use$2d$effect$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffectEvent"])({
        "CodeExampleProvider.useEffectEvent[addListener]": (listener)=>{
            // initial call to listeners to ensure their data is the latest
            // this is necessary to avoid race conditions between `useEffect()`
            const example = examples.find({
                "CodeExampleProvider.useEffectEvent[addListener].example": (example)=>example.key === key
            }["CodeExampleProvider.useEffectEvent[addListener].example"]);
            listener(example.data, example.encoded);
            listeners.current.push(listener);
        }
    }["CodeExampleProvider.useEffectEvent[addListener]"]);
    const removeListener = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$dist$2f$utils$2f$use$2d$effect$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffectEvent"])({
        "CodeExampleProvider.useEffectEvent[removeListener]": (listener)=>{
            listeners.current = listeners.current.filter({
                "CodeExampleProvider.useEffectEvent[removeListener]": (item)=>item !== listener
            }["CodeExampleProvider.useEffectEvent[removeListener]"]);
        }
    }["CodeExampleProvider.useEffectEvent[removeListener]"]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(CodeExampleContext, {
        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
            "CodeExampleProvider.useMemo": ()=>({
                    key,
                    route,
                    setKey: updateKey,
                    examples,
                    setData,
                    removeListener,
                    addListener
                })
        }["CodeExampleProvider.useMemo"], [
            addListener,
            examples,
            key,
            removeListener,
            route,
            setData,
            updateKey
        ]),
        children: children
    });
}
_s(CodeExampleProvider, "iNKvAzfN4xHr3nHKpYHEaZ4ooBo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$dist$2f$utils$2f$use$2d$effect$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffectEvent"],
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$dist$2f$utils$2f$use$2d$effect$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffectEvent"],
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$dist$2f$utils$2f$use$2d$effect$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffectEvent"],
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$dist$2f$utils$2f$use$2d$effect$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffectEvent"]
    ];
});
_c = CodeExampleProvider;
function CodeExample(sample) {
    _s1();
    const { shikiOptions, mediaAdapters } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$openapi$2f$dist$2f$ui$2f$contexts$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiContext"])();
    const { examples, key, route, addListener, removeListener } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(CodeExampleContext);
    const { server } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$openapi$2f$dist$2f$ui$2f$contexts$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useServerSelectContext"])();
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "CodeExample.useState": ()=>{
            return examples.find({
                "CodeExample.useState": (example)=>example.key === key
            }["CodeExample.useState"]).encoded;
        }
    }["CodeExample.useState"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CodeExample.useEffect": ()=>{
            const listener = {
                "CodeExample.useEffect.listener": (_, encoded)=>setData(encoded)
            }["CodeExample.useEffect.listener"];
            addListener(listener);
            return ({
                "CodeExample.useEffect": ()=>{
                    removeListener(listener);
                }
            })["CodeExample.useEffect"];
        }
    }["CodeExample.useEffect"], [
        addListener,
        removeListener
    ]);
    const code = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CodeExample.useMemo[code]": ()=>{
            if (!sample.source) return;
            if (typeof sample.source === 'string') return sample.source;
            return sample.source((0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$openapi$2f$dist$2f$utils$2f$url$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinURL"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$openapi$2f$dist$2f$utils$2f$url$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withBase"])(server ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$openapi$2f$dist$2f$utils$2f$url$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveServerUrl"])(server.url, server.variables) : '/', ("TURBOPACK compile-time truthy", 1) ? window.location.origin : "TURBOPACK unreachable"), (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$openapi$2f$dist$2f$utils$2f$url$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveRequestData"])(route, data)), data, {
                server: sample.serverContext,
                mediaAdapters
            });
        }
    }["CodeExample.useMemo[code]"], [
        mediaAdapters,
        sample,
        server,
        route,
        data
    ]);
    if (!code || !sample) return null;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$components$2f$dynamic$2d$codeblock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DynamicCodeBlock"], {
        lang: sample.lang,
        code: code,
        options: shikiOptions
    });
}
_s1(CodeExample, "LpYC3YA4F0PrN32dYUTK8Z98EMg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$openapi$2f$dist$2f$ui$2f$contexts$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiContext"],
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$openapi$2f$dist$2f$ui$2f$contexts$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useServerSelectContext"]
    ];
});
_c1 = CodeExample;
function CodeExampleSelector(param) {
    let { items } = param;
    _s2();
    const { key, setKey } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(CodeExampleContext);
    const item = items.find((item)=>item.value === key);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$openapi$2f$dist$2f$ui$2f$components$2f$select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
        value: key,
        onValueChange: setKey,
        children: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$openapi$2f$dist$2f$ui$2f$components$2f$select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                className: "not-prose mb-2",
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$openapi$2f$dist$2f$ui$2f$components$2f$select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                    asChild: true,
                    children: item ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(SelectDisplay, {
                        item: item
                    }) : null
                })
            }),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$openapi$2f$dist$2f$ui$2f$components$2f$select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                children: items.map((item)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$openapi$2f$dist$2f$ui$2f$components$2f$select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                        value: item.value,
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(SelectDisplay, {
                            item: item
                        })
                    }, item.value))
            })
        ]
    });
}
_s2(CodeExampleSelector, "1etCDuJEwz6XCTmK2cVsOo7CzA0=");
_c2 = CodeExampleSelector;
function SelectDisplay(param) {
    let { item, ...props } = param;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
        ...props,
        children: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("span", {
                className: "font-medium text-sm",
                children: item.title
            }),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("span", {
                className: "text-fd-muted-foreground",
                children: item.description
            })
        ]
    });
}
_c3 = SelectDisplay;
function useRequestInitialData() {
    _s3();
    const { examples, key } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(CodeExampleContext);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useRequestInitialData.useMemo": ()=>examples.find({
                "useRequestInitialData.useMemo": (example)=>example.key === key
            }["useRequestInitialData.useMemo"]).data
    }["useRequestInitialData.useMemo"], [
        examples,
        key
    ]);
}
_s3(useRequestInitialData, "mICqKjYdoFhWJPYkkXUCFDc8D9g=");
function useRequestDataUpdater() {
    _s4();
    const { setData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(CodeExampleContext);
    return {
        setData
    };
}
_s4(useRequestDataUpdater, "yOkhDEwIniNJsBv9UZDgEkhI/2s=");
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "CodeExampleProvider");
__turbopack_context__.k.register(_c1, "CodeExample");
__turbopack_context__.k.register(_c2, "CodeExampleSelector");
__turbopack_context__.k.register(_c3, "SelectDisplay");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=packages_a2203cb1._.js.map