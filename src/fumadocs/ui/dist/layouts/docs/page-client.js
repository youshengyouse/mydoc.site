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
exports.PageTOCPopoverTrigger = PageTOCPopoverTrigger;
exports.PageTOCPopoverContent = PageTOCPopoverContent;
exports.PageTOCPopover = PageTOCPopover;
exports.PageRoot = PageRoot;
exports.PageLastUpdate = PageLastUpdate;
exports.PageFooter = PageFooter;
exports.PageBreadcrumb = PageBreadcrumb;
exports.PageTOC = PageTOC;
var react_1 = require("react");
var icons_1 = require("@/icons");
var link_1 = require("fumadocs-core/link");
var cn_1 = require("@/utils/cn");
var i18n_1 = require("../../contexts/i18n");
var tree_1 = require("../../contexts/tree");
var framework_1 = require("fumadocs-core/framework");
var breadcrumb_1 = require("fumadocs-core/breadcrumb");
var layout_1 = require("@/contexts/layout");
var is_active_1 = require("@/utils/is-active");
var use_effect_event_1 = require("fumadocs-core/utils/use-effect-event");
var collapsible_1 = require("@/components/ui/collapsible");
var sidebar_1 = require("@/contexts/sidebar");
var toc_1 = require("@/components/layout/toc");
var toc_2 = require("fumadocs-core/toc");
var TocPopoverContext = (0, framework_1.createContext)('TocPopoverContext');
function PageTOCPopoverTrigger(props) {
    var _a, _b;
    var text = (0, i18n_1.useI18n)().text;
    var open = TocPopoverContext.use().open;
    var items = (0, toc_1.useTOCItems)();
    var active = (0, toc_2.useActiveAnchor)();
    var selected = (0, react_1.useMemo)(function () { return items.findIndex(function (item) { return active === item.url.slice(1); }); }, [items, active]);
    var path = (0, tree_1.useTreePath)().at(-1);
    var showItem = selected !== -1 && !open;
    return (<collapsible_1.CollapsibleTrigger {...props} className={(0, cn_1.cn)('flex w-full h-(--fd-tocnav-height) items-center text-sm text-fd-muted-foreground gap-2.5 px-4 py-2.5 text-start focus-visible:outline-none [&_svg]:shrink-0 [&_svg]:size-4 md:px-6', props.className)}>
      <ProgressCircle value={(selected + 1) / Math.max(1, items.length)} max={1} className={(0, cn_1.cn)(open && 'text-fd-primary')}/>
      <span className="grid flex-1 *:my-auto *:row-start-1 *:col-start-1">
        <span className={(0, cn_1.cn)('truncate transition-all', open && 'text-fd-foreground', showItem && 'opacity-0 -translate-y-full pointer-events-none')}>
          {(_a = path === null || path === void 0 ? void 0 : path.name) !== null && _a !== void 0 ? _a : text.toc}
        </span>
        <span className={(0, cn_1.cn)('truncate transition-all', !showItem && 'opacity-0 translate-y-full pointer-events-none')}>
          {(_b = items[selected]) === null || _b === void 0 ? void 0 : _b.title}
        </span>
      </span>
      <icons_1.ChevronDown className={(0, cn_1.cn)('transition-transform mx-0.5', open && 'rotate-180')}/>
    </collapsible_1.CollapsibleTrigger>);
}
function clamp(input, min, max) {
    if (input < min)
        return min;
    if (input > max)
        return max;
    return input;
}
function ProgressCircle(_a) {
    var value = _a.value, _b = _a.strokeWidth, strokeWidth = _b === void 0 ? 2 : _b, _c = _a.size, size = _c === void 0 ? 24 : _c, _d = _a.min, min = _d === void 0 ? 0 : _d, _e = _a.max, max = _e === void 0 ? 100 : _e, restSvgProps = __rest(_a, ["value", "strokeWidth", "size", "min", "max"]);
    var normalizedValue = clamp(value, min, max);
    var radius = (size - strokeWidth) / 2;
    var circumference = 2 * Math.PI * radius;
    var progress = (normalizedValue / max) * circumference;
    var circleProps = {
        cx: size / 2,
        cy: size / 2,
        r: radius,
        fill: 'none',
        strokeWidth: strokeWidth,
    };
    return (<svg role="progressbar" viewBox={"0 0 ".concat(size, " ").concat(size)} aria-valuenow={normalizedValue} aria-valuemin={min} aria-valuemax={max} {...restSvgProps}>
      <circle {...circleProps} className="stroke-current/25"/>
      <circle {...circleProps} stroke="currentColor" strokeDasharray={circumference} strokeDashoffset={circumference - progress} strokeLinecap="round" transform={"rotate(-90 ".concat(size / 2, " ").concat(size / 2, ")")} className="transition-all"/>
    </svg>);
}
function PageTOCPopoverContent(props) {
    return (<collapsible_1.CollapsibleContent data-toc-popover="" {...props} className={(0, cn_1.cn)('flex flex-col px-4 max-h-[50vh] md:px-6', props.className)}>
      {props.children}
    </collapsible_1.CollapsibleContent>);
}
function PageTOCPopover(props) {
    var ref = (0, react_1.useRef)(null);
    var _a = (0, react_1.useState)(false), open = _a[0], setOpen = _a[1];
    var collapsed = (0, sidebar_1.useSidebar)().collapsed;
    var isTransparent = (0, layout_1.useNav)().isTransparent;
    var onClick = (0, use_effect_event_1.useEffectEvent)(function (e) {
        if (!open)
            return;
        if (ref.current && !ref.current.contains(e.target))
            setOpen(false);
    });
    (0, react_1.useEffect)(function () {
        window.addEventListener('click', onClick);
        return function () {
            window.removeEventListener('click', onClick);
        };
    }, [onClick]);
    return (<TocPopoverContext.Provider value={(0, react_1.useMemo)(function () { return ({
            open: open,
            setOpen: setOpen,
        }); }, [setOpen, open])}>
      <collapsible_1.Collapsible open={open} onOpenChange={setOpen} asChild>
        <header ref={ref} id="nd-tocnav" {...props} className={(0, cn_1.cn)('fixed inset-x-0 z-10 border-b backdrop-blur-sm transition-colors xl:hidden', (!isTransparent || open) && 'bg-fd-background/80', open && 'shadow-lg', props.className)} style={__assign(__assign({}, props.style), { top: 'calc(var(--fd-banner-height) + var(--fd-nav-height))', insetInlineStart: collapsed
                ? '0px'
                : 'calc(var(--fd-sidebar-width) + var(--fd-layout-offset))' })}>
          {props.children}
        </header>
      </collapsible_1.Collapsible>
    </TocPopoverContext.Provider>);
}
function PageRoot(_a) {
    var toc = _a.toc, children = _a.children, props = __rest(_a, ["toc", "children"]);
    var collapsed = (0, sidebar_1.useSidebar)().collapsed;
    return (<toc_1.TOCProvider {...toc}>
      <div id="nd-page" {...props} className={(0, cn_1.cn)('flex flex-1 mx-auto w-full', props.className)} style={__assign({ paddingTop: 'calc(var(--fd-nav-height) + var(--fd-tocnav-height))', maxWidth: collapsed
                ? 'var(--fd-page-width)'
                : 'min(var(--fd-page-width),calc(var(--fd-layout-width) - var(--fd-sidebar-width)))' }, props.style)}>
        {children}
      </div>
    </toc_1.TOCProvider>);
}
function PageLastUpdate(_a) {
    var value = _a.date, props = __rest(_a, ["date"]);
    var text = (0, i18n_1.useI18n)().text;
    var _b = (0, react_1.useState)(''), date = _b[0], setDate = _b[1];
    (0, react_1.useEffect)(function () {
        // to the timezone of client
        setDate(new Date(value).toLocaleDateString());
    }, [value]);
    return (<p {...props} className={(0, cn_1.cn)('text-sm text-fd-muted-foreground', props.className)}>
      {text.lastUpdate} {date}
    </p>);
}
function scanNavigationList(tree) {
    var list = [];
    tree.forEach(function (node) {
        if (node.type === 'folder') {
            if (node.index) {
                list.push(node.index);
            }
            list.push.apply(list, scanNavigationList(node.children));
            return;
        }
        if (node.type === 'page' && !node.external) {
            list.push(node);
        }
    });
    return list;
}
var listCache = new WeakMap();
function PageFooter(_a) {
    var items = _a.items, props = __rest(_a, ["items"]);
    var root = (0, tree_1.useTreeContext)().root;
    var pathname = (0, framework_1.usePathname)();
    var _b = (0, react_1.useMemo)(function () {
        if (items)
            return items;
        var cached = listCache.get(root);
        var list = cached !== null && cached !== void 0 ? cached : scanNavigationList(root.children);
        listCache.set(root, list);
        var idx = list.findIndex(function (item) { return (0, is_active_1.isActive)(item.url, pathname, false); });
        if (idx === -1)
            return {};
        return {
            previous: list[idx - 1],
            next: list[idx + 1],
        };
    }, [items, pathname, root]), previous = _b.previous, next = _b.next;
    return (<div {...props} className={(0, cn_1.cn)('@container grid gap-4 pb-6', previous && next ? 'grid-cols-2' : 'grid-cols-1', props.className)}>
      {previous ? <FooterItem item={previous} index={0}/> : null}
      {next ? <FooterItem item={next} index={1}/> : null}
    </div>);
}
function FooterItem(_a) {
    var _b;
    var item = _a.item, index = _a.index;
    var text = (0, i18n_1.useI18n)().text;
    var Icon = index === 0 ? icons_1.ChevronLeft : icons_1.ChevronRight;
    return (<link_1.default href={item.url} className={(0, cn_1.cn)('flex flex-col gap-2 rounded-lg border p-4 text-sm transition-colors hover:bg-fd-accent/80 hover:text-fd-accent-foreground @max-lg:col-span-full', index === 1 && 'text-end')}>
      <div className={(0, cn_1.cn)('inline-flex items-center gap-1.5 font-medium', index === 1 && 'flex-row-reverse')}>
        <Icon className="-mx-1 size-4 shrink-0 rtl:rotate-180"/>
        <p>{item.name}</p>
      </div>
      <p className="text-fd-muted-foreground truncate">
        {(_b = item.description) !== null && _b !== void 0 ? _b : (index === 0 ? text.previousPage : text.nextPage)}
      </p>
    </link_1.default>);
}
function PageBreadcrumb(_a) {
    var _b = _a.includeRoot, includeRoot = _b === void 0 ? false : _b, includeSeparator = _a.includeSeparator, _c = _a.includePage, includePage = _c === void 0 ? false : _c, props = __rest(_a, ["includeRoot", "includeSeparator", "includePage"]);
    var path = (0, tree_1.useTreePath)();
    var root = (0, tree_1.useTreeContext)().root;
    var items = (0, react_1.useMemo)(function () {
        return (0, breadcrumb_1.getBreadcrumbItemsFromPath)(root, path, {
            includePage: includePage,
            includeSeparator: includeSeparator,
            includeRoot: includeRoot,
        });
    }, [includePage, includeRoot, includeSeparator, path, root]);
    if (items.length === 0)
        return null;
    return (<div {...props} className={(0, cn_1.cn)('flex items-center gap-1.5 text-sm text-fd-muted-foreground', props.className)}>
      {items.map(function (item, i) {
            var className = (0, cn_1.cn)('truncate', i === items.length - 1 && 'text-fd-primary font-medium');
            return (<react_1.Fragment key={i}>
            {i !== 0 && <span className="text-fd-foreground/30">/</span>}
            {item.url ? (<link_1.default href={item.url} className={(0, cn_1.cn)(className, 'transition-opacity hover:opacity-80')}>
                {item.name}
              </link_1.default>) : (<span className={className}>{item.name}</span>)}
          </react_1.Fragment>);
        })}
    </div>);
}
function PageTOC(props) {
    return (<div id="nd-toc" {...props} className={(0, cn_1.cn)('sticky pb-2 pt-12 max-xl:hidden', props.className)} style={__assign(__assign({}, props.style), { top: 'calc(var(--fd-banner-height) + var(--fd-nav-height))', height: 'calc(100dvh - var(--fd-banner-height) - var(--fd-nav-height))' })}>
      <div className="flex h-full w-(--fd-toc-width) max-w-full flex-col pe-4">
        {props.children}
      </div>
    </div>);
}
