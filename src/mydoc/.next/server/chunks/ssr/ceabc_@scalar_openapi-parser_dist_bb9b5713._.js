module.exports = [
"[project]/node_modules/.pnpm/@scalar+openapi-parser@0.18.3/node_modules/@scalar/openapi-parser/dist/utils/escape-json-pointer.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "escapeJsonPointer",
    ()=>escapeJsonPointer
]);
function escapeJsonPointer(str) {
    return str.replace(/~/g, "~0").replace(/\//g, "~1");
}
;
 //# sourceMappingURL=escape-json-pointer.js.map
}),
"[project]/node_modules/.pnpm/@scalar+openapi-parser@0.18.3/node_modules/@scalar/openapi-parser/dist/polyfills/path.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "basename",
    ()=>basename,
    "default",
    ()=>path_default,
    "delimiter",
    ()=>delimiter,
    "dirname",
    ()=>dirname,
    "extname",
    ()=>extname,
    "isAbsolute",
    ()=>isAbsolute,
    "join",
    ()=>join,
    "normalize",
    ()=>normalize,
    "relative",
    ()=>relative,
    "resolve",
    ()=>resolve,
    "sep",
    ()=>sep
]);
function normalizeArray(parts, allowAboveRoot) {
    let up = 0;
    for(let i = parts.length - 1; i >= 0; i--){
        const last = parts[i];
        if (last === ".") {
            parts.splice(i, 1);
        } else if (last === "..") {
            parts.splice(i, 1);
            up++;
        } else if (up) {
            parts.splice(i, 1);
            up--;
        }
    }
    if (allowAboveRoot) {
        for(; up--; up){
            parts.unshift("..");
        }
    }
    return parts;
}
const splitPathRe = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^/]+?|)(\.[^./]*|))(?:[/]*)$/;
const splitPath = (filename)=>splitPathRe.exec(filename).slice(1);
function resolve(...parameters) {
    let resolvedPath = "", resolvedAbsolute = false;
    for(let i = parameters.length - 1; i >= -1 && !resolvedAbsolute; i--){
        const path = i >= 0 ? parameters[i] : "/";
        if (typeof path !== "string") {
            throw new TypeError("Arguments to path.resolve must be strings");
        }
        if (!path) {
            continue;
        }
        resolvedPath = path + "/" + resolvedPath;
        resolvedAbsolute = path.charAt(0) === "/";
    }
    resolvedPath = normalizeArray(filter(resolvedPath.split("/"), (p)=>!!p), !resolvedAbsolute).join("/");
    return (resolvedAbsolute ? "/" : "") + resolvedPath || ".";
}
function normalize(path) {
    const isPathAbsolute = isAbsolute(path), trailingSlash = substr(path, -1) === "/";
    path = normalizeArray(filter(path.split("/"), (p)=>!!p), !isPathAbsolute).join("/");
    if (!path && !isPathAbsolute) {
        path = ".";
    }
    if (path && trailingSlash) {
        path += "/";
    }
    return (isPathAbsolute ? "/" : "") + path;
}
function isAbsolute(path) {
    return path.charAt(0) === "/";
}
function join(...paths) {
    return normalize(filter(paths, (p, _index)=>{
        if (typeof p !== "string") {
            throw new TypeError("Arguments to path.join must be strings");
        }
        return p;
    }).join("/"));
}
function relative(from, to) {
    from = resolve(from).substr(1);
    to = resolve(to).substr(1);
    function trim(arr) {
        let start = 0;
        for(; start < arr.length; start++){
            if (arr[start] !== "") {
                break;
            }
        }
        let end = arr.length - 1;
        for(; end >= 0; end--){
            if (arr[end] !== "") {
                break;
            }
        }
        if (start > end) {
            return [];
        }
        return arr.slice(start, end - start + 1);
    }
    const fromParts = trim(from.split("/"));
    const toParts = trim(to.split("/"));
    const length = Math.min(fromParts.length, toParts.length);
    let samePartsLength = length;
    for(let i = 0; i < length; i++){
        if (fromParts[i] !== toParts[i]) {
            samePartsLength = i;
            break;
        }
    }
    let outputParts = [];
    for(let i = samePartsLength; i < fromParts.length; i++){
        outputParts.push("..");
    }
    outputParts = outputParts.concat(toParts.slice(samePartsLength));
    return outputParts.join("/");
}
const sep = "/";
const delimiter = ":";
function dirname(path) {
    const result = splitPath(path), root = result[0];
    let dir = result[1];
    if (!root && !dir) {
        return ".";
    }
    if (dir) {
        dir = dir.substr(0, dir.length - 1);
    }
    return root + dir;
}
function basename(path, ext) {
    let f = splitPath(path)[2];
    if (ext && f.substr(-1 * ext.length) === ext) {
        f = f.substr(0, f.length - ext.length);
    }
    return f;
}
function extname(path) {
    return splitPath(path)[3];
}
var path_default = {
    extname,
    basename,
    dirname,
    sep,
    delimiter,
    relative,
    join,
    isAbsolute,
    normalize,
    resolve
};
function filter(xs, f) {
    if (xs.filter) {
        return xs.filter(f);
    }
    const res = [];
    for(let i = 0; i < xs.length; i++){
        if (f(xs[i], i, xs)) {
            res.push(xs[i]);
        }
    }
    return res;
}
const substr = "ab".substr(-1) === "b" ? (str, start, len)=>str.substr(start, len) : (str, start, len)=>{
    if (start < 0) {
        start = str.length + start;
    }
    return str.substr(start, len);
};
;
 //# sourceMappingURL=path.js.map
}),
"[project]/node_modules/.pnpm/@scalar+openapi-parser@0.18.3/node_modules/@scalar/openapi-parser/dist/utils/unescape-json-pointer.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "unescapeJsonPointer",
    ()=>unescapeJsonPointer
]);
function unescapeJsonPointer(uri) {
    return decodeURI(uri.replace(/~1/g, "/").replace(/~0/g, "~"));
}
;
 //# sourceMappingURL=unescape-json-pointer.js.map
}),
"[project]/node_modules/.pnpm/@scalar+openapi-parser@0.18.3/node_modules/@scalar/openapi-parser/dist/utils/get-segments-from-path.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getSegmentsFromPath",
    ()=>getSegmentsFromPath
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$18$2e$3$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$utils$2f$unescape$2d$json$2d$pointer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@scalar+openapi-parser@0.18.3/node_modules/@scalar/openapi-parser/dist/utils/unescape-json-pointer.js [app-rsc] (ecmascript)");
;
function getSegmentsFromPath(path) {
    return(// /paths/~1test
    path.split("/").slice(1).map(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$18$2e$3$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$utils$2f$unescape$2d$json$2d$pointer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["unescapeJsonPointer"]));
}
;
 //# sourceMappingURL=get-segments-from-path.js.map
}),
"[project]/node_modules/.pnpm/@scalar+openapi-parser@0.18.3/node_modules/@scalar/openapi-parser/dist/utils/is-object.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isObject",
    ()=>isObject
]);
const isObject = (obj)=>typeof obj === "object" && !Array.isArray(obj) && obj !== null;
;
 //# sourceMappingURL=is-object.js.map
}),
"[project]/node_modules/.pnpm/@scalar+openapi-parser@0.18.3/node_modules/@scalar/openapi-parser/dist/utils/is-yaml.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isYaml",
    ()=>isYaml
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yaml$40$2$2e$8$2e$0$2f$node_modules$2f$yaml$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/yaml@2.8.0/node_modules/yaml/dist/index.js [app-rsc] (ecmascript)");
;
function isYaml(value) {
    if (!value.includes("\n")) {
        return false;
    }
    try {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yaml$40$2$2e$8$2e$0$2f$node_modules$2f$yaml$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parse"])(value, {
            maxAliasCount: 1e4
        });
        return true;
    } catch (_error) {
        return false;
    }
}
;
 //# sourceMappingURL=is-yaml.js.map
}),
"[project]/node_modules/.pnpm/@scalar+openapi-parser@0.18.3/node_modules/@scalar/openapi-parser/dist/utils/is-json.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isJson",
    ()=>isJson
]);
function isJson(value) {
    try {
        JSON.parse(value);
        return true;
    } catch  {
        return false;
    }
}
;
 //# sourceMappingURL=is-json.js.map
}),
"[project]/node_modules/.pnpm/@scalar+openapi-parser@0.18.3/node_modules/@scalar/openapi-parser/dist/utils/bundle/value-generator.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "generateUniqueValue",
    ()=>generateUniqueValue,
    "getHash",
    ()=>getHash,
    "uniqueValueGeneratorFactory",
    ()=>uniqueValueGeneratorFactory
]);
async function getHash(value) {
    const encoder = new TextEncoder();
    const data = encoder.encode(value);
    const hashBuffer = await crypto.subtle.digest("SHA-1", data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map((b)=>b.toString(16).padStart(2, "0")).join("");
    const hash = hashHex.substring(0, 7);
    return hash.match(/^\d+$/) ? "a" + hash.substring(1) : hash;
}
async function generateUniqueValue(compress, value, compressedToValue, prevCompressedValue, depth = 0) {
    const MAX_DEPTH = 100;
    if (depth >= MAX_DEPTH) {
        throw "Can not generate unique compressed values";
    }
    const compressedValue = await compress(prevCompressedValue ?? value);
    if (compressedToValue[compressedValue] !== void 0 && compressedToValue[compressedValue] !== value) {
        return generateUniqueValue(compress, value, compressedToValue, compressedValue, depth + 1);
    }
    compressedToValue[compressedValue] = value;
    return compressedValue;
}
const uniqueValueGeneratorFactory = (compress, compressedToValue)=>{
    const valueToCompressed = Object.fromEntries(Object.entries(compressedToValue).map(([key, value])=>[
            value,
            key
        ]));
    return {
        /**
     * Generates a unique compressed value for the given input string.
     * First checks if a compressed value already exists in the cache.
     * If not, generates a new unique compressed value and stores it in the cache.
     *
     * @param value - The original string value to compress
     * @returns A Promise that resolves to the compressed string value
     *
     * @example
     * const generator = uniqueValueGeneratorFactory(compress, {})
     * const compressed = await generator.generate('example.com/schema.json')
     * // Returns a unique compressed value like 'example'
     */ generate: async (value)=>{
            const cache = valueToCompressed[value];
            if (cache) {
                return cache;
            }
            const generatedValue = await generateUniqueValue(compress, value, compressedToValue);
            const compressedValue = generatedValue.match(/^\d+$/) ? `a${generatedValue}` : generatedValue;
            valueToCompressed[value] = compressedValue;
            return compressedValue;
        }
    };
};
;
 //# sourceMappingURL=value-generator.js.map
}),
"[project]/node_modules/.pnpm/@scalar+openapi-parser@0.18.3/node_modules/@scalar/openapi-parser/dist/utils/bundle/bundle.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "bundle",
    ()=>bundle,
    "getNestedValue",
    ()=>getNestedValue,
    "isFilePath",
    ()=>isFilePath,
    "isLocalRef",
    ()=>isLocalRef,
    "isRemoteUrl",
    ()=>isRemoteUrl,
    "prefixInternalRef",
    ()=>prefixInternalRef,
    "prefixInternalRefRecursive",
    ()=>prefixInternalRefRecursive,
    "setValueAtPath",
    ()=>setValueAtPath
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$18$2e$3$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$utils$2f$escape$2d$json$2d$pointer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@scalar+openapi-parser@0.18.3/node_modules/@scalar/openapi-parser/dist/utils/escape-json-pointer.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$18$2e$3$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$polyfills$2f$path$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@scalar+openapi-parser@0.18.3/node_modules/@scalar/openapi-parser/dist/polyfills/path.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$18$2e$3$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$utils$2f$get$2d$segments$2d$from$2d$path$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@scalar+openapi-parser@0.18.3/node_modules/@scalar/openapi-parser/dist/utils/get-segments-from-path.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$18$2e$3$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$utils$2f$is$2d$object$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@scalar+openapi-parser@0.18.3/node_modules/@scalar/openapi-parser/dist/utils/is-object.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$18$2e$3$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$utils$2f$is$2d$yaml$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@scalar+openapi-parser@0.18.3/node_modules/@scalar/openapi-parser/dist/utils/is-yaml.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$18$2e$3$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$utils$2f$is$2d$json$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@scalar+openapi-parser@0.18.3/node_modules/@scalar/openapi-parser/dist/utils/is-json.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$18$2e$3$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$utils$2f$bundle$2f$value$2d$generator$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@scalar+openapi-parser@0.18.3/node_modules/@scalar/openapi-parser/dist/utils/bundle/value-generator.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
function isRemoteUrl(value) {
    try {
        const url = new URL(value);
        return url.protocol === "http:" || url.protocol === "https:";
    } catch  {
        return false;
    }
}
function isFilePath(value) {
    return !isRemoteUrl(value) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$18$2e$3$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$utils$2f$is$2d$yaml$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isYaml"])(value) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$18$2e$3$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$utils$2f$is$2d$json$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isJson"])(value);
}
function isLocalRef(value) {
    return value.startsWith("#");
}
async function resolveContents(value, plugins) {
    const plugin = plugins.find((p)=>p.validate(value));
    if (plugin) {
        return plugin.exec(value);
    }
    return {
        ok: false
    };
}
function getNestedValue(target, segments) {
    return segments.reduce((acc, key)=>{
        if (acc === void 0) {
            return void 0;
        }
        return acc[key];
    }, target);
}
function setValueAtPath(obj, path2, value) {
    if (path2 === "") {
        throw new Error("Cannot set value at root ('') pointer");
    }
    const parts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$18$2e$3$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$utils$2f$get$2d$segments$2d$from$2d$path$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSegmentsFromPath"])(path2);
    let current = obj;
    for(let i = 0; i < parts.length; i++){
        const key = parts[i];
        const isLast = i === parts.length - 1;
        const nextKey = parts[i + 1];
        const shouldBeArray = /^\d+$/.test(nextKey ?? "");
        if (isLast) {
            current[key] = value;
        } else {
            if (!(key in current) || typeof current[key] !== "object") {
                current[key] = shouldBeArray ? [] : {};
            }
            current = current[key];
        }
    }
}
function resolveReferencePath(base, relativePath) {
    if (isRemoteUrl(relativePath)) {
        return relativePath;
    }
    if (isRemoteUrl(base)) {
        const url = new URL(base);
        const mergedPath = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$18$2e$3$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$polyfills$2f$path$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].join(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$18$2e$3$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$polyfills$2f$path$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].dirname(url.pathname), relativePath);
        return new URL(mergedPath, base).toString();
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$18$2e$3$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$polyfills$2f$path$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].join(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$18$2e$3$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$polyfills$2f$path$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].dirname(base), relativePath);
}
function prefixInternalRef(input, prefix) {
    if (!isLocalRef(input)) {
        throw "Please provide an internal ref";
    }
    return `#/${prefix.map(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$18$2e$3$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$utils$2f$escape$2d$json$2d$pointer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["escapeJsonPointer"]).join("/")}${input.substring(1)}`;
}
function prefixInternalRefRecursive(input, prefix) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$18$2e$3$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$utils$2f$is$2d$object$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isObject"])(input)) {
        return;
    }
    Object.values(input).forEach((el)=>prefixInternalRefRecursive(el, prefix));
    if (typeof input === "object" && "$ref" in input && typeof input["$ref"] === "string") {
        const ref = input["$ref"];
        if (!isLocalRef(ref)) {
            return;
        }
        input["$ref"] = prefixInternalRef(ref, prefix);
    }
}
const resolveAndCopyReferences = (targetDocument, sourceDocument, referencePath, externalRefsKey, documentKey, processedNodes = /* @__PURE__ */ new Set())=>{
    const referencedValue = getNestedValue(sourceDocument, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$18$2e$3$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$utils$2f$get$2d$segments$2d$from$2d$path$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSegmentsFromPath"])(referencePath));
    if (processedNodes.has(referencedValue)) {
        return;
    }
    processedNodes.add(referencedValue);
    setValueAtPath(targetDocument, referencePath, referencedValue);
    const traverse = (node)=>{
        if (!node || typeof node !== "object") {
            return;
        }
        if ("$ref" in node && typeof node["$ref"] === "string") {
            if (node["$ref"].startsWith(`#/${externalRefsKey}/${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$18$2e$3$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$utils$2f$escape$2d$json$2d$pointer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["escapeJsonPointer"])(documentKey)}`)) {
                resolveAndCopyReferences(targetDocument, sourceDocument, node["$ref"].substring(1), documentKey, externalRefsKey, processedNodes);
            }
        }
        for (const value of Object.values(node)){
            traverse(value);
        }
    };
    traverse(referencedValue);
};
const extensions = {
    /**
   * Custom OpenAPI extension key used to store external references.
   * This key will contain all bundled external documents.
   * The x-ext key is used to maintain a clean separation between the main
   * OpenAPI document and its bundled external references.
   */ externalDocuments: "x-ext",
    /**
   * Custom OpenAPI extension key used to maintain a mapping between
   * hashed keys and their original URLs in x-ext.
   * This mapping is essential for tracking the source of bundled references
   */ externalDocumentsMappings: "x-ext-urls"
};
async function bundle(input, config) {
    const cache = config.cache ?? /* @__PURE__ */ new Map();
    const resolveInput = async ()=>{
        if (typeof input !== "string") {
            return input;
        }
        const result = await resolveContents(input, config.plugins);
        if (result.ok && typeof result.data === "object") {
            return result.data;
        }
        throw new Error("Failed to resolve input: Please provide a valid string value or pass a loader to process the input");
    };
    const rawSpecification = await resolveInput();
    const documentRoot = config.root ?? rawSpecification;
    const isPartialBundling = config.root !== void 0 && config.root !== rawSpecification;
    const processedNodes = config.visitedNodes ?? /* @__PURE__ */ new Set();
    const defaultOrigin = ()=>{
        if (typeof input !== "string") {
            return "";
        }
        if (isRemoteUrl(input) || isFilePath(input)) {
            return input;
        }
        return "";
    };
    if (documentRoot[extensions.externalDocumentsMappings] === void 0) {
        documentRoot[extensions.externalDocumentsMappings] = {};
    }
    const { generate } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$18$2e$3$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$utils$2f$bundle$2f$value$2d$generator$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["uniqueValueGeneratorFactory"])(config.compress ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$18$2e$3$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$utils$2f$bundle$2f$value$2d$generator$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getHash"], documentRoot[extensions.externalDocumentsMappings]);
    const bundler = async (root, origin = defaultOrigin(), isChunkParent = false)=>{
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$18$2e$3$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$utils$2f$is$2d$object$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isObject"])(root) && !Array.isArray(root)) {
            return;
        }
        if (processedNodes.has(root)) {
            return;
        }
        processedNodes.add(root);
        if (typeof root === "object" && "$ref" in root && typeof root["$ref"] === "string") {
            const ref = root["$ref"];
            const isChunk = "$global" in root && typeof root["$global"] === "boolean" && root["$global"];
            if (isLocalRef(ref)) {
                if (isPartialBundling) {
                    await bundler(getNestedValue(documentRoot, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$18$2e$3$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$utils$2f$get$2d$segments$2d$from$2d$path$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSegmentsFromPath"])(ref.substring(1))), origin, isChunkParent);
                }
                return;
            }
            const [prefix, path2 = ""] = ref.split("#", 2);
            const resolvedPath = resolveReferencePath(origin, prefix);
            const compressedPath = await generate(resolvedPath);
            const seen = cache.has(resolvedPath);
            if (!seen) {
                cache.set(resolvedPath, resolveContents(resolvedPath, config.plugins));
            }
            config?.hooks?.onResolveStart?.(root);
            const result = await cache.get(resolvedPath);
            if (result.ok) {
                if (!seen) {
                    if (!isChunk) {
                        prefixInternalRefRecursive(result.data, [
                            extensions.externalDocuments,
                            compressedPath
                        ]);
                    }
                    await bundler(result.data, isChunk ? origin : resolvedPath, isChunk);
                    setValueAtPath(documentRoot, `/${extensions.externalDocumentsMappings}/${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$18$2e$3$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$utils$2f$escape$2d$json$2d$pointer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["escapeJsonPointer"])(compressedPath)}`, resolvedPath);
                }
                if (config.treeShake === true) {
                    resolveAndCopyReferences(documentRoot, {
                        [extensions.externalDocuments]: {
                            [compressedPath]: result.data
                        }
                    }, prefixInternalRef(`#${path2}`, [
                        extensions.externalDocuments,
                        compressedPath
                    ]).substring(1), extensions.externalDocuments, compressedPath);
                } else if (!seen) {
                    setValueAtPath(documentRoot, `/${extensions.externalDocuments}/${compressedPath}`, result.data);
                }
                root.$ref = prefixInternalRef(`#${path2}`, [
                    extensions.externalDocuments,
                    compressedPath
                ]);
                config?.hooks?.onResolveSuccess?.(root);
                return;
            }
            config?.hooks?.onResolveError?.(root);
            return console.warn(`Failed to resolve external reference "${resolvedPath}". The reference may be invalid, inaccessible, or missing a loader for this type of reference.`);
        }
        await Promise.all(Object.entries(root).map(async ([key, value])=>{
            if (key === extensions.externalDocuments) {
                return;
            }
            await bundler(value, origin, isChunkParent);
        }));
    };
    await bundler(rawSpecification);
    if (!config.urlMap && !isPartialBundling) {
        delete documentRoot[extensions.externalDocumentsMappings];
    }
    return rawSpecification;
}
;
 //# sourceMappingURL=bundle.js.map
}),
"[project]/node_modules/.pnpm/@scalar+openapi-parser@0.18.3/node_modules/@scalar/openapi-parser/dist/schemas/v2.0/schema.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>schema_default
]);
var schema_default = {
    "title": "A JSON Schema for Swagger 2.0 API.",
    "id": "http://swagger.io/v2/schema.json#",
    "$schema": "http://json-schema.org/draft-04/schema#",
    "type": "object",
    "required": [
        "swagger",
        "info",
        "paths"
    ],
    "additionalProperties": false,
    "patternProperties": {
        "^x-": {
            "$ref": "#/definitions/vendorExtension"
        }
    },
    "properties": {
        "swagger": {
            "type": "string",
            "enum": [
                "2.0"
            ],
            "description": "The Swagger version of this document."
        },
        "info": {
            "$ref": "#/definitions/info"
        },
        "host": {
            "type": "string",
            "pattern": "^[^{}/ :\\\\]+(?::\\d+)?$",
            "description": "The host (name or ip) of the API. Example: 'swagger.io'"
        },
        "basePath": {
            "type": "string",
            "pattern": "^/",
            "description": "The base path to the API. Example: '/api'."
        },
        "schemes": {
            "$ref": "#/definitions/schemesList"
        },
        "consumes": {
            "description": "A list of MIME types accepted by the API.",
            "allOf": [
                {
                    "$ref": "#/definitions/mediaTypeList"
                }
            ]
        },
        "produces": {
            "description": "A list of MIME types the API can produce.",
            "allOf": [
                {
                    "$ref": "#/definitions/mediaTypeList"
                }
            ]
        },
        "paths": {
            "$ref": "#/definitions/paths"
        },
        "definitions": {
            "$ref": "#/definitions/definitions"
        },
        "parameters": {
            "$ref": "#/definitions/parameterDefinitions"
        },
        "responses": {
            "$ref": "#/definitions/responseDefinitions"
        },
        "security": {
            "$ref": "#/definitions/security"
        },
        "securityDefinitions": {
            "$ref": "#/definitions/securityDefinitions"
        },
        "tags": {
            "type": "array",
            "items": {
                "$ref": "#/definitions/tag"
            },
            "uniqueItems": true
        },
        "externalDocs": {
            "$ref": "#/definitions/externalDocs"
        }
    },
    "definitions": {
        "info": {
            "type": "object",
            "description": "General information about the API.",
            "required": [
                "version",
                "title"
            ],
            "additionalProperties": false,
            "patternProperties": {
                "^x-": {
                    "$ref": "#/definitions/vendorExtension"
                }
            },
            "properties": {
                "title": {
                    "type": "string",
                    "description": "A unique and precise title of the API."
                },
                "version": {
                    "type": "string",
                    "description": "A semantic version number of the API."
                },
                "description": {
                    "type": "string",
                    "description": "A longer description of the API. Should be different from the title.  GitHub Flavored Markdown is allowed."
                },
                "termsOfService": {
                    "type": "string",
                    "description": "The terms of service for the API."
                },
                "contact": {
                    "$ref": "#/definitions/contact"
                },
                "license": {
                    "$ref": "#/definitions/license"
                }
            }
        },
        "contact": {
            "type": "object",
            "description": "Contact information for the owners of the API.",
            "additionalProperties": false,
            "properties": {
                "name": {
                    "type": "string",
                    "description": "The identifying name of the contact person/organization."
                },
                "url": {
                    "type": "string",
                    "description": "The URL pointing to the contact information.",
                    "format": "uri"
                },
                "email": {
                    "type": "string",
                    "description": "The email address of the contact person/organization.",
                    "format": "email"
                }
            },
            "patternProperties": {
                "^x-": {
                    "$ref": "#/definitions/vendorExtension"
                }
            }
        },
        "license": {
            "type": "object",
            "required": [
                "name"
            ],
            "additionalProperties": false,
            "properties": {
                "name": {
                    "type": "string",
                    "description": "The name of the license type. It's encouraged to use an OSI compatible license."
                },
                "url": {
                    "type": "string",
                    "description": "The URL pointing to the license.",
                    "format": "uri"
                }
            },
            "patternProperties": {
                "^x-": {
                    "$ref": "#/definitions/vendorExtension"
                }
            }
        },
        "paths": {
            "type": "object",
            "description": "Relative paths to the individual endpoints. They must be relative to the 'basePath'.",
            "patternProperties": {
                "^x-": {
                    "$ref": "#/definitions/vendorExtension"
                },
                "^/": {
                    "$ref": "#/definitions/pathItem"
                }
            },
            "additionalProperties": false
        },
        "definitions": {
            "type": "object",
            "additionalProperties": {
                "$ref": "#/definitions/schema"
            },
            "description": "One or more JSON objects describing the schemas being consumed and produced by the API."
        },
        "parameterDefinitions": {
            "type": "object",
            "additionalProperties": {
                "$ref": "#/definitions/parameter"
            },
            "description": "One or more JSON representations for parameters"
        },
        "responseDefinitions": {
            "type": "object",
            "additionalProperties": {
                "$ref": "#/definitions/response"
            },
            "description": "One or more JSON representations for responses"
        },
        "externalDocs": {
            "type": "object",
            "additionalProperties": false,
            "description": "information about external documentation",
            "required": [
                "url"
            ],
            "properties": {
                "description": {
                    "type": "string"
                },
                "url": {
                    "type": "string",
                    "format": "uri"
                }
            },
            "patternProperties": {
                "^x-": {
                    "$ref": "#/definitions/vendorExtension"
                }
            }
        },
        "examples": {
            "type": "object",
            "additionalProperties": true
        },
        "mimeType": {
            "type": "string",
            "description": "The MIME type of the HTTP message."
        },
        "operation": {
            "type": "object",
            "required": [
                "responses"
            ],
            "additionalProperties": false,
            "patternProperties": {
                "^x-": {
                    "$ref": "#/definitions/vendorExtension"
                }
            },
            "properties": {
                "tags": {
                    "type": "array",
                    "items": {
                        "type": "string"
                    },
                    "uniqueItems": true
                },
                "summary": {
                    "type": "string",
                    "description": "A brief summary of the operation."
                },
                "description": {
                    "type": "string",
                    "description": "A longer description of the operation, GitHub Flavored Markdown is allowed."
                },
                "externalDocs": {
                    "$ref": "#/definitions/externalDocs"
                },
                "operationId": {
                    "type": "string",
                    "description": "A unique identifier of the operation."
                },
                "produces": {
                    "description": "A list of MIME types the API can produce.",
                    "allOf": [
                        {
                            "$ref": "#/definitions/mediaTypeList"
                        }
                    ]
                },
                "consumes": {
                    "description": "A list of MIME types the API can consume.",
                    "allOf": [
                        {
                            "$ref": "#/definitions/mediaTypeList"
                        }
                    ]
                },
                "parameters": {
                    "$ref": "#/definitions/parametersList"
                },
                "responses": {
                    "$ref": "#/definitions/responses"
                },
                "schemes": {
                    "$ref": "#/definitions/schemesList"
                },
                "deprecated": {
                    "type": "boolean",
                    "default": false
                },
                "security": {
                    "$ref": "#/definitions/security"
                }
            }
        },
        "pathItem": {
            "type": "object",
            "additionalProperties": false,
            "patternProperties": {
                "^x-": {
                    "$ref": "#/definitions/vendorExtension"
                }
            },
            "properties": {
                "$ref": {
                    "type": "string"
                },
                "get": {
                    "$ref": "#/definitions/operation"
                },
                "put": {
                    "$ref": "#/definitions/operation"
                },
                "post": {
                    "$ref": "#/definitions/operation"
                },
                "delete": {
                    "$ref": "#/definitions/operation"
                },
                "options": {
                    "$ref": "#/definitions/operation"
                },
                "head": {
                    "$ref": "#/definitions/operation"
                },
                "patch": {
                    "$ref": "#/definitions/operation"
                },
                "parameters": {
                    "$ref": "#/definitions/parametersList"
                }
            }
        },
        "responses": {
            "type": "object",
            "description": "Response objects names can either be any valid HTTP status code or 'default'.",
            "minProperties": 1,
            "additionalProperties": false,
            "patternProperties": {
                "^([0-9]{3})$|^(default)$": {
                    "$ref": "#/definitions/responseValue"
                },
                "^x-": {
                    "$ref": "#/definitions/vendorExtension"
                }
            },
            "not": {
                "type": "object",
                "additionalProperties": false,
                "patternProperties": {
                    "^x-": {
                        "$ref": "#/definitions/vendorExtension"
                    }
                }
            }
        },
        "responseValue": {
            "oneOf": [
                {
                    "$ref": "#/definitions/response"
                },
                {
                    "$ref": "#/definitions/jsonReference"
                }
            ]
        },
        "response": {
            "type": "object",
            "required": [
                "description"
            ],
            "properties": {
                "description": {
                    "type": "string"
                },
                "schema": {
                    "oneOf": [
                        {
                            "$ref": "#/definitions/schema"
                        },
                        {
                            "$ref": "#/definitions/fileSchema"
                        }
                    ]
                },
                "headers": {
                    "$ref": "#/definitions/headers"
                },
                "examples": {
                    "$ref": "#/definitions/examples"
                }
            },
            "additionalProperties": false,
            "patternProperties": {
                "^x-": {
                    "$ref": "#/definitions/vendorExtension"
                }
            }
        },
        "headers": {
            "type": "object",
            "additionalProperties": {
                "$ref": "#/definitions/header"
            }
        },
        "header": {
            "type": "object",
            "additionalProperties": false,
            "required": [
                "type"
            ],
            "properties": {
                "type": {
                    "type": "string",
                    "enum": [
                        "string",
                        "number",
                        "integer",
                        "boolean",
                        "array"
                    ]
                },
                "format": {
                    "type": "string"
                },
                "items": {
                    "$ref": "#/definitions/primitivesItems"
                },
                "collectionFormat": {
                    "$ref": "#/definitions/collectionFormat"
                },
                "default": {
                    "$ref": "#/definitions/default"
                },
                "maximum": {
                    "$ref": "#/definitions/maximum"
                },
                "exclusiveMaximum": {
                    "$ref": "#/definitions/exclusiveMaximum"
                },
                "minimum": {
                    "$ref": "#/definitions/minimum"
                },
                "exclusiveMinimum": {
                    "$ref": "#/definitions/exclusiveMinimum"
                },
                "maxLength": {
                    "$ref": "#/definitions/maxLength"
                },
                "minLength": {
                    "$ref": "#/definitions/minLength"
                },
                "pattern": {
                    "$ref": "#/definitions/pattern"
                },
                "maxItems": {
                    "$ref": "#/definitions/maxItems"
                },
                "minItems": {
                    "$ref": "#/definitions/minItems"
                },
                "uniqueItems": {
                    "$ref": "#/definitions/uniqueItems"
                },
                "enum": {
                    "$ref": "#/definitions/enum"
                },
                "multipleOf": {
                    "$ref": "#/definitions/multipleOf"
                },
                "description": {
                    "type": "string"
                }
            },
            "patternProperties": {
                "^x-": {
                    "$ref": "#/definitions/vendorExtension"
                }
            }
        },
        "vendorExtension": {
            "description": "Any property starting with x- is valid.",
            "additionalProperties": true,
            "additionalItems": true
        },
        "bodyParameter": {
            "type": "object",
            "required": [
                "name",
                "in",
                "schema"
            ],
            "patternProperties": {
                "^x-": {
                    "$ref": "#/definitions/vendorExtension"
                }
            },
            "properties": {
                "description": {
                    "type": "string",
                    "description": "A brief description of the parameter. This could contain examples of use.  GitHub Flavored Markdown is allowed."
                },
                "name": {
                    "type": "string",
                    "description": "The name of the parameter."
                },
                "in": {
                    "type": "string",
                    "description": "Determines the location of the parameter.",
                    "enum": [
                        "body"
                    ]
                },
                "required": {
                    "type": "boolean",
                    "description": "Determines whether or not this parameter is required or optional.",
                    "default": false
                },
                "schema": {
                    "$ref": "#/definitions/schema"
                }
            },
            "additionalProperties": false
        },
        "headerParameterSubSchema": {
            "additionalProperties": false,
            "patternProperties": {
                "^x-": {
                    "$ref": "#/definitions/vendorExtension"
                }
            },
            "properties": {
                "required": {
                    "type": "boolean",
                    "description": "Determines whether or not this parameter is required or optional.",
                    "default": false
                },
                "in": {
                    "type": "string",
                    "description": "Determines the location of the parameter.",
                    "enum": [
                        "header"
                    ]
                },
                "description": {
                    "type": "string",
                    "description": "A brief description of the parameter. This could contain examples of use.  GitHub Flavored Markdown is allowed."
                },
                "name": {
                    "type": "string",
                    "description": "The name of the parameter."
                },
                "type": {
                    "type": "string",
                    "enum": [
                        "string",
                        "number",
                        "boolean",
                        "integer",
                        "array"
                    ]
                },
                "format": {
                    "type": "string"
                },
                "items": {
                    "$ref": "#/definitions/primitivesItems"
                },
                "collectionFormat": {
                    "$ref": "#/definitions/collectionFormat"
                },
                "default": {
                    "$ref": "#/definitions/default"
                },
                "maximum": {
                    "$ref": "#/definitions/maximum"
                },
                "exclusiveMaximum": {
                    "$ref": "#/definitions/exclusiveMaximum"
                },
                "minimum": {
                    "$ref": "#/definitions/minimum"
                },
                "exclusiveMinimum": {
                    "$ref": "#/definitions/exclusiveMinimum"
                },
                "maxLength": {
                    "$ref": "#/definitions/maxLength"
                },
                "minLength": {
                    "$ref": "#/definitions/minLength"
                },
                "pattern": {
                    "$ref": "#/definitions/pattern"
                },
                "maxItems": {
                    "$ref": "#/definitions/maxItems"
                },
                "minItems": {
                    "$ref": "#/definitions/minItems"
                },
                "uniqueItems": {
                    "$ref": "#/definitions/uniqueItems"
                },
                "enum": {
                    "$ref": "#/definitions/enum"
                },
                "multipleOf": {
                    "$ref": "#/definitions/multipleOf"
                }
            }
        },
        "queryParameterSubSchema": {
            "additionalProperties": false,
            "patternProperties": {
                "^x-": {
                    "$ref": "#/definitions/vendorExtension"
                }
            },
            "properties": {
                "required": {
                    "type": "boolean",
                    "description": "Determines whether or not this parameter is required or optional.",
                    "default": false
                },
                "in": {
                    "type": "string",
                    "description": "Determines the location of the parameter.",
                    "enum": [
                        "query"
                    ]
                },
                "description": {
                    "type": "string",
                    "description": "A brief description of the parameter. This could contain examples of use.  GitHub Flavored Markdown is allowed."
                },
                "name": {
                    "type": "string",
                    "description": "The name of the parameter."
                },
                "allowEmptyValue": {
                    "type": "boolean",
                    "default": false,
                    "description": "allows sending a parameter by name only or with an empty value."
                },
                "type": {
                    "type": "string",
                    "enum": [
                        "string",
                        "number",
                        "boolean",
                        "integer",
                        "array"
                    ]
                },
                "format": {
                    "type": "string"
                },
                "items": {
                    "$ref": "#/definitions/primitivesItems"
                },
                "collectionFormat": {
                    "$ref": "#/definitions/collectionFormatWithMulti"
                },
                "default": {
                    "$ref": "#/definitions/default"
                },
                "maximum": {
                    "$ref": "#/definitions/maximum"
                },
                "exclusiveMaximum": {
                    "$ref": "#/definitions/exclusiveMaximum"
                },
                "minimum": {
                    "$ref": "#/definitions/minimum"
                },
                "exclusiveMinimum": {
                    "$ref": "#/definitions/exclusiveMinimum"
                },
                "maxLength": {
                    "$ref": "#/definitions/maxLength"
                },
                "minLength": {
                    "$ref": "#/definitions/minLength"
                },
                "pattern": {
                    "$ref": "#/definitions/pattern"
                },
                "maxItems": {
                    "$ref": "#/definitions/maxItems"
                },
                "minItems": {
                    "$ref": "#/definitions/minItems"
                },
                "uniqueItems": {
                    "$ref": "#/definitions/uniqueItems"
                },
                "enum": {
                    "$ref": "#/definitions/enum"
                },
                "multipleOf": {
                    "$ref": "#/definitions/multipleOf"
                }
            }
        },
        "formDataParameterSubSchema": {
            "additionalProperties": false,
            "patternProperties": {
                "^x-": {
                    "$ref": "#/definitions/vendorExtension"
                }
            },
            "properties": {
                "required": {
                    "type": "boolean",
                    "description": "Determines whether or not this parameter is required or optional.",
                    "default": false
                },
                "in": {
                    "type": "string",
                    "description": "Determines the location of the parameter.",
                    "enum": [
                        "formData"
                    ]
                },
                "description": {
                    "type": "string",
                    "description": "A brief description of the parameter. This could contain examples of use.  GitHub Flavored Markdown is allowed."
                },
                "name": {
                    "type": "string",
                    "description": "The name of the parameter."
                },
                "allowEmptyValue": {
                    "type": "boolean",
                    "default": false,
                    "description": "allows sending a parameter by name only or with an empty value."
                },
                "type": {
                    "type": "string",
                    "enum": [
                        "string",
                        "number",
                        "boolean",
                        "integer",
                        "array",
                        "file"
                    ]
                },
                "format": {
                    "type": "string"
                },
                "items": {
                    "$ref": "#/definitions/primitivesItems"
                },
                "collectionFormat": {
                    "$ref": "#/definitions/collectionFormatWithMulti"
                },
                "default": {
                    "$ref": "#/definitions/default"
                },
                "maximum": {
                    "$ref": "#/definitions/maximum"
                },
                "exclusiveMaximum": {
                    "$ref": "#/definitions/exclusiveMaximum"
                },
                "minimum": {
                    "$ref": "#/definitions/minimum"
                },
                "exclusiveMinimum": {
                    "$ref": "#/definitions/exclusiveMinimum"
                },
                "maxLength": {
                    "$ref": "#/definitions/maxLength"
                },
                "minLength": {
                    "$ref": "#/definitions/minLength"
                },
                "pattern": {
                    "$ref": "#/definitions/pattern"
                },
                "maxItems": {
                    "$ref": "#/definitions/maxItems"
                },
                "minItems": {
                    "$ref": "#/definitions/minItems"
                },
                "uniqueItems": {
                    "$ref": "#/definitions/uniqueItems"
                },
                "enum": {
                    "$ref": "#/definitions/enum"
                },
                "multipleOf": {
                    "$ref": "#/definitions/multipleOf"
                }
            }
        },
        "pathParameterSubSchema": {
            "additionalProperties": false,
            "patternProperties": {
                "^x-": {
                    "$ref": "#/definitions/vendorExtension"
                }
            },
            "required": [
                "required"
            ],
            "properties": {
                "required": {
                    "type": "boolean",
                    "enum": [
                        true
                    ],
                    "description": "Determines whether or not this parameter is required or optional."
                },
                "in": {
                    "type": "string",
                    "description": "Determines the location of the parameter.",
                    "enum": [
                        "path"
                    ]
                },
                "description": {
                    "type": "string",
                    "description": "A brief description of the parameter. This could contain examples of use.  GitHub Flavored Markdown is allowed."
                },
                "name": {
                    "type": "string",
                    "description": "The name of the parameter."
                },
                "type": {
                    "type": "string",
                    "enum": [
                        "string",
                        "number",
                        "boolean",
                        "integer",
                        "array"
                    ]
                },
                "format": {
                    "type": "string"
                },
                "items": {
                    "$ref": "#/definitions/primitivesItems"
                },
                "collectionFormat": {
                    "$ref": "#/definitions/collectionFormat"
                },
                "default": {
                    "$ref": "#/definitions/default"
                },
                "maximum": {
                    "$ref": "#/definitions/maximum"
                },
                "exclusiveMaximum": {
                    "$ref": "#/definitions/exclusiveMaximum"
                },
                "minimum": {
                    "$ref": "#/definitions/minimum"
                },
                "exclusiveMinimum": {
                    "$ref": "#/definitions/exclusiveMinimum"
                },
                "maxLength": {
                    "$ref": "#/definitions/maxLength"
                },
                "minLength": {
                    "$ref": "#/definitions/minLength"
                },
                "pattern": {
                    "$ref": "#/definitions/pattern"
                },
                "maxItems": {
                    "$ref": "#/definitions/maxItems"
                },
                "minItems": {
                    "$ref": "#/definitions/minItems"
                },
                "uniqueItems": {
                    "$ref": "#/definitions/uniqueItems"
                },
                "enum": {
                    "$ref": "#/definitions/enum"
                },
                "multipleOf": {
                    "$ref": "#/definitions/multipleOf"
                }
            }
        },
        "nonBodyParameter": {
            "type": "object",
            "required": [
                "name",
                "in",
                "type"
            ],
            "oneOf": [
                {
                    "$ref": "#/definitions/headerParameterSubSchema"
                },
                {
                    "$ref": "#/definitions/formDataParameterSubSchema"
                },
                {
                    "$ref": "#/definitions/queryParameterSubSchema"
                },
                {
                    "$ref": "#/definitions/pathParameterSubSchema"
                }
            ]
        },
        "parameter": {
            "oneOf": [
                {
                    "$ref": "#/definitions/bodyParameter"
                },
                {
                    "$ref": "#/definitions/nonBodyParameter"
                }
            ]
        },
        "schema": {
            "type": "object",
            "description": "A deterministic version of a JSON Schema object.",
            "patternProperties": {
                "^x-": {
                    "$ref": "#/definitions/vendorExtension"
                }
            },
            "properties": {
                "$ref": {
                    "type": "string"
                },
                "format": {
                    "type": "string"
                },
                "title": {
                    "$ref": "http://json-schema.org/draft-04/schema#/properties/title"
                },
                "description": {
                    "$ref": "http://json-schema.org/draft-04/schema#/properties/description"
                },
                "default": {
                    "$ref": "http://json-schema.org/draft-04/schema#/properties/default"
                },
                "multipleOf": {
                    "$ref": "http://json-schema.org/draft-04/schema#/properties/multipleOf"
                },
                "maximum": {
                    "$ref": "http://json-schema.org/draft-04/schema#/properties/maximum"
                },
                "exclusiveMaximum": {
                    "$ref": "http://json-schema.org/draft-04/schema#/properties/exclusiveMaximum"
                },
                "minimum": {
                    "$ref": "http://json-schema.org/draft-04/schema#/properties/minimum"
                },
                "exclusiveMinimum": {
                    "$ref": "http://json-schema.org/draft-04/schema#/properties/exclusiveMinimum"
                },
                "maxLength": {
                    "$ref": "http://json-schema.org/draft-04/schema#/definitions/positiveInteger"
                },
                "minLength": {
                    "$ref": "http://json-schema.org/draft-04/schema#/definitions/positiveIntegerDefault0"
                },
                "pattern": {
                    "$ref": "http://json-schema.org/draft-04/schema#/properties/pattern"
                },
                "maxItems": {
                    "$ref": "http://json-schema.org/draft-04/schema#/definitions/positiveInteger"
                },
                "minItems": {
                    "$ref": "http://json-schema.org/draft-04/schema#/definitions/positiveIntegerDefault0"
                },
                "uniqueItems": {
                    "$ref": "http://json-schema.org/draft-04/schema#/properties/uniqueItems"
                },
                "maxProperties": {
                    "$ref": "http://json-schema.org/draft-04/schema#/definitions/positiveInteger"
                },
                "minProperties": {
                    "$ref": "http://json-schema.org/draft-04/schema#/definitions/positiveIntegerDefault0"
                },
                "required": {
                    "$ref": "http://json-schema.org/draft-04/schema#/definitions/stringArray"
                },
                "enum": {
                    "$ref": "http://json-schema.org/draft-04/schema#/properties/enum"
                },
                "additionalProperties": {
                    "anyOf": [
                        {
                            "$ref": "#/definitions/schema"
                        },
                        {
                            "type": "boolean"
                        }
                    ],
                    "default": {}
                },
                "type": {
                    "$ref": "http://json-schema.org/draft-04/schema#/properties/type"
                },
                "items": {
                    "anyOf": [
                        {
                            "$ref": "#/definitions/schema"
                        },
                        {
                            "type": "array",
                            "minItems": 1,
                            "items": {
                                "$ref": "#/definitions/schema"
                            }
                        }
                    ],
                    "default": {}
                },
                "allOf": {
                    "type": "array",
                    "minItems": 1,
                    "items": {
                        "$ref": "#/definitions/schema"
                    }
                },
                "properties": {
                    "type": "object",
                    "additionalProperties": {
                        "$ref": "#/definitions/schema"
                    },
                    "default": {}
                },
                "discriminator": {
                    "type": "string"
                },
                "readOnly": {
                    "type": "boolean",
                    "default": false
                },
                "xml": {
                    "$ref": "#/definitions/xml"
                },
                "externalDocs": {
                    "$ref": "#/definitions/externalDocs"
                },
                "example": {}
            },
            "additionalProperties": false
        },
        "fileSchema": {
            "type": "object",
            "description": "A deterministic version of a JSON Schema object.",
            "patternProperties": {
                "^x-": {
                    "$ref": "#/definitions/vendorExtension"
                }
            },
            "required": [
                "type"
            ],
            "properties": {
                "format": {
                    "type": "string"
                },
                "title": {
                    "$ref": "http://json-schema.org/draft-04/schema#/properties/title"
                },
                "description": {
                    "$ref": "http://json-schema.org/draft-04/schema#/properties/description"
                },
                "default": {
                    "$ref": "http://json-schema.org/draft-04/schema#/properties/default"
                },
                "required": {
                    "$ref": "http://json-schema.org/draft-04/schema#/definitions/stringArray"
                },
                "type": {
                    "type": "string",
                    "enum": [
                        "file"
                    ]
                },
                "readOnly": {
                    "type": "boolean",
                    "default": false
                },
                "externalDocs": {
                    "$ref": "#/definitions/externalDocs"
                },
                "example": {}
            },
            "additionalProperties": false
        },
        "primitivesItems": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
                "type": {
                    "type": "string",
                    "enum": [
                        "string",
                        "number",
                        "integer",
                        "boolean",
                        "array"
                    ]
                },
                "format": {
                    "type": "string"
                },
                "items": {
                    "$ref": "#/definitions/primitivesItems"
                },
                "collectionFormat": {
                    "$ref": "#/definitions/collectionFormat"
                },
                "default": {
                    "$ref": "#/definitions/default"
                },
                "maximum": {
                    "$ref": "#/definitions/maximum"
                },
                "exclusiveMaximum": {
                    "$ref": "#/definitions/exclusiveMaximum"
                },
                "minimum": {
                    "$ref": "#/definitions/minimum"
                },
                "exclusiveMinimum": {
                    "$ref": "#/definitions/exclusiveMinimum"
                },
                "maxLength": {
                    "$ref": "#/definitions/maxLength"
                },
                "minLength": {
                    "$ref": "#/definitions/minLength"
                },
                "pattern": {
                    "$ref": "#/definitions/pattern"
                },
                "maxItems": {
                    "$ref": "#/definitions/maxItems"
                },
                "minItems": {
                    "$ref": "#/definitions/minItems"
                },
                "uniqueItems": {
                    "$ref": "#/definitions/uniqueItems"
                },
                "enum": {
                    "$ref": "#/definitions/enum"
                },
                "multipleOf": {
                    "$ref": "#/definitions/multipleOf"
                }
            },
            "patternProperties": {
                "^x-": {
                    "$ref": "#/definitions/vendorExtension"
                }
            }
        },
        "security": {
            "type": "array",
            "items": {
                "$ref": "#/definitions/securityRequirement"
            },
            "uniqueItems": true
        },
        "securityRequirement": {
            "type": "object",
            "additionalProperties": {
                "type": "array",
                "items": {
                    "type": "string"
                },
                "uniqueItems": true
            }
        },
        "xml": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
                "name": {
                    "type": "string"
                },
                "namespace": {
                    "type": "string"
                },
                "prefix": {
                    "type": "string"
                },
                "attribute": {
                    "type": "boolean",
                    "default": false
                },
                "wrapped": {
                    "type": "boolean",
                    "default": false
                }
            },
            "patternProperties": {
                "^x-": {
                    "$ref": "#/definitions/vendorExtension"
                }
            }
        },
        "tag": {
            "type": "object",
            "additionalProperties": false,
            "required": [
                "name"
            ],
            "properties": {
                "name": {
                    "type": "string"
                },
                "description": {
                    "type": "string"
                },
                "externalDocs": {
                    "$ref": "#/definitions/externalDocs"
                }
            },
            "patternProperties": {
                "^x-": {
                    "$ref": "#/definitions/vendorExtension"
                }
            }
        },
        "securityDefinitions": {
            "type": "object",
            "additionalProperties": {
                "oneOf": [
                    {
                        "$ref": "#/definitions/basicAuthenticationSecurity"
                    },
                    {
                        "$ref": "#/definitions/apiKeySecurity"
                    },
                    {
                        "$ref": "#/definitions/oauth2ImplicitSecurity"
                    },
                    {
                        "$ref": "#/definitions/oauth2PasswordSecurity"
                    },
                    {
                        "$ref": "#/definitions/oauth2ApplicationSecurity"
                    },
                    {
                        "$ref": "#/definitions/oauth2AccessCodeSecurity"
                    }
                ]
            }
        },
        "basicAuthenticationSecurity": {
            "type": "object",
            "additionalProperties": false,
            "required": [
                "type"
            ],
            "properties": {
                "type": {
                    "type": "string",
                    "enum": [
                        "basic"
                    ]
                },
                "description": {
                    "type": "string"
                }
            },
            "patternProperties": {
                "^x-": {
                    "$ref": "#/definitions/vendorExtension"
                }
            }
        },
        "apiKeySecurity": {
            "type": "object",
            "additionalProperties": false,
            "required": [
                "type",
                "name",
                "in"
            ],
            "properties": {
                "type": {
                    "type": "string",
                    "enum": [
                        "apiKey"
                    ]
                },
                "name": {
                    "type": "string"
                },
                "in": {
                    "type": "string",
                    "enum": [
                        "header",
                        "query"
                    ]
                },
                "description": {
                    "type": "string"
                }
            },
            "patternProperties": {
                "^x-": {
                    "$ref": "#/definitions/vendorExtension"
                }
            }
        },
        "oauth2ImplicitSecurity": {
            "type": "object",
            "additionalProperties": false,
            "required": [
                "type",
                "flow",
                "authorizationUrl"
            ],
            "properties": {
                "type": {
                    "type": "string",
                    "enum": [
                        "oauth2"
                    ]
                },
                "flow": {
                    "type": "string",
                    "enum": [
                        "implicit"
                    ]
                },
                "scopes": {
                    "$ref": "#/definitions/oauth2Scopes"
                },
                "authorizationUrl": {
                    "type": "string",
                    "format": "uri"
                },
                "description": {
                    "type": "string"
                }
            },
            "patternProperties": {
                "^x-": {
                    "$ref": "#/definitions/vendorExtension"
                }
            }
        },
        "oauth2PasswordSecurity": {
            "type": "object",
            "additionalProperties": false,
            "required": [
                "type",
                "flow",
                "tokenUrl"
            ],
            "properties": {
                "type": {
                    "type": "string",
                    "enum": [
                        "oauth2"
                    ]
                },
                "flow": {
                    "type": "string",
                    "enum": [
                        "password"
                    ]
                },
                "scopes": {
                    "$ref": "#/definitions/oauth2Scopes"
                },
                "tokenUrl": {
                    "type": "string",
                    "format": "uri"
                },
                "description": {
                    "type": "string"
                }
            },
            "patternProperties": {
                "^x-": {
                    "$ref": "#/definitions/vendorExtension"
                }
            }
        },
        "oauth2ApplicationSecurity": {
            "type": "object",
            "additionalProperties": false,
            "required": [
                "type",
                "flow",
                "tokenUrl"
            ],
            "properties": {
                "type": {
                    "type": "string",
                    "enum": [
                        "oauth2"
                    ]
                },
                "flow": {
                    "type": "string",
                    "enum": [
                        "application"
                    ]
                },
                "scopes": {
                    "$ref": "#/definitions/oauth2Scopes"
                },
                "tokenUrl": {
                    "type": "string",
                    "format": "uri"
                },
                "description": {
                    "type": "string"
                }
            },
            "patternProperties": {
                "^x-": {
                    "$ref": "#/definitions/vendorExtension"
                }
            }
        },
        "oauth2AccessCodeSecurity": {
            "type": "object",
            "additionalProperties": false,
            "required": [
                "type",
                "flow",
                "authorizationUrl",
                "tokenUrl"
            ],
            "properties": {
                "type": {
                    "type": "string",
                    "enum": [
                        "oauth2"
                    ]
                },
                "flow": {
                    "type": "string",
                    "enum": [
                        "accessCode"
                    ]
                },
                "scopes": {
                    "$ref": "#/definitions/oauth2Scopes"
                },
                "authorizationUrl": {
                    "type": "string",
                    "format": "uri"
                },
                "tokenUrl": {
                    "type": "string",
                    "format": "uri"
                },
                "description": {
                    "type": "string"
                }
            },
            "patternProperties": {
                "^x-": {
                    "$ref": "#/definitions/vendorExtension"
                }
            }
        },
        "oauth2Scopes": {
            "type": "object",
            "additionalProperties": {
                "type": "string"
            }
        },
        "mediaTypeList": {
            "type": "array",
            "items": {
                "$ref": "#/definitions/mimeType"
            },
            "uniqueItems": true
        },
        "parametersList": {
            "type": "array",
            "description": "The parameters needed to send a valid API call.",
            "additionalItems": false,
            "items": {
                "oneOf": [
                    {
                        "$ref": "#/definitions/parameter"
                    },
                    {
                        "$ref": "#/definitions/jsonReference"
                    }
                ]
            },
            "uniqueItems": true
        },
        "schemesList": {
            "type": "array",
            "description": "The transfer protocol of the API.",
            "items": {
                "type": "string",
                "enum": [
                    "http",
                    "https",
                    "ws",
                    "wss"
                ]
            },
            "uniqueItems": true
        },
        "collectionFormat": {
            "type": "string",
            "enum": [
                "csv",
                "ssv",
                "tsv",
                "pipes"
            ],
            "default": "csv"
        },
        "collectionFormatWithMulti": {
            "type": "string",
            "enum": [
                "csv",
                "ssv",
                "tsv",
                "pipes",
                "multi"
            ],
            "default": "csv"
        },
        "title": {
            "$ref": "http://json-schema.org/draft-04/schema#/properties/title"
        },
        "description": {
            "$ref": "http://json-schema.org/draft-04/schema#/properties/description"
        },
        "default": {
            "$ref": "http://json-schema.org/draft-04/schema#/properties/default"
        },
        "multipleOf": {
            "$ref": "http://json-schema.org/draft-04/schema#/properties/multipleOf"
        },
        "maximum": {
            "$ref": "http://json-schema.org/draft-04/schema#/properties/maximum"
        },
        "exclusiveMaximum": {
            "$ref": "http://json-schema.org/draft-04/schema#/properties/exclusiveMaximum"
        },
        "minimum": {
            "$ref": "http://json-schema.org/draft-04/schema#/properties/minimum"
        },
        "exclusiveMinimum": {
            "$ref": "http://json-schema.org/draft-04/schema#/properties/exclusiveMinimum"
        },
        "maxLength": {
            "$ref": "http://json-schema.org/draft-04/schema#/definitions/positiveInteger"
        },
        "minLength": {
            "$ref": "http://json-schema.org/draft-04/schema#/definitions/positiveIntegerDefault0"
        },
        "pattern": {
            "$ref": "http://json-schema.org/draft-04/schema#/properties/pattern"
        },
        "maxItems": {
            "$ref": "http://json-schema.org/draft-04/schema#/definitions/positiveInteger"
        },
        "minItems": {
            "$ref": "http://json-schema.org/draft-04/schema#/definitions/positiveIntegerDefault0"
        },
        "uniqueItems": {
            "$ref": "http://json-schema.org/draft-04/schema#/properties/uniqueItems"
        },
        "enum": {
            "$ref": "http://json-schema.org/draft-04/schema#/properties/enum"
        },
        "jsonReference": {
            "type": "object",
            "required": [
                "$ref"
            ],
            "additionalProperties": false,
            "properties": {
                "$ref": {
                    "type": "string"
                }
            }
        }
    }
};
;
 //# sourceMappingURL=schema.js.map
}),
"[project]/node_modules/.pnpm/@scalar+openapi-parser@0.18.3/node_modules/@scalar/openapi-parser/dist/schemas/v3.0/schema.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>schema_default
]);
var schema_default = {
    "id": "https://spec.openapis.org/oas/3.0/schema/2021-09-28",
    "$schema": "http://json-schema.org/draft-04/schema#",
    "description": "The description of OpenAPI v3.0.x documents, as defined by https://spec.openapis.org/oas/v3.0.3",
    "type": "object",
    "required": [
        "openapi",
        "info",
        "paths"
    ],
    "properties": {
        "openapi": {
            "type": "string",
            "pattern": "^3\\.0\\.\\d(-.+)?$"
        },
        "info": {
            "$ref": "#/definitions/Info"
        },
        "externalDocs": {
            "$ref": "#/definitions/ExternalDocumentation"
        },
        "servers": {
            "type": "array",
            "items": {
                "$ref": "#/definitions/Server"
            }
        },
        "security": {
            "type": "array",
            "items": {
                "$ref": "#/definitions/SecurityRequirement"
            }
        },
        "tags": {
            "type": "array",
            "items": {
                "$ref": "#/definitions/Tag"
            },
            "uniqueItems": true
        },
        "paths": {
            "$ref": "#/definitions/Paths"
        },
        "components": {
            "$ref": "#/definitions/Components"
        }
    },
    "patternProperties": {
        "^x-": {}
    },
    "additionalProperties": false,
    "definitions": {
        "Reference": {
            "type": "object",
            "required": [
                "$ref"
            ],
            "patternProperties": {
                "^\\$ref$": {
                    "type": "string",
                    "format": "uri-reference"
                }
            }
        },
        "Info": {
            "type": "object",
            "required": [
                "title",
                "version"
            ],
            "properties": {
                "title": {
                    "type": "string"
                },
                "description": {
                    "type": "string"
                },
                "termsOfService": {
                    "type": "string",
                    "format": "uri-reference"
                },
                "contact": {
                    "$ref": "#/definitions/Contact"
                },
                "license": {
                    "$ref": "#/definitions/License"
                },
                "version": {
                    "type": "string"
                }
            },
            "patternProperties": {
                "^x-": {}
            },
            "additionalProperties": false
        },
        "Contact": {
            "type": "object",
            "properties": {
                "name": {
                    "type": "string"
                },
                "url": {
                    "type": "string",
                    "format": "uri-reference"
                },
                "email": {
                    "type": "string",
                    "format": "email"
                }
            },
            "patternProperties": {
                "^x-": {}
            },
            "additionalProperties": false
        },
        "License": {
            "type": "object",
            "required": [
                "name"
            ],
            "properties": {
                "name": {
                    "type": "string"
                },
                "url": {
                    "type": "string",
                    "format": "uri-reference"
                }
            },
            "patternProperties": {
                "^x-": {}
            },
            "additionalProperties": false
        },
        "Server": {
            "type": "object",
            "required": [
                "url"
            ],
            "properties": {
                "url": {
                    "type": "string"
                },
                "description": {
                    "type": "string"
                },
                "variables": {
                    "type": "object",
                    "additionalProperties": {
                        "$ref": "#/definitions/ServerVariable"
                    }
                }
            },
            "patternProperties": {
                "^x-": {}
            },
            "additionalProperties": false
        },
        "ServerVariable": {
            "type": "object",
            "required": [
                "default"
            ],
            "properties": {
                "enum": {
                    "type": "array",
                    "items": {
                        "type": "string"
                    }
                },
                "default": {
                    "type": "string"
                },
                "description": {
                    "type": "string"
                }
            },
            "patternProperties": {
                "^x-": {}
            },
            "additionalProperties": false
        },
        "Components": {
            "type": "object",
            "properties": {
                "schemas": {
                    "type": "object",
                    "patternProperties": {
                        "^[a-zA-Z0-9\\.\\-_]+$": {
                            "oneOf": [
                                {
                                    "$ref": "#/definitions/Schema"
                                },
                                {
                                    "$ref": "#/definitions/Reference"
                                }
                            ]
                        }
                    }
                },
                "responses": {
                    "type": "object",
                    "patternProperties": {
                        "^[a-zA-Z0-9\\.\\-_]+$": {
                            "oneOf": [
                                {
                                    "$ref": "#/definitions/Reference"
                                },
                                {
                                    "$ref": "#/definitions/Response"
                                }
                            ]
                        }
                    }
                },
                "parameters": {
                    "type": "object",
                    "patternProperties": {
                        "^[a-zA-Z0-9\\.\\-_]+$": {
                            "oneOf": [
                                {
                                    "$ref": "#/definitions/Reference"
                                },
                                {
                                    "$ref": "#/definitions/Parameter"
                                }
                            ]
                        }
                    }
                },
                "examples": {
                    "type": "object",
                    "patternProperties": {
                        "^[a-zA-Z0-9\\.\\-_]+$": {
                            "oneOf": [
                                {
                                    "$ref": "#/definitions/Reference"
                                },
                                {
                                    "$ref": "#/definitions/Example"
                                }
                            ]
                        }
                    }
                },
                "requestBodies": {
                    "type": "object",
                    "patternProperties": {
                        "^[a-zA-Z0-9\\.\\-_]+$": {
                            "oneOf": [
                                {
                                    "$ref": "#/definitions/Reference"
                                },
                                {
                                    "$ref": "#/definitions/RequestBody"
                                }
                            ]
                        }
                    }
                },
                "headers": {
                    "type": "object",
                    "patternProperties": {
                        "^[a-zA-Z0-9\\.\\-_]+$": {
                            "oneOf": [
                                {
                                    "$ref": "#/definitions/Reference"
                                },
                                {
                                    "$ref": "#/definitions/Header"
                                }
                            ]
                        }
                    }
                },
                "securitySchemes": {
                    "type": "object",
                    "patternProperties": {
                        "^[a-zA-Z0-9\\.\\-_]+$": {
                            "oneOf": [
                                {
                                    "$ref": "#/definitions/Reference"
                                },
                                {
                                    "$ref": "#/definitions/SecurityScheme"
                                }
                            ]
                        }
                    }
                },
                "links": {
                    "type": "object",
                    "patternProperties": {
                        "^[a-zA-Z0-9\\.\\-_]+$": {
                            "oneOf": [
                                {
                                    "$ref": "#/definitions/Reference"
                                },
                                {
                                    "$ref": "#/definitions/Link"
                                }
                            ]
                        }
                    }
                },
                "callbacks": {
                    "type": "object",
                    "patternProperties": {
                        "^[a-zA-Z0-9\\.\\-_]+$": {
                            "oneOf": [
                                {
                                    "$ref": "#/definitions/Reference"
                                },
                                {
                                    "$ref": "#/definitions/Callback"
                                }
                            ]
                        }
                    }
                }
            },
            "patternProperties": {
                "^x-": {}
            },
            "additionalProperties": false
        },
        "Schema": {
            "type": "object",
            "properties": {
                "title": {
                    "type": "string"
                },
                "multipleOf": {
                    "type": "number",
                    "minimum": 0,
                    "exclusiveMinimum": true
                },
                "maximum": {
                    "type": "number"
                },
                "exclusiveMaximum": {
                    "type": "boolean",
                    "default": false
                },
                "minimum": {
                    "type": "number"
                },
                "exclusiveMinimum": {
                    "type": "boolean",
                    "default": false
                },
                "maxLength": {
                    "type": "integer",
                    "minimum": 0
                },
                "minLength": {
                    "type": "integer",
                    "minimum": 0,
                    "default": 0
                },
                "pattern": {
                    "type": "string",
                    "format": "regex"
                },
                "maxItems": {
                    "type": "integer",
                    "minimum": 0
                },
                "minItems": {
                    "type": "integer",
                    "minimum": 0,
                    "default": 0
                },
                "uniqueItems": {
                    "type": "boolean",
                    "default": false
                },
                "maxProperties": {
                    "type": "integer",
                    "minimum": 0
                },
                "minProperties": {
                    "type": "integer",
                    "minimum": 0,
                    "default": 0
                },
                "required": {
                    "type": "array",
                    "items": {
                        "type": "string"
                    },
                    "minItems": 1,
                    "uniqueItems": true
                },
                "enum": {
                    "type": "array",
                    "items": {},
                    "minItems": 1,
                    "uniqueItems": false
                },
                "type": {
                    "type": "string",
                    "enum": [
                        "array",
                        "boolean",
                        "integer",
                        "number",
                        "object",
                        "string"
                    ]
                },
                "not": {
                    "oneOf": [
                        {
                            "$ref": "#/definitions/Schema"
                        },
                        {
                            "$ref": "#/definitions/Reference"
                        }
                    ]
                },
                "allOf": {
                    "type": "array",
                    "items": {
                        "oneOf": [
                            {
                                "$ref": "#/definitions/Schema"
                            },
                            {
                                "$ref": "#/definitions/Reference"
                            }
                        ]
                    }
                },
                "oneOf": {
                    "type": "array",
                    "items": {
                        "oneOf": [
                            {
                                "$ref": "#/definitions/Schema"
                            },
                            {
                                "$ref": "#/definitions/Reference"
                            }
                        ]
                    }
                },
                "anyOf": {
                    "type": "array",
                    "items": {
                        "oneOf": [
                            {
                                "$ref": "#/definitions/Schema"
                            },
                            {
                                "$ref": "#/definitions/Reference"
                            }
                        ]
                    }
                },
                "items": {
                    "oneOf": [
                        {
                            "$ref": "#/definitions/Schema"
                        },
                        {
                            "$ref": "#/definitions/Reference"
                        }
                    ]
                },
                "properties": {
                    "type": "object",
                    "additionalProperties": {
                        "oneOf": [
                            {
                                "$ref": "#/definitions/Schema"
                            },
                            {
                                "$ref": "#/definitions/Reference"
                            }
                        ]
                    }
                },
                "additionalProperties": {
                    "oneOf": [
                        {
                            "$ref": "#/definitions/Schema"
                        },
                        {
                            "$ref": "#/definitions/Reference"
                        },
                        {
                            "type": "boolean"
                        }
                    ],
                    "default": true
                },
                "description": {
                    "type": "string"
                },
                "format": {
                    "type": "string"
                },
                "default": {},
                "nullable": {
                    "type": "boolean",
                    "default": false
                },
                "discriminator": {
                    "$ref": "#/definitions/Discriminator"
                },
                "readOnly": {
                    "type": "boolean",
                    "default": false
                },
                "writeOnly": {
                    "type": "boolean",
                    "default": false
                },
                "example": {},
                "externalDocs": {
                    "$ref": "#/definitions/ExternalDocumentation"
                },
                "deprecated": {
                    "type": "boolean",
                    "default": false
                },
                "xml": {
                    "$ref": "#/definitions/XML"
                }
            },
            "patternProperties": {
                "^x-": {}
            },
            "additionalProperties": false
        },
        "Discriminator": {
            "type": "object",
            "required": [
                "propertyName"
            ],
            "properties": {
                "propertyName": {
                    "type": "string"
                },
                "mapping": {
                    "type": "object",
                    "additionalProperties": {
                        "type": "string"
                    }
                }
            }
        },
        "XML": {
            "type": "object",
            "properties": {
                "name": {
                    "type": "string"
                },
                "namespace": {
                    "type": "string",
                    "format": "uri"
                },
                "prefix": {
                    "type": "string"
                },
                "attribute": {
                    "type": "boolean",
                    "default": false
                },
                "wrapped": {
                    "type": "boolean",
                    "default": false
                }
            },
            "patternProperties": {
                "^x-": {}
            },
            "additionalProperties": false
        },
        "Response": {
            "type": "object",
            "required": [
                "description"
            ],
            "properties": {
                "description": {
                    "type": "string"
                },
                "headers": {
                    "type": "object",
                    "additionalProperties": {
                        "oneOf": [
                            {
                                "$ref": "#/definitions/Header"
                            },
                            {
                                "$ref": "#/definitions/Reference"
                            }
                        ]
                    }
                },
                "content": {
                    "type": "object",
                    "additionalProperties": {
                        "$ref": "#/definitions/MediaType"
                    }
                },
                "links": {
                    "type": "object",
                    "additionalProperties": {
                        "oneOf": [
                            {
                                "$ref": "#/definitions/Link"
                            },
                            {
                                "$ref": "#/definitions/Reference"
                            }
                        ]
                    }
                }
            },
            "patternProperties": {
                "^x-": {}
            },
            "additionalProperties": false
        },
        "MediaType": {
            "type": "object",
            "properties": {
                "schema": {
                    "oneOf": [
                        {
                            "$ref": "#/definitions/Schema"
                        },
                        {
                            "$ref": "#/definitions/Reference"
                        }
                    ]
                },
                "example": {},
                "examples": {
                    "type": "object",
                    "additionalProperties": {
                        "oneOf": [
                            {
                                "$ref": "#/definitions/Example"
                            },
                            {
                                "$ref": "#/definitions/Reference"
                            }
                        ]
                    }
                },
                "encoding": {
                    "type": "object",
                    "additionalProperties": {
                        "$ref": "#/definitions/Encoding"
                    }
                }
            },
            "patternProperties": {
                "^x-": {}
            },
            "additionalProperties": false,
            "allOf": [
                {
                    "$ref": "#/definitions/ExampleXORExamples"
                }
            ]
        },
        "Example": {
            "type": "object",
            "properties": {
                "summary": {
                    "type": "string"
                },
                "description": {
                    "type": "string"
                },
                "value": {},
                "externalValue": {
                    "type": "string",
                    "format": "uri-reference"
                }
            },
            "patternProperties": {
                "^x-": {}
            },
            "additionalProperties": false
        },
        "Header": {
            "type": "object",
            "properties": {
                "description": {
                    "type": "string"
                },
                "required": {
                    "type": "boolean",
                    "default": false
                },
                "deprecated": {
                    "type": "boolean",
                    "default": false
                },
                "allowEmptyValue": {
                    "type": "boolean",
                    "default": false
                },
                "style": {
                    "type": "string",
                    "enum": [
                        "simple"
                    ],
                    "default": "simple"
                },
                "explode": {
                    "type": "boolean"
                },
                "allowReserved": {
                    "type": "boolean",
                    "default": false
                },
                "schema": {
                    "oneOf": [
                        {
                            "$ref": "#/definitions/Schema"
                        },
                        {
                            "$ref": "#/definitions/Reference"
                        }
                    ]
                },
                "content": {
                    "type": "object",
                    "additionalProperties": {
                        "$ref": "#/definitions/MediaType"
                    },
                    "minProperties": 1,
                    "maxProperties": 1
                },
                "example": {},
                "examples": {
                    "type": "object",
                    "additionalProperties": {
                        "oneOf": [
                            {
                                "$ref": "#/definitions/Example"
                            },
                            {
                                "$ref": "#/definitions/Reference"
                            }
                        ]
                    }
                }
            },
            "patternProperties": {
                "^x-": {}
            },
            "additionalProperties": false,
            "allOf": [
                {
                    "$ref": "#/definitions/ExampleXORExamples"
                },
                {
                    "$ref": "#/definitions/SchemaXORContent"
                }
            ]
        },
        "Paths": {
            "type": "object",
            "patternProperties": {
                "^\\/": {
                    "$ref": "#/definitions/PathItem"
                },
                "^x-": {}
            },
            "additionalProperties": false
        },
        "PathItem": {
            "type": "object",
            "properties": {
                "$ref": {
                    "type": "string"
                },
                "summary": {
                    "type": "string"
                },
                "description": {
                    "type": "string"
                },
                "servers": {
                    "type": "array",
                    "items": {
                        "$ref": "#/definitions/Server"
                    }
                },
                "parameters": {
                    "type": "array",
                    "items": {
                        "oneOf": [
                            {
                                "$ref": "#/definitions/Parameter"
                            },
                            {
                                "$ref": "#/definitions/Reference"
                            }
                        ]
                    },
                    "uniqueItems": true
                }
            },
            "patternProperties": {
                "^(get|put|post|delete|options|head|patch|trace)$": {
                    "$ref": "#/definitions/Operation"
                },
                "^x-": {}
            },
            "additionalProperties": false
        },
        "Operation": {
            "type": "object",
            "required": [
                "responses"
            ],
            "properties": {
                "tags": {
                    "type": "array",
                    "items": {
                        "type": "string"
                    }
                },
                "summary": {
                    "type": "string"
                },
                "description": {
                    "type": "string"
                },
                "externalDocs": {
                    "$ref": "#/definitions/ExternalDocumentation"
                },
                "operationId": {
                    "type": "string"
                },
                "parameters": {
                    "type": "array",
                    "items": {
                        "oneOf": [
                            {
                                "$ref": "#/definitions/Parameter"
                            },
                            {
                                "$ref": "#/definitions/Reference"
                            }
                        ]
                    },
                    "uniqueItems": true
                },
                "requestBody": {
                    "oneOf": [
                        {
                            "$ref": "#/definitions/RequestBody"
                        },
                        {
                            "$ref": "#/definitions/Reference"
                        }
                    ]
                },
                "responses": {
                    "$ref": "#/definitions/Responses"
                },
                "callbacks": {
                    "type": "object",
                    "additionalProperties": {
                        "oneOf": [
                            {
                                "$ref": "#/definitions/Callback"
                            },
                            {
                                "$ref": "#/definitions/Reference"
                            }
                        ]
                    }
                },
                "deprecated": {
                    "type": "boolean",
                    "default": false
                },
                "security": {
                    "type": "array",
                    "items": {
                        "$ref": "#/definitions/SecurityRequirement"
                    }
                },
                "servers": {
                    "type": "array",
                    "items": {
                        "$ref": "#/definitions/Server"
                    }
                }
            },
            "patternProperties": {
                "^x-": {}
            },
            "additionalProperties": false
        },
        "Responses": {
            "type": "object",
            "properties": {
                "default": {
                    "oneOf": [
                        {
                            "$ref": "#/definitions/Response"
                        },
                        {
                            "$ref": "#/definitions/Reference"
                        }
                    ]
                }
            },
            "patternProperties": {
                "^[1-5](?:\\d{2}|XX)$": {
                    "oneOf": [
                        {
                            "$ref": "#/definitions/Response"
                        },
                        {
                            "$ref": "#/definitions/Reference"
                        }
                    ]
                },
                "^x-": {}
            },
            "minProperties": 1,
            "additionalProperties": false
        },
        "SecurityRequirement": {
            "type": "object",
            "additionalProperties": {
                "type": "array",
                "items": {
                    "type": "string"
                }
            }
        },
        "Tag": {
            "type": "object",
            "required": [
                "name"
            ],
            "properties": {
                "name": {
                    "type": "string"
                },
                "description": {
                    "type": "string"
                },
                "externalDocs": {
                    "$ref": "#/definitions/ExternalDocumentation"
                }
            },
            "patternProperties": {
                "^x-": {}
            },
            "additionalProperties": false
        },
        "ExternalDocumentation": {
            "type": "object",
            "required": [
                "url"
            ],
            "properties": {
                "description": {
                    "type": "string"
                },
                "url": {
                    "type": "string",
                    "format": "uri-reference"
                }
            },
            "patternProperties": {
                "^x-": {}
            },
            "additionalProperties": false
        },
        "ExampleXORExamples": {
            "description": "Example and examples are mutually exclusive",
            "not": {
                "required": [
                    "example",
                    "examples"
                ]
            }
        },
        "SchemaXORContent": {
            "description": "Schema and content are mutually exclusive, at least one is required",
            "not": {
                "required": [
                    "schema",
                    "content"
                ]
            },
            "oneOf": [
                {
                    "required": [
                        "schema"
                    ]
                },
                {
                    "required": [
                        "content"
                    ],
                    "description": "Some properties are not allowed if content is present",
                    "allOf": [
                        {
                            "not": {
                                "required": [
                                    "style"
                                ]
                            }
                        },
                        {
                            "not": {
                                "required": [
                                    "explode"
                                ]
                            }
                        },
                        {
                            "not": {
                                "required": [
                                    "allowReserved"
                                ]
                            }
                        },
                        {
                            "not": {
                                "required": [
                                    "example"
                                ]
                            }
                        },
                        {
                            "not": {
                                "required": [
                                    "examples"
                                ]
                            }
                        }
                    ]
                }
            ]
        },
        "Parameter": {
            "type": "object",
            "properties": {
                "name": {
                    "type": "string"
                },
                "in": {
                    "type": "string"
                },
                "description": {
                    "type": "string"
                },
                "required": {
                    "type": "boolean",
                    "default": false
                },
                "deprecated": {
                    "type": "boolean",
                    "default": false
                },
                "allowEmptyValue": {
                    "type": "boolean",
                    "default": false
                },
                "style": {
                    "type": "string"
                },
                "explode": {
                    "type": "boolean"
                },
                "allowReserved": {
                    "type": "boolean",
                    "default": false
                },
                "schema": {
                    "oneOf": [
                        {
                            "$ref": "#/definitions/Schema"
                        },
                        {
                            "$ref": "#/definitions/Reference"
                        }
                    ]
                },
                "content": {
                    "type": "object",
                    "additionalProperties": {
                        "$ref": "#/definitions/MediaType"
                    },
                    "minProperties": 1,
                    "maxProperties": 1
                },
                "example": {},
                "examples": {
                    "type": "object",
                    "additionalProperties": {
                        "oneOf": [
                            {
                                "$ref": "#/definitions/Example"
                            },
                            {
                                "$ref": "#/definitions/Reference"
                            }
                        ]
                    }
                }
            },
            "patternProperties": {
                "^x-": {}
            },
            "additionalProperties": false,
            "required": [
                "name",
                "in"
            ],
            "allOf": [
                {
                    "$ref": "#/definitions/ExampleXORExamples"
                },
                {
                    "$ref": "#/definitions/SchemaXORContent"
                },
                {
                    "$ref": "#/definitions/ParameterLocation"
                }
            ]
        },
        "ParameterLocation": {
            "description": "Parameter location",
            "oneOf": [
                {
                    "description": "Parameter in path",
                    "required": [
                        "required"
                    ],
                    "properties": {
                        "in": {
                            "enum": [
                                "path"
                            ]
                        },
                        "style": {
                            "enum": [
                                "matrix",
                                "label",
                                "simple"
                            ],
                            "default": "simple"
                        },
                        "required": {
                            "enum": [
                                true
                            ]
                        }
                    }
                },
                {
                    "description": "Parameter in query",
                    "properties": {
                        "in": {
                            "enum": [
                                "query"
                            ]
                        },
                        "style": {
                            "enum": [
                                "form",
                                "spaceDelimited",
                                "pipeDelimited",
                                "deepObject"
                            ],
                            "default": "form"
                        }
                    }
                },
                {
                    "description": "Parameter in header",
                    "properties": {
                        "in": {
                            "enum": [
                                "header"
                            ]
                        },
                        "style": {
                            "enum": [
                                "simple"
                            ],
                            "default": "simple"
                        }
                    }
                },
                {
                    "description": "Parameter in cookie",
                    "properties": {
                        "in": {
                            "enum": [
                                "cookie"
                            ]
                        },
                        "style": {
                            "enum": [
                                "form"
                            ],
                            "default": "form"
                        }
                    }
                }
            ]
        },
        "RequestBody": {
            "type": "object",
            "required": [
                "content"
            ],
            "properties": {
                "description": {
                    "type": "string"
                },
                "content": {
                    "type": "object",
                    "additionalProperties": {
                        "$ref": "#/definitions/MediaType"
                    }
                },
                "required": {
                    "type": "boolean",
                    "default": false
                }
            },
            "patternProperties": {
                "^x-": {}
            },
            "additionalProperties": false
        },
        "SecurityScheme": {
            "oneOf": [
                {
                    "$ref": "#/definitions/APIKeySecurityScheme"
                },
                {
                    "$ref": "#/definitions/HTTPSecurityScheme"
                },
                {
                    "$ref": "#/definitions/OAuth2SecurityScheme"
                },
                {
                    "$ref": "#/definitions/OpenIdConnectSecurityScheme"
                }
            ]
        },
        "APIKeySecurityScheme": {
            "type": "object",
            "required": [
                "type",
                "name",
                "in"
            ],
            "properties": {
                "type": {
                    "type": "string",
                    "enum": [
                        "apiKey"
                    ]
                },
                "name": {
                    "type": "string"
                },
                "in": {
                    "type": "string",
                    "enum": [
                        "header",
                        "query",
                        "cookie"
                    ]
                },
                "description": {
                    "type": "string"
                }
            },
            "patternProperties": {
                "^x-": {}
            },
            "additionalProperties": false
        },
        "HTTPSecurityScheme": {
            "type": "object",
            "required": [
                "scheme",
                "type"
            ],
            "properties": {
                "scheme": {
                    "type": "string"
                },
                "bearerFormat": {
                    "type": "string"
                },
                "description": {
                    "type": "string"
                },
                "type": {
                    "type": "string",
                    "enum": [
                        "http"
                    ]
                }
            },
            "patternProperties": {
                "^x-": {}
            },
            "additionalProperties": false,
            "oneOf": [
                {
                    "description": "Bearer",
                    "properties": {
                        "scheme": {
                            "type": "string",
                            "pattern": "^[Bb][Ee][Aa][Rr][Ee][Rr]$"
                        }
                    }
                },
                {
                    "description": "Non Bearer",
                    "not": {
                        "required": [
                            "bearerFormat"
                        ]
                    },
                    "properties": {
                        "scheme": {
                            "not": {
                                "type": "string",
                                "pattern": "^[Bb][Ee][Aa][Rr][Ee][Rr]$"
                            }
                        }
                    }
                }
            ]
        },
        "OAuth2SecurityScheme": {
            "type": "object",
            "required": [
                "type",
                "flows"
            ],
            "properties": {
                "type": {
                    "type": "string",
                    "enum": [
                        "oauth2"
                    ]
                },
                "flows": {
                    "$ref": "#/definitions/OAuthFlows"
                },
                "description": {
                    "type": "string"
                }
            },
            "patternProperties": {
                "^x-": {}
            },
            "additionalProperties": false
        },
        "OpenIdConnectSecurityScheme": {
            "type": "object",
            "required": [
                "type",
                "openIdConnectUrl"
            ],
            "properties": {
                "type": {
                    "type": "string",
                    "enum": [
                        "openIdConnect"
                    ]
                },
                "openIdConnectUrl": {
                    "type": "string",
                    "format": "uri-reference"
                },
                "description": {
                    "type": "string"
                }
            },
            "patternProperties": {
                "^x-": {}
            },
            "additionalProperties": false
        },
        "OAuthFlows": {
            "type": "object",
            "properties": {
                "implicit": {
                    "$ref": "#/definitions/ImplicitOAuthFlow"
                },
                "password": {
                    "$ref": "#/definitions/PasswordOAuthFlow"
                },
                "clientCredentials": {
                    "$ref": "#/definitions/ClientCredentialsFlow"
                },
                "authorizationCode": {
                    "$ref": "#/definitions/AuthorizationCodeOAuthFlow"
                }
            },
            "patternProperties": {
                "^x-": {}
            },
            "additionalProperties": false
        },
        "ImplicitOAuthFlow": {
            "type": "object",
            "required": [
                "authorizationUrl",
                "scopes"
            ],
            "properties": {
                "authorizationUrl": {
                    "type": "string",
                    "format": "uri-reference"
                },
                "refreshUrl": {
                    "type": "string",
                    "format": "uri-reference"
                },
                "scopes": {
                    "type": "object",
                    "additionalProperties": {
                        "type": "string"
                    }
                }
            },
            "patternProperties": {
                "^x-": {}
            },
            "additionalProperties": false
        },
        "PasswordOAuthFlow": {
            "type": "object",
            "required": [
                "tokenUrl",
                "scopes"
            ],
            "properties": {
                "tokenUrl": {
                    "type": "string",
                    "format": "uri-reference"
                },
                "refreshUrl": {
                    "type": "string",
                    "format": "uri-reference"
                },
                "scopes": {
                    "type": "object",
                    "additionalProperties": {
                        "type": "string"
                    }
                }
            },
            "patternProperties": {
                "^x-": {}
            },
            "additionalProperties": false
        },
        "ClientCredentialsFlow": {
            "type": "object",
            "required": [
                "tokenUrl",
                "scopes"
            ],
            "properties": {
                "tokenUrl": {
                    "type": "string",
                    "format": "uri-reference"
                },
                "refreshUrl": {
                    "type": "string",
                    "format": "uri-reference"
                },
                "scopes": {
                    "type": "object",
                    "additionalProperties": {
                        "type": "string"
                    }
                }
            },
            "patternProperties": {
                "^x-": {}
            },
            "additionalProperties": false
        },
        "AuthorizationCodeOAuthFlow": {
            "type": "object",
            "required": [
                "authorizationUrl",
                "tokenUrl",
                "scopes"
            ],
            "properties": {
                "authorizationUrl": {
                    "type": "string",
                    "format": "uri-reference"
                },
                "tokenUrl": {
                    "type": "string",
                    "format": "uri-reference"
                },
                "refreshUrl": {
                    "type": "string",
                    "format": "uri-reference"
                },
                "scopes": {
                    "type": "object",
                    "additionalProperties": {
                        "type": "string"
                    }
                }
            },
            "patternProperties": {
                "^x-": {}
            },
            "additionalProperties": false
        },
        "Link": {
            "type": "object",
            "properties": {
                "operationId": {
                    "type": "string"
                },
                "operationRef": {
                    "type": "string",
                    "format": "uri-reference"
                },
                "parameters": {
                    "type": "object",
                    "additionalProperties": {}
                },
                "requestBody": {},
                "description": {
                    "type": "string"
                },
                "server": {
                    "$ref": "#/definitions/Server"
                }
            },
            "patternProperties": {
                "^x-": {}
            },
            "additionalProperties": false,
            "not": {
                "description": "Operation Id and Operation Ref are mutually exclusive",
                "required": [
                    "operationId",
                    "operationRef"
                ]
            }
        },
        "Callback": {
            "type": "object",
            "additionalProperties": {
                "$ref": "#/definitions/PathItem"
            },
            "patternProperties": {
                "^x-": {}
            }
        },
        "Encoding": {
            "type": "object",
            "properties": {
                "contentType": {
                    "type": "string"
                },
                "headers": {
                    "type": "object",
                    "additionalProperties": {
                        "oneOf": [
                            {
                                "$ref": "#/definitions/Header"
                            },
                            {
                                "$ref": "#/definitions/Reference"
                            }
                        ]
                    }
                },
                "style": {
                    "type": "string",
                    "enum": [
                        "form",
                        "spaceDelimited",
                        "pipeDelimited",
                        "deepObject"
                    ]
                },
                "explode": {
                    "type": "boolean"
                },
                "allowReserved": {
                    "type": "boolean",
                    "default": false
                }
            },
            "additionalProperties": false
        }
    }
};
;
 //# sourceMappingURL=schema.js.map
}),
"[project]/node_modules/.pnpm/@scalar+openapi-parser@0.18.3/node_modules/@scalar/openapi-parser/dist/schemas/v3.1/schema.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>schema_default
]);
var schema_default = {
    "$id": "https://spec.openapis.org/oas/3.1/schema/2022-10-07",
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "description": "The description of OpenAPI v3.1.x documents without schema validation, as defined by https://spec.openapis.org/oas/v3.1.0",
    "type": "object",
    "properties": {
        "openapi": {
            "type": "string",
            "pattern": "^3\\.1\\.\\d+(-.+)?$"
        },
        "info": {
            "$ref": "#/$defs/info"
        },
        "jsonSchemaDialect": {
            "type": "string",
            "format": "uri-reference",
            "default": "https://spec.openapis.org/oas/3.1/dialect/base"
        },
        "servers": {
            "type": "array",
            "items": {
                "$ref": "#/$defs/server"
            },
            "default": [
                {
                    "url": "/"
                }
            ]
        },
        "paths": {
            "$ref": "#/$defs/paths"
        },
        "webhooks": {
            "type": "object",
            "additionalProperties": {
                "$ref": "#/$defs/path-item-or-reference"
            }
        },
        "components": {
            "$ref": "#/$defs/components"
        },
        "security": {
            "type": "array",
            "items": {
                "$ref": "#/$defs/security-requirement"
            }
        },
        "tags": {
            "type": "array",
            "items": {
                "$ref": "#/$defs/tag"
            }
        },
        "externalDocs": {
            "$ref": "#/$defs/external-documentation"
        }
    },
    "required": [
        "openapi",
        "info"
    ],
    "anyOf": [
        {
            "required": [
                "paths"
            ]
        },
        {
            "required": [
                "components"
            ]
        },
        {
            "required": [
                "webhooks"
            ]
        }
    ],
    "$ref": "#/$defs/specification-extensions",
    "unevaluatedProperties": false,
    "$defs": {
        "info": {
            "$comment": "https://spec.openapis.org/oas/v3.1.0#info-object",
            "type": "object",
            "properties": {
                "title": {
                    "type": "string"
                },
                "summary": {
                    "type": "string"
                },
                "description": {
                    "type": "string"
                },
                "termsOfService": {
                    "type": "string",
                    "format": "uri-reference"
                },
                "contact": {
                    "$ref": "#/$defs/contact"
                },
                "license": {
                    "$ref": "#/$defs/license"
                },
                "version": {
                    "type": "string"
                }
            },
            "required": [
                "title",
                "version"
            ],
            "$ref": "#/$defs/specification-extensions",
            "unevaluatedProperties": false
        },
        "contact": {
            "$comment": "https://spec.openapis.org/oas/v3.1.0#contact-object",
            "type": "object",
            "properties": {
                "name": {
                    "type": "string"
                },
                "url": {
                    "type": "string",
                    "format": "uri-reference"
                },
                "email": {
                    "type": "string",
                    "format": "email"
                }
            },
            "$ref": "#/$defs/specification-extensions",
            "unevaluatedProperties": false
        },
        "license": {
            "$comment": "https://spec.openapis.org/oas/v3.1.0#license-object",
            "type": "object",
            "properties": {
                "name": {
                    "type": "string"
                },
                "identifier": {
                    "type": "string"
                },
                "url": {
                    "type": "string",
                    "format": "uri-reference"
                }
            },
            "required": [
                "name"
            ],
            "dependentSchemas": {
                "identifier": {
                    "not": {
                        "required": [
                            "url"
                        ]
                    }
                }
            },
            "$ref": "#/$defs/specification-extensions",
            "unevaluatedProperties": false
        },
        "server": {
            "$comment": "https://spec.openapis.org/oas/v3.1.0#server-object",
            "type": "object",
            "properties": {
                "url": {
                    "type": "string"
                },
                "description": {
                    "type": "string"
                },
                "variables": {
                    "type": "object",
                    "additionalProperties": {
                        "$ref": "#/$defs/server-variable"
                    }
                }
            },
            "required": [
                "url"
            ],
            "$ref": "#/$defs/specification-extensions",
            "unevaluatedProperties": false
        },
        "server-variable": {
            "$comment": "https://spec.openapis.org/oas/v3.1.0#server-variable-object",
            "type": "object",
            "properties": {
                "enum": {
                    "type": "array",
                    "items": {
                        "type": "string"
                    },
                    "minItems": 1
                },
                "default": {
                    "type": "string"
                },
                "description": {
                    "type": "string"
                }
            },
            "required": [
                "default"
            ],
            "$ref": "#/$defs/specification-extensions",
            "unevaluatedProperties": false
        },
        "components": {
            "$comment": "https://spec.openapis.org/oas/v3.1.0#components-object",
            "type": "object",
            "properties": {
                "schemas": {
                    "type": "object",
                    "additionalProperties": {
                        "$ref": "#/$defs/schema"
                    }
                },
                "responses": {
                    "type": "object",
                    "additionalProperties": {
                        "$ref": "#/$defs/response-or-reference"
                    }
                },
                "parameters": {
                    "type": "object",
                    "additionalProperties": {
                        "$ref": "#/$defs/parameter-or-reference"
                    }
                },
                "examples": {
                    "type": "object",
                    "additionalProperties": {
                        "$ref": "#/$defs/example-or-reference"
                    }
                },
                "requestBodies": {
                    "type": "object",
                    "additionalProperties": {
                        "$ref": "#/$defs/request-body-or-reference"
                    }
                },
                "headers": {
                    "type": "object",
                    "additionalProperties": {
                        "$ref": "#/$defs/header-or-reference"
                    }
                },
                "securitySchemes": {
                    "type": "object",
                    "additionalProperties": {
                        "$ref": "#/$defs/security-scheme-or-reference"
                    }
                },
                "links": {
                    "type": "object",
                    "additionalProperties": {
                        "$ref": "#/$defs/link-or-reference"
                    }
                },
                "callbacks": {
                    "type": "object",
                    "additionalProperties": {
                        "$ref": "#/$defs/callbacks-or-reference"
                    }
                },
                "pathItems": {
                    "type": "object",
                    "additionalProperties": {
                        "$ref": "#/$defs/path-item-or-reference"
                    }
                }
            },
            "patternProperties": {
                "^(schemas|responses|parameters|examples|requestBodies|headers|securitySchemes|links|callbacks|pathItems)$": {
                    "$comment": "Enumerating all of the property names in the regex above is necessary for unevaluatedProperties to work as expected",
                    "propertyNames": {
                        "pattern": "^[a-zA-Z0-9._-]+$"
                    }
                }
            },
            "$ref": "#/$defs/specification-extensions",
            "unevaluatedProperties": false
        },
        "paths": {
            "$comment": "https://spec.openapis.org/oas/v3.1.0#paths-object",
            "type": "object",
            "patternProperties": {
                "^/": {
                    "$ref": "#/$defs/path-item"
                }
            },
            "$ref": "#/$defs/specification-extensions",
            "unevaluatedProperties": false
        },
        "path-item": {
            "$comment": "https://spec.openapis.org/oas/v3.1.0#path-item-object",
            "type": "object",
            "properties": {
                "summary": {
                    "type": "string"
                },
                "description": {
                    "type": "string"
                },
                "servers": {
                    "type": "array",
                    "items": {
                        "$ref": "#/$defs/server"
                    }
                },
                "parameters": {
                    "type": "array",
                    "items": {
                        "$ref": "#/$defs/parameter-or-reference"
                    }
                },
                "get": {
                    "$ref": "#/$defs/operation"
                },
                "put": {
                    "$ref": "#/$defs/operation"
                },
                "post": {
                    "$ref": "#/$defs/operation"
                },
                "delete": {
                    "$ref": "#/$defs/operation"
                },
                "options": {
                    "$ref": "#/$defs/operation"
                },
                "head": {
                    "$ref": "#/$defs/operation"
                },
                "patch": {
                    "$ref": "#/$defs/operation"
                },
                "trace": {
                    "$ref": "#/$defs/operation"
                }
            },
            "$ref": "#/$defs/specification-extensions",
            "unevaluatedProperties": false
        },
        "path-item-or-reference": {
            "if": {
                "type": "object",
                "required": [
                    "$ref"
                ]
            },
            "then": {
                "$ref": "#/$defs/reference"
            },
            "else": {
                "$ref": "#/$defs/path-item"
            }
        },
        "operation": {
            "$comment": "https://spec.openapis.org/oas/v3.1.0#operation-object",
            "type": "object",
            "properties": {
                "tags": {
                    "type": "array",
                    "items": {
                        "type": "string"
                    }
                },
                "summary": {
                    "type": "string"
                },
                "description": {
                    "type": "string"
                },
                "externalDocs": {
                    "$ref": "#/$defs/external-documentation"
                },
                "operationId": {
                    "type": "string"
                },
                "parameters": {
                    "type": "array",
                    "items": {
                        "$ref": "#/$defs/parameter-or-reference"
                    }
                },
                "requestBody": {
                    "$ref": "#/$defs/request-body-or-reference"
                },
                "responses": {
                    "$ref": "#/$defs/responses"
                },
                "callbacks": {
                    "type": "object",
                    "additionalProperties": {
                        "$ref": "#/$defs/callbacks-or-reference"
                    }
                },
                "deprecated": {
                    "default": false,
                    "type": "boolean"
                },
                "security": {
                    "type": "array",
                    "items": {
                        "$ref": "#/$defs/security-requirement"
                    }
                },
                "servers": {
                    "type": "array",
                    "items": {
                        "$ref": "#/$defs/server"
                    }
                }
            },
            "$ref": "#/$defs/specification-extensions",
            "unevaluatedProperties": false
        },
        "external-documentation": {
            "$comment": "https://spec.openapis.org/oas/v3.1.0#external-documentation-object",
            "type": "object",
            "properties": {
                "description": {
                    "type": "string"
                },
                "url": {
                    "type": "string",
                    "format": "uri-reference"
                }
            },
            "required": [
                "url"
            ],
            "$ref": "#/$defs/specification-extensions",
            "unevaluatedProperties": false
        },
        "parameter": {
            "$comment": "https://spec.openapis.org/oas/v3.1.0#parameter-object",
            "type": "object",
            "properties": {
                "name": {
                    "type": "string"
                },
                "in": {
                    "enum": [
                        "query",
                        "header",
                        "path",
                        "cookie"
                    ]
                },
                "description": {
                    "type": "string"
                },
                "required": {
                    "default": false,
                    "type": "boolean"
                },
                "deprecated": {
                    "default": false,
                    "type": "boolean"
                },
                "schema": {
                    "$ref": "#/$defs/schema"
                },
                "content": {
                    "$ref": "#/$defs/content",
                    "minProperties": 1,
                    "maxProperties": 1
                }
            },
            "required": [
                "name",
                "in"
            ],
            "oneOf": [
                {
                    "required": [
                        "schema"
                    ]
                },
                {
                    "required": [
                        "content"
                    ]
                }
            ],
            "if": {
                "properties": {
                    "in": {
                        "const": "query"
                    }
                },
                "required": [
                    "in"
                ]
            },
            "then": {
                "properties": {
                    "allowEmptyValue": {
                        "default": false,
                        "type": "boolean"
                    }
                }
            },
            "dependentSchemas": {
                "schema": {
                    "properties": {
                        "style": {
                            "type": "string"
                        },
                        "explode": {
                            "type": "boolean"
                        }
                    },
                    "allOf": [
                        {
                            "$ref": "#/$defs/examples"
                        },
                        {
                            "$ref": "#/$defs/parameter/dependentSchemas/schema/$defs/styles-for-path"
                        },
                        {
                            "$ref": "#/$defs/parameter/dependentSchemas/schema/$defs/styles-for-header"
                        },
                        {
                            "$ref": "#/$defs/parameter/dependentSchemas/schema/$defs/styles-for-query"
                        },
                        {
                            "$ref": "#/$defs/parameter/dependentSchemas/schema/$defs/styles-for-cookie"
                        },
                        {
                            "$ref": "#/$defs/parameter/dependentSchemas/schema/$defs/styles-for-form"
                        }
                    ],
                    "$defs": {
                        "styles-for-path": {
                            "if": {
                                "properties": {
                                    "in": {
                                        "const": "path"
                                    }
                                },
                                "required": [
                                    "in"
                                ]
                            },
                            "then": {
                                "properties": {
                                    "name": {
                                        "pattern": "[^/#?]+$"
                                    },
                                    "style": {
                                        "default": "simple",
                                        "enum": [
                                            "matrix",
                                            "label",
                                            "simple"
                                        ]
                                    },
                                    "required": {
                                        "const": true
                                    }
                                },
                                "required": [
                                    "required"
                                ]
                            }
                        },
                        "styles-for-header": {
                            "if": {
                                "properties": {
                                    "in": {
                                        "const": "header"
                                    }
                                },
                                "required": [
                                    "in"
                                ]
                            },
                            "then": {
                                "properties": {
                                    "style": {
                                        "default": "simple",
                                        "const": "simple"
                                    }
                                }
                            }
                        },
                        "styles-for-query": {
                            "if": {
                                "properties": {
                                    "in": {
                                        "const": "query"
                                    }
                                },
                                "required": [
                                    "in"
                                ]
                            },
                            "then": {
                                "properties": {
                                    "style": {
                                        "default": "form",
                                        "enum": [
                                            "form",
                                            "spaceDelimited",
                                            "pipeDelimited",
                                            "deepObject"
                                        ]
                                    },
                                    "allowReserved": {
                                        "default": false,
                                        "type": "boolean"
                                    }
                                }
                            }
                        },
                        "styles-for-cookie": {
                            "if": {
                                "properties": {
                                    "in": {
                                        "const": "cookie"
                                    }
                                },
                                "required": [
                                    "in"
                                ]
                            },
                            "then": {
                                "properties": {
                                    "style": {
                                        "default": "form",
                                        "const": "form"
                                    }
                                }
                            }
                        },
                        "styles-for-form": {
                            "if": {
                                "properties": {
                                    "style": {
                                        "const": "form"
                                    }
                                },
                                "required": [
                                    "style"
                                ]
                            },
                            "then": {
                                "properties": {
                                    "explode": {
                                        "default": true
                                    }
                                }
                            },
                            "else": {
                                "properties": {
                                    "explode": {
                                        "default": false
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "$ref": "#/$defs/specification-extensions",
            "unevaluatedProperties": false
        },
        "parameter-or-reference": {
            "if": {
                "type": "object",
                "required": [
                    "$ref"
                ]
            },
            "then": {
                "$ref": "#/$defs/reference"
            },
            "else": {
                "$ref": "#/$defs/parameter"
            }
        },
        "request-body": {
            "$comment": "https://spec.openapis.org/oas/v3.1.0#request-body-object",
            "type": "object",
            "properties": {
                "description": {
                    "type": "string"
                },
                "content": {
                    "$ref": "#/$defs/content"
                },
                "required": {
                    "default": false,
                    "type": "boolean"
                }
            },
            "required": [
                "content"
            ],
            "$ref": "#/$defs/specification-extensions",
            "unevaluatedProperties": false
        },
        "request-body-or-reference": {
            "if": {
                "type": "object",
                "required": [
                    "$ref"
                ]
            },
            "then": {
                "$ref": "#/$defs/reference"
            },
            "else": {
                "$ref": "#/$defs/request-body"
            }
        },
        "content": {
            "$comment": "https://spec.openapis.org/oas/v3.1.0#fixed-fields-10",
            "type": "object",
            "additionalProperties": {
                "$ref": "#/$defs/media-type"
            },
            "propertyNames": {
                "format": "media-range"
            }
        },
        "media-type": {
            "$comment": "https://spec.openapis.org/oas/v3.1.0#media-type-object",
            "type": "object",
            "properties": {
                "schema": {
                    "$ref": "#/$defs/schema"
                },
                "encoding": {
                    "type": "object",
                    "additionalProperties": {
                        "$ref": "#/$defs/encoding"
                    }
                }
            },
            "allOf": [
                {
                    "$ref": "#/$defs/specification-extensions"
                },
                {
                    "$ref": "#/$defs/examples"
                }
            ],
            "unevaluatedProperties": false
        },
        "encoding": {
            "$comment": "https://spec.openapis.org/oas/v3.1.0#encoding-object",
            "type": "object",
            "properties": {
                "contentType": {
                    "type": "string",
                    "format": "media-range"
                },
                "headers": {
                    "type": "object",
                    "additionalProperties": {
                        "$ref": "#/$defs/header-or-reference"
                    }
                },
                "style": {
                    "default": "form",
                    "enum": [
                        "form",
                        "spaceDelimited",
                        "pipeDelimited",
                        "deepObject"
                    ]
                },
                "explode": {
                    "type": "boolean"
                },
                "allowReserved": {
                    "default": false,
                    "type": "boolean"
                }
            },
            "allOf": [
                {
                    "$ref": "#/$defs/specification-extensions"
                },
                {
                    "$ref": "#/$defs/encoding/$defs/explode-default"
                }
            ],
            "unevaluatedProperties": false,
            "$defs": {
                "explode-default": {
                    "if": {
                        "properties": {
                            "style": {
                                "const": "form"
                            }
                        },
                        "required": [
                            "style"
                        ]
                    },
                    "then": {
                        "properties": {
                            "explode": {
                                "default": true
                            }
                        }
                    },
                    "else": {
                        "properties": {
                            "explode": {
                                "default": false
                            }
                        }
                    }
                }
            }
        },
        "responses": {
            "$comment": "https://spec.openapis.org/oas/v3.1.0#responses-object",
            "type": "object",
            "properties": {
                "default": {
                    "$ref": "#/$defs/response-or-reference"
                }
            },
            "patternProperties": {
                "^[1-5](?:[0-9]{2}|XX)$": {
                    "$ref": "#/$defs/response-or-reference"
                }
            },
            "minProperties": 1,
            "$ref": "#/$defs/specification-extensions",
            "unevaluatedProperties": false
        },
        "response": {
            "$comment": "https://spec.openapis.org/oas/v3.1.0#response-object",
            "type": "object",
            "properties": {
                "description": {
                    "type": "string"
                },
                "headers": {
                    "type": "object",
                    "additionalProperties": {
                        "$ref": "#/$defs/header-or-reference"
                    }
                },
                "content": {
                    "$ref": "#/$defs/content"
                },
                "links": {
                    "type": "object",
                    "additionalProperties": {
                        "$ref": "#/$defs/link-or-reference"
                    }
                }
            },
            "required": [
                "description"
            ],
            "$ref": "#/$defs/specification-extensions",
            "unevaluatedProperties": false
        },
        "response-or-reference": {
            "if": {
                "type": "object",
                "required": [
                    "$ref"
                ]
            },
            "then": {
                "$ref": "#/$defs/reference"
            },
            "else": {
                "$ref": "#/$defs/response"
            }
        },
        "callbacks": {
            "$comment": "https://spec.openapis.org/oas/v3.1.0#callback-object",
            "type": "object",
            "$ref": "#/$defs/specification-extensions",
            "additionalProperties": {
                "$ref": "#/$defs/path-item-or-reference"
            }
        },
        "callbacks-or-reference": {
            "if": {
                "type": "object",
                "required": [
                    "$ref"
                ]
            },
            "then": {
                "$ref": "#/$defs/reference"
            },
            "else": {
                "$ref": "#/$defs/callbacks"
            }
        },
        "example": {
            "$comment": "https://spec.openapis.org/oas/v3.1.0#example-object",
            "type": "object",
            "properties": {
                "summary": {
                    "type": "string"
                },
                "description": {
                    "type": "string"
                },
                "value": true,
                "externalValue": {
                    "type": "string",
                    "format": "uri-reference"
                }
            },
            "not": {
                "required": [
                    "value",
                    "externalValue"
                ]
            },
            "$ref": "#/$defs/specification-extensions",
            "unevaluatedProperties": false
        },
        "example-or-reference": {
            "if": {
                "type": "object",
                "required": [
                    "$ref"
                ]
            },
            "then": {
                "$ref": "#/$defs/reference"
            },
            "else": {
                "$ref": "#/$defs/example"
            }
        },
        "link": {
            "$comment": "https://spec.openapis.org/oas/v3.1.0#link-object",
            "type": "object",
            "properties": {
                "operationRef": {
                    "type": "string",
                    "format": "uri-reference"
                },
                "operationId": {
                    "type": "string"
                },
                "parameters": {
                    "$ref": "#/$defs/map-of-strings"
                },
                "requestBody": true,
                "description": {
                    "type": "string"
                },
                "body": {
                    "$ref": "#/$defs/server"
                }
            },
            "oneOf": [
                {
                    "required": [
                        "operationRef"
                    ]
                },
                {
                    "required": [
                        "operationId"
                    ]
                }
            ],
            "$ref": "#/$defs/specification-extensions",
            "unevaluatedProperties": false
        },
        "link-or-reference": {
            "if": {
                "type": "object",
                "required": [
                    "$ref"
                ]
            },
            "then": {
                "$ref": "#/$defs/reference"
            },
            "else": {
                "$ref": "#/$defs/link"
            }
        },
        "header": {
            "$comment": "https://spec.openapis.org/oas/v3.1.0#header-object",
            "type": "object",
            "properties": {
                "description": {
                    "type": "string"
                },
                "required": {
                    "default": false,
                    "type": "boolean"
                },
                "deprecated": {
                    "default": false,
                    "type": "boolean"
                },
                "schema": {
                    "$ref": "#/$defs/schema"
                },
                "content": {
                    "$ref": "#/$defs/content",
                    "minProperties": 1,
                    "maxProperties": 1
                }
            },
            "oneOf": [
                {
                    "required": [
                        "schema"
                    ]
                },
                {
                    "required": [
                        "content"
                    ]
                }
            ],
            "dependentSchemas": {
                "schema": {
                    "properties": {
                        "style": {
                            "default": "simple",
                            "const": "simple"
                        },
                        "explode": {
                            "default": false,
                            "type": "boolean"
                        }
                    },
                    "$ref": "#/$defs/examples"
                }
            },
            "$ref": "#/$defs/specification-extensions",
            "unevaluatedProperties": false
        },
        "header-or-reference": {
            "if": {
                "type": "object",
                "required": [
                    "$ref"
                ]
            },
            "then": {
                "$ref": "#/$defs/reference"
            },
            "else": {
                "$ref": "#/$defs/header"
            }
        },
        "tag": {
            "$comment": "https://spec.openapis.org/oas/v3.1.0#tag-object",
            "type": "object",
            "properties": {
                "name": {
                    "type": "string"
                },
                "description": {
                    "type": "string"
                },
                "externalDocs": {
                    "$ref": "#/$defs/external-documentation"
                }
            },
            "required": [
                "name"
            ],
            "$ref": "#/$defs/specification-extensions",
            "unevaluatedProperties": false
        },
        "reference": {
            "$comment": "https://spec.openapis.org/oas/v3.1.0#reference-object",
            "type": "object",
            "properties": {
                "$ref": {
                    "type": "string",
                    "format": "uri-reference"
                },
                "summary": {
                    "type": "string"
                },
                "description": {
                    "type": "string"
                }
            },
            "unevaluatedProperties": false
        },
        "schema": {
            "$comment": "https://spec.openapis.org/oas/v3.1.0#schema-object",
            "$dynamicAnchor": "meta",
            "type": [
                "object",
                "boolean"
            ]
        },
        "security-scheme": {
            "$comment": "https://spec.openapis.org/oas/v3.1.0#security-scheme-object",
            "type": "object",
            "properties": {
                "type": {
                    "enum": [
                        "apiKey",
                        "http",
                        "mutualTLS",
                        "oauth2",
                        "openIdConnect"
                    ]
                },
                "description": {
                    "type": "string"
                }
            },
            "required": [
                "type"
            ],
            "allOf": [
                {
                    "$ref": "#/$defs/specification-extensions"
                },
                {
                    "$ref": "#/$defs/security-scheme/$defs/type-apikey"
                },
                {
                    "$ref": "#/$defs/security-scheme/$defs/type-http"
                },
                {
                    "$ref": "#/$defs/security-scheme/$defs/type-http-bearer"
                },
                {
                    "$ref": "#/$defs/security-scheme/$defs/type-oauth2"
                },
                {
                    "$ref": "#/$defs/security-scheme/$defs/type-oidc"
                }
            ],
            "unevaluatedProperties": false,
            "$defs": {
                "type-apikey": {
                    "if": {
                        "properties": {
                            "type": {
                                "const": "apiKey"
                            }
                        },
                        "required": [
                            "type"
                        ]
                    },
                    "then": {
                        "properties": {
                            "name": {
                                "type": "string"
                            },
                            "in": {
                                "enum": [
                                    "query",
                                    "header",
                                    "cookie"
                                ]
                            }
                        },
                        "required": [
                            "name",
                            "in"
                        ]
                    }
                },
                "type-http": {
                    "if": {
                        "properties": {
                            "type": {
                                "const": "http"
                            }
                        },
                        "required": [
                            "type"
                        ]
                    },
                    "then": {
                        "properties": {
                            "scheme": {
                                "type": "string"
                            }
                        },
                        "required": [
                            "scheme"
                        ]
                    }
                },
                "type-http-bearer": {
                    "if": {
                        "properties": {
                            "type": {
                                "const": "http"
                            },
                            "scheme": {
                                "type": "string",
                                "pattern": "^[Bb][Ee][Aa][Rr][Ee][Rr]$"
                            }
                        },
                        "required": [
                            "type",
                            "scheme"
                        ]
                    },
                    "then": {
                        "properties": {
                            "bearerFormat": {
                                "type": "string"
                            }
                        }
                    }
                },
                "type-oauth2": {
                    "if": {
                        "properties": {
                            "type": {
                                "const": "oauth2"
                            }
                        },
                        "required": [
                            "type"
                        ]
                    },
                    "then": {
                        "properties": {
                            "flows": {
                                "$ref": "#/$defs/oauth-flows"
                            }
                        },
                        "required": [
                            "flows"
                        ]
                    }
                },
                "type-oidc": {
                    "if": {
                        "properties": {
                            "type": {
                                "const": "openIdConnect"
                            }
                        },
                        "required": [
                            "type"
                        ]
                    },
                    "then": {
                        "properties": {
                            "openIdConnectUrl": {
                                "type": "string",
                                "format": "uri-reference"
                            }
                        },
                        "required": [
                            "openIdConnectUrl"
                        ]
                    }
                }
            }
        },
        "security-scheme-or-reference": {
            "if": {
                "type": "object",
                "required": [
                    "$ref"
                ]
            },
            "then": {
                "$ref": "#/$defs/reference"
            },
            "else": {
                "$ref": "#/$defs/security-scheme"
            }
        },
        "oauth-flows": {
            "type": "object",
            "properties": {
                "implicit": {
                    "$ref": "#/$defs/oauth-flows/$defs/implicit"
                },
                "password": {
                    "$ref": "#/$defs/oauth-flows/$defs/password"
                },
                "clientCredentials": {
                    "$ref": "#/$defs/oauth-flows/$defs/client-credentials"
                },
                "authorizationCode": {
                    "$ref": "#/$defs/oauth-flows/$defs/authorization-code"
                }
            },
            "$ref": "#/$defs/specification-extensions",
            "unevaluatedProperties": false,
            "$defs": {
                "implicit": {
                    "type": "object",
                    "properties": {
                        "authorizationUrl": {
                            "type": "string",
                            "format": "uri-reference"
                        },
                        "refreshUrl": {
                            "type": "string",
                            "format": "uri-reference"
                        },
                        "scopes": {
                            "$ref": "#/$defs/map-of-strings"
                        }
                    },
                    "required": [
                        "authorizationUrl",
                        "scopes"
                    ],
                    "$ref": "#/$defs/specification-extensions",
                    "unevaluatedProperties": false
                },
                "password": {
                    "type": "object",
                    "properties": {
                        "tokenUrl": {
                            "type": "string",
                            "format": "uri-reference"
                        },
                        "refreshUrl": {
                            "type": "string",
                            "format": "uri-reference"
                        },
                        "scopes": {
                            "$ref": "#/$defs/map-of-strings"
                        }
                    },
                    "required": [
                        "tokenUrl",
                        "scopes"
                    ],
                    "$ref": "#/$defs/specification-extensions",
                    "unevaluatedProperties": false
                },
                "client-credentials": {
                    "type": "object",
                    "properties": {
                        "tokenUrl": {
                            "type": "string",
                            "format": "uri-reference"
                        },
                        "refreshUrl": {
                            "type": "string",
                            "format": "uri-reference"
                        },
                        "scopes": {
                            "$ref": "#/$defs/map-of-strings"
                        }
                    },
                    "required": [
                        "tokenUrl",
                        "scopes"
                    ],
                    "$ref": "#/$defs/specification-extensions",
                    "unevaluatedProperties": false
                },
                "authorization-code": {
                    "type": "object",
                    "properties": {
                        "authorizationUrl": {
                            "type": "string",
                            "format": "uri-reference"
                        },
                        "tokenUrl": {
                            "type": "string",
                            "format": "uri-reference"
                        },
                        "refreshUrl": {
                            "type": "string",
                            "format": "uri-reference"
                        },
                        "scopes": {
                            "$ref": "#/$defs/map-of-strings"
                        }
                    },
                    "required": [
                        "authorizationUrl",
                        "tokenUrl",
                        "scopes"
                    ],
                    "$ref": "#/$defs/specification-extensions",
                    "unevaluatedProperties": false
                }
            }
        },
        "security-requirement": {
            "$comment": "https://spec.openapis.org/oas/v3.1.0#security-requirement-object",
            "type": "object",
            "additionalProperties": {
                "type": "array",
                "items": {
                    "type": "string"
                }
            }
        },
        "specification-extensions": {
            "$comment": "https://spec.openapis.org/oas/v3.1.0#specification-extensions",
            "patternProperties": {
                "^x-": true
            }
        },
        "examples": {
            "properties": {
                "example": true,
                "examples": {
                    "type": "object",
                    "additionalProperties": {
                        "$ref": "#/$defs/example-or-reference"
                    }
                }
            }
        },
        "map-of-strings": {
            "type": "object",
            "additionalProperties": {
                "type": "string"
            }
        }
    }
};
;
 //# sourceMappingURL=schema.js.map
}),
"[project]/node_modules/.pnpm/@scalar+openapi-parser@0.18.3/node_modules/@scalar/openapi-parser/dist/configuration/index.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ERRORS",
    ()=>ERRORS,
    "OpenApiSpecifications",
    ()=>OpenApiSpecifications,
    "OpenApiVersions",
    ()=>OpenApiVersions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$18$2e$3$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$schemas$2f$v2$2e$0$2f$schema$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@scalar+openapi-parser@0.18.3/node_modules/@scalar/openapi-parser/dist/schemas/v2.0/schema.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$18$2e$3$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$schemas$2f$v3$2e$0$2f$schema$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@scalar+openapi-parser@0.18.3/node_modules/@scalar/openapi-parser/dist/schemas/v3.0/schema.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$18$2e$3$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$schemas$2f$v3$2e$1$2f$schema$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@scalar+openapi-parser@0.18.3/node_modules/@scalar/openapi-parser/dist/schemas/v3.1/schema.js [app-rsc] (ecmascript)");
;
;
;
const OpenApiSpecifications = {
    "2.0": __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$18$2e$3$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$schemas$2f$v2$2e$0$2f$schema$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
    "3.0": __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$18$2e$3$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$schemas$2f$v3$2e$0$2f$schema$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
    "3.1": __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$18$2e$3$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$schemas$2f$v3$2e$1$2f$schema$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]
};
const OpenApiVersions = Object.keys(OpenApiSpecifications);
const ERRORS = {
    EMPTY_OR_INVALID: "Can't find JSON, YAML or filename in data.",
    // URI_MUST_BE_STRING: 'uri parameter or $id attribute must be a string',
    OPENAPI_VERSION_NOT_SUPPORTED: "Can't find supported Swagger/OpenAPI version in the provided document, version must be a string.",
    INVALID_REFERENCE: "Can't resolve reference: %s",
    EXTERNAL_REFERENCE_NOT_FOUND: "Can't resolve external reference: %s",
    FILE_DOES_NOT_EXIST: "File does not exist: %s",
    NO_CONTENT: "No content found"
};
;
 //# sourceMappingURL=index.js.map
}),
"[project]/node_modules/.pnpm/@scalar+openapi-parser@0.18.3/node_modules/@scalar/openapi-parser/dist/utils/details.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "details",
    ()=>details
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$18$2e$3$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$configuration$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@scalar+openapi-parser@0.18.3/node_modules/@scalar/openapi-parser/dist/configuration/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$18$2e$3$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$utils$2f$is$2d$object$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@scalar+openapi-parser@0.18.3/node_modules/@scalar/openapi-parser/dist/utils/is-object.js [app-rsc] (ecmascript)");
;
;
function details(specification) {
    if (specification === null) {
        return {
            version: void 0,
            specificationType: void 0,
            specificationVersion: void 0
        };
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$18$2e$3$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$utils$2f$is$2d$object$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isObject"])(specification)) {
        for (const version of new Set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$18$2e$3$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$configuration$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["OpenApiVersions"])){
            const specificationType = version === "2.0" ? "swagger" : "openapi";
            const value = specification[specificationType];
            if (typeof value === "string" && value.startsWith(version)) {
                return {
                    version,
                    specificationType,
                    specificationVersion: value
                };
            }
        }
    }
    return {
        version: void 0,
        specificationType: void 0,
        specificationVersion: void 0
    };
}
;
 //# sourceMappingURL=details.js.map
}),
"[project]/node_modules/.pnpm/@scalar+openapi-parser@0.18.3/node_modules/@scalar/openapi-parser/dist/utils/get-entrypoint.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getEntrypoint",
    ()=>getEntrypoint
]);
function getEntrypoint(filesystem) {
    return filesystem?.find((file)=>file.isEntrypoint);
}
;
 //# sourceMappingURL=get-entrypoint.js.map
}),
"[project]/node_modules/.pnpm/@scalar+openapi-parser@0.18.3/node_modules/@scalar/openapi-parser/dist/utils/traverse.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "traverse",
    ()=>traverse
]);
function traverse(content, transform, path = []) {
    const result = {};
    for (const [key, value] of Object.entries(content)){
        const currentPath = [
            ...path,
            key
        ];
        if (Array.isArray(value)) {
            result[key] = value.map((item, index)=>{
                if (typeof item === "object" && !Array.isArray(item) && item !== null) {
                    return traverse(item, transform, [
                        ...currentPath,
                        index.toString()
                    ]);
                }
                return item;
            });
            continue;
        }
        if (typeof value === "object" && value !== null) {
            result[key] = traverse(value, transform, currentPath);
            continue;
        }
        result[key] = value;
    }
    return transform(result, path);
}
;
 //# sourceMappingURL=traverse.js.map
}),
"[project]/node_modules/.pnpm/@scalar+openapi-parser@0.18.3/node_modules/@scalar/openapi-parser/dist/utils/get-list-of-references.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getListOfReferences",
    ()=>getListOfReferences
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$18$2e$3$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$utils$2f$traverse$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@scalar+openapi-parser@0.18.3/node_modules/@scalar/openapi-parser/dist/utils/traverse.js [app-rsc] (ecmascript)");
;
function getListOfReferences(specification) {
    const references = [];
    if (!specification || typeof specification !== "object") {
        return references;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$18$2e$3$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$utils$2f$traverse$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["traverse"])(specification, (value)=>{
        if (value.$ref && typeof value.$ref === "string" && !value.$ref.startsWith("#")) {
            references.push(value.$ref.split("#")[0]);
        }
        return value;
    });
    return [
        ...new Set(references)
    ];
}
;
 //# sourceMappingURL=get-list-of-references.js.map
}),
"[project]/node_modules/.pnpm/@scalar+openapi-parser@0.18.3/node_modules/@scalar/openapi-parser/dist/utils/is-filesystem.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isFilesystem",
    ()=>isFilesystem
]);
function isFilesystem(value) {
    return typeof value !== "undefined" && Array.isArray(value) && value.length > 0 && value.some((file)=>file.isEntrypoint === true);
}
;
 //# sourceMappingURL=is-filesystem.js.map
}),
"[project]/node_modules/.pnpm/@scalar+openapi-parser@0.18.3/node_modules/@scalar/openapi-parser/dist/utils/normalize.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "normalize",
    ()=>normalize
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yaml$40$2$2e$8$2e$0$2f$node_modules$2f$yaml$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/yaml@2.8.0/node_modules/yaml/dist/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$18$2e$3$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$utils$2f$is$2d$filesystem$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@scalar+openapi-parser@0.18.3/node_modules/@scalar/openapi-parser/dist/utils/is-filesystem.js [app-rsc] (ecmascript)");
;
;
function normalize(content) {
    if (content === null) {
        return void 0;
    }
    if (typeof content === "string") {
        if (content.trim() === "") {
            return void 0;
        }
        try {
            return JSON.parse(content);
        } catch (_error) {
            const hasColon = /^[^:]+:/.test(content);
            const isJson = content.slice(0, 50).trimStart().startsWith("{");
            if (!hasColon || isJson) {
                return void 0;
            }
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yaml$40$2$2e$8$2e$0$2f$node_modules$2f$yaml$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parse"])(content, {
                maxAliasCount: 1e4
            });
        }
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$18$2e$3$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$utils$2f$is$2d$filesystem$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isFilesystem"])(content)) {
        return content;
    }
    return content;
}
;
 //# sourceMappingURL=normalize.js.map
}),
"[project]/node_modules/.pnpm/@scalar+openapi-parser@0.18.3/node_modules/@scalar/openapi-parser/dist/utils/make-filesystem.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "makeFilesystem",
    ()=>makeFilesystem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$18$2e$3$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$utils$2f$get$2d$list$2d$of$2d$references$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@scalar+openapi-parser@0.18.3/node_modules/@scalar/openapi-parser/dist/utils/get-list-of-references.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$18$2e$3$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$utils$2f$is$2d$filesystem$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@scalar+openapi-parser@0.18.3/node_modules/@scalar/openapi-parser/dist/utils/is-filesystem.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$18$2e$3$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$utils$2f$normalize$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@scalar+openapi-parser@0.18.3/node_modules/@scalar/openapi-parser/dist/utils/normalize.js [app-rsc] (ecmascript)");
