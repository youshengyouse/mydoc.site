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
"[project]/packages/openapi/dist/ui/components/input.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input,
    "labelVariants",
    ()=>labelVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.0_@babel+core@7.28.3_@opentelemetry+api@1.9.0_babel-plugin-macros@3.1.0_react-dom@1_j6u7u72df46a4ml46cu3en6mca/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.0_@babel+core@7.28.3_@opentelemetry+api@1.9.0_babel-plugin-macros@3.1.0_react-dom@1_j6u7u72df46a4ml46cu3en6mca/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$utils$2f$cn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/ui/dist/utils/cn.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwind$2d$merge$40$3$2e$3$2e$1$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__twMerge__as__cn$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tailwind-merge@3.3.1/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript) <export twMerge as cn>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$class$2d$variance$2d$authority$40$0$2e$7$2e$1$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/class-variance-authority@0.7.1/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
;
;
;
;
const labelVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$class$2d$variance$2d$authority$40$0$2e$7$2e$1$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])('text-xs font-medium text-fd-foreground peer-disabled:cursor-not-allowed peer-disabled:opacity-70');
const Input = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = (param, ref)=>{
    let { className, type, ...props } = param;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("input", {
        type: type,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwind$2d$merge$40$3$2e$3$2e$1$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__twMerge__as__cn$3e$__["cn"])('flex h-9 w-full rounded-md border bg-fd-secondary px-2 py-1.5 text-[13px] text-fd-secondary-foreground transition-colors placeholder:text-fd-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-fd-ring disabled:cursor-not-allowed disabled:opacity-50', className),
        ref: ref,
        ...props
    });
});
_c1 = Input;
Input.displayName = 'Input';
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Input$React.forwardRef");
__turbopack_context__.k.register(_c1, "Input");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/openapi/dist/playground/get-default-values.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getDefaultValue",
    ()=>getDefaultValue
]);
function getDefaultValue(schema) {
    if (typeof schema === 'boolean') return null;
    const type = schema.type;
    if (Array.isArray(type)) return getDefaultValue({
        ...schema,
        type: type[0]
    });
    var _schema_properties;
    if (type === 'object' && typeof schema === 'object') return Object.fromEntries(Object.entries((_schema_properties = schema.properties) !== null && _schema_properties !== void 0 ? _schema_properties : {}).map((param)=>{
        let [key, prop] = param;
        return [
            key,
            getDefaultValue(prop)
        ];
    }));
    if (type === 'array') return [];
    if (type === 'null') return null;
    if (type === 'string') {
        if (typeof schema === 'object' && schema.format === 'binary') return undefined;
        return '';
    }
    if (type === 'number' || type === 'integer') return 0;
    if (type === 'boolean') return false;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/openapi/dist/utils/combine-schema.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Combine multiple object schemas into one
 */ __turbopack_context__.s([
    "combineSchema",
    ()=>combineSchema
]);
function combineSchema(schema) {
    let result = {};
    const types = new Set();
    const title = new Set();
    function add(s) {
        var _this;
        if (typeof s === 'boolean') {
            result = s;
            return;
        }
        if (typeof result === 'boolean') return;
        if (s.title) title.add(s.title);
        if (s.type) {
            for (const v of Array.isArray(s.type) ? s.type : [
                s.type
            ]){
                types.add(v);
            }
        }
        for (const key of [
            'oneOf',
            'required',
            'enum'
        ]){
            if (!s[key]) continue;
            var _result_key;
            result[key] = [
                ...s[key],
                ...(_result_key = result[key]) !== null && _result_key !== void 0 ? _result_key : []
            ];
        }
        for (const key of [
            'properties',
            'patternProperties'
        ]){
            if (!s[key]) continue;
            var _result_key1;
            (_result_key1 = result[key]) !== null && _result_key1 !== void 0 ? _result_key1 : result[key] = {};
            Object.assign(result[key], s[key]);
        }
        if (s.additionalProperties === true) {
            result.additionalProperties = true;
        } else if (s.additionalProperties && typeof result.additionalProperties !== 'boolean') {
            var _result_additionalProperties;
            (_result_additionalProperties = result.additionalProperties) !== null && _result_additionalProperties !== void 0 ? _result_additionalProperties : result.additionalProperties = {};
            Object.assign(result.additionalProperties, s.additionalProperties);
        }
        var _s_allOf;
        (_this = (_s_allOf = s.allOf) !== null && _s_allOf !== void 0 ? _s_allOf : s.anyOf) === null || _this === void 0 ? void 0 : _this.forEach(add);
    }
    schema.forEach(add);
    if (title.size > 0) result.title = Array.from(title).join(' & ');
    if (types.size > 0) {
        const typeArr = Array.from(types.values());
        result.type = typeArr.length === 1 ? typeArr[0] : typeArr;
    }
    return result;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/openapi/dist/utils/schema-to-string.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "schemaToString",
    ()=>schemaToString
]);
function schemaToString(value, ctx) {
    function union(union, sep) {
        const members = new Set();
        let nullable = false;
        for (const item of union){
            const result = run(item);
            if (result === 'null') {
                nullable = true;
            } else if (result !== 'unknown') {
                members.add(result);
            }
        }
        const result = Array.from(members).join(sep);
        return nullable ? "".concat(result, " | null") : result;
    }
    function run(schema) {
        if (schema === true) return 'any';
        else if (schema === false) return 'never';
        if (schema.title) return schema.title;
        const referenceName = ctx === null || ctx === void 0 ? void 0 : ctx.dereferenceMap.get(schema);
        if (referenceName) return referenceName.split('/').at(-1);
        if (Array.isArray(schema.type)) {
            const members = new Set();
            const types = schema.type;
            for (const type of types){
                schema.type = type;
                const str = run(schema);
                schema.type = types;
                if (str !== 'unknown') members.add(str);
            }
            return Array.from(members).join(' | ');
        }
        if (schema.type === 'array') return "array<".concat(schema.items ? run(schema.items) : 'unknown', ">");
        if (schema.oneOf) {
            return union(schema.oneOf, ' | ');
        }
        var _schema_anyOf;
        const combinedOf = (_schema_anyOf = schema.anyOf) !== null && _schema_anyOf !== void 0 ? _schema_anyOf : schema.allOf;
        if (combinedOf) {
            return union(combinedOf, ' & ');
        }
        if (schema.not) return "not ".concat(run(schema.not));
        if (schema.type === 'string' && schema.format === 'binary') return 'file';
        if (schema.type && Array.isArray(schema.type)) {
            return schema.type.filter((v)=>v !== 'null').join(' | ');
        }
        if (schema.type) {
            return schema.type;
        }
        return 'unknown';
    }
    return run(value);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/openapi/dist/playground/schema.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SchemaProvider",
    ()=>SchemaProvider,
    "anyFields",
    ()=>anyFields,
    "fallbackAny",
    ()=>fallbackAny,
    "useFieldInfo",
    ()=>useFieldInfo,
    "useResolvedSchema",
    ()=>useResolvedSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.0_@babel+core@7.28.3_@opentelemetry+api@1.9.0_babel-plugin-macros@3.1.0_react-dom@1_j6u7u72df46a4ml46cu3en6mca/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ajv$40$8$2e$17$2e$1$2f$node_modules$2f$ajv$2f$dist$2f$2020$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/2020.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.0_@babel+core@7.28.3_@opentelemetry+api@1.9.0_babel-plugin-macros@3.1.0_react-dom@1_j6u7u72df46a4ml46cu3en6mca/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$hook$2d$form$40$7$2e$62$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react-hook-form@7.62.0_react@19.1.1/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$dist$2f$utils$2f$use$2d$effect$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/core/dist/utils/use-effect-event.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$openapi$2f$dist$2f$playground$2f$get$2d$default$2d$values$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/openapi/dist/playground/get-default-values.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
;
;
;
;
;
;
const SchemaContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const anyFields = {
    type: [
        'string',
        'number',
        'boolean',
        'array',
        'object'
    ],
    items: true,
    additionalProperties: true
};
function SchemaProvider(param) {
    let { references, fieldInfoMap, children } = param;
    _s();
    const ajv = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SchemaProvider.useMemo[ajv]": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ajv$40$8$2e$17$2e$1$2f$node_modules$2f$ajv$2f$dist$2f$2020$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ajv2020"]({
                strict: false,
                validateSchema: false,
                validateFormats: false,
                schemas: references
            })
    }["SchemaProvider.useMemo[ajv]"], [
        references
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(SchemaContext.Provider, {
        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
            "SchemaProvider.useMemo": ()=>({
                    references,
                    fieldInfoMap,
                    ajv
                })
        }["SchemaProvider.useMemo"], [
            fieldInfoMap,
            references,
            ajv
        ]),
        children: children
    });
}
_s(SchemaProvider, "Iz6urVIgmdoKxycO8BDgMURJiic=");
_c = SchemaProvider;
function useFieldInfo(fieldName, schema, depth) {
    _s1();
    const { fieldInfoMap, ajv } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(SchemaContext);
    const form = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$hook$2d$form$40$7$2e$62$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormContext"])();
    const keyName = "".concat(fieldName, ":").concat(depth);
    const value = form.getValues(fieldName);
    const [info, setInfo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "useFieldInfo.useState": ()=>{
            var _fieldInfoMap_get;
            return (_fieldInfoMap_get = fieldInfoMap.get(keyName)) !== null && _fieldInfoMap_get !== void 0 ? _fieldInfoMap_get : init();
        }
    }["useFieldInfo.useState"]);
    fieldInfoMap.set(keyName, info);
    /**
     * We automatically merge `allOf` | `anyOf` if all members are objects, but it's also possible for them to behave same as a union (`oneOf`).
     */ function isUnion(anyOrAllOf) {
        return anyOrAllOf.every((item)=>{
            if (typeof item === 'boolean') return true;
            const u = item.anyOf || item.allOf;
            return item.type !== 'object' && (!u || isUnion(u));
        });
    }
    function getUnion() {
        if (schema.anyOf && isUnion(schema.anyOf)) {
            return [
                schema.anyOf,
                'anyOf'
            ];
        }
        if (schema.allOf && isUnion(schema.allOf)) {
            return [
                schema.allOf,
                'allOf'
            ];
        }
        if (schema.oneOf) return [
            schema.oneOf,
            'oneOf'
        ];
    }
    function init() {
        const union = getUnion();
        if (union) {
            const [members, field] = union;
            let oneOf = members.findIndex((item)=>ajv.validate(item, value));
            if (oneOf === -1) oneOf = 0;
            return {
                oneOf,
                unionField: field
            };
        }
        if (Array.isArray(schema.type)) {
            const types = schema.type;
            var _types_find;
            return {
                selectedType: (_types_find = types.find((type)=>{
                    schema.type = type;
                    const match = ajv.validate(schema, value);
                    schema.type = types;
                    return match;
                })) !== null && _types_find !== void 0 ? _types_find : types[0],
                oneOf: -1
            };
        }
        return {
            oneOf: -1
        };
    }
    return {
        info,
        updateInfo: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$dist$2f$utils$2f$use$2d$effect$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffectEvent"])({
            "useFieldInfo.useEffectEvent": (value)=>{
                const updated = {
                    ...info,
                    ...value
                };
                if (updated.oneOf === info.oneOf && updated.selectedType === info.selectedType) return;
                setInfo(updated);
                let valueSchema = schema;
                if (updated.unionField) {
                    valueSchema = schema[updated.unionField][updated.oneOf];
                } else if (updated.selectedType) {
                    valueSchema = {
                        ...schema,
                        type: updated.selectedType
                    };
                }
                form.setValue(fieldName, (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$openapi$2f$dist$2f$playground$2f$get$2d$default$2d$values$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDefaultValue"])(valueSchema));
            }
        }["useFieldInfo.useEffectEvent"])
    };
}
_s1(useFieldInfo, "GLQyCSYmk7Ezjo8nimiNby1OOBw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$hook$2d$form$40$7$2e$62$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormContext"],
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$dist$2f$utils$2f$use$2d$effect$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffectEvent"]
    ];
});
function useResolvedSchema(schema) {
    _s2();
    const { references } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(SchemaContext);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useResolvedSchema.useMemo": ()=>{
            if (typeof schema === 'boolean') return anyFields;
            if (schema.$ref) return fallbackAny(references[schema.$ref]);
            return schema;
        }
    }["useResolvedSchema.useMemo"], [
        references,
        schema
    ]);
}
_s2(useResolvedSchema, "lZq9C3g6Y4LWGMBzpyplVM8yS5o=");
function fallbackAny(schema) {
    return typeof schema === 'boolean' ? anyFields : schema;
}
var _c;
__turbopack_context__.k.register(_c, "SchemaProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/openapi/dist/playground/inputs.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FieldInput",
    ()=>FieldInput,
    "FieldSet",
    ()=>FieldSet,
    "JsonInput",
    ()=>JsonInput,
    "ObjectInput",
    ()=>ObjectInput
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.0_@babel+core@7.28.3_@opentelemetry+api@1.9.0_babel-plugin-macros@3.1.0_react-dom@1_j6u7u72df46a4ml46cu3en6mca/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.0_@babel+core@7.28.3_@opentelemetry+api@1.9.0_babel-plugin-macros@3.1.0_react-dom@1_j6u7u72df46a4ml46cu3en6mca/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$openapi$2f$dist$2f$icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/openapi/dist/icons.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/dist/icons.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$hook$2d$form$40$7$2e$62$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react-hook-form@7.62.0_react@19.1.1/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$openapi$2f$dist$2f$ui$2f$components$2f$select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/openapi/dist/ui/components/select.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$openapi$2f$dist$2f$ui$2f$components$2f$input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/openapi/dist/ui/components/input.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$openapi$2f$dist$2f$playground$2f$get$2d$default$2d$values$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/openapi/dist/playground/get-default-values.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$utils$2f$cn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/ui/dist/utils/cn.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwind$2d$merge$40$3$2e$3$2e$1$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__twMerge__as__cn$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tailwind-merge@3.3.1/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript) <export twMerge as cn>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$components$2f$ui$2f$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/dist/components/ui/button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$openapi$2f$dist$2f$utils$2f$combine$2d$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/openapi/dist/utils/combine-schema.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$openapi$2f$dist$2f$utils$2f$schema$2d$to$2d$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/openapi/dist/utils/schema-to-string.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$openapi$2f$dist$2f$playground$2f$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/openapi/dist/playground/schema.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
function FieldLabel(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("label", {
        ...props,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwind$2d$merge$40$3$2e$3$2e$1$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__twMerge__as__cn$3e$__["cn"])('w-full inline-flex items-center gap-0.5', props.className),
        children: props.children
    });
}
_c = FieldLabel;
function FieldLabelName(param) {
    let { required = false, ...props } = param;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("span", {
        ...props,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwind$2d$merge$40$3$2e$3$2e$1$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__twMerge__as__cn$3e$__["cn"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$openapi$2f$dist$2f$ui$2f$components$2f$input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["labelVariants"])(), 'font-mono me-auto', props.className),
        children: [
            props.children,
            required && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("span", {
                className: "text-red-400/80 mx-1",
                children: "*"
            })
        ]
    });
}
_c1 = FieldLabelName;
function FieldLabelType(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("code", {
        ...props,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwind$2d$merge$40$3$2e$3$2e$1$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__twMerge__as__cn$3e$__["cn"])('text-xs text-fd-muted-foreground', props.className),
        children: props.children
    });
}
_c2 = FieldLabelType;
function ObjectInput(param) {
    let { field: _field, fieldName, ...props } = param;
    _s();
    const resolved = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$openapi$2f$dist$2f$playground$2f$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResolvedSchema"])(_field);
    const field = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ObjectInput.useMemo[field]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$openapi$2f$dist$2f$utils$2f$combine$2d$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combineSchema"])([
                resolved
            ])
    }["ObjectInput.useMemo[field]"], [
        resolved
    ]);
    if (typeof field === 'boolean') return;
    var _field_properties;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
        ...props,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwind$2d$merge$40$3$2e$3$2e$1$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__twMerge__as__cn$3e$__["cn"])('grid grid-cols-1 gap-4 @md:grid-cols-2', props.className),
        children: [
            Object.entries((_field_properties = field.properties) !== null && _field_properties !== void 0 ? _field_properties : {}).map((param)=>{
                let [key, child] = param;
                var _field_required;
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(FieldSet, {
                    name: key,
                    field: child,
                    fieldName: "".concat(fieldName, ".").concat(key),
                    isRequired: (_field_required = field.required) === null || _field_required === void 0 ? void 0 : _field_required.includes(key)
                }, key);
            }),
            (field.additionalProperties || field.patternProperties) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(DynamicProperties, {
                fieldName: fieldName,
                filterKey: (v)=>!field.properties || !Object.keys(field.properties).includes(v),
                getType: (key)=>{
                    for(const pattern in field.patternProperties){
                        if (key.match(RegExp(pattern))) {
                            return field.patternProperties[pattern];
                        }
                    }
                    if (field.additionalProperties) return field.additionalProperties;
                    return __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$openapi$2f$dist$2f$playground$2f$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["anyFields"];
                }
            })
        ]
    });
}
_s(ObjectInput, "AFjEdrZYPVDNZfaxUesTC8iB4u8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$openapi$2f$dist$2f$playground$2f$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResolvedSchema"]
    ];
});
_c3 = ObjectInput;
function JsonInput(param) {
    let { fieldName } = param;
    _s1();
    const controller = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$hook$2d$form$40$7$2e$62$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useController"])({
        name: fieldName
    });
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [value, setValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "JsonInput.useState": ()=>JSON.stringify(controller.field.value, null, 2)
    }["JsonInput.useState"]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
        className: "flex flex-col bg-fd-secondary text-fd-secondary-foreground overflow-hidden border rounded-lg",
        children: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("textarea", {
                ...controller.field,
                value: value,
                className: "p-2 h-[240px] text-sm font-mono resize-none focus-visible:outline-none",
                onChange: (v)=>{
                    setValue(v.target.value);
                    try {
                        controller.field.onChange(JSON.parse(v.target.value));
                        setError(null);
                    } catch (e) {
                        if (e instanceof Error) setError(e.message);
                    }
                }
            }),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("p", {
                className: "p-2 text-xs font-mono border-t text-red-400 empty:hidden",
                children: error
            })
        ]
    });
}
_s1(JsonInput, "Yl6riWQC89hxtNsBjuXDI3m6DSU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$hook$2d$form$40$7$2e$62$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useController"]
    ];
});
_c4 = JsonInput;
function DynamicProperties(param) {
    let { fieldName, filterKey = ()=>true, getType = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$openapi$2f$dist$2f$playground$2f$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["anyFields"] } = param;
    _s2();
    const { control, setValue, getValues } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$hook$2d$form$40$7$2e$62$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormContext"])();
    const [nextName, setNextName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [properties, setProperties] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "DynamicProperties.useState": ()=>{
            const value = getValues(fieldName);
            if (value) return Object.keys(value).filter(filterKey);
            return [];
        }
    }["DynamicProperties.useState"]);
    const onAppend = ()=>{
        const name = nextName.trim();
        if (name.length === 0) return;
        setProperties((p)=>{
            if (p.includes(name) || !filterKey(name)) return p;
            const type = getType(name);
            setValue("".concat(fieldName, ".").concat(name), (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$openapi$2f$dist$2f$playground$2f$get$2d$default$2d$values$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDefaultValue"])(type));
            setNextName('');
            return [
                ...p,
                name
            ];
        });
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            properties.map((item)=>{
                const type = getType(item);
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(FieldSet, {
                    name: item,
                    field: type,
                    fieldName: "".concat(fieldName, ".").concat(item),
                    toolbar: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("button", {
                        type: "button",
                        "aria-label": "Remove Item",
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwind$2d$merge$40$3$2e$3$2e$1$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__twMerge__as__cn$3e$__["cn"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$components$2f$ui$2f$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buttonVariants"])({
                            color: 'outline',
                            size: 'icon-xs'
                        })),
                        onClick: ()=>{
                            setProperties((p)=>p.filter((prop)=>prop !== item));
                            control.unregister("".concat(fieldName, ".").concat(item));
                        },
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trash2"], {})
                    })
                }, item);
            }),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                className: "flex gap-2 col-span-full",
                children: [
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$openapi$2f$dist$2f$ui$2f$components$2f$input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                        value: nextName,
                        placeholder: "Enter Property Name",
                        onChange: (e)=>setNextName(e.target.value),
                        onKeyDown: (e)=>{
                            if (e.key === 'Enter') {
                                onAppend();
                                e.preventDefault();
                            }
                        }
                    }),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("button", {
                        type: "button",
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwind$2d$merge$40$3$2e$3$2e$1$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__twMerge__as__cn$3e$__["cn"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$components$2f$ui$2f$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buttonVariants"])({
                            color: 'secondary',
                            size: 'sm'
                        }), 'px-4'),
                        onClick: onAppend,
                        children: "New"
                    })
                ]
            })
        ]
    });
}
_s2(DynamicProperties, "kCTfXsI837figTttktYRKW2UwAA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$hook$2d$form$40$7$2e$62$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormContext"]
    ];
});
_c5 = DynamicProperties;
function FieldInput(param) {
    let { field, fieldName, isRequired, ...props } = param;
    _s3();
    const { control, register } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$hook$2d$form$40$7$2e$62$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormContext"])();
    if (field.type === 'string' && field.format === 'binary') {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$hook$2d$form$40$7$2e$62$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Controller"], {
            control: control,
            name: fieldName,
            render: (param)=>{
                let { field: { value, onChange, ...restField } } = param;
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                    ...props,
                    children: [
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("label", {
                            htmlFor: fieldName,
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwind$2d$merge$40$3$2e$3$2e$1$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__twMerge__as__cn$3e$__["cn"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$components$2f$ui$2f$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buttonVariants"])({
                                color: 'secondary',
                                className: 'w-full h-9 gap-2 truncate'
                            })),
                            children: value instanceof File ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("span", {
                                        className: "text-fd-muted-foreground text-xs",
                                        children: "Selected"
                                    }),
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("span", {
                                        className: "truncate w-0 flex-1 text-end",
                                        children: value.name
                                    })
                                ]
                            }) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("span", {
                                className: "text-fd-muted-foreground",
                                children: "Upload"
                            })
                        }),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("input", {
                            id: fieldName,
                            type: "file",
                            multiple: false,
                            onChange: (e)=>{
                                if (!e.target.files) return;
                                onChange(e.target.files.item(0));
                            },
                            hidden: true,
                            ...restField
                        })
                    ]
                });
            }
        });
    }
    if (field.type === 'boolean') {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$hook$2d$form$40$7$2e$62$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Controller"], {
            control: control,
            name: fieldName,
            render: (param)=>{
                let { field: { value, onChange, ...restField } } = param;
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$openapi$2f$dist$2f$ui$2f$components$2f$select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                    value: String(value),
                    onValueChange: (value)=>onChange(value === 'null' ? null : value === 'true'),
                    disabled: restField.disabled,
                    children: [
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$openapi$2f$dist$2f$ui$2f$components$2f$select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                            id: fieldName,
                            className: props.className,
                            ...restField,
                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$openapi$2f$dist$2f$ui$2f$components$2f$select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {})
                        }),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$openapi$2f$dist$2f$ui$2f$components$2f$select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                            children: [
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$openapi$2f$dist$2f$ui$2f$components$2f$select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                    value: "true",
                                    children: "True"
                                }),
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$openapi$2f$dist$2f$ui$2f$components$2f$select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                    value: "false",
                                    children: "False"
                                }),
                                !isRequired && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$openapi$2f$dist$2f$ui$2f$components$2f$select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                    value: "null",
                                    children: "Null"
                                })
                            ]
                        })
                    ]
                });
            }
        });
    }
    if (field.type === 'null') return;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$openapi$2f$dist$2f$ui$2f$components$2f$input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
        id: fieldName,
        placeholder: "Enter value",
        type: field.type === 'string' ? 'text' : 'number',
        step: field.type === 'number' ? 'any' : undefined,
        ...register(fieldName, {
            valueAsNumber: field.type === 'number' || field.type === 'integer'
        }),
        ...props
    });
}
_s3(FieldInput, "S6ppapEoqrYhK0bCz1E8pbYC6KM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$hook$2d$form$40$7$2e$62$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormContext"]
    ];
});
_c6 = FieldInput;
function FieldSet(param) {
    let { field: _field, fieldName, toolbar, name, isRequired, depth = 0, slotType, collapsible = true, ...props } = param;
    _s4();
    const field = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$openapi$2f$dist$2f$playground$2f$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResolvedSchema"])(_field);
    const [show, setShow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(!collapsible);
    const { info, updateInfo } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$openapi$2f$dist$2f$playground$2f$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFieldInfo"])(fieldName, field, depth);
    if (_field === false) return null;
    if (info.unionField) {
        const union = field[info.unionField];
        const showSelect = union.length > 1;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(FieldSet, {
            ...props,
            name: name,
            fieldName: fieldName,
            isRequired: isRequired,
            field: union[info.oneOf],
            depth: depth + 1,
            slotType: showSelect ? false : slotType,
            toolbar: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    showSelect && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("select", {
                        className: "text-xs font-mono",
                        value: info.oneOf,
                        onChange: (e)=>{
                            updateInfo({
                                oneOf: Number(e.target.value)
                            });
                        },
                        children: union.map((item, i)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("option", {
                                value: i,
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$openapi$2f$dist$2f$utils$2f$schema$2d$to$2d$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["schemaToString"])(item)
                            }, i))
                    }),
                    toolbar
                ]
            })
        });
    }
    if (Array.isArray(field.type)) {
        const showSelect = field.type.length > 1;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(FieldSet, {
            ...props,
            name: name,
            fieldName: fieldName,
            isRequired: isRequired,
            field: {
                ...field,
                type: info.selectedType
            },
            depth: depth + 1,
            slotType: showSelect ? false : slotType,
            toolbar: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    showSelect && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("select", {
                        className: "text-xs font-mono",
                        value: info.selectedType,
                        onChange: (e)=>{
                            updateInfo({
                                selectedType: e.target.value
                            });
                        },
                        children: field.type.map((item)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("option", {
                                value: item,
                                children: item
                            }, item))
                    }),
                    toolbar
                ]
            })
        });
    }
    const showBn = collapsible && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("button", {
        type: "button",
        onClick: ()=>setShow((prev)=>!prev),
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwind$2d$merge$40$3$2e$3$2e$1$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__twMerge__as__cn$3e$__["cn"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$components$2f$ui$2f$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buttonVariants"])({
            size: 'icon-xs',
            color: 'ghost',
            className: 'text-fd-muted-foreground -ms-1'
        })),
        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChevronDown"], {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwind$2d$merge$40$3$2e$3$2e$1$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__twMerge__as__cn$3e$__["cn"])(show && 'rotate-180')
        })
    });
    if (field.type === 'object' || field.anyOf || field.allOf) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("fieldset", {
            ...props,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwind$2d$merge$40$3$2e$3$2e$1$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__twMerge__as__cn$3e$__["cn"])('flex flex-col gap-1.5 col-span-full @container', props.className),
            children: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(FieldLabel, {
                    htmlFor: fieldName,
                    children: [
                        showBn,
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(FieldLabelName, {
                            required: isRequired,
                            children: name
                        }),
                        slotType !== null && slotType !== void 0 ? slotType : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(FieldLabelType, {
                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$openapi$2f$dist$2f$utils$2f$schema$2d$to$2d$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["schemaToString"])(field)
                        }),
                        toolbar
                    ]
                }),
                show && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(ObjectInput, {
                    field: field,
                    fieldName: fieldName,
                    ...props,
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwind$2d$merge$40$3$2e$3$2e$1$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__twMerge__as__cn$3e$__["cn"])('rounded-lg border border-fd-primary/20 bg-fd-background/50 p-2 shadow-sm', props.className)
                })
            ]
        });
    }
    if (field.type === 'array') {
        var _field_items;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("fieldset", {
            ...props,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwind$2d$merge$40$3$2e$3$2e$1$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__twMerge__as__cn$3e$__["cn"])('flex flex-col gap-1.5 col-span-full', props.className),
            children: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(FieldLabel, {
                    htmlFor: fieldName,
                    children: [
                        showBn,
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(FieldLabelName, {
                            required: isRequired,
                            children: name
                        }),
                        slotType !== null && slotType !== void 0 ? slotType : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(FieldLabelType, {
                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$openapi$2f$dist$2f$utils$2f$schema$2d$to$2d$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["schemaToString"])(field)
                        }),
                        toolbar
                    ]
                }),
                show && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(ArrayInput, {
                    fieldName: fieldName,
                    items: (_field_items = field.items) !== null && _field_items !== void 0 ? _field_items : __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$openapi$2f$dist$2f$playground$2f$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["anyFields"],
                    ...props,
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwind$2d$merge$40$3$2e$3$2e$1$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__twMerge__as__cn$3e$__["cn"])('rounded-lg border border-fd-primary/20 bg-fd-background/50 p-2 shadow-sm', props.className)
                })
            ]
        });
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("fieldset", {
        ...props,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwind$2d$merge$40$3$2e$3$2e$1$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__twMerge__as__cn$3e$__["cn"])('flex flex-col gap-1.5', props.className),
        children: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(FieldLabel, {
                htmlFor: fieldName,
                children: [
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(FieldLabelName, {
                        required: isRequired,
                        children: name
                    }),
                    slotType !== null && slotType !== void 0 ? slotType : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(FieldLabelType, {
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$openapi$2f$dist$2f$utils$2f$schema$2d$to$2d$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["schemaToString"])(field)
                    }),
                    toolbar
                ]
            }),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(FieldInput, {
                field: field,
                fieldName: fieldName,
                isRequired: isRequired
            })
        ]
    });
}
_s4(FieldSet, "4qMhc+JPEGtiZBvWA34pU5gQUSA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$openapi$2f$dist$2f$playground$2f$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResolvedSchema"],
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$openapi$2f$dist$2f$playground$2f$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFieldInfo"]
    ];
});
_c7 = FieldSet;
function ArrayInput(param) {
    let { fieldName, items, ...props } = param;
    _s5();
    var _fieldName_split_at;
    const name = (_fieldName_split_at = fieldName.split('.').at(-1)) !== null && _fieldName_split_at !== void 0 ? _fieldName_split_at : '';
    const { fields, append, remove } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$hook$2d$form$40$7$2e$62$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFieldArray"])({
        name: fieldName
    });
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
        ...props,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwind$2d$merge$40$3$2e$3$2e$1$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__twMerge__as__cn$3e$__["cn"])('flex flex-col gap-2', props.className),
        children: [
            fields.map((item, index)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(FieldSet, {
                    name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("span", {
                        className: "text-fd-muted-foreground",
                        children: [
                            name,
                            "[",
                            index,
                            "]"
                        ]
                    }),
                    field: items,
                    fieldName: "".concat(fieldName, ".").concat(index),
                    toolbar: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("button", {
                        type: "button",
                        "aria-label": "Remove Item",
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwind$2d$merge$40$3$2e$3$2e$1$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__twMerge__as__cn$3e$__["cn"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$components$2f$ui$2f$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buttonVariants"])({
                            color: 'outline',
                            size: 'icon-xs'
                        })),
                        onClick: ()=>remove(index),
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trash2"], {})
                    })
                }, item.id)),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("button", {
                type: "button",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwind$2d$merge$40$3$2e$3$2e$1$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__twMerge__as__cn$3e$__["cn"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$components$2f$ui$2f$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buttonVariants"])({
                    color: 'secondary',
                    className: 'gap-1.5 py-2',
                    size: 'sm'
                })),
                onClick: ()=>{
                    append((0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$openapi$2f$dist$2f$playground$2f$get$2d$default$2d$values$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDefaultValue"])(items));
                },
                children: [
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Plus"], {
                        className: "size-4"
                    }),
                    "New Item"
                ]
            })
        ]
    });
}
_s5(ArrayInput, "ZUdpHmDLsHW29pYmVu7vZWnnIQg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$hook$2d$form$40$7$2e$62$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFieldArray"]
    ];
});
_c8 = ArrayInput;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8;
__turbopack_context__.k.register(_c, "FieldLabel");
__turbopack_context__.k.register(_c1, "FieldLabelName");
__turbopack_context__.k.register(_c2, "FieldLabelType");
__turbopack_context__.k.register(_c3, "ObjectInput");
__turbopack_context__.k.register(_c4, "JsonInput");
__turbopack_context__.k.register(_c5, "DynamicProperties");
__turbopack_context__.k.register(_c6, "FieldInput");
__turbopack_context__.k.register(_c7, "FieldSet");
__turbopack_context__.k.register(_c8, "ArrayInput");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/openapi/dist/playground/status-info.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getStatusInfo",
    ()=>getStatusInfo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$openapi$2f$dist$2f$icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/openapi/dist/icons.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/dist/icons.js [app-client] (ecmascript)");
