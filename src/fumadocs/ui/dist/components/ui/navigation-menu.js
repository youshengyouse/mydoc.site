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
exports.NavigationMenuViewport = exports.NavigationMenuLink = exports.NavigationMenuTrigger = exports.NavigationMenuContent = exports.NavigationMenuItem = exports.NavigationMenuList = exports.NavigationMenu = void 0;
var React = require("react");
var Primitive = require("@radix-ui/react-navigation-menu");
var cn_1 = require("@/utils/cn");
var NavigationMenu = Primitive.Root;
exports.NavigationMenu = NavigationMenu;
var NavigationMenuList = Primitive.List;
exports.NavigationMenuList = NavigationMenuList;
var NavigationMenuItem = React.forwardRef(function (_a, ref) {
    var className = _a.className, children = _a.children, props = __rest(_a, ["className", "children"]);
    return (<Primitive.NavigationMenuItem ref={ref} className={(0, cn_1.cn)('list-none', className)} {...props}>
    {children}
  </Primitive.NavigationMenuItem>);
});
exports.NavigationMenuItem = NavigationMenuItem;
NavigationMenuItem.displayName = Primitive.NavigationMenuItem.displayName;
var NavigationMenuTrigger = React.forwardRef(function (_a, ref) {
    var className = _a.className, children = _a.children, props = __rest(_a, ["className", "children"]);
    return (<Primitive.Trigger ref={ref} className={(0, cn_1.cn)('data-[state=open]:bg-fd-accent/50', className)} {...props}>
    {children}
  </Primitive.Trigger>);
});
exports.NavigationMenuTrigger = NavigationMenuTrigger;
NavigationMenuTrigger.displayName = Primitive.Trigger.displayName;
var NavigationMenuContent = React.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (<Primitive.Content ref={ref} className={(0, cn_1.cn)('absolute inset-x-0 top-0 overflow-auto fd-scroll-container max-h-[80svh] data-[motion=from-end]:animate-fd-enterFromRight data-[motion=from-start]:animate-fd-enterFromLeft data-[motion=to-end]:animate-fd-exitToRight data-[motion=to-start]:animate-fd-exitToLeft', className)} {...props}/>);
});
exports.NavigationMenuContent = NavigationMenuContent;
NavigationMenuContent.displayName = Primitive.Content.displayName;
var NavigationMenuLink = Primitive.Link;
exports.NavigationMenuLink = NavigationMenuLink;
var NavigationMenuViewport = React.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (<div ref={ref} className="flex w-full justify-center">
    <Primitive.Viewport {...props} className={(0, cn_1.cn)('relative h-(--radix-navigation-menu-viewport-height) w-full origin-[top_center] overflow-hidden transition-[width,height] duration-300 data-[state=closed]:animate-fd-nav-menu-out data-[state=open]:animate-fd-nav-menu-in', className)}/>
  </div>);
});
exports.NavigationMenuViewport = NavigationMenuViewport;
NavigationMenuViewport.displayName = Primitive.Viewport.displayName;
