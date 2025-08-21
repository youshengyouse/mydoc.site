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
exports.CollapsibleContent = exports.CollapsibleTrigger = exports.Collapsible = void 0;
var CollapsiblePrimitive = require("@radix-ui/react-collapsible");
var react_1 = require("react");
var cn_1 = require("@/utils/cn");
var Collapsible = CollapsiblePrimitive.Root;
exports.Collapsible = Collapsible;
var CollapsibleTrigger = CollapsiblePrimitive.CollapsibleTrigger;
exports.CollapsibleTrigger = CollapsibleTrigger;
var CollapsibleContent = (0, react_1.forwardRef)(function (_a, ref) {
    var children = _a.children, props = __rest(_a, ["children"]);
    var _b = (0, react_1.useState)(false), mounted = _b[0], setMounted = _b[1];
    (0, react_1.useEffect)(function () {
        setMounted(true);
    }, []);
    return (<CollapsiblePrimitive.CollapsibleContent ref={ref} {...props} className={(0, cn_1.cn)('overflow-hidden', mounted &&
            'data-[state=closed]:animate-fd-collapsible-up data-[state=open]:animate-fd-collapsible-down', props.className)}>
      {children}
    </CollapsiblePrimitive.CollapsibleContent>);
});
exports.CollapsibleContent = CollapsibleContent;
CollapsibleContent.displayName =
    CollapsiblePrimitive.CollapsibleContent.displayName;
