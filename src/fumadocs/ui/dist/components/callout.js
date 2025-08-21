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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Callout = void 0;
var lucide_react_1 = require("lucide-react");
var react_1 = require("react");
var cn_1 = require("@/utils/cn");
exports.Callout = (0, react_1.forwardRef)(function (_a, ref) {
    var className = _a.className, children = _a.children, title = _a.title, _b = _a.type, type = _b === void 0 ? 'info' : _b, icon = _a.icon, props = __rest(_a, ["className", "children", "title", "type", "icon"]);
    if (type === 'warn')
        type = 'warning';
    var DefaultIcon = {
        info: lucide_react_1.Info,
        warning: lucide_react_1.TriangleAlert,
        error: lucide_react_1.CircleX,
        success: lucide_react_1.CircleCheck,
    }[type];
    return (<div ref={ref} className={(0, cn_1.cn)('flex gap-2 my-4 rounded-xl border bg-fd-card p-3 ps-1 text-sm text-fd-card-foreground shadow-md', className)} {...props} style={__assign({ '--callout-color': "var(--color-fd-".concat(type, ")") }, props.style)}>
        <div role="none" className="w-0.5 bg-(--callout-color)/50 rounded-sm"/>
        {icon !== null && icon !== void 0 ? icon : (<DefaultIcon className="size-5 -me-0.5 fill-(--callout-color) text-fd-card"/>)}
        <div className="flex flex-col gap-2 min-w-0 flex-1">
          {title ? <p className="font-medium !my-0">{title}</p> : null}
          <div className="text-fd-muted-foreground prose-no-margin empty:hidden">
            {children}
          </div>
        </div>
      </div>);
});
exports.Callout.displayName = 'Callout';
