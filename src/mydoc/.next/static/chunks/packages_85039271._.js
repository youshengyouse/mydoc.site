(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/packages/core/dist/search/client.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDocsSearch",
    ()=>useDocsSearch
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$dist$2f$chunk$2d$EMWGTXSW$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/core/dist/chunk-EMWGTXSW.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$dist$2f$chunk$2d$JSBRDJBE$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/core/dist/chunk-JSBRDJBE.js [app-client] (ecmascript)");
// src/search/client.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.0_@babel+core@7.28.3_@opentelemetry+api@1.9.0_babel-plugin-macros@3.1.0_react-dom@1_j6u7u72df46a4ml46cu3en6mca/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
;
;
;
;
function useDebounce(value) {
    let delayMs = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1e3;
    var _timer_current;
    _s();
    const [debouncedValue, setDebouncedValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(value);
    const timer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(void 0);
    if (delayMs === 0) return value;
    if (value !== debouncedValue && ((_timer_current = timer.current) === null || _timer_current === void 0 ? void 0 : _timer_current.value) !== value) {
        if (timer.current) clearTimeout(timer.current.handler);
        const handler = window.setTimeout(()=>{
            setDebouncedValue(value);
        }, delayMs);
        timer.current = {
            value,
            handler
        };
    }
    return debouncedValue;
}
_s(useDebounce, "FjeiRj2vbTGkwM9kOYZkhzXOYvk=");
// src/search/client.ts
function isDifferentDeep(a, b) {
    if (Array.isArray(a) && Array.isArray(b)) {
        return b.length !== a.length || a.some((v, i)=>isDifferentDeep(v, b[i]));
    }
    if (typeof a === "object" && a && typeof b === "object" && b) {
        const aKeys = Object.keys(a);
        const bKeys = Object.keys(b);
        return aKeys.length !== bKeys.length || aKeys.some((key)=>isDifferentDeep(a[key], b[key]));
    }
    return a !== b;
}
function useDocsSearch(clientOptions, _locale, _tag) {
    let _delayMs = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 100, _allowEmpty = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : false, _key = arguments.length > 5 ? arguments[5] : void 0;
    var _client, _client1;
    _s1();
    const { delayMs = _delayMs !== null && _delayMs !== void 0 ? _delayMs : 100, allowEmpty = _allowEmpty !== null && _allowEmpty !== void 0 ? _allowEmpty : false, ...client } = clientOptions;
    var _tag1;
    (_tag1 = (_client = client).tag) !== null && _tag1 !== void 0 ? _tag1 : _client.tag = _tag;
    var _locale1;
    (_locale1 = (_client1 = client).locale) !== null && _locale1 !== void 0 ? _locale1 : _client1.locale = _locale;
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [results, setResults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("empty");
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const debouncedValue = useDebounce(search, delayMs);
    const onStart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(void 0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$dist$2f$chunk$2d$EMWGTXSW$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOnChange"])([
        client,
        debouncedValue
    ], {
        "useDocsSearch.useOnChange": ()=>{
            if (onStart.current) {
                onStart.current();
                onStart.current = void 0;
            }
            setIsLoading(true);
            let interrupt = false;
            onStart.current = ({
                "useDocsSearch.useOnChange": ()=>{
                    interrupt = true;
                }
            })["useDocsSearch.useOnChange"];
            async function run() {
                if (debouncedValue.length === 0 && !allowEmpty) return "empty";
                if (client.type === "fetch") {
                    const { fetchDocs } = await __turbopack_context__.A("[project]/packages/core/dist/fetch-ITPHBPBE.js [app-client] (ecmascript, async loader)");
                    return fetchDocs(debouncedValue, client);
                }
                if (client.type === "algolia") {
                    const { searchDocs } = await __turbopack_context__.A("[project]/packages/core/dist/algolia-KPRGMSJO.js [app-client] (ecmascript, async loader)");
                    return searchDocs(debouncedValue, client);
                }
                if (client.type === "orama-cloud") {
                    const { searchDocs } = await __turbopack_context__.A("[project]/packages/core/dist/orama-cloud-BYTAI6QU.js [app-client] (ecmascript, async loader)");
                    return searchDocs(debouncedValue, client);
                }
                if (client.type === "static") {
                    const { search: search2 } = await __turbopack_context__.A("[project]/packages/core/dist/static-IWYDJ3C5.js [app-client] (ecmascript, async loader)");
                    return search2(debouncedValue, client);
                }
                if (client.type === "mixedbread") {
                    const { search: search2 } = await __turbopack_context__.A("[project]/packages/core/dist/mixedbread-AG5AAOKO.js [app-client] (ecmascript, async loader)");
                    return search2(debouncedValue, client);
                }
                throw new Error("unknown search client");
            }
            void run().then({
                "useDocsSearch.useOnChange": (res)=>{
                    if (interrupt) return;
                    setError(void 0);
                    setResults(res);
                }
            }["useDocsSearch.useOnChange"]).catch({
                "useDocsSearch.useOnChange": (err)=>{
                    setError(err);
                }
            }["useDocsSearch.useOnChange"]).finally({
                "useDocsSearch.useOnChange": ()=>{
                    setIsLoading(false);
                }
            }["useDocsSearch.useOnChange"]);
        }
    }["useDocsSearch.useOnChange"], isDifferentDeep);
    return {
        search,
        setSearch,
        query: {
            isLoading,
            data: results,
            error
        }
    };
}
_s1(useDocsSearch, "HlGB1KkotEXZt7T73Jos9d3DHCg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"],
        useDebounce,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"],
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$dist$2f$chunk$2d$EMWGTXSW$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOnChange"]
    ];
});
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/ui/dist/utils/cn.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/ui/dist/icons.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Airplay",
    ()=>Airplay,
    "Check",
    ()=>Check,
    "ChevronDown",
    ()=>ChevronDown,
    "ChevronLeft",
    ()=>ChevronLeft,
    "ChevronRight",
    ()=>ChevronRight,
    "ChevronUp",
    ()=>ChevronUp,
    "ChevronsUpDown",
    ()=>ChevronsUpDown,
    "CircleCheck",
    ()=>CircleCheck,
    "CircleX",
    ()=>CircleX,
    "Copy",
    ()=>Copy,
    "Edit",
    ()=>Edit,
    "ExternalLink",
    ()=>ExternalLink,
    "File",
    ()=>File,
    "FileText",
    ()=>FileText,
    "Folder",
    ()=>Folder,
    "FolderOpen",
    ()=>FolderOpen,
    "Hash",
    ()=>Hash,
    "Info",
    ()=>Info,
    "Languages",
    ()=>Languages,
    "Link",
    ()=>Link,
    "LoaderCircle",
    ()=>LoaderCircle,
    "Menu",
    ()=>Menu,
    "Moon",
    ()=>Moon,
    "Plus",
    ()=>Plus,
    "Search",
    ()=>Search,
    "Sidebar",
    ()=>Sidebar,
    "Star",
    ()=>Star,
    "Sun",
    ()=>Sun,
    "Text",
    ()=>Text,
    "Trash2",
    ()=>Trash2,
    "TriangleAlert",
    ()=>TriangleAlert,
    "X",
    ()=>X
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.0_@babel+core@7.28.3_@opentelemetry+api@1.9.0_babel-plugin-macros@3.1.0_react-dom@1_j6u7u72df46a4ml46cu3en6mca/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
/**
 * @license lucide-react - ISC
 *
 * All copyright belongs to https://github.com/lucide-icons/lucide, we bundle it as part of library to avoid upstream issues.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.0_@babel+core@7.28.3_@opentelemetry+api@1.9.0_babel-plugin-macros@3.1.0_react-dom@1_j6u7u72df46a4ml46cu3en6mca/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$utils$2f$cn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/ui/dist/utils/cn.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwind$2d$merge$40$3$2e$3$2e$1$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__twMerge__as__cn$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tailwind-merge@3.3.1/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript) <export twMerge as cn>");
;
;
;
const defaultAttributes = {
    xmlns: 'http://www.w3.org/2000/svg',
    width: 24,
    height: 24,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round'
};
const createLucideIcon = (iconName, iconNode)=>{
    const Component = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])((param, ref)=>{
        let { className, size = 24, color = 'currentColor', children, ...props } = param;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("svg", {
            ref: ref,
            ...defaultAttributes,
            width: size,
            height: size,
            stroke: color,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwind$2d$merge$40$3$2e$3$2e$1$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__twMerge__as__cn$3e$__["cn"])('lucide', className),
            ...props,
            children: [
                iconNode.map((param)=>{
                    let [tag, attr] = param;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(tag, attr);
                }),
                children
            ]
        });
    });
    Component.displayName = iconName;
    return Component;
};
const ChevronDown = createLucideIcon('chevron-down', [
    [
        'path',
        {
            d: 'm6 9 6 6 6-6',
            key: 'qrunsl'
        }
    ]
]);
const Languages = createLucideIcon('languages', [
    [
        'path',
        {
            d: 'm5 8 6 6',
            key: '1wu5hv'
        }
    ],
    [
        'path',
        {
            d: 'm4 14 6-6 2-3',
            key: '1k1g8d'
        }
    ],
    [
        'path',
        {
            d: 'M2 5h12',
            key: 'or177f'
        }
    ],
    [
        'path',
        {
            d: 'M7 2h1',
            key: '1t2jsx'
        }
    ],
    [
        'path',
        {
            d: 'm22 22-5-10-5 10',
            key: 'don7ne'
        }
    ],
    [
        'path',
        {
            d: 'M14 18h6',
            key: '1m8k6r'
        }
    ]
]);
const Sidebar = createLucideIcon('panel-left', [
    [
        'rect',
        {
            width: '18',
            height: '18',
            x: '3',
            y: '3',
            rx: '2',
            key: 'afitv7'
        }
    ],
    [
        'path',
        {
            d: 'M9 3v18',
            key: 'fh3hqa'
        }
    ]
]);
const ChevronsUpDown = createLucideIcon('chevrons-up-down', [
    [
        'path',
        {
            d: 'm7 15 5 5 5-5',
            key: '1hf1tw'
        }
    ],
    [
        'path',
        {
            d: 'm7 9 5-5 5 5',
            key: 'sgt6xg'
        }
    ]
]);
const Search = createLucideIcon('search', [
    [
        'circle',
        {
            cx: '11',
            cy: '11',
            r: '8',
            key: '4ej97u'
        }
    ],
    [
        'path',
        {
            d: 'm21 21-4.3-4.3',
            key: '1qie3q'
        }
    ]
]);
const ExternalLink = createLucideIcon('external-link', [
    [
        'path',
        {
            d: 'M15 3h6v6',
            key: '1q9fwt'
        }
    ],
    [
        'path',
        {
            d: 'M10 14 21 3',
            key: 'gplh6r'
        }
    ],
    [
        'path',
        {
            d: 'M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6',
            key: 'a6xqqp'
        }
    ]
]);
const Moon = createLucideIcon('moon', [
    [
        'path',
        {
            d: 'M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z',
            key: 'a7tn18'
        }
    ]
]);
const Sun = createLucideIcon('sun', [
    [
        'circle',
        {
            cx: '12',
            cy: '12',
            r: '4',
            key: '4exip2'
        }
    ],
    [
        'path',
        {
            d: 'M12 2v2',
            key: 'tus03m'
        }
    ],
    [
        'path',
        {
            d: 'M12 20v2',
            key: '1lh1kg'
        }
    ],
    [
        'path',
        {
            d: 'm4.93 4.93 1.41 1.41',
            key: '149t6j'
        }
    ],
    [
        'path',
        {
            d: 'm17.66 17.66 1.41 1.41',
            key: 'ptbguv'
        }
    ],
    [
        'path',
        {
            d: 'M2 12h2',
            key: '1t8f8n'
        }
    ],
    [
        'path',
        {
            d: 'M20 12h2',
            key: '1q8mjw'
        }
    ],
    [
        'path',
        {
            d: 'm6.34 17.66-1.41 1.41',
            key: '1m8zz5'
        }
    ],
    [
        'path',
        {
            d: 'm19.07 4.93-1.41 1.41',
            key: '1shlcs'
        }
    ]
]);
const Airplay = createLucideIcon('airplay', [
    [
        'path',
        {
            d: 'M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1',
            key: 'ns4c3b'
        }
    ],
    [
        'path',
        {
            d: 'm12 15 5 6H7Z',
            key: '14qnn2'
        }
    ]
]);
const Menu = createLucideIcon('menu', [
    [
        'line',
        {
            x1: '4',
            x2: '20',
            y1: '12',
            y2: '12',
            key: '1e0a9i'
        }
    ],
    [
        'line',
        {
            x1: '4',
            x2: '20',
            y1: '6',
            y2: '6',
            key: '1owob3'
        }
    ],
    [
        'line',
        {
            x1: '4',
            x2: '20',
            y1: '18',
            y2: '18',
            key: 'yk5zj1'
        }
    ]
]);
const X = createLucideIcon('x', [
    [
        'path',
        {
            d: 'M18 6 6 18',
            key: '1bl5f8'
        }
    ],
    [
        'path',
        {
            d: 'm6 6 12 12',
            key: 'd8bk6v'
        }
    ]
]);
const LoaderCircle = createLucideIcon('loader-circle', [
    [
        'path',
        {
            d: 'M21 12a9 9 0 1 1-6.219-8.56',
            key: '13zald'
        }
    ]
]);
const CircleCheck = createLucideIcon('circle-check', [
    [
        'circle',
        {
            cx: '12',
            cy: '12',
            r: '10',
            key: '1mglay'
        }
    ],
    [
        'path',
        {
            d: 'm9 12 2 2 4-4',
            key: 'dzmm74'
        }
    ]
]);
const CircleX = createLucideIcon('circle-x', [
    [
        'circle',
        {
            cx: '12',
            cy: '12',
            r: '10',
            key: '1mglay'
        }
    ],
    [
        'path',
        {
            d: 'm15 9-6 6',
            key: '1uzhvr'
        }
    ],
    [
        'path',
        {
            d: 'm9 9 6 6',
            key: 'z0biqf'
        }
    ]
]);
const Check = createLucideIcon('check', [
    [
        'path',
        {
            d: 'M20 6 9 17l-5-5',
            key: '1gmf2c'
        }
    ]
]);
const TriangleAlert = createLucideIcon('triangle-alert', [
    [
        'path',
        {
            d: 'm21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3',
            key: 'wmoenq'
        }
    ],
    [
        'path',
        {
            d: 'M12 9v4',
            key: 'juzpu7'
        }
    ],
    [
        'path',
        {
            d: 'M12 17h.01',
            key: 'p32p05'
        }
    ]
]);
const Info = createLucideIcon('info', [
    [
        'circle',
        {
            cx: '12',
            cy: '12',
            r: '10',
            key: '1mglay'
        }
    ],
    [
        'path',
        {
            d: 'M12 16v-4',
            key: '1dtifu'
        }
    ],
    [
        'path',
        {
            d: 'M12 8h.01',
            key: 'e9boi3'
        }
    ]
]);
const Copy = createLucideIcon('copy', [
    [
        'rect',
        {
            width: '14',
            height: '14',
            x: '8',
            y: '8',
            rx: '2',
            ry: '2',
            key: '17jyea'
        }
    ],
    [
        'path',
        {
            d: 'M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2',
            key: 'zix9uf'
        }
    ]
]);
const FileText = createLucideIcon('file-text', [
    [
        'path',
        {
            d: 'M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z',
            key: '1rqfz7'
        }
    ],
    [
        'path',
        {
            d: 'M14 2v4a2 2 0 0 0 2 2h4',
            key: 'tnqrlb'
        }
    ],
    [
        'path',
        {
            d: 'M10 9H8',
            key: 'b1mrlr'
        }
    ],
    [
        'path',
        {
            d: 'M16 13H8',
            key: 't4e002'
        }
    ],
    [
        'path',
        {
            d: 'M16 17H8',
            key: 'z1uh3a'
        }
    ]
]);
const Hash = createLucideIcon('hash', [
    [
        'line',
        {
            x1: '4',
            x2: '20',
            y1: '9',
            y2: '9',
            key: '4lhtct'
        }
    ],
    [
        'line',
        {
            x1: '4',
            x2: '20',
            y1: '15',
            y2: '15',
            key: 'vyu0kd'
        }
    ],
    [
        'line',
        {
            x1: '10',
            x2: '8',
            y1: '3',
            y2: '21',
            key: '1ggp8o'
        }
    ],
    [
        'line',
        {
            x1: '16',
            x2: '14',
            y1: '3',
            y2: '21',
            key: 'weycgp'
        }
    ]
]);
const Text = createLucideIcon('text', [
    [
        'path',
        {
            d: 'M15 18H3',
            key: 'olowqp'
        }
    ],
    [
        'path',
        {
            d: 'M17 6H3',
            key: '16j9eg'
        }
    ],
    [
        'path',
        {
            d: 'M21 12H3',
            key: '2avoz0'
        }
    ]
]);
const File = createLucideIcon('file', [
    [
        'path',
        {
            d: 'M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z',
            key: '1rqfz7'
        }
    ],
    [
        'path',
        {
            d: 'M14 2v4a2 2 0 0 0 2 2h4',
            key: 'tnqrlb'
        }
    ]
]);
const Folder = createLucideIcon('folder', [
    [
        'path',
        {
            d: 'M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z',
            key: '1kt360'
        }
    ]
]);
const FolderOpen = createLucideIcon('folder-open', [
    [
        'path',
        {
            d: 'm6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2',
            key: 'usdka0'
        }
    ]
]);
const Star = createLucideIcon('star', [
    [
        'path',
        {
            d: 'M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z',
            key: 'r04s7s'
        }
    ]
]);
const Link = createLucideIcon('link', [
    [
        'path',
        {
            d: 'M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71',
            key: '1cjeqo'
        }
    ],
    [
        'path',
        {
            d: 'M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71',
            key: '19qd67'
        }
    ]
]);
const Edit = createLucideIcon('square-pen', [
    [
        'path',
        {
            d: 'M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7',
            key: '1m0v6g'
        }
    ],
    [
        'path',
        {
            d: 'M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z',
            key: 'ohrbg2'
        }
    ]
]);
const ChevronRight = createLucideIcon('chevron-right', [
    [
        'path',
        {
            d: 'm9 18 6-6-6-6',
            key: 'mthhwq'
        }
    ]
]);
const ChevronLeft = createLucideIcon('chevron-left', [
    [
        'path',
        {
            d: 'm15 18-6-6 6-6',
            key: '1wnfg3'
        }
    ]
]);
const Plus = createLucideIcon('plus', [
    [
        'path',
        {
            d: 'M5 12h14',
            key: '1ays0h'
        }
    ],
    [
        'path',
        {
            d: 'M12 5v14',
            key: 's699le'
        }
    ]
]);
const Trash2 = createLucideIcon('trash-2', [
    [
        'path',
        {
            d: 'M3 6h18',
            key: 'd0wm0j'
        }
    ],
    [
        'path',
        {
            d: 'M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6',
            key: '4alrt4'
        }
    ],
    [
        'path',
        {
            d: 'M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2',
            key: 'v07s0e'
        }
    ],
    [
        'line',
        {
            x1: '10',
            x2: '10',
            y1: '11',
            y2: '17',
            key: '1uufr5'
        }
    ],
    [
        'line',
        {
            x1: '14',
            x2: '14',
            y1: '11',
            y2: '17',
            key: 'xtxkd'
        }
    ]
]);
const ChevronUp = createLucideIcon('chevron-up', [
    [
        'path',
        {
            d: 'm18 15-6-6-6 6',
            key: '153udz'
        }
    ]
]);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/ui/dist/components/ui/button.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$class$2d$variance$2d$authority$40$0$2e$7$2e$1$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/class-variance-authority@0.7.1/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$class$2d$variance$2d$authority$40$0$2e$7$2e$1$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])('inline-flex items-center justify-center rounded-md p-2 text-sm font-medium transition-colors duration-100 disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none', {
    variants: {
        color: {
            primary: 'bg-fd-primary text-fd-primary-foreground hover:bg-fd-primary/80',
            outline: 'border hover:bg-fd-accent hover:text-fd-accent-foreground',
            ghost: 'hover:bg-fd-accent hover:text-fd-accent-foreground',
            secondary: 'border bg-fd-secondary text-fd-secondary-foreground hover:bg-fd-accent hover:text-fd-accent-foreground'
        },
        size: {
            sm: 'gap-1 px-2 py-1.5 text-xs',
            icon: 'p-1.5 [&_svg]:size-5',
            'icon-sm': 'p-1.5 [&_svg]:size-4.5',
            'icon-xs': 'p-1 [&_svg]:size-4'
        }
    }
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/ui/dist/components/dialog/search.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SearchDialog",
    ()=>SearchDialog,
    "SearchDialogClose",
    ()=>SearchDialogClose,
    "SearchDialogContent",
    ()=>SearchDialogContent,
    "SearchDialogFooter",
    ()=>SearchDialogFooter,
    "SearchDialogHeader",
    ()=>SearchDialogHeader,
    "SearchDialogIcon",
    ()=>SearchDialogIcon,
    "SearchDialogInput",
    ()=>SearchDialogInput,
    "SearchDialogList",
    ()=>SearchDialogList,
    "SearchDialogListItem",
    ()=>SearchDialogListItem,
    "SearchDialogOverlay",
    ()=>SearchDialogOverlay,
    "TagsList",
    ()=>TagsList,
    "TagsListItem",
    ()=>TagsListItem,
    "useSearch",
    ()=>useSearch,
    "useSearchList",
    ()=>useSearchList,
    "useTagsList",
    ()=>useTagsList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.0_@babel+core@7.28.3_@opentelemetry+api@1.9.0_babel-plugin-macros@3.1.0_react-dom@1_j6u7u72df46a4ml46cu3en6mca/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/dist/icons.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.0_@babel+core@7.28.3_@opentelemetry+api@1.9.0_babel-plugin-macros@3.1.0_react-dom@1_j6u7u72df46a4ml46cu3en6mca/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$contexts$2f$i18n$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/dist/contexts/i18n.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$utils$2f$cn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/ui/dist/utils/cn.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwind$2d$merge$40$3$2e$3$2e$1$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__twMerge__as__cn$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tailwind-merge@3.3.1/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript) <export twMerge as cn>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$15_$40$types$2b$react$2d$dom$40$19$2e$1$2e$7_$40$types$2b$react$40$19$2e$1$2e$10_$5f40$types$2b$react$40$19$2e$1_rtjnuukicf5iq35g2i42o75jie$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@radix-ui+react-dialog@1.1.15_@types+react-dom@19.1.7_@types+react@19.1.10__@types+react@19.1_rtjnuukicf5iq35g2i42o75jie/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$class$2d$variance$2d$authority$40$0$2e$7$2e$1$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/class-variance-authority@0.7.1/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$dist$2f$utils$2f$use$2d$effect$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/core/dist/utils/use-effect-event.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$dist$2f$framework$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/core/dist/framework/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$dist$2f$chunk$2d$BBP7MIO4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/core/dist/chunk-BBP7MIO4.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$dist$2f$utils$2f$use$2d$on$2d$change$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/core/dist/utils/use-on-change.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$dist$2f$chunk$2d$EMWGTXSW$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/core/dist/chunk-EMWGTXSW.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$scroll$2d$into$2d$view$2d$if$2d$needed$40$3$2e$1$2e$0$2f$node_modules$2f$scroll$2d$into$2d$view$2d$if$2d$needed$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/scroll-into-view-if-needed@3.1.0/node_modules/scroll-into-view-if-needed/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$components$2f$ui$2f$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/dist/components/ui/button.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature(), _s6 = __turbopack_context__.k.signature(), _s7 = __turbopack_context__.k.signature(), _s8 = __turbopack_context__.k.signature(), _s9 = __turbopack_context__.k.signature(), _s10 = __turbopack_context__.k.signature(), _s11 = __turbopack_context__.k.signature();
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
const Context = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
const ListContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
const TagsListContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function SearchDialog(param) {
    let { open, onOpenChange, search, onSearchChange, isLoading = false, children } = param;
    _s();
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$15_$40$types$2b$react$2d$dom$40$19$2e$1$2e$7_$40$types$2b$react$40$19$2e$1$2e$10_$5f40$types$2b$react$40$19$2e$1_rtjnuukicf5iq35g2i42o75jie$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
        open: open,
        onOpenChange: onOpenChange,
        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Context.Provider, {
            value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
                "SearchDialog.useMemo": ()=>({
                        open,
                        onOpenChange,
                        search,
                        onSearchChange,
                        active,
                        setActive,
                        isLoading
                    })
            }["SearchDialog.useMemo"], [
                active,
                isLoading,
                onOpenChange,
                onSearchChange,
                open,
                search
            ]),
            children: children
        })
    });
}
_s(SearchDialog, "+vEk4RIFpW6Ko1X2olyNEyAB3qo=");
_c = SearchDialog;
function SearchDialogHeader(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
        ...props,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwind$2d$merge$40$3$2e$3$2e$1$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__twMerge__as__cn$3e$__["cn"])('flex flex-row items-center gap-2 p-3', props.className)
    });
}
_c1 = SearchDialogHeader;
function SearchDialogInput(props) {
    _s1();
    const { text } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$contexts$2f$i18n$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useI18n"])();
    const { search, onSearchChange } = useSearch();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("input", {
        ...props,
        value: search,
        onChange: (e)=>onSearchChange(e.target.value),
        placeholder: text.search,
        className: "w-0 flex-1 bg-transparent text-lg placeholder:text-fd-muted-foreground focus-visible:outline-none"
    });
}
_s1(SearchDialogInput, "D+I+iEDMNWoOk+iSqHDySc/KoFM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$contexts$2f$i18n$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useI18n"],
        useSearch
    ];
});
_c2 = SearchDialogInput;
function SearchDialogClose(param) {
    let { children = 'ESC', className, ...props } = param;
    _s2();
    const { onOpenChange } = useSearch();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("button", {
        type: "button",
        onClick: ()=>onOpenChange(false),
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwind$2d$merge$40$3$2e$3$2e$1$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__twMerge__as__cn$3e$__["cn"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$components$2f$ui$2f$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buttonVariants"])({
            color: 'outline',
            size: 'sm',
            className: 'font-mono text-fd-muted-foreground'
        }), className),
        ...props,
        children: children
    });
}
_s2(SearchDialogClose, "PBlR0KAkwLkiPlvgMkEWnHhCdeo=", false, function() {
    return [
        useSearch
    ];
});
_c3 = SearchDialogClose;
function SearchDialogFooter(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
        ...props,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwind$2d$merge$40$3$2e$3$2e$1$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__twMerge__as__cn$3e$__["cn"])('bg-fd-secondary/50 p-3 empty:hidden', props.className)
    });
}
_c4 = SearchDialogFooter;
function SearchDialogOverlay(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$15_$40$types$2b$react$2d$dom$40$19$2e$1$2e$7_$40$types$2b$react$40$19$2e$1$2e$10_$5f40$types$2b$react$40$19$2e$1_rtjnuukicf5iq35g2i42o75jie$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogOverlay"], {
        ...props,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwind$2d$merge$40$3$2e$3$2e$1$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__twMerge__as__cn$3e$__["cn"])('fixed inset-0 z-50 max-md:backdrop-blur-xs data-[state=open]:animate-fd-fade-in data-[state=closed]:animate-fd-fade-out', props.className)
    });
}
_c5 = SearchDialogOverlay;
function SearchDialogContent(param) {
    let { children, ...props } = param;
    _s3();
    const { text } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$contexts$2f$i18n$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useI18n"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$15_$40$types$2b$react$2d$dom$40$19$2e$1$2e$7_$40$types$2b$react$40$19$2e$1$2e$10_$5f40$types$2b$react$40$19$2e$1_rtjnuukicf5iq35g2i42o75jie$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
        "aria-describedby": undefined,
        ...props,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwind$2d$merge$40$3$2e$3$2e$1$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__twMerge__as__cn$3e$__["cn"])('fixed left-1/2 top-4 md:top-[calc(50%-250px)] z-50 w-[calc(100%-1rem)] max-w-screen-sm -translate-x-1/2 rounded-2xl border bg-fd-popover/80 backdrop-blur-xl text-fd-popover-foreground shadow-2xl shadow-black/50 overflow-hidden data-[state=closed]:animate-fd-dialog-out data-[state=open]:animate-fd-dialog-in', '*:border-b *:has-[+:last-child[data-empty=true]]:border-b-0 *:data-[empty=true]:border-b-0 *:last:border-b-0', props.className),
        children: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$15_$40$types$2b$react$2d$dom$40$19$2e$1$2e$7_$40$types$2b$react$40$19$2e$1$2e$10_$5f40$types$2b$react$40$19$2e$1_rtjnuukicf5iq35g2i42o75jie$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                className: "hidden",
                children: text.search
            }),
            children
        ]
    });
}
_s3(SearchDialogContent, "fVtTJA3UcGTa+NW9R3t2qEQsfLQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$contexts$2f$i18n$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useI18n"]
    ];
});
_c6 = SearchDialogContent;
function SearchDialogList(param) {
    let { items = null, Empty = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
            className: "py-12 text-center text-sm text-fd-muted-foreground",
            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$contexts$2f$i18n$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["I18nLabel"], {
                label: "searchNoResult"
            })
        }), Item = (props)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(SearchDialogListItem, {
            ...props
        }), ...props } = param;
    _s4();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "SearchDialogList.useState": ()=>items && items.length > 0 ? items[0].id : null
    }["SearchDialogList.useState"]);
    const { onOpenChange } = useSearch();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$dist$2f$chunk$2d$BBP7MIO4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const onOpen = (param)=>{
        let { external, url } = param;
        var _window_open;
        if (external) (_window_open = window.open(url, '_blank')) === null || _window_open === void 0 ? void 0 : _window_open.focus();
        else router.push(url);
        onOpenChange(false);
    };
    const onKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$dist$2f$utils$2f$use$2d$effect$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffectEvent"])({
        "SearchDialogList.useEffectEvent[onKey]": (e)=>{
            if (!items || e.isComposing) return;
            if (e.key === 'ArrowDown' || e.key == 'ArrowUp') {
                var _items_at;
                let idx = items.findIndex({
                    "SearchDialogList.useEffectEvent[onKey].idx": (item)=>item.id === active
                }["SearchDialogList.useEffectEvent[onKey].idx"]);
                if (idx === -1) idx = 0;
                else if (e.key === 'ArrowDown') idx++;
                else idx--;
                var _items_at_id;
                setActive((_items_at_id = (_items_at = items.at(idx % items.length)) === null || _items_at === void 0 ? void 0 : _items_at.id) !== null && _items_at_id !== void 0 ? _items_at_id : null);
                e.preventDefault();
            }
            if (e.key === 'Enter') {
                const selected = items.find({
                    "SearchDialogList.useEffectEvent[onKey].selected": (item)=>item.id === active
                }["SearchDialogList.useEffectEvent[onKey].selected"]);
                if (selected) onOpen(selected);
                e.preventDefault();
            }
        }
    }["SearchDialogList.useEffectEvent[onKey]"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SearchDialogList.useEffect": ()=>{
            const element = ref.current;
            if (!element) return;
            const observer = new ResizeObserver({
                "SearchDialogList.useEffect": ()=>{
                    const viewport = element.firstElementChild;
                    element.style.setProperty('--fd-animated-height', "".concat(viewport.clientHeight, "px"));
                }
            }["SearchDialogList.useEffect"]);
            const viewport = element.firstElementChild;
            if (viewport) observer.observe(viewport);
            window.addEventListener('keydown', onKey);
            return ({
                "SearchDialogList.useEffect": ()=>{
                    observer.disconnect();
                    window.removeEventListener('keydown', onKey);
                }
            })["SearchDialogList.useEffect"];
        }
    }["SearchDialogList.useEffect"], [
        onKey
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$dist$2f$chunk$2d$EMWGTXSW$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOnChange"])(items, {
        "SearchDialogList.useOnChange": ()=>{
            if (items && items.length > 0) {
                setActive(items[0].id);
            }
        }
    }["SearchDialogList.useOnChange"]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
        ...props,
        ref: ref,
        "data-empty": items === null,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwind$2d$merge$40$3$2e$3$2e$1$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__twMerge__as__cn$3e$__["cn"])('overflow-hidden h-(--fd-animated-height) transition-[height]', props.className),
        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwind$2d$merge$40$3$2e$3$2e$1$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__twMerge__as__cn$3e$__["cn"])('w-full flex flex-col overflow-y-auto max-h-[460px] p-1', !items && 'hidden'),
            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(ListContext.Provider, {
                value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
                    "SearchDialogList.useMemo": ()=>({
                            active,
                            setActive
                        })
                }["SearchDialogList.useMemo"], [
                    active
                ]),
                children: [
                    (items === null || items === void 0 ? void 0 : items.length) === 0 && Empty(),
                    items === null || items === void 0 ? void 0 : items.map((item)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: Item({
                                item,
                                onClick: ()=>onOpen(item)
                            })
                        }, item.id))
                ]
            })
        })
    });
}
_s4(SearchDialogList, "+rEf7nFdKpOqZCPpBSdpY9uyR08=", false, function() {
    return [
        useSearch,
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$dist$2f$chunk$2d$BBP7MIO4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$dist$2f$utils$2f$use$2d$effect$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffectEvent"],
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$dist$2f$chunk$2d$EMWGTXSW$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOnChange"]
    ];
});
_c7 = SearchDialogList;
const icons = {
    text: null,
    heading: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Hash"], {
        className: "size-4 shrink-0 text-fd-muted-foreground"
    }),
    page: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FileText"], {
        className: "size-6 text-fd-muted-foreground bg-fd-muted border p-0.5 rounded-sm shadow-sm shrink-0"
    })
};
function SearchDialogListItem(param) {
    let { item, className, children, renderHighlights: render = renderHighlights, ...props } = param;
    _s5();
    const { active: activeId, setActive } = useSearchList();
    const active = item.id === activeId;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("button", {
        type: "button",
        ref: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
            "SearchDialogListItem.useCallback": (element)=>{
                if (active && element) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$scroll$2d$into$2d$view$2d$if$2d$needed$40$3$2e$1$2e$0$2f$node_modules$2f$scroll$2d$into$2d$view$2d$if$2d$needed$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(element, {
                        scrollMode: 'if-needed',
                        block: 'nearest',
                        boundary: element.parentElement
                    });
                }
            }
        }["SearchDialogListItem.useCallback"], [
            active
        ]),
        "aria-selected": active,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwind$2d$merge$40$3$2e$3$2e$1$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__twMerge__as__cn$3e$__["cn"])('relative flex select-none flex-row items-center gap-2 p-2 text-start text-sm rounded-lg', item.type !== 'page' && 'ps-8', item.type === 'page' || item.type === 'heading' ? 'font-medium' : 'text-fd-popover-foreground/80', active && 'bg-fd-accent text-fd-accent-foreground', className),
        onPointerMove: ()=>setActive(item.id),
        ...props,
        children: children !== null && children !== void 0 ? children : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                item.type !== 'page' && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                    role: "none",
                    className: "absolute start-4.5 inset-y-0 w-px bg-fd-border"
                }),
                icons[item.type],
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("p", {
                    className: "min-w-0 truncate",
                    children: item.contentWithHighlights ? render(item.contentWithHighlights) : item.content
                })
            ]
        })
    });
}
_s5(SearchDialogListItem, "O6v9CTAEs4t8zHg6ZZbFMSyRa5Q=", false, function() {
    return [
        useSearchList
    ];
});
_c8 = SearchDialogListItem;
function SearchDialogIcon(props) {
    _s6();
    const { isLoading } = useSearch();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Search"], {
        ...props,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwind$2d$merge$40$3$2e$3$2e$1$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__twMerge__as__cn$3e$__["cn"])('size-5 text-fd-muted-foreground', isLoading && 'animate-pulse duration-400', props.className)
    });
}
_s6(SearchDialogIcon, "8S2hdOfD7YHnhkrEbQl1gU7wDfA=", false, function() {
    return [
        useSearch
    ];
});
_c9 = SearchDialogIcon;
const itemVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$class$2d$variance$2d$authority$40$0$2e$7$2e$1$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])('rounded-md border px-2 py-0.5 text-xs font-medium text-fd-muted-foreground transition-colors', {
    variants: {
        active: {
            true: 'bg-fd-accent text-fd-accent-foreground'
        }
    }
});
function TagsList(param) {
    let { tag, onTagChange, allowClear = false, ...props } = param;
    _s7();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
        ...props,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwind$2d$merge$40$3$2e$3$2e$1$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__twMerge__as__cn$3e$__["cn"])('flex items-center gap-1 flex-wrap', props.className),
        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(TagsListContext.Provider, {
            value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
                "TagsList.useMemo": ()=>({
                        value: tag,
                        onValueChange: onTagChange,
                        allowClear
                    })
            }["TagsList.useMemo"], [
                allowClear,
                onTagChange,
                tag
            ]),
            children: props.children
        })
    });
}
_s7(TagsList, "nwk+m61qLgjDVUp4IGV/072DDN4=");
_c10 = TagsList;
function TagsListItem(param) {
    let { value, className, ...props } = param;
    _s8();
    const { onValueChange, value: selectedValue, allowClear } = useTagsList();
    const selected = value === selectedValue;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("button", {
        type: "button",
        "data-active": selected,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwind$2d$merge$40$3$2e$3$2e$1$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__twMerge__as__cn$3e$__["cn"])(itemVariants({
            active: selected,
            className
        })),
        onClick: ()=>{
            onValueChange(selected && allowClear ? undefined : value);
        },
        tabIndex: -1,
        ...props,
        children: props.children
    });
}
_s8(TagsListItem, "j3C4pjcHoIUR5ZXToh/hLBwvmUc=", false, function() {
    return [
        useTagsList
    ];
});
_c11 = TagsListItem;
function renderHighlights(highlights) {
    return highlights.map((node, i)=>{
        var _node_styles;
        if ((_node_styles = node.styles) === null || _node_styles === void 0 ? void 0 : _node_styles.highlight) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("span", {
                className: "text-fd-primary bg-fd-primary/10",
                children: node.content
            }, i);
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: node.content
        }, i);
    });
}
function useSearch() {
    _s9();
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(Context);
    if (!ctx) throw new Error('Missing <SearchDialog />');
    return ctx;
}
_s9(useSearch, "/dMy7t63NXD4eYACoT93CePwGrg=");
function useTagsList() {
    _s10();
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(TagsListContext);
    if (!ctx) throw new Error('Missing <TagsList />');
    return ctx;
}
_s10(useTagsList, "/dMy7t63NXD4eYACoT93CePwGrg=");
function useSearchList() {
    _s11();
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ListContext);
    if (!ctx) throw new Error('Missing <SearchDialogList />');
    return ctx;
}
_s11(useSearchList, "/dMy7t63NXD4eYACoT93CePwGrg=");
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;
__turbopack_context__.k.register(_c, "SearchDialog");
__turbopack_context__.k.register(_c1, "SearchDialogHeader");
__turbopack_context__.k.register(_c2, "SearchDialogInput");
__turbopack_context__.k.register(_c3, "SearchDialogClose");
__turbopack_context__.k.register(_c4, "SearchDialogFooter");
__turbopack_context__.k.register(_c5, "SearchDialogOverlay");
__turbopack_context__.k.register(_c6, "SearchDialogContent");
__turbopack_context__.k.register(_c7, "SearchDialogList");
__turbopack_context__.k.register(_c8, "SearchDialogListItem");
__turbopack_context__.k.register(_c9, "SearchDialogIcon");
__turbopack_context__.k.register(_c10, "TagsList");
__turbopack_context__.k.register(_c11, "TagsListItem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/ui/dist/components/dialog/search-default.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DefaultSearchDialog
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.0_@babel+core@7.28.3_@opentelemetry+api@1.9.0_babel-plugin-macros@3.1.0_react-dom@1_j6u7u72df46a4ml46cu3en6mca/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$dist$2f$search$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/core/dist/search/client.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.0_@babel+core@7.28.3_@opentelemetry+api@1.9.0_babel-plugin-macros@3.1.0_react-dom@1_j6u7u72df46a4ml46cu3en6mca/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$dist$2f$utils$2f$use$2d$on$2d$change$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/core/dist/utils/use-on-change.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$dist$2f$chunk$2d$EMWGTXSW$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/core/dist/chunk-EMWGTXSW.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$contexts$2f$i18n$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/dist/contexts/i18n.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$components$2f$dialog$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/dist/components/dialog/search.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function DefaultSearchDialog(param) {
    let { defaultTag, tags = [], api, delayMs, type = 'fetch', allowClear = false, links = [], footer, ...props } = param;
    _s();
    const { locale } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$contexts$2f$i18n$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useI18n"])();
    const [tag, setTag] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(defaultTag);
    const { search, setSearch, query } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$dist$2f$search$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDocsSearch"])(type === 'fetch' ? {
        type: 'fetch',
        api,
        locale,
        tag,
        delayMs
    } : {
        type: 'static',
        from: api,
        locale,
        tag,
        delayMs
    });
    const defaultItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DefaultSearchDialog.useMemo[defaultItems]": ()=>{
            if (links.length === 0) return null;
            return links.map({
                "DefaultSearchDialog.useMemo[defaultItems]": (param)=>{
                    let [name, link] = param;
                    return {
                        type: 'page',
                        id: name,
                        content: name,
                        url: link
                    };
                }
            }["DefaultSearchDialog.useMemo[defaultItems]"]);
        }
    }["DefaultSearchDialog.useMemo[defaultItems]"], [
        links
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$dist$2f$chunk$2d$EMWGTXSW$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOnChange"])(defaultTag, {
        "DefaultSearchDialog.useOnChange": (v)=>{
            setTag(v);
        }
    }["DefaultSearchDialog.useOnChange"]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$components$2f$dialog$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SearchDialog"], {
        search: search,
        onSearchChange: setSearch,
        isLoading: query.isLoading,
        ...props,
        children: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$components$2f$dialog$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SearchDialogOverlay"], {}),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$components$2f$dialog$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SearchDialogContent"], {
                children: [
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$components$2f$dialog$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SearchDialogHeader"], {
                        children: [
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$components$2f$dialog$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SearchDialogIcon"], {}),
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$components$2f$dialog$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SearchDialogInput"], {}),
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$components$2f$dialog$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SearchDialogClose"], {})
                        ]
                    }),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$components$2f$dialog$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SearchDialogList"], {
                        items: query.data !== 'empty' ? query.data : defaultItems
                    })
                ]
            }),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$components$2f$dialog$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SearchDialogFooter"], {
                children: [
                    tags.length > 0 && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$components$2f$dialog$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TagsList"], {
                        tag: tag,
                        onTagChange: setTag,
                        allowClear: allowClear,
                        children: tags.map((tag)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$28$2e$3_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$macros$40$3$2e$1$2e$0_react$2d$dom$40$1_j6u7u72df46a4ml46cu3en6mca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$components$2f$dialog$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TagsListItem"], {
                                value: tag.value,
                                children: tag.name
                            }, tag.value))
                    }),
                    footer
                ]
            })
        ]
    });
}
_s(DefaultSearchDialog, "b3te1u0UqSE8YhdjUvoz7bHXktg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$contexts$2f$i18n$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useI18n"],
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$dist$2f$search$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDocsSearch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$dist$2f$chunk$2d$EMWGTXSW$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOnChange"]
    ];
});
_c = DefaultSearchDialog;
var _c;
__turbopack_context__.k.register(_c, "DefaultSearchDialog");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=packages_85039271._.js.map