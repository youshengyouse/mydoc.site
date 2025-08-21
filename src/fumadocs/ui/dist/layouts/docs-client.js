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
exports.Navbar = Navbar;
exports.LayoutBody = LayoutBody;
exports.NavbarSidebarTrigger = NavbarSidebarTrigger;
exports.CollapsibleControl = CollapsibleControl;
var lucide_react_1 = require("lucide-react");
var cn_1 = require("@/utils/cn");
var button_1 = require("@/components/ui/button");
var sidebar_1 = require("@/contexts/sidebar");
var layout_1 = require("@/contexts/layout");
var sidebar_2 = require("@/components/layout/sidebar");
var search_toggle_1 = require("@/components/layout/search-toggle");
function Navbar(props) {
    var isTransparent = (0, layout_1.useNav)().isTransparent;
    return (<header id="nd-subnav" {...props} className={(0, cn_1.cn)('fixed top-(--fd-banner-height) inset-x-0 z-30 flex items-center px-4 border-b transition-colors backdrop-blur-sm', !isTransparent && 'bg-fd-background/80', props.className)}>
      {props.children}
    </header>);
}
function LayoutBody(props) {
    var collapsed = (0, sidebar_1.useSidebar)().collapsed;
    return (<main id="nd-docs-layout" {...props} className={(0, cn_1.cn)('flex flex-1 flex-col transition-[margin]', props.className)} style={__assign(__assign({}, props.style), { marginInlineStart: collapsed
                ? 'max(0px, min(calc(100vw - var(--fd-page-width)), var(--fd-sidebar-width)))'
                : 'var(--fd-sidebar-width)' })}>
      {props.children}
    </main>);
}
function NavbarSidebarTrigger(_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    var setOpen = (0, sidebar_1.useSidebar)().setOpen;
    return (<button {...props} aria-label="Open Sidebar" className={(0, cn_1.cn)((0, button_1.buttonVariants)({
            color: 'ghost',
            size: 'icon-sm',
            className: className,
        }))} onClick={function () { return setOpen(function (prev) { return !prev; }); }}>
      <lucide_react_1.Sidebar />
    </button>);
}
function CollapsibleControl() {
    var collapsed = (0, sidebar_1.useSidebar)().collapsed;
    if (!collapsed)
        return;
    return (<div className="fixed flex shadow-lg animate-fd-fade-in rounded-xl p-0.5 border bg-fd-muted text-fd-muted-foreground z-10 xl:start-4 max-xl:end-4" style={{
            top: 'calc(var(--fd-banner-height) + var(--fd-tocnav-height) + var(--spacing) * 4)',
        }}>
      <sidebar_2.SidebarCollapseTrigger className={(0, cn_1.cn)((0, button_1.buttonVariants)({
            color: 'ghost',
            size: 'icon-sm',
            className: 'rounded-lg',
        }))}>
        <lucide_react_1.Sidebar />
      </sidebar_2.SidebarCollapseTrigger>
      <search_toggle_1.SearchToggle className="rounded-lg" hideIfDisabled/>
    </div>);
}
