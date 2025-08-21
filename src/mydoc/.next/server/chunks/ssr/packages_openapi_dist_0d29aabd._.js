module.exports = [
"[project]/packages/openapi/dist/media/adapter.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "defaultAdapters",
    ()=>defaultAdapters
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$openapi$2f$dist$2f$utils$2f$input$2d$to$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/openapi/dist/utils/input-to-string.js [app-ssr] (ecmascript)");
// @ts-expect-error -- untyped
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xml$2d$js$40$1$2e$6$2e$11$2f$node_modules$2f$xml$2d$js$2f$lib$2f$js2xml$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/xml-js@1.6.11/node_modules/xml-js/lib/js2xml.js [app-ssr] (ecmascript)");
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
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xml$2d$js$40$1$2e$6$2e$11$2f$node_modules$2f$xml$2d$js$2f$lib$2f$js2xml$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(data.body, {
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
            if (typeof data.body !== 'object') throw new Error(`Input value must be object, received: ${typeof data.body}`);
            const params = new URLSearchParams();
            for(const key in data.body){
                params.set(key, String(data.body[key]));
            }
            return params;
        },
        generateExample (data, ctx) {
            if (ctx.lang === 'js') {
                return `const body = new URLSearchParams(${JSON.stringify(data.body, null, 2)})`;
            }
            return str(data.body, 'application/x-www-form-urlencoded', ctx);
        }
    },
    'multipart/form-data': {
        encode (data) {
            const formData = new FormData();
            const body = data.body;
            if (typeof body !== 'object' || !body) {
                throw new Error(`Unsupported body type: ${typeof body}, expected: object`);
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
                return `body = ${JSON.stringify(data.body, null, 2)}`;
            }
            const s = [];
            if (ctx.lang === 'js') {
                s.push(`const body = new FormData();`);
                for (const [key, value] of Object.entries(data.body)){
                    s.push(`body.set(${key}, ${JSON.stringify((0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$openapi$2f$dist$2f$utils$2f$input$2d$to$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["inputToString"])(value))})`);
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
                    const escaped = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$openapi$2f$dist$2f$utils$2f$input$2d$to$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["escapeString"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$openapi$2f$dist$2f$utils$2f$input$2d$to$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["inputToString"])(value, 'application/json'), '`');
                    s.push(`mp.WriteField("${key}", ${escaped})`);
                }
            }
            if (ctx.lang === 'java') {
                const { addImport } = ctx;
                addImport('java.net.http.HttpRequest.BodyPublishers');
                s.push(`var body = BodyPublishers.ofByteArray(new byte[] { ... });`);
            }
            if (ctx.lang === 'csharp') {
                s.push(`var body = new MultipartFormDataContent();`);
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
            return `const body = JSON.stringify(${JSON.stringify(init, null, 2)})`;
        }
        return `const body = ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$openapi$2f$dist$2f$utils$2f$input$2d$to$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["escapeString"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$openapi$2f$dist$2f$utils$2f$input$2d$to$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["inputToString"])(init, mediaType), '`')}`;
    }
    if (ctx.lang === 'python') {
        if (mediaType === 'application/json') return `body = ${JSON.stringify(init, null, 2)}`;
        return `body = ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$openapi$2f$dist$2f$utils$2f$input$2d$to$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["escapeString"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$openapi$2f$dist$2f$utils$2f$input$2d$to$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["inputToString"])(init, mediaType), '"""')}`;
    }
    if (ctx.lang === 'go') {
        const { addImport } = ctx;
        addImport('strings');
        return `body := strings.NewReader(${(0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$openapi$2f$dist$2f$utils$2f$input$2d$to$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["escapeString"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$openapi$2f$dist$2f$utils$2f$input$2d$to$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["inputToString"])(init, mediaType), '`')})`;
    }
    if (ctx.lang === 'java') {
        const { addImport } = ctx;
        addImport('java.net.http.HttpRequest.BodyPublishers');
        return `var body = BodyPublishers.ofString(${(0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$openapi$2f$dist$2f$utils$2f$input$2d$to$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["escapeString"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$openapi$2f$dist$2f$utils$2f$input$2d$to$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["inputToString"])(init, mediaType), '"""')});`;
    }
    if (ctx.lang === 'csharp') {
        const input = `\n${(0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$openapi$2f$dist$2f$utils$2f$input$2d$to$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["inputToString"])(init, mediaType)}\n`;
        return `var body = new StringContent(${(0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$openapi$2f$dist$2f$utils$2f$input$2d$to$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["escapeString"])(input, '"""')}, Encoding.UTF8, "${mediaType}");`;
    }
}
}),
"[project]/packages/openapi/dist/ui/contexts/api.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ApiProvider",
    ()=>ApiProvider,
    "useApiContext",
    ()=>useApiContext,
    "useServerSelectContext",
    ()=>useServerSelectContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.0_@babel+core@7.28.3_@opentelemetry+api@1.9.0_babel-plugin-macros@3.1.0_react-dom@1_j6u7u72df46a4ml46cu3en6mca/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.0_@babel+core@7.28.3_@opentelemetry+api@1.9.0_babel-plugin-macros@3.1.0_react-dom@1_j6u7u72df46a4ml46cu3en6mca/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$openapi$2f$dist$2f$media$2f$adapter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/openapi/dist/media/adapter.js [app-ssr] (ecmascript)");
'use client';
;
;
;
const ApiContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(null);
const ServerSelectContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(null);
function useApiContext() {
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(ApiContext);
    if (!ctx) throw new Error('Component must be used under <ApiProvider />');
    return ctx;
}
function useServerSelectContext() {
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(ServerSelectContext);
    if (!ctx) throw new Error('Component must be used under <ApiProvider />');
    return ctx;
}
function ApiProvider({ defaultBaseUrl, children, servers, mediaAdapters, shikiOptions }) {
    const [server, setServer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>{
        const defaultItem = defaultBaseUrl ? servers.find((item)=>item.url === defaultBaseUrl) : servers.at(0);
        return defaultItem ? {
            url: defaultItem.url,
            variables: getDefaultValues(defaultItem)
        } : null;
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const cached = localStorage.getItem('apiBaseUrl');
        if (!cached) return;
        try {
            const obj = JSON.parse(cached);
            if (!obj || typeof obj !== 'object') return;
            setServer(obj);
        } catch  {
        // ignore
        }
    }, []);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(ApiContext.Provider, {
        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
                shikiOptions,
                mediaAdapters: {
                    ...__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$openapi$2f$dist$2f$media$2f$adapter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultAdapters"],
                    ...mediaAdapters
                },
                servers
            }), [
            mediaAdapters,
            servers,
            shikiOptions
        ]),
        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(ServerSelectContext.Provider, {
            value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
                    server,
                    setServerVariables (variables) {
                        setServer((prev)=>{
                            if (!prev) return null;
                            const updated = {
                                ...prev,
                                variables
                            };
                            localStorage.setItem('apiBaseUrl', JSON.stringify(updated));
                            return updated;
                        });
                    },
                    setServer (value) {
                        const obj = servers.find((item)=>item.url === value);
                        if (!obj) return;
                        const result = {
                            url: value,
                            variables: getDefaultValues(obj)
                        };
                        localStorage.setItem('apiBaseUrl', JSON.stringify(result));
                        setServer(result);
                    }
                }), [
                server,
                servers
            ]),
            children: children
        })
    });
}
function getDefaultValues(server) {
    return Object.fromEntries(Object.entries(server.variables ?? {}).map(([k, v])=>[
            k,
            v.default
        ]));
}
}),
];

//# sourceMappingURL=packages_openapi_dist_0d29aabd._.js.map