;
const statusMap = {
    400: {
        description: 'Bad Request',
        color: 'text-red-500',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CircleX"]
    },
    401: {
        description: 'Unauthorized',
        color: 'text-red-500',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CircleX"]
    },
    403: {
        description: 'Forbidden',
        color: 'text-red-500',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CircleX"]
    },
    404: {
        description: 'Not Found',
        color: 'text-fd-muted-foreground',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CircleX"]
    },
    500: {
        description: 'Internal Server Error',
        color: 'text-red-500',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CircleX"]
    }
};
function getStatusInfo(status) {
    if (status in statusMap) {
        return statusMap[status];
    }
    if (status >= 200 && status < 300) {
        return {
            description: 'Successful',
            color: 'text-green-500',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CircleCheck"]
        };
    }
    if (status >= 400) {
        return {
            description: 'Error',
            color: 'text-red-500',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CircleX"]
        };
    }
    return {
        description: 'No Description',
        color: 'text-fd-muted-foreground',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CircleX"]
    };
}
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
"[project]/packages/openapi/dist/ui/components/method-label.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge,
    "MethodLabel",
    ()=>MethodLabel,
    "badgeVariants",
    ()=>badgeVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.0_@babel+core@7.28.3_@opentelemetry+api@1.9.0_babel-plugin-macros@3.1.0_react-dom@1_j6u7u72df46a4ml46cu3en6mca/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$class$2d$variance$2d$authority$40$0$2e$7$2e$1$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/class-variance-authority@0.7.1/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$utils$2f$cn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/ui/dist/utils/cn.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwind$2d$merge$40$3$2e$3$2e$1$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__twMerge__as__cn$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tailwind-merge@3.3.1/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript) <export twMerge as cn>");
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$class$2d$variance$2d$authority$40$0$2e$7$2e$1$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])('font-mono font-medium', {
    variants: {
        color: {
            green: 'text-green-600 dark:text-green-400',
            yellow: 'text-yellow-600 dark:text-yellow-400',
            red: 'text-red-600 dark:text-red-400',
            blue: 'text-blue-600 dark:text-blue-400',
            orange: 'text-orange-600 dark:text-orange-400'
        }
    }
});
function getMethodColor(method) {
    switch(method.toUpperCase()){
        case 'PUT':
            return 'yellow';
        case 'PATCH':
            return 'orange';
        case 'POST':
            return 'blue';
        case 'DELETE':
            return 'red';
        default:
            return 'green';
    }
}
function Badge(param) {
    let { className, color, ...props } = param;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("span", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwind$2d$merge$40$3$2e$3$2e$1$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__twMerge__as__cn$3e$__["cn"])(badgeVariants({
            color,
            className
        })),
        ...props,
        children: props.children
    });
}
_c = Badge;
function MethodLabel(param) {
    let { children, ...props } = param;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Badge, {
        ...props,
        color: getMethodColor(children),
        children: children.toUpperCase()
    });
}
_c1 = MethodLabel;
var _c, _c1;
__turbopack_context__.k.register(_c, "Badge");
__turbopack_context__.k.register(_c1, "MethodLabel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/openapi/dist/utils/use-query.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useQuery",
    ()=>useQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.0_@babel+core@7.28.3_@opentelemetry+api@1.9.0_babel-plugin-macros@3.1.0_react-dom@1_j6u7u72df46a4ml46cu3en6mca/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
function useQuery(fn) {
    _s();
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    const fnRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(fn);
    fnRef.current = fn;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useQuery.useMemo": ()=>({
                isLoading: loading,
                data,
                error,
                start () {
                    for(var _len = arguments.length, input = new Array(_len), _key = 0; _key < _len; _key++){
                        input[_key] = arguments[_key];
                    }
                    setLoading(true);
                    void fnRef.current(...input).then({
                        "useQuery.useMemo": (res)=>{
                            setData(res);
                            setError(undefined);
                        }
                    }["useQuery.useMemo"]).catch({
                        "useQuery.useMemo": (err)=>{
                            setData(undefined);
                            setError(err);
                        }
                    }["useQuery.useMemo"]).finally({
                        "useQuery.useMemo": ()=>{
                            setLoading(false);
                        }
                    }["useQuery.useMemo"]);
                }
            })
    }["useQuery.useMemo"], [
        error,
        data,
        loading
    ]);
}
_s(useQuery, "7Ht1DXTI9PP61xmqTmVKP2Fjj+g=");
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
"[project]/packages/openapi/dist/playground/client.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Client
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.0_@babel+core@7.28.3_@opentelemetry+api@1.9.0_babel-plugin-macros@3.1.0_react-dom@1_j6u7u72df46a4ml46cu3en6mca/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.0_@babel+core@7.28.3_@opentelemetry+api@1.9.0_babel-plugin-macros@3.1.0_react-dom@1_j6u7u72df46a4ml46cu3en6mca/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$hook$2d$form$40$7$2e$62$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react-hook-form@7.62.0_react@19.1.1/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$openapi$2f$dist$2f$ui$2f$contexts$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/openapi/dist/ui/contexts/api.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$openapi$2f$dist$2f$playground$2f$inputs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/openapi/dist/playground/inputs.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$openapi$2f$dist$2f$playground$2f$status$2d$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/openapi/dist/playground/status-info.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$openapi$2f$dist$2f$utils$2f$url$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/openapi/dist/utils/url.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$components$2f$dynamic$2d$codeblock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/dist/components/dynamic-codeblock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$openapi$2f$dist$2f$ui$2f$components$2f$method$2d$label$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/openapi/dist/ui/components/method-label.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$openapi$2f$dist$2f$utils$2f$use$2d$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/openapi/dist/utils/use-query.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$components$2f$ui$2f$collapsible$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/dist/components/ui/collapsible.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$openapi$2f$dist$2f$icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/openapi/dist/icons.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/dist/icons.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$openapi$2f$dist$2f$requests$2f$_shared$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/openapi/dist/requests/_shared.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$components$2f$ui$2f$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/dist/components/ui/button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$utils$2f$cn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/ui/dist/utils/cn.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwind$2d$merge$40$3$2e$3$2e$1$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__twMerge__as__cn$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tailwind-merge@3.3.1/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript) <export twMerge as cn>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$openapi$2f$dist$2f$playground$2f$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/openapi/dist/playground/schema.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$openapi$2f$dist$2f$ui$2f$contexts$2f$code$2d$example$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/openapi/dist/ui/contexts/code-example.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$dist$2f$utils$2f$use$2d$effect$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/core/dist/utils/use-effect-event.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$dist$2f$utils$2f$use$2d$on$2d$change$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/core/dist/utils/use-on-change.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$dist$2f$chunk$2d$EMWGTXSW$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/core/dist/chunk-EMWGTXSW.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$openapi$2f$dist$2f$ui$2f$components$2f$select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/openapi/dist/ui/components/select.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$openapi$2f$dist$2f$ui$2f$components$2f$input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/openapi/dist/ui/components/input.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const AuthPrefix = '__fumadocs_auth';
const ServerSelect = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lazy"])(_c = ()=>__turbopack_context__.A("[project]/packages/openapi/dist/ui/server-select.js [app-client] (ecmascript, async loader)"));
_c1 = ServerSelect;
const OauthDialog = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lazy"])(_c2 = ()=>__turbopack_context__.A("[project]/packages/openapi/dist/playground/auth/oauth-dialog.js [app-client] (ecmascript, async loader)").then((mod)=>({
            default: mod.OauthDialog
        })));
