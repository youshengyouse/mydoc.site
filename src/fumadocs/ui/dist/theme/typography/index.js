"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.typography = void 0;
var styles = require("./styles");
var plugin_1 = require("tailwindcss/plugin");
var lodash_merge_1 = require("lodash.merge");
var postcss_selector_parser_1 = require("postcss-selector-parser");
function inWhere(selector, _a) {
    var className = _a.className, prefix = _a.prefix, modifier = _a.modifier;
    var prefixedNot = prefix(".not-".concat(className)).slice(1);
    var selectorPrefix = selector.startsWith('>')
        ? "".concat(modifier === 'DEFAULT' ? ".".concat(className) : ".".concat(className, "-").concat(modifier), " ")
        : '';
    // Parse the selector, if every component ends in the same pseudo element(s) then move it to the end
    var _b = commonTrailingPseudos(selector), trailingPseudo = _b[0], rebuiltSelector = _b[1];
    if (trailingPseudo) {
        return ":where(".concat(selectorPrefix).concat(rebuiltSelector, "):not(:where([class~=\"").concat(prefixedNot, "\"],[class~=\"").concat(prefixedNot, "\"] *))").concat(trailingPseudo);
    }
    return ":where(".concat(selectorPrefix).concat(selector, "):not(:where([class~=\"").concat(prefixedNot, "\"],[class~=\"").concat(prefixedNot, "\"] *))");
}
function configToCss(config, _a) {
    var _b;
    if (config === void 0) { config = {}; }
    var className = _a.className, modifier = _a.modifier, prefix = _a.prefix;
    function updateSelector(k, v) {
        if (Array.isArray(v)) {
            return [k, v];
        }
        if (typeof v === 'object' && v !== null) {
            var nested = Object.values(v).some(function (prop) { return typeof prop === 'object'; });
            if (nested) {
                return [
                    inWhere(k, { className: className, modifier: modifier, prefix: prefix }),
                    v,
                    Object.fromEntries(Object.entries(v).map(function (_a) {
                        var k = _a[0], v = _a[1];
                        return updateSelector(k, v);
                    })),
                ];
            }
            return [inWhere(k, { className: className, modifier: modifier, prefix: prefix }), v];
        }
        return [k, v];
    }
    var css = (_b = config.css) !== null && _b !== void 0 ? _b : [];
    return Object.fromEntries(Object.entries(lodash_merge_1.default.apply(void 0, __spreadArray([{}], (Array.isArray(css) ? css : [css]), false))).map(function (_a) {
        var k = _a[0], v = _a[1];
        return updateSelector(k, v);
    }));
}
var parseSelector = (0, postcss_selector_parser_1.default)();
function commonTrailingPseudos(selector) {
    var ast = parseSelector.astSync(selector);
    var matrix = [];
    // Put the pseudo elements in reverse order in a sparse, column-major 2D array
    for (var _i = 0, _a = ast.nodes.entries(); _i < _a.length; _i++) {
        var _b = _a[_i], i = _b[0], sel = _b[1];
        for (var _c = 0, _d = __spreadArray([], sel.nodes, true).reverse().entries(); _c < _d.length; _c++) {
            var _e = _d[_c], j = _e[0], child = _e[1];
            // We only care about pseudo elements
            if (child.type !== 'pseudo' || !child.value.startsWith('::')) {
                break;
            }
            matrix[j] = matrix[j] || [];
            matrix[j][i] = child;
        }
    }
    var trailingPseudos = postcss_selector_parser_1.default.selector({
        value: '',
    });
    // At this point the pseudo elements are in a column-major 2D array
    // This means each row contains one "column" of pseudo elements from each selector
    // We can compare all the pseudo elements in a row to see if they are the same
    for (var _f = 0, matrix_1 = matrix; _f < matrix_1.length; _f++) {
        var pseudos = matrix_1[_f];
        // It's a sparse 2D array so there are going to be holes in the rows
        // We skip those
        if (!pseudos) {
            continue;
        }
        var values = new Set(pseudos.map(function (p) { return p.value; }));
        // The pseudo elements are not the same
        if (values.size > 1) {
            break;
        }
        pseudos.forEach(function (pseudo) { return pseudo.remove(); });
        trailingPseudos.prepend(pseudos[0]);
    }
    if (trailingPseudos.nodes.length) {
        return [trailingPseudos.toString(), ast.toString()];
    }
    return [null, selector];
}
var SELECTORS = [
    ['headings', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'th'],
    ['h1'],
    ['h2'],
    ['h3'],
    ['h4'],
    ['h5'],
    ['h6'],
    ['p'],
    ['a'],
    ['blockquote'],
    ['figure'],
    ['figcaption'],
    ['strong'],
    ['em'],
    ['kbd'],
    ['code'],
    ['pre'],
    ['ol'],
    ['ul'],
    ['li'],
    ['table'],
    ['thead'],
    ['tr'],
    ['th'],
    ['td'],
    ['img'],
    ['video'],
    ['hr'],
    ['lead', '[class~="lead"]'],
];
exports.typography = plugin_1.default.withOptions(function (_a) {
    if (_a === void 0) { _a = {}; }
    var _b = _a.className, className = _b === void 0 ? 'prose' : _b, styleOptions = __rest(_a, ["className"]);
    return function (_a) {
        var _b;
        var _c;
        var addVariant = _a.addVariant, addComponents = _a.addComponents, rest = __rest(_a, ["addVariant", "addComponents"]);
        var prefix = rest.prefix;
        for (var _i = 0, SELECTORS_1 = SELECTORS; _i < SELECTORS_1.length; _i++) {
            var _d = SELECTORS_1[_i], name_1 = _d[0], values = _d.slice(1);
            var selectors = values.length === 0 ? [name_1] : values;
            var selector = selectors.join(', ');
            addVariant("".concat(className, "-").concat(name_1), "& :is(".concat(inWhere(selector, {
                prefix: prefix,
                className: className,
            }), ")"));
        }
        addComponents((_b = {},
            _b[".".concat(className)] = configToCss(__assign(__assign({}, styles.DEFAULT), { css: __spreadArray(__spreadArray([], ((_c = styles.DEFAULT.css) !== null && _c !== void 0 ? _c : []), true), [
                    styleOptions.disableRoundedTable
                        ? styles.normalTable
                        : styles.roundedTable,
                ], false) }), {
                className: className,
                modifier: 'DEFAULT',
                prefix: prefix,
            }),
            _b));
    };
});
exports.default = exports.typography;
