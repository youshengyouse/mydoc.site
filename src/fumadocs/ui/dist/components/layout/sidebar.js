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
exports.Sidebar = Sidebar;
exports.SidebarHeader = SidebarHeader;
exports.SidebarFooter = SidebarFooter;
exports.SidebarViewport = SidebarViewport;
exports.SidebarSeparator = SidebarSeparator;
exports.SidebarItem = SidebarItem;
exports.SidebarFolder = SidebarFolder;
exports.SidebarFolderTrigger = SidebarFolderTrigger;
exports.SidebarFolderLink = SidebarFolderLink;
exports.SidebarFolderContent = SidebarFolderContent;
exports.SidebarCollapseTrigger = SidebarCollapseTrigger;
exports.SidebarPageTree = SidebarPageTree;
var lucide_react_1 = require("lucide-react");
var framework_1 = require("fumadocs-core/framework");
var react_1 = require("react");
var link_1 = require("fumadocs-core/link");
var use_on_change_1 = require("fumadocs-core/utils/use-on-change");
var cn_1 = require("@/utils/cn");
var scroll_area_1 = require("@/components/ui/scroll-area");
var is_active_1 = require("@/utils/is-active");
var collapsible_1 = require("@/components/ui/collapsible");
var sidebar_1 = require("@/contexts/sidebar");
var class_variance_authority_1 = require("class-variance-authority");
var tree_1 = require("@/contexts/tree");
var use_media_query_1 = require("fumadocs-core/utils/use-media-query");
var react_presence_1 = require("@radix-ui/react-presence");
var itemVariants = (0, class_variance_authority_1.cva)('relative flex flex-row items-center gap-2 rounded-xl p-2 text-start text-fd-muted-foreground [overflow-wrap:anywhere] [&_svg]:size-4 [&_svg]:shrink-0', {
    variants: {
        active: {
            true: 'bg-fd-primary/10 text-fd-primary',
            false: 'transition-colors hover:bg-fd-accent/50 hover:text-fd-accent-foreground/80 hover:transition-none',
        },
    },
});
var Context = (0, react_1.createContext)(null);
var FolderContext = (0, react_1.createContext)(null);
function Sidebar(_a) {
    var _b;
    var _c = _a.defaultOpenLevel, defaultOpenLevel = _c === void 0 ? 0 : _c, _d = _a.prefetch, prefetch = _d === void 0 ? true : _d, _e = _a.collapsible, collapsible = _e === void 0 ? true : _e, props = __rest(_a, ["defaultOpenLevel", "prefetch", "collapsible"]);
    var _f = (0, sidebar_1.useSidebar)(), open = _f.open, setOpen = _f.setOpen, collapsed = _f.collapsed;
    var context = (0, react_1.useMemo)(function () {
        return {
            defaultOpenLevel: defaultOpenLevel,
            prefetch: prefetch,
            level: 1,
        };
    }, [defaultOpenLevel, prefetch]);
    var _g = (0, react_1.useState)(false), hover = _g[0], setHover = _g[1];
    var timerRef = (0, react_1.useRef)(0);
    var closeTimeRef = (0, react_1.useRef)(0);
    // md
    var isMobile = (_b = (0, use_media_query_1.useMediaQuery)('(width < 768px)')) !== null && _b !== void 0 ? _b : false;
    (0, use_on_change_1.useOnChange)(collapsed, function () {
        setHover(false);
        closeTimeRef.current = Date.now() + 150;
    });
    if (isMobile) {
        var state_1 = open ? 'open' : 'closed';
        return (<Context.Provider value={context}>
        <react_presence_1.Presence present={open}>
          <div data-state={state_1} className="fixed z-40 inset-0 backdrop-blur-xs data-[state=open]:animate-fd-fade-in data-[state=closed]:animate-fd-fade-out" onClick={function () { return setOpen(false); }}/>
        </react_presence_1.Presence>
        <react_presence_1.Presence present={open}>
          {function (_a) {
                var present = _a.present;
                return (<aside id="nd-sidebar-mobile" {...props} data-state={state_1} className={(0, cn_1.cn)('fixed text-[15px] flex flex-col shadow-lg rounded-2xl border start-2 inset-y-2 w-[85%] max-w-[380px] z-40 bg-fd-background data-[state=open]:animate-fd-sidebar-in data-[state=closed]:animate-fd-sidebar-out', !present && 'invisible', props.className)}>
              {props.children}
            </aside>);
            }}
        </react_presence_1.Presence>
      </Context.Provider>);
    }
    return (<aside id="nd-sidebar" {...props} data-collapsed={collapsed} className={(0, cn_1.cn)('fixed start-0 flex flex-col items-end top-(--fd-sidebar-top) bottom-(--fd-sidebar-margin) z-20 bg-fd-card text-sm border-e max-md:hidden *:w-(--fd-sidebar-width)', collapsed && [
            'rounded-xl border',
            hover
                ? 'z-50 translate-x-2 shadow-lg'
                : 'opacity-0 -translate-x-(--fd-sidebar-offset) rtl:translate-x-(--fd-sidebar-offset)',
        ], props.className)} style={__assign(__assign({ transition: ['top', 'opacity', 'translate', 'width']
                .map(function (v) { return "".concat(v, " ease 250ms"); })
                .join(', ') }, props.style), { '--fd-sidebar-offset': 'calc(100% - 16px)', '--fd-sidebar-margin': collapsed ? '0.5rem' : '0px', width: collapsed
                ? 'var(--fd-sidebar-width)'
                : 'calc(var(--fd-sidebar-width) + var(--fd-layout-offset))', '--fd-sidebar-top': "calc(var(--fd-banner-height) + var(--fd-nav-height) + var(--fd-sidebar-margin))" })} onPointerEnter={function (e) {
            if (!collapsible ||
                !collapsed ||
                e.pointerType === 'touch' ||
                closeTimeRef.current > Date.now())
                return;
            window.clearTimeout(timerRef.current);
            setHover(true);
        }} onPointerLeave={function (e) {
            if (!collapsible || !collapsed || e.pointerType === 'touch')
                return;
            window.clearTimeout(timerRef.current);
            timerRef.current = window.setTimeout(function () {
                setHover(false);
                closeTimeRef.current = Date.now() + 150;
            }, Math.min(e.clientX, document.body.clientWidth - e.clientX) > 100
                ? 0
                : 500);
        }}>
      <Context.Provider value={context}>{props.children}</Context.Provider>
    </aside>);
}
function SidebarHeader(props) {
    return (<div {...props} className={(0, cn_1.cn)('flex flex-col gap-3 p-4 pb-2', props.className)}>
      {props.children}
    </div>);
}
function SidebarFooter(props) {
    return (<div {...props} className={(0, cn_1.cn)('flex flex-col border-t px-4 py-3', props.className)}>
      {props.children}
    </div>);
}
function SidebarViewport(props) {
    return (<scroll_area_1.ScrollArea {...props} className={(0, cn_1.cn)('h-full', props.className)}>
      <scroll_area_1.ScrollViewport className="p-4" style={{
            maskImage: 'linear-gradient(to bottom, transparent, white 12px, white calc(100% - 12px), transparent)',
        }}>
        {props.children}
      </scroll_area_1.ScrollViewport>
    </scroll_area_1.ScrollArea>);
}
function SidebarSeparator(props) {
    var level = useInternalContext().level;
    return (<p {...props} className={(0, cn_1.cn)('inline-flex items-center gap-2 mb-1.5 px-2 empty:mb-0 [&_svg]:size-4 [&_svg]:shrink-0', props.className)} style={__assign({ paddingInlineStart: getOffset(level) }, props.style)}>
      {props.children}
    </p>);
}
function SidebarItem(_a) {
    var icon = _a.icon, props = __rest(_a, ["icon"]);
    var pathname = (0, framework_1.usePathname)();
    var active = props.href !== undefined && (0, is_active_1.isActive)(props.href, pathname, false);
    var _b = useInternalContext(), prefetch = _b.prefetch, level = _b.level;
    return (<link_1.default {...props} data-active={active} className={(0, cn_1.cn)(itemVariants({ active: active }), props.className)} prefetch={prefetch} style={__assign({ paddingInlineStart: getOffset(level) }, props.style)}>
      <Border level={level} active={active}/>
      {icon !== null && icon !== void 0 ? icon : (props.external ? <lucide_react_1.ExternalLink /> : null)}
      {props.children}
    </link_1.default>);
}
function SidebarFolder(_a) {
    var _b = _a.defaultOpen, defaultOpen = _b === void 0 ? false : _b, props = __rest(_a, ["defaultOpen"]);
    var _c = (0, react_1.useState)(defaultOpen), open = _c[0], setOpen = _c[1];
    (0, use_on_change_1.useOnChange)(defaultOpen, function (v) {
        if (v)
            setOpen(v);
    });
    return (<collapsible_1.Collapsible open={open} onOpenChange={setOpen} {...props}>
      <FolderContext.Provider value={(0, react_1.useMemo)(function () { return ({ open: open, setOpen: setOpen }); }, [open])}>
        {props.children}
      </FolderContext.Provider>
    </collapsible_1.Collapsible>);
}
function SidebarFolderTrigger(_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    var level = useInternalContext().level;
    var open = useFolderContext().open;
    return (<collapsible_1.CollapsibleTrigger className={(0, cn_1.cn)(itemVariants({ active: false }), 'w-full', className)} {...props} style={__assign({ paddingInlineStart: getOffset(level) }, props.style)}>
      <Border level={level}/>
      {props.children}
      <lucide_react_1.ChevronDown data-icon className={(0, cn_1.cn)('ms-auto transition-transform', !open && '-rotate-90')}/>
    </collapsible_1.CollapsibleTrigger>);
}
function SidebarFolderLink(props) {
    var _a = useFolderContext(), open = _a.open, setOpen = _a.setOpen;
    var _b = useInternalContext(), prefetch = _b.prefetch, level = _b.level;
    var pathname = (0, framework_1.usePathname)();
    var active = props.href !== undefined && (0, is_active_1.isActive)(props.href, pathname, false);
    return (<link_1.default {...props} data-active={active} className={(0, cn_1.cn)(itemVariants({ active: active }), 'w-full', props.className)} onClick={function (e) {
            if (e.target instanceof HTMLElement &&
                e.target.hasAttribute('data-icon')) {
                setOpen(!open);
                e.preventDefault();
            }
            else {
                setOpen(active ? !open : true);
            }
        }} prefetch={prefetch} style={__assign({ paddingInlineStart: getOffset(level) }, props.style)}>
      <Border level={level} active={active}/>
      {props.children}
      <lucide_react_1.ChevronDown data-icon className={(0, cn_1.cn)('ms-auto transition-transform', !open && '-rotate-90')}/>
    </link_1.default>);
}
function SidebarFolderContent(props) {
    var ctx = useInternalContext();
    return (<collapsible_1.CollapsibleContent {...props} className={(0, cn_1.cn)('relative', props.className)}>
      <Context.Provider value={(0, react_1.useMemo)(function () { return (__assign(__assign({}, ctx), { level: ctx.level + 1 })); }, [ctx])}>
        {ctx.level === 1 && (<div className="absolute w-px inset-y-1 bg-fd-border start-2.5"/>)}
        {props.children}
      </Context.Provider>
    </collapsible_1.CollapsibleContent>);
}
function SidebarCollapseTrigger(props) {
    var _a = (0, sidebar_1.useSidebar)(), collapsed = _a.collapsed, setCollapsed = _a.setCollapsed;
    return (<button type="button" aria-label="Collapse Sidebar" data-collapsed={collapsed} {...props} onClick={function () {
            setCollapsed(function (prev) { return !prev; });
        }}>
      {props.children}
    </button>);
}
function useFolderContext() {
    var ctx = (0, react_1.useContext)(FolderContext);
    if (!ctx)
        throw new Error('Missing sidebar folder');
    return ctx;
}
function useInternalContext() {
    var ctx = (0, react_1.useContext)(Context);
    if (!ctx)
        throw new Error('<Sidebar /> component required.');
    return ctx;
}
/**
 * Render sidebar items from page tree
 */
