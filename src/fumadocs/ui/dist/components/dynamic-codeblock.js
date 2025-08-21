'use client';
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DynamicCodeBlock = DynamicCodeBlock;
var codeblock_1 = require("@/components/codeblock");
var client_1 = require("fumadocs-core/highlight/client");
var cn_1 = require("@/utils/cn");
var react_1 = require("react");
function pre(props) {
    return (<codeblock_1.CodeBlock {...props} className={(0, cn_1.cn)('my-0', props.className)}>
      <codeblock_1.Pre>{props.children}</codeblock_1.Pre>
    </codeblock_1.CodeBlock>);
}
function DynamicCodeBlock(_a) {
    var lang = _a.lang, code = _a.code, options = _a.options;
    var components = __assign({ pre: pre }, options === null || options === void 0 ? void 0 : options.components);
    var loading = (0, react_1.useMemo)(function () {
        var _a, _b;
        var Pre = ((_a = components.pre) !== null && _a !== void 0 ? _a : 'pre');
        var Code = ((_b = components.code) !== null && _b !== void 0 ? _b : 'code');
        return (<Pre>
        <Code>
          {code.split('\n').map(function (line, i) { return (<span key={i} className="line">
              {line}
            </span>); })}
        </Code>
      </Pre>);
        // eslint-disable-next-line -- initial value only
    }, []);
    return (0, client_1.useShiki)(code, __assign(__assign({ lang: lang, loading: loading, withPrerenderScript: true }, options), { components: components }));
}
