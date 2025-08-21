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
exports.LayoutTabs = LayoutTabs;
var cn_1 = require("@/utils/cn");
var react_1 = require("react");
var sidebar_1 = require("@/contexts/sidebar");
var layout_1 = require("@/contexts/layout");
var button_1 = require("@/components/ui/button");
var lucide_react_1 = require("lucide-react");
var link_1 = require("fumadocs-core/link");
var framework_1 = require("fumadocs-core/framework");
var is_active_1 = require("@/utils/is-active");
function Navbar(_a) {
    var mode = _a.mode, props = __rest(_a, ["mode"]);
    var _b = (0, sidebar_1.useSidebar)(), open = _b.open, collapsed = _b.collapsed;
    var isTransparent = (0, layout_1.useNav)().isTransparent;
    return (<header id="nd-subnav" {...props} className={(0, cn_1.cn)('fixed flex flex-col inset-x-0 top-(--fd-banner-height) z-10 px-(--fd-layout-offset) h-(--fd-nav-height) backdrop-blur-sm transition-colors', (!isTransparent || open) && 'bg-fd-background/80', mode === 'auto' &&
            !collapsed &&
            'ps-[calc(var(--fd-layout-offset)+var(--fd-sidebar-width))]', props.className)}>
      {props.children}
    </header>);
}
function LayoutBody(props) {
    var collapsed = (0, sidebar_1.useSidebar)().collapsed;
    return (<main id="nd-docs-layout" {...props} className={(0, cn_1.cn)('flex flex-1 flex-col transition-[margin] fd-notebook-layout', props.className)} style={__assign(__assign({}, props.style), { marginInlineStart: collapsed
                ? 'max(0px, min(calc(100vw - var(--fd-page-width)), var(--fd-sidebar-width)))'
                : 'var(--fd-sidebar-width)' })}>
      {props.children}
    </main>);
}
function NavbarSidebarTrigger(_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    var setOpen = (0, sidebar_1.useSidebar)().setOpen;
    return (<button {...props} className={(0, cn_1.cn)((0, button_1.buttonVariants)({
            color: 'ghost',
            size: 'icon-sm',
            className: className,
        }))} onClick={function () { return setOpen(function (prev) { return !prev; }); }}>
      <lucide_react_1.Sidebar />
    </button>);
}
function LayoutTabs(_a) {
    var options = _a.options, props = __rest(_a, ["options"]);
    var pathname = (0, framework_1.usePathname)();
    var selected = (0, react_1.useMemo)(function () {
        var url = pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
        return options.findLast(function (option) {
            if (option.urls) {
                return option.urls.has(url);
            }
            return (0, is_active_1.isActive)(option.url, pathname, true);
        });
    }, [options, pathname]);
    return (<div {...props} className={(0, cn_1.cn)('flex flex-row items-center gap-2 overflow-auto', props.className)}>
      {options.map(function (option) { return (<LayoutTab key={option.url} selected={selected === option} option={option}/>); })}
    </div>);
}
function LayoutTab(_a) {
    var option = _a.option, _b = _a.selected, selected = _b === void 0 ? false : _b;
    return (<link_1.default className={(0, cn_1.cn)('inline-flex rounded-full items-center px-2 py-1.5 font-medium gap-2 text-fd-muted-foreground text-sm text-nowrap', selected && 'bg-fd-primary/10 text-fd-primary')} href={option.url}>
      {option.title}
    </link_1.default>);
}