;
;
;
function makeFilesystem(value, overwrites = {}) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$18$2e$3$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$utils$2f$is$2d$filesystem$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isFilesystem"])(value)) {
        return value;
    }
    const specification = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$18$2e$3$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$utils$2f$normalize$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["normalize"])(value);
    return [
        {
            isEntrypoint: true,
            specification,
            filename: null,
            dir: "./",
            references: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$18$2e$3$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$utils$2f$get$2d$list$2d$of$2d$references$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getListOfReferences"])(specification),
            ...overwrites
        }
    ];
}
;
 //# sourceMappingURL=make-filesystem.js.map
}),
"[project]/node_modules/.pnpm/@scalar+openapi-parser@0.18.3/node_modules/@scalar/openapi-parser/dist/utils/resolve-references.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "resolveReferences",
    ()=>resolveReferences
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$18$2e$3$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$configuration$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@scalar+openapi-parser@0.18.3/node_modules/@scalar/openapi-parser/dist/configuration/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$18$2e$3$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$utils$2f$get$2d$entrypoint$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@scalar+openapi-parser@0.18.3/node_modules/@scalar/openapi-parser/dist/utils/get-entrypoint.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$18$2e$3$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$utils$2f$get$2d$segments$2d$from$2d$path$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@scalar+openapi-parser@0.18.3/node_modules/@scalar/openapi-parser/dist/utils/get-segments-from-path.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$18$2e$3$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$utils$2f$is$2d$object$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@scalar+openapi-parser@0.18.3/node_modules/@scalar/openapi-parser/dist/utils/is-object.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$18$2e$3$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$utils$2f$make$2d$filesystem$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@scalar+openapi-parser@0.18.3/node_modules/@scalar/openapi-parser/dist/utils/make-filesystem.js [app-rsc] (ecmascript)");
;
;
;
;
;
function resolveReferences(input, options, file, errors = []) {
    const clonedInput = structuredClone(input);
    const filesystem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$18$2e$3$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$utils$2f$make$2d$filesystem$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["makeFilesystem"])(clonedInput);
    const entrypoint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$18$2e$3$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$utils$2f$get$2d$entrypoint$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getEntrypoint"])(filesystem);
    const finalInput = file?.specification ?? entrypoint.specification;
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$18$2e$3$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$utils$2f$is$2d$object$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isObject"])(finalInput)) {
        if (options?.throwOnError) {
            throw new Error(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$18$2e$3$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$configuration$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ERRORS"].NO_CONTENT);
        }
        return {
            valid: false,
            errors,
            schema: finalInput
        };
    }
    dereference(finalInput, filesystem, file ?? entrypoint, /* @__PURE__ */ new WeakSet(), errors, options);
    errors = errors.filter((error, index, self)=>index === self.findIndex((t)=>t.message === error.message && t.code === error.code));
    return {
        valid: errors.length === 0,
        errors,
        schema: finalInput
    };
}
function dereference(schema, filesystem, entrypoint, resolvedSchemas, errors, options) {
    if (schema === null || resolvedSchemas.has(schema)) {
        return;
    }
    resolvedSchemas.add(schema);
    function resolveExternal(externalFile) {
        dereference(externalFile.specification, filesystem, externalFile, resolvedSchemas, errors, options);
        return externalFile;
    }
    while(schema.$ref !== void 0){
        const resolved = resolveUri(schema.$ref, options, entrypoint, filesystem, resolveExternal, errors);
        if (typeof resolved !== "object" || resolved === null) {
            break;
        }
        const dereferencedRef = schema.$ref;
        delete schema.$ref;
        for (const key of Object.keys(resolved)){
            if (schema[key] === void 0) {
                schema[key] = resolved[key];
            }
        }
        if (dereferencedRef) {
            options?.onDereference?.({
                schema,
                ref: dereferencedRef
            });
        }
    }
    for (const value of Object.values(schema)){
        if (typeof value === "object" && value !== null) {
            dereference(value, filesystem, entrypoint, resolvedSchemas, errors, options);
        }
    }
}
function resolveUri(uri, options, file, filesystem, resolve, errors) {
    if (typeof uri !== "string") {
        if (options?.throwOnError) {
            throw new Error(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$18$2e$3$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$configuration$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ERRORS"].INVALID_REFERENCE.replace("%s", uri));
        }
        errors.push({
            code: "INVALID_REFERENCE",
            message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$18$2e$3$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$configuration$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ERRORS"].INVALID_REFERENCE.replace("%s", uri)
        });
        return void 0;
    }
    const [prefix, path] = uri.split("#", 2);
    const isDifferentFile = prefix !== file.filename;
    if (prefix && isDifferentFile) {
        const externalReference = filesystem.find((entry)=>{
            return entry.filename === prefix;
        });
        if (!externalReference) {
            if (options?.throwOnError) {
                throw new Error(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$18$2e$3$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$configuration$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ERRORS"].EXTERNAL_REFERENCE_NOT_FOUND.replace("%s", prefix));
            }
            errors.push({
                code: "EXTERNAL_REFERENCE_NOT_FOUND",
                message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$18$2e$3$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$configuration$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ERRORS"].EXTERNAL_REFERENCE_NOT_FOUND.replace("%s", prefix)
            });
            return void 0;
        }
        if (path === void 0) {
            return externalReference.specification;
        }
        return resolveUri(`#${path}`, options, resolve(externalReference), filesystem, resolve, errors);
    }
    const segments = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$18$2e$3$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$utils$2f$get$2d$segments$2d$from$2d$path$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSegmentsFromPath"])(path);
    try {
        return segments.reduce((acc, key)=>{
            return acc[key];
        }, file.specification);
    } catch (_error) {
        if (options?.throwOnError) {
            throw new Error(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$18$2e$3$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$configuration$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ERRORS"].INVALID_REFERENCE.replace("%s", uri));
        }
        errors.push({
            code: "INVALID_REFERENCE",
            message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$18$2e$3$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$configuration$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ERRORS"].INVALID_REFERENCE.replace("%s", uri)
        });
    }
    return void 0;
}
;
 //# sourceMappingURL=resolve-references.js.map
}),
"[project]/node_modules/.pnpm/@scalar+openapi-parser@0.18.3/node_modules/@scalar/openapi-parser/dist/utils/dereference.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "dereference",
    ()=>dereference
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$18$2e$3$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$utils$2f$details$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@scalar+openapi-parser@0.18.3/node_modules/@scalar/openapi-parser/dist/utils/details.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$18$2e$3$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$utils$2f$get$2d$entrypoint$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@scalar+openapi-parser@0.18.3/node_modules/@scalar/openapi-parser/dist/utils/get-entrypoint.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$18$2e$3$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$utils$2f$make$2d$filesystem$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@scalar+openapi-parser@0.18.3/node_modules/@scalar/openapi-parser/dist/utils/make-filesystem.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$18$2e$3$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$utils$2f$resolve$2d$references$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@scalar+openapi-parser@0.18.3/node_modules/@scalar/openapi-parser/dist/utils/resolve-references.js [app-rsc] (ecmascript)");
;
;
;
;
async function dereference(value, options) {
    const filesystem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$18$2e$3$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$utils$2f$make$2d$filesystem$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["makeFilesystem"])(value);
    const entrypoint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$18$2e$3$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$utils$2f$get$2d$entrypoint$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getEntrypoint"])(filesystem);
    const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$18$2e$3$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$utils$2f$resolve$2d$references$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resolveReferences"])(filesystem, options);
    return {
        specification: entrypoint.specification,
        errors: result.errors,
        schema: result.schema,
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$18$2e$3$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$utils$2f$details$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["details"])(entrypoint.specification)
    };
}
;
 //# sourceMappingURL=dereference.js.map
}),
"[project]/node_modules/.pnpm/@scalar+openapi-parser@0.18.3/node_modules/@scalar/openapi-parser/dist/utils/upgrade-from-three-to-three-one.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isSchemaPath",
    ()=>isSchemaPath,
    "upgradeFromThreeToThreeOne",
    ()=>upgradeFromThreeToThreeOne
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$18$2e$3$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$utils$2f$traverse$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@scalar+openapi-parser@0.18.3/node_modules/@scalar/openapi-parser/dist/utils/traverse.js [app-rsc] (ecmascript)");
;
const SCHEMA_SEGMENTS = /* @__PURE__ */ new Set([
    "properties",
    "items",
    "allOf",
    "anyOf",
    "oneOf",
    "not",
    "additionalProperties",
    "schema"
]);
function isSchemaPath(path) {
    if (path.some((segment)=>SCHEMA_SEGMENTS.has(segment))) {
        return true;
    }
    if (path.some((segment)=>segment.endsWith("Schema"))) {
        return true;
    }
    if (path.length >= 2 && path[0] === "components" && path[1] === "schemas") {
        return true;
    }
    return false;
}
function upgradeFromThreeToThreeOne(originalContent) {
    let content = originalContent;
    if (content === null || typeof content.openapi !== "string" || !content.openapi.startsWith("3.0")) {
        return content;
    }
    content.openapi = "3.1.1";
    content = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$18$2e$3$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$utils$2f$traverse$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["traverse"])(content, applyChangesToDocument);
    return content;
}
const applyChangesToDocument = (schema, path)=>{
    if (schema.type !== void 0 && schema.nullable === true) {
        schema.type = [
            schema.type,
            "null"
        ];
        delete schema.nullable;
    }
    if (schema.exclusiveMinimum === true) {
        schema.exclusiveMinimum = schema.minimum;
        delete schema.minimum;
    } else if (schema.exclusiveMinimum === false) {
        delete schema.exclusiveMinimum;
    }
    if (schema.exclusiveMaximum === true) {
        schema.exclusiveMaximum = schema.maximum;
        delete schema.maximum;
    } else if (schema.exclusiveMaximum === false) {
        delete schema.exclusiveMaximum;
    }
    if (schema.example !== void 0) {
        if (isSchemaPath(path)) {
            schema.examples = [
                schema.example
            ];
        } else {
            schema.examples = {
                default: {
                    value: schema.example
                }
            };
        }
        delete schema.example;
    }
    if (schema.type === "object" && schema.properties !== void 0) {
        const parentPath = path.slice(0, -1);
        const isMultipart = parentPath.some((segment, index)=>{
            return segment === "content" && path[index + 1] === "multipart/form-data";
        });
        if (isMultipart) {
            for (const value of Object.values(schema.properties)){
                if (typeof value === "object" && value !== null && "type" in value && "format" in value && value.type === "string" && value.format === "binary") {
                    ;
                    value.contentMediaType = "application/octet-stream";
                    delete value.format;
                }
            }
        }
    }
    if (path.includes("content") && path.includes("application/octet-stream")) {
        return {};
    }
    if (schema.type === "string") {
        if (schema.format === "binary") {
            return {
                type: "string",
                contentMediaType: "application/octet-stream"
            };
        }
        if (schema.format === "base64") {
            return {
                type: "string",
                contentEncoding: "base64"
            };
        }
        if (schema.format === "byte") {
            const parentPath = path.slice(0, -1);
            const contentMediaType = parentPath.find((_, index)=>path[index - 1] === "content");
            return {
                type: "string",
                contentEncoding: "base64",
                contentMediaType
            };
        }
    }
    if (schema["x-webhooks"] !== void 0) {
        schema.webhooks = schema["x-webhooks"];
        delete schema["x-webhooks"];
    }
    return schema;
};
;
 //# sourceMappingURL=upgrade-from-three-to-three-one.js.map
}),
"[project]/node_modules/.pnpm/@scalar+openapi-parser@0.18.3/node_modules/@scalar/openapi-parser/dist/utils/upgrade-from-two-to-three.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "upgradeFromTwoToThree",
    ()=>upgradeFromTwoToThree
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$18$2e$3$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$utils$2f$traverse$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@scalar+openapi-parser@0.18.3/node_modules/@scalar/openapi-parser/dist/utils/traverse.js [app-rsc] (ecmascript)");
;
const upgradeFlow = (flow)=>{
    switch(flow){
        case "application":
            return "clientCredentials";
        case "accessCode":
            return "authorizationCode";
        case "implicit":
            return "implicit";
        case "password":
            return "password";
        default:
            return flow;
    }
};
function upgradeFromTwoToThree(originalSpecification) {
    let specification = originalSpecification;
    if (specification !== null && typeof specification === "object" && typeof specification.swagger === "string" && specification.swagger?.startsWith("2.0")) {
        specification.openapi = "3.0.4";
        delete specification.swagger;
    } else {
        return specification;
    }
    if (specification.host) {
        const schemes = Array.isArray(specification.schemes) && specification.schemes?.length ? specification.schemes : [
            "http"
        ];
        specification.servers = schemes.map((scheme)=>({
                url: `${scheme}://${specification.host}${specification.basePath ?? ""}`
            }));
        delete specification.basePath;
        delete specification.schemes;
        delete specification.host;
    } else if (specification.basePath) {
        specification.servers = [
            {
                url: specification.basePath
            }
        ];
        delete specification.basePath;
    }
    if (specification.definitions) {
        specification.components = Object.assign({}, specification.components, {
            schemas: specification.definitions
        });
        delete specification.definitions;
        specification = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$18$2e$3$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$utils$2f$traverse$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["traverse"])(specification, (schema)=>{
            if (typeof schema.$ref === "string" && schema.$ref.startsWith("#/definitions/")) {
                schema.$ref = schema.$ref.replace(/^#\/definitions\//, "#/components/schemas/");
            }
            return schema;
        });
    }
    specification = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$18$2e$3$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$utils$2f$traverse$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["traverse"])(specification, (schema)=>{
        if (schema.type === "file") {
            schema.type = "string";
            schema.format = "binary";
        }
        return schema;
    });
    if (typeof specification.paths === "object") {
        for(const path in specification.paths){
            if (Object.hasOwn(specification.paths, path)) {
                const pathItem = specification.paths[path];
                for(const method in pathItem){
                    if (Object.hasOwn(pathItem, method)) {
                        const operationItem = pathItem[method];
                        if (operationItem.parameters) {
                            const bodyParameter = structuredClone(operationItem.parameters.find((parameter)=>parameter.in === "body") ?? {});
                            if (bodyParameter && Object.keys(bodyParameter).length) {
                                delete bodyParameter.name;
                                delete bodyParameter.in;
                                const consumes = specification.consumes ?? operationItem.consumes ?? [
                                    "application/json"
                                ];
                                if (typeof operationItem.requestBody !== "object") {
                                    operationItem.requestBody = {};
                                }
                                if (typeof operationItem.requestBody.content !== "object") {
                                    operationItem.requestBody.content = {};
                                }
                                const { schema, ...requestBody } = bodyParameter;
                                operationItem.requestBody = {
                                    ...operationItem.requestBody,
                                    ...requestBody
                                };
                                for (const type of consumes){
                                    operationItem.requestBody.content[type] = {
                                        schema
                                    };
                                }
                            }
                            operationItem.parameters = operationItem.parameters.filter((parameter)=>parameter.in !== "body");
                            delete operationItem.consumes;
                            const formDataParameters = operationItem.parameters.filter((parameter)=>parameter.in === "formData");
                            if (formDataParameters.length > 0) {
                                if (typeof operationItem.requestBody !== "object") {
                                    operationItem.requestBody = {};
                                }
                                if (typeof operationItem.requestBody.content !== "object") {
                                    operationItem.requestBody.content = {};
                                }
                                operationItem.requestBody.content["application/x-www-form-urlencoded"] = {
                                    schema: {
                                        type: "object",
                                        properties: {},
                                        required: []
                                    }
                                };
                                for (const param of formDataParameters){
                                    operationItem.requestBody.content["application/x-www-form-urlencoded"].schema.properties[param.name] = {
                                        type: param.type,
                                        description: param.description
                                    };
                                    if (param.required) {
                                        operationItem.requestBody.content["application/x-www-form-urlencoded"].schema.required.push(param.name);
                                    }
                                }
                                operationItem.parameters = operationItem.parameters.filter((parameter)=>parameter.in !== "formData");
                            }
                            operationItem.parameters = operationItem.parameters.map((parameter)=>transformParameterObject(parameter));
                        }
                        if (operationItem.responses) {
                            for(const response in operationItem.responses){
                                if (Object.hasOwn(operationItem.responses, response)) {
                                    const responseItem = operationItem.responses[response];
                                    if (responseItem.headers) {
                                        responseItem.headers = Object.entries(responseItem.headers).reduce((acc, [name, header])=>{
                                            return {
                                                [name]: transformParameterObject(header),
                                                ...acc
                                            };
                                        }, {});
                                    }
                                    if (responseItem.schema) {
                                        const produces = specification.produces ?? operationItem.produces ?? [
                                            "application/json"
                                        ];
                                        if (typeof responseItem.content !== "object") {
                                            responseItem.content = {};
                                        }
                                        for (const type of produces){
                                            responseItem.content[type] = {
                                                schema: responseItem.schema
                                            };
                                        }
                                        delete responseItem.schema;
                                    }
                                }
                            }
                        }
                        delete operationItem.produces;
                        if (operationItem.parameters?.length === 0) {
                            delete operationItem.parameters;
                        }
                    }
                }
            }
        }
    }
    if (specification.securityDefinitions) {
        if (typeof specification.components !== "object") {
            specification.components = {};
        }
        specification.components = specification.components;
        Object.assign(specification.components, {
            securitySchemes: {}
        });
        for (const [key, securityScheme] of Object.entries(specification.securityDefinitions)){
            if (typeof securityScheme === "object") {
                if ("type" in securityScheme && securityScheme.type === "oauth2") {
                    const { flow, authorizationUrl, tokenUrl, scopes } = securityScheme;
                    Object.assign(specification.components.securitySchemes, {
                        [key]: {
                            type: "oauth2",
                            flows: {
                                [upgradeFlow(flow)]: Object.assign({}, authorizationUrl && {
                                    authorizationUrl
                                }, tokenUrl && {
                                    tokenUrl
                                }, scopes && {
                                    scopes
                                })
                            }
                        }
                    });
                } else if ("type" in securityScheme && securityScheme.type === "basic") {
                    Object.assign(specification.components.securitySchemes, {
                        [key]: {
                            type: "http",
                            scheme: "basic"
                        }
                    });
                } else {
                    Object.assign(specification.components.securitySchemes, {
                        [key]: securityScheme
                    });
                }
            }
        }
        delete specification.securityDefinitions;
    }
    return specification;
}
function transformItemsObject(obj) {
    const schemaProperties = [
        "type",
        "format",
        "items",
        "maximum",
        "exclusiveMaximum",
        "minimum",
        "exclusiveMinimum",
        "maxLength",
        "minLength",
        "pattern",
        "maxItems",
        "minItems",
        "uniqueItems",
        "enum",
        "multipleOf"
    ];
    return schemaProperties.reduce((acc, property)=>{
        if (Object.hasOwn(obj, property)) {
            acc[property] = obj[property];
            delete obj[property];
        }
        return acc;
    }, {});
}
function transformParameterObject(parameter) {
    const serializationStyle = getParameterSerializationStyle(parameter);
    const schema = transformItemsObject(parameter);
    delete parameter.collectionFormat;
    delete parameter.default;
    return {
        schema,
        ...serializationStyle,
        ...parameter
    };
}
const querySerialization = {
    ssv: {
        style: "spaceDelimited",
        explode: false
    },
    pipes: {
        style: "pipeDelimited",
        explode: false
    },
    multi: {
        style: "form",
        explode: true
    },
    csv: {
        style: "form",
        explode: false
    },
    tsv: {}
};
const pathAndHeaderSerialization = {
    ssv: {},
    pipes: {},
    multi: {},
    csv: {
        style: "simple",
        explode: false
    },
    tsv: {}
};
const serializationStyles = {
    header: pathAndHeaderSerialization,
    query: querySerialization,
    path: pathAndHeaderSerialization
};
function getParameterSerializationStyle(parameter) {
    if (parameter.type !== "array" || !(parameter.in === "query" || parameter.in === "path" || parameter.in === "header")) {
        return {};
    }
    const collectionFormat = parameter.collectionFormat ?? "csv";
    return serializationStyles[parameter.in][collectionFormat];
}
;
 //# sourceMappingURL=upgrade-from-two-to-three.js.map
}),
"[project]/node_modules/.pnpm/@scalar+openapi-parser@0.18.3/node_modules/@scalar/openapi-parser/dist/utils/upgrade.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "upgrade",
    ()=>upgrade
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$18$2e$3$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$utils$2f$get$2d$entrypoint$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@scalar+openapi-parser@0.18.3/node_modules/@scalar/openapi-parser/dist/utils/get-entrypoint.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$18$2e$3$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$utils$2f$is$2d$filesystem$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@scalar+openapi-parser@0.18.3/node_modules/@scalar/openapi-parser/dist/utils/is-filesystem.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$18$2e$3$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$utils$2f$normalize$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@scalar+openapi-parser@0.18.3/node_modules/@scalar/openapi-parser/dist/utils/normalize.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$18$2e$3$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$utils$2f$upgrade$2d$from$2d$three$2d$to$2d$three$2d$one$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@scalar+openapi-parser@0.18.3/node_modules/@scalar/openapi-parser/dist/utils/upgrade-from-three-to-three-one.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$18$2e$3$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$utils$2f$upgrade$2d$from$2d$two$2d$to$2d$three$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@scalar+openapi-parser@0.18.3/node_modules/@scalar/openapi-parser/dist/utils/upgrade-from-two-to-three.js [app-rsc] (ecmascript)");
;
;
;
;
;
const upgraders = [
    // Swagger 2.0 -> OpenAPI 3.0
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$18$2e$3$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$utils$2f$upgrade$2d$from$2d$two$2d$to$2d$three$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["upgradeFromTwoToThree"],
    // OpenAPI 3.0 -> OpenAPI 3.1
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$18$2e$3$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$utils$2f$upgrade$2d$from$2d$three$2d$to$2d$three$2d$one$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["upgradeFromThreeToThreeOne"]
];
function upgrade(value) {
    if (!value) {
        return {
            specification: null,
            version: "3.1"
        };
    }
    const result = upgraders.reduce((currentSpecification, upgrader)=>upgrader(currentSpecification), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$18$2e$3$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$utils$2f$is$2d$filesystem$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isFilesystem"])(value) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$18$2e$3$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$utils$2f$get$2d$entrypoint$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getEntrypoint"])(value).specification : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$18$2e$3$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$utils$2f$normalize$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["normalize"])(value));
    return {
        specification: result,
        // TODO: Make dynamic
        version: "3.1"
    };
}
;
 //# sourceMappingURL=upgrade.js.map
}),
"[project]/node_modules/.pnpm/@scalar+openapi-parser@0.18.3/node_modules/@scalar/openapi-parser/dist/utils/bundle/create-limiter.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createLimiter",
    ()=>createLimiter
]);
function createLimiter(maxConcurrent) {
    let activeCount = 0;
    const queue = [];
    const next = ()=>{
        if (queue.length === 0 || activeCount >= maxConcurrent) {
            return;
        }
        const resolve = queue.shift();
        if (resolve) {
            resolve();
        }
    };
    const run = async (fn)=>{
        if (activeCount >= maxConcurrent) {
            await new Promise((resolve)=>queue.push(resolve));
        }
        activeCount++;
        try {
            const result = await fn();
            return result;
        } finally{
            activeCount--;
            next();
        }
    };
    return run;
}
;
 //# sourceMappingURL=create-limiter.js.map
}),
"[project]/node_modules/.pnpm/@scalar+openapi-parser@0.18.3/node_modules/@scalar/openapi-parser/dist/utils/bundle/plugins/fetch-urls/index.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fetchUrl",
    ()=>fetchUrl,
    "fetchUrls",
    ()=>fetchUrls
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$18$2e$3$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$utils$2f$normalize$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@scalar+openapi-parser@0.18.3/node_modules/@scalar/openapi-parser/dist/utils/normalize.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$18$2e$3$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$utils$2f$bundle$2f$bundle$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@scalar+openapi-parser@0.18.3/node_modules/@scalar/openapi-parser/dist/utils/bundle/bundle.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$18$2e$3$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$utils$2f$bundle$2f$create$2d$limiter$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@scalar+openapi-parser@0.18.3/node_modules/@scalar/openapi-parser/dist/utils/bundle/create-limiter.js [app-rsc] (ecmascript)");
;
;
;
const getHost = (url)=>{
    try {
        return new URL(url).host;
    } catch  {
        return null;
    }
};
async function fetchUrl(url, limiter, config) {
    try {
        const host = getHost(url);
        const headers = config?.headers?.find((a)=>a.domains.find((d)=>d === host) !== void 0)?.headers;
        const exec = config?.fetch ?? fetch;
        const result = await limiter(()=>exec(url, {
                headers
            }));
        if (result.ok) {
            const body = await result.text();
            return {
                ok: true,
                data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$18$2e$3$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$utils$2f$normalize$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["normalize"])(body)
            };
        }
        return {
            ok: false
        };
    } catch  {
        return {
            ok: false
        };
    }
}
function fetchUrls(config) {
    const limiter = config?.limit ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$18$2e$3$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$utils$2f$bundle$2f$create$2d$limiter$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createLimiter"])(config.limit) : (fn)=>fn();
    return {
        validate: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$18$2e$3$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$utils$2f$bundle$2f$bundle$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isRemoteUrl"],
        exec: (value)=>fetchUrl(value, limiter, config)
    };
}
;
 //# sourceMappingURL=index.js.map
}),
"[project]/node_modules/.pnpm/@scalar+openapi-parser@0.18.3/node_modules/@scalar/openapi-parser/dist/utils/bundle/plugins/read-files/index.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "readFile",
    ()=>readFile,
    "readFiles",
    ()=>readFiles
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$18$2e$3$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$utils$2f$normalize$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@scalar+openapi-parser@0.18.3/node_modules/@scalar/openapi-parser/dist/utils/normalize.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$18$2e$3$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$utils$2f$bundle$2f$bundle$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@scalar+openapi-parser@0.18.3/node_modules/@scalar/openapi-parser/dist/utils/bundle/bundle.js [app-rsc] (ecmascript)");
;
;
async function readFile(path) {
    const fs = ("TURBOPACK compile-time truthy", 1) ? await __turbopack_context__.A("[externals]/node:fs/promises [external] (node:fs/promises, cjs, async loader)") : "TURBOPACK unreachable";
    if (fs === void 0) {
        throw "Can not use readFiles plugin outside of a node environment";
    }
    try {
        const fileContents = await fs.readFile(path, {
            encoding: "utf-8"
        });
        return {
            ok: true,
            data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$18$2e$3$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$utils$2f$normalize$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["normalize"])(fileContents)
        };
    } catch  {
        return {
            ok: false
        };
    }
}
function readFiles() {
    return {
        validate: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scalar$2b$openapi$2d$parser$40$0$2e$18$2e$3$2f$node_modules$2f40$scalar$2f$openapi$2d$parser$2f$dist$2f$utils$2f$bundle$2f$bundle$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isFilePath"],
        exec: readFile
    };
}
;
 //# sourceMappingURL=index.js.map
}),
];

//# sourceMappingURL=ceabc_%40scalar_openapi-parser_dist_bb9b5713._.js.map