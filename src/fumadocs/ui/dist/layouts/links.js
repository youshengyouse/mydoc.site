'use client';
"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseLinkItem = void 0;
var link_1 = require("fumadocs-core/link");
var framework_1 = require("fumadocs-core/framework");
var react_1 = require("react");
var is_active_1 = require("@/utils/is-active");
exports.BaseLinkItem = (0, react_1.forwardRef)(function (_a, ref) {
    var _b;
    var item = _a.item, props = __rest(_a, ["item"]);
    var pathname = (0, framework_1.usePathname)();
    var activeType = (_b = item.active) !== null && _b !== void 0 ? _b : 'url';
    var active = activeType !== 'none' &&
        (0, is_active_1.isActive)(item.url, pathname, activeType === 'nested-url');
    return (<link_1.default ref={ref} href={item.url} external={item.external} {...props} data-active={active}>
      {props.children}
    </link_1.default>);
});
exports.BaseLinkItem.displayName = 'BaseLinkItem';
