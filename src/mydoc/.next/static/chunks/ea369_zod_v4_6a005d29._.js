(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/registries.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "$ZodRegistry",
    ()=>$ZodRegistry,
    "$input",
    ()=>$input,
    "$output",
    ()=>$output,
    "globalRegistry",
    ()=>globalRegistry,
    "registry",
    ()=>registry
]);
const $output = Symbol("ZodOutput");
const $input = Symbol("ZodInput");
class $ZodRegistry {
    add(schema) {
        for(var _len = arguments.length, _meta = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
            _meta[_key - 1] = arguments[_key];
        }
        const meta = _meta[0];
        this._map.set(schema, meta);
        if (meta && typeof meta === "object" && "id" in meta) {
            if (this._idmap.has(meta.id)) {
                throw new Error("ID ".concat(meta.id, " already exists in the registry"));
            }
            this._idmap.set(meta.id, schema);
        }
        return this;
    }
    clear() {
        this._map = new Map();
        this._idmap = new Map();
        return this;
    }
    remove(schema) {
        const meta = this._map.get(schema);
        if (meta && typeof meta === "object" && "id" in meta) {
            this._idmap.delete(meta.id);
        }
        this._map.delete(schema);
        return this;
    }
    get(schema) {
        // return this._map.get(schema) as any;
        // inherit metadata
        const p = schema._zod.parent;
        if (p) {
            var _this_get;
            const pm = {
                ...(_this_get = this.get(p)) !== null && _this_get !== void 0 ? _this_get : {}
            };
            delete pm.id; // do not inherit id
            const f = {
                ...pm,
                ...this._map.get(schema)
            };
            return Object.keys(f).length ? f : undefined;
        }
        return this._map.get(schema);
    }
    has(schema) {
        return this._map.has(schema);
    }
    constructor(){
        this._map = new Map();
        this._idmap = new Map();
    }
}
function registry() {
    return new $ZodRegistry();
}
const globalRegistry = /*@__PURE__*/ registry();
}),
"[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/util.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// functions
__turbopack_context__.s([
    "BIGINT_FORMAT_RANGES",
    ()=>BIGINT_FORMAT_RANGES,
    "Class",
    ()=>Class,
    "NUMBER_FORMAT_RANGES",
    ()=>NUMBER_FORMAT_RANGES,
    "aborted",
    ()=>aborted,
    "allowsEval",
    ()=>allowsEval,
    "assert",
    ()=>assert,
    "assertEqual",
    ()=>assertEqual,
    "assertIs",
    ()=>assertIs,
    "assertNever",
    ()=>assertNever,
    "assertNotEqual",
    ()=>assertNotEqual,
    "assignProp",
    ()=>assignProp,
    "cached",
    ()=>cached,
    "captureStackTrace",
    ()=>captureStackTrace,
    "cleanEnum",
    ()=>cleanEnum,
    "cleanRegex",
    ()=>cleanRegex,
    "clone",
    ()=>clone,
    "cloneDef",
    ()=>cloneDef,
    "createTransparentProxy",
    ()=>createTransparentProxy,
    "defineLazy",
    ()=>defineLazy,
    "esc",
    ()=>esc,
    "escapeRegex",
    ()=>escapeRegex,
    "extend",
    ()=>extend,
    "finalizeIssue",
    ()=>finalizeIssue,
    "floatSafeRemainder",
    ()=>floatSafeRemainder,
    "getElementAtPath",
    ()=>getElementAtPath,
    "getEnumValues",
    ()=>getEnumValues,
    "getLengthableOrigin",
    ()=>getLengthableOrigin,
    "getParsedType",
    ()=>getParsedType,
    "getSizableOrigin",
    ()=>getSizableOrigin,
    "isObject",
    ()=>isObject,
    "isPlainObject",
    ()=>isPlainObject,
    "issue",
    ()=>issue,
    "joinValues",
    ()=>joinValues,
    "jsonStringifyReplacer",
    ()=>jsonStringifyReplacer,
    "merge",
    ()=>merge,
    "mergeDefs",
    ()=>mergeDefs,
    "normalizeParams",
    ()=>normalizeParams,
    "nullish",
    ()=>nullish,
    "numKeys",
    ()=>numKeys,
    "objectClone",
    ()=>objectClone,
    "omit",
    ()=>omit,
    "optionalKeys",
    ()=>optionalKeys,
    "partial",
    ()=>partial,
    "pick",
    ()=>pick,
    "prefixIssues",
    ()=>prefixIssues,
    "primitiveTypes",
    ()=>primitiveTypes,
    "promiseAllObject",
    ()=>promiseAllObject,
    "propertyKeyTypes",
    ()=>propertyKeyTypes,
    "randomString",
    ()=>randomString,
    "required",
    ()=>required,
    "shallowClone",
    ()=>shallowClone,
    "stringifyPrimitive",
    ()=>stringifyPrimitive,
    "unwrapMessage",
    ()=>unwrapMessage
]);
function assertEqual(val) {
    return val;
}
function assertNotEqual(val) {
    return val;
}
function assertIs(_arg) {}
function assertNever(_x) {
    throw new Error();
}
function assert(_) {}
function getEnumValues(entries) {
    const numericValues = Object.values(entries).filter((v)=>typeof v === "number");
    const values = Object.entries(entries).filter((param)=>{
        let [k, _] = param;
        return numericValues.indexOf(+k) === -1;
    }).map((param)=>{
        let [_, v] = param;
        return v;
    });
    return values;
}
function joinValues(array) {
    let separator = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "|";
    return array.map((val)=>stringifyPrimitive(val)).join(separator);
}
function jsonStringifyReplacer(_, value) {
    if (typeof value === "bigint") return value.toString();
    return value;
}
function cached(getter) {
    const set = false;
    return {
        get value () {
            if ("TURBOPACK compile-time truthy", 1) {
                const value = getter();
                Object.defineProperty(this, "value", {
                    value
                });
                return value;
            }
            //TURBOPACK unreachable
            ;
        }
    };
}
function nullish(input) {
    return input === null || input === undefined;
}
function cleanRegex(source) {
    const start = source.startsWith("^") ? 1 : 0;
    const end = source.endsWith("$") ? source.length - 1 : source.length;
    return source.slice(start, end);
}
function floatSafeRemainder(val, step) {
    const valDecCount = (val.toString().split(".")[1] || "").length;
    const stepString = step.toString();
    let stepDecCount = (stepString.split(".")[1] || "").length;
    if (stepDecCount === 0 && /\d?e-\d?/.test(stepString)) {
        const match = stepString.match(/\d?e-(\d?)/);
        if (match === null || match === void 0 ? void 0 : match[1]) {
            stepDecCount = Number.parseInt(match[1]);
        }
    }
    const decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
    const valInt = Number.parseInt(val.toFixed(decCount).replace(".", ""));
    const stepInt = Number.parseInt(step.toFixed(decCount).replace(".", ""));
    return valInt % stepInt / 10 ** decCount;
}
const EVALUATING = Symbol("evaluating");
function defineLazy(object, key, getter) {
    let value = undefined;
    Object.defineProperty(object, key, {
        get () {
            if (value === EVALUATING) {
                // Circular reference detected, return undefined to break the cycle
                return undefined;
            }
            if (value === undefined) {
                value = EVALUATING;
                value = getter();
            }
            return value;
        },
        set (v) {
            Object.defineProperty(object, key, {
                value: v
            });
        // object[key] = v;
        },
        configurable: true
    });
}
function objectClone(obj) {
    return Object.create(Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj));
}
function assignProp(target, prop, value) {
    Object.defineProperty(target, prop, {
        value,
        writable: true,
        enumerable: true,
        configurable: true
    });
}
function mergeDefs() {
    for(var _len = arguments.length, defs = new Array(_len), _key = 0; _key < _len; _key++){
        defs[_key] = arguments[_key];
    }
    const mergedDescriptors = {};
    for (const def of defs){
        const descriptors = Object.getOwnPropertyDescriptors(def);
        Object.assign(mergedDescriptors, descriptors);
    }
    return Object.defineProperties({}, mergedDescriptors);
}
function cloneDef(schema) {
    return mergeDefs(schema._zod.def);
}
function getElementAtPath(obj, path) {
    if (!path) return obj;
    return path.reduce((acc, key)=>acc === null || acc === void 0 ? void 0 : acc[key], obj);
}
function promiseAllObject(promisesObj) {
    const keys = Object.keys(promisesObj);
    const promises = keys.map((key)=>promisesObj[key]);
    return Promise.all(promises).then((results)=>{
        const resolvedObj = {};
        for(let i = 0; i < keys.length; i++){
            resolvedObj[keys[i]] = results[i];
        }
        return resolvedObj;
    });
}
function randomString() {
    let length = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 10;
    const chars = "abcdefghijklmnopqrstuvwxyz";
    let str = "";
    for(let i = 0; i < length; i++){
        str += chars[Math.floor(Math.random() * chars.length)];
    }
    return str;
}
function esc(str) {
    return JSON.stringify(str);
}
const captureStackTrace = "captureStackTrace" in Error ? Error.captureStackTrace : function() {
    for(var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++){
        _args[_key] = arguments[_key];
    }
};
function isObject(data) {
    return typeof data === "object" && data !== null && !Array.isArray(data);
}
const allowsEval = cached(()=>{
    var _navigator_userAgent, _navigator;
    // @ts-ignore
    if (typeof navigator !== "undefined" && ((_navigator = navigator) === null || _navigator === void 0 ? void 0 : (_navigator_userAgent = _navigator.userAgent) === null || _navigator_userAgent === void 0 ? void 0 : _navigator_userAgent.includes("Cloudflare"))) {
        return false;
    }
    try {
        const F = Function;
        new F("");
        return true;
    } catch (_) {
        return false;
    }
});
function isPlainObject(o) {
    if (isObject(o) === false) return false;
    // modified constructor
    const ctor = o.constructor;
    if (ctor === undefined) return true;
    // modified prototype
    const prot = ctor.prototype;
    if (isObject(prot) === false) return false;
    // ctor doesn't have static `isPrototypeOf`
    if (Object.prototype.hasOwnProperty.call(prot, "isPrototypeOf") === false) {
        return false;
    }
    return true;
}
function shallowClone(o) {
    if (isPlainObject(o)) return {
        ...o
    };
    return o;
}
function numKeys(data) {
    let keyCount = 0;
    for(const key in data){
        if (Object.prototype.hasOwnProperty.call(data, key)) {
            keyCount++;
        }
    }
    return keyCount;
}
const getParsedType = (data)=>{
    const t = typeof data;
    switch(t){
        case "undefined":
            return "undefined";
        case "string":
            return "string";
        case "number":
            return Number.isNaN(data) ? "nan" : "number";
        case "boolean":
            return "boolean";
        case "function":
            return "function";
        case "bigint":
            return "bigint";
        case "symbol":
            return "symbol";
        case "object":
            if (Array.isArray(data)) {
                return "array";
            }
            if (data === null) {
                return "null";
            }
            if (data.then && typeof data.then === "function" && data.catch && typeof data.catch === "function") {
                return "promise";
            }
            if (typeof Map !== "undefined" && data instanceof Map) {
                return "map";
            }
            if (typeof Set !== "undefined" && data instanceof Set) {
                return "set";
            }
            if (typeof Date !== "undefined" && data instanceof Date) {
                return "date";
            }
            // @ts-ignore
            if (typeof File !== "undefined" && data instanceof File) {
                return "file";
            }
            return "object";
        default:
            throw new Error("Unknown data type: ".concat(t));
    }
};
const propertyKeyTypes = new Set([
    "string",
    "number",
    "symbol"
]);
const primitiveTypes = new Set([
    "string",
    "number",
    "bigint",
    "boolean",
    "symbol",
    "undefined"
]);
function escapeRegex(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function clone(inst, def, params) {
    const cl = new inst._zod.constr(def !== null && def !== void 0 ? def : inst._zod.def);
    if (!def || (params === null || params === void 0 ? void 0 : params.parent)) cl._zod.parent = inst;
    return cl;
}
function normalizeParams(_params) {
    const params = _params;
    if (!params) return {};
    if (typeof params === "string") return {
        error: ()=>params
    };
    if ((params === null || params === void 0 ? void 0 : params.message) !== undefined) {
        if ((params === null || params === void 0 ? void 0 : params.error) !== undefined) throw new Error("Cannot specify both `message` and `error` params");
        params.error = params.message;
    }
    delete params.message;
    if (typeof params.error === "string") return {
        ...params,
        error: ()=>params.error
    };
    return params;
}
function createTransparentProxy(getter) {
    let target;
    return new Proxy({}, {
        get (_, prop, receiver) {
            target !== null && target !== void 0 ? target : target = getter();
            return Reflect.get(target, prop, receiver);
        },
        set (_, prop, value, receiver) {
            target !== null && target !== void 0 ? target : target = getter();
            return Reflect.set(target, prop, value, receiver);
        },
        has (_, prop) {
            target !== null && target !== void 0 ? target : target = getter();
            return Reflect.has(target, prop);
        },
        deleteProperty (_, prop) {
            target !== null && target !== void 0 ? target : target = getter();
            return Reflect.deleteProperty(target, prop);
        },
        ownKeys (_) {
            target !== null && target !== void 0 ? target : target = getter();
            return Reflect.ownKeys(target);
        },
        getOwnPropertyDescriptor (_, prop) {
            target !== null && target !== void 0 ? target : target = getter();
            return Reflect.getOwnPropertyDescriptor(target, prop);
        },
        defineProperty (_, prop, descriptor) {
            target !== null && target !== void 0 ? target : target = getter();
            return Reflect.defineProperty(target, prop, descriptor);
        }
    });
}
function stringifyPrimitive(value) {
    if (typeof value === "bigint") return value.toString() + "n";
    if (typeof value === "string") return '"'.concat(value, '"');
    return "".concat(value);
}
function optionalKeys(shape) {
    return Object.keys(shape).filter((k)=>{
        return shape[k]._zod.optin === "optional" && shape[k]._zod.optout === "optional";
    });
}
const NUMBER_FORMAT_RANGES = {
    safeint: [
        Number.MIN_SAFE_INTEGER,
        Number.MAX_SAFE_INTEGER
    ],
    int32: [
        -2147483648,
        2147483647
    ],
    uint32: [
        0,
        4294967295
    ],
    float32: [
        -3.4028234663852886e38,
        3.4028234663852886e38
    ],
    float64: [
        -Number.MAX_VALUE,
        Number.MAX_VALUE
    ]
};
const BIGINT_FORMAT_RANGES = {
    int64: [
        /* @__PURE__*/ BigInt("-9223372036854775808"),
        /* @__PURE__*/ BigInt("9223372036854775807")
    ],
    uint64: [
        /* @__PURE__*/ BigInt(0),
        /* @__PURE__*/ BigInt("18446744073709551615")
    ]
};
function pick(schema, mask) {
    const currDef = schema._zod.def;
    const def = mergeDefs(schema._zod.def, {
        get shape () {
            const newShape = {};
            for(const key in mask){
                if (!(key in currDef.shape)) {
                    throw new Error('Unrecognized key: "'.concat(key, '"'));
                }
                if (!mask[key]) continue;
                newShape[key] = currDef.shape[key];
            }
            assignProp(this, "shape", newShape); // self-caching
            return newShape;
        },
        checks: []
    });
    return clone(schema, def);
}
function omit(schema, mask) {
    const currDef = schema._zod.def;
    const def = mergeDefs(schema._zod.def, {
        get shape () {
            const newShape = {
                ...schema._zod.def.shape
            };
            for(const key in mask){
                if (!(key in currDef.shape)) {
                    throw new Error('Unrecognized key: "'.concat(key, '"'));
                }
                if (!mask[key]) continue;
                delete newShape[key];
            }
            assignProp(this, "shape", newShape); // self-caching
            return newShape;
        },
        checks: []
    });
    return clone(schema, def);
}
function extend(schema, shape) {
    if (!isPlainObject(shape)) {
        throw new Error("Invalid input to extend: expected a plain object");
    }
    const def = mergeDefs(schema._zod.def, {
        get shape () {
            const _shape = {
                ...schema._zod.def.shape,
                ...shape
            };
            assignProp(this, "shape", _shape); // self-caching
            return _shape;
        },
        checks: []
    });
    return clone(schema, def);
}
function merge(a, b) {
    const def = mergeDefs(a._zod.def, {
        get shape () {
            const _shape = {
                ...a._zod.def.shape,
                ...b._zod.def.shape
            };
            assignProp(this, "shape", _shape); // self-caching
            return _shape;
        },
        get catchall () {
            return b._zod.def.catchall;
        },
        checks: []
    });
    return clone(a, def);
}
function partial(Class, schema, mask) {
    const def = mergeDefs(schema._zod.def, {
        get shape () {
            const oldShape = schema._zod.def.shape;
            const shape = {
                ...oldShape
            };
            if (mask) {
                for(const key in mask){
                    if (!(key in oldShape)) {
                        throw new Error('Unrecognized key: "'.concat(key, '"'));
                    }
                    if (!mask[key]) continue;
                    // if (oldShape[key]!._zod.optin === "optional") continue;
                    shape[key] = Class ? new Class({
                        type: "optional",
                        innerType: oldShape[key]
                    }) : oldShape[key];
                }
            } else {
                for(const key in oldShape){
                    // if (oldShape[key]!._zod.optin === "optional") continue;
                    shape[key] = Class ? new Class({
                        type: "optional",
                        innerType: oldShape[key]
                    }) : oldShape[key];
                }
            }
            assignProp(this, "shape", shape); // self-caching
            return shape;
        },
        checks: []
    });
    return clone(schema, def);
}
function required(Class, schema, mask) {
    const def = mergeDefs(schema._zod.def, {
        get shape () {
            const oldShape = schema._zod.def.shape;
            const shape = {
                ...oldShape
            };
            if (mask) {
                for(const key in mask){
                    if (!(key in shape)) {
                        throw new Error('Unrecognized key: "'.concat(key, '"'));
                    }
                    if (!mask[key]) continue;
                    // overwrite with non-optional
                    shape[key] = new Class({
                        type: "nonoptional",
                        innerType: oldShape[key]
                    });
                }
            } else {
                for(const key in oldShape){
                    // overwrite with non-optional
                    shape[key] = new Class({
                        type: "nonoptional",
                        innerType: oldShape[key]
                    });
                }
            }
            assignProp(this, "shape", shape); // self-caching
            return shape;
        },
        checks: []
    });
    return clone(schema, def);
}
function aborted(x) {
    let startIndex = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    for(let i = startIndex; i < x.issues.length; i++){
        var _x_issues_i;
        if (((_x_issues_i = x.issues[i]) === null || _x_issues_i === void 0 ? void 0 : _x_issues_i.continue) !== true) {
            return true;
        }
    }
    return false;
}
function prefixIssues(path, issues) {
    return issues.map((iss)=>{
        var _a;
        var _path;
        (_path = (_a = iss).path) !== null && _path !== void 0 ? _path : _a.path = [];
        iss.path.unshift(path);
        return iss;
    });
}
function unwrapMessage(message) {
    return typeof message === "string" ? message : message === null || message === void 0 ? void 0 : message.message;
}
function finalizeIssue(iss, ctx, config) {
    var _iss_path;
    const full = {
        ...iss,
        path: (_iss_path = iss.path) !== null && _iss_path !== void 0 ? _iss_path : []
    };
    // for backwards compatibility
    if (!iss.message) {
        var _iss_inst__zod_def_error, _iss_inst__zod_def, _iss_inst, _ctx_error, _config_customError, _config_localeError;
        var _unwrapMessage, _ref, _ref1, _ref2;
        const message = (_ref2 = (_ref1 = (_ref = (_unwrapMessage = unwrapMessage((_iss_inst = iss.inst) === null || _iss_inst === void 0 ? void 0 : (_iss_inst__zod_def = _iss_inst._zod.def) === null || _iss_inst__zod_def === void 0 ? void 0 : (_iss_inst__zod_def_error = _iss_inst__zod_def.error) === null || _iss_inst__zod_def_error === void 0 ? void 0 : _iss_inst__zod_def_error.call(_iss_inst__zod_def, iss))) !== null && _unwrapMessage !== void 0 ? _unwrapMessage : unwrapMessage(ctx === null || ctx === void 0 ? void 0 : (_ctx_error = ctx.error) === null || _ctx_error === void 0 ? void 0 : _ctx_error.call(ctx, iss))) !== null && _ref !== void 0 ? _ref : unwrapMessage((_config_customError = config.customError) === null || _config_customError === void 0 ? void 0 : _config_customError.call(config, iss))) !== null && _ref1 !== void 0 ? _ref1 : unwrapMessage((_config_localeError = config.localeError) === null || _config_localeError === void 0 ? void 0 : _config_localeError.call(config, iss))) !== null && _ref2 !== void 0 ? _ref2 : "Invalid input";
        full.message = message;
    }
    // delete (full as any).def;
    delete full.inst;
    delete full.continue;
    if (!(ctx === null || ctx === void 0 ? void 0 : ctx.reportInput)) {
        delete full.input;
    }
    return full;
}
function getSizableOrigin(input) {
    if (input instanceof Set) return "set";
    if (input instanceof Map) return "map";
    // @ts-ignore
    if (input instanceof File) return "file";
    return "unknown";
}
function getLengthableOrigin(input) {
    if (Array.isArray(input)) return "array";
    if (typeof input === "string") return "string";
    return "unknown";
}
function issue() {
    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
        args[_key] = arguments[_key];
    }
    const [iss, input, inst] = args;
    if (typeof iss === "string") {
        return {
            message: iss,
            code: "custom",
            input,
            inst
        };
    }
    return {
        ...iss
    };
}
function cleanEnum(obj) {
    return Object.entries(obj).filter((param)=>{
        let [k, _] = param;
        // return true if NaN, meaning it's not a number, thus a string key
        return Number.isNaN(Number.parseInt(k, 10));
    }).map((el)=>el[1]);
}
class Class {
    constructor(..._args){}
}
}),
"[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/to-json-schema.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "JSONSchemaGenerator",
    ()=>JSONSchemaGenerator,
    "toJSONSchema",
    ()=>toJSONSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$registries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/registries.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/util.js [app-client] (ecmascript)");
;
;
class JSONSchemaGenerator {
    process(schema) {
        let _params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
            path: [],
            schemaPath: []
        };
        var _schema__zod_toJSONSchema, _schema__zod;
        var _a;
        const def = schema._zod.def;
        const formatMap = {
            guid: "uuid",
            url: "uri",
            datetime: "date-time",
            json_string: "json-string",
            regex: ""
        };
        // check for schema in seens
        const seen = this.seen.get(schema);
        if (seen) {
            seen.count++;
            // check if cycle
            const isCycle = _params.schemaPath.includes(schema);
            if (isCycle) {
                seen.cycle = _params.path;
            }
            return seen.schema;
        }
        // initialize
        const result = {
            schema: {},
            count: 1,
            cycle: undefined,
            path: _params.path
        };
        this.seen.set(schema, result);
        // custom method overrides default behavior
        const overrideSchema = (_schema__zod_toJSONSchema = (_schema__zod = schema._zod).toJSONSchema) === null || _schema__zod_toJSONSchema === void 0 ? void 0 : _schema__zod_toJSONSchema.call(_schema__zod);
        if (overrideSchema) {
            result.schema = overrideSchema;
        } else {
            const params = {
                ..._params,
                schemaPath: [
                    ..._params.schemaPath,
                    schema
                ],
                path: _params.path
            };
            const parent = schema._zod.parent;
            if (parent) {
                // schema was cloned from another schema
                result.ref = parent;
                this.process(parent, params);
                this.seen.get(parent).isParent = true;
            } else {
                const _json = result.schema;
                switch(def.type){
                    case "string":
                        {
                            const json = _json;
                            json.type = "string";
                            const { minimum, maximum, format, patterns, contentEncoding } = schema._zod.bag;
                            if (typeof minimum === "number") json.minLength = minimum;
                            if (typeof maximum === "number") json.maxLength = maximum;
                            // custom pattern overrides format
                            if (format) {
                                var _formatMap_format;
                                json.format = (_formatMap_format = formatMap[format]) !== null && _formatMap_format !== void 0 ? _formatMap_format : format;
                                if (json.format === "") delete json.format; // empty format is not valid
                            }
                            if (contentEncoding) json.contentEncoding = contentEncoding;
                            if (patterns && patterns.size > 0) {
                                const regexes = [
                                    ...patterns
                                ];
                                if (regexes.length === 1) json.pattern = regexes[0].source;
                                else if (regexes.length > 1) {
                                    result.schema.allOf = [
                                        ...regexes.map((regex)=>({
                                                ...this.target === "draft-7" || this.target === "draft-4" ? {
                                                    type: "string"
                                                } : {},
                                                pattern: regex.source
                                            }))
                                    ];
                                }
                            }
                            break;
                        }
                    case "number":
                        {
                            const json = _json;
                            const { minimum, maximum, format, multipleOf, exclusiveMaximum, exclusiveMinimum } = schema._zod.bag;
                            if (typeof format === "string" && format.includes("int")) json.type = "integer";
                            else json.type = "number";
                            if (typeof exclusiveMinimum === "number") {
                                if (this.target === "draft-4") {
                                    json.minimum = exclusiveMinimum;
                                    json.exclusiveMinimum = true;
                                } else {
                                    json.exclusiveMinimum = exclusiveMinimum;
                                }
                            }
                            if (typeof minimum === "number") {
                                json.minimum = minimum;
                                if (typeof exclusiveMinimum === "number" && this.target !== "draft-4") {
                                    if (exclusiveMinimum >= minimum) delete json.minimum;
                                    else delete json.exclusiveMinimum;
                                }
                            }
                            if (typeof exclusiveMaximum === "number") {
                                if (this.target === "draft-4") {
                                    json.maximum = exclusiveMaximum;
                                    json.exclusiveMaximum = true;
                                } else {
                                    json.exclusiveMaximum = exclusiveMaximum;
                                }
                            }
                            if (typeof maximum === "number") {
                                json.maximum = maximum;
                                if (typeof exclusiveMaximum === "number" && this.target !== "draft-4") {
                                    if (exclusiveMaximum <= maximum) delete json.maximum;
                                    else delete json.exclusiveMaximum;
                                }
                            }
                            if (typeof multipleOf === "number") json.multipleOf = multipleOf;
                            break;
                        }
                    case "boolean":
                        {
                            const json = _json;
                            json.type = "boolean";
                            break;
                        }
                    case "bigint":
                        {
                            if (this.unrepresentable === "throw") {
                                throw new Error("BigInt cannot be represented in JSON Schema");
                            }
                            break;
                        }
                    case "symbol":
                        {
                            if (this.unrepresentable === "throw") {
                                throw new Error("Symbols cannot be represented in JSON Schema");
                            }
                            break;
                        }
                    case "null":
                        {
                            _json.type = "null";
                            break;
                        }
                    case "any":
                        {
                            break;
                        }
                    case "unknown":
                        {
                            break;
                        }
                    case "undefined":
                        {
                            if (this.unrepresentable === "throw") {
                                throw new Error("Undefined cannot be represented in JSON Schema");
                            }
                            break;
                        }
                    case "void":
                        {
                            if (this.unrepresentable === "throw") {
                                throw new Error("Void cannot be represented in JSON Schema");
                            }
                            break;
                        }
                    case "never":
                        {
                            _json.not = {};
                            break;
                        }
                    case "date":
                        {
                            if (this.unrepresentable === "throw") {
                                throw new Error("Date cannot be represented in JSON Schema");
                            }
                            break;
                        }
                    case "array":
                        {
                            const json = _json;
                            const { minimum, maximum } = schema._zod.bag;
                            if (typeof minimum === "number") json.minItems = minimum;
                            if (typeof maximum === "number") json.maxItems = maximum;
                            json.type = "array";
                            json.items = this.process(def.element, {
                                ...params,
                                path: [
                                    ...params.path,
                                    "items"
                                ]
                            });
                            break;
                        }
                    case "object":
                        {
                            var _def_catchall;
                            const json = _json;
                            json.type = "object";
                            json.properties = {};
                            const shape = def.shape; // params.shapeCache.get(schema)!;
                            for(const key in shape){
                                json.properties[key] = this.process(shape[key], {
                                    ...params,
                                    path: [
                                        ...params.path,
                                        "properties",
                                        key
                                    ]
                                });
                            }
                            // required keys
                            const allKeys = new Set(Object.keys(shape));
                            // const optionalKeys = new Set(def.optional);
                            const requiredKeys = new Set([
                                ...allKeys
                            ].filter((key)=>{
                                const v = def.shape[key]._zod;
                                if (this.io === "input") {
                                    return v.optin === undefined;
                                } else {
                                    return v.optout === undefined;
                                }
                            }));
                            if (requiredKeys.size > 0) {
                                json.required = Array.from(requiredKeys);
                            }
                            // catchall
                            if (((_def_catchall = def.catchall) === null || _def_catchall === void 0 ? void 0 : _def_catchall._zod.def.type) === "never") {
                                // strict
                                json.additionalProperties = false;
                            } else if (!def.catchall) {
                                // regular
                                if (this.io === "output") json.additionalProperties = false;
                            } else if (def.catchall) {
                                json.additionalProperties = this.process(def.catchall, {
                                    ...params,
                                    path: [
                                        ...params.path,
                                        "additionalProperties"
                                    ]
                                });
                            }
                            break;
                        }
                    case "union":
                        {
                            const json = _json;
                            json.anyOf = def.options.map((x, i)=>this.process(x, {
                                    ...params,
                                    path: [
                                        ...params.path,
                                        "anyOf",
                                        i
                                    ]
                                }));
                            break;
                        }
                    case "intersection":
                        {
                            const json = _json;
                            const a = this.process(def.left, {
                                ...params,
                                path: [
                                    ...params.path,
                                    "allOf",
                                    0
                                ]
                            });
                            const b = this.process(def.right, {
                                ...params,
                                path: [
                                    ...params.path,
                                    "allOf",
                                    1
                                ]
                            });
                            const isSimpleIntersection = (val)=>"allOf" in val && Object.keys(val).length === 1;
                            const allOf = [
                                ...isSimpleIntersection(a) ? a.allOf : [
                                    a
                                ],
                                ...isSimpleIntersection(b) ? b.allOf : [
                                    b
                                ]
                            ];
                            json.allOf = allOf;
                            break;
                        }
                    case "tuple":
                        {
                            const json = _json;
                            json.type = "array";
                            const prefixItems = def.items.map((x, i)=>this.process(x, {
                                    ...params,
                                    path: [
                                        ...params.path,
                                        "prefixItems",
                                        i
                                    ]
                                }));
                            if (this.target === "draft-2020-12") {
                                json.prefixItems = prefixItems;
                            } else {
                                json.items = prefixItems;
                            }
                            if (def.rest) {
                                const rest = this.process(def.rest, {
                                    ...params,
                                    path: [
                                        ...params.path,
                                        "items"
                                    ]
                                });
                                if (this.target === "draft-2020-12") {
                                    json.items = rest;
                                } else {
                                    json.additionalItems = rest;
                                }
                            }
                            // additionalItems
                            if (def.rest) {
                                json.items = this.process(def.rest, {
                                    ...params,
                                    path: [
                                        ...params.path,
                                        "items"
                                    ]
                                });
                            }
                            // length
                            const { minimum, maximum } = schema._zod.bag;
                            if (typeof minimum === "number") json.minItems = minimum;
                            if (typeof maximum === "number") json.maxItems = maximum;
                            break;
                        }
                    case "record":
                        {
                            const json = _json;
                            json.type = "object";
                            if (this.target !== "draft-4") {
                                json.propertyNames = this.process(def.keyType, {
                                    ...params,
                                    path: [
                                        ...params.path,
                                        "propertyNames"
                                    ]
                                });
                            }
                            json.additionalProperties = this.process(def.valueType, {
                                ...params,
                                path: [
                                    ...params.path,
                                    "additionalProperties"
                                ]
                            });
                            break;
                        }
                    case "map":
                        {
                            if (this.unrepresentable === "throw") {
                                throw new Error("Map cannot be represented in JSON Schema");
                            }
                            break;
                        }
                    case "set":
                        {
                            if (this.unrepresentable === "throw") {
                                throw new Error("Set cannot be represented in JSON Schema");
                            }
                            break;
                        }
                    case "enum":
                        {
                            const json = _json;
                            const values = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEnumValues"])(def.entries);
                            // Number enums can have both string and number values
                            if (values.every((v)=>typeof v === "number")) json.type = "number";
                            if (values.every((v)=>typeof v === "string")) json.type = "string";
                            json.enum = values;
                            break;
                        }
                    case "literal":
                        {
                            const json = _json;
                            const vals = [];
                            for (const val of def.values){
                                if (val === undefined) {
                                    if (this.unrepresentable === "throw") {
                                        throw new Error("Literal `undefined` cannot be represented in JSON Schema");
                                    } else {
                                    // do not add to vals
                                    }
                                } else if (typeof val === "bigint") {
                                    if (this.unrepresentable === "throw") {
                                        throw new Error("BigInt literals cannot be represented in JSON Schema");
                                    } else {
                                        vals.push(Number(val));
                                    }
                                } else {
                                    vals.push(val);
                                }
                            }
                            if (vals.length === 0) {
                            // do nothing (an undefined literal was stripped)
                            } else if (vals.length === 1) {
                                const val = vals[0];
                                json.type = val === null ? "null" : typeof val;
                                if (this.target === "draft-4") {
                                    json.enum = [
                                        val
                                    ];
                                } else {
                                    json.const = val;
                                }
                            } else {
                                if (vals.every((v)=>typeof v === "number")) json.type = "number";
                                if (vals.every((v)=>typeof v === "string")) json.type = "string";
                                if (vals.every((v)=>typeof v === "boolean")) json.type = "string";
                                if (vals.every((v)=>v === null)) json.type = "null";
                                json.enum = vals;
                            }
                            break;
                        }
                    case "file":
                        {
                            const json = _json;
                            const file = {
                                type: "string",
                                format: "binary",
                                contentEncoding: "binary"
                            };
                            const { minimum, maximum, mime } = schema._zod.bag;
                            if (minimum !== undefined) file.minLength = minimum;
                            if (maximum !== undefined) file.maxLength = maximum;
                            if (mime) {
                                if (mime.length === 1) {
                                    file.contentMediaType = mime[0];
                                    Object.assign(json, file);
                                } else {
                                    json.anyOf = mime.map((m)=>{
                                        const mFile = {
                                            ...file,
                                            contentMediaType: m
                                        };
                                        return mFile;
                                    });
                                }
                            } else {
                                Object.assign(json, file);
                            }
                            break;
                        }
                    case "transform":
                        {
                            if (this.unrepresentable === "throw") {
                                throw new Error("Transforms cannot be represented in JSON Schema");
                            }
                            break;
                        }
                    case "nullable":
                        {
                            const inner = this.process(def.innerType, params);
                            _json.anyOf = [
                                inner,
                                {
                                    type: "null"
                                }
                            ];
                            break;
                        }
                    case "nonoptional":
                        {
                            this.process(def.innerType, params);
                            result.ref = def.innerType;
                            break;
                        }
                    case "success":
                        {
                            const json = _json;
                            json.type = "boolean";
                            break;
                        }
                    case "default":
                        {
                            this.process(def.innerType, params);
                            result.ref = def.innerType;
                            _json.default = JSON.parse(JSON.stringify(def.defaultValue));
                            break;
                        }
                    case "prefault":
                        {
                            this.process(def.innerType, params);
                            result.ref = def.innerType;
                            if (this.io === "input") _json._prefault = JSON.parse(JSON.stringify(def.defaultValue));
                            break;
                        }
                    case "catch":
                        {
                            // use conditionals
                            this.process(def.innerType, params);
                            result.ref = def.innerType;
                            let catchValue;
                            try {
                                catchValue = def.catchValue(undefined);
                            } catch (e) {
                                throw new Error("Dynamic catch values are not supported in JSON Schema");
                            }
                            _json.default = catchValue;
                            break;
                        }
                    case "nan":
                        {
                            if (this.unrepresentable === "throw") {
                                throw new Error("NaN cannot be represented in JSON Schema");
                            }
                            break;
                        }
                    case "template_literal":
                        {
                            const json = _json;
                            const pattern = schema._zod.pattern;
                            if (!pattern) throw new Error("Pattern not found in template literal");
                            json.type = "string";
                            json.pattern = pattern.source;
                            break;
                        }
                    case "pipe":
                        {
                            const innerType = this.io === "input" ? def.in._zod.def.type === "transform" ? def.out : def.in : def.out;
                            this.process(innerType, params);
                            result.ref = innerType;
                            break;
                        }
                    case "readonly":
                        {
                            this.process(def.innerType, params);
                            result.ref = def.innerType;
                            _json.readOnly = true;
                            break;
                        }
                    // passthrough types
                    case "promise":
                        {
                            this.process(def.innerType, params);
                            result.ref = def.innerType;
                            break;
                        }
                    case "optional":
                        {
                            this.process(def.innerType, params);
                            result.ref = def.innerType;
                            break;
                        }
                    case "lazy":
                        {
                            const innerType = schema._zod.innerType;
                            this.process(innerType, params);
                            result.ref = innerType;
                            break;
                        }
                    case "custom":
                        {
                            if (this.unrepresentable === "throw") {
                                throw new Error("Custom types cannot be represented in JSON Schema");
                            }
                            break;
                        }
                    default:
                        {
                            def;
                        }
                }
            }
        }
        // metadata
        const meta = this.metadataRegistry.get(schema);
        if (meta) Object.assign(result.schema, meta);
        if (this.io === "input" && isTransforming(schema)) {
            // examples/defaults only apply to output type of pipe
            delete result.schema.examples;
            delete result.schema.default;
        }
        var _default;
        // set prefault as default
        if (this.io === "input" && result.schema._prefault) (_default = (_a = result.schema).default) !== null && _default !== void 0 ? _default : _a.default = result.schema._prefault;
        delete result.schema._prefault;
        // pulling fresh from this.seen in case it was overwritten
        const _result = this.seen.get(schema);
        return _result.schema;
    }
    emit(schema, _params) {
        var _params_external, _params_external1;
        var _params_cycles, _params_reused, _params_external2;
        const params = {
            cycles: (_params_cycles = _params === null || _params === void 0 ? void 0 : _params.cycles) !== null && _params_cycles !== void 0 ? _params_cycles : "ref",
            reused: (_params_reused = _params === null || _params === void 0 ? void 0 : _params.reused) !== null && _params_reused !== void 0 ? _params_reused : "inline",
            // unrepresentable: _params?.unrepresentable ?? "throw",
            // uri: _params?.uri ?? ((id) => `${id}`),
            external: (_params_external2 = _params === null || _params === void 0 ? void 0 : _params.external) !== null && _params_external2 !== void 0 ? _params_external2 : undefined
        };
        // iterate over seen map;
        const root = this.seen.get(schema);
        if (!root) throw new Error("Unprocessed schema. This is a bug in Zod.");
        // initialize result with root schema fields
        // Object.assign(result, seen.cached);
        // returns a ref to the schema
        // defId will be empty if the ref points to an external schema (or #)
        const makeURI = (entry)=>{
            // comparing the seen objects because sometimes
            // multiple schemas map to the same seen object.
            // e.g. lazy
            // external is configured
            const defsSegment = this.target === "draft-2020-12" ? "$defs" : "definitions";
            if (params.external) {
                var _params_external_registry_get;
                const externalId = (_params_external_registry_get = params.external.registry.get(entry[0])) === null || _params_external_registry_get === void 0 ? void 0 : _params_external_registry_get.id; // ?? "__shared";// `__schema${this.counter++}`;
                var _params_external_uri;
                // check if schema is in the external registry
                const uriGenerator = (_params_external_uri = params.external.uri) !== null && _params_external_uri !== void 0 ? _params_external_uri : (id)=>id;
                if (externalId) {
                    return {
                        ref: uriGenerator(externalId)
                    };
                }
                var _entry__defId, _ref;
                // otherwise, add to __shared
                const id = (_ref = (_entry__defId = entry[1].defId) !== null && _entry__defId !== void 0 ? _entry__defId : entry[1].schema.id) !== null && _ref !== void 0 ? _ref : "schema".concat(this.counter++);
                entry[1].defId = id; // set defId so it will be reused if needed
                return {
                    defId: id,
                    ref: "".concat(uriGenerator("__shared"), "#/").concat(defsSegment, "/").concat(id)
                };
            }
            if (entry[1] === root) {
                return {
                    ref: "#"
                };
            }
            // self-contained schema
            const uriPrefix = "#";
            const defUriPrefix = "".concat(uriPrefix, "/").concat(defsSegment, "/");
            var _entry__schema_id;
            const defId = (_entry__schema_id = entry[1].schema.id) !== null && _entry__schema_id !== void 0 ? _entry__schema_id : "__schema".concat(this.counter++);
            return {
                defId,
                ref: defUriPrefix + defId
            };
        };
        // stored cached version in `def` property
        // remove all properties, set $ref
        const extractToDef = (entry)=>{
            // if the schema is already a reference, do not extract it
            if (entry[1].schema.$ref) {
                return;
            }
            const seen = entry[1];
            const { ref, defId } = makeURI(entry);
            seen.def = {
                ...seen.schema
            };
            // defId won't be set if the schema is a reference to an external schema
            if (defId) seen.defId = defId;
            // wipe away all properties except $ref
            const schema = seen.schema;
            for(const key in schema){
                delete schema[key];
            }
            schema.$ref = ref;
        };
        // throw on cycles
        // break cycles
        if (params.cycles === "throw") {
            for (const entry of this.seen.entries()){
                const seen = entry[1];
                if (seen.cycle) {
                    var _seen_cycle;
                    throw new Error("Cycle detected: " + "#/".concat((_seen_cycle = seen.cycle) === null || _seen_cycle === void 0 ? void 0 : _seen_cycle.join("/"), "/<root>") + '\n\nSet the `cycles` parameter to `"ref"` to resolve cyclical schemas with defs.');
                }
            }
        }
        // extract schemas into $defs
        for (const entry of this.seen.entries()){
            var _this_metadataRegistry_get;
            const seen = entry[1];
            // convert root schema to # $ref
            if (schema === entry[0]) {
                extractToDef(entry); // this has special handling for the root schema
                continue;
            }
            // extract schemas that are in the external registry
            if (params.external) {
                var _params_external_registry_get;
                const ext = (_params_external_registry_get = params.external.registry.get(entry[0])) === null || _params_external_registry_get === void 0 ? void 0 : _params_external_registry_get.id;
                if (schema !== entry[0] && ext) {
                    extractToDef(entry);
                    continue;
                }
            }
            // extract schemas with `id` meta
            const id = (_this_metadataRegistry_get = this.metadataRegistry.get(entry[0])) === null || _this_metadataRegistry_get === void 0 ? void 0 : _this_metadataRegistry_get.id;
            if (id) {
                extractToDef(entry);
                continue;
            }
            // break cycles
            if (seen.cycle) {
                // any
                extractToDef(entry);
                continue;
            }
            // extract reused schemas
            if (seen.count > 1) {
                if (params.reused === "ref") {
                    extractToDef(entry);
                    continue;
                }
            }
        }
        // flatten _refs
        const flattenRef = (zodSchema, params)=>{
            const seen = this.seen.get(zodSchema);
            var _seen_def;
            const schema = (_seen_def = seen.def) !== null && _seen_def !== void 0 ? _seen_def : seen.schema;
            const _cached = {
                ...schema
            };
            // already seen
            if (seen.ref === null) {
                return;
            }
            // flatten ref if defined
            const ref = seen.ref;
            seen.ref = null; // prevent recursion
            if (ref) {
                flattenRef(ref, params);
                // merge referenced schema into current
                const refSchema = this.seen.get(ref).schema;
                if (refSchema.$ref && (params.target === "draft-7" || params.target === "draft-4")) {
                    var _schema_allOf;
                    schema.allOf = (_schema_allOf = schema.allOf) !== null && _schema_allOf !== void 0 ? _schema_allOf : [];
                    schema.allOf.push(refSchema);
                } else {
                    Object.assign(schema, refSchema);
                    Object.assign(schema, _cached); // prevent overwriting any fields in the original schema
                }
            }
            var _seen_path;
            // execute overrides
            if (!seen.isParent) this.override({
                zodSchema: zodSchema,
                jsonSchema: schema,
                path: (_seen_path = seen.path) !== null && _seen_path !== void 0 ? _seen_path : []
            });
        };
        for (const entry of [
            ...this.seen.entries()
        ].reverse()){
            flattenRef(entry[0], {
                target: this.target
            });
        }
        const result = {};
        if (this.target === "draft-2020-12") {
            result.$schema = "https://json-schema.org/draft/2020-12/schema";
        } else if (this.target === "draft-7") {
            result.$schema = "http://json-schema.org/draft-07/schema#";
        } else if (this.target === "draft-4") {
            result.$schema = "http://json-schema.org/draft-04/schema#";
        } else {
            // @ts-ignore
            console.warn("Invalid target: ".concat(this.target));
        }
        if ((_params_external = params.external) === null || _params_external === void 0 ? void 0 : _params_external.uri) {
            var _params_external_registry_get1;
            const id = (_params_external_registry_get1 = params.external.registry.get(schema)) === null || _params_external_registry_get1 === void 0 ? void 0 : _params_external_registry_get1.id;
            if (!id) throw new Error("Schema is missing an `id` property");
            result.$id = params.external.uri(id);
        }
        Object.assign(result, root.def);
        var _params_external_defs;
        // build defs object
        const defs = (_params_external_defs = (_params_external1 = params.external) === null || _params_external1 === void 0 ? void 0 : _params_external1.defs) !== null && _params_external_defs !== void 0 ? _params_external_defs : {};
        for (const entry of this.seen.entries()){
            const seen = entry[1];
            if (seen.def && seen.defId) {
                defs[seen.defId] = seen.def;
            }
        }
        // set definitions in result
        if (params.external) {} else {
            if (Object.keys(defs).length > 0) {
                if (this.target === "draft-2020-12") {
                    result.$defs = defs;
                } else {
                    result.definitions = defs;
                }
            }
        }
        try {
            // this "finalizes" this schema and ensures all cycles are removed
            // each call to .emit() is functionally independent
            // though the seen map is shared
            return JSON.parse(JSON.stringify(result));
        } catch (_err) {
            throw new Error("Error converting schema to JSON.");
        }
    }
    constructor(params){
        this.counter = 0;
        var _params_metadata;
        this.metadataRegistry = (_params_metadata = params === null || params === void 0 ? void 0 : params.metadata) !== null && _params_metadata !== void 0 ? _params_metadata : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$registries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalRegistry"];
        var _params_target;
        this.target = (_params_target = params === null || params === void 0 ? void 0 : params.target) !== null && _params_target !== void 0 ? _params_target : "draft-2020-12";
        var _params_unrepresentable;
        this.unrepresentable = (_params_unrepresentable = params === null || params === void 0 ? void 0 : params.unrepresentable) !== null && _params_unrepresentable !== void 0 ? _params_unrepresentable : "throw";
        var _params_override;
        this.override = (_params_override = params === null || params === void 0 ? void 0 : params.override) !== null && _params_override !== void 0 ? _params_override : ()=>{};
        var _params_io;
        this.io = (_params_io = params === null || params === void 0 ? void 0 : params.io) !== null && _params_io !== void 0 ? _params_io : "output";
        this.seen = new Map();
    }
}
function toJSONSchema(input, _params) {
    if (input instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$registries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodRegistry"]) {
        const gen = new JSONSchemaGenerator(_params);
        const defs = {};
        for (const entry of input._idmap.entries()){
            const [_, schema] = entry;
            gen.process(schema);
        }
        const schemas = {};
        const external = {
            registry: input,
            uri: _params === null || _params === void 0 ? void 0 : _params.uri,
            defs
        };
        for (const entry of input._idmap.entries()){
            const [key, schema] = entry;
            schemas[key] = gen.emit(schema, {
                ..._params,
                external
            });
        }
        if (Object.keys(defs).length > 0) {
            const defsSegment = gen.target === "draft-2020-12" ? "$defs" : "definitions";
            schemas.__shared = {
                [defsSegment]: defs
            };
        }
        return {
            schemas
        };
    }
    const gen = new JSONSchemaGenerator(_params);
    gen.process(input);
    return gen.emit(input, _params);
}
function isTransforming(_schema, _ctx) {
    const ctx = _ctx !== null && _ctx !== void 0 ? _ctx : {
        seen: new Set()
    };
    if (ctx.seen.has(_schema)) return false;
    ctx.seen.add(_schema);
    const schema = _schema;
    const def = schema._zod.def;
    switch(def.type){
        case "string":
        case "number":
        case "bigint":
        case "boolean":
        case "date":
        case "symbol":
        case "undefined":
        case "null":
        case "any":
        case "unknown":
        case "never":
        case "void":
        case "literal":
        case "enum":
        case "nan":
        case "file":
        case "template_literal":
            return false;
        case "array":
            {
                return isTransforming(def.element, ctx);
            }
        case "object":
            {
                for(const key in def.shape){
                    if (isTransforming(def.shape[key], ctx)) return true;
                }
                return false;
            }
        case "union":
            {
                for (const option of def.options){
                    if (isTransforming(option, ctx)) return true;
                }
                return false;
            }
        case "intersection":
            {
                return isTransforming(def.left, ctx) || isTransforming(def.right, ctx);
            }
        case "tuple":
            {
                for (const item of def.items){
                    if (isTransforming(item, ctx)) return true;
                }
                if (def.rest && isTransforming(def.rest, ctx)) return true;
                return false;
            }
        case "record":
            {
                return isTransforming(def.keyType, ctx) || isTransforming(def.valueType, ctx);
            }
        case "map":
            {
                return isTransforming(def.keyType, ctx) || isTransforming(def.valueType, ctx);
            }
        case "set":
            {
                return isTransforming(def.valueType, ctx);
            }
        // inner types
        case "promise":
        case "optional":
        case "nonoptional":
        case "nullable":
        case "readonly":
            return isTransforming(def.innerType, ctx);
        case "lazy":
            return isTransforming(def.getter(), ctx);
        case "default":
            {
                return isTransforming(def.innerType, ctx);
            }
        case "prefault":
            {
                return isTransforming(def.innerType, ctx);
            }
        case "custom":
            {
                return false;
            }
        case "transform":
            {
                return true;
            }
        case "pipe":
            {
                return isTransforming(def.in, ctx) || isTransforming(def.out, ctx);
            }
        case "success":
            {
                return false;
            }
        case "catch":
            {
                return false;
            }
        default:
            def;
    }
    throw new Error("Unknown schema type: ".concat(def.type));
}
}),
"[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/core.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** A special constant with type `never` */ __turbopack_context__.s([
    "$ZodAsyncError",
    ()=>$ZodAsyncError,
    "$brand",
    ()=>$brand,
    "$constructor",
    ()=>$constructor,
    "NEVER",
    ()=>NEVER,
    "config",
    ()=>config,
    "globalConfig",
    ()=>globalConfig
]);
const NEVER = Object.freeze({
    status: "aborted"
});
/*@__NO_SIDE_EFFECTS__*/ function $constructor(name, initializer, params) {
    function init(inst, def) {
        var _a;
        var _inst__zod;
        Object.defineProperty(inst, "_zod", {
            value: (_inst__zod = inst._zod) !== null && _inst__zod !== void 0 ? _inst__zod : {},
            enumerable: false
        });
        var _traits;
        (_traits = (_a = inst._zod).traits) !== null && _traits !== void 0 ? _traits : _a.traits = new Set();
        inst._zod.traits.add(name);
        initializer(inst, def);
        // support prototype modifications
        for(const k in _.prototype){
            if (!(k in inst)) Object.defineProperty(inst, k, {
                value: _.prototype[k].bind(inst)
            });
        }
        inst._zod.constr = _;
        inst._zod.def = def;
    }
    var _params_Parent;
    // doesn't work if Parent has a constructor with arguments
    const Parent = (_params_Parent = params === null || params === void 0 ? void 0 : params.Parent) !== null && _params_Parent !== void 0 ? _params_Parent : Object;
    class Definition extends Parent {
    }
    Object.defineProperty(Definition, "name", {
        value: name
    });
    function _(def) {
        var _a;
        const inst = (params === null || params === void 0 ? void 0 : params.Parent) ? new Definition() : this;
        init(inst, def);
        var _deferred;
        (_deferred = (_a = inst._zod).deferred) !== null && _deferred !== void 0 ? _deferred : _a.deferred = [];
        for (const fn of inst._zod.deferred){
            fn();
        }
        return inst;
    }
    Object.defineProperty(_, "init", {
        value: init
    });
    Object.defineProperty(_, Symbol.hasInstance, {
        value: (inst)=>{
            var _inst__zod_traits, _inst__zod;
            if ((params === null || params === void 0 ? void 0 : params.Parent) && inst instanceof params.Parent) return true;
            return inst === null || inst === void 0 ? void 0 : (_inst__zod = inst._zod) === null || _inst__zod === void 0 ? void 0 : (_inst__zod_traits = _inst__zod.traits) === null || _inst__zod_traits === void 0 ? void 0 : _inst__zod_traits.has(name);
        }
    });
    Object.defineProperty(_, "name", {
        value: name
    });
    return _;
}
const $brand = Symbol("zod_brand");
class $ZodAsyncError extends Error {
    constructor(){
        super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
    }
}
const globalConfig = {};
function config(newConfig) {
    if (newConfig) Object.assign(globalConfig, newConfig);
    return globalConfig;
}
}),
"[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/errors.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "$ZodError",
    ()=>$ZodError,
    "$ZodRealError",
    ()=>$ZodRealError,
    "flattenError",
    ()=>flattenError,
    "formatError",
    ()=>formatError,
    "prettifyError",
    ()=>prettifyError,
    "toDotPath",
    ()=>toDotPath,
    "treeifyError",
    ()=>treeifyError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/util.js [app-client] (ecmascript)");
;
;
const initializer = (inst, def)=>{
    inst.name = "$ZodError";
    Object.defineProperty(inst, "_zod", {
        value: inst._zod,
        enumerable: false
    });
    Object.defineProperty(inst, "issues", {
        value: def,
        enumerable: false
    });
    inst.message = JSON.stringify(def, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsonStringifyReplacer"], 2);
    Object.defineProperty(inst, "toString", {
        value: ()=>inst.message,
        enumerable: false
    });
};
const $ZodError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"])("$ZodError", initializer);
const $ZodRealError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"])("$ZodError", initializer, {
    Parent: Error
});
function flattenError(error) {
    let mapper = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : (issue)=>issue.message;
    const fieldErrors = {};
    const formErrors = [];
    for (const sub of error.issues){
        if (sub.path.length > 0) {
            fieldErrors[sub.path[0]] = fieldErrors[sub.path[0]] || [];
            fieldErrors[sub.path[0]].push(mapper(sub));
        } else {
            formErrors.push(mapper(sub));
        }
    }
    return {
        formErrors,
        fieldErrors
    };
}
function formatError(error, _mapper) {
    const mapper = _mapper || function(issue) {
        return issue.message;
    };
    const fieldErrors = {
        _errors: []
    };
    const processError = (error)=>{
        for (const issue of error.issues){
            if (issue.code === "invalid_union" && issue.errors.length) {
                issue.errors.map((issues)=>processError({
                        issues
                    }));
            } else if (issue.code === "invalid_key") {
                processError({
                    issues: issue.issues
                });
            } else if (issue.code === "invalid_element") {
                processError({
                    issues: issue.issues
                });
            } else if (issue.path.length === 0) {
                fieldErrors._errors.push(mapper(issue));
            } else {
                let curr = fieldErrors;
                let i = 0;
                while(i < issue.path.length){
                    const el = issue.path[i];
                    const terminal = i === issue.path.length - 1;
                    if (!terminal) {
                        curr[el] = curr[el] || {
                            _errors: []
                        };
                    } else {
                        curr[el] = curr[el] || {
                            _errors: []
                        };
                        curr[el]._errors.push(mapper(issue));
                    }
                    curr = curr[el];
                    i++;
                }
            }
        }
    };
    processError(error);
    return fieldErrors;
}
function treeifyError(error, _mapper) {
    const mapper = _mapper || function(issue) {
        return issue.message;
    };
    const result = {
        errors: []
    };
    const processError = function(error) {
        let path = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
        var _a, _b;
        for (const issue of error.issues){
            if (issue.code === "invalid_union" && issue.errors.length) {
                // regular union error
                issue.errors.map((issues)=>processError({
                        issues
                    }, issue.path));
            } else if (issue.code === "invalid_key") {
                processError({
                    issues: issue.issues
                }, issue.path);
            } else if (issue.code === "invalid_element") {
                processError({
                    issues: issue.issues
                }, issue.path);
            } else {
                const fullpath = [
                    ...path,
                    ...issue.path
                ];
                if (fullpath.length === 0) {
                    result.errors.push(mapper(issue));
                    continue;
                }
                let curr = result;
                let i = 0;
                while(i < fullpath.length){
                    const el = fullpath[i];
                    const terminal = i === fullpath.length - 1;
                    if (typeof el === "string") {
                        var _curr_properties;
                        (_curr_properties = curr.properties) !== null && _curr_properties !== void 0 ? _curr_properties : curr.properties = {};
                        var _el;
                        (_el = (_a = curr.properties)[el]) !== null && _el !== void 0 ? _el : _a[el] = {
                            errors: []
                        };
                        curr = curr.properties[el];
                    } else {
                        var _curr_items;
                        (_curr_items = curr.items) !== null && _curr_items !== void 0 ? _curr_items : curr.items = [];
                        var _el1;
                        (_el1 = (_b = curr.items)[el]) !== null && _el1 !== void 0 ? _el1 : _b[el] = {
                            errors: []
                        };
                        curr = curr.items[el];
                    }
                    if (terminal) {
                        curr.errors.push(mapper(issue));
                    }
                    i++;
                }
            }
        }
    };
    processError(error);
    return result;
}
function toDotPath(_path) {
    const segs = [];
    const path = _path.map((seg)=>typeof seg === "object" ? seg.key : seg);
    for (const seg of path){
        if (typeof seg === "number") segs.push("[".concat(seg, "]"));
        else if (typeof seg === "symbol") segs.push("[".concat(JSON.stringify(String(seg)), "]"));
        else if (/[^\w$]/.test(seg)) segs.push("[".concat(JSON.stringify(seg), "]"));
        else {
            if (segs.length) segs.push(".");
            segs.push(seg);
        }
    }
    return segs.join("");
}
function prettifyError(error) {
    const lines = [];
    // sort by path length
    const issues = [
        ...error.issues
    ].sort((a, b)=>{
        var _a_path, _b_path;
        return ((_a_path = a.path) !== null && _a_path !== void 0 ? _a_path : []).length - ((_b_path = b.path) !== null && _b_path !== void 0 ? _b_path : []).length;
    });
    // Process each issue
    for (const issue of issues){
        var _issue_path;
        lines.push("✖ ".concat(issue.message));
        if ((_issue_path = issue.path) === null || _issue_path === void 0 ? void 0 : _issue_path.length) lines.push("  → at ".concat(toDotPath(issue.path)));
    }
    // Convert Map to formatted string
    return lines.join("\n");
}
}),
"[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/parse.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_parse",
    ()=>_parse,
    "_parseAsync",
    ()=>_parseAsync,
    "_safeParse",
    ()=>_safeParse,
    "_safeParseAsync",
    ()=>_safeParseAsync,
    "parse",
    ()=>parse,
    "parseAsync",
    ()=>parseAsync,
    "safeParse",
    ()=>safeParse,
    "safeParseAsync",
    ()=>safeParseAsync
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/util.js [app-client] (ecmascript)");
;
;
;
const _parse = (_Err)=>(schema, value, _ctx, _params)=>{
        const ctx = _ctx ? Object.assign(_ctx, {
            async: false
        }) : {
            async: false
        };
        const result = schema._zod.run({
            value,
            issues: []
        }, ctx);
        if (result instanceof Promise) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodAsyncError"]();
        }
        if (result.issues.length) {
            var _params_Err;
            const e = new ((_params_Err = _params === null || _params === void 0 ? void 0 : _params.Err) !== null && _params_Err !== void 0 ? _params_Err : _Err)(result.issues.map((iss)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["finalizeIssue"](iss, ctx, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["config"]())));
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["captureStackTrace"](e, _params === null || _params === void 0 ? void 0 : _params.callee);
            throw e;
        }
        return result.value;
    };
const parse = /* @__PURE__*/ _parse(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodRealError"]);
const _parseAsync = (_Err)=>async (schema, value, _ctx, params)=>{
        const ctx = _ctx ? Object.assign(_ctx, {
            async: true
        }) : {
            async: true
        };
        let result = schema._zod.run({
            value,
            issues: []
        }, ctx);
        if (result instanceof Promise) result = await result;
        if (result.issues.length) {
            var _params_Err;
            const e = new ((_params_Err = params === null || params === void 0 ? void 0 : params.Err) !== null && _params_Err !== void 0 ? _params_Err : _Err)(result.issues.map((iss)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["finalizeIssue"](iss, ctx, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["config"]())));
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["captureStackTrace"](e, params === null || params === void 0 ? void 0 : params.callee);
            throw e;
        }
        return result.value;
    };
const parseAsync = /* @__PURE__*/ _parseAsync(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodRealError"]);
const _safeParse = (_Err)=>(schema, value, _ctx)=>{
        const ctx = _ctx ? {
            ..._ctx,
            async: false
        } : {
            async: false
        };
        const result = schema._zod.run({
            value,
            issues: []
        }, ctx);
        if (result instanceof Promise) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodAsyncError"]();
        }
        return result.issues.length ? {
            success: false,
            error: new (_Err !== null && _Err !== void 0 ? _Err : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodError"])(result.issues.map((iss)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["finalizeIssue"](iss, ctx, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["config"]())))
        } : {
            success: true,
            data: result.value
        };
    };
const safeParse = /* @__PURE__*/ _safeParse(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodRealError"]);
const _safeParseAsync = (_Err)=>async (schema, value, _ctx)=>{
        const ctx = _ctx ? Object.assign(_ctx, {
            async: true
        }) : {
            async: true
        };
        let result = schema._zod.run({
            value,
            issues: []
        }, ctx);
        if (result instanceof Promise) result = await result;
        return result.issues.length ? {
            success: false,
            error: new _Err(result.issues.map((iss)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["finalizeIssue"](iss, ctx, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["config"]())))
        } : {
            success: true,
            data: result.value
        };
    };
const safeParseAsync = /* @__PURE__*/ _safeParseAsync(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodRealError"]);
}),
"[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/classic/errors.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ZodError",
    ()=>ZodError,
    "ZodRealError",
    ()=>ZodRealError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/util.js [app-client] (ecmascript)");
;
;
;
const initializer = (inst, issues)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodError"].init(inst, issues);
    inst.name = "ZodError";
    Object.defineProperties(inst, {
        format: {
            value: (mapper)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatError"](inst, mapper)
        },
        flatten: {
            value: (mapper)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flattenError"](inst, mapper)
        },
        addIssue: {
            value: (issue)=>{
                inst.issues.push(issue);
                inst.message = JSON.stringify(inst.issues, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsonStringifyReplacer"], 2);
            }
        },
        addIssues: {
            value: (issues)=>{
                inst.issues.push(...issues);
                inst.message = JSON.stringify(inst.issues, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsonStringifyReplacer"], 2);
            }
        },
        isEmpty: {
            get () {
                return inst.issues.length === 0;
            }
        }
    });
// Object.defineProperty(inst, "isEmpty", {
//   get() {
//     return inst.issues.length === 0;
//   },
// });
};
const ZodError = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("ZodError", initializer);
const ZodRealError = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("ZodError", initializer, {
    Parent: Error
}); // /** @deprecated Use `z.core.$ZodErrorMapCtx` instead. */
 // export type ErrorMapCtx = core.$ZodErrorMapCtx;
}),
"[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/classic/parse.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parse",
    ()=>parse,
    "parseAsync",
    ()=>parseAsync,
    "safeParse",
    ()=>safeParse,
    "safeParseAsync",
    ()=>safeParseAsync
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$parse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/parse.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/classic/errors.js [app-client] (ecmascript)");
;
;
const parse = /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$parse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_parse"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZodRealError"]);
const parseAsync = /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$parse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_parseAsync"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZodRealError"]);
const safeParse = /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$parse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_safeParse"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZodRealError"]);
const safeParseAsync = /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$parse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_safeParseAsync"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZodRealError"]);
}),
"[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/classic/compat.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

// Zod 3 compat layer
__turbopack_context__.s([
    "ZodFirstPartyTypeKind",
    ()=>ZodFirstPartyTypeKind,
    "ZodIssueCode",
    ()=>ZodIssueCode,
    "getErrorMap",
    ()=>getErrorMap,
    "setErrorMap",
    ()=>setErrorMap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/core.js [app-client] (ecmascript)");
;
const ZodIssueCode = {
    invalid_type: "invalid_type",
    too_big: "too_big",
    too_small: "too_small",
    invalid_format: "invalid_format",
    not_multiple_of: "not_multiple_of",
    unrecognized_keys: "unrecognized_keys",
    invalid_union: "invalid_union",
    invalid_key: "invalid_key",
    invalid_element: "invalid_element",
    invalid_value: "invalid_value",
    custom: "custom"
};
;
function setErrorMap(map) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["config"]({
        customError: map
    });
}
function getErrorMap() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["config"]().customError;
}
var ZodFirstPartyTypeKind;
(function(ZodFirstPartyTypeKind) {})(ZodFirstPartyTypeKind || (ZodFirstPartyTypeKind = {}));
}),
"[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/regexes.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "base64",
    ()=>base64,
    "base64url",
    ()=>base64url,
    "bigint",
    ()=>bigint,
    "boolean",
    ()=>boolean,
    "browserEmail",
    ()=>browserEmail,
    "cidrv4",
    ()=>cidrv4,
    "cidrv6",
    ()=>cidrv6,
    "cuid",
    ()=>cuid,
    "cuid2",
    ()=>cuid2,
    "date",
    ()=>date,
    "datetime",
    ()=>datetime,
    "domain",
    ()=>domain,
    "duration",
    ()=>duration,
    "e164",
    ()=>e164,
    "email",
    ()=>email,
    "emoji",
    ()=>emoji,
    "extendedDuration",
    ()=>extendedDuration,
    "guid",
    ()=>guid,
    "hostname",
    ()=>hostname,
    "html5Email",
    ()=>html5Email,
    "idnEmail",
    ()=>idnEmail,
    "integer",
    ()=>integer,
    "ipv4",
    ()=>ipv4,
    "ipv6",
    ()=>ipv6,
    "ksuid",
    ()=>ksuid,
    "lowercase",
    ()=>lowercase,
    "nanoid",
    ()=>nanoid,
    "null",
    ()=>_null,
    "number",
    ()=>number,
    "rfc5322Email",
    ()=>rfc5322Email,
    "string",
    ()=>string,
    "time",
    ()=>time,
    "ulid",
    ()=>ulid,
    "undefined",
    ()=>_undefined,
    "unicodeEmail",
    ()=>unicodeEmail,
    "uppercase",
    ()=>uppercase,
    "uuid",
    ()=>uuid,
    "uuid4",
    ()=>uuid4,
    "uuid6",
    ()=>uuid6,
    "uuid7",
    ()=>uuid7,
    "xid",
    ()=>xid
]);
const cuid = /^[cC][^\s-]{8,}$/;
const cuid2 = /^[0-9a-z]+$/;
const ulid = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/;
const xid = /^[0-9a-vA-V]{20}$/;
const ksuid = /^[A-Za-z0-9]{27}$/;
const nanoid = /^[a-zA-Z0-9_-]{21}$/;
const duration = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/;
const extendedDuration = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/;
const guid = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/;
const uuid = (version)=>{
    if (!version) return /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000)$/;
    return new RegExp("^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-".concat(version, "[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$"));
};
const uuid4 = /*@__PURE__*/ uuid(4);
const uuid6 = /*@__PURE__*/ uuid(6);
const uuid7 = /*@__PURE__*/ uuid(7);
const email = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/;
const html5Email = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
const rfc5322Email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const unicodeEmail = /^[^\s@"]{1,64}@[^\s@]{1,255}$/u;
const idnEmail = /^[^\s@"]{1,64}@[^\s@]{1,255}$/u;
const browserEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
// from https://thekevinscott.com/emojis-in-javascript/#writing-a-regular-expression
const _emoji = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
function emoji() {
    return new RegExp(_emoji, "u");
}
const ipv4 = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
const ipv6 = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})$/;
const cidrv4 = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/;
const cidrv6 = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
const base64 = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/;
const base64url = /^[A-Za-z0-9_-]*$/;
const hostname = /^(?=.{1,253}\.?$)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[-0-9a-zA-Z]{0,61}[0-9a-zA-Z])?)*\.?$/;
const domain = /^([a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/;
const e164 = /^\+(?:[0-9]){6,14}[0-9]$/;
// const dateSource = `((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))`;
const dateSource = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))";
const date = /*@__PURE__*/ new RegExp("^".concat(dateSource, "$"));
function timeSource(args) {
    const hhmm = "(?:[01]\\d|2[0-3]):[0-5]\\d";
    const regex = typeof args.precision === "number" ? args.precision === -1 ? "".concat(hhmm) : args.precision === 0 ? "".concat(hhmm, ":[0-5]\\d") : "".concat(hhmm, ":[0-5]\\d\\.\\d{").concat(args.precision, "}") : "".concat(hhmm, "(?::[0-5]\\d(?:\\.\\d+)?)?");
    return regex;
}
function time(args) {
    return new RegExp("^".concat(timeSource(args), "$"));
}
function datetime(args) {
    const time = timeSource({
        precision: args.precision
    });
    const opts = [
        "Z"
    ];
    if (args.local) opts.push("");
    // if (args.offset) opts.push(`([+-]\\d{2}:\\d{2})`);
    if (args.offset) opts.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
    const timeRegex = "".concat(time, "(?:").concat(opts.join("|"), ")");
    return new RegExp("^".concat(dateSource, "T(?:").concat(timeRegex, ")$"));
}
const string = (params)=>{
    var _params_minimum, _params_maximum;
    const regex = params ? "[\\s\\S]{".concat((_params_minimum = params === null || params === void 0 ? void 0 : params.minimum) !== null && _params_minimum !== void 0 ? _params_minimum : 0, ",").concat((_params_maximum = params === null || params === void 0 ? void 0 : params.maximum) !== null && _params_maximum !== void 0 ? _params_maximum : "", "}") : "[\\s\\S]*";
    return new RegExp("^".concat(regex, "$"));
};
const bigint = /^\d+n?$/;
const integer = /^\d+$/;
const number = /^-?\d+(?:\.\d+)?/i;
const boolean = /true|false/i;
const _null = /null/i;
;
const _undefined = /undefined/i;
;
const lowercase = /^[^A-Z]*$/;
const uppercase = /^[^a-z]*$/;
}),
"[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/locales/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
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
}),
"[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/locales/ar.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/util.js [app-client] (ecmascript)");
;
const error = ()=>{
    const Sizable = {
        string: {
            unit: "حرف",
            verb: "أن يحوي"
        },
        file: {
            unit: "بايت",
            verb: "أن يحوي"
        },
        array: {
            unit: "عنصر",
            verb: "أن يحوي"
        },
        set: {
            unit: "عنصر",
            verb: "أن يحوي"
        }
    };
    function getSizing(origin) {
        var _Sizable_origin;
        return (_Sizable_origin = Sizable[origin]) !== null && _Sizable_origin !== void 0 ? _Sizable_origin : null;
    }
    const parsedType = (data)=>{
        const t = typeof data;
        switch(t){
            case "number":
                {
                    return Number.isNaN(data) ? "NaN" : "number";
                }
            case "object":
                {
                    if (Array.isArray(data)) {
                        return "array";
                    }
                    if (data === null) {
                        return "null";
                    }
                    if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                        return data.constructor.name;
                    }
                }
        }
        return t;
    };
    const Nouns = {
        regex: "مدخل",
        email: "بريد إلكتروني",
        url: "رابط",
        emoji: "إيموجي",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "تاريخ ووقت بمعيار ISO",
        date: "تاريخ بمعيار ISO",
        time: "وقت بمعيار ISO",
        duration: "مدة بمعيار ISO",
        ipv4: "عنوان IPv4",
        ipv6: "عنوان IPv6",
        cidrv4: "مدى عناوين بصيغة IPv4",
        cidrv6: "مدى عناوين بصيغة IPv6",
        base64: "نَص بترميز base64-encoded",
        base64url: "نَص بترميز base64url-encoded",
        json_string: "نَص على هيئة JSON",
        e164: "رقم هاتف بمعيار E.164",
        jwt: "JWT",
        template_literal: "مدخل"
    };
    return (issue)=>{
        switch(issue.code){
            case "invalid_type":
                return "مدخلات غير مقبولة: يفترض إدخال ".concat(issue.expected, "، ولكن تم إدخال ").concat(parsedType(issue.input));
            case "invalid_value":
                if (issue.values.length === 1) return "مدخلات غير مقبولة: يفترض إدخال ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringifyPrimitive"](issue.values[0]));
                return "اختيار غير مقبول: يتوقع انتقاء أحد هذه الخيارات: ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.values, "|"));
            case "too_big":
                {
                    const adj = issue.inclusive ? "<=" : "<";
                    const sizing = getSizing(issue.origin);
                    var _issue_origin, _sizing_unit;
                    if (sizing) return " أكبر من اللازم: يفترض أن تكون ".concat((_issue_origin = issue.origin) !== null && _issue_origin !== void 0 ? _issue_origin : "القيمة", " ").concat(adj, " ").concat(issue.maximum.toString(), " ").concat((_sizing_unit = sizing.unit) !== null && _sizing_unit !== void 0 ? _sizing_unit : "عنصر");
                    var _issue_origin1;
                    return "أكبر من اللازم: يفترض أن تكون ".concat((_issue_origin1 = issue.origin) !== null && _issue_origin1 !== void 0 ? _issue_origin1 : "القيمة", " ").concat(adj, " ").concat(issue.maximum.toString());
                }
            case "too_small":
                {
                    const adj = issue.inclusive ? ">=" : ">";
                    const sizing = getSizing(issue.origin);
                    if (sizing) {
                        return "أصغر من اللازم: يفترض لـ ".concat(issue.origin, " أن يكون ").concat(adj, " ").concat(issue.minimum.toString(), " ").concat(sizing.unit);
                    }
                    return "أصغر من اللازم: يفترض لـ ".concat(issue.origin, " أن يكون ").concat(adj, " ").concat(issue.minimum.toString());
                }
            case "invalid_format":
                {
                    const _issue = issue;
                    if (_issue.format === "starts_with") return 'نَص غير مقبول: يجب أن يبدأ بـ "'.concat(issue.prefix, '"');
                    if (_issue.format === "ends_with") return 'نَص غير مقبول: يجب أن ينتهي بـ "'.concat(_issue.suffix, '"');
                    if (_issue.format === "includes") return 'نَص غير مقبول: يجب أن يتضمَّن "'.concat(_issue.includes, '"');
                    if (_issue.format === "regex") return "نَص غير مقبول: يجب أن يطابق النمط ".concat(_issue.pattern);
                    var _Nouns__issue_format;
                    return "".concat((_Nouns__issue_format = Nouns[_issue.format]) !== null && _Nouns__issue_format !== void 0 ? _Nouns__issue_format : issue.format, " غير مقبول");
                }
            case "not_multiple_of":
                return "رقم غير مقبول: يجب أن يكون من مضاعفات ".concat(issue.divisor);
            case "unrecognized_keys":
                return "معرف".concat(issue.keys.length > 1 ? "ات" : "", " غريب").concat(issue.keys.length > 1 ? "ة" : "", ": ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.keys, "، "));
            case "invalid_key":
                return "معرف غير مقبول في ".concat(issue.origin);
            case "invalid_union":
                return "مدخل غير مقبول";
            case "invalid_element":
                return "مدخل غير مقبول في ".concat(issue.origin);
            default:
                return "مدخل غير مقبول";
        }
    };
};
function __TURBOPACK__default__export__() {
    return {
        localeError: error()
    };
}
}),
"[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/locales/az.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/util.js [app-client] (ecmascript)");
;
const error = ()=>{
    const Sizable = {
        string: {
            unit: "simvol",
            verb: "olmalıdır"
        },
        file: {
            unit: "bayt",
            verb: "olmalıdır"
        },
        array: {
            unit: "element",
            verb: "olmalıdır"
        },
        set: {
            unit: "element",
            verb: "olmalıdır"
        }
    };
    function getSizing(origin) {
        var _Sizable_origin;
        return (_Sizable_origin = Sizable[origin]) !== null && _Sizable_origin !== void 0 ? _Sizable_origin : null;
    }
    const parsedType = (data)=>{
        const t = typeof data;
        switch(t){
            case "number":
                {
                    return Number.isNaN(data) ? "NaN" : "number";
                }
            case "object":
                {
                    if (Array.isArray(data)) {
                        return "array";
                    }
                    if (data === null) {
                        return "null";
                    }
                    if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                        return data.constructor.name;
                    }
                }
        }
        return t;
    };
    const Nouns = {
        regex: "input",
        email: "email address",
        url: "URL",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ISO datetime",
        date: "ISO date",
        time: "ISO time",
        duration: "ISO duration",
        ipv4: "IPv4 address",
        ipv6: "IPv6 address",
        cidrv4: "IPv4 range",
        cidrv6: "IPv6 range",
        base64: "base64-encoded string",
        base64url: "base64url-encoded string",
        json_string: "JSON string",
        e164: "E.164 number",
        jwt: "JWT",
        template_literal: "input"
    };
    return (issue)=>{
        switch(issue.code){
            case "invalid_type":
                return "Yanlış dəyər: gözlənilən ".concat(issue.expected, ", daxil olan ").concat(parsedType(issue.input));
            case "invalid_value":
                if (issue.values.length === 1) return "Yanlış dəyər: gözlənilən ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringifyPrimitive"](issue.values[0]));
                return "Yanlış seçim: aşağıdakılardan biri olmalıdır: ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.values, "|"));
            case "too_big":
                {
                    const adj = issue.inclusive ? "<=" : "<";
                    const sizing = getSizing(issue.origin);
                    var _issue_origin, _sizing_unit;
                    if (sizing) return "Çox böyük: gözlənilən ".concat((_issue_origin = issue.origin) !== null && _issue_origin !== void 0 ? _issue_origin : "dəyər", " ").concat(adj).concat(issue.maximum.toString(), " ").concat((_sizing_unit = sizing.unit) !== null && _sizing_unit !== void 0 ? _sizing_unit : "element");
                    var _issue_origin1;
                    return "Çox böyük: gözlənilən ".concat((_issue_origin1 = issue.origin) !== null && _issue_origin1 !== void 0 ? _issue_origin1 : "dəyər", " ").concat(adj).concat(issue.maximum.toString());
                }
            case "too_small":
                {
                    const adj = issue.inclusive ? ">=" : ">";
                    const sizing = getSizing(issue.origin);
                    if (sizing) return "Çox kiçik: gözlənilən ".concat(issue.origin, " ").concat(adj).concat(issue.minimum.toString(), " ").concat(sizing.unit);
                    return "Çox kiçik: gözlənilən ".concat(issue.origin, " ").concat(adj).concat(issue.minimum.toString());
                }
            case "invalid_format":
                {
                    const _issue = issue;
                    if (_issue.format === "starts_with") return 'Yanlış mətn: "'.concat(_issue.prefix, '" ilə başlamalıdır');
                    if (_issue.format === "ends_with") return 'Yanlış mətn: "'.concat(_issue.suffix, '" ilə bitməlidir');
                    if (_issue.format === "includes") return 'Yanlış mətn: "'.concat(_issue.includes, '" daxil olmalıdır');
                    if (_issue.format === "regex") return "Yanlış mətn: ".concat(_issue.pattern, " şablonuna uyğun olmalıdır");
                    var _Nouns__issue_format;
                    return "Yanlış ".concat((_Nouns__issue_format = Nouns[_issue.format]) !== null && _Nouns__issue_format !== void 0 ? _Nouns__issue_format : issue.format);
                }
            case "not_multiple_of":
                return "Yanlış ədəd: ".concat(issue.divisor, " ilə bölünə bilən olmalıdır");
            case "unrecognized_keys":
                return "Tanınmayan açar".concat(issue.keys.length > 1 ? "lar" : "", ": ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.keys, ", "));
            case "invalid_key":
                return "".concat(issue.origin, " daxilində yanlış açar");
            case "invalid_union":
                return "Yanlış dəyər";
            case "invalid_element":
                return "".concat(issue.origin, " daxilində yanlış dəyər");
            default:
                return "Yanlış dəyər";
        }
    };
};
function __TURBOPACK__default__export__() {
    return {
        localeError: error()
    };
}
}),
"[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/locales/be.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/util.js [app-client] (ecmascript)");
;
function getBelarusianPlural(count, one, few, many) {
    const absCount = Math.abs(count);
    const lastDigit = absCount % 10;
    const lastTwoDigits = absCount % 100;
    if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
        return many;
    }
    if (lastDigit === 1) {
        return one;
    }
    if (lastDigit >= 2 && lastDigit <= 4) {
        return few;
    }
    return many;
}
const error = ()=>{
    const Sizable = {
        string: {
            unit: {
                one: "сімвал",
                few: "сімвалы",
                many: "сімвалаў"
            },
            verb: "мець"
        },
        array: {
            unit: {
                one: "элемент",
                few: "элементы",
                many: "элементаў"
            },
            verb: "мець"
        },
        set: {
            unit: {
                one: "элемент",
                few: "элементы",
                many: "элементаў"
            },
            verb: "мець"
        },
        file: {
            unit: {
                one: "байт",
                few: "байты",
                many: "байтаў"
            },
            verb: "мець"
        }
    };
    function getSizing(origin) {
        var _Sizable_origin;
        return (_Sizable_origin = Sizable[origin]) !== null && _Sizable_origin !== void 0 ? _Sizable_origin : null;
    }
    const parsedType = (data)=>{
        const t = typeof data;
        switch(t){
            case "number":
                {
                    return Number.isNaN(data) ? "NaN" : "лік";
                }
            case "object":
                {
                    if (Array.isArray(data)) {
                        return "масіў";
                    }
                    if (data === null) {
                        return "null";
                    }
                    if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                        return data.constructor.name;
                    }
                }
        }
        return t;
    };
    const Nouns = {
        regex: "увод",
        email: "email адрас",
        url: "URL",
        emoji: "эмодзі",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ISO дата і час",
        date: "ISO дата",
        time: "ISO час",
        duration: "ISO працягласць",
        ipv4: "IPv4 адрас",
        ipv6: "IPv6 адрас",
        cidrv4: "IPv4 дыяпазон",
        cidrv6: "IPv6 дыяпазон",
        base64: "радок у фармаце base64",
        base64url: "радок у фармаце base64url",
        json_string: "JSON радок",
        e164: "нумар E.164",
        jwt: "JWT",
        template_literal: "увод"
    };
    return (issue)=>{
        switch(issue.code){
            case "invalid_type":
                return "Няправільны ўвод: чакаўся ".concat(issue.expected, ", атрымана ").concat(parsedType(issue.input));
            case "invalid_value":
                if (issue.values.length === 1) return "Няправільны ўвод: чакалася ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringifyPrimitive"](issue.values[0]));
                return "Няправільны варыянт: чакаўся адзін з ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.values, "|"));
            case "too_big":
                {
                    const adj = issue.inclusive ? "<=" : "<";
                    const sizing = getSizing(issue.origin);
                    if (sizing) {
                        const maxValue = Number(issue.maximum);
                        const unit = getBelarusianPlural(maxValue, sizing.unit.one, sizing.unit.few, sizing.unit.many);
                        var _issue_origin;
                        return "Занадта вялікі: чакалася, што ".concat((_issue_origin = issue.origin) !== null && _issue_origin !== void 0 ? _issue_origin : "значэнне", " павінна ").concat(sizing.verb, " ").concat(adj).concat(issue.maximum.toString(), " ").concat(unit);
                    }
                    var _issue_origin1;
                    return "Занадта вялікі: чакалася, што ".concat((_issue_origin1 = issue.origin) !== null && _issue_origin1 !== void 0 ? _issue_origin1 : "значэнне", " павінна быць ").concat(adj).concat(issue.maximum.toString());
                }
            case "too_small":
                {
                    const adj = issue.inclusive ? ">=" : ">";
                    const sizing = getSizing(issue.origin);
                    if (sizing) {
                        const minValue = Number(issue.minimum);
                        const unit = getBelarusianPlural(minValue, sizing.unit.one, sizing.unit.few, sizing.unit.many);
                        return "Занадта малы: чакалася, што ".concat(issue.origin, " павінна ").concat(sizing.verb, " ").concat(adj).concat(issue.minimum.toString(), " ").concat(unit);
                    }
                    return "Занадта малы: чакалася, што ".concat(issue.origin, " павінна быць ").concat(adj).concat(issue.minimum.toString());
                }
            case "invalid_format":
                {
                    const _issue = issue;
                    if (_issue.format === "starts_with") return 'Няправільны радок: павінен пачынацца з "'.concat(_issue.prefix, '"');
                    if (_issue.format === "ends_with") return 'Няправільны радок: павінен заканчвацца на "'.concat(_issue.suffix, '"');
                    if (_issue.format === "includes") return 'Няправільны радок: павінен змяшчаць "'.concat(_issue.includes, '"');
                    if (_issue.format === "regex") return "Няправільны радок: павінен адпавядаць шаблону ".concat(_issue.pattern);
                    var _Nouns__issue_format;
                    return "Няправільны ".concat((_Nouns__issue_format = Nouns[_issue.format]) !== null && _Nouns__issue_format !== void 0 ? _Nouns__issue_format : issue.format);
                }
            case "not_multiple_of":
                return "Няправільны лік: павінен быць кратным ".concat(issue.divisor);
            case "unrecognized_keys":
                return "Нераспазнаны ".concat(issue.keys.length > 1 ? "ключы" : "ключ", ": ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.keys, ", "));
            case "invalid_key":
                return "Няправільны ключ у ".concat(issue.origin);
            case "invalid_union":
                return "Няправільны ўвод";
            case "invalid_element":
                return "Няправільнае значэнне ў ".concat(issue.origin);
            default:
                return "Няправільны ўвод";
        }
    };
};
function __TURBOPACK__default__export__() {
    return {
        localeError: error()
    };
}
}),
"[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/locales/ca.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/util.js [app-client] (ecmascript)");
;
const error = ()=>{
    const Sizable = {
        string: {
            unit: "caràcters",
            verb: "contenir"
        },
        file: {
            unit: "bytes",
            verb: "contenir"
        },
        array: {
            unit: "elements",
            verb: "contenir"
        },
        set: {
            unit: "elements",
            verb: "contenir"
        }
    };
    function getSizing(origin) {
        var _Sizable_origin;
        return (_Sizable_origin = Sizable[origin]) !== null && _Sizable_origin !== void 0 ? _Sizable_origin : null;
    }
    const parsedType = (data)=>{
        const t = typeof data;
        switch(t){
            case "number":
                {
                    return Number.isNaN(data) ? "NaN" : "number";
                }
            case "object":
                {
                    if (Array.isArray(data)) {
                        return "array";
                    }
                    if (data === null) {
                        return "null";
                    }
                    if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                        return data.constructor.name;
                    }
                }
        }
        return t;
    };
    const Nouns = {
        regex: "entrada",
        email: "adreça electrònica",
        url: "URL",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "data i hora ISO",
        date: "data ISO",
        time: "hora ISO",
        duration: "durada ISO",
        ipv4: "adreça IPv4",
        ipv6: "adreça IPv6",
        cidrv4: "rang IPv4",
        cidrv6: "rang IPv6",
        base64: "cadena codificada en base64",
        base64url: "cadena codificada en base64url",
        json_string: "cadena JSON",
        e164: "número E.164",
        jwt: "JWT",
        template_literal: "entrada"
    };
    return (issue)=>{
        switch(issue.code){
            case "invalid_type":
                return "Tipus invàlid: s'esperava ".concat(issue.expected, ", s'ha rebut ").concat(parsedType(issue.input));
            // return `Tipus invàlid: s'esperava ${issue.expected}, s'ha rebut ${util.getParsedType(issue.input)}`;
            case "invalid_value":
                if (issue.values.length === 1) return "Valor invàlid: s'esperava ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringifyPrimitive"](issue.values[0]));
                return "Opció invàlida: s'esperava una de ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.values, " o "));
            case "too_big":
                {
                    const adj = issue.inclusive ? "com a màxim" : "menys de";
                    const sizing = getSizing(issue.origin);
                    var _issue_origin, _sizing_unit;
                    if (sizing) return "Massa gran: s'esperava que ".concat((_issue_origin = issue.origin) !== null && _issue_origin !== void 0 ? _issue_origin : "el valor", " contingués ").concat(adj, " ").concat(issue.maximum.toString(), " ").concat((_sizing_unit = sizing.unit) !== null && _sizing_unit !== void 0 ? _sizing_unit : "elements");
                    var _issue_origin1;
                    return "Massa gran: s'esperava que ".concat((_issue_origin1 = issue.origin) !== null && _issue_origin1 !== void 0 ? _issue_origin1 : "el valor", " fos ").concat(adj, " ").concat(issue.maximum.toString());
                }
            case "too_small":
                {
                    const adj = issue.inclusive ? "com a mínim" : "més de";
                    const sizing = getSizing(issue.origin);
                    if (sizing) {
                        return "Massa petit: s'esperava que ".concat(issue.origin, " contingués ").concat(adj, " ").concat(issue.minimum.toString(), " ").concat(sizing.unit);
                    }
                    return "Massa petit: s'esperava que ".concat(issue.origin, " fos ").concat(adj, " ").concat(issue.minimum.toString());
                }
            case "invalid_format":
                {
                    const _issue = issue;
                    if (_issue.format === "starts_with") {
                        return 'Format invàlid: ha de començar amb "'.concat(_issue.prefix, '"');
                    }
                    if (_issue.format === "ends_with") return "Format invàlid: ha d'acabar amb \"".concat(_issue.suffix, '"');
                    if (_issue.format === "includes") return "Format invàlid: ha d'incloure \"".concat(_issue.includes, '"');
                    if (_issue.format === "regex") return "Format invàlid: ha de coincidir amb el patró ".concat(_issue.pattern);
                    var _Nouns__issue_format;
                    return "Format invàlid per a ".concat((_Nouns__issue_format = Nouns[_issue.format]) !== null && _Nouns__issue_format !== void 0 ? _Nouns__issue_format : issue.format);
                }
            case "not_multiple_of":
                return "Número invàlid: ha de ser múltiple de ".concat(issue.divisor);
            case "unrecognized_keys":
                return "Clau".concat(issue.keys.length > 1 ? "s" : "", " no reconeguda").concat(issue.keys.length > 1 ? "s" : "", ": ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.keys, ", "));
            case "invalid_key":
                return "Clau invàlida a ".concat(issue.origin);
            case "invalid_union":
                return "Entrada invàlida"; // Could also be "Tipus d'unió invàlid" but "Entrada invàlida" is more general
            case "invalid_element":
                return "Element invàlid a ".concat(issue.origin);
            default:
                return "Entrada invàlida";
        }
    };
};
function __TURBOPACK__default__export__() {
    return {
        localeError: error()
    };
}
}),
"[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/locales/cs.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/util.js [app-client] (ecmascript)");
;
const error = ()=>{
    const Sizable = {
        string: {
            unit: "znaků",
            verb: "mít"
        },
        file: {
            unit: "bajtů",
            verb: "mít"
        },
        array: {
            unit: "prvků",
            verb: "mít"
        },
        set: {
            unit: "prvků",
            verb: "mít"
        }
    };
    function getSizing(origin) {
        var _Sizable_origin;
        return (_Sizable_origin = Sizable[origin]) !== null && _Sizable_origin !== void 0 ? _Sizable_origin : null;
    }
    const parsedType = (data)=>{
        const t = typeof data;
        switch(t){
            case "number":
                {
                    return Number.isNaN(data) ? "NaN" : "číslo";
                }
            case "string":
                {
                    return "řetězec";
                }
            case "boolean":
                {
                    return "boolean";
                }
            case "bigint":
                {
                    return "bigint";
                }
            case "function":
                {
                    return "funkce";
                }
            case "symbol":
                {
                    return "symbol";
                }
            case "undefined":
                {
                    return "undefined";
                }
            case "object":
                {
                    if (Array.isArray(data)) {
                        return "pole";
                    }
                    if (data === null) {
                        return "null";
                    }
                    if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                        return data.constructor.name;
                    }
                }
        }
        return t;
    };
    const Nouns = {
        regex: "regulární výraz",
        email: "e-mailová adresa",
        url: "URL",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "datum a čas ve formátu ISO",
        date: "datum ve formátu ISO",
        time: "čas ve formátu ISO",
        duration: "doba trvání ISO",
        ipv4: "IPv4 adresa",
        ipv6: "IPv6 adresa",
        cidrv4: "rozsah IPv4",
        cidrv6: "rozsah IPv6",
        base64: "řetězec zakódovaný ve formátu base64",
        base64url: "řetězec zakódovaný ve formátu base64url",
        json_string: "řetězec ve formátu JSON",
        e164: "číslo E.164",
        jwt: "JWT",
        template_literal: "vstup"
    };
    return (issue)=>{
        switch(issue.code){
            case "invalid_type":
                return "Neplatný vstup: očekáváno ".concat(issue.expected, ", obdrženo ").concat(parsedType(issue.input));
            case "invalid_value":
                if (issue.values.length === 1) return "Neplatný vstup: očekáváno ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringifyPrimitive"](issue.values[0]));
                return "Neplatná možnost: očekávána jedna z hodnot ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.values, "|"));
            case "too_big":
                {
                    const adj = issue.inclusive ? "<=" : "<";
                    const sizing = getSizing(issue.origin);
                    if (sizing) {
                        var _issue_origin, _sizing_unit;
                        return "Hodnota je příliš velká: ".concat((_issue_origin = issue.origin) !== null && _issue_origin !== void 0 ? _issue_origin : "hodnota", " musí mít ").concat(adj).concat(issue.maximum.toString(), " ").concat((_sizing_unit = sizing.unit) !== null && _sizing_unit !== void 0 ? _sizing_unit : "prvků");
                    }
                    var _issue_origin1;
                    return "Hodnota je příliš velká: ".concat((_issue_origin1 = issue.origin) !== null && _issue_origin1 !== void 0 ? _issue_origin1 : "hodnota", " musí být ").concat(adj).concat(issue.maximum.toString());
                }
            case "too_small":
                {
                    const adj = issue.inclusive ? ">=" : ">";
                    const sizing = getSizing(issue.origin);
                    if (sizing) {
                        var _issue_origin2, _sizing_unit1;
                        return "Hodnota je příliš malá: ".concat((_issue_origin2 = issue.origin) !== null && _issue_origin2 !== void 0 ? _issue_origin2 : "hodnota", " musí mít ").concat(adj).concat(issue.minimum.toString(), " ").concat((_sizing_unit1 = sizing.unit) !== null && _sizing_unit1 !== void 0 ? _sizing_unit1 : "prvků");
                    }
                    var _issue_origin3;
                    return "Hodnota je příliš malá: ".concat((_issue_origin3 = issue.origin) !== null && _issue_origin3 !== void 0 ? _issue_origin3 : "hodnota", " musí být ").concat(adj).concat(issue.minimum.toString());
                }
            case "invalid_format":
                {
                    const _issue = issue;
                    if (_issue.format === "starts_with") return 'Neplatný řetězec: musí začínat na "'.concat(_issue.prefix, '"');
                    if (_issue.format === "ends_with") return 'Neplatný řetězec: musí končit na "'.concat(_issue.suffix, '"');
                    if (_issue.format === "includes") return 'Neplatný řetězec: musí obsahovat "'.concat(_issue.includes, '"');
                    if (_issue.format === "regex") return "Neplatný řetězec: musí odpovídat vzoru ".concat(_issue.pattern);
                    var _Nouns__issue_format;
                    return "Neplatný formát ".concat((_Nouns__issue_format = Nouns[_issue.format]) !== null && _Nouns__issue_format !== void 0 ? _Nouns__issue_format : issue.format);
                }
            case "not_multiple_of":
                return "Neplatné číslo: musí být násobkem ".concat(issue.divisor);
            case "unrecognized_keys":
                return "Neznámé klíče: ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.keys, ", "));
            case "invalid_key":
                return "Neplatný klíč v ".concat(issue.origin);
            case "invalid_union":
                return "Neplatný vstup";
            case "invalid_element":
                return "Neplatná hodnota v ".concat(issue.origin);
            default:
                return "Neplatný vstup";
        }
    };
};
function __TURBOPACK__default__export__() {
    return {
        localeError: error()
    };
}
}),
"[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/locales/da.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/util.js [app-client] (ecmascript)");
;
const error = ()=>{
    const Sizable = {
        string: {
            unit: "tegn",
            verb: "havde"
        },
        file: {
            unit: "bytes",
            verb: "havde"
        },
        array: {
            unit: "elementer",
            verb: "indeholdt"
        },
        set: {
            unit: "elementer",
            verb: "indeholdt"
        }
    };
    const TypeNames = {
        string: "streng",
        number: "tal",
        boolean: "boolean",
        array: "liste",
        object: "objekt",
        set: "sæt",
        file: "fil"
    };
    function getSizing(origin) {
        var _Sizable_origin;
        return (_Sizable_origin = Sizable[origin]) !== null && _Sizable_origin !== void 0 ? _Sizable_origin : null;
    }
    function getTypeName(type) {
        var _TypeNames_type;
        return (_TypeNames_type = TypeNames[type]) !== null && _TypeNames_type !== void 0 ? _TypeNames_type : type;
    }
    const parsedType = (data)=>{
        const t = typeof data;
        switch(t){
            case "number":
                {
                    return Number.isNaN(data) ? "NaN" : "tal";
                }
            case "object":
                {
                    if (Array.isArray(data)) {
                        return "liste";
                    }
                    if (data === null) {
                        return "null";
                    }
                    if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                        return data.constructor.name;
                    }
                    return "objekt";
                }
        }
        return t;
    };
    const Nouns = {
        regex: "input",
        email: "e-mailadresse",
        url: "URL",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ISO dato- og klokkeslæt",
        date: "ISO-dato",
        time: "ISO-klokkeslæt",
        duration: "ISO-varighed",
        ipv4: "IPv4-område",
        ipv6: "IPv6-område",
        cidrv4: "IPv4-spektrum",
        cidrv6: "IPv6-spektrum",
        base64: "base64-kodet streng",
        base64url: "base64url-kodet streng",
        json_string: "JSON-streng",
        e164: "E.164-nummer",
        jwt: "JWT",
        template_literal: "input"
    };
    return (issue)=>{
        switch(issue.code){
            case "invalid_type":
                return "Ugyldigt input: forventede ".concat(getTypeName(issue.expected), ", fik ").concat(getTypeName(parsedType(issue.input)));
            case "invalid_value":
                if (issue.values.length === 1) return "Ugyldig værdi: forventede ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringifyPrimitive"](issue.values[0]));
                return "Ugyldigt valg: forventede en af følgende ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.values, "|"));
            case "too_big":
                {
                    const adj = issue.inclusive ? "<=" : "<";
                    const sizing = getSizing(issue.origin);
                    const origin = getTypeName(issue.origin);
                    var _sizing_unit;
                    if (sizing) return "For stor: forventede ".concat(origin !== null && origin !== void 0 ? origin : "value", " ").concat(sizing.verb, " ").concat(adj, " ").concat(issue.maximum.toString(), " ").concat((_sizing_unit = sizing.unit) !== null && _sizing_unit !== void 0 ? _sizing_unit : "elementer");
                    return "For stor: forventede ".concat(origin !== null && origin !== void 0 ? origin : "value", " havde ").concat(adj, " ").concat(issue.maximum.toString());
                }
            case "too_small":
                {
                    const adj = issue.inclusive ? ">=" : ">";
                    const sizing = getSizing(issue.origin);
                    const origin = getTypeName(issue.origin);
                    if (sizing) {
                        return "For lille: forventede ".concat(origin, " ").concat(sizing.verb, " ").concat(adj, " ").concat(issue.minimum.toString(), " ").concat(sizing.unit);
                    }
                    return "For lille: forventede ".concat(origin, " havde ").concat(adj, " ").concat(issue.minimum.toString());
                }
            case "invalid_format":
                {
                    const _issue = issue;
                    if (_issue.format === "starts_with") return 'Ugyldig streng: skal starte med "'.concat(_issue.prefix, '"');
                    if (_issue.format === "ends_with") return 'Ugyldig streng: skal ende med "'.concat(_issue.suffix, '"');
                    if (_issue.format === "includes") return 'Ugyldig streng: skal indeholde "'.concat(_issue.includes, '"');
                    if (_issue.format === "regex") return "Ugyldig streng: skal matche mønsteret ".concat(_issue.pattern);
                    var _Nouns__issue_format;
                    return "Ugyldig ".concat((_Nouns__issue_format = Nouns[_issue.format]) !== null && _Nouns__issue_format !== void 0 ? _Nouns__issue_format : issue.format);
                }
            case "not_multiple_of":
                return "Ugyldigt tal: skal være deleligt med ".concat(issue.divisor);
            case "unrecognized_keys":
                return "".concat(issue.keys.length > 1 ? "Ukendte nøgler" : "Ukendt nøgle", ": ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.keys, ", "));
            case "invalid_key":
                return "Ugyldig nøgle i ".concat(issue.origin);
            case "invalid_union":
                return "Ugyldigt input: matcher ingen af de tilladte typer";
            case "invalid_element":
                return "Ugyldig værdi i ".concat(issue.origin);
            default:
                return "Ugyldigt input";
        }
    };
};
function __TURBOPACK__default__export__() {
    return {
        localeError: error()
    };
}
}),
"[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/locales/de.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/util.js [app-client] (ecmascript)");
;
const error = ()=>{
    const Sizable = {
        string: {
            unit: "Zeichen",
            verb: "zu haben"
        },
        file: {
            unit: "Bytes",
            verb: "zu haben"
        },
        array: {
            unit: "Elemente",
            verb: "zu haben"
        },
        set: {
            unit: "Elemente",
            verb: "zu haben"
        }
    };
    function getSizing(origin) {
        var _Sizable_origin;
        return (_Sizable_origin = Sizable[origin]) !== null && _Sizable_origin !== void 0 ? _Sizable_origin : null;
    }
    const parsedType = (data)=>{
        const t = typeof data;
        switch(t){
            case "number":
                {
                    return Number.isNaN(data) ? "NaN" : "Zahl";
                }
            case "object":
                {
                    if (Array.isArray(data)) {
                        return "Array";
                    }
                    if (data === null) {
                        return "null";
                    }
                    if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                        return data.constructor.name;
                    }
                }
        }
        return t;
    };
    const Nouns = {
        regex: "Eingabe",
        email: "E-Mail-Adresse",
        url: "URL",
        emoji: "Emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ISO-Datum und -Uhrzeit",
        date: "ISO-Datum",
        time: "ISO-Uhrzeit",
        duration: "ISO-Dauer",
        ipv4: "IPv4-Adresse",
        ipv6: "IPv6-Adresse",
        cidrv4: "IPv4-Bereich",
        cidrv6: "IPv6-Bereich",
        base64: "Base64-codierter String",
        base64url: "Base64-URL-codierter String",
        json_string: "JSON-String",
        e164: "E.164-Nummer",
        jwt: "JWT",
        template_literal: "Eingabe"
    };
    return (issue)=>{
        switch(issue.code){
            case "invalid_type":
                return "Ungültige Eingabe: erwartet ".concat(issue.expected, ", erhalten ").concat(parsedType(issue.input));
            case "invalid_value":
                if (issue.values.length === 1) return "Ungültige Eingabe: erwartet ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringifyPrimitive"](issue.values[0]));
                return "Ungültige Option: erwartet eine von ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.values, "|"));
            case "too_big":
                {
                    const adj = issue.inclusive ? "<=" : "<";
                    const sizing = getSizing(issue.origin);
                    var _issue_origin, _sizing_unit;
                    if (sizing) return "Zu groß: erwartet, dass ".concat((_issue_origin = issue.origin) !== null && _issue_origin !== void 0 ? _issue_origin : "Wert", " ").concat(adj).concat(issue.maximum.toString(), " ").concat((_sizing_unit = sizing.unit) !== null && _sizing_unit !== void 0 ? _sizing_unit : "Elemente", " hat");
                    var _issue_origin1;
                    return "Zu groß: erwartet, dass ".concat((_issue_origin1 = issue.origin) !== null && _issue_origin1 !== void 0 ? _issue_origin1 : "Wert", " ").concat(adj).concat(issue.maximum.toString(), " ist");
                }
            case "too_small":
                {
                    const adj = issue.inclusive ? ">=" : ">";
                    const sizing = getSizing(issue.origin);
                    if (sizing) {
                        return "Zu klein: erwartet, dass ".concat(issue.origin, " ").concat(adj).concat(issue.minimum.toString(), " ").concat(sizing.unit, " hat");
                    }
                    return "Zu klein: erwartet, dass ".concat(issue.origin, " ").concat(adj).concat(issue.minimum.toString(), " ist");
                }
            case "invalid_format":
                {
                    const _issue = issue;
                    if (_issue.format === "starts_with") return 'Ungültiger String: muss mit "'.concat(_issue.prefix, '" beginnen');
                    if (_issue.format === "ends_with") return 'Ungültiger String: muss mit "'.concat(_issue.suffix, '" enden');
                    if (_issue.format === "includes") return 'Ungültiger String: muss "'.concat(_issue.includes, '" enthalten');
                    if (_issue.format === "regex") return "Ungültiger String: muss dem Muster ".concat(_issue.pattern, " entsprechen");
                    var _Nouns__issue_format;
                    return "Ungültig: ".concat((_Nouns__issue_format = Nouns[_issue.format]) !== null && _Nouns__issue_format !== void 0 ? _Nouns__issue_format : issue.format);
                }
            case "not_multiple_of":
                return "Ungültige Zahl: muss ein Vielfaches von ".concat(issue.divisor, " sein");
            case "unrecognized_keys":
                return "".concat(issue.keys.length > 1 ? "Unbekannte Schlüssel" : "Unbekannter Schlüssel", ": ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.keys, ", "));
            case "invalid_key":
                return "Ungültiger Schlüssel in ".concat(issue.origin);
            case "invalid_union":
                return "Ungültige Eingabe";
            case "invalid_element":
                return "Ungültiger Wert in ".concat(issue.origin);
            default:
                return "Ungültige Eingabe";
        }
    };
};
function __TURBOPACK__default__export__() {
    return {
        localeError: error()
    };
}
}),
"[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/locales/en.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "parsedType",
    ()=>parsedType
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/util.js [app-client] (ecmascript)");
;
const parsedType = (data)=>{
    const t = typeof data;
    switch(t){
        case "number":
            {
                return Number.isNaN(data) ? "NaN" : "number";
            }
        case "object":
            {
                if (Array.isArray(data)) {
                    return "array";
                }
                if (data === null) {
                    return "null";
                }
                if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                    return data.constructor.name;
                }
            }
    }
    return t;
};
const error = ()=>{
    const Sizable = {
        string: {
            unit: "characters",
            verb: "to have"
        },
        file: {
            unit: "bytes",
            verb: "to have"
        },
        array: {
            unit: "items",
            verb: "to have"
        },
        set: {
            unit: "items",
            verb: "to have"
        }
    };
    function getSizing(origin) {
        var _Sizable_origin;
        return (_Sizable_origin = Sizable[origin]) !== null && _Sizable_origin !== void 0 ? _Sizable_origin : null;
    }
    const Nouns = {
        regex: "input",
        email: "email address",
        url: "URL",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ISO datetime",
        date: "ISO date",
        time: "ISO time",
        duration: "ISO duration",
        ipv4: "IPv4 address",
        ipv6: "IPv6 address",
        cidrv4: "IPv4 range",
        cidrv6: "IPv6 range",
        base64: "base64-encoded string",
        base64url: "base64url-encoded string",
        json_string: "JSON string",
        e164: "E.164 number",
        jwt: "JWT",
        template_literal: "input"
    };
    return (issue)=>{
        switch(issue.code){
            case "invalid_type":
                return "Invalid input: expected ".concat(issue.expected, ", received ").concat(parsedType(issue.input));
            case "invalid_value":
                if (issue.values.length === 1) return "Invalid input: expected ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringifyPrimitive"](issue.values[0]));
                return "Invalid option: expected one of ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.values, "|"));
            case "too_big":
                {
                    const adj = issue.inclusive ? "<=" : "<";
                    const sizing = getSizing(issue.origin);
                    var _issue_origin, _sizing_unit;
                    if (sizing) return "Too big: expected ".concat((_issue_origin = issue.origin) !== null && _issue_origin !== void 0 ? _issue_origin : "value", " to have ").concat(adj).concat(issue.maximum.toString(), " ").concat((_sizing_unit = sizing.unit) !== null && _sizing_unit !== void 0 ? _sizing_unit : "elements");
                    var _issue_origin1;
                    return "Too big: expected ".concat((_issue_origin1 = issue.origin) !== null && _issue_origin1 !== void 0 ? _issue_origin1 : "value", " to be ").concat(adj).concat(issue.maximum.toString());
                }
            case "too_small":
                {
                    const adj = issue.inclusive ? ">=" : ">";
                    const sizing = getSizing(issue.origin);
                    if (sizing) {
                        return "Too small: expected ".concat(issue.origin, " to have ").concat(adj).concat(issue.minimum.toString(), " ").concat(sizing.unit);
                    }
                    return "Too small: expected ".concat(issue.origin, " to be ").concat(adj).concat(issue.minimum.toString());
                }
            case "invalid_format":
                {
                    const _issue = issue;
                    if (_issue.format === "starts_with") {
                        return 'Invalid string: must start with "'.concat(_issue.prefix, '"');
                    }
                    if (_issue.format === "ends_with") return 'Invalid string: must end with "'.concat(_issue.suffix, '"');
                    if (_issue.format === "includes") return 'Invalid string: must include "'.concat(_issue.includes, '"');
                    if (_issue.format === "regex") return "Invalid string: must match pattern ".concat(_issue.pattern);
                    var _Nouns__issue_format;
                    return "Invalid ".concat((_Nouns__issue_format = Nouns[_issue.format]) !== null && _Nouns__issue_format !== void 0 ? _Nouns__issue_format : issue.format);
                }
            case "not_multiple_of":
                return "Invalid number: must be a multiple of ".concat(issue.divisor);
            case "unrecognized_keys":
                return "Unrecognized key".concat(issue.keys.length > 1 ? "s" : "", ": ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.keys, ", "));
            case "invalid_key":
                return "Invalid key in ".concat(issue.origin);
            case "invalid_union":
                return "Invalid input";
            case "invalid_element":
                return "Invalid value in ".concat(issue.origin);
            default:
                return "Invalid input";
        }
    };
};
function __TURBOPACK__default__export__() {
    return {
        localeError: error()
    };
}
}),
"[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/locales/eo.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "parsedType",
    ()=>parsedType
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/util.js [app-client] (ecmascript)");
;
const parsedType = (data)=>{
    const t = typeof data;
    switch(t){
        case "number":
            {
                return Number.isNaN(data) ? "NaN" : "nombro";
            }
        case "object":
            {
                if (Array.isArray(data)) {
                    return "tabelo";
                }
                if (data === null) {
                    return "senvalora";
                }
                if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                    return data.constructor.name;
                }
            }
    }
    return t;
};
const error = ()=>{
    const Sizable = {
        string: {
            unit: "karaktrojn",
            verb: "havi"
        },
        file: {
            unit: "bajtojn",
            verb: "havi"
        },
        array: {
            unit: "elementojn",
            verb: "havi"
        },
        set: {
            unit: "elementojn",
            verb: "havi"
        }
    };
    function getSizing(origin) {
        var _Sizable_origin;
        return (_Sizable_origin = Sizable[origin]) !== null && _Sizable_origin !== void 0 ? _Sizable_origin : null;
    }
    const Nouns = {
        regex: "enigo",
        email: "retadreso",
        url: "URL",
        emoji: "emoĝio",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ISO-datotempo",
        date: "ISO-dato",
        time: "ISO-tempo",
        duration: "ISO-daŭro",
        ipv4: "IPv4-adreso",
        ipv6: "IPv6-adreso",
        cidrv4: "IPv4-rango",
        cidrv6: "IPv6-rango",
        base64: "64-ume kodita karaktraro",
        base64url: "URL-64-ume kodita karaktraro",
        json_string: "JSON-karaktraro",
        e164: "E.164-nombro",
        jwt: "JWT",
        template_literal: "enigo"
    };
    return (issue)=>{
        switch(issue.code){
            case "invalid_type":
                return "Nevalida enigo: atendiĝis ".concat(issue.expected, ", riceviĝis ").concat(parsedType(issue.input));
            case "invalid_value":
                if (issue.values.length === 1) return "Nevalida enigo: atendiĝis ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringifyPrimitive"](issue.values[0]));
                return "Nevalida opcio: atendiĝis unu el ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.values, "|"));
            case "too_big":
                {
                    const adj = issue.inclusive ? "<=" : "<";
                    const sizing = getSizing(issue.origin);
                    var _issue_origin, _sizing_unit;
                    if (sizing) return "Tro granda: atendiĝis ke ".concat((_issue_origin = issue.origin) !== null && _issue_origin !== void 0 ? _issue_origin : "valoro", " havu ").concat(adj).concat(issue.maximum.toString(), " ").concat((_sizing_unit = sizing.unit) !== null && _sizing_unit !== void 0 ? _sizing_unit : "elementojn");
                    var _issue_origin1;
                    return "Tro granda: atendiĝis ke ".concat((_issue_origin1 = issue.origin) !== null && _issue_origin1 !== void 0 ? _issue_origin1 : "valoro", " havu ").concat(adj).concat(issue.maximum.toString());
                }
            case "too_small":
                {
                    const adj = issue.inclusive ? ">=" : ">";
                    const sizing = getSizing(issue.origin);
                    if (sizing) {
                        return "Tro malgranda: atendiĝis ke ".concat(issue.origin, " havu ").concat(adj).concat(issue.minimum.toString(), " ").concat(sizing.unit);
                    }
                    return "Tro malgranda: atendiĝis ke ".concat(issue.origin, " estu ").concat(adj).concat(issue.minimum.toString());
                }
            case "invalid_format":
                {
                    const _issue = issue;
                    if (_issue.format === "starts_with") return 'Nevalida karaktraro: devas komenciĝi per "'.concat(_issue.prefix, '"');
                    if (_issue.format === "ends_with") return 'Nevalida karaktraro: devas finiĝi per "'.concat(_issue.suffix, '"');
                    if (_issue.format === "includes") return 'Nevalida karaktraro: devas inkluzivi "'.concat(_issue.includes, '"');
                    if (_issue.format === "regex") return "Nevalida karaktraro: devas kongrui kun la modelo ".concat(_issue.pattern);
                    var _Nouns__issue_format;
                    return "Nevalida ".concat((_Nouns__issue_format = Nouns[_issue.format]) !== null && _Nouns__issue_format !== void 0 ? _Nouns__issue_format : issue.format);
                }
            case "not_multiple_of":
                return "Nevalida nombro: devas esti oblo de ".concat(issue.divisor);
            case "unrecognized_keys":
                return "Nekonata".concat(issue.keys.length > 1 ? "j" : "", " ŝlosilo").concat(issue.keys.length > 1 ? "j" : "", ": ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.keys, ", "));
            case "invalid_key":
                return "Nevalida ŝlosilo en ".concat(issue.origin);
            case "invalid_union":
                return "Nevalida enigo";
            case "invalid_element":
                return "Nevalida valoro en ".concat(issue.origin);
            default:
                return "Nevalida enigo";
        }
    };
};
function __TURBOPACK__default__export__() {
    return {
        localeError: error()
    };
}
}),
"[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/locales/es.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/util.js [app-client] (ecmascript)");
;
const error = ()=>{
    const Sizable = {
        string: {
            unit: "caracteres",
            verb: "tener"
        },
        file: {
            unit: "bytes",
            verb: "tener"
        },
        array: {
            unit: "elementos",
            verb: "tener"
        },
        set: {
            unit: "elementos",
            verb: "tener"
        }
    };
    function getSizing(origin) {
        var _Sizable_origin;
        return (_Sizable_origin = Sizable[origin]) !== null && _Sizable_origin !== void 0 ? _Sizable_origin : null;
    }
    const parsedType = (data)=>{
        const t = typeof data;
        switch(t){
            case "number":
                {
                    return Number.isNaN(data) ? "NaN" : "número";
                }
            case "object":
                {
                    if (Array.isArray(data)) {
                        return "arreglo";
                    }
                    if (data === null) {
                        return "nulo";
                    }
                    if (Object.getPrototypeOf(data) !== Object.prototype) {
                        return data.constructor.name;
                    }
                }
        }
        return t;
    };
    const Nouns = {
        regex: "entrada",
        email: "dirección de correo electrónico",
        url: "URL",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "fecha y hora ISO",
        date: "fecha ISO",
        time: "hora ISO",
        duration: "duración ISO",
        ipv4: "dirección IPv4",
        ipv6: "dirección IPv6",
        cidrv4: "rango IPv4",
        cidrv6: "rango IPv6",
        base64: "cadena codificada en base64",
        base64url: "URL codificada en base64",
        json_string: "cadena JSON",
        e164: "número E.164",
        jwt: "JWT",
        template_literal: "entrada"
    };
    return (issue)=>{
        switch(issue.code){
            case "invalid_type":
                return "Entrada inválida: se esperaba ".concat(issue.expected, ", recibido ").concat(parsedType(issue.input));
            // return `Entrada inválida: se esperaba ${issue.expected}, recibido ${util.getParsedType(issue.input)}`;
            case "invalid_value":
                if (issue.values.length === 1) return "Entrada inválida: se esperaba ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringifyPrimitive"](issue.values[0]));
                return "Opción inválida: se esperaba una de ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.values, "|"));
            case "too_big":
                {
                    const adj = issue.inclusive ? "<=" : "<";
                    const sizing = getSizing(issue.origin);
                    var _issue_origin, _sizing_unit;
                    if (sizing) return "Demasiado grande: se esperaba que ".concat((_issue_origin = issue.origin) !== null && _issue_origin !== void 0 ? _issue_origin : "valor", " tuviera ").concat(adj).concat(issue.maximum.toString(), " ").concat((_sizing_unit = sizing.unit) !== null && _sizing_unit !== void 0 ? _sizing_unit : "elementos");
                    var _issue_origin1;
                    return "Demasiado grande: se esperaba que ".concat((_issue_origin1 = issue.origin) !== null && _issue_origin1 !== void 0 ? _issue_origin1 : "valor", " fuera ").concat(adj).concat(issue.maximum.toString());
                }
            case "too_small":
                {
                    const adj = issue.inclusive ? ">=" : ">";
                    const sizing = getSizing(issue.origin);
                    if (sizing) {
                        return "Demasiado pequeño: se esperaba que ".concat(issue.origin, " tuviera ").concat(adj).concat(issue.minimum.toString(), " ").concat(sizing.unit);
                    }
                    return "Demasiado pequeño: se esperaba que ".concat(issue.origin, " fuera ").concat(adj).concat(issue.minimum.toString());
                }
            case "invalid_format":
                {
                    const _issue = issue;
                    if (_issue.format === "starts_with") return 'Cadena inválida: debe comenzar con "'.concat(_issue.prefix, '"');
                    if (_issue.format === "ends_with") return 'Cadena inválida: debe terminar en "'.concat(_issue.suffix, '"');
                    if (_issue.format === "includes") return 'Cadena inválida: debe incluir "'.concat(_issue.includes, '"');
                    if (_issue.format === "regex") return "Cadena inválida: debe coincidir con el patrón ".concat(_issue.pattern);
                    var _Nouns__issue_format;
                    return "Inválido ".concat((_Nouns__issue_format = Nouns[_issue.format]) !== null && _Nouns__issue_format !== void 0 ? _Nouns__issue_format : issue.format);
                }
            case "not_multiple_of":
                return "Número inválido: debe ser múltiplo de ".concat(issue.divisor);
            case "unrecognized_keys":
                return "Llave".concat(issue.keys.length > 1 ? "s" : "", " desconocida").concat(issue.keys.length > 1 ? "s" : "", ": ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.keys, ", "));
            case "invalid_key":
                return "Llave inválida en ".concat(issue.origin);
            case "invalid_union":
                return "Entrada inválida";
            case "invalid_element":
                return "Valor inválido en ".concat(issue.origin);
            default:
                return "Entrada inválida";
        }
    };
};
function __TURBOPACK__default__export__() {
    return {
        localeError: error()
    };
}
}),
"[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/locales/fa.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/util.js [app-client] (ecmascript)");
;
const error = ()=>{
    const Sizable = {
        string: {
            unit: "کاراکتر",
            verb: "داشته باشد"
        },
        file: {
            unit: "بایت",
            verb: "داشته باشد"
        },
        array: {
            unit: "آیتم",
            verb: "داشته باشد"
        },
        set: {
            unit: "آیتم",
            verb: "داشته باشد"
        }
    };
    function getSizing(origin) {
        var _Sizable_origin;
        return (_Sizable_origin = Sizable[origin]) !== null && _Sizable_origin !== void 0 ? _Sizable_origin : null;
    }
    const parsedType = (data)=>{
        const t = typeof data;
        switch(t){
            case "number":
                {
                    return Number.isNaN(data) ? "NaN" : "عدد";
                }
            case "object":
                {
                    if (Array.isArray(data)) {
                        return "آرایه";
                    }
                    if (data === null) {
                        return "null";
                    }
                    if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                        return data.constructor.name;
                    }
                }
        }
        return t;
    };
    const Nouns = {
        regex: "ورودی",
        email: "آدرس ایمیل",
        url: "URL",
        emoji: "ایموجی",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "تاریخ و زمان ایزو",
        date: "تاریخ ایزو",
        time: "زمان ایزو",
        duration: "مدت زمان ایزو",
        ipv4: "IPv4 آدرس",
        ipv6: "IPv6 آدرس",
        cidrv4: "IPv4 دامنه",
        cidrv6: "IPv6 دامنه",
        base64: "base64-encoded رشته",
        base64url: "base64url-encoded رشته",
        json_string: "JSON رشته",
        e164: "E.164 عدد",
        jwt: "JWT",
        template_literal: "ورودی"
    };
    return (issue)=>{
        switch(issue.code){
            case "invalid_type":
                return "ورودی نامعتبر: می‌بایست ".concat(issue.expected, " می‌بود، ").concat(parsedType(issue.input), " دریافت شد");
            case "invalid_value":
                if (issue.values.length === 1) {
                    return "ورودی نامعتبر: می‌بایست ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringifyPrimitive"](issue.values[0]), " می‌بود");
                }
                return "گزینه نامعتبر: می‌بایست یکی از ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.values, "|"), " می‌بود");
            case "too_big":
                {
                    const adj = issue.inclusive ? "<=" : "<";
                    const sizing = getSizing(issue.origin);
                    if (sizing) {
                        var _issue_origin, _sizing_unit;
                        return "خیلی بزرگ: ".concat((_issue_origin = issue.origin) !== null && _issue_origin !== void 0 ? _issue_origin : "مقدار", " باید ").concat(adj).concat(issue.maximum.toString(), " ").concat((_sizing_unit = sizing.unit) !== null && _sizing_unit !== void 0 ? _sizing_unit : "عنصر", " باشد");
                    }
                    var _issue_origin1;
                    return "خیلی بزرگ: ".concat((_issue_origin1 = issue.origin) !== null && _issue_origin1 !== void 0 ? _issue_origin1 : "مقدار", " باید ").concat(adj).concat(issue.maximum.toString(), " باشد");
                }
            case "too_small":
                {
                    const adj = issue.inclusive ? ">=" : ">";
                    const sizing = getSizing(issue.origin);
                    if (sizing) {
                        return "خیلی کوچک: ".concat(issue.origin, " باید ").concat(adj).concat(issue.minimum.toString(), " ").concat(sizing.unit, " باشد");
                    }
                    return "خیلی کوچک: ".concat(issue.origin, " باید ").concat(adj).concat(issue.minimum.toString(), " باشد");
                }
            case "invalid_format":
                {
                    const _issue = issue;
                    if (_issue.format === "starts_with") {
                        return 'رشته نامعتبر: باید با "'.concat(_issue.prefix, '" شروع شود');
                    }
                    if (_issue.format === "ends_with") {
                        return 'رشته نامعتبر: باید با "'.concat(_issue.suffix, '" تمام شود');
                    }
                    if (_issue.format === "includes") {
                        return 'رشته نامعتبر: باید شامل "'.concat(_issue.includes, '" باشد');
                    }
                    if (_issue.format === "regex") {
                        return "رشته نامعتبر: باید با الگوی ".concat(_issue.pattern, " مطابقت داشته باشد");
                    }
                    var _Nouns__issue_format;
                    return "".concat((_Nouns__issue_format = Nouns[_issue.format]) !== null && _Nouns__issue_format !== void 0 ? _Nouns__issue_format : issue.format, " نامعتبر");
                }
            case "not_multiple_of":
                return "عدد نامعتبر: باید مضرب ".concat(issue.divisor, " باشد");
            case "unrecognized_keys":
                return "کلید".concat(issue.keys.length > 1 ? "های" : "", " ناشناس: ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.keys, ", "));
            case "invalid_key":
                return "کلید ناشناس در ".concat(issue.origin);
            case "invalid_union":
                return "ورودی نامعتبر";
            case "invalid_element":
                return "مقدار نامعتبر در ".concat(issue.origin);
            default:
                return "ورودی نامعتبر";
        }
    };
};
function __TURBOPACK__default__export__() {
    return {
        localeError: error()
    };
}
}),
"[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/locales/fi.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/util.js [app-client] (ecmascript)");
;
const error = ()=>{
    const Sizable = {
        string: {
            unit: "merkkiä",
            subject: "merkkijonon"
        },
        file: {
            unit: "tavua",
            subject: "tiedoston"
        },
        array: {
            unit: "alkiota",
            subject: "listan"
        },
        set: {
            unit: "alkiota",
            subject: "joukon"
        },
        number: {
            unit: "",
            subject: "luvun"
        },
        bigint: {
            unit: "",
            subject: "suuren kokonaisluvun"
        },
        int: {
            unit: "",
            subject: "kokonaisluvun"
        },
        date: {
            unit: "",
            subject: "päivämäärän"
        }
    };
    function getSizing(origin) {
        var _Sizable_origin;
        return (_Sizable_origin = Sizable[origin]) !== null && _Sizable_origin !== void 0 ? _Sizable_origin : null;
    }
    const parsedType = (data)=>{
        const t = typeof data;
        switch(t){
            case "number":
                {
                    return Number.isNaN(data) ? "NaN" : "number";
                }
            case "object":
                {
                    if (Array.isArray(data)) {
                        return "array";
                    }
                    if (data === null) {
                        return "null";
                    }
                    if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                        return data.constructor.name;
                    }
                }
        }
        return t;
    };
    const Nouns = {
        regex: "säännöllinen lauseke",
        email: "sähköpostiosoite",
        url: "URL-osoite",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ISO-aikaleima",
        date: "ISO-päivämäärä",
        time: "ISO-aika",
        duration: "ISO-kesto",
        ipv4: "IPv4-osoite",
        ipv6: "IPv6-osoite",
        cidrv4: "IPv4-alue",
        cidrv6: "IPv6-alue",
        base64: "base64-koodattu merkkijono",
        base64url: "base64url-koodattu merkkijono",
        json_string: "JSON-merkkijono",
        e164: "E.164-luku",
        jwt: "JWT",
        template_literal: "templaattimerkkijono"
    };
    return (issue)=>{
        switch(issue.code){
            case "invalid_type":
                return "Virheellinen tyyppi: odotettiin ".concat(issue.expected, ", oli ").concat(parsedType(issue.input));
            case "invalid_value":
                if (issue.values.length === 1) return "Virheellinen syöte: täytyy olla ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringifyPrimitive"](issue.values[0]));
                return "Virheellinen valinta: täytyy olla yksi seuraavista: ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.values, "|"));
            case "too_big":
                {
                    const adj = issue.inclusive ? "<=" : "<";
                    const sizing = getSizing(issue.origin);
                    if (sizing) {
                        return "Liian suuri: ".concat(sizing.subject, " täytyy olla ").concat(adj).concat(issue.maximum.toString(), " ").concat(sizing.unit).trim();
                    }
                    return "Liian suuri: arvon täytyy olla ".concat(adj).concat(issue.maximum.toString());
                }
            case "too_small":
                {
                    const adj = issue.inclusive ? ">=" : ">";
                    const sizing = getSizing(issue.origin);
                    if (sizing) {
                        return "Liian pieni: ".concat(sizing.subject, " täytyy olla ").concat(adj).concat(issue.minimum.toString(), " ").concat(sizing.unit).trim();
                    }
                    return "Liian pieni: arvon täytyy olla ".concat(adj).concat(issue.minimum.toString());
                }
            case "invalid_format":
                {
                    const _issue = issue;
                    if (_issue.format === "starts_with") return 'Virheellinen syöte: täytyy alkaa "'.concat(_issue.prefix, '"');
                    if (_issue.format === "ends_with") return 'Virheellinen syöte: täytyy loppua "'.concat(_issue.suffix, '"');
                    if (_issue.format === "includes") return 'Virheellinen syöte: täytyy sisältää "'.concat(_issue.includes, '"');
                    if (_issue.format === "regex") {
                        return "Virheellinen syöte: täytyy vastata säännöllistä lauseketta ".concat(_issue.pattern);
                    }
                    var _Nouns__issue_format;
                    return "Virheellinen ".concat((_Nouns__issue_format = Nouns[_issue.format]) !== null && _Nouns__issue_format !== void 0 ? _Nouns__issue_format : issue.format);
                }
            case "not_multiple_of":
                return "Virheellinen luku: täytyy olla luvun ".concat(issue.divisor, " monikerta");
            case "unrecognized_keys":
                return "".concat(issue.keys.length > 1 ? "Tuntemattomat avaimet" : "Tuntematon avain", ": ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.keys, ", "));
            case "invalid_key":
                return "Virheellinen avain tietueessa";
            case "invalid_union":
                return "Virheellinen unioni";
            case "invalid_element":
                return "Virheellinen arvo joukossa";
            default:
                return "Virheellinen syöte";
        }
    };
};
function __TURBOPACK__default__export__() {
    return {
        localeError: error()
    };
}
}),
"[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/locales/fr.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/util.js [app-client] (ecmascript)");
;
const error = ()=>{
    const Sizable = {
        string: {
            unit: "caractères",
            verb: "avoir"
        },
        file: {
            unit: "octets",
            verb: "avoir"
        },
        array: {
            unit: "éléments",
            verb: "avoir"
        },
        set: {
            unit: "éléments",
            verb: "avoir"
        }
    };
    function getSizing(origin) {
        var _Sizable_origin;
        return (_Sizable_origin = Sizable[origin]) !== null && _Sizable_origin !== void 0 ? _Sizable_origin : null;
    }
    const parsedType = (data)=>{
        const t = typeof data;
        switch(t){
            case "number":
                {
                    return Number.isNaN(data) ? "NaN" : "nombre";
                }
            case "object":
                {
                    if (Array.isArray(data)) {
                        return "tableau";
                    }
                    if (data === null) {
                        return "null";
                    }
                    if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                        return data.constructor.name;
                    }
                }
        }
        return t;
    };
    const Nouns = {
        regex: "entrée",
        email: "adresse e-mail",
        url: "URL",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "date et heure ISO",
        date: "date ISO",
        time: "heure ISO",
        duration: "durée ISO",
        ipv4: "adresse IPv4",
        ipv6: "adresse IPv6",
        cidrv4: "plage IPv4",
        cidrv6: "plage IPv6",
        base64: "chaîne encodée en base64",
        base64url: "chaîne encodée en base64url",
        json_string: "chaîne JSON",
        e164: "numéro E.164",
        jwt: "JWT",
        template_literal: "entrée"
    };
    return (issue)=>{
        switch(issue.code){
            case "invalid_type":
                return "Entrée invalide : ".concat(issue.expected, " attendu, ").concat(parsedType(issue.input), " reçu");
            case "invalid_value":
                if (issue.values.length === 1) return "Entrée invalide : ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringifyPrimitive"](issue.values[0]), " attendu");
                return "Option invalide : une valeur parmi ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.values, "|"), " attendue");
            case "too_big":
                {
                    const adj = issue.inclusive ? "<=" : "<";
                    const sizing = getSizing(issue.origin);
                    var _issue_origin, _sizing_unit;
                    if (sizing) return "Trop grand : ".concat((_issue_origin = issue.origin) !== null && _issue_origin !== void 0 ? _issue_origin : "valeur", " doit ").concat(sizing.verb, " ").concat(adj).concat(issue.maximum.toString(), " ").concat((_sizing_unit = sizing.unit) !== null && _sizing_unit !== void 0 ? _sizing_unit : "élément(s)");
                    var _issue_origin1;
                    return "Trop grand : ".concat((_issue_origin1 = issue.origin) !== null && _issue_origin1 !== void 0 ? _issue_origin1 : "valeur", " doit être ").concat(adj).concat(issue.maximum.toString());
                }
            case "too_small":
                {
                    const adj = issue.inclusive ? ">=" : ">";
                    const sizing = getSizing(issue.origin);
                    if (sizing) {
                        return "Trop petit : ".concat(issue.origin, " doit ").concat(sizing.verb, " ").concat(adj).concat(issue.minimum.toString(), " ").concat(sizing.unit);
                    }
                    return "Trop petit : ".concat(issue.origin, " doit être ").concat(adj).concat(issue.minimum.toString());
                }
            case "invalid_format":
                {
                    const _issue = issue;
                    if (_issue.format === "starts_with") return 'Chaîne invalide : doit commencer par "'.concat(_issue.prefix, '"');
                    if (_issue.format === "ends_with") return 'Chaîne invalide : doit se terminer par "'.concat(_issue.suffix, '"');
                    if (_issue.format === "includes") return 'Chaîne invalide : doit inclure "'.concat(_issue.includes, '"');
                    if (_issue.format === "regex") return "Chaîne invalide : doit correspondre au modèle ".concat(_issue.pattern);
                    var _Nouns__issue_format;
                    return "".concat((_Nouns__issue_format = Nouns[_issue.format]) !== null && _Nouns__issue_format !== void 0 ? _Nouns__issue_format : issue.format, " invalide");
                }
            case "not_multiple_of":
                return "Nombre invalide : doit être un multiple de ".concat(issue.divisor);
            case "unrecognized_keys":
                return "Clé".concat(issue.keys.length > 1 ? "s" : "", " non reconnue").concat(issue.keys.length > 1 ? "s" : "", " : ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.keys, ", "));
            case "invalid_key":
                return "Clé invalide dans ".concat(issue.origin);
            case "invalid_union":
                return "Entrée invalide";
            case "invalid_element":
                return "Valeur invalide dans ".concat(issue.origin);
            default:
                return "Entrée invalide";
        }
    };
};
function __TURBOPACK__default__export__() {
    return {
        localeError: error()
    };
}
}),
"[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/locales/fr-CA.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/util.js [app-client] (ecmascript)");
;
const error = ()=>{
    const Sizable = {
        string: {
            unit: "caractères",
            verb: "avoir"
        },
        file: {
            unit: "octets",
            verb: "avoir"
        },
        array: {
            unit: "éléments",
            verb: "avoir"
        },
        set: {
            unit: "éléments",
            verb: "avoir"
        }
    };
    function getSizing(origin) {
        var _Sizable_origin;
        return (_Sizable_origin = Sizable[origin]) !== null && _Sizable_origin !== void 0 ? _Sizable_origin : null;
    }
    const parsedType = (data)=>{
        const t = typeof data;
        switch(t){
            case "number":
                {
                    return Number.isNaN(data) ? "NaN" : "number";
                }
            case "object":
                {
                    if (Array.isArray(data)) {
                        return "array";
                    }
                    if (data === null) {
                        return "null";
                    }
                    if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                        return data.constructor.name;
                    }
                }
        }
        return t;
    };
    const Nouns = {
        regex: "entrée",
        email: "adresse courriel",
        url: "URL",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "date-heure ISO",
        date: "date ISO",
        time: "heure ISO",
        duration: "durée ISO",
        ipv4: "adresse IPv4",
        ipv6: "adresse IPv6",
        cidrv4: "plage IPv4",
        cidrv6: "plage IPv6",
        base64: "chaîne encodée en base64",
        base64url: "chaîne encodée en base64url",
        json_string: "chaîne JSON",
        e164: "numéro E.164",
        jwt: "JWT",
        template_literal: "entrée"
    };
    return (issue)=>{
        switch(issue.code){
            case "invalid_type":
                return "Entrée invalide : attendu ".concat(issue.expected, ", reçu ").concat(parsedType(issue.input));
            case "invalid_value":
                if (issue.values.length === 1) return "Entrée invalide : attendu ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringifyPrimitive"](issue.values[0]));
                return "Option invalide : attendu l'une des valeurs suivantes ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.values, "|"));
            case "too_big":
                {
                    const adj = issue.inclusive ? "≤" : "<";
                    const sizing = getSizing(issue.origin);
                    var _issue_origin;
                    if (sizing) return "Trop grand : attendu que ".concat((_issue_origin = issue.origin) !== null && _issue_origin !== void 0 ? _issue_origin : "la valeur", " ait ").concat(adj).concat(issue.maximum.toString(), " ").concat(sizing.unit);
                    var _issue_origin1;
                    return "Trop grand : attendu que ".concat((_issue_origin1 = issue.origin) !== null && _issue_origin1 !== void 0 ? _issue_origin1 : "la valeur", " soit ").concat(adj).concat(issue.maximum.toString());
                }
            case "too_small":
                {
                    const adj = issue.inclusive ? "≥" : ">";
                    const sizing = getSizing(issue.origin);
                    if (sizing) {
                        return "Trop petit : attendu que ".concat(issue.origin, " ait ").concat(adj).concat(issue.minimum.toString(), " ").concat(sizing.unit);
                    }
                    return "Trop petit : attendu que ".concat(issue.origin, " soit ").concat(adj).concat(issue.minimum.toString());
                }
            case "invalid_format":
                {
                    const _issue = issue;
                    if (_issue.format === "starts_with") {
                        return 'Chaîne invalide : doit commencer par "'.concat(_issue.prefix, '"');
                    }
                    if (_issue.format === "ends_with") return 'Chaîne invalide : doit se terminer par "'.concat(_issue.suffix, '"');
                    if (_issue.format === "includes") return 'Chaîne invalide : doit inclure "'.concat(_issue.includes, '"');
                    if (_issue.format === "regex") return "Chaîne invalide : doit correspondre au motif ".concat(_issue.pattern);
                    var _Nouns__issue_format;
                    return "".concat((_Nouns__issue_format = Nouns[_issue.format]) !== null && _Nouns__issue_format !== void 0 ? _Nouns__issue_format : issue.format, " invalide");
                }
            case "not_multiple_of":
                return "Nombre invalide : doit être un multiple de ".concat(issue.divisor);
            case "unrecognized_keys":
                return "Clé".concat(issue.keys.length > 1 ? "s" : "", " non reconnue").concat(issue.keys.length > 1 ? "s" : "", " : ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.keys, ", "));
            case "invalid_key":
                return "Clé invalide dans ".concat(issue.origin);
            case "invalid_union":
                return "Entrée invalide";
            case "invalid_element":
                return "Valeur invalide dans ".concat(issue.origin);
            default:
                return "Entrée invalide";
        }
    };
};
function __TURBOPACK__default__export__() {
    return {
        localeError: error()
    };
}
}),
"[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/locales/he.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/util.js [app-client] (ecmascript)");
;
const error = ()=>{
    const Sizable = {
        string: {
            unit: "אותיות",
            verb: "לכלול"
        },
        file: {
            unit: "בייטים",
            verb: "לכלול"
        },
        array: {
            unit: "פריטים",
            verb: "לכלול"
        },
        set: {
            unit: "פריטים",
            verb: "לכלול"
        }
    };
    function getSizing(origin) {
        var _Sizable_origin;
        return (_Sizable_origin = Sizable[origin]) !== null && _Sizable_origin !== void 0 ? _Sizable_origin : null;
    }
    const parsedType = (data)=>{
        const t = typeof data;
        switch(t){
            case "number":
                {
                    return Number.isNaN(data) ? "NaN" : "number";
                }
            case "object":
                {
                    if (Array.isArray(data)) {
                        return "array";
                    }
                    if (data === null) {
                        return "null";
                    }
                    if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                        return data.constructor.name;
                    }
                }
        }
        return t;
    };
    const Nouns = {
        regex: "קלט",
        email: "כתובת אימייל",
        url: "כתובת רשת",
        emoji: "אימוג'י",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "תאריך וזמן ISO",
        date: "תאריך ISO",
        time: "זמן ISO",
        duration: "משך זמן ISO",
        ipv4: "כתובת IPv4",
        ipv6: "כתובת IPv6",
        cidrv4: "טווח IPv4",
        cidrv6: "טווח IPv6",
        base64: "מחרוזת בבסיס 64",
        base64url: "מחרוזת בבסיס 64 לכתובות רשת",
        json_string: "מחרוזת JSON",
        e164: "מספר E.164",
        jwt: "JWT",
        template_literal: "קלט"
    };
    return (issue)=>{
        switch(issue.code){
            case "invalid_type":
                return "קלט לא תקין: צריך ".concat(issue.expected, ", התקבל ").concat(parsedType(issue.input));
            // return `Invalid input: expected ${issue.expected}, received ${util.getParsedType(issue.input)}`;
            case "invalid_value":
                if (issue.values.length === 1) return "קלט לא תקין: צריך ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringifyPrimitive"](issue.values[0]));
                return "קלט לא תקין: צריך אחת מהאפשרויות  ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.values, "|"));
            case "too_big":
                {
                    const adj = issue.inclusive ? "<=" : "<";
                    const sizing = getSizing(issue.origin);
                    var _issue_origin, _sizing_unit;
                    if (sizing) return "גדול מדי: ".concat((_issue_origin = issue.origin) !== null && _issue_origin !== void 0 ? _issue_origin : "value", " צריך להיות ").concat(adj).concat(issue.maximum.toString(), " ").concat((_sizing_unit = sizing.unit) !== null && _sizing_unit !== void 0 ? _sizing_unit : "elements");
                    var _issue_origin1;
                    return "גדול מדי: ".concat((_issue_origin1 = issue.origin) !== null && _issue_origin1 !== void 0 ? _issue_origin1 : "value", " צריך להיות ").concat(adj).concat(issue.maximum.toString());
                }
            case "too_small":
                {
                    const adj = issue.inclusive ? ">=" : ">";
                    const sizing = getSizing(issue.origin);
                    if (sizing) {
                        return "קטן מדי: ".concat(issue.origin, " צריך להיות ").concat(adj).concat(issue.minimum.toString(), " ").concat(sizing.unit);
                    }
                    return "קטן מדי: ".concat(issue.origin, " צריך להיות ").concat(adj).concat(issue.minimum.toString());
                }
            case "invalid_format":
                {
                    const _issue = issue;
                    if (_issue.format === "starts_with") return 'מחרוזת לא תקינה: חייבת להתחיל ב"'.concat(_issue.prefix, '"');
                    if (_issue.format === "ends_with") return 'מחרוזת לא תקינה: חייבת להסתיים ב "'.concat(_issue.suffix, '"');
                    if (_issue.format === "includes") return 'מחרוזת לא תקינה: חייבת לכלול "'.concat(_issue.includes, '"');
                    if (_issue.format === "regex") return "מחרוזת לא תקינה: חייבת להתאים לתבנית ".concat(_issue.pattern);
                    var _Nouns__issue_format;
                    return "".concat((_Nouns__issue_format = Nouns[_issue.format]) !== null && _Nouns__issue_format !== void 0 ? _Nouns__issue_format : issue.format, " לא תקין");
                }
            case "not_multiple_of":
                return "מספר לא תקין: חייב להיות מכפלה של ".concat(issue.divisor);
            case "unrecognized_keys":
                return "מפתח".concat(issue.keys.length > 1 ? "ות" : "", " לא מזוה").concat(issue.keys.length > 1 ? "ים" : "ה", ": ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.keys, ", "));
            case "invalid_key":
                return "מפתח לא תקין ב".concat(issue.origin);
            case "invalid_union":
                return "קלט לא תקין";
            case "invalid_element":
                return "ערך לא תקין ב".concat(issue.origin);
            default:
                return "קלט לא תקין";
        }
    };
};
function __TURBOPACK__default__export__() {
    return {
        localeError: error()
    };
}
}),
"[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/locales/hu.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/util.js [app-client] (ecmascript)");
;
const error = ()=>{
    const Sizable = {
        string: {
            unit: "karakter",
            verb: "legyen"
        },
        file: {
            unit: "byte",
            verb: "legyen"
        },
        array: {
            unit: "elem",
            verb: "legyen"
        },
        set: {
            unit: "elem",
            verb: "legyen"
        }
    };
    function getSizing(origin) {
        var _Sizable_origin;
        return (_Sizable_origin = Sizable[origin]) !== null && _Sizable_origin !== void 0 ? _Sizable_origin : null;
    }
    const parsedType = (data)=>{
        const t = typeof data;
        switch(t){
            case "number":
                {
                    return Number.isNaN(data) ? "NaN" : "szám";
                }
            case "object":
                {
                    if (Array.isArray(data)) {
                        return "tömb";
                    }
                    if (data === null) {
                        return "null";
                    }
                    if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                        return data.constructor.name;
                    }
                }
        }
        return t;
    };
    const Nouns = {
        regex: "bemenet",
        email: "email cím",
        url: "URL",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ISO időbélyeg",
        date: "ISO dátum",
        time: "ISO idő",
        duration: "ISO időintervallum",
        ipv4: "IPv4 cím",
        ipv6: "IPv6 cím",
        cidrv4: "IPv4 tartomány",
        cidrv6: "IPv6 tartomány",
        base64: "base64-kódolt string",
        base64url: "base64url-kódolt string",
        json_string: "JSON string",
        e164: "E.164 szám",
        jwt: "JWT",
        template_literal: "bemenet"
    };
    return (issue)=>{
        switch(issue.code){
            case "invalid_type":
                return "Érvénytelen bemenet: a várt érték ".concat(issue.expected, ", a kapott érték ").concat(parsedType(issue.input));
            // return `Invalid input: expected ${issue.expected}, received ${util.getParsedType(issue.input)}`;
            case "invalid_value":
                if (issue.values.length === 1) return "Érvénytelen bemenet: a várt érték ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringifyPrimitive"](issue.values[0]));
                return "Érvénytelen opció: valamelyik érték várt ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.values, "|"));
            case "too_big":
                {
                    const adj = issue.inclusive ? "<=" : "<";
                    const sizing = getSizing(issue.origin);
                    var _issue_origin, _sizing_unit;
                    if (sizing) return "Túl nagy: ".concat((_issue_origin = issue.origin) !== null && _issue_origin !== void 0 ? _issue_origin : "érték", " mérete túl nagy ").concat(adj).concat(issue.maximum.toString(), " ").concat((_sizing_unit = sizing.unit) !== null && _sizing_unit !== void 0 ? _sizing_unit : "elem");
                    var _issue_origin1;
                    return "Túl nagy: a bemeneti érték ".concat((_issue_origin1 = issue.origin) !== null && _issue_origin1 !== void 0 ? _issue_origin1 : "érték", " túl nagy: ").concat(adj).concat(issue.maximum.toString());
                }
            case "too_small":
                {
                    const adj = issue.inclusive ? ">=" : ">";
                    const sizing = getSizing(issue.origin);
                    if (sizing) {
                        return "Túl kicsi: a bemeneti érték ".concat(issue.origin, " mérete túl kicsi ").concat(adj).concat(issue.minimum.toString(), " ").concat(sizing.unit);
                    }
                    return "Túl kicsi: a bemeneti érték ".concat(issue.origin, " túl kicsi ").concat(adj).concat(issue.minimum.toString());
                }
            case "invalid_format":
                {
                    const _issue = issue;
                    if (_issue.format === "starts_with") return 'Érvénytelen string: "'.concat(_issue.prefix, '" értékkel kell kezdődnie');
                    if (_issue.format === "ends_with") return 'Érvénytelen string: "'.concat(_issue.suffix, '" értékkel kell végződnie');
                    if (_issue.format === "includes") return 'Érvénytelen string: "'.concat(_issue.includes, '" értéket kell tartalmaznia');
                    if (_issue.format === "regex") return "Érvénytelen string: ".concat(_issue.pattern, " mintának kell megfelelnie");
                    var _Nouns__issue_format;
                    return "Érvénytelen ".concat((_Nouns__issue_format = Nouns[_issue.format]) !== null && _Nouns__issue_format !== void 0 ? _Nouns__issue_format : issue.format);
                }
            case "not_multiple_of":
                return "Érvénytelen szám: ".concat(issue.divisor, " többszörösének kell lennie");
            case "unrecognized_keys":
                return "Ismeretlen kulcs".concat(issue.keys.length > 1 ? "s" : "", ": ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.keys, ", "));
            case "invalid_key":
                return "Érvénytelen kulcs ".concat(issue.origin);
            case "invalid_union":
                return "Érvénytelen bemenet";
            case "invalid_element":
                return "Érvénytelen érték: ".concat(issue.origin);
            default:
                return "Érvénytelen bemenet";
        }
    };
};
function __TURBOPACK__default__export__() {
    return {
        localeError: error()
    };
}
}),
"[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/locales/id.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/util.js [app-client] (ecmascript)");
;
const error = ()=>{
    const Sizable = {
        string: {
            unit: "karakter",
            verb: "memiliki"
        },
        file: {
            unit: "byte",
            verb: "memiliki"
        },
        array: {
            unit: "item",
            verb: "memiliki"
        },
        set: {
            unit: "item",
            verb: "memiliki"
        }
    };
    function getSizing(origin) {
        var _Sizable_origin;
        return (_Sizable_origin = Sizable[origin]) !== null && _Sizable_origin !== void 0 ? _Sizable_origin : null;
    }
    const parsedType = (data)=>{
        const t = typeof data;
        switch(t){
            case "number":
                {
                    return Number.isNaN(data) ? "NaN" : "number";
                }
            case "object":
                {
                    if (Array.isArray(data)) {
                        return "array";
                    }
                    if (data === null) {
                        return "null";
                    }
                    if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                        return data.constructor.name;
                    }
                }
        }
        return t;
    };
    const Nouns = {
        regex: "input",
        email: "alamat email",
        url: "URL",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "tanggal dan waktu format ISO",
        date: "tanggal format ISO",
        time: "jam format ISO",
        duration: "durasi format ISO",
        ipv4: "alamat IPv4",
        ipv6: "alamat IPv6",
        cidrv4: "rentang alamat IPv4",
        cidrv6: "rentang alamat IPv6",
        base64: "string dengan enkode base64",
        base64url: "string dengan enkode base64url",
        json_string: "string JSON",
        e164: "angka E.164",
        jwt: "JWT",
        template_literal: "input"
    };
    return (issue)=>{
        switch(issue.code){
            case "invalid_type":
                return "Input tidak valid: diharapkan ".concat(issue.expected, ", diterima ").concat(parsedType(issue.input));
            case "invalid_value":
                if (issue.values.length === 1) return "Input tidak valid: diharapkan ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringifyPrimitive"](issue.values[0]));
                return "Pilihan tidak valid: diharapkan salah satu dari ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.values, "|"));
            case "too_big":
                {
                    const adj = issue.inclusive ? "<=" : "<";
                    const sizing = getSizing(issue.origin);
                    var _issue_origin, _sizing_unit;
                    if (sizing) return "Terlalu besar: diharapkan ".concat((_issue_origin = issue.origin) !== null && _issue_origin !== void 0 ? _issue_origin : "value", " memiliki ").concat(adj).concat(issue.maximum.toString(), " ").concat((_sizing_unit = sizing.unit) !== null && _sizing_unit !== void 0 ? _sizing_unit : "elemen");
                    var _issue_origin1;
                    return "Terlalu besar: diharapkan ".concat((_issue_origin1 = issue.origin) !== null && _issue_origin1 !== void 0 ? _issue_origin1 : "value", " menjadi ").concat(adj).concat(issue.maximum.toString());
                }
            case "too_small":
                {
                    const adj = issue.inclusive ? ">=" : ">";
                    const sizing = getSizing(issue.origin);
                    if (sizing) {
                        return "Terlalu kecil: diharapkan ".concat(issue.origin, " memiliki ").concat(adj).concat(issue.minimum.toString(), " ").concat(sizing.unit);
                    }
                    return "Terlalu kecil: diharapkan ".concat(issue.origin, " menjadi ").concat(adj).concat(issue.minimum.toString());
                }
            case "invalid_format":
                {
                    const _issue = issue;
                    if (_issue.format === "starts_with") return 'String tidak valid: harus dimulai dengan "'.concat(_issue.prefix, '"');
                    if (_issue.format === "ends_with") return 'String tidak valid: harus berakhir dengan "'.concat(_issue.suffix, '"');
                    if (_issue.format === "includes") return 'String tidak valid: harus menyertakan "'.concat(_issue.includes, '"');
                    if (_issue.format === "regex") return "String tidak valid: harus sesuai pola ".concat(_issue.pattern);
                    var _Nouns__issue_format;
                    return "".concat((_Nouns__issue_format = Nouns[_issue.format]) !== null && _Nouns__issue_format !== void 0 ? _Nouns__issue_format : issue.format, " tidak valid");
                }
            case "not_multiple_of":
                return "Angka tidak valid: harus kelipatan dari ".concat(issue.divisor);
            case "unrecognized_keys":
                return "Kunci tidak dikenali ".concat(issue.keys.length > 1 ? "s" : "", ": ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.keys, ", "));
            case "invalid_key":
                return "Kunci tidak valid di ".concat(issue.origin);
            case "invalid_union":
                return "Input tidak valid";
            case "invalid_element":
                return "Nilai tidak valid di ".concat(issue.origin);
            default:
                return "Input tidak valid";
        }
    };
};
function __TURBOPACK__default__export__() {
    return {
        localeError: error()
    };
}
}),
"[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/locales/is.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "parsedType",
    ()=>parsedType
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/util.js [app-client] (ecmascript)");
;
const parsedType = (data)=>{
    const t = typeof data;
    switch(t){
        case "number":
            {
                return Number.isNaN(data) ? "NaN" : "númer";
            }
        case "object":
            {
                if (Array.isArray(data)) {
                    return "fylki";
                }
                if (data === null) {
                    return "null";
                }
                if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                    return data.constructor.name;
                }
            }
    }
    return t;
};
const error = ()=>{
    const Sizable = {
        string: {
            unit: "stafi",
            verb: "að hafa"
        },
        file: {
            unit: "bæti",
            verb: "að hafa"
        },
        array: {
            unit: "hluti",
            verb: "að hafa"
        },
        set: {
            unit: "hluti",
            verb: "að hafa"
        }
    };
    function getSizing(origin) {
        var _Sizable_origin;
        return (_Sizable_origin = Sizable[origin]) !== null && _Sizable_origin !== void 0 ? _Sizable_origin : null;
    }
    const Nouns = {
        regex: "gildi",
        email: "netfang",
        url: "vefslóð",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ISO dagsetning og tími",
        date: "ISO dagsetning",
        time: "ISO tími",
        duration: "ISO tímalengd",
        ipv4: "IPv4 address",
        ipv6: "IPv6 address",
        cidrv4: "IPv4 range",
        cidrv6: "IPv6 range",
        base64: "base64-encoded strengur",
        base64url: "base64url-encoded strengur",
        json_string: "JSON strengur",
        e164: "E.164 tölugildi",
        jwt: "JWT",
        template_literal: "gildi"
    };
    return (issue)=>{
        switch(issue.code){
            case "invalid_type":
                return "Rangt gildi: Þú slóst inn ".concat(parsedType(issue.input), " þar sem á að vera ").concat(issue.expected);
            case "invalid_value":
                if (issue.values.length === 1) return "Rangt gildi: gert ráð fyrir ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringifyPrimitive"](issue.values[0]));
                return "Ógilt val: má vera eitt af eftirfarandi ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.values, "|"));
            case "too_big":
                {
                    const adj = issue.inclusive ? "<=" : "<";
                    const sizing = getSizing(issue.origin);
                    var _issue_origin, _sizing_unit;
                    if (sizing) return "Of stórt: gert er ráð fyrir að ".concat((_issue_origin = issue.origin) !== null && _issue_origin !== void 0 ? _issue_origin : "gildi", " hafi ").concat(adj).concat(issue.maximum.toString(), " ").concat((_sizing_unit = sizing.unit) !== null && _sizing_unit !== void 0 ? _sizing_unit : "hluti");
                    var _issue_origin1;
                    return "Of stórt: gert er ráð fyrir að ".concat((_issue_origin1 = issue.origin) !== null && _issue_origin1 !== void 0 ? _issue_origin1 : "gildi", " sé ").concat(adj).concat(issue.maximum.toString());
                }
            case "too_small":
                {
                    const adj = issue.inclusive ? ">=" : ">";
                    const sizing = getSizing(issue.origin);
                    if (sizing) {
                        return "Of lítið: gert er ráð fyrir að ".concat(issue.origin, " hafi ").concat(adj).concat(issue.minimum.toString(), " ").concat(sizing.unit);
                    }
                    return "Of lítið: gert er ráð fyrir að ".concat(issue.origin, " sé ").concat(adj).concat(issue.minimum.toString());
                }
            case "invalid_format":
                {
                    const _issue = issue;
                    if (_issue.format === "starts_with") {
                        return 'Ógildur strengur: verður að byrja á "'.concat(_issue.prefix, '"');
                    }
                    if (_issue.format === "ends_with") return 'Ógildur strengur: verður að enda á "'.concat(_issue.suffix, '"');
                    if (_issue.format === "includes") return 'Ógildur strengur: verður að innihalda "'.concat(_issue.includes, '"');
                    if (_issue.format === "regex") return "Ógildur strengur: verður að fylgja mynstri ".concat(_issue.pattern);
                    var _Nouns__issue_format;
                    return "Rangt ".concat((_Nouns__issue_format = Nouns[_issue.format]) !== null && _Nouns__issue_format !== void 0 ? _Nouns__issue_format : issue.format);
                }
            case "not_multiple_of":
                return "Röng tala: verður að vera margfeldi af ".concat(issue.divisor);
            case "unrecognized_keys":
                return "Óþekkt ".concat(issue.keys.length > 1 ? "ir lyklar" : "ur lykill", ": ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.keys, ", "));
            case "invalid_key":
                return "Rangur lykill í ".concat(issue.origin);
            case "invalid_union":
                return "Rangt gildi";
            case "invalid_element":
                return "Rangt gildi í ".concat(issue.origin);
            default:
                return "Rangt gildi";
        }
    };
};
function __TURBOPACK__default__export__() {
    return {
        localeError: error()
    };
}
}),
"[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/locales/it.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/util.js [app-client] (ecmascript)");
;
const error = ()=>{
    const Sizable = {
        string: {
            unit: "caratteri",
            verb: "avere"
        },
        file: {
            unit: "byte",
            verb: "avere"
        },
        array: {
            unit: "elementi",
            verb: "avere"
        },
        set: {
            unit: "elementi",
            verb: "avere"
        }
    };
    function getSizing(origin) {
        var _Sizable_origin;
        return (_Sizable_origin = Sizable[origin]) !== null && _Sizable_origin !== void 0 ? _Sizable_origin : null;
    }
    const parsedType = (data)=>{
        const t = typeof data;
        switch(t){
            case "number":
                {
                    return Number.isNaN(data) ? "NaN" : "numero";
                }
            case "object":
                {
                    if (Array.isArray(data)) {
                        return "vettore";
                    }
                    if (data === null) {
                        return "null";
                    }
                    if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                        return data.constructor.name;
                    }
                }
        }
        return t;
    };
    const Nouns = {
        regex: "input",
        email: "indirizzo email",
        url: "URL",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "data e ora ISO",
        date: "data ISO",
        time: "ora ISO",
        duration: "durata ISO",
        ipv4: "indirizzo IPv4",
        ipv6: "indirizzo IPv6",
        cidrv4: "intervallo IPv4",
        cidrv6: "intervallo IPv6",
        base64: "stringa codificata in base64",
        base64url: "URL codificata in base64",
        json_string: "stringa JSON",
        e164: "numero E.164",
        jwt: "JWT",
        template_literal: "input"
    };
    return (issue)=>{
        switch(issue.code){
            case "invalid_type":
                return "Input non valido: atteso ".concat(issue.expected, ", ricevuto ").concat(parsedType(issue.input));
            // return `Input non valido: atteso ${issue.expected}, ricevuto ${util.getParsedType(issue.input)}`;
            case "invalid_value":
                if (issue.values.length === 1) return "Input non valido: atteso ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringifyPrimitive"](issue.values[0]));
                return "Opzione non valida: atteso uno tra ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.values, "|"));
            case "too_big":
                {
                    const adj = issue.inclusive ? "<=" : "<";
                    const sizing = getSizing(issue.origin);
                    var _issue_origin, _sizing_unit;
                    if (sizing) return "Troppo grande: ".concat((_issue_origin = issue.origin) !== null && _issue_origin !== void 0 ? _issue_origin : "valore", " deve avere ").concat(adj).concat(issue.maximum.toString(), " ").concat((_sizing_unit = sizing.unit) !== null && _sizing_unit !== void 0 ? _sizing_unit : "elementi");
                    var _issue_origin1;
                    return "Troppo grande: ".concat((_issue_origin1 = issue.origin) !== null && _issue_origin1 !== void 0 ? _issue_origin1 : "valore", " deve essere ").concat(adj).concat(issue.maximum.toString());
                }
            case "too_small":
                {
                    const adj = issue.inclusive ? ">=" : ">";
                    const sizing = getSizing(issue.origin);
                    if (sizing) {
                        return "Troppo piccolo: ".concat(issue.origin, " deve avere ").concat(adj).concat(issue.minimum.toString(), " ").concat(sizing.unit);
                    }
                    return "Troppo piccolo: ".concat(issue.origin, " deve essere ").concat(adj).concat(issue.minimum.toString());
                }
            case "invalid_format":
                {
                    const _issue = issue;
                    if (_issue.format === "starts_with") return 'Stringa non valida: deve iniziare con "'.concat(_issue.prefix, '"');
                    if (_issue.format === "ends_with") return 'Stringa non valida: deve terminare con "'.concat(_issue.suffix, '"');
                    if (_issue.format === "includes") return 'Stringa non valida: deve includere "'.concat(_issue.includes, '"');
                    if (_issue.format === "regex") return "Stringa non valida: deve corrispondere al pattern ".concat(_issue.pattern);
                    var _Nouns__issue_format;
                    return "Invalid ".concat((_Nouns__issue_format = Nouns[_issue.format]) !== null && _Nouns__issue_format !== void 0 ? _Nouns__issue_format : issue.format);
                }
            case "not_multiple_of":
                return "Numero non valido: deve essere un multiplo di ".concat(issue.divisor);
            case "unrecognized_keys":
                return "Chiav".concat(issue.keys.length > 1 ? "i" : "e", " non riconosciut").concat(issue.keys.length > 1 ? "e" : "a", ": ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.keys, ", "));
            case "invalid_key":
                return "Chiave non valida in ".concat(issue.origin);
            case "invalid_union":
                return "Input non valido";
            case "invalid_element":
                return "Valore non valido in ".concat(issue.origin);
            default:
                return "Input non valido";
        }
    };
};
function __TURBOPACK__default__export__() {
    return {
        localeError: error()
    };
}
}),
"[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/locales/ja.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/util.js [app-client] (ecmascript)");
;
const error = ()=>{
    const Sizable = {
        string: {
            unit: "文字",
            verb: "である"
        },
        file: {
            unit: "バイト",
            verb: "である"
        },
        array: {
            unit: "要素",
            verb: "である"
        },
        set: {
            unit: "要素",
            verb: "である"
        }
    };
    function getSizing(origin) {
        var _Sizable_origin;
        return (_Sizable_origin = Sizable[origin]) !== null && _Sizable_origin !== void 0 ? _Sizable_origin : null;
    }
    const parsedType = (data)=>{
        const t = typeof data;
        switch(t){
            case "number":
                {
                    return Number.isNaN(data) ? "NaN" : "数値";
                }
            case "object":
                {
                    if (Array.isArray(data)) {
                        return "配列";
                    }
                    if (data === null) {
                        return "null";
                    }
                    if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                        return data.constructor.name;
                    }
                }
        }
        return t;
    };
    const Nouns = {
        regex: "入力値",
        email: "メールアドレス",
        url: "URL",
        emoji: "絵文字",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ISO日時",
        date: "ISO日付",
        time: "ISO時刻",
        duration: "ISO期間",
        ipv4: "IPv4アドレス",
        ipv6: "IPv6アドレス",
        cidrv4: "IPv4範囲",
        cidrv6: "IPv6範囲",
        base64: "base64エンコード文字列",
        base64url: "base64urlエンコード文字列",
        json_string: "JSON文字列",
        e164: "E.164番号",
        jwt: "JWT",
        template_literal: "入力値"
    };
    return (issue)=>{
        switch(issue.code){
            case "invalid_type":
                return "無効な入力: ".concat(issue.expected, "が期待されましたが、").concat(parsedType(issue.input), "が入力されました");
            case "invalid_value":
                if (issue.values.length === 1) return "無効な入力: ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringifyPrimitive"](issue.values[0]), "が期待されました");
                return "無効な選択: ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.values, "、"), "のいずれかである必要があります");
            case "too_big":
                {
                    const adj = issue.inclusive ? "以下である" : "より小さい";
                    const sizing = getSizing(issue.origin);
                    var _issue_origin, _sizing_unit;
                    if (sizing) return "大きすぎる値: ".concat((_issue_origin = issue.origin) !== null && _issue_origin !== void 0 ? _issue_origin : "値", "は").concat(issue.maximum.toString()).concat((_sizing_unit = sizing.unit) !== null && _sizing_unit !== void 0 ? _sizing_unit : "要素").concat(adj, "必要があります");
                    var _issue_origin1;
                    return "大きすぎる値: ".concat((_issue_origin1 = issue.origin) !== null && _issue_origin1 !== void 0 ? _issue_origin1 : "値", "は").concat(issue.maximum.toString()).concat(adj, "必要があります");
                }
            case "too_small":
                {
                    const adj = issue.inclusive ? "以上である" : "より大きい";
                    const sizing = getSizing(issue.origin);
                    if (sizing) return "小さすぎる値: ".concat(issue.origin, "は").concat(issue.minimum.toString()).concat(sizing.unit).concat(adj, "必要があります");
                    return "小さすぎる値: ".concat(issue.origin, "は").concat(issue.minimum.toString()).concat(adj, "必要があります");
                }
            case "invalid_format":
                {
                    const _issue = issue;
                    if (_issue.format === "starts_with") return '無効な文字列: "'.concat(_issue.prefix, '"で始まる必要があります');
                    if (_issue.format === "ends_with") return '無効な文字列: "'.concat(_issue.suffix, '"で終わる必要があります');
                    if (_issue.format === "includes") return '無効な文字列: "'.concat(_issue.includes, '"を含む必要があります');
                    if (_issue.format === "regex") return "無効な文字列: パターン".concat(_issue.pattern, "に一致する必要があります");
                    var _Nouns__issue_format;
                    return "無効な".concat((_Nouns__issue_format = Nouns[_issue.format]) !== null && _Nouns__issue_format !== void 0 ? _Nouns__issue_format : issue.format);
                }
            case "not_multiple_of":
                return "無効な数値: ".concat(issue.divisor, "の倍数である必要があります");
            case "unrecognized_keys":
                return "認識されていないキー".concat(issue.keys.length > 1 ? "群" : "", ": ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.keys, "、"));
            case "invalid_key":
                return "".concat(issue.origin, "内の無効なキー");
            case "invalid_union":
                return "無効な入力";
            case "invalid_element":
                return "".concat(issue.origin, "内の無効な値");
            default:
                return "無効な入力";
        }
    };
};
function __TURBOPACK__default__export__() {
    return {
        localeError: error()
    };
}
}),
"[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/locales/kh.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/util.js [app-client] (ecmascript)");
;
const error = ()=>{
    const Sizable = {
        string: {
            unit: "តួអក្សរ",
            verb: "គួរមាន"
        },
        file: {
            unit: "បៃ",
            verb: "គួរមាន"
        },
        array: {
            unit: "ធាតុ",
            verb: "គួរមាន"
        },
        set: {
            unit: "ធាតុ",
            verb: "គួរមាន"
        }
    };
    function getSizing(origin) {
        var _Sizable_origin;
        return (_Sizable_origin = Sizable[origin]) !== null && _Sizable_origin !== void 0 ? _Sizable_origin : null;
    }
    const parsedType = (data)=>{
        const t = typeof data;
        switch(t){
            case "number":
                {
                    return Number.isNaN(data) ? "មិនមែនជាលេខ (NaN)" : "លេខ";
                }
            case "object":
                {
                    if (Array.isArray(data)) {
                        return "អារេ (Array)";
                    }
                    if (data === null) {
                        return "គ្មានតម្លៃ (null)";
                    }
                    if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                        return data.constructor.name;
                    }
                }
        }
        return t;
    };
    const Nouns = {
        regex: "ទិន្នន័យបញ្ចូល",
        email: "អាសយដ្ឋានអ៊ីមែល",
        url: "URL",
        emoji: "សញ្ញាអារម្មណ៍",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "កាលបរិច្ឆេទ និងម៉ោង ISO",
        date: "កាលបរិច្ឆេទ ISO",
        time: "ម៉ោង ISO",
        duration: "រយៈពេល ISO",
        ipv4: "អាសយដ្ឋាន IPv4",
        ipv6: "អាសយដ្ឋាន IPv6",
        cidrv4: "ដែនអាសយដ្ឋាន IPv4",
        cidrv6: "ដែនអាសយដ្ឋាន IPv6",
        base64: "ខ្សែអក្សរអ៊ិកូដ base64",
        base64url: "ខ្សែអក្សរអ៊ិកូដ base64url",
        json_string: "ខ្សែអក្សរ JSON",
        e164: "លេខ E.164",
        jwt: "JWT",
        template_literal: "ទិន្នន័យបញ្ចូល"
    };
    return (issue)=>{
        switch(issue.code){
            case "invalid_type":
                return "ទិន្នន័យបញ្ចូលមិនត្រឹមត្រូវ៖ ត្រូវការ ".concat(issue.expected, " ប៉ុន្តែទទួលបាន ").concat(parsedType(issue.input));
            case "invalid_value":
                if (issue.values.length === 1) return "ទិន្នន័យបញ្ចូលមិនត្រឹមត្រូវ៖ ត្រូវការ ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringifyPrimitive"](issue.values[0]));
                return "ជម្រើសមិនត្រឹមត្រូវ៖ ត្រូវជាមួយក្នុងចំណោម ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.values, "|"));
            case "too_big":
                {
                    const adj = issue.inclusive ? "<=" : "<";
                    const sizing = getSizing(issue.origin);
                    var _issue_origin, _sizing_unit;
                    if (sizing) return "ធំពេក៖ ត្រូវការ ".concat((_issue_origin = issue.origin) !== null && _issue_origin !== void 0 ? _issue_origin : "តម្លៃ", " ").concat(adj, " ").concat(issue.maximum.toString(), " ").concat((_sizing_unit = sizing.unit) !== null && _sizing_unit !== void 0 ? _sizing_unit : "ធាតុ");
                    var _issue_origin1;
                    return "ធំពេក៖ ត្រូវការ ".concat((_issue_origin1 = issue.origin) !== null && _issue_origin1 !== void 0 ? _issue_origin1 : "តម្លៃ", " ").concat(adj, " ").concat(issue.maximum.toString());
                }
            case "too_small":
                {
                    const adj = issue.inclusive ? ">=" : ">";
                    const sizing = getSizing(issue.origin);
                    if (sizing) {
                        return "តូចពេក៖ ត្រូវការ ".concat(issue.origin, " ").concat(adj, " ").concat(issue.minimum.toString(), " ").concat(sizing.unit);
                    }
                    return "តូចពេក៖ ត្រូវការ ".concat(issue.origin, " ").concat(adj, " ").concat(issue.minimum.toString());
                }
            case "invalid_format":
                {
                    const _issue = issue;
                    if (_issue.format === "starts_with") {
                        return 'ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវចាប់ផ្តើមដោយ "'.concat(_issue.prefix, '"');
                    }
                    if (_issue.format === "ends_with") return 'ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវបញ្ចប់ដោយ "'.concat(_issue.suffix, '"');
                    if (_issue.format === "includes") return 'ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវមាន "'.concat(_issue.includes, '"');
                    if (_issue.format === "regex") return "ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវតែផ្គូផ្គងនឹងទម្រង់ដែលបានកំណត់ ".concat(_issue.pattern);
                    var _Nouns__issue_format;
                    return "មិនត្រឹមត្រូវ៖ ".concat((_Nouns__issue_format = Nouns[_issue.format]) !== null && _Nouns__issue_format !== void 0 ? _Nouns__issue_format : issue.format);
                }
            case "not_multiple_of":
                return "លេខមិនត្រឹមត្រូវ៖ ត្រូវតែជាពហុគុណនៃ ".concat(issue.divisor);
            case "unrecognized_keys":
                return "រកឃើញសោមិនស្គាល់៖ ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.keys, ", "));
            case "invalid_key":
                return "សោមិនត្រឹមត្រូវនៅក្នុង ".concat(issue.origin);
            case "invalid_union":
                return "ទិន្នន័យមិនត្រឹមត្រូវ";
            case "invalid_element":
                return "ទិន្នន័យមិនត្រឹមត្រូវនៅក្នុង ".concat(issue.origin);
            default:
                return "ទិន្នន័យមិនត្រឹមត្រូវ";
        }
    };
};
function __TURBOPACK__default__export__() {
    return {
        localeError: error()
    };
}
}),
"[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/locales/ko.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/util.js [app-client] (ecmascript)");
;
const error = ()=>{
    const Sizable = {
        string: {
            unit: "문자",
            verb: "to have"
        },
        file: {
            unit: "바이트",
            verb: "to have"
        },
        array: {
            unit: "개",
            verb: "to have"
        },
        set: {
            unit: "개",
            verb: "to have"
        }
    };
    function getSizing(origin) {
        var _Sizable_origin;
        return (_Sizable_origin = Sizable[origin]) !== null && _Sizable_origin !== void 0 ? _Sizable_origin : null;
    }
    const parsedType = (data)=>{
        const t = typeof data;
        switch(t){
            case "number":
                {
                    return Number.isNaN(data) ? "NaN" : "number";
                }
            case "object":
                {
                    if (Array.isArray(data)) {
                        return "array";
                    }
                    if (data === null) {
                        return "null";
                    }
                    if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                        return data.constructor.name;
                    }
                }
        }
        return t;
    };
    const Nouns = {
        regex: "입력",
        email: "이메일 주소",
        url: "URL",
        emoji: "이모지",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ISO 날짜시간",
        date: "ISO 날짜",
        time: "ISO 시간",
        duration: "ISO 기간",
        ipv4: "IPv4 주소",
        ipv6: "IPv6 주소",
        cidrv4: "IPv4 범위",
        cidrv6: "IPv6 범위",
        base64: "base64 인코딩 문자열",
        base64url: "base64url 인코딩 문자열",
        json_string: "JSON 문자열",
        e164: "E.164 번호",
        jwt: "JWT",
        template_literal: "입력"
    };
    return (issue)=>{
        switch(issue.code){
            case "invalid_type":
                return "잘못된 입력: 예상 타입은 ".concat(issue.expected, ", 받은 타입은 ").concat(parsedType(issue.input), "입니다");
            case "invalid_value":
                if (issue.values.length === 1) return "잘못된 입력: 값은 ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringifyPrimitive"](issue.values[0]), " 이어야 합니다");
                return "잘못된 옵션: ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.values, "또는 "), " 중 하나여야 합니다");
            case "too_big":
                {
                    const adj = issue.inclusive ? "이하" : "미만";
                    const suffix = adj === "미만" ? "이어야 합니다" : "여야 합니다";
                    const sizing = getSizing(issue.origin);
                    var _sizing_unit;
                    const unit = (_sizing_unit = sizing === null || sizing === void 0 ? void 0 : sizing.unit) !== null && _sizing_unit !== void 0 ? _sizing_unit : "요소";
                    var _issue_origin;
                    if (sizing) return "".concat((_issue_origin = issue.origin) !== null && _issue_origin !== void 0 ? _issue_origin : "값", "이 너무 큽니다: ").concat(issue.maximum.toString()).concat(unit, " ").concat(adj).concat(suffix);
                    var _issue_origin1;
                    return "".concat((_issue_origin1 = issue.origin) !== null && _issue_origin1 !== void 0 ? _issue_origin1 : "값", "이 너무 큽니다: ").concat(issue.maximum.toString(), " ").concat(adj).concat(suffix);
                }
            case "too_small":
                {
                    const adj = issue.inclusive ? "이상" : "초과";
                    const suffix = adj === "이상" ? "이어야 합니다" : "여야 합니다";
                    const sizing = getSizing(issue.origin);
                    var _sizing_unit1;
                    const unit = (_sizing_unit1 = sizing === null || sizing === void 0 ? void 0 : sizing.unit) !== null && _sizing_unit1 !== void 0 ? _sizing_unit1 : "요소";
                    if (sizing) {
                        var _issue_origin2;
                        return "".concat((_issue_origin2 = issue.origin) !== null && _issue_origin2 !== void 0 ? _issue_origin2 : "값", "이 너무 작습니다: ").concat(issue.minimum.toString()).concat(unit, " ").concat(adj).concat(suffix);
                    }
                    var _issue_origin3;
                    return "".concat((_issue_origin3 = issue.origin) !== null && _issue_origin3 !== void 0 ? _issue_origin3 : "값", "이 너무 작습니다: ").concat(issue.minimum.toString(), " ").concat(adj).concat(suffix);
                }
            case "invalid_format":
                {
                    const _issue = issue;
                    if (_issue.format === "starts_with") {
                        return '잘못된 문자열: "'.concat(_issue.prefix, '"(으)로 시작해야 합니다');
                    }
                    if (_issue.format === "ends_with") return '잘못된 문자열: "'.concat(_issue.suffix, '"(으)로 끝나야 합니다');
                    if (_issue.format === "includes") return '잘못된 문자열: "'.concat(_issue.includes, '"을(를) 포함해야 합니다');
                    if (_issue.format === "regex") return "잘못된 문자열: 정규식 ".concat(_issue.pattern, " 패턴과 일치해야 합니다");
                    var _Nouns__issue_format;
                    return "잘못된 ".concat((_Nouns__issue_format = Nouns[_issue.format]) !== null && _Nouns__issue_format !== void 0 ? _Nouns__issue_format : issue.format);
                }
            case "not_multiple_of":
                return "잘못된 숫자: ".concat(issue.divisor, "의 배수여야 합니다");
            case "unrecognized_keys":
                return "인식할 수 없는 키: ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.keys, ", "));
            case "invalid_key":
                return "잘못된 키: ".concat(issue.origin);
            case "invalid_union":
                return "잘못된 입력";
            case "invalid_element":
                return "잘못된 값: ".concat(issue.origin);
            default:
                return "잘못된 입력";
        }
    };
};
function __TURBOPACK__default__export__() {
    return {
        localeError: error()
    };
}
}),
"[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/locales/mk.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/util.js [app-client] (ecmascript)");
;
const error = ()=>{
    const Sizable = {
        string: {
            unit: "знаци",
            verb: "да имаат"
        },
        file: {
            unit: "бајти",
            verb: "да имаат"
        },
        array: {
            unit: "ставки",
            verb: "да имаат"
        },
        set: {
            unit: "ставки",
            verb: "да имаат"
        }
    };
    function getSizing(origin) {
        var _Sizable_origin;
        return (_Sizable_origin = Sizable[origin]) !== null && _Sizable_origin !== void 0 ? _Sizable_origin : null;
    }
    const parsedType = (data)=>{
        const t = typeof data;
        switch(t){
            case "number":
                {
                    return Number.isNaN(data) ? "NaN" : "број";
                }
            case "object":
                {
                    if (Array.isArray(data)) {
                        return "низа";
                    }
                    if (data === null) {
                        return "null";
                    }
                    if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                        return data.constructor.name;
                    }
                }
        }
        return t;
    };
    const Nouns = {
        regex: "внес",
        email: "адреса на е-пошта",
        url: "URL",
        emoji: "емоџи",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ISO датум и време",
        date: "ISO датум",
        time: "ISO време",
        duration: "ISO времетраење",
        ipv4: "IPv4 адреса",
        ipv6: "IPv6 адреса",
        cidrv4: "IPv4 опсег",
        cidrv6: "IPv6 опсег",
        base64: "base64-енкодирана низа",
        base64url: "base64url-енкодирана низа",
        json_string: "JSON низа",
        e164: "E.164 број",
        jwt: "JWT",
        template_literal: "внес"
    };
    return (issue)=>{
        switch(issue.code){
            case "invalid_type":
                return "Грешен внес: се очекува ".concat(issue.expected, ", примено ").concat(parsedType(issue.input));
            // return `Invalid input: expected ${issue.expected}, received ${util.getParsedType(issue.input)}`;
            case "invalid_value":
                if (issue.values.length === 1) return "Invalid input: expected ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringifyPrimitive"](issue.values[0]));
                return "Грешана опција: се очекува една ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.values, "|"));
            case "too_big":
                {
                    const adj = issue.inclusive ? "<=" : "<";
                    const sizing = getSizing(issue.origin);
                    var _issue_origin, _sizing_unit;
                    if (sizing) return "Премногу голем: се очекува ".concat((_issue_origin = issue.origin) !== null && _issue_origin !== void 0 ? _issue_origin : "вредноста", " да има ").concat(adj).concat(issue.maximum.toString(), " ").concat((_sizing_unit = sizing.unit) !== null && _sizing_unit !== void 0 ? _sizing_unit : "елементи");
                    var _issue_origin1;
                    return "Премногу голем: се очекува ".concat((_issue_origin1 = issue.origin) !== null && _issue_origin1 !== void 0 ? _issue_origin1 : "вредноста", " да биде ").concat(adj).concat(issue.maximum.toString());
                }
            case "too_small":
                {
                    const adj = issue.inclusive ? ">=" : ">";
                    const sizing = getSizing(issue.origin);
                    if (sizing) {
                        return "Премногу мал: се очекува ".concat(issue.origin, " да има ").concat(adj).concat(issue.minimum.toString(), " ").concat(sizing.unit);
                    }
                    return "Премногу мал: се очекува ".concat(issue.origin, " да биде ").concat(adj).concat(issue.minimum.toString());
                }
            case "invalid_format":
                {
                    const _issue = issue;
                    if (_issue.format === "starts_with") {
                        return 'Неважечка низа: мора да започнува со "'.concat(_issue.prefix, '"');
                    }
                    if (_issue.format === "ends_with") return 'Неважечка низа: мора да завршува со "'.concat(_issue.suffix, '"');
                    if (_issue.format === "includes") return 'Неважечка низа: мора да вклучува "'.concat(_issue.includes, '"');
                    if (_issue.format === "regex") return "Неважечка низа: мора да одгоара на патернот ".concat(_issue.pattern);
                    var _Nouns__issue_format;
                    return "Invalid ".concat((_Nouns__issue_format = Nouns[_issue.format]) !== null && _Nouns__issue_format !== void 0 ? _Nouns__issue_format : issue.format);
                }
            case "not_multiple_of":
                return "Грешен број: мора да биде делив со ".concat(issue.divisor);
            case "unrecognized_keys":
                return "".concat(issue.keys.length > 1 ? "Непрепознаени клучеви" : "Непрепознаен клуч", ": ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.keys, ", "));
            case "invalid_key":
                return "Грешен клуч во ".concat(issue.origin);
            case "invalid_union":
                return "Грешен внес";
            case "invalid_element":
                return "Грешна вредност во ".concat(issue.origin);
            default:
                return "Грешен внес";
        }
    };
};
function __TURBOPACK__default__export__() {
    return {
        localeError: error()
    };
}
}),
"[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/locales/ms.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/util.js [app-client] (ecmascript)");
;
const error = ()=>{
    const Sizable = {
        string: {
            unit: "aksara",
            verb: "mempunyai"
        },
        file: {
            unit: "bait",
            verb: "mempunyai"
        },
        array: {
            unit: "elemen",
            verb: "mempunyai"
        },
        set: {
            unit: "elemen",
            verb: "mempunyai"
        }
    };
    function getSizing(origin) {
        var _Sizable_origin;
        return (_Sizable_origin = Sizable[origin]) !== null && _Sizable_origin !== void 0 ? _Sizable_origin : null;
    }
    const parsedType = (data)=>{
        const t = typeof data;
        switch(t){
            case "number":
                {
                    return Number.isNaN(data) ? "NaN" : "nombor";
                }
            case "object":
                {
                    if (Array.isArray(data)) {
                        return "array";
                    }
                    if (data === null) {
                        return "null";
                    }
                    if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                        return data.constructor.name;
                    }
                }
        }
        return t;
    };
    const Nouns = {
        regex: "input",
        email: "alamat e-mel",
        url: "URL",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "tarikh masa ISO",
        date: "tarikh ISO",
        time: "masa ISO",
        duration: "tempoh ISO",
        ipv4: "alamat IPv4",
        ipv6: "alamat IPv6",
        cidrv4: "julat IPv4",
        cidrv6: "julat IPv6",
        base64: "string dikodkan base64",
        base64url: "string dikodkan base64url",
        json_string: "string JSON",
        e164: "nombor E.164",
        jwt: "JWT",
        template_literal: "input"
    };
    return (issue)=>{
        switch(issue.code){
            case "invalid_type":
                return "Input tidak sah: dijangka ".concat(issue.expected, ", diterima ").concat(parsedType(issue.input));
            case "invalid_value":
                if (issue.values.length === 1) return "Input tidak sah: dijangka ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringifyPrimitive"](issue.values[0]));
                return "Pilihan tidak sah: dijangka salah satu daripada ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.values, "|"));
            case "too_big":
                {
                    const adj = issue.inclusive ? "<=" : "<";
                    const sizing = getSizing(issue.origin);
                    var _issue_origin, _sizing_unit;
                    if (sizing) return "Terlalu besar: dijangka ".concat((_issue_origin = issue.origin) !== null && _issue_origin !== void 0 ? _issue_origin : "nilai", " ").concat(sizing.verb, " ").concat(adj).concat(issue.maximum.toString(), " ").concat((_sizing_unit = sizing.unit) !== null && _sizing_unit !== void 0 ? _sizing_unit : "elemen");
                    var _issue_origin1;
                    return "Terlalu besar: dijangka ".concat((_issue_origin1 = issue.origin) !== null && _issue_origin1 !== void 0 ? _issue_origin1 : "nilai", " adalah ").concat(adj).concat(issue.maximum.toString());
                }
            case "too_small":
                {
                    const adj = issue.inclusive ? ">=" : ">";
                    const sizing = getSizing(issue.origin);
                    if (sizing) {
                        return "Terlalu kecil: dijangka ".concat(issue.origin, " ").concat(sizing.verb, " ").concat(adj).concat(issue.minimum.toString(), " ").concat(sizing.unit);
                    }
                    return "Terlalu kecil: dijangka ".concat(issue.origin, " adalah ").concat(adj).concat(issue.minimum.toString());
                }
            case "invalid_format":
                {
                    const _issue = issue;
                    if (_issue.format === "starts_with") return 'String tidak sah: mesti bermula dengan "'.concat(_issue.prefix, '"');
                    if (_issue.format === "ends_with") return 'String tidak sah: mesti berakhir dengan "'.concat(_issue.suffix, '"');
                    if (_issue.format === "includes") return 'String tidak sah: mesti mengandungi "'.concat(_issue.includes, '"');
                    if (_issue.format === "regex") return "String tidak sah: mesti sepadan dengan corak ".concat(_issue.pattern);
                    var _Nouns__issue_format;
                    return "".concat((_Nouns__issue_format = Nouns[_issue.format]) !== null && _Nouns__issue_format !== void 0 ? _Nouns__issue_format : issue.format, " tidak sah");
                }
            case "not_multiple_of":
                return "Nombor tidak sah: perlu gandaan ".concat(issue.divisor);
            case "unrecognized_keys":
                return "Kunci tidak dikenali: ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.keys, ", "));
            case "invalid_key":
                return "Kunci tidak sah dalam ".concat(issue.origin);
            case "invalid_union":
                return "Input tidak sah";
            case "invalid_element":
                return "Nilai tidak sah dalam ".concat(issue.origin);
            default:
                return "Input tidak sah";
        }
    };
};
function __TURBOPACK__default__export__() {
    return {
        localeError: error()
    };
}
}),
"[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/locales/nl.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/util.js [app-client] (ecmascript)");
;
const error = ()=>{
    const Sizable = {
        string: {
            unit: "tekens"
        },
        file: {
            unit: "bytes"
        },
        array: {
            unit: "elementen"
        },
        set: {
            unit: "elementen"
        }
    };
    function getSizing(origin) {
        var _Sizable_origin;
        return (_Sizable_origin = Sizable[origin]) !== null && _Sizable_origin !== void 0 ? _Sizable_origin : null;
    }
    const parsedType = (data)=>{
        const t = typeof data;
        switch(t){
            case "number":
                {
                    return Number.isNaN(data) ? "NaN" : "getal";
                }
            case "object":
                {
                    if (Array.isArray(data)) {
                        return "array";
                    }
                    if (data === null) {
                        return "null";
                    }
                    if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                        return data.constructor.name;
                    }
                }
        }
        return t;
    };
    const Nouns = {
        regex: "invoer",
        email: "emailadres",
        url: "URL",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ISO datum en tijd",
        date: "ISO datum",
        time: "ISO tijd",
        duration: "ISO duur",
        ipv4: "IPv4-adres",
        ipv6: "IPv6-adres",
        cidrv4: "IPv4-bereik",
        cidrv6: "IPv6-bereik",
        base64: "base64-gecodeerde tekst",
        base64url: "base64 URL-gecodeerde tekst",
        json_string: "JSON string",
        e164: "E.164-nummer",
        jwt: "JWT",
        template_literal: "invoer"
    };
    return (issue)=>{
        switch(issue.code){
            case "invalid_type":
                return "Ongeldige invoer: verwacht ".concat(issue.expected, ", ontving ").concat(parsedType(issue.input));
            case "invalid_value":
                if (issue.values.length === 1) return "Ongeldige invoer: verwacht ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringifyPrimitive"](issue.values[0]));
                return "Ongeldige optie: verwacht één van ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.values, "|"));
            case "too_big":
                {
                    const adj = issue.inclusive ? "<=" : "<";
                    const sizing = getSizing(issue.origin);
                    var _issue_origin, _sizing_unit;
                    if (sizing) return "Te lang: verwacht dat ".concat((_issue_origin = issue.origin) !== null && _issue_origin !== void 0 ? _issue_origin : "waarde", " ").concat(adj).concat(issue.maximum.toString(), " ").concat((_sizing_unit = sizing.unit) !== null && _sizing_unit !== void 0 ? _sizing_unit : "elementen", " bevat");
                    var _issue_origin1;
                    return "Te lang: verwacht dat ".concat((_issue_origin1 = issue.origin) !== null && _issue_origin1 !== void 0 ? _issue_origin1 : "waarde", " ").concat(adj).concat(issue.maximum.toString(), " is");
                }
            case "too_small":
                {
                    const adj = issue.inclusive ? ">=" : ">";
                    const sizing = getSizing(issue.origin);
                    if (sizing) {
                        return "Te kort: verwacht dat ".concat(issue.origin, " ").concat(adj).concat(issue.minimum.toString(), " ").concat(sizing.unit, " bevat");
                    }
                    return "Te kort: verwacht dat ".concat(issue.origin, " ").concat(adj).concat(issue.minimum.toString(), " is");
                }
            case "invalid_format":
                {
                    const _issue = issue;
                    if (_issue.format === "starts_with") {
                        return 'Ongeldige tekst: moet met "'.concat(_issue.prefix, '" beginnen');
                    }
                    if (_issue.format === "ends_with") return 'Ongeldige tekst: moet op "'.concat(_issue.suffix, '" eindigen');
                    if (_issue.format === "includes") return 'Ongeldige tekst: moet "'.concat(_issue.includes, '" bevatten');
                    if (_issue.format === "regex") return "Ongeldige tekst: moet overeenkomen met patroon ".concat(_issue.pattern);
                    var _Nouns__issue_format;
                    return "Ongeldig: ".concat((_Nouns__issue_format = Nouns[_issue.format]) !== null && _Nouns__issue_format !== void 0 ? _Nouns__issue_format : issue.format);
                }
            case "not_multiple_of":
                return "Ongeldig getal: moet een veelvoud van ".concat(issue.divisor, " zijn");
            case "unrecognized_keys":
                return "Onbekende key".concat(issue.keys.length > 1 ? "s" : "", ": ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.keys, ", "));
            case "invalid_key":
                return "Ongeldige key in ".concat(issue.origin);
            case "invalid_union":
                return "Ongeldige invoer";
            case "invalid_element":
                return "Ongeldige waarde in ".concat(issue.origin);
            default:
                return "Ongeldige invoer";
        }
    };
};
function __TURBOPACK__default__export__() {
    return {
        localeError: error()
    };
}
}),
"[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/locales/no.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/util.js [app-client] (ecmascript)");
;
const error = ()=>{
    const Sizable = {
        string: {
            unit: "tegn",
            verb: "å ha"
        },
        file: {
            unit: "bytes",
            verb: "å ha"
        },
        array: {
            unit: "elementer",
            verb: "å inneholde"
        },
        set: {
            unit: "elementer",
            verb: "å inneholde"
        }
    };
    function getSizing(origin) {
        var _Sizable_origin;
        return (_Sizable_origin = Sizable[origin]) !== null && _Sizable_origin !== void 0 ? _Sizable_origin : null;
    }
    const parsedType = (data)=>{
        const t = typeof data;
        switch(t){
            case "number":
                {
                    return Number.isNaN(data) ? "NaN" : "tall";
                }
            case "object":
                {
                    if (Array.isArray(data)) {
                        return "liste";
                    }
                    if (data === null) {
                        return "null";
                    }
                    if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                        return data.constructor.name;
                    }
                }
        }
        return t;
    };
    const Nouns = {
        regex: "input",
        email: "e-postadresse",
        url: "URL",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ISO dato- og klokkeslett",
        date: "ISO-dato",
        time: "ISO-klokkeslett",
        duration: "ISO-varighet",
        ipv4: "IPv4-område",
        ipv6: "IPv6-område",
        cidrv4: "IPv4-spekter",
        cidrv6: "IPv6-spekter",
        base64: "base64-enkodet streng",
        base64url: "base64url-enkodet streng",
        json_string: "JSON-streng",
        e164: "E.164-nummer",
        jwt: "JWT",
        template_literal: "input"
    };
    return (issue)=>{
        switch(issue.code){
            case "invalid_type":
                return "Ugyldig input: forventet ".concat(issue.expected, ", fikk ").concat(parsedType(issue.input));
            case "invalid_value":
                if (issue.values.length === 1) return "Ugyldig verdi: forventet ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringifyPrimitive"](issue.values[0]));
                return "Ugyldig valg: forventet en av ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.values, "|"));
            case "too_big":
                {
                    const adj = issue.inclusive ? "<=" : "<";
                    const sizing = getSizing(issue.origin);
                    var _issue_origin, _sizing_unit;
                    if (sizing) return "For stor(t): forventet ".concat((_issue_origin = issue.origin) !== null && _issue_origin !== void 0 ? _issue_origin : "value", " til å ha ").concat(adj).concat(issue.maximum.toString(), " ").concat((_sizing_unit = sizing.unit) !== null && _sizing_unit !== void 0 ? _sizing_unit : "elementer");
                    var _issue_origin1;
                    return "For stor(t): forventet ".concat((_issue_origin1 = issue.origin) !== null && _issue_origin1 !== void 0 ? _issue_origin1 : "value", " til å ha ").concat(adj).concat(issue.maximum.toString());
                }
            case "too_small":
                {
                    const adj = issue.inclusive ? ">=" : ">";
                    const sizing = getSizing(issue.origin);
                    if (sizing) {
                        return "For lite(n): forventet ".concat(issue.origin, " til å ha ").concat(adj).concat(issue.minimum.toString(), " ").concat(sizing.unit);
                    }
                    return "For lite(n): forventet ".concat(issue.origin, " til å ha ").concat(adj).concat(issue.minimum.toString());
                }
            case "invalid_format":
                {
                    const _issue = issue;
                    if (_issue.format === "starts_with") return 'Ugyldig streng: må starte med "'.concat(_issue.prefix, '"');
                    if (_issue.format === "ends_with") return 'Ugyldig streng: må ende med "'.concat(_issue.suffix, '"');
                    if (_issue.format === "includes") return 'Ugyldig streng: må inneholde "'.concat(_issue.includes, '"');
                    if (_issue.format === "regex") return "Ugyldig streng: må matche mønsteret ".concat(_issue.pattern);
                    var _Nouns__issue_format;
                    return "Ugyldig ".concat((_Nouns__issue_format = Nouns[_issue.format]) !== null && _Nouns__issue_format !== void 0 ? _Nouns__issue_format : issue.format);
                }
            case "not_multiple_of":
                return "Ugyldig tall: må være et multiplum av ".concat(issue.divisor);
            case "unrecognized_keys":
                return "".concat(issue.keys.length > 1 ? "Ukjente nøkler" : "Ukjent nøkkel", ": ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.keys, ", "));
            case "invalid_key":
                return "Ugyldig nøkkel i ".concat(issue.origin);
            case "invalid_union":
                return "Ugyldig input";
            case "invalid_element":
                return "Ugyldig verdi i ".concat(issue.origin);
            default:
                return "Ugyldig input";
        }
    };
};
function __TURBOPACK__default__export__() {
    return {
        localeError: error()
    };
}
}),
"[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/locales/ota.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/util.js [app-client] (ecmascript)");
;
const error = ()=>{
    const Sizable = {
        string: {
            unit: "harf",
            verb: "olmalıdır"
        },
        file: {
            unit: "bayt",
            verb: "olmalıdır"
        },
        array: {
            unit: "unsur",
            verb: "olmalıdır"
        },
        set: {
            unit: "unsur",
            verb: "olmalıdır"
        }
    };
    function getSizing(origin) {
        var _Sizable_origin;
        return (_Sizable_origin = Sizable[origin]) !== null && _Sizable_origin !== void 0 ? _Sizable_origin : null;
    }
    const parsedType = (data)=>{
        const t = typeof data;
        switch(t){
            case "number":
                {
                    return Number.isNaN(data) ? "NaN" : "numara";
                }
            case "object":
                {
                    if (Array.isArray(data)) {
                        return "saf";
                    }
                    if (data === null) {
                        return "gayb";
                    }
                    if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                        return data.constructor.name;
                    }
                }
        }
        return t;
    };
    const Nouns = {
        regex: "giren",
        email: "epostagâh",
        url: "URL",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ISO hengâmı",
        date: "ISO tarihi",
        time: "ISO zamanı",
        duration: "ISO müddeti",
        ipv4: "IPv4 nişânı",
        ipv6: "IPv6 nişânı",
        cidrv4: "IPv4 menzili",
        cidrv6: "IPv6 menzili",
        base64: "base64-şifreli metin",
        base64url: "base64url-şifreli metin",
        json_string: "JSON metin",
        e164: "E.164 sayısı",
        jwt: "JWT",
        template_literal: "giren"
    };
    return (issue)=>{
        switch(issue.code){
            case "invalid_type":
                return "Fâsit giren: umulan ".concat(issue.expected, ", alınan ").concat(parsedType(issue.input));
            // return `Fâsit giren: umulan ${issue.expected}, alınan ${util.getParsedType(issue.input)}`;
            case "invalid_value":
                if (issue.values.length === 1) return "Fâsit giren: umulan ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringifyPrimitive"](issue.values[0]));
                return "Fâsit tercih: mûteberler ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.values, "|"));
            case "too_big":
                {
                    const adj = issue.inclusive ? "<=" : "<";
                    const sizing = getSizing(issue.origin);
                    var _issue_origin, _sizing_unit;
                    if (sizing) return "Fazla büyük: ".concat((_issue_origin = issue.origin) !== null && _issue_origin !== void 0 ? _issue_origin : "value", ", ").concat(adj).concat(issue.maximum.toString(), " ").concat((_sizing_unit = sizing.unit) !== null && _sizing_unit !== void 0 ? _sizing_unit : "elements", " sahip olmalıydı.");
                    var _issue_origin1;
                    return "Fazla büyük: ".concat((_issue_origin1 = issue.origin) !== null && _issue_origin1 !== void 0 ? _issue_origin1 : "value", ", ").concat(adj).concat(issue.maximum.toString(), " olmalıydı.");
                }
            case "too_small":
                {
                    const adj = issue.inclusive ? ">=" : ">";
                    const sizing = getSizing(issue.origin);
                    if (sizing) {
                        return "Fazla küçük: ".concat(issue.origin, ", ").concat(adj).concat(issue.minimum.toString(), " ").concat(sizing.unit, " sahip olmalıydı.");
                    }
                    return "Fazla küçük: ".concat(issue.origin, ", ").concat(adj).concat(issue.minimum.toString(), " olmalıydı.");
                }
            case "invalid_format":
                {
                    const _issue = issue;
                    if (_issue.format === "starts_with") return 'Fâsit metin: "'.concat(_issue.prefix, '" ile başlamalı.');
                    if (_issue.format === "ends_with") return 'Fâsit metin: "'.concat(_issue.suffix, '" ile bitmeli.');
                    if (_issue.format === "includes") return 'Fâsit metin: "'.concat(_issue.includes, '" ihtivâ etmeli.');
                    if (_issue.format === "regex") return "Fâsit metin: ".concat(_issue.pattern, " nakşına uymalı.");
                    var _Nouns__issue_format;
                    return "Fâsit ".concat((_Nouns__issue_format = Nouns[_issue.format]) !== null && _Nouns__issue_format !== void 0 ? _Nouns__issue_format : issue.format);
                }
            case "not_multiple_of":
                return "Fâsit sayı: ".concat(issue.divisor, " katı olmalıydı.");
            case "unrecognized_keys":
                return "Tanınmayan anahtar ".concat(issue.keys.length > 1 ? "s" : "", ": ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.keys, ", "));
            case "invalid_key":
                return "".concat(issue.origin, " için tanınmayan anahtar var.");
            case "invalid_union":
                return "Giren tanınamadı.";
            case "invalid_element":
                return "".concat(issue.origin, " için tanınmayan kıymet var.");
            default:
                return "Kıymet tanınamadı.";
        }
    };
};
function __TURBOPACK__default__export__() {
    return {
        localeError: error()
    };
}
}),
"[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/locales/ps.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/util.js [app-client] (ecmascript)");
;
const error = ()=>{
    const Sizable = {
        string: {
            unit: "توکي",
            verb: "ولري"
        },
        file: {
            unit: "بایټس",
            verb: "ولري"
        },
        array: {
            unit: "توکي",
            verb: "ولري"
        },
        set: {
            unit: "توکي",
            verb: "ولري"
        }
    };
    function getSizing(origin) {
        var _Sizable_origin;
        return (_Sizable_origin = Sizable[origin]) !== null && _Sizable_origin !== void 0 ? _Sizable_origin : null;
    }
    const parsedType = (data)=>{
        const t = typeof data;
        switch(t){
            case "number":
                {
                    return Number.isNaN(data) ? "NaN" : "عدد";
                }
            case "object":
                {
                    if (Array.isArray(data)) {
                        return "ارې";
                    }
                    if (data === null) {
                        return "null";
                    }
                    if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                        return data.constructor.name;
                    }
                }
        }
        return t;
    };
    const Nouns = {
        regex: "ورودي",
        email: "بریښنالیک",
        url: "یو آر ال",
        emoji: "ایموجي",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "نیټه او وخت",
        date: "نېټه",
        time: "وخت",
        duration: "موده",
        ipv4: "د IPv4 پته",
        ipv6: "د IPv6 پته",
        cidrv4: "د IPv4 ساحه",
        cidrv6: "د IPv6 ساحه",
        base64: "base64-encoded متن",
        base64url: "base64url-encoded متن",
        json_string: "JSON متن",
        e164: "د E.164 شمېره",
        jwt: "JWT",
        template_literal: "ورودي"
    };
    return (issue)=>{
        switch(issue.code){
            case "invalid_type":
                return "ناسم ورودي: باید ".concat(issue.expected, " وای, مګر ").concat(parsedType(issue.input), " ترلاسه شو");
            case "invalid_value":
                if (issue.values.length === 1) {
                    return "ناسم ورودي: باید ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringifyPrimitive"](issue.values[0]), " وای");
                }
                return "ناسم انتخاب: باید یو له ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.values, "|"), " څخه وای");
            case "too_big":
                {
                    const adj = issue.inclusive ? "<=" : "<";
                    const sizing = getSizing(issue.origin);
                    if (sizing) {
                        var _issue_origin, _sizing_unit;
                        return "ډیر لوی: ".concat((_issue_origin = issue.origin) !== null && _issue_origin !== void 0 ? _issue_origin : "ارزښت", " باید ").concat(adj).concat(issue.maximum.toString(), " ").concat((_sizing_unit = sizing.unit) !== null && _sizing_unit !== void 0 ? _sizing_unit : "عنصرونه", " ولري");
                    }
                    var _issue_origin1;
                    return "ډیر لوی: ".concat((_issue_origin1 = issue.origin) !== null && _issue_origin1 !== void 0 ? _issue_origin1 : "ارزښت", " باید ").concat(adj).concat(issue.maximum.toString(), " وي");
                }
            case "too_small":
                {
                    const adj = issue.inclusive ? ">=" : ">";
                    const sizing = getSizing(issue.origin);
                    if (sizing) {
                        return "ډیر کوچنی: ".concat(issue.origin, " باید ").concat(adj).concat(issue.minimum.toString(), " ").concat(sizing.unit, " ولري");
                    }
                    return "ډیر کوچنی: ".concat(issue.origin, " باید ").concat(adj).concat(issue.minimum.toString(), " وي");
                }
            case "invalid_format":
                {
                    const _issue = issue;
                    if (_issue.format === "starts_with") {
                        return 'ناسم متن: باید د "'.concat(_issue.prefix, '" سره پیل شي');
                    }
                    if (_issue.format === "ends_with") {
                        return 'ناسم متن: باید د "'.concat(_issue.suffix, '" سره پای ته ورسيږي');
                    }
                    if (_issue.format === "includes") {
                        return 'ناسم متن: باید "'.concat(_issue.includes, '" ولري');
                    }
                    if (_issue.format === "regex") {
                        return "ناسم متن: باید د ".concat(_issue.pattern, " سره مطابقت ولري");
                    }
                    var _Nouns__issue_format;
                    return "".concat((_Nouns__issue_format = Nouns[_issue.format]) !== null && _Nouns__issue_format !== void 0 ? _Nouns__issue_format : issue.format, " ناسم دی");
                }
            case "not_multiple_of":
                return "ناسم عدد: باید د ".concat(issue.divisor, " مضرب وي");
            case "unrecognized_keys":
                return "ناسم ".concat(issue.keys.length > 1 ? "کلیډونه" : "کلیډ", ": ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.keys, ", "));
            case "invalid_key":
                return "ناسم کلیډ په ".concat(issue.origin, " کې");
            case "invalid_union":
                return "ناسمه ورودي";
            case "invalid_element":
                return "ناسم عنصر په ".concat(issue.origin, " کې");
            default:
                return "ناسمه ورودي";
        }
    };
};
function __TURBOPACK__default__export__() {
    return {
        localeError: error()
    };
}
}),
"[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/locales/pl.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/util.js [app-client] (ecmascript)");
;
const error = ()=>{
    const Sizable = {
        string: {
            unit: "znaków",
            verb: "mieć"
        },
        file: {
            unit: "bajtów",
            verb: "mieć"
        },
        array: {
            unit: "elementów",
            verb: "mieć"
        },
        set: {
            unit: "elementów",
            verb: "mieć"
        }
    };
    function getSizing(origin) {
        var _Sizable_origin;
        return (_Sizable_origin = Sizable[origin]) !== null && _Sizable_origin !== void 0 ? _Sizable_origin : null;
    }
    const parsedType = (data)=>{
        const t = typeof data;
        switch(t){
            case "number":
                {
                    return Number.isNaN(data) ? "NaN" : "liczba";
                }
            case "object":
                {
                    if (Array.isArray(data)) {
                        return "tablica";
                    }
                    if (data === null) {
                        return "null";
                    }
                    if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                        return data.constructor.name;
                    }
                }
        }
        return t;
    };
    const Nouns = {
        regex: "wyrażenie",
        email: "adres email",
        url: "URL",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "data i godzina w formacie ISO",
        date: "data w formacie ISO",
        time: "godzina w formacie ISO",
        duration: "czas trwania ISO",
        ipv4: "adres IPv4",
        ipv6: "adres IPv6",
        cidrv4: "zakres IPv4",
        cidrv6: "zakres IPv6",
        base64: "ciąg znaków zakodowany w formacie base64",
        base64url: "ciąg znaków zakodowany w formacie base64url",
        json_string: "ciąg znaków w formacie JSON",
        e164: "liczba E.164",
        jwt: "JWT",
        template_literal: "wejście"
    };
    return (issue)=>{
        switch(issue.code){
            case "invalid_type":
                return "Nieprawidłowe dane wejściowe: oczekiwano ".concat(issue.expected, ", otrzymano ").concat(parsedType(issue.input));
            case "invalid_value":
                if (issue.values.length === 1) return "Nieprawidłowe dane wejściowe: oczekiwano ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringifyPrimitive"](issue.values[0]));
                return "Nieprawidłowa opcja: oczekiwano jednej z wartości ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.values, "|"));
            case "too_big":
                {
                    const adj = issue.inclusive ? "<=" : "<";
                    const sizing = getSizing(issue.origin);
                    if (sizing) {
                        var _issue_origin, _sizing_unit;
                        return "Za duża wartość: oczekiwano, że ".concat((_issue_origin = issue.origin) !== null && _issue_origin !== void 0 ? _issue_origin : "wartość", " będzie mieć ").concat(adj).concat(issue.maximum.toString(), " ").concat((_sizing_unit = sizing.unit) !== null && _sizing_unit !== void 0 ? _sizing_unit : "elementów");
                    }
                    var _issue_origin1;
                    return "Zbyt duż(y/a/e): oczekiwano, że ".concat((_issue_origin1 = issue.origin) !== null && _issue_origin1 !== void 0 ? _issue_origin1 : "wartość", " będzie wynosić ").concat(adj).concat(issue.maximum.toString());
                }
            case "too_small":
                {
                    const adj = issue.inclusive ? ">=" : ">";
                    const sizing = getSizing(issue.origin);
                    if (sizing) {
                        var _issue_origin2, _sizing_unit1;
                        return "Za mała wartość: oczekiwano, że ".concat((_issue_origin2 = issue.origin) !== null && _issue_origin2 !== void 0 ? _issue_origin2 : "wartość", " będzie mieć ").concat(adj).concat(issue.minimum.toString(), " ").concat((_sizing_unit1 = sizing.unit) !== null && _sizing_unit1 !== void 0 ? _sizing_unit1 : "elementów");
                    }
                    var _issue_origin3;
                    return "Zbyt mał(y/a/e): oczekiwano, że ".concat((_issue_origin3 = issue.origin) !== null && _issue_origin3 !== void 0 ? _issue_origin3 : "wartość", " będzie wynosić ").concat(adj).concat(issue.minimum.toString());
                }
            case "invalid_format":
                {
                    const _issue = issue;
                    if (_issue.format === "starts_with") return 'Nieprawidłowy ciąg znaków: musi zaczynać się od "'.concat(_issue.prefix, '"');
                    if (_issue.format === "ends_with") return 'Nieprawidłowy ciąg znaków: musi kończyć się na "'.concat(_issue.suffix, '"');
                    if (_issue.format === "includes") return 'Nieprawidłowy ciąg znaków: musi zawierać "'.concat(_issue.includes, '"');
                    if (_issue.format === "regex") return "Nieprawidłowy ciąg znaków: musi odpowiadać wzorcowi ".concat(_issue.pattern);
                    var _Nouns__issue_format;
                    return "Nieprawidłow(y/a/e) ".concat((_Nouns__issue_format = Nouns[_issue.format]) !== null && _Nouns__issue_format !== void 0 ? _Nouns__issue_format : issue.format);
                }
            case "not_multiple_of":
                return "Nieprawidłowa liczba: musi być wielokrotnością ".concat(issue.divisor);
            case "unrecognized_keys":
                return "Nierozpoznane klucze".concat(issue.keys.length > 1 ? "s" : "", ": ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.keys, ", "));
            case "invalid_key":
                return "Nieprawidłowy klucz w ".concat(issue.origin);
            case "invalid_union":
                return "Nieprawidłowe dane wejściowe";
            case "invalid_element":
                return "Nieprawidłowa wartość w ".concat(issue.origin);
            default:
                return "Nieprawidłowe dane wejściowe";
        }
    };
};
function __TURBOPACK__default__export__() {
    return {
        localeError: error()
    };
}
}),
"[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/locales/pt.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/util.js [app-client] (ecmascript)");
;
const error = ()=>{
    const Sizable = {
        string: {
            unit: "caracteres",
            verb: "ter"
        },
        file: {
            unit: "bytes",
            verb: "ter"
        },
        array: {
            unit: "itens",
            verb: "ter"
        },
        set: {
            unit: "itens",
            verb: "ter"
        }
    };
    function getSizing(origin) {
        var _Sizable_origin;
        return (_Sizable_origin = Sizable[origin]) !== null && _Sizable_origin !== void 0 ? _Sizable_origin : null;
    }
    const parsedType = (data)=>{
        const t = typeof data;
        switch(t){
            case "number":
                {
                    return Number.isNaN(data) ? "NaN" : "número";
                }
            case "object":
                {
                    if (Array.isArray(data)) {
                        return "array";
                    }
                    if (data === null) {
                        return "nulo";
                    }
                    if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                        return data.constructor.name;
                    }
                }
        }
        return t;
    };
    const Nouns = {
        regex: "padrão",
        email: "endereço de e-mail",
        url: "URL",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "data e hora ISO",
        date: "data ISO",
        time: "hora ISO",
        duration: "duração ISO",
        ipv4: "endereço IPv4",
        ipv6: "endereço IPv6",
        cidrv4: "faixa de IPv4",
        cidrv6: "faixa de IPv6",
        base64: "texto codificado em base64",
        base64url: "URL codificada em base64",
        json_string: "texto JSON",
        e164: "número E.164",
        jwt: "JWT",
        template_literal: "entrada"
    };
    return (issue)=>{
        switch(issue.code){
            case "invalid_type":
                return "Tipo inválido: esperado ".concat(issue.expected, ", recebido ").concat(parsedType(issue.input));
            case "invalid_value":
                if (issue.values.length === 1) return "Entrada inválida: esperado ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringifyPrimitive"](issue.values[0]));
                return "Opção inválida: esperada uma das ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.values, "|"));
            case "too_big":
                {
                    const adj = issue.inclusive ? "<=" : "<";
                    const sizing = getSizing(issue.origin);
                    var _issue_origin, _sizing_unit;
                    if (sizing) return "Muito grande: esperado que ".concat((_issue_origin = issue.origin) !== null && _issue_origin !== void 0 ? _issue_origin : "valor", " tivesse ").concat(adj).concat(issue.maximum.toString(), " ").concat((_sizing_unit = sizing.unit) !== null && _sizing_unit !== void 0 ? _sizing_unit : "elementos");
                    var _issue_origin1;
                    return "Muito grande: esperado que ".concat((_issue_origin1 = issue.origin) !== null && _issue_origin1 !== void 0 ? _issue_origin1 : "valor", " fosse ").concat(adj).concat(issue.maximum.toString());
                }
            case "too_small":
                {
                    const adj = issue.inclusive ? ">=" : ">";
                    const sizing = getSizing(issue.origin);
                    if (sizing) {
                        return "Muito pequeno: esperado que ".concat(issue.origin, " tivesse ").concat(adj).concat(issue.minimum.toString(), " ").concat(sizing.unit);
                    }
                    return "Muito pequeno: esperado que ".concat(issue.origin, " fosse ").concat(adj).concat(issue.minimum.toString());
                }
            case "invalid_format":
                {
                    const _issue = issue;
                    if (_issue.format === "starts_with") return 'Texto inválido: deve começar com "'.concat(_issue.prefix, '"');
                    if (_issue.format === "ends_with") return 'Texto inválido: deve terminar com "'.concat(_issue.suffix, '"');
                    if (_issue.format === "includes") return 'Texto inválido: deve incluir "'.concat(_issue.includes, '"');
                    if (_issue.format === "regex") return "Texto inválido: deve corresponder ao padrão ".concat(_issue.pattern);
                    var _Nouns__issue_format;
                    return "".concat((_Nouns__issue_format = Nouns[_issue.format]) !== null && _Nouns__issue_format !== void 0 ? _Nouns__issue_format : issue.format, " inválido");
                }
            case "not_multiple_of":
                return "Número inválido: deve ser múltiplo de ".concat(issue.divisor);
            case "unrecognized_keys":
                return "Chave".concat(issue.keys.length > 1 ? "s" : "", " desconhecida").concat(issue.keys.length > 1 ? "s" : "", ": ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.keys, ", "));
            case "invalid_key":
                return "Chave inválida em ".concat(issue.origin);
            case "invalid_union":
                return "Entrada inválida";
            case "invalid_element":
                return "Valor inválido em ".concat(issue.origin);
            default:
                return "Campo inválido";
        }
    };
};
function __TURBOPACK__default__export__() {
    return {
        localeError: error()
    };
}
}),
"[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/locales/ru.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/util.js [app-client] (ecmascript)");
;
function getRussianPlural(count, one, few, many) {
    const absCount = Math.abs(count);
    const lastDigit = absCount % 10;
    const lastTwoDigits = absCount % 100;
    if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
        return many;
    }
    if (lastDigit === 1) {
        return one;
    }
    if (lastDigit >= 2 && lastDigit <= 4) {
        return few;
    }
    return many;
}
const error = ()=>{
    const Sizable = {
        string: {
            unit: {
                one: "символ",
                few: "символа",
                many: "символов"
            },
            verb: "иметь"
        },
        file: {
            unit: {
                one: "байт",
                few: "байта",
                many: "байт"
            },
            verb: "иметь"
        },
        array: {
            unit: {
                one: "элемент",
                few: "элемента",
                many: "элементов"
            },
            verb: "иметь"
        },
        set: {
            unit: {
                one: "элемент",
                few: "элемента",
                many: "элементов"
            },
            verb: "иметь"
        }
    };
    function getSizing(origin) {
        var _Sizable_origin;
        return (_Sizable_origin = Sizable[origin]) !== null && _Sizable_origin !== void 0 ? _Sizable_origin : null;
    }
    const parsedType = (data)=>{
        const t = typeof data;
        switch(t){
            case "number":
                {
                    return Number.isNaN(data) ? "NaN" : "число";
                }
            case "object":
                {
                    if (Array.isArray(data)) {
                        return "массив";
                    }
                    if (data === null) {
                        return "null";
                    }
                    if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                        return data.constructor.name;
                    }
                }
        }
        return t;
    };
    const Nouns = {
        regex: "ввод",
        email: "email адрес",
        url: "URL",
        emoji: "эмодзи",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ISO дата и время",
        date: "ISO дата",
        time: "ISO время",
        duration: "ISO длительность",
        ipv4: "IPv4 адрес",
        ipv6: "IPv6 адрес",
        cidrv4: "IPv4 диапазон",
        cidrv6: "IPv6 диапазон",
        base64: "строка в формате base64",
        base64url: "строка в формате base64url",
        json_string: "JSON строка",
        e164: "номер E.164",
        jwt: "JWT",
        template_literal: "ввод"
    };
    return (issue)=>{
        switch(issue.code){
            case "invalid_type":
                return "Неверный ввод: ожидалось ".concat(issue.expected, ", получено ").concat(parsedType(issue.input));
            case "invalid_value":
                if (issue.values.length === 1) return "Неверный ввод: ожидалось ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringifyPrimitive"](issue.values[0]));
                return "Неверный вариант: ожидалось одно из ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.values, "|"));
            case "too_big":
                {
                    const adj = issue.inclusive ? "<=" : "<";
                    const sizing = getSizing(issue.origin);
                    if (sizing) {
                        const maxValue = Number(issue.maximum);
                        const unit = getRussianPlural(maxValue, sizing.unit.one, sizing.unit.few, sizing.unit.many);
                        var _issue_origin;
                        return "Слишком большое значение: ожидалось, что ".concat((_issue_origin = issue.origin) !== null && _issue_origin !== void 0 ? _issue_origin : "значение", " будет иметь ").concat(adj).concat(issue.maximum.toString(), " ").concat(unit);
                    }
                    var _issue_origin1;
                    return "Слишком большое значение: ожидалось, что ".concat((_issue_origin1 = issue.origin) !== null && _issue_origin1 !== void 0 ? _issue_origin1 : "значение", " будет ").concat(adj).concat(issue.maximum.toString());
                }
            case "too_small":
                {
                    const adj = issue.inclusive ? ">=" : ">";
                    const sizing = getSizing(issue.origin);
                    if (sizing) {
                        const minValue = Number(issue.minimum);
                        const unit = getRussianPlural(minValue, sizing.unit.one, sizing.unit.few, sizing.unit.many);
                        return "Слишком маленькое значение: ожидалось, что ".concat(issue.origin, " будет иметь ").concat(adj).concat(issue.minimum.toString(), " ").concat(unit);
                    }
                    return "Слишком маленькое значение: ожидалось, что ".concat(issue.origin, " будет ").concat(adj).concat(issue.minimum.toString());
                }
            case "invalid_format":
                {
                    const _issue = issue;
                    if (_issue.format === "starts_with") return 'Неверная строка: должна начинаться с "'.concat(_issue.prefix, '"');
                    if (_issue.format === "ends_with") return 'Неверная строка: должна заканчиваться на "'.concat(_issue.suffix, '"');
                    if (_issue.format === "includes") return 'Неверная строка: должна содержать "'.concat(_issue.includes, '"');
                    if (_issue.format === "regex") return "Неверная строка: должна соответствовать шаблону ".concat(_issue.pattern);
                    var _Nouns__issue_format;
                    return "Неверный ".concat((_Nouns__issue_format = Nouns[_issue.format]) !== null && _Nouns__issue_format !== void 0 ? _Nouns__issue_format : issue.format);
                }
            case "not_multiple_of":
                return "Неверное число: должно быть кратным ".concat(issue.divisor);
            case "unrecognized_keys":
                return "Нераспознанн".concat(issue.keys.length > 1 ? "ые" : "ый", " ключ").concat(issue.keys.length > 1 ? "и" : "", ": ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.keys, ", "));
            case "invalid_key":
                return "Неверный ключ в ".concat(issue.origin);
            case "invalid_union":
                return "Неверные входные данные";
            case "invalid_element":
                return "Неверное значение в ".concat(issue.origin);
            default:
                return "Неверные входные данные";
        }
    };
};
function __TURBOPACK__default__export__() {
    return {
        localeError: error()
    };
}
}),
"[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/locales/sl.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/util.js [app-client] (ecmascript)");
;
const error = ()=>{
    const Sizable = {
        string: {
            unit: "znakov",
            verb: "imeti"
        },
        file: {
            unit: "bajtov",
            verb: "imeti"
        },
        array: {
            unit: "elementov",
            verb: "imeti"
        },
        set: {
            unit: "elementov",
            verb: "imeti"
        }
    };
    function getSizing(origin) {
        var _Sizable_origin;
        return (_Sizable_origin = Sizable[origin]) !== null && _Sizable_origin !== void 0 ? _Sizable_origin : null;
    }
    const parsedType = (data)=>{
        const t = typeof data;
        switch(t){
            case "number":
                {
                    return Number.isNaN(data) ? "NaN" : "število";
                }
            case "object":
                {
                    if (Array.isArray(data)) {
                        return "tabela";
                    }
                    if (data === null) {
                        return "null";
                    }
                    if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                        return data.constructor.name;
                    }
                }
        }
        return t;
    };
    const Nouns = {
        regex: "vnos",
        email: "e-poštni naslov",
        url: "URL",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ISO datum in čas",
        date: "ISO datum",
        time: "ISO čas",
        duration: "ISO trajanje",
        ipv4: "IPv4 naslov",
        ipv6: "IPv6 naslov",
        cidrv4: "obseg IPv4",
        cidrv6: "obseg IPv6",
        base64: "base64 kodiran niz",
        base64url: "base64url kodiran niz",
        json_string: "JSON niz",
        e164: "E.164 številka",
        jwt: "JWT",
        template_literal: "vnos"
    };
    return (issue)=>{
        switch(issue.code){
            case "invalid_type":
                return "Neveljaven vnos: pričakovano ".concat(issue.expected, ", prejeto ").concat(parsedType(issue.input));
            case "invalid_value":
                if (issue.values.length === 1) return "Neveljaven vnos: pričakovano ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringifyPrimitive"](issue.values[0]));
                return "Neveljavna možnost: pričakovano eno izmed ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.values, "|"));
            case "too_big":
                {
                    const adj = issue.inclusive ? "<=" : "<";
                    const sizing = getSizing(issue.origin);
                    var _issue_origin, _sizing_unit;
                    if (sizing) return "Preveliko: pričakovano, da bo ".concat((_issue_origin = issue.origin) !== null && _issue_origin !== void 0 ? _issue_origin : "vrednost", " imelo ").concat(adj).concat(issue.maximum.toString(), " ").concat((_sizing_unit = sizing.unit) !== null && _sizing_unit !== void 0 ? _sizing_unit : "elementov");
                    var _issue_origin1;
                    return "Preveliko: pričakovano, da bo ".concat((_issue_origin1 = issue.origin) !== null && _issue_origin1 !== void 0 ? _issue_origin1 : "vrednost", " ").concat(adj).concat(issue.maximum.toString());
                }
            case "too_small":
                {
                    const adj = issue.inclusive ? ">=" : ">";
                    const sizing = getSizing(issue.origin);
                    if (sizing) {
                        return "Premajhno: pričakovano, da bo ".concat(issue.origin, " imelo ").concat(adj).concat(issue.minimum.toString(), " ").concat(sizing.unit);
                    }
                    return "Premajhno: pričakovano, da bo ".concat(issue.origin, " ").concat(adj).concat(issue.minimum.toString());
                }
            case "invalid_format":
                {
                    const _issue = issue;
                    if (_issue.format === "starts_with") {
                        return 'Neveljaven niz: mora se začeti z "'.concat(_issue.prefix, '"');
                    }
                    if (_issue.format === "ends_with") return 'Neveljaven niz: mora se končati z "'.concat(_issue.suffix, '"');
                    if (_issue.format === "includes") return 'Neveljaven niz: mora vsebovati "'.concat(_issue.includes, '"');
                    if (_issue.format === "regex") return "Neveljaven niz: mora ustrezati vzorcu ".concat(_issue.pattern);
                    var _Nouns__issue_format;
                    return "Neveljaven ".concat((_Nouns__issue_format = Nouns[_issue.format]) !== null && _Nouns__issue_format !== void 0 ? _Nouns__issue_format : issue.format);
                }
            case "not_multiple_of":
                return "Neveljavno število: mora biti večkratnik ".concat(issue.divisor);
            case "unrecognized_keys":
                return "Neprepoznan".concat(issue.keys.length > 1 ? "i ključi" : " ključ", ": ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.keys, ", "));
            case "invalid_key":
                return "Neveljaven ključ v ".concat(issue.origin);
            case "invalid_union":
                return "Neveljaven vnos";
            case "invalid_element":
                return "Neveljavna vrednost v ".concat(issue.origin);
            default:
                return "Neveljaven vnos";
        }
    };
};
function __TURBOPACK__default__export__() {
    return {
        localeError: error()
    };
}
}),
"[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/locales/sv.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/util.js [app-client] (ecmascript)");
;
const error = ()=>{
    const Sizable = {
        string: {
            unit: "tecken",
            verb: "att ha"
        },
        file: {
            unit: "bytes",
            verb: "att ha"
        },
        array: {
            unit: "objekt",
            verb: "att innehålla"
        },
        set: {
            unit: "objekt",
            verb: "att innehålla"
        }
    };
    function getSizing(origin) {
        var _Sizable_origin;
        return (_Sizable_origin = Sizable[origin]) !== null && _Sizable_origin !== void 0 ? _Sizable_origin : null;
    }
    const parsedType = (data)=>{
        const t = typeof data;
        switch(t){
            case "number":
                {
                    return Number.isNaN(data) ? "NaN" : "antal";
                }
            case "object":
                {
                    if (Array.isArray(data)) {
                        return "lista";
                    }
                    if (data === null) {
                        return "null";
                    }
                    if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                        return data.constructor.name;
                    }
                }
        }
        return t;
    };
    const Nouns = {
        regex: "reguljärt uttryck",
        email: "e-postadress",
        url: "URL",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ISO-datum och tid",
        date: "ISO-datum",
        time: "ISO-tid",
        duration: "ISO-varaktighet",
        ipv4: "IPv4-intervall",
        ipv6: "IPv6-intervall",
        cidrv4: "IPv4-spektrum",
        cidrv6: "IPv6-spektrum",
        base64: "base64-kodad sträng",
        base64url: "base64url-kodad sträng",
        json_string: "JSON-sträng",
        e164: "E.164-nummer",
        jwt: "JWT",
        template_literal: "mall-literal"
    };
    return (issue)=>{
        switch(issue.code){
            case "invalid_type":
                return "Ogiltig inmatning: förväntat ".concat(issue.expected, ", fick ").concat(parsedType(issue.input));
            case "invalid_value":
                if (issue.values.length === 1) return "Ogiltig inmatning: förväntat ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringifyPrimitive"](issue.values[0]));
                return "Ogiltigt val: förväntade en av ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.values, "|"));
            case "too_big":
                {
                    const adj = issue.inclusive ? "<=" : "<";
                    const sizing = getSizing(issue.origin);
                    if (sizing) {
                        var _issue_origin, _sizing_unit;
                        return "För stor(t): förväntade ".concat((_issue_origin = issue.origin) !== null && _issue_origin !== void 0 ? _issue_origin : "värdet", " att ha ").concat(adj).concat(issue.maximum.toString(), " ").concat((_sizing_unit = sizing.unit) !== null && _sizing_unit !== void 0 ? _sizing_unit : "element");
                    }
                    var _issue_origin1;
                    return "För stor(t): förväntat ".concat((_issue_origin1 = issue.origin) !== null && _issue_origin1 !== void 0 ? _issue_origin1 : "värdet", " att ha ").concat(adj).concat(issue.maximum.toString());
                }
            case "too_small":
                {
                    const adj = issue.inclusive ? ">=" : ">";
                    const sizing = getSizing(issue.origin);
                    if (sizing) {
                        var _issue_origin2;
                        return "För lite(t): förväntade ".concat((_issue_origin2 = issue.origin) !== null && _issue_origin2 !== void 0 ? _issue_origin2 : "värdet", " att ha ").concat(adj).concat(issue.minimum.toString(), " ").concat(sizing.unit);
                    }
                    var _issue_origin3;
                    return "För lite(t): förväntade ".concat((_issue_origin3 = issue.origin) !== null && _issue_origin3 !== void 0 ? _issue_origin3 : "värdet", " att ha ").concat(adj).concat(issue.minimum.toString());
                }
            case "invalid_format":
                {
                    const _issue = issue;
                    if (_issue.format === "starts_with") {
                        return 'Ogiltig sträng: måste börja med "'.concat(_issue.prefix, '"');
                    }
                    if (_issue.format === "ends_with") return 'Ogiltig sträng: måste sluta med "'.concat(_issue.suffix, '"');
                    if (_issue.format === "includes") return 'Ogiltig sträng: måste innehålla "'.concat(_issue.includes, '"');
                    if (_issue.format === "regex") return 'Ogiltig sträng: måste matcha mönstret "'.concat(_issue.pattern, '"');
                    var _Nouns__issue_format;
                    return "Ogiltig(t) ".concat((_Nouns__issue_format = Nouns[_issue.format]) !== null && _Nouns__issue_format !== void 0 ? _Nouns__issue_format : issue.format);
                }
            case "not_multiple_of":
                return "Ogiltigt tal: måste vara en multipel av ".concat(issue.divisor);
            case "unrecognized_keys":
                return "".concat(issue.keys.length > 1 ? "Okända nycklar" : "Okänd nyckel", ": ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.keys, ", "));
            case "invalid_key":
                var _issue_origin4;
                return "Ogiltig nyckel i ".concat((_issue_origin4 = issue.origin) !== null && _issue_origin4 !== void 0 ? _issue_origin4 : "värdet");
            case "invalid_union":
                return "Ogiltig input";
            case "invalid_element":
                var _issue_origin5;
                return "Ogiltigt värde i ".concat((_issue_origin5 = issue.origin) !== null && _issue_origin5 !== void 0 ? _issue_origin5 : "värdet");
            default:
                return "Ogiltig input";
        }
    };
};
function __TURBOPACK__default__export__() {
    return {
        localeError: error()
    };
}
}),
"[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/locales/ta.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/util.js [app-client] (ecmascript)");
;
const error = ()=>{
    const Sizable = {
        string: {
            unit: "எழுத்துக்கள்",
            verb: "கொண்டிருக்க வேண்டும்"
        },
        file: {
            unit: "பைட்டுகள்",
            verb: "கொண்டிருக்க வேண்டும்"
        },
        array: {
            unit: "உறுப்புகள்",
            verb: "கொண்டிருக்க வேண்டும்"
        },
        set: {
            unit: "உறுப்புகள்",
            verb: "கொண்டிருக்க வேண்டும்"
        }
    };
    function getSizing(origin) {
        var _Sizable_origin;
        return (_Sizable_origin = Sizable[origin]) !== null && _Sizable_origin !== void 0 ? _Sizable_origin : null;
    }
    const parsedType = (data)=>{
        const t = typeof data;
        switch(t){
            case "number":
                {
                    return Number.isNaN(data) ? "எண் அல்லாதது" : "எண்";
                }
            case "object":
                {
                    if (Array.isArray(data)) {
                        return "அணி";
                    }
                    if (data === null) {
                        return "வெறுமை";
                    }
                    if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                        return data.constructor.name;
                    }
                }
        }
        return t;
    };
    const Nouns = {
        regex: "உள்ளீடு",
        email: "மின்னஞ்சல் முகவரி",
        url: "URL",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ISO தேதி நேரம்",
        date: "ISO தேதி",
        time: "ISO நேரம்",
        duration: "ISO கால அளவு",
        ipv4: "IPv4 முகவரி",
        ipv6: "IPv6 முகவரி",
        cidrv4: "IPv4 வரம்பு",
        cidrv6: "IPv6 வரம்பு",
        base64: "base64-encoded சரம்",
        base64url: "base64url-encoded சரம்",
        json_string: "JSON சரம்",
        e164: "E.164 எண்",
        jwt: "JWT",
        template_literal: "input"
    };
    return (issue)=>{
        switch(issue.code){
            case "invalid_type":
                return "தவறான உள்ளீடு: எதிர்பார்க்கப்பட்டது ".concat(issue.expected, ", பெறப்பட்டது ").concat(parsedType(issue.input));
            case "invalid_value":
                if (issue.values.length === 1) return "தவறான உள்ளீடு: எதிர்பார்க்கப்பட்டது ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringifyPrimitive"](issue.values[0]));
                return "தவறான விருப்பம்: எதிர்பார்க்கப்பட்டது ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.values, "|"), " இல் ஒன்று");
            case "too_big":
                {
                    const adj = issue.inclusive ? "<=" : "<";
                    const sizing = getSizing(issue.origin);
                    if (sizing) {
                        var _issue_origin, _sizing_unit;
                        return "மிக பெரியது: எதிர்பார்க்கப்பட்டது ".concat((_issue_origin = issue.origin) !== null && _issue_origin !== void 0 ? _issue_origin : "மதிப்பு", " ").concat(adj).concat(issue.maximum.toString(), " ").concat((_sizing_unit = sizing.unit) !== null && _sizing_unit !== void 0 ? _sizing_unit : "உறுப்புகள்", " ஆக இருக்க வேண்டும்");
                    }
                    var _issue_origin1;
                    return "மிக பெரியது: எதிர்பார்க்கப்பட்டது ".concat((_issue_origin1 = issue.origin) !== null && _issue_origin1 !== void 0 ? _issue_origin1 : "மதிப்பு", " ").concat(adj).concat(issue.maximum.toString(), " ஆக இருக்க வேண்டும்");
                }
            case "too_small":
                {
                    const adj = issue.inclusive ? ">=" : ">";
                    const sizing = getSizing(issue.origin);
                    if (sizing) {
                        return "மிகச் சிறியது: எதிர்பார்க்கப்பட்டது ".concat(issue.origin, " ").concat(adj).concat(issue.minimum.toString(), " ").concat(sizing.unit, " ஆக இருக்க வேண்டும்"); //
                    }
                    return "மிகச் சிறியது: எதிர்பார்க்கப்பட்டது ".concat(issue.origin, " ").concat(adj).concat(issue.minimum.toString(), " ஆக இருக்க வேண்டும்");
                }
            case "invalid_format":
                {
                    const _issue = issue;
                    if (_issue.format === "starts_with") return 'தவறான சரம்: "'.concat(_issue.prefix, '" இல் தொடங்க வேண்டும்');
                    if (_issue.format === "ends_with") return 'தவறான சரம்: "'.concat(_issue.suffix, '" இல் முடிவடைய வேண்டும்');
                    if (_issue.format === "includes") return 'தவறான சரம்: "'.concat(_issue.includes, '" ஐ உள்ளடக்க வேண்டும்');
                    if (_issue.format === "regex") return "தவறான சரம்: ".concat(_issue.pattern, " முறைபாட்டுடன் பொருந்த வேண்டும்");
                    var _Nouns__issue_format;
                    return "தவறான ".concat((_Nouns__issue_format = Nouns[_issue.format]) !== null && _Nouns__issue_format !== void 0 ? _Nouns__issue_format : issue.format);
                }
            case "not_multiple_of":
                return "தவறான எண்: ".concat(issue.divisor, " இன் பலமாக இருக்க வேண்டும்");
            case "unrecognized_keys":
                return "அடையாளம் தெரியாத விசை".concat(issue.keys.length > 1 ? "கள்" : "", ": ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.keys, ", "));
            case "invalid_key":
                return "".concat(issue.origin, " இல் தவறான விசை");
            case "invalid_union":
                return "தவறான உள்ளீடு";
            case "invalid_element":
                return "".concat(issue.origin, " இல் தவறான மதிப்பு");
            default:
                return "தவறான உள்ளீடு";
        }
    };
};
function __TURBOPACK__default__export__() {
    return {
        localeError: error()
    };
}
}),
"[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/locales/th.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/util.js [app-client] (ecmascript)");
;
const error = ()=>{
    const Sizable = {
        string: {
            unit: "ตัวอักษร",
            verb: "ควรมี"
        },
        file: {
            unit: "ไบต์",
            verb: "ควรมี"
        },
        array: {
            unit: "รายการ",
            verb: "ควรมี"
        },
        set: {
            unit: "รายการ",
            verb: "ควรมี"
        }
    };
    function getSizing(origin) {
        var _Sizable_origin;
        return (_Sizable_origin = Sizable[origin]) !== null && _Sizable_origin !== void 0 ? _Sizable_origin : null;
    }
    const parsedType = (data)=>{
        const t = typeof data;
        switch(t){
            case "number":
                {
                    return Number.isNaN(data) ? "ไม่ใช่ตัวเลข (NaN)" : "ตัวเลข";
                }
            case "object":
                {
                    if (Array.isArray(data)) {
                        return "อาร์เรย์ (Array)";
                    }
                    if (data === null) {
                        return "ไม่มีค่า (null)";
                    }
                    if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                        return data.constructor.name;
                    }
                }
        }
        return t;
    };
    const Nouns = {
        regex: "ข้อมูลที่ป้อน",
        email: "ที่อยู่อีเมล",
        url: "URL",
        emoji: "อิโมจิ",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "วันที่เวลาแบบ ISO",
        date: "วันที่แบบ ISO",
        time: "เวลาแบบ ISO",
        duration: "ช่วงเวลาแบบ ISO",
        ipv4: "ที่อยู่ IPv4",
        ipv6: "ที่อยู่ IPv6",
        cidrv4: "ช่วง IP แบบ IPv4",
        cidrv6: "ช่วง IP แบบ IPv6",
        base64: "ข้อความแบบ Base64",
        base64url: "ข้อความแบบ Base64 สำหรับ URL",
        json_string: "ข้อความแบบ JSON",
        e164: "เบอร์โทรศัพท์ระหว่างประเทศ (E.164)",
        jwt: "โทเคน JWT",
        template_literal: "ข้อมูลที่ป้อน"
    };
    return (issue)=>{
        switch(issue.code){
            case "invalid_type":
                return "ประเภทข้อมูลไม่ถูกต้อง: ควรเป็น ".concat(issue.expected, " แต่ได้รับ ").concat(parsedType(issue.input));
            case "invalid_value":
                if (issue.values.length === 1) return "ค่าไม่ถูกต้อง: ควรเป็น ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringifyPrimitive"](issue.values[0]));
                return "ตัวเลือกไม่ถูกต้อง: ควรเป็นหนึ่งใน ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.values, "|"));
            case "too_big":
                {
                    const adj = issue.inclusive ? "ไม่เกิน" : "น้อยกว่า";
                    const sizing = getSizing(issue.origin);
                    var _issue_origin, _sizing_unit;
                    if (sizing) return "เกินกำหนด: ".concat((_issue_origin = issue.origin) !== null && _issue_origin !== void 0 ? _issue_origin : "ค่า", " ควรมี").concat(adj, " ").concat(issue.maximum.toString(), " ").concat((_sizing_unit = sizing.unit) !== null && _sizing_unit !== void 0 ? _sizing_unit : "รายการ");
                    var _issue_origin1;
                    return "เกินกำหนด: ".concat((_issue_origin1 = issue.origin) !== null && _issue_origin1 !== void 0 ? _issue_origin1 : "ค่า", " ควรมี").concat(adj, " ").concat(issue.maximum.toString());
                }
            case "too_small":
                {
                    const adj = issue.inclusive ? "อย่างน้อย" : "มากกว่า";
                    const sizing = getSizing(issue.origin);
                    if (sizing) {
                        return "น้อยกว่ากำหนด: ".concat(issue.origin, " ควรมี").concat(adj, " ").concat(issue.minimum.toString(), " ").concat(sizing.unit);
                    }
                    return "น้อยกว่ากำหนด: ".concat(issue.origin, " ควรมี").concat(adj, " ").concat(issue.minimum.toString());
                }
            case "invalid_format":
                {
                    const _issue = issue;
                    if (_issue.format === "starts_with") {
                        return 'รูปแบบไม่ถูกต้อง: ข้อความต้องขึ้นต้นด้วย "'.concat(_issue.prefix, '"');
                    }
                    if (_issue.format === "ends_with") return 'รูปแบบไม่ถูกต้อง: ข้อความต้องลงท้ายด้วย "'.concat(_issue.suffix, '"');
                    if (_issue.format === "includes") return 'รูปแบบไม่ถูกต้อง: ข้อความต้องมี "'.concat(_issue.includes, '" อยู่ในข้อความ');
                    if (_issue.format === "regex") return "รูปแบบไม่ถูกต้อง: ต้องตรงกับรูปแบบที่กำหนด ".concat(_issue.pattern);
                    var _Nouns__issue_format;
                    return "รูปแบบไม่ถูกต้อง: ".concat((_Nouns__issue_format = Nouns[_issue.format]) !== null && _Nouns__issue_format !== void 0 ? _Nouns__issue_format : issue.format);
                }
            case "not_multiple_of":
                return "ตัวเลขไม่ถูกต้อง: ต้องเป็นจำนวนที่หารด้วย ".concat(issue.divisor, " ได้ลงตัว");
            case "unrecognized_keys":
                return "พบคีย์ที่ไม่รู้จัก: ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.keys, ", "));
            case "invalid_key":
                return "คีย์ไม่ถูกต้องใน ".concat(issue.origin);
            case "invalid_union":
                return "ข้อมูลไม่ถูกต้อง: ไม่ตรงกับรูปแบบยูเนียนที่กำหนดไว้";
            case "invalid_element":
                return "ข้อมูลไม่ถูกต้องใน ".concat(issue.origin);
            default:
                return "ข้อมูลไม่ถูกต้อง";
        }
    };
};
function __TURBOPACK__default__export__() {
    return {
        localeError: error()
    };
}
}),
"[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/locales/tr.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "parsedType",
    ()=>parsedType
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/util.js [app-client] (ecmascript)");
;
const parsedType = (data)=>{
    const t = typeof data;
    switch(t){
        case "number":
            {
                return Number.isNaN(data) ? "NaN" : "number";
            }
        case "object":
            {
                if (Array.isArray(data)) {
                    return "array";
                }
                if (data === null) {
                    return "null";
                }
                if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                    return data.constructor.name;
                }
            }
    }
    return t;
};
const error = ()=>{
    const Sizable = {
        string: {
            unit: "karakter",
            verb: "olmalı"
        },
        file: {
            unit: "bayt",
            verb: "olmalı"
        },
        array: {
            unit: "öğe",
            verb: "olmalı"
        },
        set: {
            unit: "öğe",
            verb: "olmalı"
        }
    };
    function getSizing(origin) {
        var _Sizable_origin;
        return (_Sizable_origin = Sizable[origin]) !== null && _Sizable_origin !== void 0 ? _Sizable_origin : null;
    }
    const Nouns = {
        regex: "girdi",
        email: "e-posta adresi",
        url: "URL",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ISO tarih ve saat",
        date: "ISO tarih",
        time: "ISO saat",
        duration: "ISO süre",
        ipv4: "IPv4 adresi",
        ipv6: "IPv6 adresi",
        cidrv4: "IPv4 aralığı",
        cidrv6: "IPv6 aralığı",
        base64: "base64 ile şifrelenmiş metin",
        base64url: "base64url ile şifrelenmiş metin",
        json_string: "JSON dizesi",
        e164: "E.164 sayısı",
        jwt: "JWT",
        template_literal: "Şablon dizesi"
    };
    return (issue)=>{
        switch(issue.code){
            case "invalid_type":
                return "Geçersiz değer: beklenen ".concat(issue.expected, ", alınan ").concat(parsedType(issue.input));
            case "invalid_value":
                if (issue.values.length === 1) return "Geçersiz değer: beklenen ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringifyPrimitive"](issue.values[0]));
                return "Geçersiz seçenek: aşağıdakilerden biri olmalı: ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.values, "|"));
            case "too_big":
                {
                    const adj = issue.inclusive ? "<=" : "<";
                    const sizing = getSizing(issue.origin);
                    var _issue_origin, _sizing_unit;
                    if (sizing) return "Çok büyük: beklenen ".concat((_issue_origin = issue.origin) !== null && _issue_origin !== void 0 ? _issue_origin : "değer", " ").concat(adj).concat(issue.maximum.toString(), " ").concat((_sizing_unit = sizing.unit) !== null && _sizing_unit !== void 0 ? _sizing_unit : "öğe");
                    var _issue_origin1;
                    return "Çok büyük: beklenen ".concat((_issue_origin1 = issue.origin) !== null && _issue_origin1 !== void 0 ? _issue_origin1 : "değer", " ").concat(adj).concat(issue.maximum.toString());
                }
            case "too_small":
                {
                    const adj = issue.inclusive ? ">=" : ">";
                    const sizing = getSizing(issue.origin);
                    if (sizing) return "Çok küçük: beklenen ".concat(issue.origin, " ").concat(adj).concat(issue.minimum.toString(), " ").concat(sizing.unit);
                    return "Çok küçük: beklenen ".concat(issue.origin, " ").concat(adj).concat(issue.minimum.toString());
                }
            case "invalid_format":
                {
                    const _issue = issue;
                    if (_issue.format === "starts_with") return 'Geçersiz metin: "'.concat(_issue.prefix, '" ile başlamalı');
                    if (_issue.format === "ends_with") return 'Geçersiz metin: "'.concat(_issue.suffix, '" ile bitmeli');
                    if (_issue.format === "includes") return 'Geçersiz metin: "'.concat(_issue.includes, '" içermeli');
                    if (_issue.format === "regex") return "Geçersiz metin: ".concat(_issue.pattern, " desenine uymalı");
                    var _Nouns__issue_format;
                    return "Geçersiz ".concat((_Nouns__issue_format = Nouns[_issue.format]) !== null && _Nouns__issue_format !== void 0 ? _Nouns__issue_format : issue.format);
                }
            case "not_multiple_of":
                return "Geçersiz sayı: ".concat(issue.divisor, " ile tam bölünebilmeli");
            case "unrecognized_keys":
                return "Tanınmayan anahtar".concat(issue.keys.length > 1 ? "lar" : "", ": ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.keys, ", "));
            case "invalid_key":
                return "".concat(issue.origin, " içinde geçersiz anahtar");
            case "invalid_union":
                return "Geçersiz değer";
            case "invalid_element":
                return "".concat(issue.origin, " içinde geçersiz değer");
            default:
                return "Geçersiz değer";
        }
    };
};
function __TURBOPACK__default__export__() {
    return {
        localeError: error()
    };
}
}),
"[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/locales/ua.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/util.js [app-client] (ecmascript)");
;
const error = ()=>{
    const Sizable = {
        string: {
            unit: "символів",
            verb: "матиме"
        },
        file: {
            unit: "байтів",
            verb: "матиме"
        },
        array: {
            unit: "елементів",
            verb: "матиме"
        },
        set: {
            unit: "елементів",
            verb: "матиме"
        }
    };
    function getSizing(origin) {
        var _Sizable_origin;
        return (_Sizable_origin = Sizable[origin]) !== null && _Sizable_origin !== void 0 ? _Sizable_origin : null;
    }
    const parsedType = (data)=>{
        const t = typeof data;
        switch(t){
            case "number":
                {
                    return Number.isNaN(data) ? "NaN" : "число";
                }
            case "object":
                {
                    if (Array.isArray(data)) {
                        return "масив";
                    }
                    if (data === null) {
                        return "null";
                    }
                    if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                        return data.constructor.name;
                    }
                }
        }
        return t;
    };
    const Nouns = {
        regex: "вхідні дані",
        email: "адреса електронної пошти",
        url: "URL",
        emoji: "емодзі",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "дата та час ISO",
        date: "дата ISO",
        time: "час ISO",
        duration: "тривалість ISO",
        ipv4: "адреса IPv4",
        ipv6: "адреса IPv6",
        cidrv4: "діапазон IPv4",
        cidrv6: "діапазон IPv6",
        base64: "рядок у кодуванні base64",
        base64url: "рядок у кодуванні base64url",
        json_string: "рядок JSON",
        e164: "номер E.164",
        jwt: "JWT",
        template_literal: "вхідні дані"
    };
    return (issue)=>{
        switch(issue.code){
            case "invalid_type":
                return "Неправильні вхідні дані: очікується ".concat(issue.expected, ", отримано ").concat(parsedType(issue.input));
            // return `Неправильні вхідні дані: очікується ${issue.expected}, отримано ${util.getParsedType(issue.input)}`;
            case "invalid_value":
                if (issue.values.length === 1) return "Неправильні вхідні дані: очікується ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringifyPrimitive"](issue.values[0]));
                return "Неправильна опція: очікується одне з ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.values, "|"));
            case "too_big":
                {
                    const adj = issue.inclusive ? "<=" : "<";
                    const sizing = getSizing(issue.origin);
                    var _issue_origin, _sizing_unit;
                    if (sizing) return "Занадто велике: очікується, що ".concat((_issue_origin = issue.origin) !== null && _issue_origin !== void 0 ? _issue_origin : "значення", " ").concat(sizing.verb, " ").concat(adj).concat(issue.maximum.toString(), " ").concat((_sizing_unit = sizing.unit) !== null && _sizing_unit !== void 0 ? _sizing_unit : "елементів");
                    var _issue_origin1;
                    return "Занадто велике: очікується, що ".concat((_issue_origin1 = issue.origin) !== null && _issue_origin1 !== void 0 ? _issue_origin1 : "значення", " буде ").concat(adj).concat(issue.maximum.toString());
                }
            case "too_small":
                {
                    const adj = issue.inclusive ? ">=" : ">";
                    const sizing = getSizing(issue.origin);
                    if (sizing) {
                        return "Занадто мале: очікується, що ".concat(issue.origin, " ").concat(sizing.verb, " ").concat(adj).concat(issue.minimum.toString(), " ").concat(sizing.unit);
                    }
                    return "Занадто мале: очікується, що ".concat(issue.origin, " буде ").concat(adj).concat(issue.minimum.toString());
                }
            case "invalid_format":
                {
                    const _issue = issue;
                    if (_issue.format === "starts_with") return 'Неправильний рядок: повинен починатися з "'.concat(_issue.prefix, '"');
                    if (_issue.format === "ends_with") return 'Неправильний рядок: повинен закінчуватися на "'.concat(_issue.suffix, '"');
                    if (_issue.format === "includes") return 'Неправильний рядок: повинен містити "'.concat(_issue.includes, '"');
                    if (_issue.format === "regex") return "Неправильний рядок: повинен відповідати шаблону ".concat(_issue.pattern);
                    var _Nouns__issue_format;
                    return "Неправильний ".concat((_Nouns__issue_format = Nouns[_issue.format]) !== null && _Nouns__issue_format !== void 0 ? _Nouns__issue_format : issue.format);
                }
            case "not_multiple_of":
                return "Неправильне число: повинно бути кратним ".concat(issue.divisor);
            case "unrecognized_keys":
                return "Нерозпізнаний ключ".concat(issue.keys.length > 1 ? "і" : "", ": ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.keys, ", "));
            case "invalid_key":
                return "Неправильний ключ у ".concat(issue.origin);
            case "invalid_union":
                return "Неправильні вхідні дані";
            case "invalid_element":
                return "Неправильне значення у ".concat(issue.origin);
            default:
                return "Неправильні вхідні дані";
        }
    };
};
function __TURBOPACK__default__export__() {
    return {
        localeError: error()
    };
}
}),
"[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/locales/ur.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/util.js [app-client] (ecmascript)");
;
const error = ()=>{
    const Sizable = {
        string: {
            unit: "حروف",
            verb: "ہونا"
        },
        file: {
            unit: "بائٹس",
            verb: "ہونا"
        },
        array: {
            unit: "آئٹمز",
            verb: "ہونا"
        },
        set: {
            unit: "آئٹمز",
            verb: "ہونا"
        }
    };
    function getSizing(origin) {
        var _Sizable_origin;
        return (_Sizable_origin = Sizable[origin]) !== null && _Sizable_origin !== void 0 ? _Sizable_origin : null;
    }
    const parsedType = (data)=>{
        const t = typeof data;
        switch(t){
            case "number":
                {
                    return Number.isNaN(data) ? "NaN" : "نمبر";
                }
            case "object":
                {
                    if (Array.isArray(data)) {
                        return "آرے";
                    }
                    if (data === null) {
                        return "نل";
                    }
                    if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                        return data.constructor.name;
                    }
                }
        }
        return t;
    };
    const Nouns = {
        regex: "ان پٹ",
        email: "ای میل ایڈریس",
        url: "یو آر ایل",
        emoji: "ایموجی",
        uuid: "یو یو آئی ڈی",
        uuidv4: "یو یو آئی ڈی وی 4",
        uuidv6: "یو یو آئی ڈی وی 6",
        nanoid: "نینو آئی ڈی",
        guid: "جی یو آئی ڈی",
        cuid: "سی یو آئی ڈی",
        cuid2: "سی یو آئی ڈی 2",
        ulid: "یو ایل آئی ڈی",
        xid: "ایکس آئی ڈی",
        ksuid: "کے ایس یو آئی ڈی",
        datetime: "آئی ایس او ڈیٹ ٹائم",
        date: "آئی ایس او تاریخ",
        time: "آئی ایس او وقت",
        duration: "آئی ایس او مدت",
        ipv4: "آئی پی وی 4 ایڈریس",
        ipv6: "آئی پی وی 6 ایڈریس",
        cidrv4: "آئی پی وی 4 رینج",
        cidrv6: "آئی پی وی 6 رینج",
        base64: "بیس 64 ان کوڈڈ سٹرنگ",
        base64url: "بیس 64 یو آر ایل ان کوڈڈ سٹرنگ",
        json_string: "جے ایس او این سٹرنگ",
        e164: "ای 164 نمبر",
        jwt: "جے ڈبلیو ٹی",
        template_literal: "ان پٹ"
    };
    return (issue)=>{
        switch(issue.code){
            case "invalid_type":
                return "غلط ان پٹ: ".concat(issue.expected, " متوقع تھا، ").concat(parsedType(issue.input), " موصول ہوا");
            case "invalid_value":
                if (issue.values.length === 1) return "غلط ان پٹ: ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringifyPrimitive"](issue.values[0]), " متوقع تھا");
                return "غلط آپشن: ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.values, "|"), " میں سے ایک متوقع تھا");
            case "too_big":
                {
                    const adj = issue.inclusive ? "<=" : "<";
                    const sizing = getSizing(issue.origin);
                    var _issue_origin, _sizing_unit;
                    if (sizing) return "بہت بڑا: ".concat((_issue_origin = issue.origin) !== null && _issue_origin !== void 0 ? _issue_origin : "ویلیو", " کے ").concat(adj).concat(issue.maximum.toString(), " ").concat((_sizing_unit = sizing.unit) !== null && _sizing_unit !== void 0 ? _sizing_unit : "عناصر", " ہونے متوقع تھے");
                    var _issue_origin1;
                    return "بہت بڑا: ".concat((_issue_origin1 = issue.origin) !== null && _issue_origin1 !== void 0 ? _issue_origin1 : "ویلیو", " کا ").concat(adj).concat(issue.maximum.toString(), " ہونا متوقع تھا");
                }
            case "too_small":
                {
                    const adj = issue.inclusive ? ">=" : ">";
                    const sizing = getSizing(issue.origin);
                    if (sizing) {
                        return "بہت چھوٹا: ".concat(issue.origin, " کے ").concat(adj).concat(issue.minimum.toString(), " ").concat(sizing.unit, " ہونے متوقع تھے");
                    }
                    return "بہت چھوٹا: ".concat(issue.origin, " کا ").concat(adj).concat(issue.minimum.toString(), " ہونا متوقع تھا");
                }
            case "invalid_format":
                {
                    const _issue = issue;
                    if (_issue.format === "starts_with") {
                        return 'غلط سٹرنگ: "'.concat(_issue.prefix, '" سے شروع ہونا چاہیے');
                    }
                    if (_issue.format === "ends_with") return 'غلط سٹرنگ: "'.concat(_issue.suffix, '" پر ختم ہونا چاہیے');
                    if (_issue.format === "includes") return 'غلط سٹرنگ: "'.concat(_issue.includes, '" شامل ہونا چاہیے');
                    if (_issue.format === "regex") return "غلط سٹرنگ: پیٹرن ".concat(_issue.pattern, " سے میچ ہونا چاہیے");
                    var _Nouns__issue_format;
                    return "غلط ".concat((_Nouns__issue_format = Nouns[_issue.format]) !== null && _Nouns__issue_format !== void 0 ? _Nouns__issue_format : issue.format);
                }
            case "not_multiple_of":
                return "غلط نمبر: ".concat(issue.divisor, " کا مضاعف ہونا چاہیے");
            case "unrecognized_keys":
                return "غیر تسلیم شدہ کی".concat(issue.keys.length > 1 ? "ز" : "", ": ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.keys, "، "));
            case "invalid_key":
                return "".concat(issue.origin, " میں غلط کی");
            case "invalid_union":
                return "غلط ان پٹ";
            case "invalid_element":
                return "".concat(issue.origin, " میں غلط ویلیو");
            default:
                return "غلط ان پٹ";
        }
    };
};
function __TURBOPACK__default__export__() {
    return {
        localeError: error()
    };
}
}),
"[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/locales/vi.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/util.js [app-client] (ecmascript)");
;
const error = ()=>{
    const Sizable = {
        string: {
            unit: "ký tự",
            verb: "có"
        },
        file: {
            unit: "byte",
            verb: "có"
        },
        array: {
            unit: "phần tử",
            verb: "có"
        },
        set: {
            unit: "phần tử",
            verb: "có"
        }
    };
    function getSizing(origin) {
        var _Sizable_origin;
        return (_Sizable_origin = Sizable[origin]) !== null && _Sizable_origin !== void 0 ? _Sizable_origin : null;
    }
    const parsedType = (data)=>{
        const t = typeof data;
        switch(t){
            case "number":
                {
                    return Number.isNaN(data) ? "NaN" : "số";
                }
            case "object":
                {
                    if (Array.isArray(data)) {
                        return "mảng";
                    }
                    if (data === null) {
                        return "null";
                    }
                    if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                        return data.constructor.name;
                    }
                }
        }
        return t;
    };
    const Nouns = {
        regex: "đầu vào",
        email: "địa chỉ email",
        url: "URL",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ngày giờ ISO",
        date: "ngày ISO",
        time: "giờ ISO",
        duration: "khoảng thời gian ISO",
        ipv4: "địa chỉ IPv4",
        ipv6: "địa chỉ IPv6",
        cidrv4: "dải IPv4",
        cidrv6: "dải IPv6",
        base64: "chuỗi mã hóa base64",
        base64url: "chuỗi mã hóa base64url",
        json_string: "chuỗi JSON",
        e164: "số E.164",
        jwt: "JWT",
        template_literal: "đầu vào"
    };
    return (issue)=>{
        switch(issue.code){
            case "invalid_type":
                return "Đầu vào không hợp lệ: mong đợi ".concat(issue.expected, ", nhận được ").concat(parsedType(issue.input));
            case "invalid_value":
                if (issue.values.length === 1) return "Đầu vào không hợp lệ: mong đợi ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringifyPrimitive"](issue.values[0]));
                return "Tùy chọn không hợp lệ: mong đợi một trong các giá trị ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.values, "|"));
            case "too_big":
                {
                    const adj = issue.inclusive ? "<=" : "<";
                    const sizing = getSizing(issue.origin);
                    var _issue_origin, _sizing_unit;
                    if (sizing) return "Quá lớn: mong đợi ".concat((_issue_origin = issue.origin) !== null && _issue_origin !== void 0 ? _issue_origin : "giá trị", " ").concat(sizing.verb, " ").concat(adj).concat(issue.maximum.toString(), " ").concat((_sizing_unit = sizing.unit) !== null && _sizing_unit !== void 0 ? _sizing_unit : "phần tử");
                    var _issue_origin1;
                    return "Quá lớn: mong đợi ".concat((_issue_origin1 = issue.origin) !== null && _issue_origin1 !== void 0 ? _issue_origin1 : "giá trị", " ").concat(adj).concat(issue.maximum.toString());
                }
            case "too_small":
                {
                    const adj = issue.inclusive ? ">=" : ">";
                    const sizing = getSizing(issue.origin);
                    if (sizing) {
                        return "Quá nhỏ: mong đợi ".concat(issue.origin, " ").concat(sizing.verb, " ").concat(adj).concat(issue.minimum.toString(), " ").concat(sizing.unit);
                    }
                    return "Quá nhỏ: mong đợi ".concat(issue.origin, " ").concat(adj).concat(issue.minimum.toString());
                }
            case "invalid_format":
                {
                    const _issue = issue;
                    if (_issue.format === "starts_with") return 'Chuỗi không hợp lệ: phải bắt đầu bằng "'.concat(_issue.prefix, '"');
                    if (_issue.format === "ends_with") return 'Chuỗi không hợp lệ: phải kết thúc bằng "'.concat(_issue.suffix, '"');
                    if (_issue.format === "includes") return 'Chuỗi không hợp lệ: phải bao gồm "'.concat(_issue.includes, '"');
                    if (_issue.format === "regex") return "Chuỗi không hợp lệ: phải khớp với mẫu ".concat(_issue.pattern);
                    var _Nouns__issue_format;
                    return "".concat((_Nouns__issue_format = Nouns[_issue.format]) !== null && _Nouns__issue_format !== void 0 ? _Nouns__issue_format : issue.format, " không hợp lệ");
                }
            case "not_multiple_of":
                return "Số không hợp lệ: phải là bội số của ".concat(issue.divisor);
            case "unrecognized_keys":
                return "Khóa không được nhận dạng: ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.keys, ", "));
            case "invalid_key":
                return "Khóa không hợp lệ trong ".concat(issue.origin);
            case "invalid_union":
                return "Đầu vào không hợp lệ";
            case "invalid_element":
                return "Giá trị không hợp lệ trong ".concat(issue.origin);
            default:
                return "Đầu vào không hợp lệ";
        }
    };
};
function __TURBOPACK__default__export__() {
    return {
        localeError: error()
    };
}
}),
"[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/locales/zh-CN.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/util.js [app-client] (ecmascript)");
;
const error = ()=>{
    const Sizable = {
        string: {
            unit: "字符",
            verb: "包含"
        },
        file: {
            unit: "字节",
            verb: "包含"
        },
        array: {
            unit: "项",
            verb: "包含"
        },
        set: {
            unit: "项",
            verb: "包含"
        }
    };
    function getSizing(origin) {
        var _Sizable_origin;
        return (_Sizable_origin = Sizable[origin]) !== null && _Sizable_origin !== void 0 ? _Sizable_origin : null;
    }
    const parsedType = (data)=>{
        const t = typeof data;
        switch(t){
            case "number":
                {
                    return Number.isNaN(data) ? "非数字(NaN)" : "数字";
                }
            case "object":
                {
                    if (Array.isArray(data)) {
                        return "数组";
                    }
                    if (data === null) {
                        return "空值(null)";
                    }
                    if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                        return data.constructor.name;
                    }
                }
        }
        return t;
    };
    const Nouns = {
        regex: "输入",
        email: "电子邮件",
        url: "URL",
        emoji: "表情符号",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ISO日期时间",
        date: "ISO日期",
        time: "ISO时间",
        duration: "ISO时长",
        ipv4: "IPv4地址",
        ipv6: "IPv6地址",
        cidrv4: "IPv4网段",
        cidrv6: "IPv6网段",
        base64: "base64编码字符串",
        base64url: "base64url编码字符串",
        json_string: "JSON字符串",
        e164: "E.164号码",
        jwt: "JWT",
        template_literal: "输入"
    };
    return (issue)=>{
        switch(issue.code){
            case "invalid_type":
                return "无效输入：期望 ".concat(issue.expected, "，实际接收 ").concat(parsedType(issue.input));
            case "invalid_value":
                if (issue.values.length === 1) return "无效输入：期望 ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringifyPrimitive"](issue.values[0]));
                return "无效选项：期望以下之一 ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.values, "|"));
            case "too_big":
                {
                    const adj = issue.inclusive ? "<=" : "<";
                    const sizing = getSizing(issue.origin);
                    var _issue_origin, _sizing_unit;
                    if (sizing) return "数值过大：期望 ".concat((_issue_origin = issue.origin) !== null && _issue_origin !== void 0 ? _issue_origin : "值", " ").concat(adj).concat(issue.maximum.toString(), " ").concat((_sizing_unit = sizing.unit) !== null && _sizing_unit !== void 0 ? _sizing_unit : "个元素");
                    var _issue_origin1;
                    return "数值过大：期望 ".concat((_issue_origin1 = issue.origin) !== null && _issue_origin1 !== void 0 ? _issue_origin1 : "值", " ").concat(adj).concat(issue.maximum.toString());
                }
            case "too_small":
                {
                    const adj = issue.inclusive ? ">=" : ">";
                    const sizing = getSizing(issue.origin);
                    if (sizing) {
                        return "数值过小：期望 ".concat(issue.origin, " ").concat(adj).concat(issue.minimum.toString(), " ").concat(sizing.unit);
                    }
                    return "数值过小：期望 ".concat(issue.origin, " ").concat(adj).concat(issue.minimum.toString());
                }
            case "invalid_format":
                {
                    const _issue = issue;
                    if (_issue.format === "starts_with") return '无效字符串：必须以 "'.concat(_issue.prefix, '" 开头');
                    if (_issue.format === "ends_with") return '无效字符串：必须以 "'.concat(_issue.suffix, '" 结尾');
                    if (_issue.format === "includes") return '无效字符串：必须包含 "'.concat(_issue.includes, '"');
                    if (_issue.format === "regex") return "无效字符串：必须满足正则表达式 ".concat(_issue.pattern);
                    var _Nouns__issue_format;
                    return "无效".concat((_Nouns__issue_format = Nouns[_issue.format]) !== null && _Nouns__issue_format !== void 0 ? _Nouns__issue_format : issue.format);
                }
            case "not_multiple_of":
                return "无效数字：必须是 ".concat(issue.divisor, " 的倍数");
            case "unrecognized_keys":
                return "出现未知的键(key): ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.keys, ", "));
            case "invalid_key":
                return "".concat(issue.origin, " 中的键(key)无效");
            case "invalid_union":
                return "无效输入";
            case "invalid_element":
                return "".concat(issue.origin, " 中包含无效值(value)");
            default:
                return "无效输入";
        }
    };
};
function __TURBOPACK__default__export__() {
    return {
        localeError: error()
    };
}
}),
"[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/locales/zh-TW.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/util.js [app-client] (ecmascript)");
;
const error = ()=>{
    const Sizable = {
        string: {
            unit: "字元",
            verb: "擁有"
        },
        file: {
            unit: "位元組",
            verb: "擁有"
        },
        array: {
            unit: "項目",
            verb: "擁有"
        },
        set: {
            unit: "項目",
            verb: "擁有"
        }
    };
    function getSizing(origin) {
        var _Sizable_origin;
        return (_Sizable_origin = Sizable[origin]) !== null && _Sizable_origin !== void 0 ? _Sizable_origin : null;
    }
    const parsedType = (data)=>{
        const t = typeof data;
        switch(t){
            case "number":
                {
                    return Number.isNaN(data) ? "NaN" : "number";
                }
            case "object":
                {
                    if (Array.isArray(data)) {
                        return "array";
                    }
                    if (data === null) {
                        return "null";
                    }
                    if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                        return data.constructor.name;
                    }
                }
        }
        return t;
    };
    const Nouns = {
        regex: "輸入",
        email: "郵件地址",
        url: "URL",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ISO 日期時間",
        date: "ISO 日期",
        time: "ISO 時間",
        duration: "ISO 期間",
        ipv4: "IPv4 位址",
        ipv6: "IPv6 位址",
        cidrv4: "IPv4 範圍",
        cidrv6: "IPv6 範圍",
        base64: "base64 編碼字串",
        base64url: "base64url 編碼字串",
        json_string: "JSON 字串",
        e164: "E.164 數值",
        jwt: "JWT",
        template_literal: "輸入"
    };
    return (issue)=>{
        switch(issue.code){
            case "invalid_type":
                return "無效的輸入值：預期為 ".concat(issue.expected, "，但收到 ").concat(parsedType(issue.input));
            case "invalid_value":
                if (issue.values.length === 1) return "無效的輸入值：預期為 ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringifyPrimitive"](issue.values[0]));
                return "無效的選項：預期為以下其中之一 ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.values, "|"));
            case "too_big":
                {
                    const adj = issue.inclusive ? "<=" : "<";
                    const sizing = getSizing(issue.origin);
                    var _issue_origin, _sizing_unit;
                    if (sizing) return "數值過大：預期 ".concat((_issue_origin = issue.origin) !== null && _issue_origin !== void 0 ? _issue_origin : "值", " 應為 ").concat(adj).concat(issue.maximum.toString(), " ").concat((_sizing_unit = sizing.unit) !== null && _sizing_unit !== void 0 ? _sizing_unit : "個元素");
                    var _issue_origin1;
                    return "數值過大：預期 ".concat((_issue_origin1 = issue.origin) !== null && _issue_origin1 !== void 0 ? _issue_origin1 : "值", " 應為 ").concat(adj).concat(issue.maximum.toString());
                }
            case "too_small":
                {
                    const adj = issue.inclusive ? ">=" : ">";
                    const sizing = getSizing(issue.origin);
                    if (sizing) {
                        return "數值過小：預期 ".concat(issue.origin, " 應為 ").concat(adj).concat(issue.minimum.toString(), " ").concat(sizing.unit);
                    }
                    return "數值過小：預期 ".concat(issue.origin, " 應為 ").concat(adj).concat(issue.minimum.toString());
                }
            case "invalid_format":
                {
                    const _issue = issue;
                    if (_issue.format === "starts_with") {
                        return '無效的字串：必須以 "'.concat(_issue.prefix, '" 開頭');
                    }
                    if (_issue.format === "ends_with") return '無效的字串：必須以 "'.concat(_issue.suffix, '" 結尾');
                    if (_issue.format === "includes") return '無效的字串：必須包含 "'.concat(_issue.includes, '"');
                    if (_issue.format === "regex") return "無效的字串：必須符合格式 ".concat(_issue.pattern);
                    var _Nouns__issue_format;
                    return "無效的 ".concat((_Nouns__issue_format = Nouns[_issue.format]) !== null && _Nouns__issue_format !== void 0 ? _Nouns__issue_format : issue.format);
                }
            case "not_multiple_of":
                return "無效的數字：必須為 ".concat(issue.divisor, " 的倍數");
            case "unrecognized_keys":
                return "無法識別的鍵值".concat(issue.keys.length > 1 ? "們" : "", "：").concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.keys, "、"));
            case "invalid_key":
                return "".concat(issue.origin, " 中有無效的鍵值");
            case "invalid_union":
                return "無效的輸入值";
            case "invalid_element":
                return "".concat(issue.origin, " 中有無效的值");
            default:
                return "無效的輸入值";
        }
    };
};
function __TURBOPACK__default__export__() {
    return {
        localeError: error()
    };
}
}),
"[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/locales/yo.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/util.js [app-client] (ecmascript)");
;
const error = ()=>{
    const Sizable = {
        string: {
            unit: "àmi",
            verb: "ní"
        },
        file: {
            unit: "bytes",
            verb: "ní"
        },
        array: {
            unit: "nkan",
            verb: "ní"
        },
        set: {
            unit: "nkan",
            verb: "ní"
        }
    };
    function getSizing(origin) {
        var _Sizable_origin;
        return (_Sizable_origin = Sizable[origin]) !== null && _Sizable_origin !== void 0 ? _Sizable_origin : null;
    }
    const parsedType = (data)=>{
        const t = typeof data;
        switch(t){
            case "number":
                {
                    return Number.isNaN(data) ? "NaN" : "nọ́mbà";
                }
            case "object":
                {
                    if (Array.isArray(data)) {
                        return "akopọ";
                    }
                    if (data === null) {
                        return "null";
                    }
                    if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                        return data.constructor.name;
                    }
                }
        }
        return t;
    };
    const Nouns = {
        regex: "ẹ̀rọ ìbáwọlé",
        email: "àdírẹ́sì ìmẹ́lì",
        url: "URL",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "àkókò ISO",
        date: "ọjọ́ ISO",
        time: "àkókò ISO",
        duration: "àkókò tó pé ISO",
        ipv4: "àdírẹ́sì IPv4",
        ipv6: "àdírẹ́sì IPv6",
        cidrv4: "àgbègbè IPv4",
        cidrv6: "àgbègbè IPv6",
        base64: "ọ̀rọ̀ tí a kọ́ ní base64",
        base64url: "ọ̀rọ̀ base64url",
        json_string: "ọ̀rọ̀ JSON",
        e164: "nọ́mbà E.164",
        jwt: "JWT",
        template_literal: "ẹ̀rọ ìbáwọlé"
    };
    return (issue)=>{
        switch(issue.code){
            case "invalid_type":
                return "Ìbáwọlé aṣìṣe: a ní láti fi ".concat(issue.expected, ", àmọ̀ a rí ").concat(parsedType(issue.input));
            case "invalid_value":
                if (issue.values.length === 1) return "Ìbáwọlé aṣìṣe: a ní láti fi ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringifyPrimitive"](issue.values[0]));
                return "Àṣàyàn aṣìṣe: yan ọ̀kan lára ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.values, "|"));
            case "too_big":
                {
                    const adj = issue.inclusive ? "<=" : "<";
                    const sizing = getSizing(issue.origin);
                    var _issue_origin;
                    if (sizing) return "Tó pọ̀ jù: a ní láti jẹ́ pé ".concat((_issue_origin = issue.origin) !== null && _issue_origin !== void 0 ? _issue_origin : "iye", " ").concat(sizing.verb, " ").concat(adj).concat(issue.maximum, " ").concat(sizing.unit);
                    return "Tó pọ̀ jù: a ní láti jẹ́ ".concat(adj).concat(issue.maximum);
                }
            case "too_small":
                {
                    const adj = issue.inclusive ? ">=" : ">";
                    const sizing = getSizing(issue.origin);
                    if (sizing) return "Kéré ju: a ní láti jẹ́ pé ".concat(issue.origin, " ").concat(sizing.verb, " ").concat(adj).concat(issue.minimum, " ").concat(sizing.unit);
                    return "Kéré ju: a ní láti jẹ́ ".concat(adj).concat(issue.minimum);
                }
            case "invalid_format":
                {
                    const _issue = issue;
                    if (_issue.format === "starts_with") return 'Ọ̀rọ̀ aṣìṣe: gbọ́dọ̀ bẹ̀rẹ̀ pẹ̀lú "'.concat(_issue.prefix, '"');
                    if (_issue.format === "ends_with") return 'Ọ̀rọ̀ aṣìṣe: gbọ́dọ̀ parí pẹ̀lú "'.concat(_issue.suffix, '"');
                    if (_issue.format === "includes") return 'Ọ̀rọ̀ aṣìṣe: gbọ́dọ̀ ní "'.concat(_issue.includes, '"');
                    if (_issue.format === "regex") return "Ọ̀rọ̀ aṣìṣe: gbọ́dọ̀ bá àpẹẹrẹ mu ".concat(_issue.pattern);
                    var _Nouns__issue_format;
                    return "Aṣìṣe: ".concat((_Nouns__issue_format = Nouns[_issue.format]) !== null && _Nouns__issue_format !== void 0 ? _Nouns__issue_format : issue.format);
                }
            case "not_multiple_of":
                return "Nọ́mbà aṣìṣe: gbọ́dọ̀ jẹ́ èyà pípín ti ".concat(issue.divisor);
            case "unrecognized_keys":
                return "Bọtìnì àìmọ̀: ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.keys, ", "));
            case "invalid_key":
                return "Bọtìnì aṣìṣe nínú ".concat(issue.origin);
            case "invalid_union":
                return "Ìbáwọlé aṣìṣe";
            case "invalid_element":
                return "Iye aṣìṣe nínú ".concat(issue.origin);
            default:
                return "Ìbáwọlé aṣìṣe";
        }
    };
};
function __TURBOPACK__default__export__() {
    return {
        localeError: error()
    };
}
}),
"[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/locales/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ar",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$locales$2f$ar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "az",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$locales$2f$az$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "be",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$locales$2f$be$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "ca",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$locales$2f$ca$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "cs",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$locales$2f$cs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "da",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$locales$2f$da$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "de",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$locales$2f$de$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "en",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$locales$2f$en$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "eo",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$locales$2f$eo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "es",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$locales$2f$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "fa",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$locales$2f$fa$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "fi",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$locales$2f$fi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "fr",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$locales$2f$fr$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "frCA",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$locales$2f$fr$2d$CA$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "he",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$locales$2f$he$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "hu",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$locales$2f$hu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "id",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$locales$2f$id$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "is",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$locales$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "it",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$locales$2f$it$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "ja",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$locales$2f$ja$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "kh",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$locales$2f$kh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "ko",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$locales$2f$ko$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "mk",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$locales$2f$mk$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "ms",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$locales$2f$ms$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "nl",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$locales$2f$nl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "no",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$locales$2f$no$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "ota",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$locales$2f$ota$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "pl",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$locales$2f$pl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "ps",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$locales$2f$ps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "pt",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$locales$2f$pt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "ru",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$locales$2f$ru$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "sl",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$locales$2f$sl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "sv",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$locales$2f$sv$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "ta",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$locales$2f$ta$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "th",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$locales$2f$th$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "tr",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$locales$2f$tr$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "ua",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$locales$2f$ua$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "ur",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$locales$2f$ur$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "vi",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$locales$2f$vi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "yo",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$locales$2f$yo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "zhCN",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$locales$2f$zh$2d$CN$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "zhTW",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$locales$2f$zh$2d$TW$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$locales$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/locales/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$locales$2f$ar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/locales/ar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$locales$2f$az$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/locales/az.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$locales$2f$be$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/locales/be.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$locales$2f$ca$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/locales/ca.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$locales$2f$cs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/locales/cs.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$locales$2f$da$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/locales/da.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$locales$2f$de$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/locales/de.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$locales$2f$en$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/locales/en.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$locales$2f$eo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/locales/eo.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$locales$2f$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/locales/es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$locales$2f$fa$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/locales/fa.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$locales$2f$fi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/locales/fi.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$locales$2f$fr$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/locales/fr.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$locales$2f$fr$2d$CA$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/locales/fr-CA.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$locales$2f$he$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/locales/he.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$locales$2f$hu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/locales/hu.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$locales$2f$id$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/locales/id.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$locales$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/locales/is.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$locales$2f$it$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/locales/it.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$locales$2f$ja$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/locales/ja.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$locales$2f$kh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/locales/kh.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$locales$2f$ko$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/locales/ko.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$locales$2f$mk$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/locales/mk.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$locales$2f$ms$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/locales/ms.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$locales$2f$nl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/locales/nl.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$locales$2f$no$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/locales/no.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$locales$2f$ota$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/locales/ota.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$locales$2f$ps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/locales/ps.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$locales$2f$pl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/locales/pl.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$locales$2f$pt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/locales/pt.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$locales$2f$ru$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/locales/ru.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$locales$2f$sl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/locales/sl.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$locales$2f$sv$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/locales/sv.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$locales$2f$ta$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/locales/ta.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$locales$2f$th$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/locales/th.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$locales$2f$tr$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/locales/tr.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$locales$2f$ua$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/locales/ua.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$locales$2f$ur$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/locales/ur.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$locales$2f$vi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/locales/vi.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$locales$2f$zh$2d$CN$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/locales/zh-CN.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$locales$2f$zh$2d$TW$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/locales/zh-TW.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$locales$2f$yo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/locales/yo.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/json-schema.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$regexes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/regexes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$locales$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/locales/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$json$2d$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/json-schema.js [app-client] (ecmascript)");
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
}),
"[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/checks.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// import { $ZodType } from "./schemas.js";
__turbopack_context__.s([
    "$ZodCheck",
    ()=>$ZodCheck,
    "$ZodCheckBigIntFormat",
    ()=>$ZodCheckBigIntFormat,
    "$ZodCheckEndsWith",
    ()=>$ZodCheckEndsWith,
    "$ZodCheckGreaterThan",
    ()=>$ZodCheckGreaterThan,
    "$ZodCheckIncludes",
    ()=>$ZodCheckIncludes,
    "$ZodCheckLengthEquals",
    ()=>$ZodCheckLengthEquals,
    "$ZodCheckLessThan",
    ()=>$ZodCheckLessThan,
    "$ZodCheckLowerCase",
    ()=>$ZodCheckLowerCase,
    "$ZodCheckMaxLength",
    ()=>$ZodCheckMaxLength,
    "$ZodCheckMaxSize",
    ()=>$ZodCheckMaxSize,
    "$ZodCheckMimeType",
    ()=>$ZodCheckMimeType,
    "$ZodCheckMinLength",
    ()=>$ZodCheckMinLength,
    "$ZodCheckMinSize",
    ()=>$ZodCheckMinSize,
    "$ZodCheckMultipleOf",
    ()=>$ZodCheckMultipleOf,
    "$ZodCheckNumberFormat",
    ()=>$ZodCheckNumberFormat,
    "$ZodCheckOverwrite",
    ()=>$ZodCheckOverwrite,
    "$ZodCheckProperty",
    ()=>$ZodCheckProperty,
    "$ZodCheckRegex",
    ()=>$ZodCheckRegex,
    "$ZodCheckSizeEquals",
    ()=>$ZodCheckSizeEquals,
    "$ZodCheckStartsWith",
    ()=>$ZodCheckStartsWith,
    "$ZodCheckStringFormat",
    ()=>$ZodCheckStringFormat,
    "$ZodCheckUpperCase",
    ()=>$ZodCheckUpperCase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$regexes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/regexes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/util.js [app-client] (ecmascript)");
;
;
;
const $ZodCheck = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodCheck", (inst, def)=>{
    var _a;
    var _inst__zod;
    (_inst__zod = inst._zod) !== null && _inst__zod !== void 0 ? _inst__zod : inst._zod = {};
    inst._zod.def = def;
    var _onattach;
    (_onattach = (_a = inst._zod).onattach) !== null && _onattach !== void 0 ? _onattach : _a.onattach = [];
});
const numericOriginMap = {
    number: "number",
    bigint: "bigint",
    object: "date"
};
const $ZodCheckLessThan = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodCheckLessThan", (inst, def)=>{
    $ZodCheck.init(inst, def);
    const origin = numericOriginMap[typeof def.value];
    inst._zod.onattach.push((inst)=>{
        const bag = inst._zod.bag;
        var _ref;
        const curr = (_ref = def.inclusive ? bag.maximum : bag.exclusiveMaximum) !== null && _ref !== void 0 ? _ref : Number.POSITIVE_INFINITY;
        if (def.value < curr) {
            if (def.inclusive) bag.maximum = def.value;
            else bag.exclusiveMaximum = def.value;
        }
    });
    inst._zod.check = (payload)=>{
        if (def.inclusive ? payload.value <= def.value : payload.value < def.value) {
            return;
        }
        payload.issues.push({
            origin,
            code: "too_big",
            maximum: def.value,
            input: payload.value,
            inclusive: def.inclusive,
            inst,
            continue: !def.abort
        });
    };
});
const $ZodCheckGreaterThan = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodCheckGreaterThan", (inst, def)=>{
    $ZodCheck.init(inst, def);
    const origin = numericOriginMap[typeof def.value];
    inst._zod.onattach.push((inst)=>{
        const bag = inst._zod.bag;
        var _ref;
        const curr = (_ref = def.inclusive ? bag.minimum : bag.exclusiveMinimum) !== null && _ref !== void 0 ? _ref : Number.NEGATIVE_INFINITY;
        if (def.value > curr) {
            if (def.inclusive) bag.minimum = def.value;
            else bag.exclusiveMinimum = def.value;
        }
    });
    inst._zod.check = (payload)=>{
        if (def.inclusive ? payload.value >= def.value : payload.value > def.value) {
            return;
        }
        payload.issues.push({
            origin,
            code: "too_small",
            minimum: def.value,
            input: payload.value,
            inclusive: def.inclusive,
            inst,
            continue: !def.abort
        });
    };
});
const $ZodCheckMultipleOf = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodCheckMultipleOf", (inst, def)=>{
    $ZodCheck.init(inst, def);
    inst._zod.onattach.push((inst)=>{
        var _a;
        var _multipleOf;
        (_multipleOf = (_a = inst._zod.bag).multipleOf) !== null && _multipleOf !== void 0 ? _multipleOf : _a.multipleOf = def.value;
    });
    inst._zod.check = (payload)=>{
        if (typeof payload.value !== typeof def.value) throw new Error("Cannot mix number and bigint in multiple_of check.");
        const isMultiple = typeof payload.value === "bigint" ? payload.value % def.value === BigInt(0) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["floatSafeRemainder"](payload.value, def.value) === 0;
        if (isMultiple) return;
        payload.issues.push({
            origin: typeof payload.value,
            code: "not_multiple_of",
            divisor: def.value,
            input: payload.value,
            inst,
            continue: !def.abort
        });
    };
});
const $ZodCheckNumberFormat = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodCheckNumberFormat", (inst, def)=>{
    var _def_format;
    $ZodCheck.init(inst, def); // no format checks
    def.format = def.format || "float64";
    const isInt = (_def_format = def.format) === null || _def_format === void 0 ? void 0 : _def_format.includes("int");
    const origin = isInt ? "int" : "number";
    const [minimum, maximum] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NUMBER_FORMAT_RANGES"][def.format];
    inst._zod.onattach.push((inst)=>{
        const bag = inst._zod.bag;
        bag.format = def.format;
        bag.minimum = minimum;
        bag.maximum = maximum;
        if (isInt) bag.pattern = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$regexes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["integer"];
    });
    inst._zod.check = (payload)=>{
        const input = payload.value;
        if (isInt) {
            if (!Number.isInteger(input)) {
                // invalid_format issue
                // payload.issues.push({
                //   expected: def.format,
                //   format: def.format,
                //   code: "invalid_format",
                //   input,
                //   inst,
                // });
                // invalid_type issue
                payload.issues.push({
                    expected: origin,
                    format: def.format,
                    code: "invalid_type",
                    continue: false,
                    input,
                    inst
                });
                return;
            // not_multiple_of issue
            // payload.issues.push({
            //   code: "not_multiple_of",
            //   origin: "number",
            //   input,
            //   inst,
            //   divisor: 1,
            // });
            }
            if (!Number.isSafeInteger(input)) {
                if (input > 0) {
                    // too_big
                    payload.issues.push({
                        input,
                        code: "too_big",
                        maximum: Number.MAX_SAFE_INTEGER,
                        note: "Integers must be within the safe integer range.",
                        inst,
                        origin,
                        continue: !def.abort
                    });
                } else {
                    // too_small
                    payload.issues.push({
                        input,
                        code: "too_small",
                        minimum: Number.MIN_SAFE_INTEGER,
                        note: "Integers must be within the safe integer range.",
                        inst,
                        origin,
                        continue: !def.abort
                    });
                }
                return;
            }
        }
        if (input < minimum) {
            payload.issues.push({
                origin: "number",
                input,
                code: "too_small",
                minimum,
                inclusive: true,
                inst,
                continue: !def.abort
            });
        }
        if (input > maximum) {
            payload.issues.push({
                origin: "number",
                input,
                code: "too_big",
                maximum,
                inst
            });
        }
    };
});
const $ZodCheckBigIntFormat = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodCheckBigIntFormat", (inst, def)=>{
    $ZodCheck.init(inst, def); // no format checks
    const [minimum, maximum] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BIGINT_FORMAT_RANGES"][def.format];
    inst._zod.onattach.push((inst)=>{
        const bag = inst._zod.bag;
        bag.format = def.format;
        bag.minimum = minimum;
        bag.maximum = maximum;
    });
    inst._zod.check = (payload)=>{
        const input = payload.value;
        if (input < minimum) {
            payload.issues.push({
                origin: "bigint",
                input,
                code: "too_small",
                minimum: minimum,
                inclusive: true,
                inst,
                continue: !def.abort
            });
        }
        if (input > maximum) {
            payload.issues.push({
                origin: "bigint",
                input,
                code: "too_big",
                maximum,
                inst
            });
        }
    };
});
const $ZodCheckMaxSize = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodCheckMaxSize", (inst, def)=>{
    var _a;
    $ZodCheck.init(inst, def);
    var _when;
    (_when = (_a = inst._zod.def).when) !== null && _when !== void 0 ? _when : _a.when = (payload)=>{
        const val = payload.value;
        return !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nullish"](val) && val.size !== undefined;
    };
    inst._zod.onattach.push((inst)=>{
        var _inst__zod_bag_maximum;
        const curr = (_inst__zod_bag_maximum = inst._zod.bag.maximum) !== null && _inst__zod_bag_maximum !== void 0 ? _inst__zod_bag_maximum : Number.POSITIVE_INFINITY;
        if (def.maximum < curr) inst._zod.bag.maximum = def.maximum;
    });
    inst._zod.check = (payload)=>{
        const input = payload.value;
        const size = input.size;
        if (size <= def.maximum) return;
        payload.issues.push({
            origin: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSizableOrigin"](input),
            code: "too_big",
            maximum: def.maximum,
            input,
            inst,
            continue: !def.abort
        });
    };
});
const $ZodCheckMinSize = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodCheckMinSize", (inst, def)=>{
    var _a;
    $ZodCheck.init(inst, def);
    var _when;
    (_when = (_a = inst._zod.def).when) !== null && _when !== void 0 ? _when : _a.when = (payload)=>{
        const val = payload.value;
        return !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nullish"](val) && val.size !== undefined;
    };
    inst._zod.onattach.push((inst)=>{
        var _inst__zod_bag_minimum;
        const curr = (_inst__zod_bag_minimum = inst._zod.bag.minimum) !== null && _inst__zod_bag_minimum !== void 0 ? _inst__zod_bag_minimum : Number.NEGATIVE_INFINITY;
        if (def.minimum > curr) inst._zod.bag.minimum = def.minimum;
    });
    inst._zod.check = (payload)=>{
        const input = payload.value;
        const size = input.size;
        if (size >= def.minimum) return;
        payload.issues.push({
            origin: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSizableOrigin"](input),
            code: "too_small",
            minimum: def.minimum,
            input,
            inst,
            continue: !def.abort
        });
    };
});
const $ZodCheckSizeEquals = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodCheckSizeEquals", (inst, def)=>{
    var _a;
    $ZodCheck.init(inst, def);
    var _when;
    (_when = (_a = inst._zod.def).when) !== null && _when !== void 0 ? _when : _a.when = (payload)=>{
        const val = payload.value;
        return !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nullish"](val) && val.size !== undefined;
    };
    inst._zod.onattach.push((inst)=>{
        const bag = inst._zod.bag;
        bag.minimum = def.size;
        bag.maximum = def.size;
        bag.size = def.size;
    });
    inst._zod.check = (payload)=>{
        const input = payload.value;
        const size = input.size;
        if (size === def.size) return;
        const tooBig = size > def.size;
        payload.issues.push({
            origin: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSizableOrigin"](input),
            ...tooBig ? {
                code: "too_big",
                maximum: def.size
            } : {
                code: "too_small",
                minimum: def.size
            },
            inclusive: true,
            exact: true,
            input: payload.value,
            inst,
            continue: !def.abort
        });
    };
});
const $ZodCheckMaxLength = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodCheckMaxLength", (inst, def)=>{
    var _a;
    $ZodCheck.init(inst, def);
    var _when;
    (_when = (_a = inst._zod.def).when) !== null && _when !== void 0 ? _when : _a.when = (payload)=>{
        const val = payload.value;
        return !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nullish"](val) && val.length !== undefined;
    };
    inst._zod.onattach.push((inst)=>{
        var _inst__zod_bag_maximum;
        const curr = (_inst__zod_bag_maximum = inst._zod.bag.maximum) !== null && _inst__zod_bag_maximum !== void 0 ? _inst__zod_bag_maximum : Number.POSITIVE_INFINITY;
        if (def.maximum < curr) inst._zod.bag.maximum = def.maximum;
    });
    inst._zod.check = (payload)=>{
        const input = payload.value;
        const length = input.length;
        if (length <= def.maximum) return;
        const origin = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLengthableOrigin"](input);
        payload.issues.push({
            origin,
            code: "too_big",
            maximum: def.maximum,
            inclusive: true,
            input,
            inst,
            continue: !def.abort
        });
    };
});
const $ZodCheckMinLength = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodCheckMinLength", (inst, def)=>{
    var _a;
    $ZodCheck.init(inst, def);
    var _when;
    (_when = (_a = inst._zod.def).when) !== null && _when !== void 0 ? _when : _a.when = (payload)=>{
        const val = payload.value;
        return !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nullish"](val) && val.length !== undefined;
    };
    inst._zod.onattach.push((inst)=>{
        var _inst__zod_bag_minimum;
        const curr = (_inst__zod_bag_minimum = inst._zod.bag.minimum) !== null && _inst__zod_bag_minimum !== void 0 ? _inst__zod_bag_minimum : Number.NEGATIVE_INFINITY;
        if (def.minimum > curr) inst._zod.bag.minimum = def.minimum;
    });
    inst._zod.check = (payload)=>{
        const input = payload.value;
        const length = input.length;
        if (length >= def.minimum) return;
        const origin = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLengthableOrigin"](input);
        payload.issues.push({
            origin,
            code: "too_small",
            minimum: def.minimum,
            inclusive: true,
            input,
            inst,
            continue: !def.abort
        });
    };
});
const $ZodCheckLengthEquals = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodCheckLengthEquals", (inst, def)=>{
    var _a;
    $ZodCheck.init(inst, def);
    var _when;
    (_when = (_a = inst._zod.def).when) !== null && _when !== void 0 ? _when : _a.when = (payload)=>{
        const val = payload.value;
        return !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nullish"](val) && val.length !== undefined;
    };
    inst._zod.onattach.push((inst)=>{
        const bag = inst._zod.bag;
        bag.minimum = def.length;
        bag.maximum = def.length;
        bag.length = def.length;
    });
    inst._zod.check = (payload)=>{
        const input = payload.value;
        const length = input.length;
        if (length === def.length) return;
        const origin = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLengthableOrigin"](input);
        const tooBig = length > def.length;
        payload.issues.push({
            origin,
            ...tooBig ? {
                code: "too_big",
                maximum: def.length
            } : {
                code: "too_small",
                minimum: def.length
            },
            inclusive: true,
            exact: true,
            input: payload.value,
            inst,
            continue: !def.abort
        });
    };
});
const $ZodCheckStringFormat = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodCheckStringFormat", (inst, def)=>{
    var _a, _b;
    $ZodCheck.init(inst, def);
    inst._zod.onattach.push((inst)=>{
        const bag = inst._zod.bag;
        bag.format = def.format;
        if (def.pattern) {
            var _bag_patterns;
            (_bag_patterns = bag.patterns) !== null && _bag_patterns !== void 0 ? _bag_patterns : bag.patterns = new Set();
            bag.patterns.add(def.pattern);
        }
    });
    var _check, _check1;
    if (def.pattern) (_check = (_a = inst._zod).check) !== null && _check !== void 0 ? _check : _a.check = (payload)=>{
        def.pattern.lastIndex = 0;
        if (def.pattern.test(payload.value)) return;
        payload.issues.push({
            origin: "string",
            code: "invalid_format",
            format: def.format,
            input: payload.value,
            ...def.pattern ? {
                pattern: def.pattern.toString()
            } : {},
            inst,
            continue: !def.abort
        });
    };
    else (_check1 = (_b = inst._zod).check) !== null && _check1 !== void 0 ? _check1 : _b.check = ()=>{};
});
const $ZodCheckRegex = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodCheckRegex", (inst, def)=>{
    $ZodCheckStringFormat.init(inst, def);
    inst._zod.check = (payload)=>{
        def.pattern.lastIndex = 0;
        if (def.pattern.test(payload.value)) return;
        payload.issues.push({
            origin: "string",
            code: "invalid_format",
            format: "regex",
            input: payload.value,
            pattern: def.pattern.toString(),
            inst,
            continue: !def.abort
        });
    };
});
const $ZodCheckLowerCase = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodCheckLowerCase", (inst, def)=>{
    var _def_pattern;
    (_def_pattern = def.pattern) !== null && _def_pattern !== void 0 ? _def_pattern : def.pattern = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$regexes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lowercase"];
    $ZodCheckStringFormat.init(inst, def);
});
const $ZodCheckUpperCase = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodCheckUpperCase", (inst, def)=>{
    var _def_pattern;
    (_def_pattern = def.pattern) !== null && _def_pattern !== void 0 ? _def_pattern : def.pattern = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$regexes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uppercase"];
    $ZodCheckStringFormat.init(inst, def);
});
const $ZodCheckIncludes = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodCheckIncludes", (inst, def)=>{
    $ZodCheck.init(inst, def);
    const escapedRegex = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["escapeRegex"](def.includes);
    const pattern = new RegExp(typeof def.position === "number" ? "^.{".concat(def.position, "}").concat(escapedRegex) : escapedRegex);
    def.pattern = pattern;
    inst._zod.onattach.push((inst)=>{
        const bag = inst._zod.bag;
        var _bag_patterns;
        (_bag_patterns = bag.patterns) !== null && _bag_patterns !== void 0 ? _bag_patterns : bag.patterns = new Set();
        bag.patterns.add(pattern);
    });
    inst._zod.check = (payload)=>{
        if (payload.value.includes(def.includes, def.position)) return;
        payload.issues.push({
            origin: "string",
            code: "invalid_format",
            format: "includes",
            includes: def.includes,
            input: payload.value,
            inst,
            continue: !def.abort
        });
    };
});
const $ZodCheckStartsWith = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodCheckStartsWith", (inst, def)=>{
    $ZodCheck.init(inst, def);
    const pattern = new RegExp("^".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["escapeRegex"](def.prefix), ".*"));
    var _def_pattern;
    (_def_pattern = def.pattern) !== null && _def_pattern !== void 0 ? _def_pattern : def.pattern = pattern;
    inst._zod.onattach.push((inst)=>{
        const bag = inst._zod.bag;
        var _bag_patterns;
        (_bag_patterns = bag.patterns) !== null && _bag_patterns !== void 0 ? _bag_patterns : bag.patterns = new Set();
        bag.patterns.add(pattern);
    });
    inst._zod.check = (payload)=>{
        if (payload.value.startsWith(def.prefix)) return;
        payload.issues.push({
            origin: "string",
            code: "invalid_format",
            format: "starts_with",
            prefix: def.prefix,
            input: payload.value,
            inst,
            continue: !def.abort
        });
    };
});
const $ZodCheckEndsWith = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodCheckEndsWith", (inst, def)=>{
    $ZodCheck.init(inst, def);
    const pattern = new RegExp(".*".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["escapeRegex"](def.suffix), "$"));
    var _def_pattern;
    (_def_pattern = def.pattern) !== null && _def_pattern !== void 0 ? _def_pattern : def.pattern = pattern;
    inst._zod.onattach.push((inst)=>{
        const bag = inst._zod.bag;
        var _bag_patterns;
        (_bag_patterns = bag.patterns) !== null && _bag_patterns !== void 0 ? _bag_patterns : bag.patterns = new Set();
        bag.patterns.add(pattern);
    });
    inst._zod.check = (payload)=>{
        if (payload.value.endsWith(def.suffix)) return;
        payload.issues.push({
            origin: "string",
            code: "invalid_format",
            format: "ends_with",
            suffix: def.suffix,
            input: payload.value,
            inst,
            continue: !def.abort
        });
    };
});
///////////////////////////////////
/////    $ZodCheckProperty    /////
///////////////////////////////////
function handleCheckPropertyResult(result, payload, property) {
    if (result.issues.length) {
        payload.issues.push(...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prefixIssues"](property, result.issues));
    }
}
const $ZodCheckProperty = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodCheckProperty", (inst, def)=>{
    $ZodCheck.init(inst, def);
    inst._zod.check = (payload)=>{
        const result = def.schema._zod.run({
            value: payload.value[def.property],
            issues: []
        }, {});
        if (result instanceof Promise) {
            return result.then((result)=>handleCheckPropertyResult(result, payload, def.property));
        }
        handleCheckPropertyResult(result, payload, def.property);
        return;
    };
});
const $ZodCheckMimeType = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodCheckMimeType", (inst, def)=>{
    $ZodCheck.init(inst, def);
    const mimeSet = new Set(def.mime);
    inst._zod.onattach.push((inst)=>{
        inst._zod.bag.mime = def.mime;
    });
    inst._zod.check = (payload)=>{
        if (mimeSet.has(payload.value.type)) return;
        payload.issues.push({
            code: "invalid_value",
            values: def.mime,
            input: payload.value.type,
            inst,
            continue: !def.abort
        });
    };
});
const $ZodCheckOverwrite = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodCheckOverwrite", (inst, def)=>{
    $ZodCheck.init(inst, def);
    inst._zod.check = (payload)=>{
        payload.value = def.tx(payload.value);
    };
});
}),
"[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/doc.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Doc",
    ()=>Doc
]);
class Doc {
    indented(fn) {
        this.indent += 1;
        fn(this);
        this.indent -= 1;
    }
    write(arg) {
        if (typeof arg === "function") {
            arg(this, {
                execution: "sync"
            });
            arg(this, {
                execution: "async"
            });
            return;
        }
        const content = arg;
        const lines = content.split("\n").filter((x)=>x);
        const minIndent = Math.min(...lines.map((x)=>x.length - x.trimStart().length));
        const dedented = lines.map((x)=>x.slice(minIndent)).map((x)=>" ".repeat(this.indent * 2) + x);
        for (const line of dedented){
            this.content.push(line);
        }
    }
    compile() {
        var _this, _this1;
        const F = Function;
        const args = (_this = this) === null || _this === void 0 ? void 0 : _this.args;
        var _this_content;
        const content = (_this_content = (_this1 = this) === null || _this1 === void 0 ? void 0 : _this1.content) !== null && _this_content !== void 0 ? _this_content : [
            ""
        ];
        const lines = [
            ...content.map((x)=>"  ".concat(x))
        ];
        // console.log(lines.join("\n"));
        return new F(...args, lines.join("\n"));
    }
    constructor(args = []){
        this.content = [];
        this.indent = 0;
        if (this) this.args = args;
    }
}
}),
"[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/versions.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "version",
    ()=>version
]);
const version = {
    major: 4,
    minor: 0,
    patch: 17
};
}),
"[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/schemas.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "$ZodAny",
    ()=>$ZodAny,
    "$ZodArray",
    ()=>$ZodArray,
    "$ZodBase64",
    ()=>$ZodBase64,
    "$ZodBase64URL",
    ()=>$ZodBase64URL,
    "$ZodBigInt",
    ()=>$ZodBigInt,
    "$ZodBigIntFormat",
    ()=>$ZodBigIntFormat,
    "$ZodBoolean",
    ()=>$ZodBoolean,
    "$ZodCIDRv4",
    ()=>$ZodCIDRv4,
    "$ZodCIDRv6",
    ()=>$ZodCIDRv6,
    "$ZodCUID",
    ()=>$ZodCUID,
    "$ZodCUID2",
    ()=>$ZodCUID2,
    "$ZodCatch",
    ()=>$ZodCatch,
    "$ZodCustom",
    ()=>$ZodCustom,
    "$ZodCustomStringFormat",
    ()=>$ZodCustomStringFormat,
    "$ZodDate",
    ()=>$ZodDate,
    "$ZodDefault",
    ()=>$ZodDefault,
    "$ZodDiscriminatedUnion",
    ()=>$ZodDiscriminatedUnion,
    "$ZodE164",
    ()=>$ZodE164,
    "$ZodEmail",
    ()=>$ZodEmail,
    "$ZodEmoji",
    ()=>$ZodEmoji,
    "$ZodEnum",
    ()=>$ZodEnum,
    "$ZodFile",
    ()=>$ZodFile,
    "$ZodGUID",
    ()=>$ZodGUID,
    "$ZodIPv4",
    ()=>$ZodIPv4,
    "$ZodIPv6",
    ()=>$ZodIPv6,
    "$ZodISODate",
    ()=>$ZodISODate,
    "$ZodISODateTime",
    ()=>$ZodISODateTime,
    "$ZodISODuration",
    ()=>$ZodISODuration,
    "$ZodISOTime",
    ()=>$ZodISOTime,
    "$ZodIntersection",
    ()=>$ZodIntersection,
    "$ZodJWT",
    ()=>$ZodJWT,
    "$ZodKSUID",
    ()=>$ZodKSUID,
    "$ZodLazy",
    ()=>$ZodLazy,
    "$ZodLiteral",
    ()=>$ZodLiteral,
    "$ZodMap",
    ()=>$ZodMap,
    "$ZodNaN",
    ()=>$ZodNaN,
    "$ZodNanoID",
    ()=>$ZodNanoID,
    "$ZodNever",
    ()=>$ZodNever,
    "$ZodNonOptional",
    ()=>$ZodNonOptional,
    "$ZodNull",
    ()=>$ZodNull,
    "$ZodNullable",
    ()=>$ZodNullable,
    "$ZodNumber",
    ()=>$ZodNumber,
    "$ZodNumberFormat",
    ()=>$ZodNumberFormat,
    "$ZodObject",
    ()=>$ZodObject,
    "$ZodOptional",
    ()=>$ZodOptional,
    "$ZodPipe",
    ()=>$ZodPipe,
    "$ZodPrefault",
    ()=>$ZodPrefault,
    "$ZodPromise",
    ()=>$ZodPromise,
    "$ZodReadonly",
    ()=>$ZodReadonly,
    "$ZodRecord",
    ()=>$ZodRecord,
    "$ZodSet",
    ()=>$ZodSet,
    "$ZodString",
    ()=>$ZodString,
    "$ZodStringFormat",
    ()=>$ZodStringFormat,
    "$ZodSuccess",
    ()=>$ZodSuccess,
    "$ZodSymbol",
    ()=>$ZodSymbol,
    "$ZodTemplateLiteral",
    ()=>$ZodTemplateLiteral,
    "$ZodTransform",
    ()=>$ZodTransform,
    "$ZodTuple",
    ()=>$ZodTuple,
    "$ZodType",
    ()=>$ZodType,
    "$ZodULID",
    ()=>$ZodULID,
    "$ZodURL",
    ()=>$ZodURL,
    "$ZodUUID",
    ()=>$ZodUUID,
    "$ZodUndefined",
    ()=>$ZodUndefined,
    "$ZodUnion",
    ()=>$ZodUnion,
    "$ZodUnknown",
    ()=>$ZodUnknown,
    "$ZodVoid",
    ()=>$ZodVoid,
    "$ZodXID",
    ()=>$ZodXID,
    "isValidBase64",
    ()=>isValidBase64,
    "isValidBase64URL",
    ()=>isValidBase64URL,
    "isValidJWT",
    ()=>isValidJWT
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/checks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$doc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/doc.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$parse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/parse.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$regexes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/regexes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$versions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/versions.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
const $ZodType = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodType", (inst, def)=>{
    var _a;
    inst !== null && inst !== void 0 ? inst : inst = {};
    inst._zod.def = def; // set _def property
    inst._zod.bag = inst._zod.bag || {}; // initialize _bag object
    inst._zod.version = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$versions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["version"];
    var _inst__zod_def_checks;
    const checks = [
        ...(_inst__zod_def_checks = inst._zod.def.checks) !== null && _inst__zod_def_checks !== void 0 ? _inst__zod_def_checks : []
    ];
    // if inst is itself a checks.$ZodCheck, run it as a check
    if (inst._zod.traits.has("$ZodCheck")) {
        checks.unshift(inst);
    }
    //
    for (const ch of checks){
        for (const fn of ch._zod.onattach){
            fn(inst);
        }
    }
    if (checks.length === 0) {
        var _inst__zod_deferred;
        var // deferred initializer
        // inst._zod.parse is not yet defined
        _deferred;
        (_deferred = (_a = inst._zod).deferred) !== null && _deferred !== void 0 ? _deferred : _a.deferred = [];
        (_inst__zod_deferred = inst._zod.deferred) === null || _inst__zod_deferred === void 0 ? void 0 : _inst__zod_deferred.push(()=>{
            inst._zod.run = inst._zod.parse;
        });
    } else {
        const runChecks = (payload, checks, ctx)=>{
            let isAborted = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["aborted"](payload);
            let asyncResult;
            for (const ch of checks){
                if (ch._zod.def.when) {
                    const shouldRun = ch._zod.def.when(payload);
                    if (!shouldRun) continue;
                } else if (isAborted) {
                    continue;
                }
                const currLen = payload.issues.length;
                const _ = ch._zod.check(payload);
                if (_ instanceof Promise && (ctx === null || ctx === void 0 ? void 0 : ctx.async) === false) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodAsyncError"]();
                }
                if (asyncResult || _ instanceof Promise) {
                    asyncResult = (asyncResult !== null && asyncResult !== void 0 ? asyncResult : Promise.resolve()).then(async ()=>{
                        await _;
                        const nextLen = payload.issues.length;
                        if (nextLen === currLen) return;
                        if (!isAborted) isAborted = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["aborted"](payload, currLen);
                    });
                } else {
                    const nextLen = payload.issues.length;
                    if (nextLen === currLen) continue;
                    if (!isAborted) isAborted = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["aborted"](payload, currLen);
                }
            }
            if (asyncResult) {
                return asyncResult.then(()=>{
                    return payload;
                });
            }
            return payload;
        };
        inst._zod.run = (payload, ctx)=>{
            const result = inst._zod.parse(payload, ctx);
            if (result instanceof Promise) {
                if (ctx.async === false) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodAsyncError"]();
                return result.then((result)=>runChecks(result, checks, ctx));
            }
            return runChecks(result, checks, ctx);
        };
    }
    inst["~standard"] = {
        validate: (value)=>{
            try {
                var _r_error;
                const r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$parse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeParse"])(inst, value);
                return r.success ? {
                    value: r.data
                } : {
                    issues: (_r_error = r.error) === null || _r_error === void 0 ? void 0 : _r_error.issues
                };
            } catch (_) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$parse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeParseAsync"])(inst, value).then((r)=>{
                    var _r_error;
                    return r.success ? {
                        value: r.data
                    } : {
                        issues: (_r_error = r.error) === null || _r_error === void 0 ? void 0 : _r_error.issues
                    };
                });
            }
        },
        vendor: "zod",
        version: 1
    };
});
;
const $ZodString = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodString", (inst, def)=>{
    var _inst__zod_bag;
    $ZodType.init(inst, def);
    var _inst__zod_bag_patterns, _pop;
    inst._zod.pattern = (_pop = [
        ...(_inst__zod_bag_patterns = inst === null || inst === void 0 ? void 0 : (_inst__zod_bag = inst._zod.bag) === null || _inst__zod_bag === void 0 ? void 0 : _inst__zod_bag.patterns) !== null && _inst__zod_bag_patterns !== void 0 ? _inst__zod_bag_patterns : []
    ].pop()) !== null && _pop !== void 0 ? _pop : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$regexes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"](inst._zod.bag);
    inst._zod.parse = (payload, _)=>{
        if (def.coerce) try {
            payload.value = String(payload.value);
        } catch (_) {}
        if (typeof payload.value === "string") return payload;
        payload.issues.push({
            expected: "string",
            code: "invalid_type",
            input: payload.value,
            inst
        });
        return payload;
    };
});
const $ZodStringFormat = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodStringFormat", (inst, def)=>{
    // check initialization must come first
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodCheckStringFormat"].init(inst, def);
    $ZodString.init(inst, def);
});
const $ZodGUID = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodGUID", (inst, def)=>{
    var _def_pattern;
    (_def_pattern = def.pattern) !== null && _def_pattern !== void 0 ? _def_pattern : def.pattern = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$regexes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["guid"];
    $ZodStringFormat.init(inst, def);
});
const $ZodUUID = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodUUID", (inst, def)=>{
    var _def_pattern;
    if (def.version) {
        const versionMap = {
            v1: 1,
            v2: 2,
            v3: 3,
            v4: 4,
            v5: 5,
            v6: 6,
            v7: 7,
            v8: 8
        };
        const v = versionMap[def.version];
        if (v === undefined) throw new Error('Invalid UUID version: "'.concat(def.version, '"'));
        var _def_pattern1;
        (_def_pattern1 = def.pattern) !== null && _def_pattern1 !== void 0 ? _def_pattern1 : def.pattern = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$regexes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uuid"](v);
    } else (_def_pattern = def.pattern) !== null && _def_pattern !== void 0 ? _def_pattern : def.pattern = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$regexes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uuid"]();
    $ZodStringFormat.init(inst, def);
});
const $ZodEmail = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodEmail", (inst, def)=>{
    var _def_pattern;
    (_def_pattern = def.pattern) !== null && _def_pattern !== void 0 ? _def_pattern : def.pattern = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$regexes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["email"];
    $ZodStringFormat.init(inst, def);
});
const $ZodURL = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodURL", (inst, def)=>{
    $ZodStringFormat.init(inst, def);
    inst._zod.check = (payload)=>{
        try {
            // Trim whitespace from input
            const trimmed = payload.value.trim();
            // @ts-ignore
            const url = new URL(trimmed);
            if (def.hostname) {
                def.hostname.lastIndex = 0;
                if (!def.hostname.test(url.hostname)) {
                    payload.issues.push({
                        code: "invalid_format",
                        format: "url",
                        note: "Invalid hostname",
                        pattern: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$regexes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hostname"].source,
                        input: payload.value,
                        inst,
                        continue: !def.abort
                    });
                }
            }
            if (def.protocol) {
                def.protocol.lastIndex = 0;
                if (!def.protocol.test(url.protocol.endsWith(":") ? url.protocol.slice(0, -1) : url.protocol)) {
                    payload.issues.push({
                        code: "invalid_format",
                        format: "url",
                        note: "Invalid protocol",
                        pattern: def.protocol.source,
                        input: payload.value,
                        inst,
                        continue: !def.abort
                    });
                }
            }
            // Set the output value based on normalize flag
            if (def.normalize) {
                // Use normalized URL
                payload.value = url.href;
            } else {
                // Preserve the original input (trimmed)
                payload.value = trimmed;
            }
            return;
        } catch (_) {
            payload.issues.push({
                code: "invalid_format",
                format: "url",
                input: payload.value,
                inst,
                continue: !def.abort
            });
        }
    };
});
const $ZodEmoji = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodEmoji", (inst, def)=>{
    var _def_pattern;
    (_def_pattern = def.pattern) !== null && _def_pattern !== void 0 ? _def_pattern : def.pattern = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$regexes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["emoji"]();
    $ZodStringFormat.init(inst, def);
});
const $ZodNanoID = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodNanoID", (inst, def)=>{
    var _def_pattern;
    (_def_pattern = def.pattern) !== null && _def_pattern !== void 0 ? _def_pattern : def.pattern = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$regexes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nanoid"];
    $ZodStringFormat.init(inst, def);
});
const $ZodCUID = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodCUID", (inst, def)=>{
    var _def_pattern;
    (_def_pattern = def.pattern) !== null && _def_pattern !== void 0 ? _def_pattern : def.pattern = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$regexes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cuid"];
    $ZodStringFormat.init(inst, def);
});
const $ZodCUID2 = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodCUID2", (inst, def)=>{
    var _def_pattern;
    (_def_pattern = def.pattern) !== null && _def_pattern !== void 0 ? _def_pattern : def.pattern = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$regexes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cuid2"];
    $ZodStringFormat.init(inst, def);
});
const $ZodULID = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodULID", (inst, def)=>{
    var _def_pattern;
    (_def_pattern = def.pattern) !== null && _def_pattern !== void 0 ? _def_pattern : def.pattern = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$regexes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ulid"];
    $ZodStringFormat.init(inst, def);
});
const $ZodXID = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodXID", (inst, def)=>{
    var _def_pattern;
    (_def_pattern = def.pattern) !== null && _def_pattern !== void 0 ? _def_pattern : def.pattern = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$regexes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["xid"];
    $ZodStringFormat.init(inst, def);
});
const $ZodKSUID = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodKSUID", (inst, def)=>{
    var _def_pattern;
    (_def_pattern = def.pattern) !== null && _def_pattern !== void 0 ? _def_pattern : def.pattern = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$regexes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ksuid"];
    $ZodStringFormat.init(inst, def);
});
const $ZodISODateTime = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodISODateTime", (inst, def)=>{
    var _def_pattern;
    (_def_pattern = def.pattern) !== null && _def_pattern !== void 0 ? _def_pattern : def.pattern = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$regexes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["datetime"](def);
    $ZodStringFormat.init(inst, def);
});
const $ZodISODate = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodISODate", (inst, def)=>{
    var _def_pattern;
    (_def_pattern = def.pattern) !== null && _def_pattern !== void 0 ? _def_pattern : def.pattern = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$regexes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["date"];
    $ZodStringFormat.init(inst, def);
});
const $ZodISOTime = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodISOTime", (inst, def)=>{
    var _def_pattern;
    (_def_pattern = def.pattern) !== null && _def_pattern !== void 0 ? _def_pattern : def.pattern = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$regexes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["time"](def);
    $ZodStringFormat.init(inst, def);
});
const $ZodISODuration = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodISODuration", (inst, def)=>{
    var _def_pattern;
    (_def_pattern = def.pattern) !== null && _def_pattern !== void 0 ? _def_pattern : def.pattern = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$regexes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["duration"];
    $ZodStringFormat.init(inst, def);
});
const $ZodIPv4 = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodIPv4", (inst, def)=>{
    var _def_pattern;
    (_def_pattern = def.pattern) !== null && _def_pattern !== void 0 ? _def_pattern : def.pattern = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$regexes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ipv4"];
    $ZodStringFormat.init(inst, def);
    inst._zod.onattach.push((inst)=>{
        const bag = inst._zod.bag;
        bag.format = "ipv4";
    });
});
const $ZodIPv6 = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodIPv6", (inst, def)=>{
    var _def_pattern;
    (_def_pattern = def.pattern) !== null && _def_pattern !== void 0 ? _def_pattern : def.pattern = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$regexes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ipv6"];
    $ZodStringFormat.init(inst, def);
    inst._zod.onattach.push((inst)=>{
        const bag = inst._zod.bag;
        bag.format = "ipv6";
    });
    inst._zod.check = (payload)=>{
        try {
            // @ts-ignore
            new URL("http://[".concat(payload.value, "]"));
        // return;
        } catch (e) {
            payload.issues.push({
                code: "invalid_format",
                format: "ipv6",
                input: payload.value,
                inst,
                continue: !def.abort
            });
        }
    };
});
const $ZodCIDRv4 = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodCIDRv4", (inst, def)=>{
    var _def_pattern;
    (_def_pattern = def.pattern) !== null && _def_pattern !== void 0 ? _def_pattern : def.pattern = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$regexes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cidrv4"];
    $ZodStringFormat.init(inst, def);
});
const $ZodCIDRv6 = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodCIDRv6", (inst, def)=>{
    var _def_pattern;
    (_def_pattern = def.pattern) !== null && _def_pattern !== void 0 ? _def_pattern : def.pattern = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$regexes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cidrv6"]; // not used for validation
    $ZodStringFormat.init(inst, def);
    inst._zod.check = (payload)=>{
        const [address, prefix] = payload.value.split("/");
        try {
            if (!prefix) throw new Error();
            const prefixNum = Number(prefix);
            if ("".concat(prefixNum) !== prefix) throw new Error();
            if (prefixNum < 0 || prefixNum > 128) throw new Error();
            // @ts-ignore
            new URL("http://[".concat(address, "]"));
        } catch (e) {
            payload.issues.push({
                code: "invalid_format",
                format: "cidrv6",
                input: payload.value,
                inst,
                continue: !def.abort
            });
        }
    };
});
function isValidBase64(data) {
    if (data === "") return true;
    if (data.length % 4 !== 0) return false;
    try {
        // @ts-ignore
        atob(data);
        return true;
    } catch (e) {
        return false;
    }
}
const $ZodBase64 = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodBase64", (inst, def)=>{
    var _def_pattern;
    (_def_pattern = def.pattern) !== null && _def_pattern !== void 0 ? _def_pattern : def.pattern = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$regexes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["base64"];
    $ZodStringFormat.init(inst, def);
    inst._zod.onattach.push((inst)=>{
        inst._zod.bag.contentEncoding = "base64";
    });
    inst._zod.check = (payload)=>{
        if (isValidBase64(payload.value)) return;
        payload.issues.push({
            code: "invalid_format",
            format: "base64",
            input: payload.value,
            inst,
            continue: !def.abort
        });
    };
});
function isValidBase64URL(data) {
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$regexes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["base64url"].test(data)) return false;
    const base64 = data.replace(/[-_]/g, (c)=>c === "-" ? "+" : "/");
    const padded = base64.padEnd(Math.ceil(base64.length / 4) * 4, "=");
    return isValidBase64(padded);
}
const $ZodBase64URL = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodBase64URL", (inst, def)=>{
    var _def_pattern;
    (_def_pattern = def.pattern) !== null && _def_pattern !== void 0 ? _def_pattern : def.pattern = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$regexes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["base64url"];
    $ZodStringFormat.init(inst, def);
    inst._zod.onattach.push((inst)=>{
        inst._zod.bag.contentEncoding = "base64url";
    });
    inst._zod.check = (payload)=>{
        if (isValidBase64URL(payload.value)) return;
        payload.issues.push({
            code: "invalid_format",
            format: "base64url",
            input: payload.value,
            inst,
            continue: !def.abort
        });
    };
});
const $ZodE164 = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodE164", (inst, def)=>{
    var _def_pattern;
    (_def_pattern = def.pattern) !== null && _def_pattern !== void 0 ? _def_pattern : def.pattern = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$regexes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["e164"];
    $ZodStringFormat.init(inst, def);
});
function isValidJWT(token) {
    let algorithm = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
    try {
        const tokensParts = token.split(".");
        if (tokensParts.length !== 3) return false;
        const [header] = tokensParts;
        if (!header) return false;
        // @ts-ignore
        const parsedHeader = JSON.parse(atob(header));
        if ("typ" in parsedHeader && (parsedHeader === null || parsedHeader === void 0 ? void 0 : parsedHeader.typ) !== "JWT") return false;
        if (!parsedHeader.alg) return false;
        if (algorithm && (!("alg" in parsedHeader) || parsedHeader.alg !== algorithm)) return false;
        return true;
    } catch (e) {
        return false;
    }
}
const $ZodJWT = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodJWT", (inst, def)=>{
    $ZodStringFormat.init(inst, def);
    inst._zod.check = (payload)=>{
        if (isValidJWT(payload.value, def.alg)) return;
        payload.issues.push({
            code: "invalid_format",
            format: "jwt",
            input: payload.value,
            inst,
            continue: !def.abort
        });
    };
});
const $ZodCustomStringFormat = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodCustomStringFormat", (inst, def)=>{
    $ZodStringFormat.init(inst, def);
    inst._zod.check = (payload)=>{
        if (def.fn(payload.value)) return;
        payload.issues.push({
            code: "invalid_format",
            format: def.format,
            input: payload.value,
            inst,
            continue: !def.abort
        });
    };
});
const $ZodNumber = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodNumber", (inst, def)=>{
    $ZodType.init(inst, def);
    var _inst__zod_bag_pattern;
    inst._zod.pattern = (_inst__zod_bag_pattern = inst._zod.bag.pattern) !== null && _inst__zod_bag_pattern !== void 0 ? _inst__zod_bag_pattern : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$regexes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"];
    inst._zod.parse = (payload, _ctx)=>{
        if (def.coerce) try {
            payload.value = Number(payload.value);
        } catch (_) {}
        const input = payload.value;
        if (typeof input === "number" && !Number.isNaN(input) && Number.isFinite(input)) {
            return payload;
        }
        const received = typeof input === "number" ? Number.isNaN(input) ? "NaN" : !Number.isFinite(input) ? "Infinity" : undefined : undefined;
        payload.issues.push({
            expected: "number",
            code: "invalid_type",
            input,
            inst,
            ...received ? {
                received
            } : {}
        });
        return payload;
    };
});
const $ZodNumberFormat = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodNumber", (inst, def)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodCheckNumberFormat"].init(inst, def);
    $ZodNumber.init(inst, def); // no format checksp
});
const $ZodBoolean = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodBoolean", (inst, def)=>{
    $ZodType.init(inst, def);
    inst._zod.pattern = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$regexes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["boolean"];
    inst._zod.parse = (payload, _ctx)=>{
        if (def.coerce) try {
            payload.value = Boolean(payload.value);
        } catch (_) {}
        const input = payload.value;
        if (typeof input === "boolean") return payload;
        payload.issues.push({
            expected: "boolean",
            code: "invalid_type",
            input,
            inst
        });
        return payload;
    };
});
const $ZodBigInt = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodBigInt", (inst, def)=>{
    $ZodType.init(inst, def);
    inst._zod.pattern = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$regexes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bigint"];
    inst._zod.parse = (payload, _ctx)=>{
        if (def.coerce) try {
            payload.value = BigInt(payload.value);
        } catch (_) {}
        if (typeof payload.value === "bigint") return payload;
        payload.issues.push({
            expected: "bigint",
            code: "invalid_type",
            input: payload.value,
            inst
        });
        return payload;
    };
});
const $ZodBigIntFormat = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodBigInt", (inst, def)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodCheckBigIntFormat"].init(inst, def);
    $ZodBigInt.init(inst, def); // no format checks
});
const $ZodSymbol = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodSymbol", (inst, def)=>{
    $ZodType.init(inst, def);
    inst._zod.parse = (payload, _ctx)=>{
        const input = payload.value;
        if (typeof input === "symbol") return payload;
        payload.issues.push({
            expected: "symbol",
            code: "invalid_type",
            input,
            inst
        });
        return payload;
    };
});
const $ZodUndefined = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodUndefined", (inst, def)=>{
    $ZodType.init(inst, def);
    inst._zod.pattern = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$regexes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["undefined"];
    inst._zod.values = new Set([
        undefined
    ]);
    inst._zod.optin = "optional";
    inst._zod.optout = "optional";
    inst._zod.parse = (payload, _ctx)=>{
        const input = payload.value;
        if (typeof input === "undefined") return payload;
        payload.issues.push({
            expected: "undefined",
            code: "invalid_type",
            input,
            inst
        });
        return payload;
    };
});
const $ZodNull = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodNull", (inst, def)=>{
    $ZodType.init(inst, def);
    inst._zod.pattern = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$regexes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["null"];
    inst._zod.values = new Set([
        null
    ]);
    inst._zod.parse = (payload, _ctx)=>{
        const input = payload.value;
        if (input === null) return payload;
        payload.issues.push({
            expected: "null",
            code: "invalid_type",
            input,
            inst
        });
        return payload;
    };
});
const $ZodAny = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodAny", (inst, def)=>{
    $ZodType.init(inst, def);
    inst._zod.parse = (payload)=>payload;
});
const $ZodUnknown = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodUnknown", (inst, def)=>{
    $ZodType.init(inst, def);
    inst._zod.parse = (payload)=>payload;
});
const $ZodNever = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodNever", (inst, def)=>{
    $ZodType.init(inst, def);
    inst._zod.parse = (payload, _ctx)=>{
        payload.issues.push({
            expected: "never",
            code: "invalid_type",
            input: payload.value,
            inst
        });
        return payload;
    };
});
const $ZodVoid = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodVoid", (inst, def)=>{
    $ZodType.init(inst, def);
    inst._zod.parse = (payload, _ctx)=>{
        const input = payload.value;
        if (typeof input === "undefined") return payload;
        payload.issues.push({
            expected: "void",
            code: "invalid_type",
            input,
            inst
        });
        return payload;
    };
});
const $ZodDate = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodDate", (inst, def)=>{
    $ZodType.init(inst, def);
    inst._zod.parse = (payload, _ctx)=>{
        if (def.coerce) {
            try {
                payload.value = new Date(payload.value);
            } catch (_err) {}
        }
        const input = payload.value;
        const isDate = input instanceof Date;
        const isValidDate = isDate && !Number.isNaN(input.getTime());
        if (isValidDate) return payload;
        payload.issues.push({
            expected: "date",
            code: "invalid_type",
            input,
            ...isDate ? {
                received: "Invalid Date"
            } : {},
            inst
        });
        return payload;
    };
});
function handleArrayResult(result, final, index) {
    if (result.issues.length) {
        final.issues.push(...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prefixIssues"](index, result.issues));
    }
    final.value[index] = result.value;
}
const $ZodArray = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodArray", (inst, def)=>{
    $ZodType.init(inst, def);
    inst._zod.parse = (payload, ctx)=>{
        const input = payload.value;
        if (!Array.isArray(input)) {
            payload.issues.push({
                expected: "array",
                code: "invalid_type",
                input,
                inst
            });
            return payload;
        }
        payload.value = Array(input.length);
        const proms = [];
        for(let i = 0; i < input.length; i++){
            const item = input[i];
            const result = def.element._zod.run({
                value: item,
                issues: []
            }, ctx);
            if (result instanceof Promise) {
                proms.push(result.then((result)=>handleArrayResult(result, payload, i)));
            } else {
                handleArrayResult(result, payload, i);
            }
        }
        if (proms.length) {
            return Promise.all(proms).then(()=>payload);
        }
        return payload; //handleArrayResultsAsync(parseResults, final);
    };
});
function handlePropertyResult(result, final, key, input) {
    if (result.issues.length) {
        final.issues.push(...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prefixIssues"](key, result.issues));
    }
    if (result.value === undefined) {
        if (key in input) {
            final.value[key] = undefined;
        }
    } else {
        final.value[key] = result.value;
    }
}
const $ZodObject = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodObject", (inst, def)=>{
    // requires cast because technically $ZodObject doesn't extend
    $ZodType.init(inst, def);
    const _normalized = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cached"](()=>{
        const keys = Object.keys(def.shape);
        for (const k of keys){
            if (!def.shape[k]._zod.traits.has("$ZodType")) {
                throw new Error('Invalid element at key "'.concat(k, '": expected a Zod schema'));
            }
        }
        const okeys = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["optionalKeys"](def.shape);
        return {
            shape: def.shape,
            keys,
            keySet: new Set(keys),
            numKeys: keys.length,
            optionalKeys: new Set(okeys)
        };
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineLazy"](inst._zod, "propValues", ()=>{
        const shape = def.shape;
        const propValues = {};
        for(const key in shape){
            const field = shape[key]._zod;
            if (field.values) {
                var _propValues_key;
                (_propValues_key = propValues[key]) !== null && _propValues_key !== void 0 ? _propValues_key : propValues[key] = new Set();
                for (const v of field.values)propValues[key].add(v);
            }
        }
        return propValues;
    });
    const generateFastpass = (shape)=>{
        const doc = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$doc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Doc"]([
            "shape",
            "payload",
            "ctx"
        ]);
        const normalized = _normalized.value;
        const parseStr = (key)=>{
            const k = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["esc"](key);
            return "shape[".concat(k, "]._zod.run({ value: input[").concat(k, "], issues: [] }, ctx)");
        };
        doc.write("const input = payload.value;");
        const ids = Object.create(null);
        let counter = 0;
        for (const key of normalized.keys){
            ids[key] = "key_".concat(counter++);
        }
        // A: preserve key order {
        doc.write("const newResult = {}");
        for (const key of normalized.keys){
            const id = ids[key];
            const k = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["esc"](key);
            doc.write("const ".concat(id, " = ").concat(parseStr(key), ";"));
            doc.write("\n        if (".concat(id, ".issues.length) {\n          payload.issues = payload.issues.concat(").concat(id, ".issues.map(iss => ({\n            ...iss,\n            path: iss.path ? [").concat(k, ", ...iss.path] : [").concat(k, "]\n          })));\n        }\n        \n        if (").concat(id, ".value === undefined) {\n          if (").concat(k, " in input) {\n            newResult[").concat(k, "] = undefined;\n          }\n        } else {\n          newResult[").concat(k, "] = ").concat(id, ".value;\n        }\n      "));
        }
        doc.write("payload.value = newResult;");
        doc.write("return payload;");
        const fn = doc.compile();
        return (payload, ctx)=>fn(shape, payload, ctx);
    };
    let fastpass;
    const isObject = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isObject"];
    const jit = !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalConfig"].jitless;
    const allowsEval = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["allowsEval"];
    const fastEnabled = jit && allowsEval.value; // && !def.catchall;
    const catchall = def.catchall;
    let value;
    inst._zod.parse = (payload, ctx)=>{
        value !== null && value !== void 0 ? value : value = _normalized.value;
        const input = payload.value;
        if (!isObject(input)) {
            payload.issues.push({
                expected: "object",
                code: "invalid_type",
                input,
                inst
            });
            return payload;
        }
        const proms = [];
        if (jit && fastEnabled && (ctx === null || ctx === void 0 ? void 0 : ctx.async) === false && ctx.jitless !== true) {
            // always synchronous
            if (!fastpass) fastpass = generateFastpass(def.shape);
            payload = fastpass(payload, ctx);
        } else {
            payload.value = {};
            const shape = value.shape;
            for (const key of value.keys){
                const el = shape[key];
                const r = el._zod.run({
                    value: input[key],
                    issues: []
                }, ctx);
                if (r instanceof Promise) {
                    proms.push(r.then((r)=>handlePropertyResult(r, payload, key, input)));
                } else {
                    handlePropertyResult(r, payload, key, input);
                }
            }
        }
        if (!catchall) {
            return proms.length ? Promise.all(proms).then(()=>payload) : payload;
        }
        const unrecognized = [];
        // iterate over input keys
        const keySet = value.keySet;
        const _catchall = catchall._zod;
        const t = _catchall.def.type;
        for (const key of Object.keys(input)){
            if (keySet.has(key)) continue;
            if (t === "never") {
                unrecognized.push(key);
                continue;
            }
            const r = _catchall.run({
                value: input[key],
                issues: []
            }, ctx);
            if (r instanceof Promise) {
                proms.push(r.then((r)=>handlePropertyResult(r, payload, key, input)));
            } else {
                handlePropertyResult(r, payload, key, input);
            }
        }
        if (unrecognized.length) {
            payload.issues.push({
                code: "unrecognized_keys",
                keys: unrecognized,
                input,
                inst
            });
        }
        if (!proms.length) return payload;
        return Promise.all(proms).then(()=>{
            return payload;
        });
    };
});
function handleUnionResults(results, final, inst, ctx) {
    for (const result of results){
        if (result.issues.length === 0) {
            final.value = result.value;
            return final;
        }
    }
    const nonaborted = results.filter((r)=>!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["aborted"](r));
    if (nonaborted.length === 1) {
        final.value = nonaborted[0].value;
        return nonaborted[0];
    }
    final.issues.push({
        code: "invalid_union",
        input: final.value,
        inst,
        errors: results.map((result)=>result.issues.map((iss)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["finalizeIssue"](iss, ctx, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["config"]())))
    });
    return final;
}
const $ZodUnion = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodUnion", (inst, def)=>{
    $ZodType.init(inst, def);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineLazy"](inst._zod, "optin", ()=>def.options.some((o)=>o._zod.optin === "optional") ? "optional" : undefined);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineLazy"](inst._zod, "optout", ()=>def.options.some((o)=>o._zod.optout === "optional") ? "optional" : undefined);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineLazy"](inst._zod, "values", ()=>{
        if (def.options.every((o)=>o._zod.values)) {
            return new Set(def.options.flatMap((option)=>Array.from(option._zod.values)));
        }
        return undefined;
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineLazy"](inst._zod, "pattern", ()=>{
        if (def.options.every((o)=>o._zod.pattern)) {
            const patterns = def.options.map((o)=>o._zod.pattern);
            return new RegExp("^(".concat(patterns.map((p)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cleanRegex"](p.source)).join("|"), ")$"));
        }
        return undefined;
    });
    const single = def.options.length === 1;
    const first = def.options[0]._zod.run;
    inst._zod.parse = (payload, ctx)=>{
        if (single) {
            return first(payload, ctx);
        }
        let async = false;
        const results = [];
        for (const option of def.options){
            const result = option._zod.run({
                value: payload.value,
                issues: []
            }, ctx);
            if (result instanceof Promise) {
                results.push(result);
                async = true;
            } else {
                if (result.issues.length === 0) return result;
                results.push(result);
            }
        }
        if (!async) return handleUnionResults(results, payload, inst, ctx);
        return Promise.all(results).then((results)=>{
            return handleUnionResults(results, payload, inst, ctx);
        });
    };
});
const $ZodDiscriminatedUnion = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodDiscriminatedUnion", (inst, def)=>{
    $ZodUnion.init(inst, def);
    const _super = inst._zod.parse;
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineLazy"](inst._zod, "propValues", ()=>{
        const propValues = {};
        for (const option of def.options){
            const pv = option._zod.propValues;
            if (!pv || Object.keys(pv).length === 0) throw new Error('Invalid discriminated union option at index "'.concat(def.options.indexOf(option), '"'));
            for (const [k, v] of Object.entries(pv)){
                if (!propValues[k]) propValues[k] = new Set();
                for (const val of v){
                    propValues[k].add(val);
                }
            }
        }
        return propValues;
    });
    const disc = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cached"](()=>{
        const opts = def.options;
        const map = new Map();
        for (const o of opts){
            var _o__zod_propValues;
            const values = (_o__zod_propValues = o._zod.propValues) === null || _o__zod_propValues === void 0 ? void 0 : _o__zod_propValues[def.discriminator];
            if (!values || values.size === 0) throw new Error('Invalid discriminated union option at index "'.concat(def.options.indexOf(o), '"'));
            for (const v of values){
                if (map.has(v)) {
                    throw new Error('Duplicate discriminator value "'.concat(String(v), '"'));
                }
                map.set(v, o);
            }
        }
        return map;
    });
    inst._zod.parse = (payload, ctx)=>{
        const input = payload.value;
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isObject"](input)) {
            payload.issues.push({
                code: "invalid_type",
                expected: "object",
                input,
                inst
            });
            return payload;
        }
        const opt = disc.value.get(input === null || input === void 0 ? void 0 : input[def.discriminator]);
        if (opt) {
            return opt._zod.run(payload, ctx);
        }
        if (def.unionFallback) {
            return _super(payload, ctx);
        }
        // no matching discriminator
        payload.issues.push({
            code: "invalid_union",
            errors: [],
            note: "No matching discriminator",
            discriminator: def.discriminator,
            input,
            path: [
                def.discriminator
            ],
            inst
        });
        return payload;
    };
});
const $ZodIntersection = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodIntersection", (inst, def)=>{
    $ZodType.init(inst, def);
    inst._zod.parse = (payload, ctx)=>{
        const input = payload.value;
        const left = def.left._zod.run({
            value: input,
            issues: []
        }, ctx);
        const right = def.right._zod.run({
            value: input,
            issues: []
        }, ctx);
        const async = left instanceof Promise || right instanceof Promise;
        if (async) {
            return Promise.all([
                left,
                right
            ]).then((param)=>{
                let [left, right] = param;
                return handleIntersectionResults(payload, left, right);
            });
        }
        return handleIntersectionResults(payload, left, right);
    };
});
function mergeValues(a, b) {
    // const aType = parse.t(a);
    // const bType = parse.t(b);
    if (a === b) {
        return {
            valid: true,
            data: a
        };
    }
    if (a instanceof Date && b instanceof Date && +a === +b) {
        return {
            valid: true,
            data: a
        };
    }
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPlainObject"](a) && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPlainObject"](b)) {
        const bKeys = Object.keys(b);
        const sharedKeys = Object.keys(a).filter((key)=>bKeys.indexOf(key) !== -1);
        const newObj = {
            ...a,
            ...b
        };
        for (const key of sharedKeys){
            const sharedValue = mergeValues(a[key], b[key]);
            if (!sharedValue.valid) {
                return {
                    valid: false,
                    mergeErrorPath: [
                        key,
                        ...sharedValue.mergeErrorPath
                    ]
                };
            }
            newObj[key] = sharedValue.data;
        }
        return {
            valid: true,
            data: newObj
        };
    }
    if (Array.isArray(a) && Array.isArray(b)) {
        if (a.length !== b.length) {
            return {
                valid: false,
                mergeErrorPath: []
            };
        }
        const newArray = [];
        for(let index = 0; index < a.length; index++){
            const itemA = a[index];
            const itemB = b[index];
            const sharedValue = mergeValues(itemA, itemB);
            if (!sharedValue.valid) {
                return {
                    valid: false,
                    mergeErrorPath: [
                        index,
                        ...sharedValue.mergeErrorPath
                    ]
                };
            }
            newArray.push(sharedValue.data);
        }
        return {
            valid: true,
            data: newArray
        };
    }
    return {
        valid: false,
        mergeErrorPath: []
    };
}
function handleIntersectionResults(result, left, right) {
    if (left.issues.length) {
        result.issues.push(...left.issues);
    }
    if (right.issues.length) {
        result.issues.push(...right.issues);
    }
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["aborted"](result)) return result;
    const merged = mergeValues(left.value, right.value);
    if (!merged.valid) {
        throw new Error("Unmergable intersection. Error path: " + "".concat(JSON.stringify(merged.mergeErrorPath)));
    }
    result.value = merged.data;
    return result;
}
const $ZodTuple = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodTuple", (inst, def)=>{
    $ZodType.init(inst, def);
    const items = def.items;
    const optStart = items.length - [
        ...items
    ].reverse().findIndex((item)=>item._zod.optin !== "optional");
    inst._zod.parse = (payload, ctx)=>{
        const input = payload.value;
        if (!Array.isArray(input)) {
            payload.issues.push({
                input,
                inst,
                expected: "tuple",
                code: "invalid_type"
            });
            return payload;
        }
        payload.value = [];
        const proms = [];
        if (!def.rest) {
            const tooBig = input.length > items.length;
            const tooSmall = input.length < optStart - 1;
            if (tooBig || tooSmall) {
                payload.issues.push({
                    ...tooBig ? {
                        code: "too_big",
                        maximum: items.length
                    } : {
                        code: "too_small",
                        minimum: items.length
                    },
                    input,
                    inst,
                    origin: "array"
                });
                return payload;
            }
        }
        let i = -1;
        for (const item of items){
            i++;
            if (i >= input.length) {
                if (i >= optStart) continue;
            }
            const result = item._zod.run({
                value: input[i],
                issues: []
            }, ctx);
            if (result instanceof Promise) {
                proms.push(result.then((result)=>handleTupleResult(result, payload, i)));
            } else {
                handleTupleResult(result, payload, i);
            }
        }
        if (def.rest) {
            const rest = input.slice(items.length);
            for (const el of rest){
                i++;
                const result = def.rest._zod.run({
                    value: el,
                    issues: []
                }, ctx);
                if (result instanceof Promise) {
                    proms.push(result.then((result)=>handleTupleResult(result, payload, i)));
                } else {
                    handleTupleResult(result, payload, i);
                }
            }
        }
        if (proms.length) return Promise.all(proms).then(()=>payload);
        return payload;
    };
});
function handleTupleResult(result, final, index) {
    if (result.issues.length) {
        final.issues.push(...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prefixIssues"](index, result.issues));
    }
    final.value[index] = result.value;
}
const $ZodRecord = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodRecord", (inst, def)=>{
    $ZodType.init(inst, def);
    inst._zod.parse = (payload, ctx)=>{
        const input = payload.value;
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPlainObject"](input)) {
            payload.issues.push({
                expected: "record",
                code: "invalid_type",
                input,
                inst
            });
            return payload;
        }
        const proms = [];
        if (def.keyType._zod.values) {
            const values = def.keyType._zod.values;
            payload.value = {};
            for (const key of values){
                if (typeof key === "string" || typeof key === "number" || typeof key === "symbol") {
                    const result = def.valueType._zod.run({
                        value: input[key],
                        issues: []
                    }, ctx);
                    if (result instanceof Promise) {
                        proms.push(result.then((result)=>{
                            if (result.issues.length) {
                                payload.issues.push(...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prefixIssues"](key, result.issues));
                            }
                            payload.value[key] = result.value;
                        }));
                    } else {
                        if (result.issues.length) {
                            payload.issues.push(...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prefixIssues"](key, result.issues));
                        }
                        payload.value[key] = result.value;
                    }
                }
            }
            let unrecognized;
            for(const key in input){
                if (!values.has(key)) {
                    unrecognized = unrecognized !== null && unrecognized !== void 0 ? unrecognized : [];
                    unrecognized.push(key);
                }
            }
            if (unrecognized && unrecognized.length > 0) {
                payload.issues.push({
                    code: "unrecognized_keys",
                    input,
                    inst,
                    keys: unrecognized
                });
            }
        } else {
            payload.value = {};
            for (const key of Reflect.ownKeys(input)){
                if (key === "__proto__") continue;
                const keyResult = def.keyType._zod.run({
                    value: key,
                    issues: []
                }, ctx);
                if (keyResult instanceof Promise) {
                    throw new Error("Async schemas not supported in object keys currently");
                }
                if (keyResult.issues.length) {
                    payload.issues.push({
                        code: "invalid_key",
                        origin: "record",
                        issues: keyResult.issues.map((iss)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["finalizeIssue"](iss, ctx, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["config"]())),
                        input: key,
                        path: [
                            key
                        ],
                        inst
                    });
                    payload.value[keyResult.value] = keyResult.value;
                    continue;
                }
                const result = def.valueType._zod.run({
                    value: input[key],
                    issues: []
                }, ctx);
                if (result instanceof Promise) {
                    proms.push(result.then((result)=>{
                        if (result.issues.length) {
                            payload.issues.push(...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prefixIssues"](key, result.issues));
                        }
                        payload.value[keyResult.value] = result.value;
                    }));
                } else {
                    if (result.issues.length) {
                        payload.issues.push(...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prefixIssues"](key, result.issues));
                    }
                    payload.value[keyResult.value] = result.value;
                }
            }
        }
        if (proms.length) {
            return Promise.all(proms).then(()=>payload);
        }
        return payload;
    };
});
const $ZodMap = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodMap", (inst, def)=>{
    $ZodType.init(inst, def);
    inst._zod.parse = (payload, ctx)=>{
        const input = payload.value;
        if (!(input instanceof Map)) {
            payload.issues.push({
                expected: "map",
                code: "invalid_type",
                input,
                inst
            });
            return payload;
        }
        const proms = [];
        payload.value = new Map();
        for (const [key, value] of input){
            const keyResult = def.keyType._zod.run({
                value: key,
                issues: []
            }, ctx);
            const valueResult = def.valueType._zod.run({
                value: value,
                issues: []
            }, ctx);
            if (keyResult instanceof Promise || valueResult instanceof Promise) {
                proms.push(Promise.all([
                    keyResult,
                    valueResult
                ]).then((param)=>{
                    let [keyResult, valueResult] = param;
                    handleMapResult(keyResult, valueResult, payload, key, input, inst, ctx);
                }));
            } else {
                handleMapResult(keyResult, valueResult, payload, key, input, inst, ctx);
            }
        }
        if (proms.length) return Promise.all(proms).then(()=>payload);
        return payload;
    };
});
function handleMapResult(keyResult, valueResult, final, key, input, inst, ctx) {
    if (keyResult.issues.length) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["propertyKeyTypes"].has(typeof key)) {
            final.issues.push(...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prefixIssues"](key, keyResult.issues));
        } else {
            final.issues.push({
                code: "invalid_key",
                origin: "map",
                input,
                inst,
                issues: keyResult.issues.map((iss)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["finalizeIssue"](iss, ctx, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["config"]()))
            });
        }
    }
    if (valueResult.issues.length) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["propertyKeyTypes"].has(typeof key)) {
            final.issues.push(...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prefixIssues"](key, valueResult.issues));
        } else {
            final.issues.push({
                origin: "map",
                code: "invalid_element",
                input,
                inst,
                key: key,
                issues: valueResult.issues.map((iss)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["finalizeIssue"](iss, ctx, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["config"]()))
            });
        }
    }
    final.value.set(keyResult.value, valueResult.value);
}
const $ZodSet = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodSet", (inst, def)=>{
    $ZodType.init(inst, def);
    inst._zod.parse = (payload, ctx)=>{
        const input = payload.value;
        if (!(input instanceof Set)) {
            payload.issues.push({
                input,
                inst,
                expected: "set",
                code: "invalid_type"
            });
            return payload;
        }
        const proms = [];
        payload.value = new Set();
        for (const item of input){
            const result = def.valueType._zod.run({
                value: item,
                issues: []
            }, ctx);
            if (result instanceof Promise) {
                proms.push(result.then((result)=>handleSetResult(result, payload)));
            } else handleSetResult(result, payload);
        }
        if (proms.length) return Promise.all(proms).then(()=>payload);
        return payload;
    };
});
function handleSetResult(result, final) {
    if (result.issues.length) {
        final.issues.push(...result.issues);
    }
    final.value.add(result.value);
}
const $ZodEnum = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodEnum", (inst, def)=>{
    $ZodType.init(inst, def);
    const values = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEnumValues"](def.entries);
    const valuesSet = new Set(values);
    inst._zod.values = valuesSet;
    inst._zod.pattern = new RegExp("^(".concat(values.filter((k)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["propertyKeyTypes"].has(typeof k)).map((o)=>typeof o === "string" ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["escapeRegex"](o) : o.toString()).join("|"), ")$"));
    inst._zod.parse = (payload, _ctx)=>{
        const input = payload.value;
        if (valuesSet.has(input)) {
            return payload;
        }
        payload.issues.push({
            code: "invalid_value",
            values,
            input,
            inst
        });
        return payload;
    };
});
const $ZodLiteral = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodLiteral", (inst, def)=>{
    $ZodType.init(inst, def);
    if (def.values.length === 0) {
        throw new Error("Cannot create literal schema with no valid values");
    }
    inst._zod.values = new Set(def.values);
    inst._zod.pattern = new RegExp("^(".concat(def.values.map((o)=>typeof o === "string" ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["escapeRegex"](o) : o ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["escapeRegex"](o.toString()) : String(o)).join("|"), ")$"));
    inst._zod.parse = (payload, _ctx)=>{
        const input = payload.value;
        if (inst._zod.values.has(input)) {
            return payload;
        }
        payload.issues.push({
            code: "invalid_value",
            values: def.values,
            input,
            inst
        });
        return payload;
    };
});
const $ZodFile = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodFile", (inst, def)=>{
    $ZodType.init(inst, def);
    inst._zod.parse = (payload, _ctx)=>{
        const input = payload.value;
        // @ts-ignore
        if (input instanceof File) return payload;
        payload.issues.push({
            expected: "file",
            code: "invalid_type",
            input,
            inst
        });
        return payload;
    };
});
const $ZodTransform = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodTransform", (inst, def)=>{
    $ZodType.init(inst, def);
    inst._zod.parse = (payload, _ctx)=>{
        const _out = def.transform(payload.value, payload);
        if (_ctx.async) {
            const output = _out instanceof Promise ? _out : Promise.resolve(_out);
            return output.then((output)=>{
                payload.value = output;
                return payload;
            });
        }
        if (_out instanceof Promise) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodAsyncError"]();
        }
        payload.value = _out;
        return payload;
    };
});
function handleOptionalResult(result, input) {
    if (result.issues.length && input === undefined) {
        return {
            issues: [],
            value: undefined
        };
    }
    return result;
}
const $ZodOptional = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodOptional", (inst, def)=>{
    $ZodType.init(inst, def);
    inst._zod.optin = "optional";
    inst._zod.optout = "optional";
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineLazy"](inst._zod, "values", ()=>{
        return def.innerType._zod.values ? new Set([
            ...def.innerType._zod.values,
            undefined
        ]) : undefined;
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineLazy"](inst._zod, "pattern", ()=>{
        const pattern = def.innerType._zod.pattern;
        return pattern ? new RegExp("^(".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cleanRegex"](pattern.source), ")?$")) : undefined;
    });
    inst._zod.parse = (payload, ctx)=>{
        if (def.innerType._zod.optin === "optional") {
            const result = def.innerType._zod.run(payload, ctx);
            if (result instanceof Promise) return result.then((r)=>handleOptionalResult(r, payload.value));
            return handleOptionalResult(result, payload.value);
        }
        if (payload.value === undefined) {
            return payload;
        }
        return def.innerType._zod.run(payload, ctx);
    };
});
const $ZodNullable = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodNullable", (inst, def)=>{
    $ZodType.init(inst, def);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineLazy"](inst._zod, "optin", ()=>def.innerType._zod.optin);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineLazy"](inst._zod, "optout", ()=>def.innerType._zod.optout);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineLazy"](inst._zod, "pattern", ()=>{
        const pattern = def.innerType._zod.pattern;
        return pattern ? new RegExp("^(".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cleanRegex"](pattern.source), "|null)$")) : undefined;
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineLazy"](inst._zod, "values", ()=>{
        return def.innerType._zod.values ? new Set([
            ...def.innerType._zod.values,
            null
        ]) : undefined;
    });
    inst._zod.parse = (payload, ctx)=>{
        if (payload.value === null) return payload;
        return def.innerType._zod.run(payload, ctx);
    };
});
const $ZodDefault = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodDefault", (inst, def)=>{
    $ZodType.init(inst, def);
    // inst._zod.qin = "true";
    inst._zod.optin = "optional";
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineLazy"](inst._zod, "values", ()=>def.innerType._zod.values);
    inst._zod.parse = (payload, ctx)=>{
        if (payload.value === undefined) {
            payload.value = def.defaultValue;
            /**
             * $ZodDefault always returns the default value immediately.
             * It doesn't pass the default value into the validator ("prefault"). There's no reason to pass the default value through validation. The validity of the default is enforced by TypeScript statically. Otherwise, it's the responsibility of the user to ensure the default is valid. In the case of pipes with divergent in/out types, you can specify the default on the `in` schema of your ZodPipe to set a "prefault" for the pipe.   */ return payload;
        }
        const result = def.innerType._zod.run(payload, ctx);
        if (result instanceof Promise) {
            return result.then((result)=>handleDefaultResult(result, def));
        }
        return handleDefaultResult(result, def);
    };
});
function handleDefaultResult(payload, def) {
    if (payload.value === undefined) {
        payload.value = def.defaultValue;
    }
    return payload;
}
const $ZodPrefault = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodPrefault", (inst, def)=>{
    $ZodType.init(inst, def);
    inst._zod.optin = "optional";
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineLazy"](inst._zod, "values", ()=>def.innerType._zod.values);
    inst._zod.parse = (payload, ctx)=>{
        if (payload.value === undefined) {
            payload.value = def.defaultValue;
        }
        return def.innerType._zod.run(payload, ctx);
    };
});
const $ZodNonOptional = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodNonOptional", (inst, def)=>{
    $ZodType.init(inst, def);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineLazy"](inst._zod, "values", ()=>{
        const v = def.innerType._zod.values;
        return v ? new Set([
            ...v
        ].filter((x)=>x !== undefined)) : undefined;
    });
    inst._zod.parse = (payload, ctx)=>{
        const result = def.innerType._zod.run(payload, ctx);
        if (result instanceof Promise) {
            return result.then((result)=>handleNonOptionalResult(result, inst));
        }
        return handleNonOptionalResult(result, inst);
    };
});
function handleNonOptionalResult(payload, inst) {
    if (!payload.issues.length && payload.value === undefined) {
        payload.issues.push({
            code: "invalid_type",
            expected: "nonoptional",
            input: payload.value,
            inst
        });
    }
    return payload;
}
const $ZodSuccess = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodSuccess", (inst, def)=>{
    $ZodType.init(inst, def);
    inst._zod.parse = (payload, ctx)=>{
        const result = def.innerType._zod.run(payload, ctx);
        if (result instanceof Promise) {
            return result.then((result)=>{
                payload.value = result.issues.length === 0;
                return payload;
            });
        }
        payload.value = result.issues.length === 0;
        return payload;
    };
});
const $ZodCatch = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodCatch", (inst, def)=>{
    $ZodType.init(inst, def);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineLazy"](inst._zod, "optin", ()=>def.innerType._zod.optin);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineLazy"](inst._zod, "optout", ()=>def.innerType._zod.optout);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineLazy"](inst._zod, "values", ()=>def.innerType._zod.values);
    inst._zod.parse = (payload, ctx)=>{
        const result = def.innerType._zod.run(payload, ctx);
        if (result instanceof Promise) {
            return result.then((result)=>{
                payload.value = result.value;
                if (result.issues.length) {
                    payload.value = def.catchValue({
                        ...payload,
                        error: {
                            issues: result.issues.map((iss)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["finalizeIssue"](iss, ctx, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["config"]()))
                        },
                        input: payload.value
                    });
                    payload.issues = [];
                }
                return payload;
            });
        }
        payload.value = result.value;
        if (result.issues.length) {
            payload.value = def.catchValue({
                ...payload,
                error: {
                    issues: result.issues.map((iss)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["finalizeIssue"](iss, ctx, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["config"]()))
                },
                input: payload.value
            });
            payload.issues = [];
        }
        return payload;
    };
});
const $ZodNaN = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodNaN", (inst, def)=>{
    $ZodType.init(inst, def);
    inst._zod.parse = (payload, _ctx)=>{
        if (typeof payload.value !== "number" || !Number.isNaN(payload.value)) {
            payload.issues.push({
                input: payload.value,
                inst,
                expected: "nan",
                code: "invalid_type"
            });
            return payload;
        }
        return payload;
    };
});
const $ZodPipe = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodPipe", (inst, def)=>{
    $ZodType.init(inst, def);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineLazy"](inst._zod, "values", ()=>def.in._zod.values);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineLazy"](inst._zod, "optin", ()=>def.in._zod.optin);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineLazy"](inst._zod, "optout", ()=>def.out._zod.optout);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineLazy"](inst._zod, "propValues", ()=>def.in._zod.propValues);
    inst._zod.parse = (payload, ctx)=>{
        const left = def.in._zod.run(payload, ctx);
        if (left instanceof Promise) {
            return left.then((left)=>handlePipeResult(left, def, ctx));
        }
        return handlePipeResult(left, def, ctx);
    };
});
function handlePipeResult(left, def, ctx) {
    if (left.issues.length) {
        return left;
    }
    return def.out._zod.run({
        value: left.value,
        issues: left.issues
    }, ctx);
}
const $ZodReadonly = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodReadonly", (inst, def)=>{
    $ZodType.init(inst, def);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineLazy"](inst._zod, "propValues", ()=>def.innerType._zod.propValues);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineLazy"](inst._zod, "values", ()=>def.innerType._zod.values);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineLazy"](inst._zod, "optin", ()=>def.innerType._zod.optin);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineLazy"](inst._zod, "optout", ()=>def.innerType._zod.optout);
    inst._zod.parse = (payload, ctx)=>{
        const result = def.innerType._zod.run(payload, ctx);
        if (result instanceof Promise) {
            return result.then(handleReadonlyResult);
        }
        return handleReadonlyResult(result);
    };
});
function handleReadonlyResult(payload) {
    payload.value = Object.freeze(payload.value);
    return payload;
}
const $ZodTemplateLiteral = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodTemplateLiteral", (inst, def)=>{
    $ZodType.init(inst, def);
    const regexParts = [];
    for (const part of def.parts){
        if (typeof part === "object" && part !== null) {
            // is Zod schema
            if (!part._zod.pattern) {
                // if (!source)
                throw new Error("Invalid template literal part, no pattern found: ".concat([
                    ...part._zod.traits
                ].shift()));
            }
            const source = part._zod.pattern instanceof RegExp ? part._zod.pattern.source : part._zod.pattern;
            if (!source) throw new Error("Invalid template literal part: ".concat(part._zod.traits));
            const start = source.startsWith("^") ? 1 : 0;
            const end = source.endsWith("$") ? source.length - 1 : source.length;
            regexParts.push(source.slice(start, end));
        } else if (part === null || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["primitiveTypes"].has(typeof part)) {
            regexParts.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["escapeRegex"]("".concat(part)));
        } else {
            throw new Error("Invalid template literal part: ".concat(part));
        }
    }
    inst._zod.pattern = new RegExp("^".concat(regexParts.join(""), "$"));
    inst._zod.parse = (payload, _ctx)=>{
        if (typeof payload.value !== "string") {
            payload.issues.push({
                input: payload.value,
                inst,
                expected: "template_literal",
                code: "invalid_type"
            });
            return payload;
        }
        inst._zod.pattern.lastIndex = 0;
        if (!inst._zod.pattern.test(payload.value)) {
            var _def_format;
            payload.issues.push({
                input: payload.value,
                inst,
                code: "invalid_format",
                format: (_def_format = def.format) !== null && _def_format !== void 0 ? _def_format : "template_literal",
                pattern: inst._zod.pattern.source
            });
            return payload;
        }
        return payload;
    };
});
const $ZodPromise = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodPromise", (inst, def)=>{
    $ZodType.init(inst, def);
    inst._zod.parse = (payload, ctx)=>{
        return Promise.resolve(payload.value).then((inner)=>def.innerType._zod.run({
                value: inner,
                issues: []
            }, ctx));
    };
});
const $ZodLazy = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodLazy", (inst, def)=>{
    $ZodType.init(inst, def);
    // let _innerType!: any;
    // util.defineLazy(def, "getter", () => {
    //   if (!_innerType) {
    //     _innerType = def.getter();
    //   }
    //   return () => _innerType;
    // });
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineLazy"](inst._zod, "innerType", ()=>def.getter());
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineLazy"](inst._zod, "pattern", ()=>inst._zod.innerType._zod.pattern);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineLazy"](inst._zod, "propValues", ()=>inst._zod.innerType._zod.propValues);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineLazy"](inst._zod, "optin", ()=>{
        var _inst__zod_innerType__zod_optin;
        return (_inst__zod_innerType__zod_optin = inst._zod.innerType._zod.optin) !== null && _inst__zod_innerType__zod_optin !== void 0 ? _inst__zod_innerType__zod_optin : undefined;
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineLazy"](inst._zod, "optout", ()=>{
        var _inst__zod_innerType__zod_optout;
        return (_inst__zod_innerType__zod_optout = inst._zod.innerType._zod.optout) !== null && _inst__zod_innerType__zod_optout !== void 0 ? _inst__zod_innerType__zod_optout : undefined;
    });
    inst._zod.parse = (payload, ctx)=>{
        const inner = inst._zod.innerType;
        return inner._zod.run(payload, ctx);
    };
});
const $ZodCustom = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodCustom", (inst, def)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodCheck"].init(inst, def);
    $ZodType.init(inst, def);
    inst._zod.parse = (payload, _)=>{
        return payload;
    };
    inst._zod.check = (payload)=>{
        const input = payload.value;
        const r = def.fn(input);
        if (r instanceof Promise) {
            return r.then((r)=>handleRefineResult(r, payload, input, inst));
        }
        handleRefineResult(r, payload, input, inst);
        return;
    };
});
function handleRefineResult(result, payload, input, inst) {
    if (!result) {
        var _inst__zod_def_path;
        const _iss = {
            code: "custom",
            input,
            inst,
            path: [
                ...(_inst__zod_def_path = inst._zod.def.path) !== null && _inst__zod_def_path !== void 0 ? _inst__zod_def_path : []
            ],
            continue: !inst._zod.def.abort
        };
        if (inst._zod.def.params) _iss.params = inst._zod.def.params;
        payload.issues.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["issue"](_iss));
    }
}
}),
"[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/schemas.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "$ZodAny",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodAny"],
    "$ZodArray",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodArray"],
    "$ZodBase64",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodBase64"],
    "$ZodBase64URL",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodBase64URL"],
    "$ZodBigInt",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodBigInt"],
    "$ZodBigIntFormat",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodBigIntFormat"],
    "$ZodBoolean",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodBoolean"],
    "$ZodCIDRv4",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodCIDRv4"],
    "$ZodCIDRv6",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodCIDRv6"],
    "$ZodCUID",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodCUID"],
    "$ZodCUID2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodCUID2"],
    "$ZodCatch",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodCatch"],
    "$ZodCustom",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodCustom"],
    "$ZodCustomStringFormat",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodCustomStringFormat"],
    "$ZodDate",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodDate"],
    "$ZodDefault",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodDefault"],
    "$ZodDiscriminatedUnion",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodDiscriminatedUnion"],
    "$ZodE164",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodE164"],
    "$ZodEmail",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodEmail"],
    "$ZodEmoji",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodEmoji"],
    "$ZodEnum",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodEnum"],
    "$ZodFile",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodFile"],
    "$ZodGUID",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodGUID"],
    "$ZodIPv4",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodIPv4"],
    "$ZodIPv6",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodIPv6"],
    "$ZodISODate",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodISODate"],
    "$ZodISODateTime",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodISODateTime"],
    "$ZodISODuration",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodISODuration"],
    "$ZodISOTime",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodISOTime"],
    "$ZodIntersection",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodIntersection"],
    "$ZodJWT",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodJWT"],
    "$ZodKSUID",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodKSUID"],
    "$ZodLazy",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodLazy"],
    "$ZodLiteral",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodLiteral"],
    "$ZodMap",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodMap"],
    "$ZodNaN",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodNaN"],
    "$ZodNanoID",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodNanoID"],
    "$ZodNever",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodNever"],
    "$ZodNonOptional",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodNonOptional"],
    "$ZodNull",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodNull"],
    "$ZodNullable",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodNullable"],
    "$ZodNumber",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodNumber"],
    "$ZodNumberFormat",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodNumberFormat"],
    "$ZodObject",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodObject"],
    "$ZodOptional",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodOptional"],
    "$ZodPipe",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodPipe"],
    "$ZodPrefault",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodPrefault"],
    "$ZodPromise",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodPromise"],
    "$ZodReadonly",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodReadonly"],
    "$ZodRecord",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodRecord"],
    "$ZodSet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodSet"],
    "$ZodString",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodString"],
    "$ZodStringFormat",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodStringFormat"],
    "$ZodSuccess",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodSuccess"],
    "$ZodSymbol",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodSymbol"],
    "$ZodTemplateLiteral",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodTemplateLiteral"],
    "$ZodTransform",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodTransform"],
    "$ZodTuple",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodTuple"],
    "$ZodType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodType"],
    "$ZodULID",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodULID"],
    "$ZodURL",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodURL"],
    "$ZodUUID",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodUUID"],
    "$ZodUndefined",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodUndefined"],
    "$ZodUnion",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodUnion"],
    "$ZodUnknown",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodUnknown"],
    "$ZodVoid",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodVoid"],
    "$ZodXID",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodXID"],
    "clone",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clone"],
    "isValidBase64",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isValidBase64"],
    "isValidBase64URL",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isValidBase64URL"],
    "isValidJWT",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isValidJWT"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/schemas.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/util.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/api.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TimePrecision",
    ()=>TimePrecision,
    "_any",
    ()=>_any,
    "_array",
    ()=>_array,
    "_base64",
    ()=>_base64,
    "_base64url",
    ()=>_base64url,
    "_bigint",
    ()=>_bigint,
    "_boolean",
    ()=>_boolean,
    "_catch",
    ()=>_catch,
    "_check",
    ()=>_check,
    "_cidrv4",
    ()=>_cidrv4,
    "_cidrv6",
    ()=>_cidrv6,
    "_coercedBigint",
    ()=>_coercedBigint,
    "_coercedBoolean",
    ()=>_coercedBoolean,
    "_coercedDate",
    ()=>_coercedDate,
    "_coercedNumber",
    ()=>_coercedNumber,
    "_coercedString",
    ()=>_coercedString,
    "_cuid",
    ()=>_cuid,
    "_cuid2",
    ()=>_cuid2,
    "_custom",
    ()=>_custom,
    "_date",
    ()=>_date,
    "_default",
    ()=>_default,
    "_discriminatedUnion",
    ()=>_discriminatedUnion,
    "_e164",
    ()=>_e164,
    "_email",
    ()=>_email,
    "_emoji",
    ()=>_emoji,
    "_endsWith",
    ()=>_endsWith,
    "_enum",
    ()=>_enum,
    "_file",
    ()=>_file,
    "_float32",
    ()=>_float32,
    "_float64",
    ()=>_float64,
    "_gt",
    ()=>_gt,
    "_gte",
    ()=>_gte,
    "_guid",
    ()=>_guid,
    "_includes",
    ()=>_includes,
    "_int",
    ()=>_int,
    "_int32",
    ()=>_int32,
    "_int64",
    ()=>_int64,
    "_intersection",
    ()=>_intersection,
    "_ipv4",
    ()=>_ipv4,
    "_ipv6",
    ()=>_ipv6,
    "_isoDate",
    ()=>_isoDate,
    "_isoDateTime",
    ()=>_isoDateTime,
    "_isoDuration",
    ()=>_isoDuration,
    "_isoTime",
    ()=>_isoTime,
    "_jwt",
    ()=>_jwt,
    "_ksuid",
    ()=>_ksuid,
    "_lazy",
    ()=>_lazy,
    "_length",
    ()=>_length,
    "_literal",
    ()=>_literal,
    "_lowercase",
    ()=>_lowercase,
    "_lt",
    ()=>_lt,
    "_lte",
    ()=>_lte,
    "_map",
    ()=>_map,
    "_max",
    ()=>_lte,
    "_maxLength",
    ()=>_maxLength,
    "_maxSize",
    ()=>_maxSize,
    "_mime",
    ()=>_mime,
    "_min",
    ()=>_gte,
    "_minLength",
    ()=>_minLength,
    "_minSize",
    ()=>_minSize,
    "_multipleOf",
    ()=>_multipleOf,
    "_nan",
    ()=>_nan,
    "_nanoid",
    ()=>_nanoid,
    "_nativeEnum",
    ()=>_nativeEnum,
    "_negative",
    ()=>_negative,
    "_never",
    ()=>_never,
    "_nonnegative",
    ()=>_nonnegative,
    "_nonoptional",
    ()=>_nonoptional,
    "_nonpositive",
    ()=>_nonpositive,
    "_normalize",
    ()=>_normalize,
    "_null",
    ()=>_null,
    "_nullable",
    ()=>_nullable,
    "_number",
    ()=>_number,
    "_optional",
    ()=>_optional,
    "_overwrite",
    ()=>_overwrite,
    "_pipe",
    ()=>_pipe,
    "_positive",
    ()=>_positive,
    "_promise",
    ()=>_promise,
    "_property",
    ()=>_property,
    "_readonly",
    ()=>_readonly,
    "_record",
    ()=>_record,
    "_refine",
    ()=>_refine,
    "_regex",
    ()=>_regex,
    "_set",
    ()=>_set,
    "_size",
    ()=>_size,
    "_startsWith",
    ()=>_startsWith,
    "_string",
    ()=>_string,
    "_stringFormat",
    ()=>_stringFormat,
    "_stringbool",
    ()=>_stringbool,
    "_success",
    ()=>_success,
    "_superRefine",
    ()=>_superRefine,
    "_symbol",
    ()=>_symbol,
    "_templateLiteral",
    ()=>_templateLiteral,
    "_toLowerCase",
    ()=>_toLowerCase,
    "_toUpperCase",
    ()=>_toUpperCase,
    "_transform",
    ()=>_transform,
    "_trim",
    ()=>_trim,
    "_tuple",
    ()=>_tuple,
    "_uint32",
    ()=>_uint32,
    "_uint64",
    ()=>_uint64,
    "_ulid",
    ()=>_ulid,
    "_undefined",
    ()=>_undefined,
    "_union",
    ()=>_union,
    "_unknown",
    ()=>_unknown,
    "_uppercase",
    ()=>_uppercase,
    "_url",
    ()=>_url,
    "_uuid",
    ()=>_uuid,
    "_uuidv4",
    ()=>_uuidv4,
    "_uuidv6",
    ()=>_uuidv6,
    "_uuidv7",
    ()=>_uuidv7,
    "_void",
    ()=>_void,
    "_xid",
    ()=>_xid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/checks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/schemas.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/util.js [app-client] (ecmascript)");
;
;
;
function _string(Class, params) {
    return new Class({
        type: "string",
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params)
    });
}
function _coercedString(Class, params) {
    return new Class({
        type: "string",
        coerce: true,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params)
    });
}
function _email(Class, params) {
    return new Class({
        type: "string",
        format: "email",
        check: "string_format",
        abort: false,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params)
    });
}
function _guid(Class, params) {
    return new Class({
        type: "string",
        format: "guid",
        check: "string_format",
        abort: false,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params)
    });
}
function _uuid(Class, params) {
    return new Class({
        type: "string",
        format: "uuid",
        check: "string_format",
        abort: false,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params)
    });
}
function _uuidv4(Class, params) {
    return new Class({
        type: "string",
        format: "uuid",
        check: "string_format",
        abort: false,
        version: "v4",
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params)
    });
}
function _uuidv6(Class, params) {
    return new Class({
        type: "string",
        format: "uuid",
        check: "string_format",
        abort: false,
        version: "v6",
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params)
    });
}
function _uuidv7(Class, params) {
    return new Class({
        type: "string",
        format: "uuid",
        check: "string_format",
        abort: false,
        version: "v7",
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params)
    });
}
function _url(Class, params) {
    return new Class({
        type: "string",
        format: "url",
        check: "string_format",
        abort: false,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params)
    });
}
function _emoji(Class, params) {
    return new Class({
        type: "string",
        format: "emoji",
        check: "string_format",
        abort: false,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params)
    });
}
function _nanoid(Class, params) {
    return new Class({
        type: "string",
        format: "nanoid",
        check: "string_format",
        abort: false,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params)
    });
}
function _cuid(Class, params) {
    return new Class({
        type: "string",
        format: "cuid",
        check: "string_format",
        abort: false,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params)
    });
}
function _cuid2(Class, params) {
    return new Class({
        type: "string",
        format: "cuid2",
        check: "string_format",
        abort: false,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params)
    });
}
function _ulid(Class, params) {
    return new Class({
        type: "string",
        format: "ulid",
        check: "string_format",
        abort: false,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params)
    });
}
function _xid(Class, params) {
    return new Class({
        type: "string",
        format: "xid",
        check: "string_format",
        abort: false,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params)
    });
}
function _ksuid(Class, params) {
    return new Class({
        type: "string",
        format: "ksuid",
        check: "string_format",
        abort: false,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params)
    });
}
function _ipv4(Class, params) {
    return new Class({
        type: "string",
        format: "ipv4",
        check: "string_format",
        abort: false,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params)
    });
}
function _ipv6(Class, params) {
    return new Class({
        type: "string",
        format: "ipv6",
        check: "string_format",
        abort: false,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params)
    });
}
function _cidrv4(Class, params) {
    return new Class({
        type: "string",
        format: "cidrv4",
        check: "string_format",
        abort: false,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params)
    });
}
function _cidrv6(Class, params) {
    return new Class({
        type: "string",
        format: "cidrv6",
        check: "string_format",
        abort: false,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params)
    });
}
function _base64(Class, params) {
    return new Class({
        type: "string",
        format: "base64",
        check: "string_format",
        abort: false,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params)
    });
}
function _base64url(Class, params) {
    return new Class({
        type: "string",
        format: "base64url",
        check: "string_format",
        abort: false,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params)
    });
}
function _e164(Class, params) {
    return new Class({
        type: "string",
        format: "e164",
        check: "string_format",
        abort: false,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params)
    });
}
function _jwt(Class, params) {
    return new Class({
        type: "string",
        format: "jwt",
        check: "string_format",
        abort: false,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params)
    });
}
const TimePrecision = {
    Any: null,
    Minute: -1,
    Second: 0,
    Millisecond: 3,
    Microsecond: 6
};
function _isoDateTime(Class, params) {
    return new Class({
        type: "string",
        format: "datetime",
        check: "string_format",
        offset: false,
        local: false,
        precision: null,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params)
    });
}
function _isoDate(Class, params) {
    return new Class({
        type: "string",
        format: "date",
        check: "string_format",
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params)
    });
}
function _isoTime(Class, params) {
    return new Class({
        type: "string",
        format: "time",
        check: "string_format",
        precision: null,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params)
    });
}
function _isoDuration(Class, params) {
    return new Class({
        type: "string",
        format: "duration",
        check: "string_format",
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params)
    });
}
function _number(Class, params) {
    return new Class({
        type: "number",
        checks: [],
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params)
    });
}
function _coercedNumber(Class, params) {
    return new Class({
        type: "number",
        coerce: true,
        checks: [],
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params)
    });
}
function _int(Class, params) {
    return new Class({
        type: "number",
        check: "number_format",
        abort: false,
        format: "safeint",
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params)
    });
}
function _float32(Class, params) {
    return new Class({
        type: "number",
        check: "number_format",
        abort: false,
        format: "float32",
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params)
    });
}
function _float64(Class, params) {
    return new Class({
        type: "number",
        check: "number_format",
        abort: false,
        format: "float64",
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params)
    });
}
function _int32(Class, params) {
    return new Class({
        type: "number",
        check: "number_format",
        abort: false,
        format: "int32",
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params)
    });
}
function _uint32(Class, params) {
    return new Class({
        type: "number",
        check: "number_format",
        abort: false,
        format: "uint32",
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params)
    });
}
function _boolean(Class, params) {
    return new Class({
        type: "boolean",
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params)
    });
}
function _coercedBoolean(Class, params) {
    return new Class({
        type: "boolean",
        coerce: true,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params)
    });
}
function _bigint(Class, params) {
    return new Class({
        type: "bigint",
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params)
    });
}
function _coercedBigint(Class, params) {
    return new Class({
        type: "bigint",
        coerce: true,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params)
    });
}
function _int64(Class, params) {
    return new Class({
        type: "bigint",
        check: "bigint_format",
        abort: false,
        format: "int64",
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params)
    });
}
function _uint64(Class, params) {
    return new Class({
        type: "bigint",
        check: "bigint_format",
        abort: false,
        format: "uint64",
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params)
    });
}
function _symbol(Class, params) {
    return new Class({
        type: "symbol",
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params)
    });
}
function _undefined(Class, params) {
    return new Class({
        type: "undefined",
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params)
    });
}
function _null(Class, params) {
    return new Class({
        type: "null",
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params)
    });
}
function _any(Class) {
    return new Class({
        type: "any"
    });
}
function _unknown(Class) {
    return new Class({
        type: "unknown"
    });
}
function _never(Class, params) {
    return new Class({
        type: "never",
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params)
    });
}
function _void(Class, params) {
    return new Class({
        type: "void",
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params)
    });
}
function _date(Class, params) {
    return new Class({
        type: "date",
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params)
    });
}
function _coercedDate(Class, params) {
    return new Class({
        type: "date",
        coerce: true,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params)
    });
}
function _nan(Class, params) {
    return new Class({
        type: "nan",
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params)
    });
}
function _lt(value, params) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodCheckLessThan"]({
        check: "less_than",
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params),
        value,
        inclusive: false
    });
}
function _lte(value, params) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodCheckLessThan"]({
        check: "less_than",
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params),
        value,
        inclusive: true
    });
}
;
function _gt(value, params) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodCheckGreaterThan"]({
        check: "greater_than",
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params),
        value,
        inclusive: false
    });
}
function _gte(value, params) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodCheckGreaterThan"]({
        check: "greater_than",
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params),
        value,
        inclusive: true
    });
}
;
function _positive(params) {
    return _gt(0, params);
}
function _negative(params) {
    return _lt(0, params);
}
function _nonpositive(params) {
    return _lte(0, params);
}
function _nonnegative(params) {
    return _gte(0, params);
}
function _multipleOf(value, params) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodCheckMultipleOf"]({
        check: "multiple_of",
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params),
        value
    });
}
function _maxSize(maximum, params) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodCheckMaxSize"]({
        check: "max_size",
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params),
        maximum
    });
}
function _minSize(minimum, params) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodCheckMinSize"]({
        check: "min_size",
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params),
        minimum
    });
}
function _size(size, params) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodCheckSizeEquals"]({
        check: "size_equals",
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params),
        size
    });
}
function _maxLength(maximum, params) {
    const ch = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodCheckMaxLength"]({
        check: "max_length",
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params),
        maximum
    });
    return ch;
}
function _minLength(minimum, params) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodCheckMinLength"]({
        check: "min_length",
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params),
        minimum
    });
}
function _length(length, params) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodCheckLengthEquals"]({
        check: "length_equals",
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params),
        length
    });
}
function _regex(pattern, params) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodCheckRegex"]({
        check: "string_format",
        format: "regex",
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params),
        pattern
    });
}
function _lowercase(params) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodCheckLowerCase"]({
        check: "string_format",
        format: "lowercase",
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params)
    });
}
function _uppercase(params) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodCheckUpperCase"]({
        check: "string_format",
        format: "uppercase",
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params)
    });
}
function _includes(includes, params) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodCheckIncludes"]({
        check: "string_format",
        format: "includes",
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params),
        includes
    });
}
function _startsWith(prefix, params) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodCheckStartsWith"]({
        check: "string_format",
        format: "starts_with",
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params),
        prefix
    });
}
function _endsWith(suffix, params) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodCheckEndsWith"]({
        check: "string_format",
        format: "ends_with",
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params),
        suffix
    });
}
function _property(property, schema, params) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodCheckProperty"]({
        check: "property",
        property,
        schema,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params)
    });
}
function _mime(types, params) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodCheckMimeType"]({
        check: "mime_type",
        mime: types,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params)
    });
}
function _overwrite(tx) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodCheckOverwrite"]({
        check: "overwrite",
        tx
    });
}
function _normalize(form) {
    return _overwrite((input)=>input.normalize(form));
}
function _trim() {
    return _overwrite((input)=>input.trim());
}
function _toLowerCase() {
    return _overwrite((input)=>input.toLowerCase());
}
function _toUpperCase() {
    return _overwrite((input)=>input.toUpperCase());
}
function _array(Class, element, params) {
    return new Class({
        type: "array",
        element,
        // get element() {
        //   return element;
        // },
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params)
    });
}
function _union(Class, options, params) {
    return new Class({
        type: "union",
        options,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params)
    });
}
function _discriminatedUnion(Class, discriminator, options, params) {
    return new Class({
        type: "union",
        options,
        discriminator,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params)
    });
}
function _intersection(Class, left, right) {
    return new Class({
        type: "intersection",
        left,
        right
    });
}
function _tuple(Class, items, _paramsOrRest, _params) {
    const hasRest = _paramsOrRest instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodType"];
    const params = hasRest ? _params : _paramsOrRest;
    const rest = hasRest ? _paramsOrRest : null;
    return new Class({
        type: "tuple",
        items,
        rest,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params)
    });
}
function _record(Class, keyType, valueType, params) {
    return new Class({
        type: "record",
        keyType,
        valueType,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params)
    });
}
function _map(Class, keyType, valueType, params) {
    return new Class({
        type: "map",
        keyType,
        valueType,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params)
    });
}
function _set(Class, valueType, params) {
    return new Class({
        type: "set",
        valueType,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params)
    });
}
function _enum(Class, values, params) {
    const entries = Array.isArray(values) ? Object.fromEntries(values.map((v)=>[
            v,
            v
        ])) : values;
    // if (Array.isArray(values)) {
    //   for (const value of values) {
    //     entries[value] = value;
    //   }
    // } else {
    //   Object.assign(entries, values);
    // }
    // const entries: util.EnumLike = {};
    // for (const val of values) {
    //   entries[val] = val;
    // }
    return new Class({
        type: "enum",
        entries,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params)
    });
}
function _nativeEnum(Class, entries, params) {
    return new Class({
        type: "enum",
        entries,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params)
    });
}
function _literal(Class, value, params) {
    return new Class({
        type: "literal",
        values: Array.isArray(value) ? value : [
            value
        ],
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params)
    });
}
function _file(Class, params) {
    return new Class({
        type: "file",
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params)
    });
}
function _transform(Class, fn) {
    return new Class({
        type: "transform",
        transform: fn
    });
}
function _optional(Class, innerType) {
    return new Class({
        type: "optional",
        innerType
    });
}
function _nullable(Class, innerType) {
    return new Class({
        type: "nullable",
        innerType
    });
}
function _default(Class, innerType, defaultValue) {
    return new Class({
        type: "default",
        innerType,
        get defaultValue () {
            return typeof defaultValue === "function" ? defaultValue() : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shallowClone"](defaultValue);
        }
    });
}
function _nonoptional(Class, innerType, params) {
    return new Class({
        type: "nonoptional",
        innerType,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params)
    });
}
function _success(Class, innerType) {
    return new Class({
        type: "success",
        innerType
    });
}
function _catch(Class, innerType, catchValue) {
    return new Class({
        type: "catch",
        innerType,
        catchValue: typeof catchValue === "function" ? catchValue : ()=>catchValue
    });
}
function _pipe(Class, in_, out) {
    return new Class({
        type: "pipe",
        in: in_,
        out
    });
}
function _readonly(Class, innerType) {
    return new Class({
        type: "readonly",
        innerType
    });
}
function _templateLiteral(Class, parts, params) {
    return new Class({
        type: "template_literal",
        parts,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params)
    });
}
function _lazy(Class, getter) {
    return new Class({
        type: "lazy",
        getter
    });
}
function _promise(Class, innerType) {
    return new Class({
        type: "promise",
        innerType
    });
}
function _custom(Class, fn, _params) {
    const norm = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](_params);
    var _norm_abort;
    (_norm_abort = norm.abort) !== null && _norm_abort !== void 0 ? _norm_abort : norm.abort = true; // default to abort:false
    const schema = new Class({
        type: "custom",
        check: "custom",
        fn: fn,
        ...norm
    });
    return schema;
}
function _refine(Class, fn, _params) {
    const schema = new Class({
        type: "custom",
        check: "custom",
        fn: fn,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](_params)
    });
    return schema;
}
function _superRefine(fn) {
    const ch = _check((payload)=>{
        payload.addIssue = (issue)=>{
            if (typeof issue === "string") {
                payload.issues.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["issue"](issue, payload.value, ch._zod.def));
            } else {
                // for Zod 3 backwards compatibility
                const _issue = issue;
                if (_issue.fatal) _issue.continue = false;
                var _issue_code;
                (_issue_code = _issue.code) !== null && _issue_code !== void 0 ? _issue_code : _issue.code = "custom";
                var _issue_input;
                (_issue_input = _issue.input) !== null && _issue_input !== void 0 ? _issue_input : _issue.input = payload.value;
                var _issue_inst;
                (_issue_inst = _issue.inst) !== null && _issue_inst !== void 0 ? _issue_inst : _issue.inst = ch;
                var _issue_continue;
                (_issue_continue = _issue.continue) !== null && _issue_continue !== void 0 ? _issue_continue : _issue.continue = !ch._zod.def.abort;
                payload.issues.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["issue"](_issue));
            }
        };
        return fn(payload.value, payload);
    });
    return ch;
}
function _check(fn, params) {
    const ch = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodCheck"]({
        check: "custom",
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params)
    });
    ch._zod.check = fn;
    return ch;
}
function _stringbool(Classes, _params) {
    const params = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](_params);
    var _params_truthy;
    let truthyArray = (_params_truthy = params.truthy) !== null && _params_truthy !== void 0 ? _params_truthy : [
        "true",
        "1",
        "yes",
        "on",
        "y",
        "enabled"
    ];
    var _params_falsy;
    let falsyArray = (_params_falsy = params.falsy) !== null && _params_falsy !== void 0 ? _params_falsy : [
        "false",
        "0",
        "no",
        "off",
        "n",
        "disabled"
    ];
    if (params.case !== "sensitive") {
        truthyArray = truthyArray.map((v)=>typeof v === "string" ? v.toLowerCase() : v);
        falsyArray = falsyArray.map((v)=>typeof v === "string" ? v.toLowerCase() : v);
    }
    const truthySet = new Set(truthyArray);
    const falsySet = new Set(falsyArray);
    var _Classes_Pipe;
    const _Pipe = (_Classes_Pipe = Classes.Pipe) !== null && _Classes_Pipe !== void 0 ? _Classes_Pipe : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodPipe"];
    var _Classes_Boolean;
    const _Boolean = (_Classes_Boolean = Classes.Boolean) !== null && _Classes_Boolean !== void 0 ? _Classes_Boolean : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodBoolean"];
    var _Classes_String;
    const _String = (_Classes_String = Classes.String) !== null && _Classes_String !== void 0 ? _Classes_String : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodString"];
    var _Classes_Transform;
    const _Transform = (_Classes_Transform = Classes.Transform) !== null && _Classes_Transform !== void 0 ? _Classes_Transform : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodTransform"];
    const tx = new _Transform({
        type: "transform",
        transform: (input, payload)=>{
            let data = input;
            if (params.case !== "sensitive") data = data.toLowerCase();
            if (truthySet.has(data)) {
                return true;
            } else if (falsySet.has(data)) {
                return false;
            } else {
                payload.issues.push({
                    code: "invalid_value",
                    expected: "stringbool",
                    values: [
                        ...truthySet,
                        ...falsySet
                    ],
                    input: payload.value,
                    inst: tx,
                    continue: false
                });
                return {};
            }
        },
        error: params.error
    });
    // params.error;
    const innerPipe = new _Pipe({
        type: "pipe",
        in: new _String({
            type: "string",
            error: params.error
        }),
        out: tx,
        error: params.error
    });
    const outerPipe = new _Pipe({
        type: "pipe",
        in: innerPipe,
        out: new _Boolean({
            type: "boolean",
            error: params.error
        }),
        error: params.error
    });
    return outerPipe;
}
function _stringFormat(Class, format, fnOrRegex) {
    let _params = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const params = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](_params);
    const def = {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](_params),
        check: "string_format",
        type: "string",
        format,
        fn: typeof fnOrRegex === "function" ? fnOrRegex : (val)=>fnOrRegex.test(val),
        ...params
    };
    if (fnOrRegex instanceof RegExp) {
        def.pattern = fnOrRegex;
    }
    const inst = new Class(def);
    return inst;
}
}),
"[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/function.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "$ZodFunction",
    ()=>$ZodFunction,
    "function",
    ()=>_function
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/api.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$parse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/parse.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/schemas.js [app-client] (ecmascript) <locals>");
;
;
;
;
class $ZodFunction {
    implement(func) {
        var _this = this;
        if (typeof func !== "function") {
            throw new Error("implement() must be called with a function");
        }
        const impl = function() {
            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                args[_key] = arguments[_key];
            }
            const parsedArgs = _this._def.input ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$parse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parse"])(_this._def.input, args, undefined, {
                callee: impl
            }) : args;
            if (!Array.isArray(parsedArgs)) {
                throw new Error("Invalid arguments schema: not an array or tuple schema.");
            }
            const output = func(...parsedArgs);
            return _this._def.output ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$parse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parse"])(_this._def.output, output, undefined, {
                callee: impl
            }) : output;
        };
        return impl;
    }
    implementAsync(func) {
        var _this = this;
        if (typeof func !== "function") {
            throw new Error("implement() must be called with a function");
        }
        const impl = async function() {
            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                args[_key] = arguments[_key];
            }
            const parsedArgs = _this._def.input ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$parse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseAsync"])(_this._def.input, args, undefined, {
                callee: impl
            }) : args;
            if (!Array.isArray(parsedArgs)) {
                throw new Error("Invalid arguments schema: not an array or tuple schema.");
            }
            const output = await func(...parsedArgs);
            return _this._def.output ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$parse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseAsync"])(_this._def.output, output, undefined, {
                callee: impl
            }) : output;
        };
        return impl;
    }
    input() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        const F = this.constructor;
        if (Array.isArray(args[0])) {
            return new F({
                type: "function",
                input: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodTuple"]({
                    type: "tuple",
                    items: args[0],
                    rest: args[1]
                }),
                output: this._def.output
            });
        }
        return new F({
            type: "function",
            input: args[0],
            output: this._def.output
        });
    }
    output(output) {
        const F = this.constructor;
        return new F({
            type: "function",
            input: this._def.input,
            output
        });
    }
    constructor(def){
        this._def = def;
        this.def = def;
    }
}
function _function(params) {
    var _params_input, _params_output;
    return new $ZodFunction({
        type: "function",
        input: Array.isArray(params === null || params === void 0 ? void 0 : params.input) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_tuple"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodTuple"], params === null || params === void 0 ? void 0 : params.input) : (_params_input = params === null || params === void 0 ? void 0 : params.input) !== null && _params_input !== void 0 ? _params_input : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_array"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodArray"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_unknown"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodUnknown"])),
        output: (_params_output = params === null || params === void 0 ? void 0 : params.output) !== null && _params_output !== void 0 ? _params_output : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_unknown"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodUnknown"])
    });
}
;
}),
"[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "$ZodAny",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodAny"],
    "$ZodArray",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodArray"],
    "$ZodAsyncError",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodAsyncError"],
    "$ZodBase64",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodBase64"],
    "$ZodBase64URL",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodBase64URL"],
    "$ZodBigInt",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodBigInt"],
    "$ZodBigIntFormat",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodBigIntFormat"],
    "$ZodBoolean",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodBoolean"],
    "$ZodCIDRv4",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodCIDRv4"],
    "$ZodCIDRv6",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodCIDRv6"],
    "$ZodCUID",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodCUID"],
    "$ZodCUID2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodCUID2"],
    "$ZodCatch",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodCatch"],
    "$ZodCheck",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodCheck"],
    "$ZodCheckBigIntFormat",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodCheckBigIntFormat"],
    "$ZodCheckEndsWith",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodCheckEndsWith"],
    "$ZodCheckGreaterThan",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodCheckGreaterThan"],
    "$ZodCheckIncludes",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodCheckIncludes"],
    "$ZodCheckLengthEquals",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodCheckLengthEquals"],
    "$ZodCheckLessThan",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodCheckLessThan"],
    "$ZodCheckLowerCase",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodCheckLowerCase"],
    "$ZodCheckMaxLength",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodCheckMaxLength"],
    "$ZodCheckMaxSize",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodCheckMaxSize"],
    "$ZodCheckMimeType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodCheckMimeType"],
    "$ZodCheckMinLength",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodCheckMinLength"],
    "$ZodCheckMinSize",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodCheckMinSize"],
    "$ZodCheckMultipleOf",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodCheckMultipleOf"],
    "$ZodCheckNumberFormat",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodCheckNumberFormat"],
    "$ZodCheckOverwrite",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodCheckOverwrite"],
    "$ZodCheckProperty",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodCheckProperty"],
    "$ZodCheckRegex",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodCheckRegex"],
    "$ZodCheckSizeEquals",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodCheckSizeEquals"],
    "$ZodCheckStartsWith",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodCheckStartsWith"],
    "$ZodCheckStringFormat",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodCheckStringFormat"],
    "$ZodCheckUpperCase",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodCheckUpperCase"],
    "$ZodCustom",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodCustom"],
    "$ZodCustomStringFormat",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodCustomStringFormat"],
    "$ZodDate",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodDate"],
    "$ZodDefault",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodDefault"],
    "$ZodDiscriminatedUnion",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodDiscriminatedUnion"],
    "$ZodE164",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodE164"],
    "$ZodEmail",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodEmail"],
    "$ZodEmoji",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodEmoji"],
    "$ZodEnum",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodEnum"],
    "$ZodError",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodError"],
    "$ZodFile",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodFile"],
    "$ZodFunction",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodFunction"],
    "$ZodGUID",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodGUID"],
    "$ZodIPv4",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodIPv4"],
    "$ZodIPv6",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodIPv6"],
    "$ZodISODate",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodISODate"],
    "$ZodISODateTime",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodISODateTime"],
    "$ZodISODuration",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodISODuration"],
    "$ZodISOTime",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodISOTime"],
    "$ZodIntersection",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodIntersection"],
    "$ZodJWT",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodJWT"],
    "$ZodKSUID",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodKSUID"],
    "$ZodLazy",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodLazy"],
    "$ZodLiteral",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodLiteral"],
    "$ZodMap",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodMap"],
    "$ZodNaN",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodNaN"],
    "$ZodNanoID",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodNanoID"],
    "$ZodNever",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodNever"],
    "$ZodNonOptional",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodNonOptional"],
    "$ZodNull",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodNull"],
    "$ZodNullable",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodNullable"],
    "$ZodNumber",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodNumber"],
    "$ZodNumberFormat",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodNumberFormat"],
    "$ZodObject",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodObject"],
    "$ZodOptional",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodOptional"],
    "$ZodPipe",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodPipe"],
    "$ZodPrefault",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodPrefault"],
    "$ZodPromise",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodPromise"],
    "$ZodReadonly",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodReadonly"],
    "$ZodRealError",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodRealError"],
    "$ZodRecord",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodRecord"],
    "$ZodRegistry",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$registries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodRegistry"],
    "$ZodSet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodSet"],
    "$ZodString",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodString"],
    "$ZodStringFormat",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodStringFormat"],
    "$ZodSuccess",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodSuccess"],
    "$ZodSymbol",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodSymbol"],
    "$ZodTemplateLiteral",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodTemplateLiteral"],
    "$ZodTransform",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodTransform"],
    "$ZodTuple",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodTuple"],
    "$ZodType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodType"],
    "$ZodULID",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodULID"],
    "$ZodURL",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodURL"],
    "$ZodUUID",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodUUID"],
    "$ZodUndefined",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodUndefined"],
    "$ZodUnion",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodUnion"],
    "$ZodUnknown",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodUnknown"],
    "$ZodVoid",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodVoid"],
    "$ZodXID",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodXID"],
    "$brand",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$brand"],
    "$constructor",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"],
    "$input",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$registries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$input"],
    "$output",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$registries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$output"],
    "Doc",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$doc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Doc"],
    "JSONSchema",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$json$2d$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__,
    "JSONSchemaGenerator",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$to$2d$json$2d$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JSONSchemaGenerator"],
    "NEVER",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NEVER"],
    "TimePrecision",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TimePrecision"],
    "_any",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_any"],
    "_array",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_array"],
    "_base64",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_base64"],
    "_base64url",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_base64url"],
    "_bigint",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_bigint"],
    "_boolean",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_boolean"],
    "_catch",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_catch"],
    "_check",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_check"],
    "_cidrv4",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_cidrv4"],
    "_cidrv6",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_cidrv6"],
    "_coercedBigint",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_coercedBigint"],
    "_coercedBoolean",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_coercedBoolean"],
    "_coercedDate",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_coercedDate"],
    "_coercedNumber",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_coercedNumber"],
    "_coercedString",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_coercedString"],
    "_cuid",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_cuid"],
    "_cuid2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_cuid2"],
    "_custom",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_custom"],
    "_date",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_date"],
    "_default",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_default"],
    "_discriminatedUnion",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_discriminatedUnion"],
    "_e164",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_e164"],
    "_email",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_email"],
    "_emoji",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_emoji"],
    "_endsWith",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_endsWith"],
    "_enum",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_enum"],
    "_file",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_file"],
    "_float32",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_float32"],
    "_float64",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_float64"],
    "_gt",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_gt"],
    "_gte",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_gte"],
    "_guid",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_guid"],
    "_includes",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_includes"],
    "_int",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_int"],
    "_int32",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_int32"],
    "_int64",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_int64"],
    "_intersection",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_intersection"],
    "_ipv4",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_ipv4"],
    "_ipv6",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_ipv6"],
    "_isoDate",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_isoDate"],
    "_isoDateTime",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_isoDateTime"],
    "_isoDuration",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_isoDuration"],
    "_isoTime",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_isoTime"],
    "_jwt",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_jwt"],
    "_ksuid",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_ksuid"],
    "_lazy",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_lazy"],
    "_length",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_length"],
    "_literal",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_literal"],
    "_lowercase",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_lowercase"],
    "_lt",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_lt"],
    "_lte",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_lte"],
    "_map",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_map"],
    "_max",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_max"],
    "_maxLength",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_maxLength"],
    "_maxSize",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_maxSize"],
    "_mime",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_mime"],
    "_min",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_min"],
    "_minLength",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_minLength"],
    "_minSize",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_minSize"],
    "_multipleOf",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_multipleOf"],
    "_nan",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_nan"],
    "_nanoid",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_nanoid"],
    "_nativeEnum",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_nativeEnum"],
    "_negative",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_negative"],
    "_never",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_never"],
    "_nonnegative",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_nonnegative"],
    "_nonoptional",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_nonoptional"],
    "_nonpositive",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_nonpositive"],
    "_normalize",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_normalize"],
    "_null",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_null"],
    "_nullable",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_nullable"],
    "_number",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_number"],
    "_optional",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_optional"],
    "_overwrite",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_overwrite"],
    "_parse",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$parse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_parse"],
    "_parseAsync",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$parse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_parseAsync"],
    "_pipe",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_pipe"],
    "_positive",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_positive"],
    "_promise",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_promise"],
    "_property",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_property"],
    "_readonly",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_readonly"],
    "_record",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_record"],
    "_refine",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_refine"],
    "_regex",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_regex"],
    "_safeParse",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$parse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_safeParse"],
    "_safeParseAsync",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$parse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_safeParseAsync"],
    "_set",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_set"],
    "_size",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_size"],
    "_startsWith",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_startsWith"],
    "_string",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_string"],
    "_stringFormat",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_stringFormat"],
    "_stringbool",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_stringbool"],
    "_success",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_success"],
    "_superRefine",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_superRefine"],
    "_symbol",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_symbol"],
    "_templateLiteral",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_templateLiteral"],
    "_toLowerCase",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_toLowerCase"],
    "_toUpperCase",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_toUpperCase"],
    "_transform",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_transform"],
    "_trim",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_trim"],
    "_tuple",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_tuple"],
    "_uint32",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_uint32"],
    "_uint64",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_uint64"],
    "_ulid",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_ulid"],
    "_undefined",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_undefined"],
    "_union",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_union"],
    "_unknown",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_unknown"],
    "_uppercase",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_uppercase"],
    "_url",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_url"],
    "_uuid",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_uuid"],
    "_uuidv4",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_uuidv4"],
    "_uuidv6",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_uuidv6"],
    "_uuidv7",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_uuidv7"],
    "_void",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_void"],
    "_xid",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_xid"],
    "clone",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clone"],
    "config",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["config"],
    "flattenError",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flattenError"],
    "formatError",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatError"],
    "function",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["function"],
    "globalConfig",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalConfig"],
    "globalRegistry",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$registries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalRegistry"],
    "isValidBase64",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidBase64"],
    "isValidBase64URL",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidBase64URL"],
    "isValidJWT",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidJWT"],
    "locales",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$locales$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__,
    "parse",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$parse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parse"],
    "parseAsync",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$parse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseAsync"],
    "prettifyError",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prettifyError"],
    "regexes",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$regexes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__,
    "registry",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$registries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registry"],
    "safeParse",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$parse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeParse"],
    "safeParseAsync",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$parse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeParseAsync"],
    "toDotPath",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toDotPath"],
    "toJSONSchema",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$to$2d$json$2d$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toJSONSchema"],
    "treeifyError",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["treeifyError"],
    "util",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__,
    "version",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$versions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["version"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$parse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/parse.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/schemas.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/checks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$versions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/versions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$regexes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/regexes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$locales$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/locales/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$registries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/registries.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$doc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/doc.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/function.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/api.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$to$2d$json$2d$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/to-json-schema.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$json$2d$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/json-schema.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/regexes.js [app-client] (ecmascript) <export * as regexes>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "regexes",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$regexes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$regexes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/regexes.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/util.js [app-client] (ecmascript) <export * as util>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "util",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/util.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/api.js [app-client] (ecmascript) <export _overwrite as overwrite>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "overwrite",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_overwrite"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/api.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/api.js [app-client] (ecmascript) <export _regex as regex>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "regex",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_regex"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/api.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/api.js [app-client] (ecmascript) <export _includes as includes>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "includes",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_includes"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/api.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/api.js [app-client] (ecmascript) <export _startsWith as startsWith>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "startsWith",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_startsWith"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/api.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/api.js [app-client] (ecmascript) <export _endsWith as endsWith>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "endsWith",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_endsWith"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/api.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/api.js [app-client] (ecmascript) <export _minLength as minLength>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "minLength",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_minLength"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/api.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/api.js [app-client] (ecmascript) <export _maxLength as maxLength>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "maxLength",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_maxLength"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/api.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/api.js [app-client] (ecmascript) <export _length as length>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "length",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_length"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/api.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/api.js [app-client] (ecmascript) <export _lowercase as lowercase>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "lowercase",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_lowercase"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/api.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/api.js [app-client] (ecmascript) <export _uppercase as uppercase>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "uppercase",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_uppercase"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/api.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/api.js [app-client] (ecmascript) <export _trim as trim>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "trim",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_trim"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/api.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/api.js [app-client] (ecmascript) <export _normalize as normalize>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "normalize",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_normalize"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/api.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/api.js [app-client] (ecmascript) <export _toLowerCase as toLowerCase>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "toLowerCase",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_toLowerCase"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/api.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/api.js [app-client] (ecmascript) <export _toUpperCase as toUpperCase>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "toUpperCase",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_toUpperCase"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/api.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/api.js [app-client] (ecmascript) <export _gt as gt>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "gt",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_gt"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/api.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/api.js [app-client] (ecmascript) <export _gte as gte>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "gte",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_gte"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/api.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/api.js [app-client] (ecmascript) <export _lt as lt>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "lt",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_lt"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/api.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/api.js [app-client] (ecmascript) <export _lte as lte>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "lte",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_lte"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/api.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/api.js [app-client] (ecmascript) <export _multipleOf as multipleOf>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "multipleOf",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_multipleOf"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/api.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/classic/schemas.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ZodAny",
    ()=>ZodAny,
    "ZodArray",
    ()=>ZodArray,
    "ZodBase64",
    ()=>ZodBase64,
    "ZodBase64URL",
    ()=>ZodBase64URL,
    "ZodBigInt",
    ()=>ZodBigInt,
    "ZodBigIntFormat",
    ()=>ZodBigIntFormat,
    "ZodBoolean",
    ()=>ZodBoolean,
    "ZodCIDRv4",
    ()=>ZodCIDRv4,
    "ZodCIDRv6",
    ()=>ZodCIDRv6,
    "ZodCUID",
    ()=>ZodCUID,
    "ZodCUID2",
    ()=>ZodCUID2,
    "ZodCatch",
    ()=>ZodCatch,
    "ZodCustom",
    ()=>ZodCustom,
    "ZodCustomStringFormat",
    ()=>ZodCustomStringFormat,
    "ZodDate",
    ()=>ZodDate,
    "ZodDefault",
    ()=>ZodDefault,
    "ZodDiscriminatedUnion",
    ()=>ZodDiscriminatedUnion,
    "ZodE164",
    ()=>ZodE164,
    "ZodEmail",
    ()=>ZodEmail,
    "ZodEmoji",
    ()=>ZodEmoji,
    "ZodEnum",
    ()=>ZodEnum,
    "ZodFile",
    ()=>ZodFile,
    "ZodGUID",
    ()=>ZodGUID,
    "ZodIPv4",
    ()=>ZodIPv4,
    "ZodIPv6",
    ()=>ZodIPv6,
    "ZodIntersection",
    ()=>ZodIntersection,
    "ZodJWT",
    ()=>ZodJWT,
    "ZodKSUID",
    ()=>ZodKSUID,
    "ZodLazy",
    ()=>ZodLazy,
    "ZodLiteral",
    ()=>ZodLiteral,
    "ZodMap",
    ()=>ZodMap,
    "ZodNaN",
    ()=>ZodNaN,
    "ZodNanoID",
    ()=>ZodNanoID,
    "ZodNever",
    ()=>ZodNever,
    "ZodNonOptional",
    ()=>ZodNonOptional,
    "ZodNull",
    ()=>ZodNull,
    "ZodNullable",
    ()=>ZodNullable,
    "ZodNumber",
    ()=>ZodNumber,
    "ZodNumberFormat",
    ()=>ZodNumberFormat,
    "ZodObject",
    ()=>ZodObject,
    "ZodOptional",
    ()=>ZodOptional,
    "ZodPipe",
    ()=>ZodPipe,
    "ZodPrefault",
    ()=>ZodPrefault,
    "ZodPromise",
    ()=>ZodPromise,
    "ZodReadonly",
    ()=>ZodReadonly,
    "ZodRecord",
    ()=>ZodRecord,
    "ZodSet",
    ()=>ZodSet,
    "ZodString",
    ()=>ZodString,
    "ZodStringFormat",
    ()=>ZodStringFormat,
    "ZodSuccess",
    ()=>ZodSuccess,
    "ZodSymbol",
    ()=>ZodSymbol,
    "ZodTemplateLiteral",
    ()=>ZodTemplateLiteral,
    "ZodTransform",
    ()=>ZodTransform,
    "ZodTuple",
    ()=>ZodTuple,
    "ZodType",
    ()=>ZodType,
    "ZodULID",
    ()=>ZodULID,
    "ZodURL",
    ()=>ZodURL,
    "ZodUUID",
    ()=>ZodUUID,
    "ZodUndefined",
    ()=>ZodUndefined,
    "ZodUnion",
    ()=>ZodUnion,
    "ZodUnknown",
    ()=>ZodUnknown,
    "ZodVoid",
    ()=>ZodVoid,
    "ZodXID",
    ()=>ZodXID,
    "_ZodString",
    ()=>_ZodString,
    "_default",
    ()=>_default,
    "any",
    ()=>any,
    "array",
    ()=>array,
    "base64",
    ()=>base64,
    "base64url",
    ()=>base64url,
    "bigint",
    ()=>bigint,
    "boolean",
    ()=>boolean,
    "catch",
    ()=>_catch,
    "check",
    ()=>check,
    "cidrv4",
    ()=>cidrv4,
    "cidrv6",
    ()=>cidrv6,
    "cuid",
    ()=>cuid,
    "cuid2",
    ()=>cuid2,
    "custom",
    ()=>custom,
    "date",
    ()=>date,
    "discriminatedUnion",
    ()=>discriminatedUnion,
    "e164",
    ()=>e164,
    "email",
    ()=>email,
    "emoji",
    ()=>emoji,
    "enum",
    ()=>_enum,
    "file",
    ()=>file,
    "float32",
    ()=>float32,
    "float64",
    ()=>float64,
    "guid",
    ()=>guid,
    "hostname",
    ()=>hostname,
    "instanceof",
    ()=>_instanceof,
    "int",
    ()=>int,
    "int32",
    ()=>int32,
    "int64",
    ()=>int64,
    "intersection",
    ()=>intersection,
    "ipv4",
    ()=>ipv4,
    "ipv6",
    ()=>ipv6,
    "json",
    ()=>json,
    "jwt",
    ()=>jwt,
    "keyof",
    ()=>keyof,
    "ksuid",
    ()=>ksuid,
    "lazy",
    ()=>lazy,
    "literal",
    ()=>literal,
    "looseObject",
    ()=>looseObject,
    "map",
    ()=>map,
    "nan",
    ()=>nan,
    "nanoid",
    ()=>nanoid,
    "nativeEnum",
    ()=>nativeEnum,
    "never",
    ()=>never,
    "nonoptional",
    ()=>nonoptional,
    "null",
    ()=>_null,
    "nullable",
    ()=>nullable,
    "nullish",
    ()=>nullish,
    "number",
    ()=>number,
    "object",
    ()=>object,
    "optional",
    ()=>optional,
    "partialRecord",
    ()=>partialRecord,
    "pipe",
    ()=>pipe,
    "prefault",
    ()=>prefault,
    "preprocess",
    ()=>preprocess,
    "promise",
    ()=>promise,
    "readonly",
    ()=>readonly,
    "record",
    ()=>record,
    "refine",
    ()=>refine,
    "set",
    ()=>set,
    "strictObject",
    ()=>strictObject,
    "string",
    ()=>string,
    "stringFormat",
    ()=>stringFormat,
    "stringbool",
    ()=>stringbool,
    "success",
    ()=>success,
    "superRefine",
    ()=>superRefine,
    "symbol",
    ()=>symbol,
    "templateLiteral",
    ()=>templateLiteral,
    "transform",
    ()=>transform,
    "tuple",
    ()=>tuple,
    "uint32",
    ()=>uint32,
    "uint64",
    ()=>uint64,
    "ulid",
    ()=>ulid,
    "undefined",
    ()=>_undefined,
    "union",
    ()=>union,
    "unknown",
    ()=>unknown,
    "url",
    ()=>url,
    "uuid",
    ()=>uuid,
    "uuidv4",
    ()=>uuidv4,
    "uuidv6",
    ()=>uuidv6,
    "uuidv7",
    ()=>uuidv7,
    "void",
    ()=>_void,
    "xid",
    ()=>xid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/schemas.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$registries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/registries.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/api.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$regexes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__regexes$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/regexes.js [app-client] (ecmascript) <export * as regexes>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/checks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/util.js [app-client] (ecmascript) <export * as util>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$overwrite__as__overwrite$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/api.js [app-client] (ecmascript) <export _overwrite as overwrite>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$regex__as__regex$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/api.js [app-client] (ecmascript) <export _regex as regex>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$includes__as__includes$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/api.js [app-client] (ecmascript) <export _includes as includes>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$startsWith__as__startsWith$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/api.js [app-client] (ecmascript) <export _startsWith as startsWith>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$endsWith__as__endsWith$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/api.js [app-client] (ecmascript) <export _endsWith as endsWith>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$minLength__as__minLength$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/api.js [app-client] (ecmascript) <export _minLength as minLength>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$maxLength__as__maxLength$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/api.js [app-client] (ecmascript) <export _maxLength as maxLength>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$length__as__length$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/api.js [app-client] (ecmascript) <export _length as length>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$lowercase__as__lowercase$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/api.js [app-client] (ecmascript) <export _lowercase as lowercase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$uppercase__as__uppercase$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/api.js [app-client] (ecmascript) <export _uppercase as uppercase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$trim__as__trim$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/api.js [app-client] (ecmascript) <export _trim as trim>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$normalize__as__normalize$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/api.js [app-client] (ecmascript) <export _normalize as normalize>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$toLowerCase__as__toLowerCase$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/api.js [app-client] (ecmascript) <export _toLowerCase as toLowerCase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$toUpperCase__as__toUpperCase$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/api.js [app-client] (ecmascript) <export _toUpperCase as toUpperCase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$gt__as__gt$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/api.js [app-client] (ecmascript) <export _gt as gt>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$gte__as__gte$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/api.js [app-client] (ecmascript) <export _gte as gte>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$lt__as__lt$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/api.js [app-client] (ecmascript) <export _lt as lt>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$lte__as__lte$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/api.js [app-client] (ecmascript) <export _lte as lte>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$multipleOf__as__multipleOf$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/api.js [app-client] (ecmascript) <export _multipleOf as multipleOf>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$iso$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/classic/iso.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$parse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/classic/parse.js [app-client] (ecmascript)");
;
;
;
;
;
const ZodType = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("ZodType", (inst, def)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodType"].init(inst, def);
    inst.def = def;
    Object.defineProperty(inst, "_def", {
        value: def
    });
    // base methods
    inst.check = function() {
        for(var _len = arguments.length, checks = new Array(_len), _key = 0; _key < _len; _key++){
            checks[_key] = arguments[_key];
        }
        var _def_checks;
        return inst.clone({
            ...def,
            checks: [
                ...(_def_checks = def.checks) !== null && _def_checks !== void 0 ? _def_checks : [],
                ...checks.map((ch)=>typeof ch === "function" ? {
                        _zod: {
                            check: ch,
                            def: {
                                check: "custom"
                            },
                            onattach: []
                        }
                    } : ch)
            ]
        });
    };
    inst.clone = (def, params)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clone"](inst, def, params);
    inst.brand = ()=>inst;
    inst.register = (reg, meta)=>{
        reg.add(inst, meta);
        return inst;
    };
    // parsing
    inst.parse = (data, params)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$parse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parse"](inst, data, params, {
            callee: inst.parse
        });
    inst.safeParse = (data, params)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$parse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeParse"](inst, data, params);
    inst.parseAsync = async (data, params)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$parse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseAsync"](inst, data, params, {
            callee: inst.parseAsync
        });
    inst.safeParseAsync = async (data, params)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$parse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeParseAsync"](inst, data, params);
    inst.spa = inst.safeParseAsync;
    // refinements
    inst.refine = (check, params)=>inst.check(refine(check, params));
    inst.superRefine = (refinement)=>inst.check(superRefine(refinement));
    inst.overwrite = (fn)=>inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$overwrite__as__overwrite$3e$__["overwrite"](fn));
    // wrappers
    inst.optional = ()=>optional(inst);
    inst.nullable = ()=>nullable(inst);
    inst.nullish = ()=>optional(nullable(inst));
    inst.nonoptional = (params)=>nonoptional(inst, params);
    inst.array = ()=>array(inst);
    inst.or = (arg)=>union([
            inst,
            arg
        ]);
    inst.and = (arg)=>intersection(inst, arg);
    inst.transform = (tx)=>pipe(inst, transform(tx));
    inst.default = (def)=>_default(inst, def);
    inst.prefault = (def)=>prefault(inst, def);
    // inst.coalesce = (def, params) => coalesce(inst, def, params);
    inst.catch = (params)=>_catch(inst, params);
    inst.pipe = (target)=>pipe(inst, target);
    inst.readonly = ()=>readonly(inst);
    // meta
    inst.describe = (description)=>{
        const cl = inst.clone();
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$registries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalRegistry"].add(cl, {
            description
        });
        return cl;
    };
    Object.defineProperty(inst, "description", {
        get () {
            var _core_globalRegistry_get;
            return (_core_globalRegistry_get = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$registries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalRegistry"].get(inst)) === null || _core_globalRegistry_get === void 0 ? void 0 : _core_globalRegistry_get.description;
        },
        configurable: true
    });
    inst.meta = function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        if (args.length === 0) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$registries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalRegistry"].get(inst);
        }
        const cl = inst.clone();
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$registries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalRegistry"].add(cl, args[0]);
        return cl;
    };
    // helpers
    inst.isOptional = ()=>inst.safeParse(undefined).success;
    inst.isNullable = ()=>inst.safeParse(null).success;
    return inst;
});
const _ZodString = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("_ZodString", (inst, def)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodString"].init(inst, def);
    ZodType.init(inst, def);
    const bag = inst._zod.bag;
    var _bag_format;
    inst.format = (_bag_format = bag.format) !== null && _bag_format !== void 0 ? _bag_format : null;
    var _bag_minimum;
    inst.minLength = (_bag_minimum = bag.minimum) !== null && _bag_minimum !== void 0 ? _bag_minimum : null;
    var _bag_maximum;
    inst.maxLength = (_bag_maximum = bag.maximum) !== null && _bag_maximum !== void 0 ? _bag_maximum : null;
    // validations
    inst.regex = function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        return inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$regex__as__regex$3e$__["regex"](...args));
    };
    inst.includes = function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        return inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$includes__as__includes$3e$__["includes"](...args));
    };
    inst.startsWith = function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        return inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$startsWith__as__startsWith$3e$__["startsWith"](...args));
    };
    inst.endsWith = function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        return inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$endsWith__as__endsWith$3e$__["endsWith"](...args));
    };
    inst.min = function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        return inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$minLength__as__minLength$3e$__["minLength"](...args));
    };
    inst.max = function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        return inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$maxLength__as__maxLength$3e$__["maxLength"](...args));
    };
    inst.length = function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        return inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$length__as__length$3e$__["length"](...args));
    };
    inst.nonempty = function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        return inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$minLength__as__minLength$3e$__["minLength"](1, ...args));
    };
    inst.lowercase = (params)=>inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$lowercase__as__lowercase$3e$__["lowercase"](params));
    inst.uppercase = (params)=>inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$uppercase__as__uppercase$3e$__["uppercase"](params));
    // transforms
    inst.trim = ()=>inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$trim__as__trim$3e$__["trim"]());
    inst.normalize = function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        return inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$normalize__as__normalize$3e$__["normalize"](...args));
    };
    inst.toLowerCase = ()=>inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$toLowerCase__as__toLowerCase$3e$__["toLowerCase"]());
    inst.toUpperCase = ()=>inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$toUpperCase__as__toUpperCase$3e$__["toUpperCase"]());
});
const ZodString = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("ZodString", (inst, def)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodString"].init(inst, def);
    _ZodString.init(inst, def);
    inst.email = (params)=>inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_email"](ZodEmail, params));
    inst.url = (params)=>inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_url"](ZodURL, params));
    inst.jwt = (params)=>inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_jwt"](ZodJWT, params));
    inst.emoji = (params)=>inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_emoji"](ZodEmoji, params));
    inst.guid = (params)=>inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_guid"](ZodGUID, params));
    inst.uuid = (params)=>inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_uuid"](ZodUUID, params));
    inst.uuidv4 = (params)=>inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_uuidv4"](ZodUUID, params));
    inst.uuidv6 = (params)=>inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_uuidv6"](ZodUUID, params));
    inst.uuidv7 = (params)=>inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_uuidv7"](ZodUUID, params));
    inst.nanoid = (params)=>inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_nanoid"](ZodNanoID, params));
    inst.guid = (params)=>inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_guid"](ZodGUID, params));
    inst.cuid = (params)=>inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_cuid"](ZodCUID, params));
    inst.cuid2 = (params)=>inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_cuid2"](ZodCUID2, params));
    inst.ulid = (params)=>inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_ulid"](ZodULID, params));
    inst.base64 = (params)=>inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_base64"](ZodBase64, params));
    inst.base64url = (params)=>inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_base64url"](ZodBase64URL, params));
    inst.xid = (params)=>inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_xid"](ZodXID, params));
    inst.ksuid = (params)=>inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_ksuid"](ZodKSUID, params));
    inst.ipv4 = (params)=>inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_ipv4"](ZodIPv4, params));
    inst.ipv6 = (params)=>inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_ipv6"](ZodIPv6, params));
    inst.cidrv4 = (params)=>inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_cidrv4"](ZodCIDRv4, params));
    inst.cidrv6 = (params)=>inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_cidrv6"](ZodCIDRv6, params));
    inst.e164 = (params)=>inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_e164"](ZodE164, params));
    // iso
    inst.datetime = (params)=>inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$iso$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["datetime"](params));
    inst.date = (params)=>inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$iso$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["date"](params));
    inst.time = (params)=>inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$iso$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["time"](params));
    inst.duration = (params)=>inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$iso$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["duration"](params));
});
function string(params) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_string"](ZodString, params);
}
const ZodStringFormat = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("ZodStringFormat", (inst, def)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodStringFormat"].init(inst, def);
    _ZodString.init(inst, def);
});
const ZodEmail = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("ZodEmail", (inst, def)=>{
    // ZodStringFormat.init(inst, def);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodEmail"].init(inst, def);
    ZodStringFormat.init(inst, def);
});
function email(params) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_email"](ZodEmail, params);
}
const ZodGUID = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("ZodGUID", (inst, def)=>{
    // ZodStringFormat.init(inst, def);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodGUID"].init(inst, def);
    ZodStringFormat.init(inst, def);
});
function guid(params) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_guid"](ZodGUID, params);
}
const ZodUUID = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("ZodUUID", (inst, def)=>{
    // ZodStringFormat.init(inst, def);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodUUID"].init(inst, def);
    ZodStringFormat.init(inst, def);
});
function uuid(params) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_uuid"](ZodUUID, params);
}
function uuidv4(params) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_uuidv4"](ZodUUID, params);
}
function uuidv6(params) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_uuidv6"](ZodUUID, params);
}
function uuidv7(params) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_uuidv7"](ZodUUID, params);
}
const ZodURL = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("ZodURL", (inst, def)=>{
    // ZodStringFormat.init(inst, def);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodURL"].init(inst, def);
    ZodStringFormat.init(inst, def);
});
function url(params) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_url"](ZodURL, params);
}
const ZodEmoji = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("ZodEmoji", (inst, def)=>{
    // ZodStringFormat.init(inst, def);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodEmoji"].init(inst, def);
    ZodStringFormat.init(inst, def);
});
function emoji(params) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_emoji"](ZodEmoji, params);
}
const ZodNanoID = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("ZodNanoID", (inst, def)=>{
    // ZodStringFormat.init(inst, def);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodNanoID"].init(inst, def);
    ZodStringFormat.init(inst, def);
});
function nanoid(params) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_nanoid"](ZodNanoID, params);
}
const ZodCUID = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("ZodCUID", (inst, def)=>{
    // ZodStringFormat.init(inst, def);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodCUID"].init(inst, def);
    ZodStringFormat.init(inst, def);
});
function cuid(params) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_cuid"](ZodCUID, params);
}
const ZodCUID2 = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("ZodCUID2", (inst, def)=>{
    // ZodStringFormat.init(inst, def);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodCUID2"].init(inst, def);
    ZodStringFormat.init(inst, def);
});
function cuid2(params) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_cuid2"](ZodCUID2, params);
}
const ZodULID = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("ZodULID", (inst, def)=>{
    // ZodStringFormat.init(inst, def);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodULID"].init(inst, def);
    ZodStringFormat.init(inst, def);
});
function ulid(params) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_ulid"](ZodULID, params);
}
const ZodXID = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("ZodXID", (inst, def)=>{
    // ZodStringFormat.init(inst, def);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodXID"].init(inst, def);
    ZodStringFormat.init(inst, def);
});
function xid(params) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_xid"](ZodXID, params);
}
const ZodKSUID = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("ZodKSUID", (inst, def)=>{
    // ZodStringFormat.init(inst, def);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodKSUID"].init(inst, def);
    ZodStringFormat.init(inst, def);
});
function ksuid(params) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_ksuid"](ZodKSUID, params);
}
const ZodIPv4 = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("ZodIPv4", (inst, def)=>{
    // ZodStringFormat.init(inst, def);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodIPv4"].init(inst, def);
    ZodStringFormat.init(inst, def);
});
function ipv4(params) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_ipv4"](ZodIPv4, params);
}
const ZodIPv6 = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("ZodIPv6", (inst, def)=>{
    // ZodStringFormat.init(inst, def);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodIPv6"].init(inst, def);
    ZodStringFormat.init(inst, def);
});
function ipv6(params) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_ipv6"](ZodIPv6, params);
}
const ZodCIDRv4 = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("ZodCIDRv4", (inst, def)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodCIDRv4"].init(inst, def);
    ZodStringFormat.init(inst, def);
});
function cidrv4(params) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_cidrv4"](ZodCIDRv4, params);
}
const ZodCIDRv6 = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("ZodCIDRv6", (inst, def)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodCIDRv6"].init(inst, def);
    ZodStringFormat.init(inst, def);
});
function cidrv6(params) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_cidrv6"](ZodCIDRv6, params);
}
const ZodBase64 = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("ZodBase64", (inst, def)=>{
    // ZodStringFormat.init(inst, def);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodBase64"].init(inst, def);
    ZodStringFormat.init(inst, def);
});
function base64(params) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_base64"](ZodBase64, params);
}
const ZodBase64URL = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("ZodBase64URL", (inst, def)=>{
    // ZodStringFormat.init(inst, def);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodBase64URL"].init(inst, def);
    ZodStringFormat.init(inst, def);
});
function base64url(params) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_base64url"](ZodBase64URL, params);
}
const ZodE164 = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("ZodE164", (inst, def)=>{
    // ZodStringFormat.init(inst, def);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodE164"].init(inst, def);
    ZodStringFormat.init(inst, def);
});
function e164(params) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_e164"](ZodE164, params);
}
const ZodJWT = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("ZodJWT", (inst, def)=>{
    // ZodStringFormat.init(inst, def);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodJWT"].init(inst, def);
    ZodStringFormat.init(inst, def);
});
function jwt(params) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_jwt"](ZodJWT, params);
}
const ZodCustomStringFormat = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("ZodCustomStringFormat", (inst, def)=>{
    // ZodStringFormat.init(inst, def);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodCustomStringFormat"].init(inst, def);
    ZodStringFormat.init(inst, def);
});
function stringFormat(format, fnOrRegex) {
    let _params = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_stringFormat"](ZodCustomStringFormat, format, fnOrRegex, _params);
}
function hostname(_params) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_stringFormat"](ZodCustomStringFormat, "hostname", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$regexes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__regexes$3e$__["regexes"].hostname, _params);
}
const ZodNumber = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("ZodNumber", (inst, def)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodNumber"].init(inst, def);
    ZodType.init(inst, def);
    inst.gt = (value, params)=>inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$gt__as__gt$3e$__["gt"](value, params));
    inst.gte = (value, params)=>inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$gte__as__gte$3e$__["gte"](value, params));
    inst.min = (value, params)=>inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$gte__as__gte$3e$__["gte"](value, params));
    inst.lt = (value, params)=>inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$lt__as__lt$3e$__["lt"](value, params));
    inst.lte = (value, params)=>inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$lte__as__lte$3e$__["lte"](value, params));
    inst.max = (value, params)=>inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$lte__as__lte$3e$__["lte"](value, params));
    inst.int = (params)=>inst.check(int(params));
    inst.safe = (params)=>inst.check(int(params));
    inst.positive = (params)=>inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$gt__as__gt$3e$__["gt"](0, params));
    inst.nonnegative = (params)=>inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$gte__as__gte$3e$__["gte"](0, params));
    inst.negative = (params)=>inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$lt__as__lt$3e$__["lt"](0, params));
    inst.nonpositive = (params)=>inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$lte__as__lte$3e$__["lte"](0, params));
    inst.multipleOf = (value, params)=>inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$multipleOf__as__multipleOf$3e$__["multipleOf"](value, params));
    inst.step = (value, params)=>inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$multipleOf__as__multipleOf$3e$__["multipleOf"](value, params));
    // inst.finite = (params) => inst.check(core.finite(params));
    inst.finite = ()=>inst;
    const bag = inst._zod.bag;
    var _bag_minimum, _bag_exclusiveMinimum, _Math_max;
    inst.minValue = (_Math_max = Math.max((_bag_minimum = bag.minimum) !== null && _bag_minimum !== void 0 ? _bag_minimum : Number.NEGATIVE_INFINITY, (_bag_exclusiveMinimum = bag.exclusiveMinimum) !== null && _bag_exclusiveMinimum !== void 0 ? _bag_exclusiveMinimum : Number.NEGATIVE_INFINITY)) !== null && _Math_max !== void 0 ? _Math_max : null;
    var _bag_maximum, _bag_exclusiveMaximum, _Math_min;
    inst.maxValue = (_Math_min = Math.min((_bag_maximum = bag.maximum) !== null && _bag_maximum !== void 0 ? _bag_maximum : Number.POSITIVE_INFINITY, (_bag_exclusiveMaximum = bag.exclusiveMaximum) !== null && _bag_exclusiveMaximum !== void 0 ? _bag_exclusiveMaximum : Number.POSITIVE_INFINITY)) !== null && _Math_min !== void 0 ? _Math_min : null;
    var _bag_format, _bag_multipleOf;
    inst.isInt = ((_bag_format = bag.format) !== null && _bag_format !== void 0 ? _bag_format : "").includes("int") || Number.isSafeInteger((_bag_multipleOf = bag.multipleOf) !== null && _bag_multipleOf !== void 0 ? _bag_multipleOf : 0.5);
    inst.isFinite = true;
    var _bag_format1;
    inst.format = (_bag_format1 = bag.format) !== null && _bag_format1 !== void 0 ? _bag_format1 : null;
});
function number(params) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_number"](ZodNumber, params);
}
const ZodNumberFormat = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("ZodNumberFormat", (inst, def)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodNumberFormat"].init(inst, def);
    ZodNumber.init(inst, def);
});
function int(params) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_int"](ZodNumberFormat, params);
}
function float32(params) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_float32"](ZodNumberFormat, params);
}
function float64(params) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_float64"](ZodNumberFormat, params);
}
function int32(params) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_int32"](ZodNumberFormat, params);
}
function uint32(params) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_uint32"](ZodNumberFormat, params);
}
const ZodBoolean = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("ZodBoolean", (inst, def)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodBoolean"].init(inst, def);
    ZodType.init(inst, def);
});
function boolean(params) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_boolean"](ZodBoolean, params);
}
const ZodBigInt = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("ZodBigInt", (inst, def)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodBigInt"].init(inst, def);
    ZodType.init(inst, def);
    inst.gte = (value, params)=>inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$gte__as__gte$3e$__["gte"](value, params));
    inst.min = (value, params)=>inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$gte__as__gte$3e$__["gte"](value, params));
    inst.gt = (value, params)=>inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$gt__as__gt$3e$__["gt"](value, params));
    inst.gte = (value, params)=>inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$gte__as__gte$3e$__["gte"](value, params));
    inst.min = (value, params)=>inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$gte__as__gte$3e$__["gte"](value, params));
    inst.lt = (value, params)=>inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$lt__as__lt$3e$__["lt"](value, params));
    inst.lte = (value, params)=>inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$lte__as__lte$3e$__["lte"](value, params));
    inst.max = (value, params)=>inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$lte__as__lte$3e$__["lte"](value, params));
    inst.positive = (params)=>inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$gt__as__gt$3e$__["gt"](BigInt(0), params));
    inst.negative = (params)=>inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$lt__as__lt$3e$__["lt"](BigInt(0), params));
    inst.nonpositive = (params)=>inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$lte__as__lte$3e$__["lte"](BigInt(0), params));
    inst.nonnegative = (params)=>inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$gte__as__gte$3e$__["gte"](BigInt(0), params));
    inst.multipleOf = (value, params)=>inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$multipleOf__as__multipleOf$3e$__["multipleOf"](value, params));
    const bag = inst._zod.bag;
    var _bag_minimum;
    inst.minValue = (_bag_minimum = bag.minimum) !== null && _bag_minimum !== void 0 ? _bag_minimum : null;
    var _bag_maximum;
    inst.maxValue = (_bag_maximum = bag.maximum) !== null && _bag_maximum !== void 0 ? _bag_maximum : null;
    var _bag_format;
    inst.format = (_bag_format = bag.format) !== null && _bag_format !== void 0 ? _bag_format : null;
});
function bigint(params) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_bigint"](ZodBigInt, params);
}
const ZodBigIntFormat = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("ZodBigIntFormat", (inst, def)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodBigIntFormat"].init(inst, def);
    ZodBigInt.init(inst, def);
});
function int64(params) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_int64"](ZodBigIntFormat, params);
}
function uint64(params) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_uint64"](ZodBigIntFormat, params);
}
const ZodSymbol = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("ZodSymbol", (inst, def)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodSymbol"].init(inst, def);
    ZodType.init(inst, def);
});
function symbol(params) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_symbol"](ZodSymbol, params);
}
const ZodUndefined = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("ZodUndefined", (inst, def)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodUndefined"].init(inst, def);
    ZodType.init(inst, def);
});
function _undefined(params) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_undefined"](ZodUndefined, params);
}
;
const ZodNull = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("ZodNull", (inst, def)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodNull"].init(inst, def);
    ZodType.init(inst, def);
});
function _null(params) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_null"](ZodNull, params);
}
;
const ZodAny = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("ZodAny", (inst, def)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodAny"].init(inst, def);
    ZodType.init(inst, def);
});
function any() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_any"](ZodAny);
}
const ZodUnknown = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("ZodUnknown", (inst, def)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodUnknown"].init(inst, def);
    ZodType.init(inst, def);
});
function unknown() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_unknown"](ZodUnknown);
}
const ZodNever = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("ZodNever", (inst, def)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodNever"].init(inst, def);
    ZodType.init(inst, def);
});
function never(params) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_never"](ZodNever, params);
}
const ZodVoid = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("ZodVoid", (inst, def)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodVoid"].init(inst, def);
    ZodType.init(inst, def);
});
function _void(params) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_void"](ZodVoid, params);
}
;
const ZodDate = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("ZodDate", (inst, def)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodDate"].init(inst, def);
    ZodType.init(inst, def);
    inst.min = (value, params)=>inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$gte__as__gte$3e$__["gte"](value, params));
    inst.max = (value, params)=>inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$lte__as__lte$3e$__["lte"](value, params));
    const c = inst._zod.bag;
    inst.minDate = c.minimum ? new Date(c.minimum) : null;
    inst.maxDate = c.maximum ? new Date(c.maximum) : null;
});
function date(params) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_date"](ZodDate, params);
}
const ZodArray = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("ZodArray", (inst, def)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodArray"].init(inst, def);
    ZodType.init(inst, def);
    inst.element = def.element;
    inst.min = (minLength, params)=>inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$minLength__as__minLength$3e$__["minLength"](minLength, params));
    inst.nonempty = (params)=>inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$minLength__as__minLength$3e$__["minLength"](1, params));
    inst.max = (maxLength, params)=>inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$maxLength__as__maxLength$3e$__["maxLength"](maxLength, params));
    inst.length = (len, params)=>inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$length__as__length$3e$__["length"](len, params));
    inst.unwrap = ()=>inst.element;
});
function array(element, params) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_array"](ZodArray, element, params);
}
function keyof(schema) {
    const shape = schema._zod.def.shape;
    return _enum(Object.keys(shape));
}
const ZodObject = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("ZodObject", (inst, def)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodObject"].init(inst, def);
    ZodType.init(inst, def);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].defineLazy(inst, "shape", ()=>def.shape);
    inst.keyof = ()=>_enum(Object.keys(inst._zod.def.shape));
    inst.catchall = (catchall)=>inst.clone({
            ...inst._zod.def,
            catchall: catchall
        });
    inst.passthrough = ()=>inst.clone({
            ...inst._zod.def,
            catchall: unknown()
        });
    inst.loose = ()=>inst.clone({
            ...inst._zod.def,
            catchall: unknown()
        });
    inst.strict = ()=>inst.clone({
            ...inst._zod.def,
            catchall: never()
        });
    inst.strip = ()=>inst.clone({
            ...inst._zod.def,
            catchall: undefined
        });
    inst.extend = (incoming)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].extend(inst, incoming);
    };
    inst.merge = (other)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].merge(inst, other);
    inst.pick = (mask)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].pick(inst, mask);
    inst.omit = (mask)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].omit(inst, mask);
    inst.partial = function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].partial(ZodOptional, inst, args[0]);
    };
    inst.required = function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].required(ZodNonOptional, inst, args[0]);
    };
});
function object(shape, params) {
    const def = {
        type: "object",
        get shape () {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].assignProp(this, "shape", shape ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].objectClone(shape) : {});
            return this.shape;
        },
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].normalizeParams(params)
    };
    return new ZodObject(def);
}
function strictObject(shape, params) {
    return new ZodObject({
        type: "object",
        get shape () {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].assignProp(this, "shape", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].objectClone(shape));
            return this.shape;
        },
        catchall: never(),
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].normalizeParams(params)
    });
}
function looseObject(shape, params) {
    return new ZodObject({
        type: "object",
        get shape () {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].assignProp(this, "shape", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].objectClone(shape));
            return this.shape;
        },
        catchall: unknown(),
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].normalizeParams(params)
    });
}
const ZodUnion = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("ZodUnion", (inst, def)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodUnion"].init(inst, def);
    ZodType.init(inst, def);
    inst.options = def.options;
});
function union(options, params) {
    return new ZodUnion({
        type: "union",
        options: options,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].normalizeParams(params)
    });
}
const ZodDiscriminatedUnion = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("ZodDiscriminatedUnion", (inst, def)=>{
    ZodUnion.init(inst, def);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodDiscriminatedUnion"].init(inst, def);
});
function discriminatedUnion(discriminator, options, params) {
    // const [options, params] = args;
    return new ZodDiscriminatedUnion({
        type: "union",
        options,
        discriminator,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].normalizeParams(params)
    });
}
const ZodIntersection = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("ZodIntersection", (inst, def)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodIntersection"].init(inst, def);
    ZodType.init(inst, def);
});
function intersection(left, right) {
    return new ZodIntersection({
        type: "intersection",
        left: left,
        right: right
    });
}
const ZodTuple = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("ZodTuple", (inst, def)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodTuple"].init(inst, def);
    ZodType.init(inst, def);
    inst.rest = (rest)=>inst.clone({
            ...inst._zod.def,
            rest: rest
        });
});
function tuple(items, _paramsOrRest, _params) {
    const hasRest = _paramsOrRest instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodType"];
    const params = hasRest ? _params : _paramsOrRest;
    const rest = hasRest ? _paramsOrRest : null;
    return new ZodTuple({
        type: "tuple",
        items: items,
        rest,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].normalizeParams(params)
    });
}
const ZodRecord = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("ZodRecord", (inst, def)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodRecord"].init(inst, def);
    ZodType.init(inst, def);
    inst.keyType = def.keyType;
    inst.valueType = def.valueType;
});
function record(keyType, valueType, params) {
    return new ZodRecord({
        type: "record",
        keyType,
        valueType: valueType,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].normalizeParams(params)
    });
}
function partialRecord(keyType, valueType, params) {
    const k = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clone"](keyType);
    k._zod.values = undefined;
    return new ZodRecord({
        type: "record",
        keyType: k,
        valueType: valueType,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].normalizeParams(params)
    });
}
const ZodMap = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("ZodMap", (inst, def)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodMap"].init(inst, def);
    ZodType.init(inst, def);
    inst.keyType = def.keyType;
    inst.valueType = def.valueType;
});
function map(keyType, valueType, params) {
    return new ZodMap({
        type: "map",
        keyType: keyType,
        valueType: valueType,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].normalizeParams(params)
    });
}
const ZodSet = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("ZodSet", (inst, def)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodSet"].init(inst, def);
    ZodType.init(inst, def);
    inst.min = function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        return inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_minSize"](...args));
    };
    inst.nonempty = (params)=>inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_minSize"](1, params));
    inst.max = function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        return inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_maxSize"](...args));
    };
    inst.size = function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        return inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_size"](...args));
    };
});
function set(valueType, params) {
    return new ZodSet({
        type: "set",
        valueType: valueType,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].normalizeParams(params)
    });
}
const ZodEnum = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("ZodEnum", (inst, def)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodEnum"].init(inst, def);
    ZodType.init(inst, def);
    inst.enum = def.entries;
    inst.options = Object.values(def.entries);
    const keys = new Set(Object.keys(def.entries));
    inst.extract = (values, params)=>{
        const newEntries = {};
        for (const value of values){
            if (keys.has(value)) {
                newEntries[value] = def.entries[value];
            } else throw new Error("Key ".concat(value, " not found in enum"));
        }
        return new ZodEnum({
            ...def,
            checks: [],
            ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].normalizeParams(params),
            entries: newEntries
        });
    };
    inst.exclude = (values, params)=>{
        const newEntries = {
            ...def.entries
        };
        for (const value of values){
            if (keys.has(value)) {
                delete newEntries[value];
            } else throw new Error("Key ".concat(value, " not found in enum"));
        }
        return new ZodEnum({
            ...def,
            checks: [],
            ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].normalizeParams(params),
            entries: newEntries
        });
    };
});
function _enum(values, params) {
    const entries = Array.isArray(values) ? Object.fromEntries(values.map((v)=>[
            v,
            v
        ])) : values;
    return new ZodEnum({
        type: "enum",
        entries,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].normalizeParams(params)
    });
}
;
function nativeEnum(entries, params) {
    return new ZodEnum({
        type: "enum",
        entries,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].normalizeParams(params)
    });
}
const ZodLiteral = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("ZodLiteral", (inst, def)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodLiteral"].init(inst, def);
    ZodType.init(inst, def);
    inst.values = new Set(def.values);
    Object.defineProperty(inst, "value", {
        get () {
            if (def.values.length > 1) {
                throw new Error("This schema contains multiple valid literal values. Use `.values` instead.");
            }
            return def.values[0];
        }
    });
});
function literal(value, params) {
    return new ZodLiteral({
        type: "literal",
        values: Array.isArray(value) ? value : [
            value
        ],
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].normalizeParams(params)
    });
}
const ZodFile = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("ZodFile", (inst, def)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodFile"].init(inst, def);
    ZodType.init(inst, def);
    inst.min = (size, params)=>inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_minSize"](size, params));
    inst.max = (size, params)=>inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_maxSize"](size, params));
    inst.mime = (types, params)=>inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_mime"](Array.isArray(types) ? types : [
            types
        ], params));
});
function file(params) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_file"](ZodFile, params);
}
const ZodTransform = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("ZodTransform", (inst, def)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodTransform"].init(inst, def);
    ZodType.init(inst, def);
    inst._zod.parse = (payload, _ctx)=>{
        payload.addIssue = (issue)=>{
            if (typeof issue === "string") {
                payload.issues.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].issue(issue, payload.value, def));
            } else {
                // for Zod 3 backwards compatibility
                const _issue = issue;
                if (_issue.fatal) _issue.continue = false;
                var _issue_code;
                (_issue_code = _issue.code) !== null && _issue_code !== void 0 ? _issue_code : _issue.code = "custom";
                var _issue_input;
                (_issue_input = _issue.input) !== null && _issue_input !== void 0 ? _issue_input : _issue.input = payload.value;
                var _issue_inst;
                (_issue_inst = _issue.inst) !== null && _issue_inst !== void 0 ? _issue_inst : _issue.inst = inst;
                // _issue.continue ??= true;
                payload.issues.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].issue(_issue));
            }
        };
        const output = def.transform(payload.value, payload);
        if (output instanceof Promise) {
            return output.then((output)=>{
                payload.value = output;
                return payload;
            });
        }
        payload.value = output;
        return payload;
    };
});
function transform(fn) {
    return new ZodTransform({
        type: "transform",
        transform: fn
    });
}
const ZodOptional = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("ZodOptional", (inst, def)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodOptional"].init(inst, def);
    ZodType.init(inst, def);
    inst.unwrap = ()=>inst._zod.def.innerType;
});
function optional(innerType) {
    return new ZodOptional({
        type: "optional",
        innerType: innerType
    });
}
const ZodNullable = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("ZodNullable", (inst, def)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodNullable"].init(inst, def);
    ZodType.init(inst, def);
    inst.unwrap = ()=>inst._zod.def.innerType;
});
function nullable(innerType) {
    return new ZodNullable({
        type: "nullable",
        innerType: innerType
    });
}
function nullish(innerType) {
    return optional(nullable(innerType));
}
const ZodDefault = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("ZodDefault", (inst, def)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodDefault"].init(inst, def);
    ZodType.init(inst, def);
    inst.unwrap = ()=>inst._zod.def.innerType;
    inst.removeDefault = inst.unwrap;
});
function _default(innerType, defaultValue) {
    return new ZodDefault({
        type: "default",
        innerType: innerType,
        get defaultValue () {
            return typeof defaultValue === "function" ? defaultValue() : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].shallowClone(defaultValue);
        }
    });
}
const ZodPrefault = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("ZodPrefault", (inst, def)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodPrefault"].init(inst, def);
    ZodType.init(inst, def);
    inst.unwrap = ()=>inst._zod.def.innerType;
});
function prefault(innerType, defaultValue) {
    return new ZodPrefault({
        type: "prefault",
        innerType: innerType,
        get defaultValue () {
            return typeof defaultValue === "function" ? defaultValue() : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].shallowClone(defaultValue);
        }
    });
}
const ZodNonOptional = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("ZodNonOptional", (inst, def)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodNonOptional"].init(inst, def);
    ZodType.init(inst, def);
    inst.unwrap = ()=>inst._zod.def.innerType;
});
function nonoptional(innerType, params) {
    return new ZodNonOptional({
        type: "nonoptional",
        innerType: innerType,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].normalizeParams(params)
    });
}
const ZodSuccess = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("ZodSuccess", (inst, def)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodSuccess"].init(inst, def);
    ZodType.init(inst, def);
    inst.unwrap = ()=>inst._zod.def.innerType;
});
function success(innerType) {
    return new ZodSuccess({
        type: "success",
        innerType: innerType
    });
}
const ZodCatch = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("ZodCatch", (inst, def)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodCatch"].init(inst, def);
    ZodType.init(inst, def);
    inst.unwrap = ()=>inst._zod.def.innerType;
    inst.removeCatch = inst.unwrap;
});
function _catch(innerType, catchValue) {
    return new ZodCatch({
        type: "catch",
        innerType: innerType,
        catchValue: typeof catchValue === "function" ? catchValue : ()=>catchValue
    });
}
;
const ZodNaN = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("ZodNaN", (inst, def)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodNaN"].init(inst, def);
    ZodType.init(inst, def);
});
function nan(params) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_nan"](ZodNaN, params);
}
const ZodPipe = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("ZodPipe", (inst, def)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodPipe"].init(inst, def);
    ZodType.init(inst, def);
    inst.in = def.in;
    inst.out = def.out;
});
function pipe(in_, out) {
    return new ZodPipe({
        type: "pipe",
        in: in_,
        out: out
    });
}
const ZodReadonly = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("ZodReadonly", (inst, def)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodReadonly"].init(inst, def);
    ZodType.init(inst, def);
    inst.unwrap = ()=>inst._zod.def.innerType;
});
function readonly(innerType) {
    return new ZodReadonly({
        type: "readonly",
        innerType: innerType
    });
}
const ZodTemplateLiteral = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("ZodTemplateLiteral", (inst, def)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodTemplateLiteral"].init(inst, def);
    ZodType.init(inst, def);
});
function templateLiteral(parts, params) {
    return new ZodTemplateLiteral({
        type: "template_literal",
        parts,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].normalizeParams(params)
    });
}
const ZodLazy = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("ZodLazy", (inst, def)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodLazy"].init(inst, def);
    ZodType.init(inst, def);
    inst.unwrap = ()=>inst._zod.def.getter();
});
function lazy(getter) {
    return new ZodLazy({
        type: "lazy",
        getter: getter
    });
}
const ZodPromise = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("ZodPromise", (inst, def)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodPromise"].init(inst, def);
    ZodType.init(inst, def);
    inst.unwrap = ()=>inst._zod.def.innerType;
});
function promise(innerType) {
    return new ZodPromise({
        type: "promise",
        innerType: innerType
    });
}
const ZodCustom = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("ZodCustom", (inst, def)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodCustom"].init(inst, def);
    ZodType.init(inst, def);
});
function check(fn) {
    const ch = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodCheck"]({
        check: "custom"
    });
    ch._zod.check = fn;
    return ch;
}
function custom(fn, _params) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_custom"](ZodCustom, fn !== null && fn !== void 0 ? fn : ()=>true, _params);
}
function refine(fn) {
    let _params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_refine"](ZodCustom, fn, _params);
}
function superRefine(fn) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_superRefine"](fn);
}
function _instanceof(cls) {
    let params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
        error: "Input not instance of ".concat(cls.name)
    };
    const inst = new ZodCustom({
        type: "custom",
        check: "custom",
        fn: (data)=>data instanceof cls,
        abort: true,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].normalizeParams(params)
    });
    inst._zod.bag.Class = cls;
    return inst;
}
;
const stringbool = function() {
    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
        args[_key] = arguments[_key];
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_stringbool"]({
        Pipe: ZodPipe,
        Boolean: ZodBoolean,
        String: ZodString,
        Transform: ZodTransform
    }, ...args);
};
function json(params) {
    const jsonSchema = lazy(()=>{
        return union([
            string(params),
            number(),
            boolean(),
            _null(),
            array(jsonSchema),
            record(string(), jsonSchema)
        ]);
    });
    return jsonSchema;
}
function preprocess(fn, schema) {
    return pipe(transform(fn), schema);
}
}),
"[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/classic/iso.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ZodISODate",
    ()=>ZodISODate,
    "ZodISODateTime",
    ()=>ZodISODateTime,
    "ZodISODuration",
    ()=>ZodISODuration,
    "ZodISOTime",
    ()=>ZodISOTime,
    "date",
    ()=>date,
    "datetime",
    ()=>datetime,
    "duration",
    ()=>duration,
    "time",
    ()=>time
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/schemas.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/api.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/classic/schemas.js [app-client] (ecmascript)");
;
;
const ZodISODateTime = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("ZodISODateTime", (inst, def)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodISODateTime"].init(inst, def);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZodStringFormat"].init(inst, def);
});
function datetime(params) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_isoDateTime"](ZodISODateTime, params);
}
const ZodISODate = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("ZodISODate", (inst, def)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodISODate"].init(inst, def);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZodStringFormat"].init(inst, def);
});
function date(params) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_isoDate"](ZodISODate, params);
}
const ZodISOTime = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("ZodISOTime", (inst, def)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodISOTime"].init(inst, def);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZodStringFormat"].init(inst, def);
});
function time(params) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_isoTime"](ZodISOTime, params);
}
const ZodISODuration = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("ZodISODuration", (inst, def)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodISODuration"].init(inst, def);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZodStringFormat"].init(inst, def);
});
function duration(params) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_isoDuration"](ZodISODuration, params);
}
}),
"[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/classic/coerce.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "bigint",
    ()=>bigint,
    "boolean",
    ()=>boolean,
    "date",
    ()=>date,
    "number",
    ()=>number,
    "string",
    ()=>string
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/api.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/classic/schemas.js [app-client] (ecmascript)");
;
;
function string(params) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_coercedString"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZodString"], params);
}
function number(params) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_coercedNumber"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZodNumber"], params);
}
function boolean(params) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_coercedBoolean"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZodBoolean"], params);
}
function bigint(params) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_coercedBigint"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZodBigInt"], params);
}
function date(params) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_coercedDate"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZodDate"], params);
}
}),
"[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/classic/external.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/index.js [app-client] (ecmascript)");
// zod-specified
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$locales$2f$en$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/locales/en.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$locales$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/locales/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$iso$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/classic/iso.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$coerce$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/classic/coerce.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["config"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$locales$2f$en$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])());
;
;
;
;
;
;
;
;
}),
"[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/classic/checks.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/classic/checks.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "endsWith",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_endsWith"],
    "gt",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_gt"],
    "gte",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_gte"],
    "includes",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_includes"],
    "length",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_length"],
    "lowercase",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_lowercase"],
    "lt",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_lt"],
    "lte",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_lte"],
    "maxLength",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_maxLength"],
    "maxSize",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_maxSize"],
    "mime",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_mime"],
    "minLength",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_minLength"],
    "minSize",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_minSize"],
    "multipleOf",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_multipleOf"],
    "negative",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_negative"],
    "nonnegative",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_nonnegative"],
    "nonpositive",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_nonpositive"],
    "normalize",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_normalize"],
    "overwrite",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_overwrite"],
    "positive",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_positive"],
    "property",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_property"],
    "regex",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_regex"],
    "size",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_size"],
    "startsWith",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_startsWith"],
    "toLowerCase",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_toLowerCase"],
    "toUpperCase",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_toUpperCase"],
    "trim",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_trim"],
    "uppercase",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_uppercase"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/classic/checks.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/api.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/classic/compat.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "$brand",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$brand"],
    "ZodFirstPartyTypeKind",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$compat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ZodFirstPartyTypeKind"],
    "ZodIssueCode",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$compat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ZodIssueCode"],
    "config",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["config"],
    "getErrorMap",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$compat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getErrorMap"],
    "setErrorMap",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$compat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["setErrorMap"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$compat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/classic/compat.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/core.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/classic/external.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "$brand",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$brand"],
    "$input",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$registries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$input"],
    "$output",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$registries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$output"],
    "NEVER",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NEVER"],
    "TimePrecision",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TimePrecision"],
    "ZodAny",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZodAny"],
    "ZodArray",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZodArray"],
    "ZodBase64",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZodBase64"],
    "ZodBase64URL",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZodBase64URL"],
    "ZodBigInt",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZodBigInt"],
    "ZodBigIntFormat",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZodBigIntFormat"],
    "ZodBoolean",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZodBoolean"],
    "ZodCIDRv4",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZodCIDRv4"],
    "ZodCIDRv6",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZodCIDRv6"],
    "ZodCUID",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZodCUID"],
    "ZodCUID2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZodCUID2"],
    "ZodCatch",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZodCatch"],
    "ZodCustom",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZodCustom"],
    "ZodCustomStringFormat",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZodCustomStringFormat"],
    "ZodDate",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZodDate"],
    "ZodDefault",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZodDefault"],
    "ZodDiscriminatedUnion",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZodDiscriminatedUnion"],
    "ZodE164",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZodE164"],
    "ZodEmail",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZodEmail"],
    "ZodEmoji",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZodEmoji"],
    "ZodEnum",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZodEnum"],
    "ZodError",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZodError"],
    "ZodFile",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZodFile"],
    "ZodFirstPartyTypeKind",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$compat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"],
    "ZodGUID",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZodGUID"],
    "ZodIPv4",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZodIPv4"],
    "ZodIPv6",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZodIPv6"],
    "ZodISODate",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$iso$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZodISODate"],
    "ZodISODateTime",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$iso$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZodISODateTime"],
    "ZodISODuration",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$iso$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZodISODuration"],
    "ZodISOTime",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$iso$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZodISOTime"],
    "ZodIntersection",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZodIntersection"],
    "ZodIssueCode",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$compat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZodIssueCode"],
    "ZodJWT",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZodJWT"],
    "ZodKSUID",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZodKSUID"],
    "ZodLazy",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZodLazy"],
    "ZodLiteral",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZodLiteral"],
    "ZodMap",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZodMap"],
    "ZodNaN",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZodNaN"],
    "ZodNanoID",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZodNanoID"],
    "ZodNever",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZodNever"],
    "ZodNonOptional",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZodNonOptional"],
    "ZodNull",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZodNull"],
    "ZodNullable",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZodNullable"],
    "ZodNumber",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZodNumber"],
    "ZodNumberFormat",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZodNumberFormat"],
    "ZodObject",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZodObject"],
    "ZodOptional",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZodOptional"],
    "ZodPipe",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZodPipe"],
    "ZodPrefault",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZodPrefault"],
    "ZodPromise",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZodPromise"],
    "ZodReadonly",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZodReadonly"],
    "ZodRealError",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZodRealError"],
    "ZodRecord",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZodRecord"],
    "ZodSet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZodSet"],
    "ZodString",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZodString"],
    "ZodStringFormat",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZodStringFormat"],
    "ZodSuccess",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZodSuccess"],
    "ZodSymbol",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZodSymbol"],
    "ZodTemplateLiteral",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZodTemplateLiteral"],
    "ZodTransform",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZodTransform"],
    "ZodTuple",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZodTuple"],
    "ZodType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZodType"],
    "ZodULID",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZodULID"],
    "ZodURL",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZodURL"],
    "ZodUUID",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZodUUID"],
    "ZodUndefined",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZodUndefined"],
    "ZodUnion",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZodUnion"],
    "ZodUnknown",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZodUnknown"],
    "ZodVoid",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZodVoid"],
    "ZodXID",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZodXID"],
    "_ZodString",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_ZodString"],
    "_default",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_default"],
    "any",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["any"],
    "array",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["array"],
    "base64",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["base64"],
    "base64url",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["base64url"],
    "bigint",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bigint"],
    "boolean",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["boolean"],
    "catch",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["catch"],
    "check",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["check"],
    "cidrv4",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cidrv4"],
    "cidrv6",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cidrv6"],
    "clone",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clone"],
    "coerce",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$coerce$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__,
    "config",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["config"],
    "core",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__,
    "cuid",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cuid"],
    "cuid2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cuid2"],
    "custom",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["custom"],
    "date",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["date"],
    "discriminatedUnion",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["discriminatedUnion"],
    "e164",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["e164"],
    "email",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["email"],
    "emoji",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["emoji"],
    "endsWith",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["endsWith"],
    "enum",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["enum"],
    "file",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["file"],
    "flattenError",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flattenError"],
    "float32",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["float32"],
    "float64",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["float64"],
    "formatError",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatError"],
    "function",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["function"],
    "getErrorMap",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$compat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getErrorMap"],
    "globalRegistry",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$registries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalRegistry"],
    "gt",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gt"],
    "gte",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gte"],
    "guid",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["guid"],
    "hostname",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hostname"],
    "includes",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["includes"],
    "instanceof",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["instanceof"],
    "int",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["int"],
    "int32",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["int32"],
    "int64",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["int64"],
    "intersection",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["intersection"],
    "ipv4",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ipv4"],
    "ipv6",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ipv6"],
    "iso",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$iso$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__,
    "json",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["json"],
    "jwt",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jwt"],
    "keyof",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyof"],
    "ksuid",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ksuid"],
    "lazy",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lazy"],
    "length",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["length"],
    "literal",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["literal"],
    "locales",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$locales$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__,
    "looseObject",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["looseObject"],
    "lowercase",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lowercase"],
    "lt",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lt"],
    "lte",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lte"],
    "map",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["map"],
    "maxLength",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["maxLength"],
    "maxSize",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["maxSize"],
    "mime",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mime"],
    "minLength",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["minLength"],
    "minSize",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["minSize"],
    "multipleOf",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["multipleOf"],
    "nan",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nan"],
    "nanoid",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nanoid"],
    "nativeEnum",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nativeEnum"],
    "negative",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["negative"],
    "never",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["never"],
    "nonnegative",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nonnegative"],
    "nonoptional",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nonoptional"],
    "nonpositive",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nonpositive"],
    "normalize",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalize"],
    "null",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["null"],
    "nullable",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nullable"],
    "nullish",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nullish"],
    "number",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"],
    "object",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"],
    "optional",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["optional"],
    "overwrite",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["overwrite"],
    "parse",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$parse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parse"],
    "parseAsync",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$parse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseAsync"],
    "partialRecord",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["partialRecord"],
    "pipe",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"],
    "positive",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["positive"],
    "prefault",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prefault"],
    "preprocess",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["preprocess"],
    "prettifyError",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prettifyError"],
    "promise",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["promise"],
    "property",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["property"],
    "readonly",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readonly"],
    "record",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["record"],
    "refine",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["refine"],
    "regex",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["regex"],
    "regexes",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$regexes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__regexes$3e$__["regexes"],
    "registry",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$registries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registry"],
    "safeParse",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$parse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeParse"],
    "safeParseAsync",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$parse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeParseAsync"],
    "set",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["set"],
    "setErrorMap",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$compat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setErrorMap"],
    "size",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["size"],
    "startsWith",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startsWith"],
    "strictObject",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["strictObject"],
    "string",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"],
    "stringFormat",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringFormat"],
    "stringbool",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringbool"],
    "success",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["success"],
    "superRefine",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["superRefine"],
    "symbol",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["symbol"],
    "templateLiteral",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["templateLiteral"],
    "toJSONSchema",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$to$2d$json$2d$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toJSONSchema"],
    "toLowerCase",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toLowerCase"],
    "toUpperCase",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toUpperCase"],
    "transform",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transform"],
    "treeifyError",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["treeifyError"],
    "trim",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trim"],
    "tuple",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tuple"],
    "uint32",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uint32"],
    "uint64",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uint64"],
    "ulid",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ulid"],
    "undefined",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["undefined"],
    "union",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["union"],
    "unknown",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unknown"],
    "uppercase",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uppercase"],
    "url",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["url"],
    "uuid",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uuid"],
    "uuidv4",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uuidv4"],
    "uuidv6",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uuidv6"],
    "uuidv7",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uuidv7"],
    "void",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["void"],
    "xid",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["xid"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/classic/external.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/classic/schemas.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/classic/checks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/classic/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$parse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/classic/parse.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$compat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/classic/compat.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$registries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/registries.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/function.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$regexes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__regexes$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/regexes.js [app-client] (ecmascript) <export * as regexes>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$to$2d$json$2d$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/to-json-schema.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/core/api.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$locales$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/locales/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$iso$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/classic/iso.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$coerce$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/classic/coerce.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/classic/external.js [app-client] (ecmascript) <export * as z>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "z",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$17$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.17/node_modules/zod/v4/classic/external.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=ea369_zod_v4_6a005d29._.js.map