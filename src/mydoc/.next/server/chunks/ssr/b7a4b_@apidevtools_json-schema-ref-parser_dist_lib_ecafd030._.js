module.exports = [
"[project]/node_modules/.pnpm/@apidevtools+json-schema-ref-parser@11.9.3/node_modules/@apidevtools/json-schema-ref-parser/dist/lib/util/convert-path-to-posix.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = convertPathToPosix;
const path_1 = __importDefault(__turbopack_context__.r("[externals]/path [external] (path, cjs)"));
function convertPathToPosix(filePath) {
    const isExtendedLengthPath = filePath.startsWith("\\\\?\\");
    if (isExtendedLengthPath) {
        return filePath;
    }
    return filePath.split(path_1.default?.win32?.sep).join(path_1.default?.posix?.sep ?? "/");
}
}),
"[project]/node_modules/.pnpm/@apidevtools+json-schema-ref-parser@11.9.3/node_modules/@apidevtools/json-schema-ref-parser/dist/lib/util/is-windows.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isWindows = void 0;
const isWindowsConst = /^win/.test(globalThis.process ? globalThis.process.platform : "");
const isWindows = ()=>isWindowsConst;
exports.isWindows = isWindows;
}),
"[project]/node_modules/.pnpm/@apidevtools+json-schema-ref-parser@11.9.3/node_modules/@apidevtools/json-schema-ref-parser/dist/lib/util/url.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __createBinding = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __setModuleDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var __importStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importStar || function() {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function(o) {
            var ar = [];
            for(var k in o)if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) {
            for(var k = ownKeys(mod), i = 0; i < k.length; i++)if (k[i] !== "default") __createBinding(result, mod, k[i]);
        }
        __setModuleDefault(result, mod);
        return result;
    };
}();
var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parse = void 0;
exports.resolve = resolve;
exports.cwd = cwd;
exports.getProtocol = getProtocol;
exports.getExtension = getExtension;
exports.stripQuery = stripQuery;
exports.getHash = getHash;
exports.stripHash = stripHash;
exports.isHttp = isHttp;
exports.isFileSystemPath = isFileSystemPath;
exports.fromFileSystemPath = fromFileSystemPath;
exports.toFileSystemPath = toFileSystemPath;
exports.safePointerToPath = safePointerToPath;
exports.relative = relative;
const convert_path_to_posix_1 = __importDefault(__turbopack_context__.r("[project]/node_modules/.pnpm/@apidevtools+json-schema-ref-parser@11.9.3/node_modules/@apidevtools/json-schema-ref-parser/dist/lib/util/convert-path-to-posix.js [app-rsc] (ecmascript)"));
const path_1 = __importStar(__turbopack_context__.r("[externals]/path [external] (path, cjs)"));
const forwardSlashPattern = /\//g;
const protocolPattern = /^(\w{2,}):\/\//i;
const jsonPointerSlash = /~1/g;
const jsonPointerTilde = /~0/g;
const path_2 = __turbopack_context__.r("[externals]/path [external] (path, cjs)");
const is_windows_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@apidevtools+json-schema-ref-parser@11.9.3/node_modules/@apidevtools/json-schema-ref-parser/dist/lib/util/is-windows.js [app-rsc] (ecmascript)");
// RegExp patterns to URL-encode special characters in local filesystem paths
const urlEncodePatterns = [
    [
        /\?/g,
        "%3F"
    ],
    [
        /#/g,
        "%23"
    ]
];
// RegExp patterns to URL-decode special characters for local filesystem paths
const urlDecodePatterns = [
    /%23/g,
    "#",
    /%24/g,
    "$",
    /%26/g,
    "&",
    /%2C/g,
    ",",
    /%40/g,
    "@"
];
const parse = (u)=>new URL(u);
exports.parse = parse;
/**
 * Returns resolved target URL relative to a base URL in a manner similar to that of a Web browser resolving an anchor tag HREF.
 *
 * @returns
 */ function resolve(from, to) {
    // we use a non-existent URL to check if its a relative URL
    const fromUrl = new URL((0, convert_path_to_posix_1.default)(from), "https://aaa.nonexistanturl.com");
    const resolvedUrl = new URL((0, convert_path_to_posix_1.default)(to), fromUrl);
    const endSpaces = to.match(/(\s*)$/)?.[1] || "";
    if (resolvedUrl.hostname === "aaa.nonexistanturl.com") {
        // `from` is a relative URL.
        const { pathname, search, hash } = resolvedUrl;
        return pathname + search + hash + endSpaces;
    }
    return resolvedUrl.toString() + endSpaces;
}
/**
 * Returns the current working directory (in Node) or the current page URL (in browsers).
 *
 * @returns
 */ function cwd() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const path = process.cwd();
    const lastChar = path.slice(-1);
    if (lastChar === "/" || lastChar === "\\") {
        return path;
    } else {
        return path + "/";
    }
}
/**
 * Returns the protocol of the given URL, or `undefined` if it has no protocol.
 *
 * @param path
 * @returns
 */ function getProtocol(path) {
    const match = protocolPattern.exec(path || "");
    if (match) {
        return match[1].toLowerCase();
    }
    return undefined;
}
/**
 * Returns the lowercased file extension of the given URL,
 * or an empty string if it has no extension.
 *
 * @param path
 * @returns
 */ function getExtension(path) {
    const lastDot = path.lastIndexOf(".");
    if (lastDot >= 0) {
        return stripQuery(path.substr(lastDot).toLowerCase());
    }
    return "";
}
/**
 * Removes the query, if any, from the given path.
 *
 * @param path
 * @returns
 */ function stripQuery(path) {
    const queryIndex = path.indexOf("?");
    if (queryIndex >= 0) {
        path = path.substr(0, queryIndex);
    }
    return path;
}
/**
 * Returns the hash (URL fragment), of the given path.
 * If there is no hash, then the root hash ("#") is returned.
 *
 * @param path
 * @returns
 */ function getHash(path) {
    if (!path) {
        return "#";
    }
    const hashIndex = path.indexOf("#");
    if (hashIndex >= 0) {
        return path.substring(hashIndex);
    }
    return "#";
}
/**
 * Removes the hash (URL fragment), if any, from the given path.
 *
 * @param path
 * @returns
 */ function stripHash(path) {
    if (!path) {
        return "";
    }
    const hashIndex = path.indexOf("#");
    if (hashIndex >= 0) {
        path = path.substring(0, hashIndex);
    }
    return path;
}
/**
 * Determines whether the given path is an HTTP(S) URL.
 *
 * @param path
 * @returns
 */ function isHttp(path) {
    const protocol = getProtocol(path);
    if (protocol === "http" || protocol === "https") {
        return true;
    } else if (protocol === undefined) {
        // There is no protocol.  If we're running in a browser, then assume it's HTTP.
        return "undefined" !== "undefined";
    } else {
        // It's some other protocol, such as "ftp://", "mongodb://", etc.
        return false;
    }
}
/**
 * Determines whether the given path is a filesystem path.
 * This includes "file://" URLs.
 *
 * @param path
 * @returns
 */ function isFileSystemPath(path) {
    // @ts-ignore
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const protocol = getProtocol(path);
    return protocol === undefined || protocol === "file";
}
/**
 * Converts a filesystem path to a properly-encoded URL.
 *
 * This is intended to handle situations where JSON Schema $Ref Parser is called
 * with a filesystem path that contains characters which are not allowed in URLs.
 *
 * @example
 * The following filesystem paths would be converted to the following URLs:
 *
 *    <"!@#$%^&*+=?'>.json              ==>   %3C%22!@%23$%25%5E&*+=%3F\'%3E.json
 *    C:\\My Documents\\File (1).json   ==>   C:/My%20Documents/File%20(1).json
 *    file://Project #42/file.json      ==>   file://Project%20%2342/file.json
 *
 * @param path
 * @returns
 */ function fromFileSystemPath(path) {
    // Step 1: On Windows, replace backslashes with forward slashes,
    // rather than encoding them as "%5C"
    if ((0, is_windows_1.isWindows)()) {
        const projectDir = cwd();
        const upperPath = path.toUpperCase();
        const projectDirPosixPath = (0, convert_path_to_posix_1.default)(projectDir);
        const posixUpper = projectDirPosixPath.toUpperCase();
        const hasProjectDir = upperPath.includes(posixUpper);
        const hasProjectUri = upperPath.includes(posixUpper);
        const isAbsolutePath = path_1.win32?.isAbsolute(path) || path.startsWith("http://") || path.startsWith("https://") || path.startsWith("file://");
        if (!(hasProjectDir || hasProjectUri || isAbsolutePath) && !projectDir.startsWith("http")) {
            path = (0, path_2.join)(projectDir, path);
        }
        path = (0, convert_path_to_posix_1.default)(path);
    }
    // Step 2: `encodeURI` will take care of MOST characters
    path = encodeURI(path);
    // Step 3: Manually encode characters that are not encoded by `encodeURI`.
    // This includes characters such as "#" and "?", which have special meaning in URLs,
    // but are just normal characters in a filesystem path.
    for (const pattern of urlEncodePatterns){
        path = path.replace(pattern[0], pattern[1]);
    }
    return path;
}
/**
 * Converts a URL to a local filesystem path.
 */ function toFileSystemPath(path, keepFileProtocol) {
    // Step 1: `decodeURI` will decode characters such as Cyrillic characters, spaces, etc.
    path = decodeURI(path);
    // Step 2: Manually decode characters that are not decoded by `decodeURI`.
    // This includes characters such as "#" and "?", which have special meaning in URLs,
    // but are just normal characters in a filesystem path.
    for(let i = 0; i < urlDecodePatterns.length; i += 2){
        path = path.replace(urlDecodePatterns[i], urlDecodePatterns[i + 1]);
    }
    // Step 3: If it's a "file://" URL, then format it consistently
    // or convert it to a local filesystem path
    let isFileUrl = path.substr(0, 7).toLowerCase() === "file://";
    if (isFileUrl) {
        // Strip-off the protocol, and the initial "/", if there is one
        path = path[7] === "/" ? path.substr(8) : path.substr(7);
        // insert a colon (":") after the drive letter on Windows
        if ((0, is_windows_1.isWindows)() && path[1] === "/") {
            path = path[0] + ":" + path.substr(1);
        }
        if (keepFileProtocol) {
            // Return the consistently-formatted "file://" URL
            path = "file:///" + path;
        } else {
            // Convert the "file://" URL to a local filesystem path.
            // On Windows, it will start with something like "C:/".
            // On Posix, it will start with "/"
            isFileUrl = false;
            path = (0, is_windows_1.isWindows)() ? path : "/" + path;
        }
    }
    // Step 4: Normalize Windows paths (unless it's a "file://" URL)
    if ((0, is_windows_1.isWindows)() && !isFileUrl) {
        // Replace forward slashes with backslashes
        path = path.replace(forwardSlashPattern, "\\");
        // Capitalize the drive letter
        if (path.substr(1, 2) === ":\\") {
            path = path[0].toUpperCase() + path.substr(1);
        }
    }
    return path;
}
/**
 * Converts a $ref pointer to a valid JSON Path.
 *
 * @param pointer
 * @returns
 */ function safePointerToPath(pointer) {
    if (pointer.length <= 1 || pointer[0] !== "#" || pointer[1] !== "/") {
        return [];
    }
    return pointer.slice(2).split("/").map((value)=>{
        return decodeURIComponent(value).replace(jsonPointerSlash, "/").replace(jsonPointerTilde, "~");
    });
}
function relative(from, to) {
    if (!isFileSystemPath(from) || !isFileSystemPath(to)) {
        return resolve(from, to);
    }
    const fromDir = path_1.default.dirname(stripHash(from));
    const toPath = stripHash(to);
    const result = path_1.default.relative(fromDir, toPath);
    return result + getHash(to);
}
}),
"[project]/node_modules/.pnpm/@apidevtools+json-schema-ref-parser@11.9.3/node_modules/@apidevtools/json-schema-ref-parser/dist/lib/util/errors.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.InvalidPointerError = exports.TimeoutError = exports.MissingPointerError = exports.UnmatchedResolverError = exports.ResolverError = exports.UnmatchedParserError = exports.ParserError = exports.JSONParserErrorGroup = exports.JSONParserError = void 0;
exports.isHandledError = isHandledError;
exports.normalizeError = normalizeError;
const ono_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@jsdevtools+ono@7.1.3/node_modules/@jsdevtools/ono/esm/index.js [app-rsc] (ecmascript)");
const url_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@apidevtools+json-schema-ref-parser@11.9.3/node_modules/@apidevtools/json-schema-ref-parser/dist/lib/util/url.js [app-rsc] (ecmascript)");
class JSONParserError extends Error {
    constructor(message, source){
        super();
        this.code = "EUNKNOWN";
        this.name = "JSONParserError";
        this.message = message;
        this.source = source;
        this.path = null;
        ono_1.Ono.extend(this);
    }
    get footprint() {
        return `${this.path}+${this.source}+${this.code}+${this.message}`;
    }
}
exports.JSONParserError = JSONParserError;
class JSONParserErrorGroup extends Error {
    constructor(parser){
        super();
        this.files = parser;
        this.name = "JSONParserErrorGroup";
        this.message = `${this.errors.length} error${this.errors.length > 1 ? "s" : ""} occurred while reading '${(0, url_js_1.toFileSystemPath)(parser.$refs._root$Ref.path)}'`;
        ono_1.Ono.extend(this);
    }
    static getParserErrors(parser) {
        const errors = [];
        for (const $ref of Object.values(parser.$refs._$refs)){
            if ($ref.errors) {
                errors.push(...$ref.errors);
            }
        }
        return errors;
    }
    get errors() {
        return JSONParserErrorGroup.getParserErrors(this.files);
    }
}
exports.JSONParserErrorGroup = JSONParserErrorGroup;
class ParserError extends JSONParserError {
    constructor(message, source){
        super(`Error parsing ${source}: ${message}`, source);
        this.code = "EPARSER";
        this.name = "ParserError";
    }
}
exports.ParserError = ParserError;
class UnmatchedParserError extends JSONParserError {
    constructor(source){
        super(`Could not find parser for "${source}"`, source);
        this.code = "EUNMATCHEDPARSER";
        this.name = "UnmatchedParserError";
    }
}
exports.UnmatchedParserError = UnmatchedParserError;
class ResolverError extends JSONParserError {
    constructor(ex, source){
        super(ex.message || `Error reading file "${source}"`, source);
        this.code = "ERESOLVER";
        this.name = "ResolverError";
        if ("code" in ex) {
            this.ioErrorCode = String(ex.code);
        }
    }
}
exports.ResolverError = ResolverError;
class UnmatchedResolverError extends JSONParserError {
    constructor(source){
        super(`Could not find resolver for "${source}"`, source);
        this.code = "EUNMATCHEDRESOLVER";
        this.name = "UnmatchedResolverError";
    }
}
exports.UnmatchedResolverError = UnmatchedResolverError;
class MissingPointerError extends JSONParserError {
    constructor(token, path, targetRef, targetFound, parentPath){
        super(`Missing $ref pointer "${(0, url_js_1.getHash)(path)}". Token "${token}" does not exist.`, (0, url_js_1.stripHash)(path));
        this.code = "EMISSINGPOINTER";
        this.name = "MissingPointerError";
        this.targetToken = token;
        this.targetRef = targetRef;
        this.targetFound = targetFound;
        this.parentPath = parentPath;
    }
}
exports.MissingPointerError = MissingPointerError;
class TimeoutError extends JSONParserError {
    constructor(timeout){
        super(`Dereferencing timeout reached: ${timeout}ms`);
        this.code = "ETIMEOUT";
        this.name = "TimeoutError";
    }
}
exports.TimeoutError = TimeoutError;
class InvalidPointerError extends JSONParserError {
    constructor(pointer, path){
        super(`Invalid $ref pointer "${pointer}". Pointers must begin with "#/"`, (0, url_js_1.stripHash)(path));
        this.code = "EUNMATCHEDRESOLVER";
        this.name = "InvalidPointerError";
    }
}
exports.InvalidPointerError = InvalidPointerError;
function isHandledError(err) {
    return err instanceof JSONParserError || err instanceof JSONParserErrorGroup;
}
function normalizeError(err) {
    if (err.path === null) {
        err.path = [];
    }
    return err;
}
}),
"[project]/node_modules/.pnpm/@apidevtools+json-schema-ref-parser@11.9.3/node_modules/@apidevtools/json-schema-ref-parser/dist/lib/pointer.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __createBinding = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __setModuleDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var __importStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importStar || function() {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function(o) {
            var ar = [];
            for(var k in o)if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) {
            for(var k = ownKeys(mod), i = 0; i < k.length; i++)if (k[i] !== "default") __createBinding(result, mod, k[i]);
        }
        __setModuleDefault(result, mod);
        return result;
    };
}();
var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.nullSymbol = void 0;
const ref_js_1 = __importDefault(__turbopack_context__.r("[project]/node_modules/.pnpm/@apidevtools+json-schema-ref-parser@11.9.3/node_modules/@apidevtools/json-schema-ref-parser/dist/lib/ref.js [app-rsc] (ecmascript)"));
const url = __importStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@apidevtools+json-schema-ref-parser@11.9.3/node_modules/@apidevtools/json-schema-ref-parser/dist/lib/util/url.js [app-rsc] (ecmascript)"));
const errors_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@apidevtools+json-schema-ref-parser@11.9.3/node_modules/@apidevtools/json-schema-ref-parser/dist/lib/util/errors.js [app-rsc] (ecmascript)");
exports.nullSymbol = Symbol('null');
const slashes = /\//g;
const tildes = /~/g;
const escapedSlash = /~1/g;
const escapedTilde = /~0/g;
const safeDecodeURIComponent = (encodedURIComponent)=>{
    try {
        return decodeURIComponent(encodedURIComponent);
    } catch  {
        return encodedURIComponent;
    }
};
/**
 * This class represents a single JSON pointer and its resolved value.
 *
 * @param $ref
 * @param path
 * @param [friendlyPath] - The original user-specified path (used for error messages)
 * @class
 */ class Pointer {
    constructor($ref, path, friendlyPath){
        this.$ref = $ref;
        this.path = path;
        this.originalPath = friendlyPath || path;
        this.value = undefined;
        this.circular = false;
        this.indirections = 0;
    }
    /**
     * Resolves the value of a nested property within the given object.
     *
     * @param obj - The object that will be crawled
     * @param options
     * @param pathFromRoot - the path of place that initiated resolving
     *
     * @returns
     * Returns a JSON pointer whose {@link Pointer#value} is the resolved value.
     * If resolving this value required resolving other JSON references, then
     * the {@link Pointer#$ref} and {@link Pointer#path} will reflect the resolution path
     * of the resolved value.
     */ resolve(obj, options, pathFromRoot) {
        const tokens = Pointer.parse(this.path, this.originalPath);
        const found = [];
        // Crawl the object, one token at a time
        this.value = unwrapOrThrow(obj);
        for(let i = 0; i < tokens.length; i++){
            if (resolveIf$Ref(this, options, pathFromRoot)) {
                // The $ref path has changed, so append the remaining tokens to the path
                this.path = Pointer.join(this.path, tokens.slice(i));
            }
            if (typeof this.value === "object" && this.value !== null && !isRootPath(pathFromRoot) && "$ref" in this.value) {
                return this;
            }
            const token = tokens[i];
            if (this.value[token] === undefined || this.value[token] === null && i === tokens.length - 1) {
                // one final case is if the entry itself includes slashes, and was parsed out as a token - we can join the remaining tokens and try again
                let didFindSubstringSlashMatch = false;
                for(let j = tokens.length - 1; j > i; j--){
                    const joinedToken = tokens.slice(i, j + 1).join("/");
                    if (this.value[joinedToken] !== undefined) {
                        this.value = this.value[joinedToken];
                        i = j;
                        didFindSubstringSlashMatch = true;
                        break;
                    }
                }
                if (didFindSubstringSlashMatch) {
                    continue;
                }
                // If the token we're looking for ended up not containing any slashes but is
                // actually instead pointing to an existing `null` value then we should use that
                // `null` value.
                if (token in this.value && this.value[token] === null) {
                    // We use a `null` symbol for internal tracking to differntiate between a general `null`
                    // value and our expected `null` value.
                    this.value = exports.nullSymbol;
                    continue;
                }
                this.value = null;
                const path = this.$ref.path || "";
                const targetRef = this.path.replace(path, "");
                const targetFound = Pointer.join("", found);
                const parentPath = pathFromRoot?.replace(path, "");
                throw new errors_js_1.MissingPointerError(token, decodeURI(this.originalPath), targetRef, targetFound, parentPath);
            } else {
                this.value = this.value[token];
            }
            found.push(token);
        }
        // Resolve the final value
        if (!this.value || this.value.$ref && url.resolve(this.path, this.value.$ref) !== pathFromRoot) {
            resolveIf$Ref(this, options, pathFromRoot);
        }
        return this;
    }
    /**
     * Sets the value of a nested property within the given object.
     *
     * @param obj - The object that will be crawled
     * @param value - the value to assign
     * @param options
     *
     * @returns
     * Returns the modified object, or an entirely new object if the entire object is overwritten.
     */ set(obj, value, options) {
        const tokens = Pointer.parse(this.path);
        let token;
        if (tokens.length === 0) {
            // There are no tokens, replace the entire object with the new value
            this.value = value;
            return value;
        }
        // Crawl the object, one token at a time
        this.value = unwrapOrThrow(obj);
        for(let i = 0; i < tokens.length - 1; i++){
            resolveIf$Ref(this, options);
            token = tokens[i];
            if (this.value && this.value[token] !== undefined) {
                // The token exists
                this.value = this.value[token];
            } else {
                // The token doesn't exist, so create it
                this.value = setValue(this, token, {});
            }
        }
        // Set the value of the final token
        resolveIf$Ref(this, options);
        token = tokens[tokens.length - 1];
        setValue(this, token, value);
        // Return the updated object
        return obj;
    }
    /**
     * Parses a JSON pointer (or a path containing a JSON pointer in the hash)
     * and returns an array of the pointer's tokens.
     * (e.g. "schema.json#/definitions/person/name" => ["definitions", "person", "name"])
     *
     * The pointer is parsed according to RFC 6901
     * {@link https://tools.ietf.org/html/rfc6901#section-3}
     *
     * @param path
     * @param [originalPath]
     * @returns
     */ static parse(path, originalPath) {
        // Get the JSON pointer from the path's hash
        const pointer = url.getHash(path).substring(1);
        // If there's no pointer, then there are no tokens,
        // so return an empty array
        if (!pointer) {
            return [];
        }
        // Split into an array
        const split = pointer.split("/");
        // Decode each part, according to RFC 6901
        for(let i = 0; i < split.length; i++){
            split[i] = safeDecodeURIComponent(split[i].replace(escapedSlash, "/").replace(escapedTilde, "~"));
        }
        if (split[0] !== "") {
            throw new errors_js_1.InvalidPointerError(pointer, originalPath === undefined ? path : originalPath);
        }
        return split.slice(1);
    }
    /**
     * Creates a JSON pointer path, by joining one or more tokens to a base path.
     *
     * @param base - The base path (e.g. "schema.json#/definitions/person")
     * @param tokens - The token(s) to append (e.g. ["name", "first"])
     * @returns
     */ static join(base, tokens) {
        // Ensure that the base path contains a hash
        if (base.indexOf("#") === -1) {
            base += "#";
        }
        // Append each token to the base path
        tokens = Array.isArray(tokens) ? tokens : [
            tokens
        ];
        for(let i = 0; i < tokens.length; i++){
            const token = tokens[i];
            // Encode the token, according to RFC 6901
            base += "/" + encodeURIComponent(token.replace(tildes, "~0").replace(slashes, "~1"));
        }
        return base;
    }
}
/**
 * If the given pointer's {@link Pointer#value} is a JSON reference,
 * then the reference is resolved and {@link Pointer#value} is replaced with the resolved value.
 * In addition, {@link Pointer#path} and {@link Pointer#$ref} are updated to reflect the
 * resolution path of the new value.
 *
 * @param pointer
 * @param options
 * @param [pathFromRoot] - the path of place that initiated resolving
 * @returns - Returns `true` if the resolution path changed
 */ function resolveIf$Ref(pointer, options, pathFromRoot) {
    // Is the value a JSON reference? (and allowed?)
    if (ref_js_1.default.isAllowed$Ref(pointer.value, options)) {
        const $refPath = url.resolve(pointer.path, pointer.value.$ref);
        if ($refPath === pointer.path && !isRootPath(pathFromRoot)) {
            // The value is a reference to itself, so there's nothing to do.
            pointer.circular = true;
        } else {
            const resolved = pointer.$ref.$refs._resolve($refPath, pointer.path, options);
            if (resolved === null) {
                return false;
            }
            pointer.indirections += resolved.indirections + 1;
            if (ref_js_1.default.isExtended$Ref(pointer.value)) {
                // This JSON reference "extends" the resolved value, rather than simply pointing to it.
                // So the resolved path does NOT change.  Just the value does.
                pointer.value = ref_js_1.default.dereference(pointer.value, resolved.value);
                return false;
            } else {
                // Resolve the reference
                pointer.$ref = resolved.$ref;
                pointer.path = resolved.path;
                pointer.value = resolved.value;
            }
            return true;
        }
    }
    return undefined;
}
exports.default = Pointer;
/**
 * Sets the specified token value of the {@link Pointer#value}.
 *
 * The token is evaluated according to RFC 6901.
 * {@link https://tools.ietf.org/html/rfc6901#section-4}
 *
 * @param pointer - The JSON Pointer whose value will be modified
 * @param token - A JSON Pointer token that indicates how to modify `obj`
 * @param value - The value to assign
 * @returns - Returns the assigned value
 */ function setValue(pointer, token, value) {
    if (pointer.value && typeof pointer.value === "object") {
        if (token === "-" && Array.isArray(pointer.value)) {
            pointer.value.push(value);
        } else {
            pointer.value[token] = value;
        }
    } else {
        throw new errors_js_1.JSONParserError(`Error assigning $ref pointer "${pointer.path}". \nCannot set "${token}" of a non-object.`);
    }
    return value;
}
function unwrapOrThrow(value) {
    if ((0, errors_js_1.isHandledError)(value)) {
        throw value;
    }
    return value;
}
function isRootPath(pathFromRoot) {
    return typeof pathFromRoot == "string" && Pointer.parse(pathFromRoot).length == 0;
}
}),
"[project]/node_modules/.pnpm/@apidevtools+json-schema-ref-parser@11.9.3/node_modules/@apidevtools/json-schema-ref-parser/dist/lib/ref.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __createBinding = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __setModuleDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var __importStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importStar || function() {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function(o) {
            var ar = [];
            for(var k in o)if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) {
            for(var k = ownKeys(mod), i = 0; i < k.length; i++)if (k[i] !== "default") __createBinding(result, mod, k[i]);
        }
        __setModuleDefault(result, mod);
        return result;
    };
}();
Object.defineProperty(exports, "__esModule", {
    value: true
});
const pointer_js_1 = __importStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@apidevtools+json-schema-ref-parser@11.9.3/node_modules/@apidevtools/json-schema-ref-parser/dist/lib/pointer.js [app-rsc] (ecmascript)"));
const errors_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@apidevtools+json-schema-ref-parser@11.9.3/node_modules/@apidevtools/json-schema-ref-parser/dist/lib/util/errors.js [app-rsc] (ecmascript)");
const url_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@apidevtools+json-schema-ref-parser@11.9.3/node_modules/@apidevtools/json-schema-ref-parser/dist/lib/util/url.js [app-rsc] (ecmascript)");
/**
 * This class represents a single JSON reference and its resolved value.
 *
 * @class
 */ class $Ref {
    constructor($refs){
        /**
         * List of all errors. Undefined if no errors.
         */ this.errors = [];
        this.$refs = $refs;
    }
    /**
     * Pushes an error to errors array.
     *
     * @param err - The error to be pushed
     * @returns
     */ addError(err) {
        if (this.errors === undefined) {
            this.errors = [];
        }
        const existingErrors = this.errors.map(({ footprint })=>footprint);
        // the path has been almost certainly set at this point,
        // but just in case something went wrong, normalizeError injects path if necessary
        // moreover, certain errors might point at the same spot, so filter them out to reduce noise
        if ("errors" in err && Array.isArray(err.errors)) {
            this.errors.push(...err.errors.map(errors_js_1.normalizeError).filter(({ footprint })=>!existingErrors.includes(footprint)));
        } else if (!("footprint" in err) || !existingErrors.includes(err.footprint)) {
            this.errors.push((0, errors_js_1.normalizeError)(err));
        }
    }
    /**
     * Determines whether the given JSON reference exists within this {@link $Ref#value}.
     *
     * @param path - The full path being resolved, optionally with a JSON pointer in the hash
     * @param options
     * @returns
     */ exists(path, options) {
        try {
            this.resolve(path, options);
            return true;
        } catch  {
            return false;
        }
    }
    /**
     * Resolves the given JSON reference within this {@link $Ref#value} and returns the resolved value.
     *
     * @param path - The full path being resolved, optionally with a JSON pointer in the hash
     * @param options
     * @returns - Returns the resolved value
     */ get(path, options) {
        return this.resolve(path, options)?.value;
    }
    /**
     * Resolves the given JSON reference within this {@link $Ref#value}.
     *
     * @param path - The full path being resolved, optionally with a JSON pointer in the hash
     * @param options
     * @param friendlyPath - The original user-specified path (used for error messages)
     * @param pathFromRoot - The path of `obj` from the schema root
     * @returns
     */ resolve(path, options, friendlyPath, pathFromRoot) {
        const pointer = new pointer_js_1.default(this, path, friendlyPath);
        try {
            const resolved = pointer.resolve(this.value, options, pathFromRoot);
            if (resolved.value === pointer_js_1.nullSymbol) {
                resolved.value = null;
            }
            return resolved;
        } catch (err) {
            if (!options || !options.continueOnError || !(0, errors_js_1.isHandledError)(err)) {
                throw err;
            }
            if (err.path === null) {
                err.path = (0, url_js_1.safePointerToPath)((0, url_js_1.getHash)(pathFromRoot));
            }
            if (err instanceof errors_js_1.InvalidPointerError) {
                err.source = decodeURI((0, url_js_1.stripHash)(pathFromRoot));
            }
            this.addError(err);
            return null;
        }
    }
    /**
     * Sets the value of a nested property within this {@link $Ref#value}.
     * If the property, or any of its parents don't exist, they will be created.
     *
     * @param path - The full path of the property to set, optionally with a JSON pointer in the hash
     * @param value - The value to assign
     */ set(path, value) {
        const pointer = new pointer_js_1.default(this, path);
        this.value = pointer.set(this.value, value);
        if (this.value === pointer_js_1.nullSymbol) {
            this.value = null;
        }
    }
    /**
     * Determines whether the given value is a JSON reference.
     *
     * @param value - The value to inspect
     * @returns
     */ static is$Ref(value) {
        return Boolean(value) && typeof value === "object" && value !== null && "$ref" in value && typeof value.$ref === "string" && value.$ref.length > 0;
    }
    /**
     * Determines whether the given value is an external JSON reference.
     *
     * @param value - The value to inspect
     * @returns
     */ static isExternal$Ref(value) {
        return $Ref.is$Ref(value) && value.$ref[0] !== "#";
    }
    /**
     * Determines whether the given value is a JSON reference, and whether it is allowed by the options.
     * For example, if it references an external file, then options.resolve.external must be true.
     *
     * @param value - The value to inspect
     * @param options
     * @returns
     */ static isAllowed$Ref(value, options) {
        if (this.is$Ref(value)) {
            if (value.$ref.substring(0, 2) === "#/" || value.$ref === "#") {
                // It's a JSON Pointer reference, which is always allowed
                return true;
            } else if (value.$ref[0] !== "#" && (!options || options.resolve?.external)) {
                // It's an external reference, which is allowed by the options
                return true;
            }
        }
        return undefined;
    }
    /**
     * Determines whether the given value is a JSON reference that "extends" its resolved value.
     * That is, it has extra properties (in addition to "$ref"), so rather than simply pointing to
     * an existing value, this $ref actually creates a NEW value that is a shallow copy of the resolved
     * value, plus the extra properties.
     *
     * @example: {
       person: {
         properties: {
           firstName: { type: string }
           lastName: { type: string }
         }
       }
       employee: {
         properties: {
           $ref: #/person/properties
           salary: { type: number }
         }
       }
     }
     *  In this example, "employee" is an extended $ref, since it extends "person" with an additional
     *  property (salary).  The result is a NEW value that looks like this:
     *
     *  {
     *    properties: {
     *      firstName: { type: string }
     *      lastName: { type: string }
     *      salary: { type: number }
     *    }
     *  }
     *
     * @param value - The value to inspect
     * @returns
     */ static isExtended$Ref(value) {
        return $Ref.is$Ref(value) && Object.keys(value).length > 1;
    }
    /**
     * Returns the resolved value of a JSON Reference.
     * If necessary, the resolved value is merged with the JSON Reference to create a new object
     *
     * @example: {
    person: {
      properties: {
        firstName: { type: string }
        lastName: { type: string }
      }
    }
    employee: {
      properties: {
        $ref: #/person/properties
        salary: { type: number }
      }
    }
    } When "person" and "employee" are merged, you end up with the following object:
     *
     *  {
     *    properties: {
     *      firstName: { type: string }
     *      lastName: { type: string }
     *      salary: { type: number }
     *    }
     *  }
     *
     * @param $ref - The JSON reference object (the one with the "$ref" property)
     * @param resolvedValue - The resolved value, which can be any type
     * @returns - Returns the dereferenced value
     */ static dereference($ref, resolvedValue) {
        if (resolvedValue && typeof resolvedValue === "object" && $Ref.isExtended$Ref($ref)) {
            const merged = {};
            for (const key of Object.keys($ref)){
                if (key !== "$ref") {
                    // @ts-expect-error TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
                    merged[key] = $ref[key];
                }
            }
            for (const key of Object.keys(resolvedValue)){
                if (!(key in merged)) {
                    // @ts-expect-error TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
                    merged[key] = resolvedValue[key];
                }
            }
            return merged;
        } else {
            // Completely replace the original reference with the resolved value
            return resolvedValue;
        }
    }
}
exports.default = $Ref;
}),
"[project]/node_modules/.pnpm/@apidevtools+json-schema-ref-parser@11.9.3/node_modules/@apidevtools/json-schema-ref-parser/dist/lib/refs.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __createBinding = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __setModuleDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var __importStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importStar || function() {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function(o) {
            var ar = [];
            for(var k in o)if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) {
            for(var k = ownKeys(mod), i = 0; i < k.length; i++)if (k[i] !== "default") __createBinding(result, mod, k[i]);
        }
        __setModuleDefault(result, mod);
        return result;
    };
}();
var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
const ono_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@jsdevtools+ono@7.1.3/node_modules/@jsdevtools/ono/esm/index.js [app-rsc] (ecmascript)");
const ref_js_1 = __importDefault(__turbopack_context__.r("[project]/node_modules/.pnpm/@apidevtools+json-schema-ref-parser@11.9.3/node_modules/@apidevtools/json-schema-ref-parser/dist/lib/ref.js [app-rsc] (ecmascript)"));
const url = __importStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@apidevtools+json-schema-ref-parser@11.9.3/node_modules/@apidevtools/json-schema-ref-parser/dist/lib/util/url.js [app-rsc] (ecmascript)"));
const convert_path_to_posix_1 = __importDefault(__turbopack_context__.r("[project]/node_modules/.pnpm/@apidevtools+json-schema-ref-parser@11.9.3/node_modules/@apidevtools/json-schema-ref-parser/dist/lib/util/convert-path-to-posix.js [app-rsc] (ecmascript)"));
/**
 * When you call the resolve method, the value that gets passed to the callback function (or Promise) is a $Refs object. This same object is accessible via the parser.$refs property of $RefParser objects.
 *
 * This object is a map of JSON References and their resolved values. It also has several convenient helper methods that make it easy for you to navigate and manipulate the JSON References.
 *
 * See https://apitools.dev/json-schema-ref-parser/docs/refs.html
 */ class $Refs {
    /**
     * Returns the paths/URLs of all the files in your schema (including the main schema file).
     *
     * See https://apitools.dev/json-schema-ref-parser/docs/refs.html#pathstypes
     *
     * @param types (optional) Optionally only return certain types of paths ("file", "http", etc.)
     */ paths(...types) {
        const paths = getPaths(this._$refs, types.flat());
        return paths.map((path)=>{
            return (0, convert_path_to_posix_1.default)(path.decoded);
        });
    }
    /**
     * Returns a map of paths/URLs and their correspond values.
     *
     * See https://apitools.dev/json-schema-ref-parser/docs/refs.html#valuestypes
     *
     * @param types (optional) Optionally only return values from certain locations ("file", "http", etc.)
     */ values(...types) {
        const $refs = this._$refs;
        const paths = getPaths($refs, types.flat());
        return paths.reduce((obj, path)=>{
            obj[(0, convert_path_to_posix_1.default)(path.decoded)] = $refs[path.encoded].value;
            return obj;
        }, {});
    }
    /**
     * Returns `true` if the given path exists in the schema; otherwise, returns `false`
     *
     * See https://apitools.dev/json-schema-ref-parser/docs/refs.html#existsref
     *
     * @param $ref The JSON Reference path, optionally with a JSON Pointer in the hash
     */ /**
     * Determines whether the given JSON reference exists.
     *
     * @param path - The path being resolved, optionally with a JSON pointer in the hash
     * @param [options]
     * @returns
     */ exists(path, options) {
        try {
            this._resolve(path, "", options);
            return true;
        } catch  {
            return false;
        }
    }
    /**
     * Resolves the given JSON reference and returns the resolved value.
     *
     * @param path - The path being resolved, with a JSON pointer in the hash
     * @param [options]
     * @returns - Returns the resolved value
     */ get(path, options) {
        return this._resolve(path, "", options).value;
    }
    /**
     * Sets the value at the given path in the schema. If the property, or any of its parents, don't exist, they will be created.
     *
     * @param path The JSON Reference path, optionally with a JSON Pointer in the hash
     * @param value The value to assign. Can be anything (object, string, number, etc.)
     */ set(path, value) {
        const absPath = url.resolve(this._root$Ref.path, path);
        const withoutHash = url.stripHash(absPath);
        const $ref = this._$refs[withoutHash];
        if (!$ref) {
            throw (0, ono_1.ono)(`Error resolving $ref pointer "${path}". \n"${withoutHash}" not found.`);
        }
        $ref.set(absPath, value);
    }
    /**
     * Returns the specified {@link $Ref} object, or undefined.
     *
     * @param path - The path being resolved, optionally with a JSON pointer in the hash
     * @returns
     * @protected
     */ _get$Ref(path) {
        path = url.resolve(this._root$Ref.path, path);
        const withoutHash = url.stripHash(path);
        return this._$refs[withoutHash];
    }
    /**
     * Creates a new {@link $Ref} object and adds it to this {@link $Refs} object.
     *
     * @param path  - The file path or URL of the referenced file
     */ _add(path) {
        const withoutHash = url.stripHash(path);
        const $ref = new ref_js_1.default(this);
        $ref.path = withoutHash;
        this._$refs[withoutHash] = $ref;
        this._root$Ref = this._root$Ref || $ref;
        return $ref;
    }
    /**
     * Resolves the given JSON reference.
     *
     * @param path - The path being resolved, optionally with a JSON pointer in the hash
     * @param pathFromRoot - The path of `obj` from the schema root
     * @param [options]
     * @returns
     * @protected
     */ _resolve(path, pathFromRoot, options) {
        const absPath = url.resolve(this._root$Ref.path, path);
        const withoutHash = url.stripHash(absPath);
        const $ref = this._$refs[withoutHash];
        if (!$ref) {
            throw (0, ono_1.ono)(`Error resolving $ref pointer "${path}". \n"${withoutHash}" not found.`);
        }
        return $ref.resolve(absPath, options, path, pathFromRoot);
    }
    constructor(){
        /**
         * A map of paths/urls to {@link $Ref} objects
         *
         * @type {object}
         * @protected
         */ this._$refs = {};
        /**
         * Returns the paths of all the files/URLs that are referenced by the JSON schema,
         * including the schema itself.
         *
         * @param [types] - Only return paths of the given types ("file", "http", etc.)
         * @returns
         */ /**
         * Returns the map of JSON references and their resolved values.
         *
         * @param [types] - Only return references of the given types ("file", "http", etc.)
         * @returns
         */ /**
         * Returns a POJO (plain old JavaScript object) for serialization as JSON.
         *
         * @returns {object}
         */ this.toJSON = this.values;
        /**
         * Indicates whether the schema contains any circular references.
         *
         * @type {boolean}
         */ this.circular = false;
        this._$refs = {};
        // @ts-ignore
        this._root$Ref = null;
    }
}
exports.default = $Refs;
/**
 * Returns the encoded and decoded paths keys of the given object.
 *
 * @param $refs - The object whose keys are URL-encoded paths
 * @param [types] - Only return paths of the given types ("file", "http", etc.)
 * @returns
 */ function getPaths($refs, types) {
    let paths = Object.keys($refs);
    // Filter the paths by type
    types = Array.isArray(types[0]) ? types[0] : Array.prototype.slice.call(types);
    if (types.length > 0 && types[0]) {
        paths = paths.filter((key)=>{
            return types.includes($refs[key].pathType);
        });
    }
    // Decode local filesystem paths
    return paths.map((path)=>{
        return {
            encoded: path,
            decoded: $refs[path].pathType === "file" ? url.toFileSystemPath(path, true) : path
        };
    });
}
}),
"[project]/node_modules/.pnpm/@apidevtools+json-schema-ref-parser@11.9.3/node_modules/@apidevtools/json-schema-ref-parser/dist/lib/util/plugins.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.all = all;
exports.filter = filter;
exports.sort = sort;
exports.run = run;
/**
 * Returns the given plugins as an array, rather than an object map.
 * All other methods in this module expect an array of plugins rather than an object map.
 *
 * @returns
 */ function all(plugins) {
    return Object.keys(plugins || {}).filter((key)=>{
        return typeof plugins[key] === "object";
    }).map((key)=>{
        plugins[key].name = key;
        return plugins[key];
    });
}
/**
 * Filters the given plugins, returning only the ones return `true` for the given method.
 */ function filter(plugins, method, file) {
    return plugins.filter((plugin)=>{
        return !!getResult(plugin, method, file);
    });
}
/**
 * Sorts the given plugins, in place, by their `order` property.
 */ function sort(plugins) {
    for (const plugin of plugins){
        plugin.order = plugin.order || Number.MAX_SAFE_INTEGER;
    }
    return plugins.sort((a, b)=>{
        return a.order - b.order;
    });
}
/**
 * Runs the specified method of the given plugins, in order, until one of them returns a successful result.
 * Each method can return a synchronous value, a Promise, or call an error-first callback.
 * If the promise resolves successfully, or the callback is called without an error, then the result
 * is immediately returned and no further plugins are called.
 * If the promise rejects, or the callback is called with an error, then the next plugin is called.
 * If ALL plugins fail, then the last error is thrown.
 */ async function run(plugins, method, file, $refs) {
    let plugin;
    let lastError;
    let index = 0;
    return new Promise((resolve, reject)=>{
        runNextPlugin();
        function runNextPlugin() {
            plugin = plugins[index++];
            if (!plugin) {
                // There are no more functions, so re-throw the last error
                return reject(lastError);
            }
            try {
                // console.log('  %s', plugin.name);
                const result = getResult(plugin, method, file, callback, $refs);
                if (result && typeof result.then === "function") {
                    // A promise was returned
                    result.then(onSuccess, onError);
                } else if (result !== undefined) {
                    // A synchronous result was returned
                    onSuccess(result);
                } else if (index === plugins.length) {
                    throw new Error("No promise has been returned or callback has been called.");
                }
            } catch (e) {
                onError(e);
            }
        }
        function callback(err, result) {
            if (err) {
                onError(err);
            } else {
                onSuccess(result);
            }
        }
        function onSuccess(result) {
            // console.log('    success');
            resolve({
                plugin,
                result
            });
        }
        function onError(error) {
            // console.log('    %s', err.message || err);
            lastError = {
                plugin,
                error
            };
            runNextPlugin();
        }
    });
}
/**
 * Returns the value of the given property.
 * If the property is a function, then the result of the function is returned.
 * If the value is a RegExp, then it will be tested against the file URL.
 * If the value is an array, then it will be compared against the file extension.
 */ function getResult(obj, prop, file, callback, $refs) {
    const value = obj[prop];
    if (typeof value === "function") {
        return value.apply(obj, [
            file,
            callback,
            $refs
        ]);
    }
    if (!callback) {
        // The synchronous plugin functions (canParse and canRead)
        // allow a "shorthand" syntax, where the user can match
        // files by RegExp or by file extension.
        if (value instanceof RegExp) {
            return value.test(file.url);
        } else if (typeof value === "string") {
            return value === file.extension;
        } else if (Array.isArray(value)) {
            return value.indexOf(file.extension) !== -1;
        }
    }
    return value;
}
}),
"[project]/node_modules/.pnpm/@apidevtools+json-schema-ref-parser@11.9.3/node_modules/@apidevtools/json-schema-ref-parser/dist/lib/parse.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __createBinding = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __setModuleDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var __importStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importStar || function() {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function(o) {
            var ar = [];
            for(var k in o)if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) {
            for(var k = ownKeys(mod), i = 0; i < k.length; i++)if (k[i] !== "default") __createBinding(result, mod, k[i]);
        }
        __setModuleDefault(result, mod);
        return result;
    };
}();
Object.defineProperty(exports, "__esModule", {
    value: true
});
const ono_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@jsdevtools+ono@7.1.3/node_modules/@jsdevtools/ono/esm/index.js [app-rsc] (ecmascript)");
const url = __importStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@apidevtools+json-schema-ref-parser@11.9.3/node_modules/@apidevtools/json-schema-ref-parser/dist/lib/util/url.js [app-rsc] (ecmascript)"));
const plugins = __importStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@apidevtools+json-schema-ref-parser@11.9.3/node_modules/@apidevtools/json-schema-ref-parser/dist/lib/util/plugins.js [app-rsc] (ecmascript)"));
const errors_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@apidevtools+json-schema-ref-parser@11.9.3/node_modules/@apidevtools/json-schema-ref-parser/dist/lib/util/errors.js [app-rsc] (ecmascript)");
/**
 * Reads and parses the specified file path or URL.
 */ async function parse(path, $refs, options) {
    // Remove the URL fragment, if any
    const hashIndex = path.indexOf("#");
    let hash = "";
    if (hashIndex >= 0) {
        hash = path.substring(hashIndex);
        // Remove the URL fragment, if any
        path = path.substring(0, hashIndex);
    }
    // Add a new $Ref for this file, even though we don't have the value yet.
    // This ensures that we don't simultaneously read & parse the same file multiple times
    const $ref = $refs._add(path);
    // This "file object" will be passed to all resolvers and parsers.
    const file = {
        url: path,
        hash,
        extension: url.getExtension(path)
    };
    // Read the file and then parse the data
    try {
        const resolver = await readFile(file, options, $refs);
        $ref.pathType = resolver.plugin.name;
        file.data = resolver.result;
        const parser = await parseFile(file, options, $refs);
        $ref.value = parser.result;
        return parser.result;
    } catch (err) {
        if ((0, errors_js_1.isHandledError)(err)) {
            $ref.value = err;
        }
        throw err;
    }
}
/**
 * Reads the given file, using the configured resolver plugins
 *
 * @param file           - An object containing information about the referenced file
 * @param file.url       - The full URL of the referenced file
 * @param file.extension - The lowercased file extension (e.g. ".txt", ".html", etc.)
 * @param options
 * @param $refs
 * @returns
 * The promise resolves with the raw file contents and the resolver that was used.
 */ async function readFile(file, options, $refs) {
    // console.log('Reading %s', file.url);
    // Find the resolvers that can read this file
    let resolvers = plugins.all(options.resolve);
    resolvers = plugins.filter(resolvers, "canRead", file);
    // Run the resolvers, in order, until one of them succeeds
    plugins.sort(resolvers);
    try {
        const data = await plugins.run(resolvers, "read", file, $refs);
        return data;
    } catch (err) {
        if (!err && options.continueOnError) {
            // No resolver could be matched
            throw new errors_js_1.UnmatchedResolverError(file.url);
        } else if (!err || !("error" in err)) {
            // Throw a generic, friendly error.
            throw ono_1.ono.syntax(`Unable to resolve $ref pointer "${file.url}"`);
        } else if (err.error instanceof errors_js_1.ResolverError) {
            throw err.error;
        } else {
            throw new errors_js_1.ResolverError(err, file.url);
        }
    }
}
/**
 * Parses the given file's contents, using the configured parser plugins.
 *
 * @param file           - An object containing information about the referenced file
 * @param file.url       - The full URL of the referenced file
 * @param file.extension - The lowercased file extension (e.g. ".txt", ".html", etc.)
 * @param file.data      - The file contents. This will be whatever data type was returned by the resolver
 * @param options
 * @param $refs
 *
 * @returns
 * The promise resolves with the parsed file contents and the parser that was used.
 */ async function parseFile(file, options, $refs) {
    // Find the parsers that can read this file type.
    // If none of the parsers are an exact match for this file, then we'll try ALL of them.
    // This handles situations where the file IS a supported type, just with an unknown extension.
    const allParsers = plugins.all(options.parse);
    const filteredParsers = plugins.filter(allParsers, "canParse", file);
    const parsers = filteredParsers.length > 0 ? filteredParsers : allParsers;
    // Run the parsers, in order, until one of them succeeds
    plugins.sort(parsers);
    try {
        const parser = await plugins.run(parsers, "parse", file, $refs);
        if (!parser.plugin.allowEmpty && isEmpty(parser.result)) {
            throw ono_1.ono.syntax(`Error parsing "${file.url}" as ${parser.plugin.name}. \nParsed value is empty`);
        } else {
            return parser;
        }
    } catch (err) {
        if (!err && options.continueOnError) {
            // No resolver could be matched
            throw new errors_js_1.UnmatchedParserError(file.url);
        } else if (err && err.message && err.message.startsWith("Error parsing")) {
            throw err;
        } else if (!err || !("error" in err)) {
            throw ono_1.ono.syntax(`Unable to parse ${file.url}`);
        } else if (err.error instanceof errors_js_1.ParserError) {
            throw err.error;
        } else {
            throw new errors_js_1.ParserError(err.error.message, file.url);
        }
    }
}
/**
 * Determines whether the parsed value is "empty".
 *
 * @param value
 * @returns
 */ function isEmpty(value) {
    return value === undefined || typeof value === "object" && Object.keys(value).length === 0 || typeof value === "string" && value.trim().length === 0 || Buffer.isBuffer(value) && value.length === 0;
}
exports.default = parse;
}),
"[project]/node_modules/.pnpm/@apidevtools+json-schema-ref-parser@11.9.3/node_modules/@apidevtools/json-schema-ref-parser/dist/lib/parsers/json.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
const errors_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@apidevtools+json-schema-ref-parser@11.9.3/node_modules/@apidevtools/json-schema-ref-parser/dist/lib/util/errors.js [app-rsc] (ecmascript)");
exports.default = {
    /**
     * The order that this parser will run, in relation to other parsers.
     */ order: 100,
    /**
     * Whether to allow "empty" files. This includes zero-byte files, as well as empty JSON objects.
     */ allowEmpty: true,
    /**
     * Determines whether this parser can parse a given file reference.
     * Parsers that match will be tried, in order, until one successfully parses the file.
     * Parsers that don't match will be skipped, UNLESS none of the parsers match, in which case
     * every parser will be tried.
     */ canParse: ".json",
    /**
     * Allow JSON files with byte order marks (BOM)
     */ allowBOM: true,
    /**
     * Parses the given file as JSON
     */ async parse (file) {
        let data = file.data;
        if (Buffer.isBuffer(data)) {
            data = data.toString();
        }
        if (typeof data === "string") {
            if (data.trim().length === 0) {
                return; // This mirrors the YAML behavior
            } else {
                try {
                    return JSON.parse(data);
                } catch (e) {
                    if (this.allowBOM) {
                        try {
                            // find the first curly brace
                            const firstCurlyBrace = data.indexOf("{");
                            // remove any characters before the first curly brace
                            data = data.slice(firstCurlyBrace);
                            return JSON.parse(data);
                        } catch (e) {
                            throw new errors_js_1.ParserError(e.message, file.url);
                        }
                    }
                    throw new errors_js_1.ParserError(e.message, file.url);
                }
            }
        } else {
            // data is already a JavaScript value (object, array, number, null, NaN, etc.)
            return data;
        }
    }
};
}),
"[project]/node_modules/.pnpm/@apidevtools+json-schema-ref-parser@11.9.3/node_modules/@apidevtools/json-schema-ref-parser/dist/lib/parsers/yaml.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
const errors_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@apidevtools+json-schema-ref-parser@11.9.3/node_modules/@apidevtools/json-schema-ref-parser/dist/lib/util/errors.js [app-rsc] (ecmascript)");
const js_yaml_1 = __importDefault(__turbopack_context__.r("[project]/node_modules/.pnpm/js-yaml@4.1.0/node_modules/js-yaml/index.js [app-rsc] (ecmascript)"));
const js_yaml_2 = __turbopack_context__.r("[project]/node_modules/.pnpm/js-yaml@4.1.0/node_modules/js-yaml/index.js [app-rsc] (ecmascript)");
exports.default = {
    /**
     * The order that this parser will run, in relation to other parsers.
     */ order: 200,
    /**
     * Whether to allow "empty" files. This includes zero-byte files, as well as empty JSON objects.
     */ allowEmpty: true,
    /**
     * Determines whether this parser can parse a given file reference.
     * Parsers that match will be tried, in order, until one successfully parses the file.
     * Parsers that don't match will be skipped, UNLESS none of the parsers match, in which case
     * every parser will be tried.
     */ canParse: [
        ".yaml",
        ".yml",
        ".json"
    ],
    /**
     * Parses the given file as YAML
     *
     * @param file           - An object containing information about the referenced file
     * @param file.url       - The full URL of the referenced file
     * @param file.extension - The lowercased file extension (e.g. ".txt", ".html", etc.)
     * @param file.data      - The file contents. This will be whatever data type was returned by the resolver
     * @returns
     */ async parse (file) {
        let data = file.data;
        if (Buffer.isBuffer(data)) {
            data = data.toString();
        }
        if (typeof data === "string") {
            try {
                return js_yaml_1.default.load(data, {
                    schema: js_yaml_2.JSON_SCHEMA
                });
            } catch (e) {
                throw new errors_js_1.ParserError(e?.message || "Parser Error", file.url);
            }
        } else {
            // data is already a JavaScript value (object, array, number, null, NaN, etc.)
            return data;
        }
    }
};
}),
"[project]/node_modules/.pnpm/@apidevtools+json-schema-ref-parser@11.9.3/node_modules/@apidevtools/json-schema-ref-parser/dist/lib/parsers/text.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
const errors_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@apidevtools+json-schema-ref-parser@11.9.3/node_modules/@apidevtools/json-schema-ref-parser/dist/lib/util/errors.js [app-rsc] (ecmascript)");
const TEXT_REGEXP = /\.(txt|htm|html|md|xml|js|min|map|css|scss|less|svg)$/i;
exports.default = {
    /**
     * The order that this parser will run, in relation to other parsers.
     */ order: 300,
    /**
     * Whether to allow "empty" files (zero bytes).
     */ allowEmpty: true,
    /**
     * The encoding that the text is expected to be in.
     */ encoding: "utf8",
    /**
     * Determines whether this parser can parse a given file reference.
     * Parsers that return true will be tried, in order, until one successfully parses the file.
     * Parsers that return false will be skipped, UNLESS all parsers returned false, in which case
     * every parser will be tried.
     */ canParse (file) {
        // Use this parser if the file is a string or Buffer, and has a known text-based extension
        return (typeof file.data === "string" || Buffer.isBuffer(file.data)) && TEXT_REGEXP.test(file.url);
    },
    /**
     * Parses the given file as text
     */ parse (file) {
        if (typeof file.data === "string") {
            return file.data;
        } else if (Buffer.isBuffer(file.data)) {
            return file.data.toString(this.encoding);
        } else {
            throw new errors_js_1.ParserError("data is not text", file.url);
        }
    }
};
}),
"[project]/node_modules/.pnpm/@apidevtools+json-schema-ref-parser@11.9.3/node_modules/@apidevtools/json-schema-ref-parser/dist/lib/parsers/binary.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
const BINARY_REGEXP = /\.(jpeg|jpg|gif|png|bmp|ico)$/i;
exports.default = {
    /**
     * The order that this parser will run, in relation to other parsers.
     */ order: 400,
    /**
     * Whether to allow "empty" files (zero bytes).
     */ allowEmpty: true,
    /**
     * Determines whether this parser can parse a given file reference.
     * Parsers that return true will be tried, in order, until one successfully parses the file.
     * Parsers that return false will be skipped, UNLESS all parsers returned false, in which case
     * every parser will be tried.
     */ canParse (file) {
        // Use this parser if the file is a Buffer, and has a known binary extension
        return Buffer.isBuffer(file.data) && BINARY_REGEXP.test(file.url);
    },
    /**
     * Parses the given data as a Buffer (byte array).
     */ parse (file) {
        if (Buffer.isBuffer(file.data)) {
            return file.data;
        } else {
            // This will reject if data is anything other than a string or typed array
            return Buffer.from(file.data);
        }
    }
};
}),
"[project]/node_modules/.pnpm/@apidevtools+json-schema-ref-parser@11.9.3/node_modules/@apidevtools/json-schema-ref-parser/dist/lib/resolvers/file.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __createBinding = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __setModuleDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var __importStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importStar || function() {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function(o) {
            var ar = [];
            for(var k in o)if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) {
            for(var k = ownKeys(mod), i = 0; i < k.length; i++)if (k[i] !== "default") __createBinding(result, mod, k[i]);
        }
        __setModuleDefault(result, mod);
        return result;
    };
}();
var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
const fs_1 = __importDefault(__turbopack_context__.r("[externals]/fs [external] (fs, cjs)"));
const ono_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@jsdevtools+ono@7.1.3/node_modules/@jsdevtools/ono/esm/index.js [app-rsc] (ecmascript)");
const url = __importStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@apidevtools+json-schema-ref-parser@11.9.3/node_modules/@apidevtools/json-schema-ref-parser/dist/lib/util/url.js [app-rsc] (ecmascript)"));
const errors_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@apidevtools+json-schema-ref-parser@11.9.3/node_modules/@apidevtools/json-schema-ref-parser/dist/lib/util/errors.js [app-rsc] (ecmascript)");
exports.default = {
    /**
     * The order that this resolver will run, in relation to other resolvers.
     */ order: 100,
    /**
     * Determines whether this resolver can read a given file reference.
     * Resolvers that return true will be tried, in order, until one successfully resolves the file.
     * Resolvers that return false will not be given a chance to resolve the file.
     */ canRead (file) {
        return url.isFileSystemPath(file.url);
    },
    /**
     * Reads the given file and returns its raw contents as a Buffer.
     */ async read (file) {
        let path;
        try {
            path = url.toFileSystemPath(file.url);
        } catch (err) {
            throw new errors_js_1.ResolverError(ono_1.ono.uri(err, `Malformed URI: ${file.url}`), file.url);
        }
        try {
            return await fs_1.default.promises.readFile(path);
        } catch (err) {
            throw new errors_js_1.ResolverError((0, ono_1.ono)(err, `Error opening file "${path}"`), path);
        }
    }
};
}),
"[project]/node_modules/.pnpm/@apidevtools+json-schema-ref-parser@11.9.3/node_modules/@apidevtools/json-schema-ref-parser/dist/lib/resolvers/http.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __createBinding = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __setModuleDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var __importStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importStar || function() {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function(o) {
            var ar = [];
            for(var k in o)if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) {
            for(var k = ownKeys(mod), i = 0; i < k.length; i++)if (k[i] !== "default") __createBinding(result, mod, k[i]);
        }
        __setModuleDefault(result, mod);
        return result;
    };
}();
Object.defineProperty(exports, "__esModule", {
    value: true
});
const ono_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@jsdevtools+ono@7.1.3/node_modules/@jsdevtools/ono/esm/index.js [app-rsc] (ecmascript)");
const url = __importStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@apidevtools+json-schema-ref-parser@11.9.3/node_modules/@apidevtools/json-schema-ref-parser/dist/lib/util/url.js [app-rsc] (ecmascript)"));
const errors_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@apidevtools+json-schema-ref-parser@11.9.3/node_modules/@apidevtools/json-schema-ref-parser/dist/lib/util/errors.js [app-rsc] (ecmascript)");
exports.default = {
    /**
     * The order that this resolver will run, in relation to other resolvers.
     */ order: 200,
    /**
     * HTTP headers to send when downloading files.
     *
     * @example:
     * {
     *   "User-Agent": "JSON Schema $Ref Parser",
     *   Accept: "application/json"
     * }
     */ headers: null,
    /**
     * HTTP request timeout (in milliseconds).
     */ timeout: 60000,
    /**
     * The maximum number of HTTP redirects to follow.
     * To disable automatic following of redirects, set this to zero.
     */ redirects: 5,
    /**
     * The `withCredentials` option of XMLHttpRequest.
     * Set this to `true` if you're downloading files from a CORS-enabled server that requires authentication
     */ withCredentials: false,
    /**
     * Determines whether this resolver can read a given file reference.
     * Resolvers that return true will be tried in order, until one successfully resolves the file.
     * Resolvers that return false will not be given a chance to resolve the file.
     */ canRead (file) {
        return url.isHttp(file.url);
    },
    /**
     * Reads the given URL and returns its raw contents as a Buffer.
     */ read (file) {
        const u = url.parse(file.url);
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        return download(u, this);
    }
};
/**
 * Downloads the given file.
 * @returns
 * The promise resolves with the raw downloaded data, or rejects if there is an HTTP error.
 */ async function download(u, httpOptions, _redirects) {
    u = url.parse(u);
    const redirects = _redirects || [];
    redirects.push(u.href);
    try {
        const res = await get(u, httpOptions);
        if (res.status >= 400) {
            throw (0, ono_1.ono)({
                status: res.status
            }, `HTTP ERROR ${res.status}`);
        } else if (res.status >= 300) {
            if (!Number.isNaN(httpOptions.redirects) && redirects.length > httpOptions.redirects) {
                throw new errors_js_1.ResolverError((0, ono_1.ono)({
                    status: res.status
                }, `Error downloading ${redirects[0]}. \nToo many redirects: \n  ${redirects.join(" \n  ")}`));
            } else if (!("location" in res.headers) || !res.headers.location) {
                throw (0, ono_1.ono)({
                    status: res.status
                }, `HTTP ${res.status} redirect with no location header`);
            } else {
                const redirectTo = url.resolve(u.href, res.headers.location);
                return download(redirectTo, httpOptions, redirects);
            }
        } else {
            if (res.body) {
                const buf = await res.arrayBuffer();
                return Buffer.from(buf);
            }
            return Buffer.alloc(0);
        }
    } catch (err) {
        throw new errors_js_1.ResolverError((0, ono_1.ono)(err, `Error downloading ${u.href}`), u.href);
    }
}
/**
 * Sends an HTTP GET request.
 * The promise resolves with the HTTP Response object.
 */ async function get(u, httpOptions) {
    let controller;
    let timeoutId;
    if (httpOptions.timeout) {
        controller = new AbortController();
        timeoutId = setTimeout(()=>controller.abort(), httpOptions.timeout);
    }
    const response = await fetch(u, {
        method: "GET",
        headers: httpOptions.headers || {},
        credentials: httpOptions.withCredentials ? "include" : "same-origin",
        signal: controller ? controller.signal : null
    });
    if (timeoutId) {
        clearTimeout(timeoutId);
    }
    return response;
}
}),
"[project]/node_modules/.pnpm/@apidevtools+json-schema-ref-parser@11.9.3/node_modules/@apidevtools/json-schema-ref-parser/dist/lib/options.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getNewOptions = exports.getJsonSchemaRefParserDefaultOptions = void 0;
const json_js_1 = __importDefault(__turbopack_context__.r("[project]/node_modules/.pnpm/@apidevtools+json-schema-ref-parser@11.9.3/node_modules/@apidevtools/json-schema-ref-parser/dist/lib/parsers/json.js [app-rsc] (ecmascript)"));
const yaml_js_1 = __importDefault(__turbopack_context__.r("[project]/node_modules/.pnpm/@apidevtools+json-schema-ref-parser@11.9.3/node_modules/@apidevtools/json-schema-ref-parser/dist/lib/parsers/yaml.js [app-rsc] (ecmascript)"));
const text_js_1 = __importDefault(__turbopack_context__.r("[project]/node_modules/.pnpm/@apidevtools+json-schema-ref-parser@11.9.3/node_modules/@apidevtools/json-schema-ref-parser/dist/lib/parsers/text.js [app-rsc] (ecmascript)"));
const binary_js_1 = __importDefault(__turbopack_context__.r("[project]/node_modules/.pnpm/@apidevtools+json-schema-ref-parser@11.9.3/node_modules/@apidevtools/json-schema-ref-parser/dist/lib/parsers/binary.js [app-rsc] (ecmascript)"));
const file_js_1 = __importDefault(__turbopack_context__.r("[project]/node_modules/.pnpm/@apidevtools+json-schema-ref-parser@11.9.3/node_modules/@apidevtools/json-schema-ref-parser/dist/lib/resolvers/file.js [app-rsc] (ecmascript)"));
const http_js_1 = __importDefault(__turbopack_context__.r("[project]/node_modules/.pnpm/@apidevtools+json-schema-ref-parser@11.9.3/node_modules/@apidevtools/json-schema-ref-parser/dist/lib/resolvers/http.js [app-rsc] (ecmascript)"));
const getJsonSchemaRefParserDefaultOptions = ()=>{
    const defaults = {
        /**
         * Determines how different types of files will be parsed.
         *
         * You can add additional parsers of your own, replace an existing one with
         * your own implementation, or disable any parser by setting it to false.
         */ parse: {
            json: {
                ...json_js_1.default
            },
            yaml: {
                ...yaml_js_1.default
            },
            text: {
                ...text_js_1.default
            },
            binary: {
                ...binary_js_1.default
            }
        },
        /**
         * Determines how JSON References will be resolved.
         *
         * You can add additional resolvers of your own, replace an existing one with
         * your own implementation, or disable any resolver by setting it to false.
         */ resolve: {
            file: {
                ...file_js_1.default
            },
            http: {
                ...http_js_1.default
            },
            /**
             * Determines whether external $ref pointers will be resolved.
             * If this option is disabled, then none of above resolvers will be called.
             * Instead, external $ref pointers will simply be ignored.
             *
             * @type {boolean}
             */ external: true
        },
        /**
         * By default, JSON Schema $Ref Parser throws the first error it encounters. Setting `continueOnError` to `true`
         * causes it to keep processing as much as possible and then throw a single error that contains all errors
         * that were encountered.
         */ continueOnError: false,
        /**
         * Determines the types of JSON references that are allowed.
         */ dereference: {
            /**
             * Dereference circular (recursive) JSON references?
             * If false, then a {@link ReferenceError} will be thrown if a circular reference is found.
             * If "ignore", then circular references will not be dereferenced.
             *
             * @type {boolean|string}
             */ circular: true,
            /**
             * A function, called for each path, which can return true to stop this path and all
             * subpaths from being dereferenced further. This is useful in schemas where some
             * subpaths contain literal $ref keys that should not be dereferenced.
             *
             * @type {function}
             */ excludedPathMatcher: ()=>false,
            referenceResolution: "relative"
        },
        mutateInputSchema: true
    };
    return defaults;
};
exports.getJsonSchemaRefParserDefaultOptions = getJsonSchemaRefParserDefaultOptions;
const getNewOptions = (options)=>{
    const newOptions = (0, exports.getJsonSchemaRefParserDefaultOptions)();
    if (options) {
        merge(newOptions, options);
    }
    return newOptions;
};
exports.getNewOptions = getNewOptions;
/**
 * Merges the properties of the source object into the target object.
 *
 * @param target - The object that we're populating
 * @param source - The options that are being merged
 * @returns
 */ function merge(target, source) {
    if (isMergeable(source)) {
        // prevent prototype pollution
        const keys = Object.keys(source).filter((key)=>![
                "__proto__",
                "constructor",
                "prototype"
            ].includes(key));
        for(let i = 0; i < keys.length; i++){
            const key = keys[i];
            const sourceSetting = source[key];
            const targetSetting = target[key];
            if (isMergeable(sourceSetting)) {
                // It's a nested object, so merge it recursively
                target[key] = merge(targetSetting || {}, sourceSetting);
            } else if (sourceSetting !== undefined) {
                // It's a scalar value, function, or array. No merging necessary. Just overwrite the target value.
                target[key] = sourceSetting;
            }
        }
    }
    return target;
}
/**
 * Determines whether the given value can be merged,
 * or if it is a scalar value that should just override the target value.
 *
 * @param val
 * @returns
 */ function isMergeable(val) {
    return val && typeof val === "object" && !Array.isArray(val) && !(val instanceof RegExp) && !(val instanceof Date);
}
}),
"[project]/node_modules/.pnpm/@apidevtools+json-schema-ref-parser@11.9.3/node_modules/@apidevtools/json-schema-ref-parser/dist/lib/normalize-args.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.normalizeArgs = normalizeArgs;
const options_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@apidevtools+json-schema-ref-parser@11.9.3/node_modules/@apidevtools/json-schema-ref-parser/dist/lib/options.js [app-rsc] (ecmascript)");
/**
 * Normalizes the given arguments, accounting for optional args.
 */ function normalizeArgs(_args) {
    let path;
    let schema;
    let options;
    let callback;
    const args = Array.prototype.slice.call(_args);
    if (typeof args[args.length - 1] === "function") {
        // The last parameter is a callback function
        callback = args.pop();
    }
    if (typeof args[0] === "string") {
        // The first parameter is the path
        path = args[0];
        if (typeof args[2] === "object") {
            // The second parameter is the schema, and the third parameter is the options
            schema = args[1];
            options = args[2];
        } else {
            // The second parameter is the options
            schema = undefined;
            options = args[1];
        }
    } else {
        // The first parameter is the schema
        path = "";
        schema = args[0];
        options = args[1];
    }
    try {
        options = (0, options_js_1.getNewOptions)(options);
    } catch (e) {
        console.error(`JSON Schema Ref Parser: Error normalizing options: ${e}`);
    }
    if (!options.mutateInputSchema && typeof schema === "object") {
        // Make a deep clone of the schema, so that we don't alter the original object
        schema = JSON.parse(JSON.stringify(schema));
    }
    return {
        path,
        schema,
        options,
        callback
    };
}
exports.default = normalizeArgs;
}),
"[project]/node_modules/.pnpm/@apidevtools+json-schema-ref-parser@11.9.3/node_modules/@apidevtools/json-schema-ref-parser/dist/lib/resolve-external.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __createBinding = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __setModuleDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var __importStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importStar || function() {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function(o) {
            var ar = [];
            for(var k in o)if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) {
            for(var k = ownKeys(mod), i = 0; i < k.length; i++)if (k[i] !== "default") __createBinding(result, mod, k[i]);
        }
        __setModuleDefault(result, mod);
        return result;
    };
}();
var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
const ref_js_1 = __importDefault(__turbopack_context__.r("[project]/node_modules/.pnpm/@apidevtools+json-schema-ref-parser@11.9.3/node_modules/@apidevtools/json-schema-ref-parser/dist/lib/ref.js [app-rsc] (ecmascript)"));
const pointer_js_1 = __importDefault(__turbopack_context__.r("[project]/node_modules/.pnpm/@apidevtools+json-schema-ref-parser@11.9.3/node_modules/@apidevtools/json-schema-ref-parser/dist/lib/pointer.js [app-rsc] (ecmascript)"));
const parse_js_1 = __importDefault(__turbopack_context__.r("[project]/node_modules/.pnpm/@apidevtools+json-schema-ref-parser@11.9.3/node_modules/@apidevtools/json-schema-ref-parser/dist/lib/parse.js [app-rsc] (ecmascript)"));
const url = __importStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@apidevtools+json-schema-ref-parser@11.9.3/node_modules/@apidevtools/json-schema-ref-parser/dist/lib/util/url.js [app-rsc] (ecmascript)"));
const errors_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@apidevtools+json-schema-ref-parser@11.9.3/node_modules/@apidevtools/json-schema-ref-parser/dist/lib/util/errors.js [app-rsc] (ecmascript)");
/**
 * Crawls the JSON schema, finds all external JSON references, and resolves their values.
 * This method does not mutate the JSON schema. The resolved values are added to {@link $RefParser#$refs}.
 *
 * NOTE: We only care about EXTERNAL references here. INTERNAL references are only relevant when dereferencing.
 *
 * @returns
 * The promise resolves once all JSON references in the schema have been resolved,
 * including nested references that are contained in externally-referenced files.
 */ function resolveExternal(parser, options) {
    if (!options.resolve?.external) {
        // Nothing to resolve, so exit early
        return Promise.resolve();
    }
    try {
        // console.log('Resolving $ref pointers in %s', parser.$refs._root$Ref.path);
        const promises = crawl(parser.schema, parser.$refs._root$Ref.path + "#", parser.$refs, options);
        return Promise.all(promises);
    } catch (e) {
        return Promise.reject(e);
    }
}
/**
 * Recursively crawls the given value, and resolves any external JSON references.
 *
 * @param obj - The value to crawl. If it's not an object or array, it will be ignored.
 * @param path - The full path of `obj`, possibly with a JSON Pointer in the hash
 * @param {boolean} external - Whether `obj` was found in an external document.
 * @param $refs
 * @param options
 * @param seen - Internal.
 *
 * @returns
 * Returns an array of promises. There will be one promise for each JSON reference in `obj`.
 * If `obj` does not contain any JSON references, then the array will be empty.
 * If any of the JSON references point to files that contain additional JSON references,
 * then the corresponding promise will internally reference an array of promises.
 */ function crawl(obj, path, $refs, options, seen, external) {
    seen || (seen = new Set());
    let promises = [];
    if (obj && typeof obj === "object" && !ArrayBuffer.isView(obj) && !seen.has(obj)) {
        seen.add(obj); // Track previously seen objects to avoid infinite recursion
        if (ref_js_1.default.isExternal$Ref(obj)) {
            promises.push(resolve$Ref(obj, path, $refs, options));
        }
        const keys = Object.keys(obj);
        for (const key of keys){
            const keyPath = pointer_js_1.default.join(path, key);
            const value = obj[key];
            promises = promises.concat(crawl(value, keyPath, $refs, options, seen, external));
        }
    }
    return promises;
}
/**
 * Resolves the given JSON Reference, and then crawls the resulting value.
 *
 * @param $ref - The JSON Reference to resolve
 * @param path - The full path of `$ref`, possibly with a JSON Pointer in the hash
 * @param $refs
 * @param options
 *
 * @returns
 * The promise resolves once all JSON references in the object have been resolved,
 * including nested references that are contained in externally-referenced files.
 */ async function resolve$Ref($ref, path, $refs, options) {
    const shouldResolveOnCwd = options.dereference?.externalReferenceResolution === "root";
    const resolvedPath = url.resolve(shouldResolveOnCwd ? url.cwd() : path, $ref.$ref);
    const withoutHash = url.stripHash(resolvedPath);
    // $ref.$ref = url.relative($refs._root$Ref.path, resolvedPath);
    // Do we already have this $ref?
    const ref = $refs._$refs[withoutHash];
    if (ref) {
        // We've already parsed this $ref, so use the existing value
        return Promise.resolve(ref.value);
    }
    // Parse the $referenced file/url
    try {
        const result = await (0, parse_js_1.default)(resolvedPath, $refs, options);
        // Crawl the parsed value
        // console.log('Resolving $ref pointers in %s', withoutHash);
        const promises = crawl(result, withoutHash + "#", $refs, options, new Set(), true);
        return Promise.all(promises);
    } catch (err) {
        if (!options?.continueOnError || !(0, errors_js_1.isHandledError)(err)) {
            throw err;
        }
        if ($refs._$refs[withoutHash]) {
            err.source = decodeURI(url.stripHash(path));
            err.path = url.safePointerToPath(url.getHash(path));
        }
        return [];
    }
}
exports.default = resolveExternal;
}),
"[project]/node_modules/.pnpm/@apidevtools+json-schema-ref-parser@11.9.3/node_modules/@apidevtools/json-schema-ref-parser/dist/lib/bundle.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __createBinding = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __setModuleDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var __importStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importStar || function() {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function(o) {
            var ar = [];
            for(var k in o)if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) {
            for(var k = ownKeys(mod), i = 0; i < k.length; i++)if (k[i] !== "default") __createBinding(result, mod, k[i]);
        }
        __setModuleDefault(result, mod);
        return result;
    };
}();
var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
const ref_js_1 = __importDefault(__turbopack_context__.r("[project]/node_modules/.pnpm/@apidevtools+json-schema-ref-parser@11.9.3/node_modules/@apidevtools/json-schema-ref-parser/dist/lib/ref.js [app-rsc] (ecmascript)"));
const pointer_js_1 = __importDefault(__turbopack_context__.r("[project]/node_modules/.pnpm/@apidevtools+json-schema-ref-parser@11.9.3/node_modules/@apidevtools/json-schema-ref-parser/dist/lib/pointer.js [app-rsc] (ecmascript)"));
const url = __importStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@apidevtools+json-schema-ref-parser@11.9.3/node_modules/@apidevtools/json-schema-ref-parser/dist/lib/util/url.js [app-rsc] (ecmascript)"));
/**
 * Bundles all external JSON references into the main JSON schema, thus resulting in a schema that
 * only has *internal* references, not any *external* references.
 * This method mutates the JSON schema object, adding new references and re-mapping existing ones.
 *
 * @param parser
 * @param options
 */ function bundle(parser, options) {
    // console.log('Bundling $ref pointers in %s', parser.$refs._root$Ref.path);
    // Build an inventory of all $ref pointers in the JSON Schema
    const inventory = [];
    crawl(parser, "schema", parser.$refs._root$Ref.path + "#", "#", 0, inventory, parser.$refs, options);
    // Remap all $ref pointers
    remap(inventory);
}
/**
 * Recursively crawls the given value, and inventories all JSON references.
 *
 * @param parent - The object containing the value to crawl. If the value is not an object or array, it will be ignored.
 * @param key - The property key of `parent` to be crawled
 * @param path - The full path of the property being crawled, possibly with a JSON Pointer in the hash
 * @param pathFromRoot - The path of the property being crawled, from the schema root
 * @param indirections
 * @param inventory - An array of already-inventoried $ref pointers
 * @param $refs
 * @param options
 */ function crawl(parent, key, path, pathFromRoot, indirections, inventory, $refs, options) {
    const obj = key === null ? parent : parent[key];
    if (obj && typeof obj === "object" && !ArrayBuffer.isView(obj)) {
        if (ref_js_1.default.isAllowed$Ref(obj)) {
            inventory$Ref(parent, key, path, pathFromRoot, indirections, inventory, $refs, options);
        } else {
            // Crawl the object in a specific order that's optimized for bundling.
            // This is important because it determines how `pathFromRoot` gets built,
            // which later determines which keys get dereferenced and which ones get remapped
            const keys = Object.keys(obj).sort((a, b)=>{
                // Most people will expect references to be bundled into the the "definitions" property,
                // so we always crawl that property first, if it exists.
                if (a === "definitions") {
                    return -1;
                } else if (b === "definitions") {
                    return 1;
                } else {
                    // Otherwise, crawl the keys based on their length.
                    // This produces the shortest possible bundled references
                    return a.length - b.length;
                }
            });
            for (const key of keys){
                const keyPath = pointer_js_1.default.join(path, key);
                const keyPathFromRoot = pointer_js_1.default.join(pathFromRoot, key);
                const value = obj[key];
                if (ref_js_1.default.isAllowed$Ref(value)) {
                    inventory$Ref(obj, key, path, keyPathFromRoot, indirections, inventory, $refs, options);
                } else {
                    crawl(obj, key, keyPath, keyPathFromRoot, indirections, inventory, $refs, options);
                }
            }
        }
    }
}
/**
 * Inventories the given JSON Reference (i.e. records detailed information about it so we can
 * optimize all $refs in the schema), and then crawls the resolved value.
 *
 * @param $refParent - The object that contains a JSON Reference as one of its keys
 * @param $refKey - The key in `$refParent` that is a JSON Reference
 * @param path - The full path of the JSON Reference at `$refKey`, possibly with a JSON Pointer in the hash
 * @param indirections - unknown
 * @param pathFromRoot - The path of the JSON Reference at `$refKey`, from the schema root
 * @param inventory - An array of already-inventoried $ref pointers
 * @param $refs
 * @param options
 */ function inventory$Ref($refParent, $refKey, path, pathFromRoot, indirections, inventory, $refs, options) {
    const $ref = $refKey === null ? $refParent : $refParent[$refKey];
    const $refPath = url.resolve(path, $ref.$ref);
    const pointer = $refs._resolve($refPath, pathFromRoot, options);
    if (pointer === null) {
        return;
    }
    const parsed = pointer_js_1.default.parse(pathFromRoot);
    const depth = parsed.length;
    const file = url.stripHash(pointer.path);
    const hash = url.getHash(pointer.path);
    const external = file !== $refs._root$Ref.path;
    const extended = ref_js_1.default.isExtended$Ref($ref);
    indirections += pointer.indirections;
    const existingEntry = findInInventory(inventory, $refParent, $refKey);
    if (existingEntry) {
        // This $Ref has already been inventoried, so we don't need to process it again
        if (depth < existingEntry.depth || indirections < existingEntry.indirections) {
            removeFromInventory(inventory, existingEntry);
        } else {
            return;
        }
    }
    inventory.push({
        $ref,
        parent: $refParent,
        key: $refKey,
        pathFromRoot,
        depth,
        file,
        hash,
        value: pointer.value,
        circular: pointer.circular,
        extended,
        external,
        indirections
    });
    // Recursively crawl the resolved value
    if (!existingEntry || external) {
        crawl(pointer.value, null, pointer.path, pathFromRoot, indirections + 1, inventory, $refs, options);
    }
}
/**
 * Re-maps every $ref pointer, so that they're all relative to the root of the JSON Schema.
 * Each referenced value is dereferenced EXACTLY ONCE.  All subsequent references to the same
 * value are re-mapped to point to the first reference.
 *
 * @example: {
 *    first: { $ref: somefile.json#/some/part },
 *    second: { $ref: somefile.json#/another/part },
 *    third: { $ref: somefile.json },
 *    fourth: { $ref: somefile.json#/some/part/sub/part }
 *  }
 *
 * In this example, there are four references to the same file, but since the third reference points
 * to the ENTIRE file, that's the only one we need to dereference.  The other three can just be
 * remapped to point inside the third one.
 *
 * On the other hand, if the third reference DIDN'T exist, then the first and second would both need
 * to be dereferenced, since they point to different parts of the file. The fourth reference does NOT
 * need to be dereferenced, because it can be remapped to point inside the first one.
 *
 * @param inventory
 */ function remap(inventory) {
    // Group & sort all the $ref pointers, so they're in the order that we need to dereference/remap them
    inventory.sort((a, b)=>{
        if (a.file !== b.file) {
            // Group all the $refs that point to the same file
            return a.file < b.file ? -1 : +1;
        } else if (a.hash !== b.hash) {
            // Group all the $refs that point to the same part of the file
            return a.hash < b.hash ? -1 : +1;
        } else if (a.circular !== b.circular) {
            // If the $ref points to itself, then sort it higher than other $refs that point to this $ref
            return a.circular ? -1 : +1;
        } else if (a.extended !== b.extended) {
            // If the $ref extends the resolved value, then sort it lower than other $refs that don't extend the value
            return a.extended ? +1 : -1;
        } else if (a.indirections !== b.indirections) {
            // Sort direct references higher than indirect references
            return a.indirections - b.indirections;
        } else if (a.depth !== b.depth) {
            // Sort $refs by how close they are to the JSON Schema root
            return a.depth - b.depth;
        } else {
            // Determine how far each $ref is from the "definitions" property.
            // Most people will expect references to be bundled into the the "definitions" property if possible.
            const aDefinitionsIndex = a.pathFromRoot.lastIndexOf("/definitions");
            const bDefinitionsIndex = b.pathFromRoot.lastIndexOf("/definitions");
            if (aDefinitionsIndex !== bDefinitionsIndex) {
                // Give higher priority to the $ref that's closer to the "definitions" property
                return bDefinitionsIndex - aDefinitionsIndex;
            } else {
                // All else is equal, so use the shorter path, which will produce the shortest possible reference
                return a.pathFromRoot.length - b.pathFromRoot.length;
            }
        }
    });
    let file, hash, pathFromRoot;
    for (const entry of inventory){
        // console.log('Re-mapping $ref pointer "%s" at %s', entry.$ref.$ref, entry.pathFromRoot);
        if (!entry.external) {
            // This $ref already resolves to the main JSON Schema file
            entry.$ref.$ref = entry.hash;
        } else if (entry.file === file && entry.hash === hash) {
            // This $ref points to the same value as the prevous $ref, so remap it to the same path
            entry.$ref.$ref = pathFromRoot;
        } else if (entry.file === file && entry.hash.indexOf(hash + "/") === 0) {
            // This $ref points to a sub-value of the prevous $ref, so remap it beneath that path
            entry.$ref.$ref = pointer_js_1.default.join(pathFromRoot, pointer_js_1.default.parse(entry.hash.replace(hash, "#")));
        } else {
            // We've moved to a new file or new hash
            file = entry.file;
            hash = entry.hash;
            pathFromRoot = entry.pathFromRoot;
            // This is the first $ref to point to this value, so dereference the value.
            // Any other $refs that point to the same value will point to this $ref instead
            entry.$ref = entry.parent[entry.key] = ref_js_1.default.dereference(entry.$ref, entry.value);
            if (entry.circular) {
                // This $ref points to itself
                entry.$ref.$ref = entry.pathFromRoot;
            }
        }
    }
// we want to ensure that any $refs that point to another $ref are remapped to point to the final value
// let hadChange = true;
// while (hadChange) {
//   hadChange = false;
//   for (const entry of inventory) {
//     if (entry.$ref && typeof entry.$ref === "object" && "$ref" in entry.$ref) {
//       const resolved = inventory.find((e: InventoryEntry) => e.pathFromRoot === entry.$ref.$ref);
//       if (resolved) {
//         const resolvedPointsToAnotherRef =
//           resolved.$ref && typeof resolved.$ref === "object" && "$ref" in resolved.$ref;
//         if (resolvedPointsToAnotherRef && entry.$ref.$ref !== resolved.$ref.$ref) {
//           // console.log('Re-mapping $ref pointer "%s" at %s', entry.$ref.$ref, entry.pathFromRoot);
//           entry.$ref.$ref = resolved.$ref.$ref;
//           hadChange = true;
//         }
//       }
//     }
//   }
// }
}
/**
 * TODO
 */ function findInInventory(inventory, $refParent, $refKey) {
    for (const existingEntry of inventory){
        if (existingEntry && existingEntry.parent === $refParent && existingEntry.key === $refKey) {
            return existingEntry;
        }
    }
    return undefined;
}
function removeFromInventory(inventory, entry) {
    const index = inventory.indexOf(entry);
    inventory.splice(index, 1);
}
exports.default = bundle;
}),
"[project]/node_modules/.pnpm/@apidevtools+json-schema-ref-parser@11.9.3/node_modules/@apidevtools/json-schema-ref-parser/dist/lib/dereference.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __createBinding = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __setModuleDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var __importStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importStar || function() {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function(o) {
            var ar = [];
            for(var k in o)if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) {
            for(var k = ownKeys(mod), i = 0; i < k.length; i++)if (k[i] !== "default") __createBinding(result, mod, k[i]);
        }
        __setModuleDefault(result, mod);
        return result;
    };
}();
var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
const ref_js_1 = __importDefault(__turbopack_context__.r("[project]/node_modules/.pnpm/@apidevtools+json-schema-ref-parser@11.9.3/node_modules/@apidevtools/json-schema-ref-parser/dist/lib/ref.js [app-rsc] (ecmascript)"));
const pointer_js_1 = __importDefault(__turbopack_context__.r("[project]/node_modules/.pnpm/@apidevtools+json-schema-ref-parser@11.9.3/node_modules/@apidevtools/json-schema-ref-parser/dist/lib/pointer.js [app-rsc] (ecmascript)"));
const ono_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@jsdevtools+ono@7.1.3/node_modules/@jsdevtools/ono/esm/index.js [app-rsc] (ecmascript)");
const url = __importStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@apidevtools+json-schema-ref-parser@11.9.3/node_modules/@apidevtools/json-schema-ref-parser/dist/lib/util/url.js [app-rsc] (ecmascript)"));
const errors_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@apidevtools+json-schema-ref-parser@11.9.3/node_modules/@apidevtools/json-schema-ref-parser/dist/lib/util/errors.js [app-rsc] (ecmascript)");
exports.default = dereference;
/**
 * Crawls the JSON schema, finds all JSON references, and dereferences them.
 * This method mutates the JSON schema object, replacing JSON references with their resolved value.
 *
 * @param parser
 * @param options
 */ function dereference(parser, options) {
    const start = Date.now();
    // console.log('Dereferencing $ref pointers in %s', parser.$refs._root$Ref.path);
    const dereferenced = crawl(parser.schema, parser.$refs._root$Ref.path, "#", new Set(), new Set(), new Map(), parser.$refs, options, start);
    parser.$refs.circular = dereferenced.circular;
    parser.schema = dereferenced.value;
}
/**
 * Recursively crawls the given value, and dereferences any JSON references.
 *
 * @param obj - The value to crawl. If it's not an object or array, it will be ignored.
 * @param path - The full path of `obj`, possibly with a JSON Pointer in the hash
 * @param pathFromRoot - The path of `obj` from the schema root
 * @param parents - An array of the parent objects that have already been dereferenced
 * @param processedObjects - An array of all the objects that have already been processed
 * @param dereferencedCache - An map of all the dereferenced objects
 * @param $refs
 * @param options
 * @param startTime - The time when the dereferencing started
 * @returns
 */ function crawl(obj, path, pathFromRoot, parents, processedObjects, dereferencedCache, $refs, options, startTime) {
    let dereferenced;
    const result = {
        value: obj,
        circular: false
    };
    if (options && options.timeoutMs) {
        if (Date.now() - startTime > options.timeoutMs) {
            throw new errors_1.TimeoutError(options.timeoutMs);
        }
    }
    const derefOptions = options.dereference || {};
    const isExcludedPath = derefOptions.excludedPathMatcher || (()=>false);
    if (derefOptions?.circular === "ignore" || !processedObjects.has(obj)) {
        if (obj && typeof obj === "object" && !ArrayBuffer.isView(obj) && !isExcludedPath(pathFromRoot)) {
            parents.add(obj);
            processedObjects.add(obj);
            if (ref_js_1.default.isAllowed$Ref(obj, options)) {
                dereferenced = dereference$Ref(obj, path, pathFromRoot, parents, processedObjects, dereferencedCache, $refs, options, startTime);
                result.circular = dereferenced.circular;
                result.value = dereferenced.value;
            } else {
                for (const key of Object.keys(obj)){
                    const keyPath = pointer_js_1.default.join(path, key);
                    const keyPathFromRoot = pointer_js_1.default.join(pathFromRoot, key);
                    if (isExcludedPath(keyPathFromRoot)) {
                        continue;
                    }
                    const value = obj[key];
                    let circular = false;
                    if (ref_js_1.default.isAllowed$Ref(value, options)) {
                        dereferenced = dereference$Ref(value, keyPath, keyPathFromRoot, parents, processedObjects, dereferencedCache, $refs, options, startTime);
                        circular = dereferenced.circular;
                        // Avoid pointless mutations; breaks frozen objects to no profit
                        if (obj[key] !== dereferenced.value) {
                            // If we have properties we want to preserve from our dereferenced schema then we need
                            // to copy them over to our new object.
                            const preserved = new Map();
                            if (derefOptions?.preservedProperties) {
                                if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
                                    derefOptions?.preservedProperties.forEach((prop)=>{
                                        if (prop in obj[key]) {
                                            preserved.set(prop, obj[key][prop]);
                                        }
                                    });
                                }
                            }
                            obj[key] = dereferenced.value;
                            // If we have data to preserve and our dereferenced object is still an object then
                            // we need copy back our preserved data into our dereferenced schema.
                            if (derefOptions?.preservedProperties) {
                                if (preserved.size && typeof obj[key] === "object" && !Array.isArray(obj[key])) {
                                    preserved.forEach((value, prop)=>{
                                        obj[key][prop] = value;
                                    });
                                }
                            }
                            derefOptions?.onDereference?.(value.$ref, obj[key], obj, key);
                        }
                    } else {
                        if (!parents.has(value)) {
                            dereferenced = crawl(value, keyPath, keyPathFromRoot, parents, processedObjects, dereferencedCache, $refs, options, startTime);
                            circular = dereferenced.circular;
                            // Avoid pointless mutations; breaks frozen objects to no profit
                            if (obj[key] !== dereferenced.value) {
                                obj[key] = dereferenced.value;
                            }
                        } else {
                            circular = foundCircularReference(keyPath, $refs, options);
                        }
                    }
                    // Set the "isCircular" flag if this or any other property is circular
                    result.circular = result.circular || circular;
                }
            }
            parents.delete(obj);
        }
    }
    return result;
}
/**
 * Dereferences the given JSON Reference, and then crawls the resulting value.
 *
 * @param $ref - The JSON Reference to resolve
 * @param path - The full path of `$ref`, possibly with a JSON Pointer in the hash
 * @param pathFromRoot - The path of `$ref` from the schema root
 * @param parents - An array of the parent objects that have already been dereferenced
 * @param processedObjects - An array of all the objects that have already been dereferenced
 * @param dereferencedCache - An map of all the dereferenced objects
 * @param $refs
 * @param options
 * @returns
 */ function dereference$Ref($ref, path, pathFromRoot, parents, processedObjects, dereferencedCache, $refs, options, startTime) {
    const isExternalRef = ref_js_1.default.isExternal$Ref($ref);
    const shouldResolveOnCwd = isExternalRef && options?.dereference?.externalReferenceResolution === "root";
    const $refPath = url.resolve(shouldResolveOnCwd ? url.cwd() : path, $ref.$ref);
    const cache = dereferencedCache.get($refPath);
    if (cache && !cache.circular) {
        const refKeys = Object.keys($ref);
        if (refKeys.length > 1) {
            const extraKeys = {};
            for (const key of refKeys){
                if (key !== "$ref" && !(key in cache.value)) {
                    // @ts-expect-error TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
                    extraKeys[key] = $ref[key];
                }
            }
            return {
                circular: cache.circular,
                value: Object.assign({}, cache.value, extraKeys)
            };
        }
        return cache;
    }
    const pointer = $refs._resolve($refPath, path, options);
    if (pointer === null) {
        return {
            circular: false,
            value: null
        };
    }
    // Check for circular references
    const directCircular = pointer.circular;
    let circular = directCircular || parents.has(pointer.value);
    if (circular) {
        foundCircularReference(path, $refs, options);
    }
    // Dereference the JSON reference
    let dereferencedValue = ref_js_1.default.dereference($ref, pointer.value);
    // Crawl the dereferenced value (unless it's circular)
    if (!circular) {
        // Determine if the dereferenced value is circular
        const dereferenced = crawl(dereferencedValue, pointer.path, pathFromRoot, parents, processedObjects, dereferencedCache, $refs, options, startTime);
        circular = dereferenced.circular;
        dereferencedValue = dereferenced.value;
    }
    if (circular && !directCircular && options.dereference?.circular === "ignore") {
        // The user has chosen to "ignore" circular references, so don't change the value
        dereferencedValue = $ref;
    }
    if (directCircular) {
        // The pointer is a DIRECT circular reference (i.e. it references itself).
        // So replace the $ref path with the absolute path from the JSON Schema root
        dereferencedValue.$ref = pathFromRoot;
    }
    const dereferencedObject = {
        circular,
        value: dereferencedValue
    };
    // only cache if no extra properties than $ref
    if (Object.keys($ref).length === 1) {
        dereferencedCache.set($refPath, dereferencedObject);
    }
    return dereferencedObject;
}
/**
 * Called when a circular reference is found.
 * It sets the {@link $Refs#circular} flag, executes the options.dereference.onCircular callback,
 * and throws an error if options.dereference.circular is false.
 *
 * @param keyPath - The JSON Reference path of the circular reference
 * @param $refs
 * @param options
 * @returns - always returns true, to indicate that a circular reference was found
 */ function foundCircularReference(keyPath, $refs, options) {
    $refs.circular = true;
    options?.dereference?.onCircular?.(keyPath);
    if (!options.dereference.circular) {
        throw ono_1.ono.reference(`Circular $ref pointer found at ${keyPath}`);
    }
    return true;
}
}),
"[project]/node_modules/.pnpm/@apidevtools+json-schema-ref-parser@11.9.3/node_modules/@apidevtools/json-schema-ref-parser/dist/lib/util/next.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
function makeNext() {
    if (typeof process === "object" && typeof process.nextTick === "function") {
        return process.nextTick;
    } else if (typeof setImmediate === "function") {
        return setImmediate;
    } else {
        return function next(f) {
            setTimeout(f, 0);
        };
    }
}
exports.default = makeNext();
}),
"[project]/node_modules/.pnpm/@apidevtools+json-schema-ref-parser@11.9.3/node_modules/@apidevtools/json-schema-ref-parser/dist/lib/util/maybe.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = maybe;
const next_js_1 = __importDefault(__turbopack_context__.r("[project]/node_modules/.pnpm/@apidevtools+json-schema-ref-parser@11.9.3/node_modules/@apidevtools/json-schema-ref-parser/dist/lib/util/next.js [app-rsc] (ecmascript)"));
function maybe(cb, promise) {
    if (cb) {
        promise.then(function(result) {
            (0, next_js_1.default)(function() {
                cb(null, result);
            });
        }, function(err) {
            (0, next_js_1.default)(function() {
                cb(err);
            });
        });
        return undefined;
    } else {
        return promise;
    }
}
}),
"[project]/node_modules/.pnpm/@apidevtools+json-schema-ref-parser@11.9.3/node_modules/@apidevtools/json-schema-ref-parser/dist/lib/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __createBinding = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __setModuleDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var __importStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importStar || function() {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function(o) {
            var ar = [];
            for(var k in o)if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) {
            for(var k = ownKeys(mod), i = 0; i < k.length; i++)if (k[i] !== "default") __createBinding(result, mod, k[i]);
        }
        __setModuleDefault(result, mod);
        return result;
    };
}();
var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getJsonSchemaRefParserDefaultOptions = exports.jsonSchemaParserNormalizeArgs = exports.dereferenceInternal = exports.JSONParserErrorGroup = exports.isHandledError = exports.UnmatchedParserError = exports.ParserError = exports.ResolverError = exports.MissingPointerError = exports.InvalidPointerError = exports.JSONParserError = exports.UnmatchedResolverError = exports.dereference = exports.bundle = exports.resolve = exports.parse = exports.$RefParser = void 0;
const refs_js_1 = __importDefault(__turbopack_context__.r("[project]/node_modules/.pnpm/@apidevtools+json-schema-ref-parser@11.9.3/node_modules/@apidevtools/json-schema-ref-parser/dist/lib/refs.js [app-rsc] (ecmascript)"));
const parse_js_1 = __importDefault(__turbopack_context__.r("[project]/node_modules/.pnpm/@apidevtools+json-schema-ref-parser@11.9.3/node_modules/@apidevtools/json-schema-ref-parser/dist/lib/parse.js [app-rsc] (ecmascript)"));
const normalize_args_js_1 = __importDefault(__turbopack_context__.r("[project]/node_modules/.pnpm/@apidevtools+json-schema-ref-parser@11.9.3/node_modules/@apidevtools/json-schema-ref-parser/dist/lib/normalize-args.js [app-rsc] (ecmascript)"));
exports.jsonSchemaParserNormalizeArgs = normalize_args_js_1.default;
const resolve_external_js_1 = __importDefault(__turbopack_context__.r("[project]/node_modules/.pnpm/@apidevtools+json-schema-ref-parser@11.9.3/node_modules/@apidevtools/json-schema-ref-parser/dist/lib/resolve-external.js [app-rsc] (ecmascript)"));
const bundle_js_1 = __importDefault(__turbopack_context__.r("[project]/node_modules/.pnpm/@apidevtools+json-schema-ref-parser@11.9.3/node_modules/@apidevtools/json-schema-ref-parser/dist/lib/bundle.js [app-rsc] (ecmascript)"));
const dereference_js_1 = __importDefault(__turbopack_context__.r("[project]/node_modules/.pnpm/@apidevtools+json-schema-ref-parser@11.9.3/node_modules/@apidevtools/json-schema-ref-parser/dist/lib/dereference.js [app-rsc] (ecmascript)"));
exports.dereferenceInternal = dereference_js_1.default;
const url = __importStar(__turbopack_context__.r("[project]/node_modules/.pnpm/@apidevtools+json-schema-ref-parser@11.9.3/node_modules/@apidevtools/json-schema-ref-parser/dist/lib/util/url.js [app-rsc] (ecmascript)"));
const errors_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@apidevtools+json-schema-ref-parser@11.9.3/node_modules/@apidevtools/json-schema-ref-parser/dist/lib/util/errors.js [app-rsc] (ecmascript)");
Object.defineProperty(exports, "JSONParserError", {
    enumerable: true,
    get: function() {
        return errors_js_1.JSONParserError;
    }
});
Object.defineProperty(exports, "InvalidPointerError", {
    enumerable: true,
    get: function() {
        return errors_js_1.InvalidPointerError;
    }
});
Object.defineProperty(exports, "MissingPointerError", {
    enumerable: true,
    get: function() {
        return errors_js_1.MissingPointerError;
    }
});
Object.defineProperty(exports, "ResolverError", {
    enumerable: true,
    get: function() {
        return errors_js_1.ResolverError;
    }
});
Object.defineProperty(exports, "ParserError", {
    enumerable: true,
    get: function() {
        return errors_js_1.ParserError;
    }
});
Object.defineProperty(exports, "UnmatchedParserError", {
    enumerable: true,
    get: function() {
        return errors_js_1.UnmatchedParserError;
    }
});
Object.defineProperty(exports, "UnmatchedResolverError", {
    enumerable: true,
    get: function() {
        return errors_js_1.UnmatchedResolverError;
    }
});
Object.defineProperty(exports, "isHandledError", {
    enumerable: true,
    get: function() {
        return errors_js_1.isHandledError;
    }
});
Object.defineProperty(exports, "JSONParserErrorGroup", {
    enumerable: true,
    get: function() {
        return errors_js_1.JSONParserErrorGroup;
    }
});
const ono_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@jsdevtools+ono@7.1.3/node_modules/@jsdevtools/ono/esm/index.js [app-rsc] (ecmascript)");
const maybe_js_1 = __importDefault(__turbopack_context__.r("[project]/node_modules/.pnpm/@apidevtools+json-schema-ref-parser@11.9.3/node_modules/@apidevtools/json-schema-ref-parser/dist/lib/util/maybe.js [app-rsc] (ecmascript)"));
const options_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@apidevtools+json-schema-ref-parser@11.9.3/node_modules/@apidevtools/json-schema-ref-parser/dist/lib/options.js [app-rsc] (ecmascript)");
Object.defineProperty(exports, "getJsonSchemaRefParserDefaultOptions", {
    enumerable: true,
    get: function() {
        return options_js_1.getJsonSchemaRefParserDefaultOptions;
    }
});
/**
 * This class parses a JSON schema, builds a map of its JSON references and their resolved values,
 * and provides methods for traversing, manipulating, and dereferencing those references.
 *
 * @class
 */ class $RefParser {
    constructor(){
        /**
         * The parsed (and possibly dereferenced) JSON schema object
         *
         * @type {object}
         * @readonly
         */ this.schema = null;
        /**
         * The resolved JSON references
         *
         * @type {$Refs}
         * @readonly
         */ this.$refs = new refs_js_1.default();
    }
    async parse() {
        const args = (0, normalize_args_js_1.default)(arguments);
        let promise;
        if (!args.path && !args.schema) {
            const err = (0, ono_1.ono)(`Expected a file path, URL, or object. Got ${args.path || args.schema}`);
            return (0, maybe_js_1.default)(args.callback, Promise.reject(err));
        }
        // Reset everything
        this.schema = null;
        this.$refs = new refs_js_1.default();
        // If the path is a filesystem path, then convert it to a URL.
        // NOTE: According to the JSON Reference spec, these should already be URLs,
        // but, in practice, many people use local filesystem paths instead.
        // So we're being generous here and doing the conversion automatically.
        // This is not intended to be a 100% bulletproof solution.
        // If it doesn't work for your use-case, then use a URL instead.
        let pathType = "http";
        if (url.isFileSystemPath(args.path)) {
            args.path = url.fromFileSystemPath(args.path);
            pathType = "file";
        } else if (!args.path && args.schema && "$id" in args.schema && args.schema.$id) {
            // when schema id has defined an URL should use that hostname to request the references,
            // instead of using the current page URL
            const params = url.parse(args.schema.$id);
            const port = params.protocol === "https:" ? 443 : 80;
            args.path = `${params.protocol}//${params.hostname}:${port}`;
        }
        // Resolve the absolute path of the schema
        args.path = url.resolve(url.cwd(), args.path);
        if (args.schema && typeof args.schema === "object") {
            // A schema object was passed-in.
            // So immediately add a new $Ref with the schema object as its value
            const $ref = this.$refs._add(args.path);
            $ref.value = args.schema;
            $ref.pathType = pathType;
            promise = Promise.resolve(args.schema);
        } else {
            // Parse the schema file/url
            promise = (0, parse_js_1.default)(args.path, this.$refs, args.options);
        }
        try {
            const result = await promise;
            if (result !== null && typeof result === "object" && !Buffer.isBuffer(result)) {
                this.schema = result;
                return (0, maybe_js_1.default)(args.callback, Promise.resolve(this.schema));
            } else if (args.options.continueOnError) {
                this.schema = null; // it's already set to null at line 79, but let's set it again for the sake of readability
                return (0, maybe_js_1.default)(args.callback, Promise.resolve(this.schema));
            } else {
                throw ono_1.ono.syntax(`"${this.$refs._root$Ref.path || result}" is not a valid JSON Schema`);
            }
        } catch (err) {
            if (!args.options.continueOnError || !(0, errors_js_1.isHandledError)(err)) {
                return (0, maybe_js_1.default)(args.callback, Promise.reject(err));
            }
            if (this.$refs._$refs[url.stripHash(args.path)]) {
                this.$refs._$refs[url.stripHash(args.path)].addError(err);
            }
            return (0, maybe_js_1.default)(args.callback, Promise.resolve(null));
        }
    }
    static parse() {
        const parser = new $RefParser();
        return parser.parse.apply(parser, arguments);
    }
    async resolve() {
        const args = (0, normalize_args_js_1.default)(arguments);
        try {
            await this.parse(args.path, args.schema, args.options);
            await (0, resolve_external_js_1.default)(this, args.options);
            finalize(this);
            return (0, maybe_js_1.default)(args.callback, Promise.resolve(this.$refs));
        } catch (err) {
            return (0, maybe_js_1.default)(args.callback, Promise.reject(err));
        }
    }
    static resolve() {
        const instance = new $RefParser();
        return instance.resolve.apply(instance, arguments);
    }
    static bundle() {
        const instance = new $RefParser();
        return instance.bundle.apply(instance, arguments);
    }
    async bundle() {
        const args = (0, normalize_args_js_1.default)(arguments);
        try {
            await this.resolve(args.path, args.schema, args.options);
            (0, bundle_js_1.default)(this, args.options);
            finalize(this);
            return (0, maybe_js_1.default)(args.callback, Promise.resolve(this.schema));
        } catch (err) {
            return (0, maybe_js_1.default)(args.callback, Promise.reject(err));
        }
    }
    static dereference() {
        const instance = new $RefParser();
        return instance.dereference.apply(instance, arguments);
    }
    async dereference() {
        const args = (0, normalize_args_js_1.default)(arguments);
        try {
            await this.resolve(args.path, args.schema, args.options);
            (0, dereference_js_1.default)(this, args.options);
            finalize(this);
            return (0, maybe_js_1.default)(args.callback, Promise.resolve(this.schema));
        } catch (err) {
            return (0, maybe_js_1.default)(args.callback, Promise.reject(err));
        }
    }
}
exports.$RefParser = $RefParser;
exports.default = $RefParser;
function finalize(parser) {
    const errors = errors_js_1.JSONParserErrorGroup.getParserErrors(parser);
    if (errors.length > 0) {
        throw new errors_js_1.JSONParserErrorGroup(parser);
    }
}
exports.parse = $RefParser.parse;
exports.resolve = $RefParser.resolve;
exports.bundle = $RefParser.bundle;
exports.dereference = $RefParser.dereference;
}),
];

//# sourceMappingURL=b7a4b_%40apidevtools_json-schema-ref-parser_dist_lib_ecafd030._.js.map