function SidebarPageTree(props) {
    var root = (0, tree_1.useTreeContext)().root;
    return (0, react_1.useMemo)(function () {
        var _a;
        var _b = (_a = props.components) !== null && _a !== void 0 ? _a : {}, Separator = _b.Separator, Item = _b.Item, Folder = _b.Folder;
        function renderSidebarList(items, level) {
            return items.map(function (item, i) {
                if (item.type === 'separator') {
                    if (Separator)
                        return <Separator key={i} item={item}/>;
                    return (<SidebarSeparator key={i} className={(0, cn_1.cn)(i !== 0 && 'mt-6')}>
              {item.icon}
              {item.name}
            </SidebarSeparator>);
                }
                if (item.type === 'folder') {
                    var children = renderSidebarList(item.children, level + 1);
                    if (Folder)
                        return (<Folder key={i} item={item} level={level}>
                {children}
              </Folder>);
                    return (<PageTreeFolder key={i} item={item}>
              {children}
            </PageTreeFolder>);
                }
                if (Item)
                    return <Item key={item.url} item={item}/>;
                return (<SidebarItem key={item.url} href={item.url} external={item.external} icon={item.icon}>
            {item.name}
          </SidebarItem>);
            });
        }
        return (<react_1.Fragment key={root.$id}>{renderSidebarList(root.children, 1)}</react_1.Fragment>);
    }, [props.components, root]);
}
function PageTreeFolder(_a) {
    var _b;
    var item = _a.item, props = __rest(_a, ["item"]);
    var _c = useInternalContext(), defaultOpenLevel = _c.defaultOpenLevel, level = _c.level;
    var path = (0, tree_1.useTreePath)();
    return (<SidebarFolder defaultOpen={((_b = item.defaultOpen) !== null && _b !== void 0 ? _b : defaultOpenLevel >= level) || path.includes(item)}>
      {item.index ? (<SidebarFolderLink href={item.index.url} external={item.index.external} {...props}>
          {item.icon}
          {item.name}
        </SidebarFolderLink>) : (<SidebarFolderTrigger {...props}>
          {item.icon}
          {item.name}
        </SidebarFolderTrigger>)}
      <SidebarFolderContent>{props.children}</SidebarFolderContent>
    </SidebarFolder>);
}
function getOffset(level) {
    return "calc(var(--spacing) * ".concat(level > 1 ? level * 3 : 2, ")");
}
function Border(_a) {
    var level = _a.level, active = _a.active;
    if (level <= 1)
        return null;
    return (<div className={(0, cn_1.cn)('absolute w-px inset-y-3 z-2 start-2.5 md:inset-y-2', active && 'bg-fd-primary')}/>);
}
