(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/packages/openapi/dist/playground/fetcher.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createBrowserFetcher",
    ()=>createBrowserFetcher
]);
function createBrowserFetcher(adapters) {
    return {
        async fetch (url, options) {
            const headers = new Headers();
            if (options.bodyMediaType && options.bodyMediaType !== 'multipart/form-data') headers.append('Content-Type', options.bodyMediaType);
            for(const key in options.header){
                const param = options.header[key];
                if (!Array.isArray(param.value)) {
                    headers.append(key, param.value);
                } else {
                    headers.append(key, param.value.join(','));
                }
            }
            const proxyUrl = options.proxyUrl ? new URL(options.proxyUrl, document.baseURI) : null;
            if (proxyUrl) {
                proxyUrl.searchParams.append('url', url);
                url = proxyUrl.toString();
            }
            let body = undefined;
            if (options.bodyMediaType && options.body) {
                const adapter = adapters[options.bodyMediaType];
                if (!adapter) return {
                    status: 400,
                    type: 'text',
                    data: "[Fumadocs] No adapter for ".concat(options.bodyMediaType, ", you need to specify one from 'createOpenAPI()'.")
                };
                body = adapter.encode(options);
            }
            // cookies
            for(const key in options.cookie){
                const param = options.cookie[key];
                const segs = [
                    "".concat(key, "=").concat(param.value)
                ];
                if (proxyUrl && proxyUrl.origin !== window.location.origin) segs.push("domain=".concat(proxyUrl.host));
                segs.push('path=/', 'max-age=30');
                document.cookie = segs.join('; ');
            }
            return fetch(url, {
                method: options.method,
                cache: 'no-cache',
                headers,
                body,
                signal: AbortSignal.timeout(10 * 1000)
            }).then(async (res)=>{
                var _res_headers_get;
                const contentType = (_res_headers_get = res.headers.get('Content-Type')) !== null && _res_headers_get !== void 0 ? _res_headers_get : '';
                let type;
                let data;
                if (contentType.startsWith('application/json')) {
                    type = 'json';
                    data = await res.json();
                } else {
                    type = contentType.startsWith('text/html') ? 'html' : 'text';
                    data = await res.text();
                }
                return {
                    status: res.status,
                    type,
                    data
                };
            }).catch((e)=>{
                const message = e instanceof Error ? "[".concat(e.name, "] ").concat(e.message) : e.toString();
                return {
                    status: 400,
                    type: 'text',
                    data: "Client side error: ".concat(message)
                };
            });
        }
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=packages_openapi_dist_playground_fetcher_da3aac68.js.map