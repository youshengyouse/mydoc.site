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
exports.NavbarSidebarTrigger = exports.Navbar = exports.CollapsibleControl = void 0;
exports.DocsLayout = DocsLayout;
var react_1 = require("react");
var lucide_react_1 = require("lucide-react");
var cn_1 = require("@/utils/cn");
var button_1 = require("@/components/ui/button");
var sidebar_1 = require("@/components/layout/sidebar");
var links_1 = require("@/layouts/links");
var root_toggle_1 = require("@/components/layout/root-toggle");
var shared_1 = require("./shared");
var language_toggle_1 = require("@/components/layout/language-toggle");
var docs_client_1 = require("@/layouts/docs-client");
Object.defineProperty(exports, "CollapsibleControl", { enumerable: true, get: function () { return docs_client_1.CollapsibleControl; } });
Object.defineProperty(exports, "Navbar", { enumerable: true, get: function () { return docs_client_1.Navbar; } });
Object.defineProperty(exports, "NavbarSidebarTrigger", { enumerable: true, get: function () { return docs_client_1.NavbarSidebarTrigger; } });
var tree_1 = require("@/contexts/tree");
var theme_toggle_1 = require("@/components/layout/theme-toggle");
var shared_2 = require("@/layouts/docs/shared");
var layout_1 = require("@/contexts/layout");
var link_1 = require("fumadocs-core/link");
var search_toggle_1 = require("@/components/layout/search-toggle");
var hide_if_empty_1 = require("fumadocs-core/hide-if-empty");
function DocsLayout(_a) {
    var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
    var _m = _a.nav, _o = _m === void 0 ? {} : _m, transparentMode = _o.transparentMode, nav = __rest(_o, ["transparentMode"]), _p = _a.sidebar, _q = _p === void 0 ? {} : _p, sidebarTabs = _q.tabs, sidebarFooter = _q.footer, sidebarBanner = _q.banner, _r = _q.enabled, sidebarEnabled = _r === void 0 ? true : _r, _s = _q.collapsible, sidebarCollapsible = _s === void 0 ? true : _s, sidebarComponent = _q.component, sidebarComponents = _q.components, sidebarProps = __rest(_q, ["tabs", "footer", "banner", "enabled", "collapsible", "component", "components"]), _t = _a.searchToggle, searchToggle = _t === void 0 ? {} : _t, _u = _a.disableThemeSwitch, disableThemeSwitch = _u === void 0 ? false : _u, _v = _a.themeSwitch, themeSwitch = _v === void 0 ? { enabled: !disableThemeSwitch } : _v, _w = _a.i18n, i18n = _w === void 0 ? false : _w, children = _a.children, props = __rest(_a, ["nav", "sidebar", "searchToggle", "disableThemeSwitch", "themeSwitch", "i18n", "children"]);
    var tabs = (0, react_1.useMemo)(function () { var _a; return (_a = (0, shared_2.getSidebarTabsFromOptions)(sidebarTabs, props.tree)) !== null && _a !== void 0 ? _a : []; }, [sidebarTabs, props.tree]);
    var links = (0, shared_1.getLinks)((_b = props.links) !== null && _b !== void 0 ? _b : [], props.githubUrl);
    var variables = (0, cn_1.cn)('md:[--fd-sidebar-width:268px] lg:[--fd-sidebar-width:286px] xl:[--fd-toc-width:286px]', !nav.component && nav.enabled !== false
        ? '[--fd-nav-height:56px] md:[--fd-nav-height:0px]'
        : undefined);
    var sidebar = sidebarComponent !== null && sidebarComponent !== void 0 ? sidebarComponent : (<>
      {sidebarCollapsible ? <docs_client_1.CollapsibleControl /> : null}
      <sidebar_1.Sidebar {...sidebarProps} collapsible={sidebarCollapsible}>
        <hide_if_empty_1.HideIfEmpty>
          <sidebar_1.SidebarHeader className="data-[empty=true]:hidden">
            <div className="flex max-md:hidden">
              <link_1.default href={(_c = nav.url) !== null && _c !== void 0 ? _c : '/'} className="inline-flex text-[15px] items-center gap-2.5 font-medium me-auto">
                {nav.title}
              </link_1.default>
              {nav.children}
              {sidebarCollapsible && (<sidebar_1.SidebarCollapseTrigger className={(0, cn_1.cn)((0, button_1.buttonVariants)({
                color: 'ghost',
                size: 'icon-sm',
                className: 'mb-auto text-fd-muted-foreground max-md:hidden',
            }))}>
                  <lucide_react_1.Sidebar />
                </sidebar_1.SidebarCollapseTrigger>)}
            </div>
            {searchToggle.enabled !== false &&
            ((_e = (_d = searchToggle.components) === null || _d === void 0 ? void 0 : _d.lg) !== null && _e !== void 0 ? _e : (<search_toggle_1.LargeSearchToggle hideIfDisabled className="max-md:hidden"/>))}
            {tabs.length > 0 && <root_toggle_1.RootToggle options={tabs}/>}

            {sidebarBanner}
          </sidebar_1.SidebarHeader>
        </hide_if_empty_1.HideIfEmpty>
        <sidebar_1.SidebarViewport>
          {links
            .filter(function (v) { return v.type !== 'icon'; })
            .map(function (item, i, list) { return (<shared_2.SidebarLinkItem key={i} item={item} className={(0, cn_1.cn)(i === list.length - 1 && 'mb-4')}/>); })}
          <sidebar_1.SidebarPageTree components={sidebarComponents}/>
        </sidebar_1.SidebarViewport>
        <hide_if_empty_1.HideIfEmpty>
          <sidebar_1.SidebarFooter className="data-[empty=true]:hidden">
            <div className="flex items-center justify-end empty:hidden">
              {links
            .filter(function (item) { return item.type === 'icon'; })
            .map(function (item, i, arr) { return (<links_1.BaseLinkItem key={i} item={item} className={(0, cn_1.cn)((0, button_1.buttonVariants)({ size: 'icon', color: 'ghost' }), 'text-fd-muted-foreground md:[&_svg]:size-4.5', i === arr.length - 1 && 'me-auto')} aria-label={item.label}>
                    {item.icon}
                  </links_1.BaseLinkItem>); })}
              {i18n ? (<language_toggle_1.LanguageToggle className="me-1.5">
                  <lucide_react_1.Languages className="size-4.5"/>
                  <language_toggle_1.LanguageToggleText className="md:hidden"/>
                </language_toggle_1.LanguageToggle>) : null}
              {themeSwitch.enabled !== false &&
            ((_f = themeSwitch.component) !== null && _f !== void 0 ? _f : (<theme_toggle_1.ThemeToggle className="p-0" mode={themeSwitch.mode}/>))}
            </div>
            {sidebarFooter}
          </sidebar_1.SidebarFooter>
        </hide_if_empty_1.HideIfEmpty>
      </sidebar_1.Sidebar>
    </>);
    return (<tree_1.TreeContextProvider tree={props.tree}>
      <layout_1.NavProvider transparentMode={transparentMode}>
        {nav.enabled !== false &&
            ((_g = nav.component) !== null && _g !== void 0 ? _g : (<docs_client_1.Navbar className="h-14 md:hidden">
              <link_1.default href={(_h = nav.url) !== null && _h !== void 0 ? _h : '/'} className="inline-flex items-center gap-2.5 font-semibold">
                {nav.title}
              </link_1.default>
              <div className="flex-1">{nav.children}</div>
              {(searchToggle === null || searchToggle === void 0 ? void 0 : searchToggle.enabled) !== false &&
                    ((_k = (_j = searchToggle.components) === null || _j === void 0 ? void 0 : _j.sm) !== null && _k !== void 0 ? _k : (<search_toggle_1.SearchToggle className="p-2" hideIfDisabled/>))}
              <docs_client_1.NavbarSidebarTrigger className="p-2 -me-1.5 md:hidden"/>
            </docs_client_1.Navbar>))}
        <docs_client_1.LayoutBody {...props.containerProps} className={(0, cn_1.cn)(variables, (_l = props.containerProps) === null || _l === void 0 ? void 0 : _l.className)}>
          {sidebarEnabled && sidebar}
          {children}
        </docs_client_1.LayoutBody>
      </layout_1.NavProvider>
    </tree_1.TreeContextProvider>);
}