_c3 = OauthDialog;
const OauthDialogTrigger = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lazy"])(_c4 = ()=>__turbopack_context__.A("[project]/packages/openapi/dist/playground/auth/oauth-dialog.js [app-client] (ecmascript, async loader)").then((mod)=>({
            default: mod.OauthDialogTrigger
        })));
_c5 = OauthDialogTrigger;
function Client(param) {
    let { route, method = 'GET', securities, parameters = [], body, fields, references, proxyUrl, components: { ResultDisplay = DefaultResultDisplay } = {}, ...rest } = param;
    _s();
    const { server } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$openapi$2f$dist$2f$ui$2f$contexts$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useServerSelectContext"])();
    const requestData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$openapi$2f$dist$2f$ui$2f$contexts$2f$code$2d$example$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRequestInitialData"])();
    const updater = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$openapi$2f$dist$2f$ui$2f$contexts$2f$code$2d$example$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRequestDataUpdater"])();
    const fieldInfoMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Client.useMemo[fieldInfoMap]": ()=>new Map()
    }["Client.useMemo[fieldInfoMap]"], []);
    const { mediaAdapters } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$openapi$2f$dist$2f$ui$2f$contexts$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiContext"])();
    const [securityId, setSecurityId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const { inputs, mapInputs } = useAuthInputs(securities[securityId]);
    const defaultValues = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Client.useMemo[defaultValues]": ()=>({
                path: requestData.path,
                query: requestData.query,
                header: requestData.header,
                body: requestData.body,
                cookie: requestData.cookie
            })
    }["Client.useMemo[defaultValues]"], [
        requestData
    ]);
    const form = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$hook$2d$form$40$7$2e$62$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"])({
        defaultValues
    });
    const testQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$openapi$2f$dist$2f$utils$2f$use$2d$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        "Client.useQuery[testQuery]": async (input)=>{
            const fetcher = await __turbopack_context__.A("[project]/packages/openapi/dist/playground/fetcher.js [app-client] (ecmascript, async loader)").then({
                "Client.useQuery[testQuery]": (mod)=>mod.createBrowserFetcher(mediaAdapters)
            }["Client.useQuery[testQuery]"]);
            var _input__encoded;
            (_input__encoded = input._encoded) !== null && _input__encoded !== void 0 ? _input__encoded : input._encoded = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$openapi$2f$dist$2f$requests$2f$_shared$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeRequestData"])({
                ...mapInputs(input),
                method,
                bodyMediaType: body === null || body === void 0 ? void 0 : body.mediaType
            }, mediaAdapters, parameters);
            return fetcher.fetch((0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$openapi$2f$dist$2f$utils$2f$url$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinURL"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$openapi$2f$dist$2f$utils$2f$url$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withBase"])(server ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$openapi$2f$dist$2f$utils$2f$url$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveServerUrl"])(server.url, server.variables) : '/', window.location.origin), (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$openapi$2f$dist$2f$utils$2f$url$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveRequestData"])(route, input._encoded)), {
                proxyUrl,
                ...input._encoded
            });
        }
    }["Client.useQuery[testQuery]"]);
    function initAuthValues(values, inputs) {
        for (const item of inputs){
            manipulateValues(values, item.fieldName, ()=>{
                const stored = localStorage.getItem(AuthPrefix + item.original.id);
                if (stored) {
                    const parsed = JSON.parse(stored);
                    if (typeof parsed === typeof item.defaultValue) return parsed;
                }
                return item.defaultValue;
            });
        }
        return values;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$dist$2f$chunk$2d$EMWGTXSW$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOnChange"])(defaultValues, {
        "Client.useOnChange": ()=>{
            fieldInfoMap.clear();
            form.reset(initAuthValues(defaultValues, inputs));
        }
    }["Client.useOnChange"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$dist$2f$chunk$2d$EMWGTXSW$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOnChange"])(inputs, {
        "Client.useOnChange": (current, previous)=>{
            form.reset({
                "Client.useOnChange": (values)=>{
                    for (const item of previous){
                        if (current.some({
                            "Client.useOnChange": (param)=>{
                                let { original } = param;
                                return original.id === item.original.id;
                            }
                        }["Client.useOnChange"])) {
                            continue;
                        }
                        manipulateValues(values, item.fieldName, {
                            "Client.useOnChange": ()=>undefined
                        }["Client.useOnChange"]);
                    }
                    return initAuthValues(values, current);
                }
            }["Client.useOnChange"]);
        }
    }["Client.useOnChange"]);
    const onUpdateDebounced = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$dist$2f$utils$2f$use$2d$effect$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffectEvent"])({
        "Client.useEffectEvent[onUpdateDebounced]": (values)=>{
            for (const item of inputs){
                const value = item.fieldName.split('.').reduce({
                    "Client.useEffectEvent[onUpdateDebounced].value": (v, seg)=>v[seg]
                }["Client.useEffectEvent[onUpdateDebounced].value"], values);
                if (value) {
                    localStorage.setItem(AuthPrefix + item.original.id, JSON.stringify(value));
                }
            }
            const data = {
                ...mapInputs(values),
                method,
                bodyMediaType: body === null || body === void 0 ? void 0 : body.mediaType
            };
            var _values__encoded;
            (_values__encoded = values._encoded) !== null && _values__encoded !== void 0 ? _values__encoded : values._encoded = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$openapi$2f$dist$2f$requests$2f$_shared$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeRequestData"])(data, mediaAdapters, parameters);
            updater.setData(data, values._encoded);
        }
    }["Client.useEffectEvent[onUpdateDebounced]"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Client.useEffect": ()=>{
            let timer = null;
            const subscription = form.subscribe({
                formState: {
                    values: true
                },
                callback (param) {
                    let { values } = param;
                    // remove cached encoded request data
                    delete values._encoded;
                    if (timer) window.clearTimeout(timer);
                    timer = window.setTimeout({
                        "Client.useEffect.subscription": ()=>onUpdateDebounced(values)
                    }["Client.useEffect.subscription"], timer ? 400 : 0);
                }
            });
            form.reset({
                "Client.useEffect": (values)=>initAuthValues(values, inputs)
            }["Client.useEffect"]);
            return ({
                "Client.useEffect": ()=>subscription()
            })["Client.useEffect"];
        // eslint-disable-next-line react-hooks/exhaustive-deps -- mounted once only
        }
    }["Client.useEffect"], []);
    const onSubmit = form.handleSubmit((value)=>{
        testQuery.start(mapInputs(value));
    });
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$hook$2d$form$40$7$2e$62$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormProvider"], {
        ...form,
        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$openapi$2f$dist$2f$playground$2f$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SchemaProvider"], {
            fieldInfoMap: fieldInfoMap,
            references: references,
            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("form", {
                ...rest,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwind$2d$merge$40$3$2e$3$2e$1$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__twMerge__as__cn$3e$__["cn"])('not-prose flex flex-col rounded-xl border shadow-md overflow-hidden bg-fd-card text-fd-card-foreground', rest.className),
                onSubmit: onSubmit,
                children: [
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(ServerSelect, {}),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                        className: "flex flex-row items-center gap-2 text-sm p-3 pb-0",
                        children: [
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$openapi$2f$dist$2f$ui$2f$components$2f$method$2d$label$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MethodLabel"], {
                                children: method
                            }),
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Route, {
                                route: route,
                                className: "flex-1"
                            }),
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("button", {
                                type: "submit",
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwind$2d$merge$40$3$2e$3$2e$1$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__twMerge__as__cn$3e$__["cn"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$components$2f$ui$2f$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buttonVariants"])({
                                    color: 'primary',
                                    size: 'sm'
                                }), 'px-3 py-1.5'),
                                disabled: testQuery.isLoading,
                                children: testQuery.isLoading ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LoaderCircle"], {
                                    className: "size-4 animate-spin"
                                }) : 'Send'
                            })
                        ]
                    }),
                    securities.length > 0 && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(SecurityTabs, {
                        securities: securities,
                        securityId: securityId,
                        setSecurityId: setSecurityId,
                        children: inputs.map((input)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: input.children
                            }, input.fieldName))
                    }),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(FormBody, {
                        body: body,
                        fields: fields,
                        parameters: parameters
                    }),
                    testQuery.data ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(ResultDisplay, {
                        data: testQuery.data
                    }) : null
                ]
            })
        })
    });
}
_s(Client, "w4fz7GAMcQzwSC9LjWjzd7gGd5M=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$openapi$2f$dist$2f$ui$2f$contexts$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useServerSelectContext"],
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$openapi$2f$dist$2f$ui$2f$contexts$2f$code$2d$example$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRequestInitialData"],
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$openapi$2f$dist$2f$ui$2f$contexts$2f$code$2d$example$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRequestDataUpdater"],
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$openapi$2f$dist$2f$ui$2f$contexts$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiContext"],
        useAuthInputs,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$hook$2d$form$40$7$2e$62$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"],
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$openapi$2f$dist$2f$utils$2f$use$2d$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$dist$2f$chunk$2d$EMWGTXSW$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOnChange"],
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$dist$2f$chunk$2d$EMWGTXSW$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOnChange"],
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$dist$2f$utils$2f$use$2d$effect$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffectEvent"]
    ];
});
_c6 = Client;
function SecurityTabs(param) {
    let { securities, setSecurityId, securityId, children } = param;
    _s1();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const form = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$hook$2d$form$40$7$2e$62$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormContext"])();
    const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(CollapsiblePanel, {
        title: "Authorization",
        children: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$openapi$2f$dist$2f$ui$2f$components$2f$select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                value: securityId.toString(),
                onValueChange: (v)=>setSecurityId(Number(v)),
                children: [
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$openapi$2f$dist$2f$ui$2f$components$2f$select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$openapi$2f$dist$2f$ui$2f$components$2f$select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {})
                    }),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$openapi$2f$dist$2f$ui$2f$components$2f$select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                        children: securities.map((security, i)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$openapi$2f$dist$2f$ui$2f$components$2f$select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                value: i.toString(),
                                children: security.map((item)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                        className: "max-w-[600px]",
                                        children: [
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("p", {
                                                className: "font-mono font-medium",
                                                children: item.id
                                            }),
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("p", {
                                                className: "text-fd-muted-foreground whitespace-pre-wrap",
                                                children: item.description
                                            })
                                        ]
                                    }, item.id))
                            }, i))
                    })
                ]
            }),
            children
        ]
    });
    for(let i = 0; i < securities.length; i++){
        const security = securities[i];
        for (const item of security){
            if (item.type === 'oauth2') {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(OauthDialog, {
                    scheme: item,
                    scopes: item.scopes,
                    open: open,
                    setOpen: (v)=>{
                        setOpen(v);
                        if (v) {
                            setSecurityId(i);
                        }
                    },
                    setToken: (token)=>form.setValue('header.Authorization', token),
                    children: result
                });
            }
        }
    }
    return result;
}
_s1(SecurityTabs, "8+3GoB+KFlBIAtlG7vU1NzXGGQY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$hook$2d$form$40$7$2e$62$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormContext"]
    ];
});
_c7 = SecurityTabs;
const ParamTypes = [
    'path',
    'header',
    'cookie',
    'query'
];
function FormBody(param) {
    let { parameters = [], fields = {}, body } = param;
    _s2();
    const panels = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "FormBody.useMemo[panels]": ()=>{
            return ParamTypes.map({
                "FormBody.useMemo[panels]": (type)=>{
                    const items = parameters.filter({
                        "FormBody.useMemo[panels].items": (v)=>v.in === type
                    }["FormBody.useMemo[panels].items"]);
                    if (items.length === 0) return;
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(CollapsiblePanel, {
                        title: {
                            header: 'Header',
                            cookie: 'Cookies',
                            query: 'Query',
                            path: 'Path'
                        }[type],
                        children: items.map({
                            "FormBody.useMemo[panels]": (field)=>{
                                const fieldName = "".concat(type, ".").concat(field.name);
                                const schema = field.content ? field.content[Object.keys(field.content)[0]].schema : field.schema;
                                if (fields === null || fields === void 0 ? void 0 : fields.parameter) {
                                    return renderCustomField(fieldName, schema, fields.parameter, field.name);
                                }
                                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$openapi$2f$dist$2f$playground$2f$inputs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FieldSet"], {
                                    name: field.name,
                                    fieldName: fieldName,
                                    field: schema
                                }, fieldName);
                            }
                        }["FormBody.useMemo[panels]"])
                    }, type);
                }
            }["FormBody.useMemo[panels]"]);
        }
    }["FormBody.useMemo[panels]"], [
        fields.parameter,
        parameters
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            panels,
            body && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(CollapsiblePanel, {
                title: "Body",
                children: fields.body ? renderCustomField('body', body.schema, fields.body) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(BodyInput, {
                    field: body.schema
                })
            })
        ]
    });
}
_s2(FormBody, "kQ/xQodSrI+FtG5R+XNpTdnQIE8=");
_c8 = FormBody;
function BodyInput(param) {
    let { field: _field } = param;
    _s3();
    const field = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$openapi$2f$dist$2f$playground$2f$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResolvedSchema"])(_field);
    const [isJson, setIsJson] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    if (field.format === 'binary') return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$openapi$2f$dist$2f$playground$2f$inputs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FieldSet"], {
        field: field,
        fieldName: "body"
    });
    if (isJson) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("button", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwind$2d$merge$40$3$2e$3$2e$1$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__twMerge__as__cn$3e$__["cn"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$components$2f$ui$2f$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buttonVariants"])({
                    color: 'secondary',
                    size: 'sm',
                    className: 'w-fit font-mono p-2'
                })),
                onClick: ()=>setIsJson(false),
                type: "button",
                children: "Close JSON Editor"
            }),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$openapi$2f$dist$2f$playground$2f$inputs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JsonInput"], {
                fieldName: "body"
            })
        ]
    });
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$openapi$2f$dist$2f$playground$2f$inputs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FieldSet"], {
        field: field,
        fieldName: "body",
        collapsible: false,
        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("button", {
            type: "button",
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwind$2d$merge$40$3$2e$3$2e$1$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__twMerge__as__cn$3e$__["cn"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$components$2f$ui$2f$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buttonVariants"])({
                color: 'secondary',
                size: 'sm',
                className: 'p-2'
            })),
            onClick: ()=>setIsJson(true),
            children: "Open JSON Editor"
        })
    });
}
_s3(BodyInput, "x0TwTd9N4ZaNErGKCg3ZIzSIu2Q=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$openapi$2f$dist$2f$playground$2f$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResolvedSchema"]
    ];
});
_c9 = BodyInput;
/**
 * manipulate values without mutating the original object
 *
 * @returns a new manipulated object
 */ function manipulateValues(values, fieldName, update) {
    let clone = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
    const root = clone ? {
        ...values
    } : values;
    let current = root;
    const segments = fieldName.split('.');
    for(let i = 0; i < segments.length; i++){
        const segment = segments[i];
        if (i !== segments.length - 1) {
            let v = current[segment];
            if (clone) v = {
                ...v
            };
            current[segment] = v;
            current = v;
            continue;
        }
        const updated = update(current[segment]);
        if (updated === undefined) {
            delete current[segment];
        } else {
            current[segment] = updated;
        }
    }
    return root;
}
function useAuthInputs(securities) {
    _s4();
    const inputs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useAuthInputs.useMemo[inputs]": ()=>{
            const result = [];
            if (!securities) return result;
            for (const security of securities){
                if (security.type === 'http' && security.scheme === 'basic') {
                    const fieldName = "header.Authorization";
                    result.push({
                        fieldName,
                        original: security,
                        defaultValue: {
                            username: '',
                            password: ''
                        },
                        mapOutput (out) {
                            if (out && typeof out === 'object') {
                                return "Basic ".concat(btoa("".concat('username' in out ? out.username : '', ":").concat('password' in out ? out.password : '')));
                            }
                            return out;
                        },
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$openapi$2f$dist$2f$playground$2f$inputs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ObjectInput"], {
                            field: {
                                type: 'object',
                                properties: {
                                    username: {
                                        type: 'string'
                                    },
                                    password: {
                                        type: 'string'
                                    }
                                },
                                required: [
                                    'username',
                                    'password'
                                ]
                            },
                            fieldName: fieldName
                        })
                    });
                } else if (security.type === 'oauth2') {
                    const fieldName = 'header.Authorization';
                    result.push({
                        fieldName: fieldName,
                        original: security,
                        defaultValue: 'Bearer ',
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("fieldset", {
                            className: "flex flex-col gap-2",
                            children: [
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("label", {
                                    htmlFor: fieldName,
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwind$2d$merge$40$3$2e$3$2e$1$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__twMerge__as__cn$3e$__["cn"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$openapi$2f$dist$2f$ui$2f$components$2f$input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["labelVariants"])()),
                                    children: "Access Token"
                                }),
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                    className: "flex gap-2",
                                    children: [
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$openapi$2f$dist$2f$playground$2f$inputs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FieldInput"], {
                                            fieldName: fieldName,
                                            isRequired: true,
                                            field: {
                                                type: 'string'
                                            },
                                            className: "flex-1"
                                        }),
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(OauthDialogTrigger, {
                                            type: "button",
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwind$2d$merge$40$3$2e$3$2e$1$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__twMerge__as__cn$3e$__["cn"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$components$2f$ui$2f$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buttonVariants"])({
                                                size: 'sm',
                                                color: 'secondary'
                                            })),
                                            children: "Authorize"
                                        })
                                    ]
                                })
                            ]
                        })
                    });
                } else if (security.type === 'http') {
                    const fieldName = 'header.Authorization';
                    result.push({
                        fieldName: fieldName,
                        original: security,
                        defaultValue: 'Bearer ',
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$openapi$2f$dist$2f$playground$2f$inputs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FieldSet"], {
                            name: "Authorization (header)",
                            fieldName: fieldName,
                            isRequired: true,
                            field: {
                                type: 'string'
                            }
                        })
                    });
                } else if (security.type === 'apiKey') {
                    const fieldName = "".concat(security.in, ".").concat(security.name);
                    result.push({
                        fieldName,
                        defaultValue: '',
                        original: security,
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$openapi$2f$dist$2f$playground$2f$inputs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FieldSet"], {
                            fieldName: fieldName,
                            name: "".concat(security.name, " (").concat(security.in, ")"),
                            isRequired: true,
                            field: {
                                type: 'string'
                            }
                        })
                    });
                } else {
                    const fieldName = 'header.Authorization';
                    result.push({
                        fieldName,
                        defaultValue: '',
                        original: security,
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$openapi$2f$dist$2f$playground$2f$inputs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FieldSet"], {
                                    name: "Authorization (header)",
                                    isRequired: true,
                                    fieldName: fieldName,
                                    field: {
                                        type: 'string'
                                    }
                                }),
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("p", {
                                    className: "text-fd-muted-foreground text-xs",
                                    children: "OpenID Connect is not supported at the moment, you can still set an access token here."
                                })
                            ]
                        })
                    });
                }
            }
            return result;
        }
    }["useAuthInputs.useMemo[inputs]"], [
        securities
    ]);
    const mapInputs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$dist$2f$utils$2f$use$2d$effect$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffectEvent"])({
        "useAuthInputs.useEffectEvent[mapInputs]": (values)=>{
            for (const item of inputs){
                if (!item.mapOutput) continue;
                values = manipulateValues(values, item.fieldName, item.mapOutput, true);
            }
            return values;
        }
    }["useAuthInputs.useEffectEvent[mapInputs]"]);
    return {
        inputs,
        mapInputs
    };
}
_s4(useAuthInputs, "RV3oHxZuv4zaIvCqxd/klUzvDPM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$dist$2f$utils$2f$use$2d$effect$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffectEvent"]
    ];
});
function renderCustomField(fieldName, info, field, key) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$hook$2d$form$40$7$2e$62$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Controller"], {
        // @ts-expect-error we use string here
        render: (props)=>field.render({
                ...props,
                info
            }),
        name: fieldName
    }, key);
}
function Route(param) {
    let { route, ...props } = param;
    const segments = route.split('/').filter((part)=>part.length > 0);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
        ...props,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwind$2d$merge$40$3$2e$3$2e$1$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__twMerge__as__cn$3e$__["cn"])('flex flex-row items-center gap-0.5 overflow-auto text-nowrap', props.className),
        children: segments.map((part, index)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("span", {
                        className: "text-fd-muted-foreground",
                        children: "/"
                    }),
                    part.startsWith('{') && part.endsWith('}') ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("code", {
                        className: "bg-fd-primary/10 text-fd-primary",
                        children: part
                    }) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("code", {
                        className: "text-fd-foreground",
                        children: part
                    })
                ]
            }, index))
    });
}
_c10 = Route;
function DefaultResultDisplay(param) {
    let { data } = param;
    _s5();
    const statusInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DefaultResultDisplay.useMemo[statusInfo]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$openapi$2f$dist$2f$playground$2f$status$2d$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStatusInfo"])(data.status)
    }["DefaultResultDisplay.useMemo[statusInfo]"], [
        data.status
    ]);
    const { shikiOptions } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$openapi$2f$dist$2f$ui$2f$contexts$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiContext"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
        className: "flex flex-col gap-3 p-3",
        children: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                className: "inline-flex items-center gap-1.5 text-sm font-medium text-fd-foreground",
                children: [
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(statusInfo.icon, {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwind$2d$merge$40$3$2e$3$2e$1$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__twMerge__as__cn$3e$__["cn"])('size-4', statusInfo.color)
                    }),
                    statusInfo.description
                ]
            }),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("p", {
                className: "text-sm text-fd-muted-foreground",
                children: data.status
            }),
            data.data ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$components$2f$dynamic$2d$codeblock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DynamicCodeBlock"], {
                lang: typeof data.data === 'string' && data.data.length > 50000 ? 'text' : data.type,
                code: typeof data.data === 'string' ? data.data : JSON.stringify(data.data, null, 2),
                options: shikiOptions
            }) : null
        ]
    });
}
_s5(DefaultResultDisplay, "LZKyXL1YH0Zpu3JtLuAacVPptwE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$openapi$2f$dist$2f$ui$2f$contexts$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiContext"]
    ];
});
_c11 = DefaultResultDisplay;
function CollapsiblePanel(param) {
    let { title, children, ...props } = param;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$components$2f$ui$2f$collapsible$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Collapsible"], {
        ...props,
        className: "border-b last:border-b-0",
        children: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$components$2f$ui$2f$collapsible$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CollapsibleTrigger"], {
                className: "group w-full flex items-center gap-2 p-3 text-sm font-medium",
                children: [
                    title,
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChevronDown"], {
                        className: "ms-auto size-3.5 text-fd-muted-foreground group-data-[state=open]:rotate-180"
                    })
                ]
            }),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$components$2f$ui$2f$collapsible$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CollapsibleContent"], {
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                    className: "flex flex-col gap-3 p-3 pt-1",
                    children: children
                })
            })
        ]
    });
}
_c12 = CollapsiblePanel;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12;
__turbopack_context__.k.register(_c, "ServerSelect$lazy");
__turbopack_context__.k.register(_c1, "ServerSelect");
__turbopack_context__.k.register(_c2, "OauthDialog$lazy");
__turbopack_context__.k.register(_c3, "OauthDialog");
__turbopack_context__.k.register(_c4, "OauthDialogTrigger$lazy");
__turbopack_context__.k.register(_c5, "OauthDialogTrigger");
__turbopack_context__.k.register(_c6, "Client");
__turbopack_context__.k.register(_c7, "SecurityTabs");
__turbopack_context__.k.register(_c8, "FormBody");
__turbopack_context__.k.register(_c9, "BodyInput");
__turbopack_context__.k.register(_c10, "Route");
__turbopack_context__.k.register(_c11, "DefaultResultDisplay");
__turbopack_context__.k.register(_c12, "CollapsiblePanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=packages_c1c23277._.js.map