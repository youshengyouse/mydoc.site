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
exports.ScrollViewport = exports.ScrollBar = exports.ScrollArea = void 0;
var ScrollAreaPrimitive = require("@radix-ui/react-scroll-area");
var React = require("react");
var cn_1 = require("@/utils/cn");
var ScrollArea = React.forwardRef(function (_a, ref) {
    var className = _a.className, children = _a.children, props = __rest(_a, ["className", "children"]);
    return (<ScrollAreaPrimitive.Root ref={ref} type="scroll" className={(0, cn_1.cn)('overflow-hidden', className)} {...props}>
    {children}
    <ScrollAreaPrimitive.Corner />
    <ScrollBar orientation="vertical"/>
  </ScrollAreaPrimitive.Root>);
});
exports.ScrollArea = ScrollArea;
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;
var ScrollViewport = React.forwardRef(function (_a, ref) {
    var className = _a.className, children = _a.children, props = __rest(_a, ["className", "children"]);
    return (<ScrollAreaPrimitive.Viewport ref={ref} className={(0, cn_1.cn)('size-full rounded-[inherit]', className)} {...props}>
    {children}
  </ScrollAreaPrimitive.Viewport>);
});
exports.ScrollViewport = ScrollViewport;
ScrollViewport.displayName = ScrollAreaPrimitive.Viewport.displayName;
var ScrollBar = React.forwardRef(function (_a, ref) {
    var className = _a.className, _b = _a.orientation, orientation = _b === void 0 ? 'vertical' : _b, props = __rest(_a, ["className", "orientation"]);
    return (<ScrollAreaPrimitive.Scrollbar ref={ref} orientation={orientation} className={(0, cn_1.cn)('flex select-none data-[state=hidden]:animate-fd-fade-out', orientation === 'vertical' && 'h-full w-1.5', orientation === 'horizontal' && 'h-1.5 flex-col', className)} {...props}>
    <ScrollAreaPrimitive.ScrollAreaThumb className="relative flex-1 rounded-full bg-fd-border"/>
  </ScrollAreaPrimitive.Scrollbar>);
});
exports.ScrollBar = ScrollBar;
ScrollBar.displayName = ScrollAreaPrimitive.Scrollbar.displayName;
