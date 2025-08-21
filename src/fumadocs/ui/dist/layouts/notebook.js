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
exports.NavbarSidebarTrigger = exports.Navbar = void 0;
exports.DocsLayout = DocsLayout;
var react_1 = require("react");
var shared_1 = require("@/layouts/shared");
var sidebar_1 = require("@/components/layout/sidebar");
var tree_1 = require("@/contexts/tree");
var cn_1 = require("@/utils/cn");
var button_1 = require("@/components/ui/button");
var lucide_react_1 = require("lucide-react");
var links_1 = require("@/layouts/links");
var language_toggle_1 = require("@/components/layout/language-toggle");
var theme_toggle_1 = require("@/components/layout/theme-toggle");
var popover_1 = require("@/components/ui/popover");
var shared_2 = require("@/layouts/docs/shared");
var notebook_client_1 = require("./notebook-client");
Object.defineProperty(exports, "Navbar", { enumerable: true, get: function () { return notebook_client_1.Navbar; } });
Object.defineProperty(exports, "NavbarSidebarTrigger", { enumerable: true, get: function () { return notebook_client_1.NavbarSidebarTrigger; } });
var layout_1 = require("@/contexts/layout");
var root_toggle_1 = require("@/components/layout/root-toggle");
var link_1 = require("fumadocs-core/link");
var search_toggle_1 = require("@/components/layout/search-toggle");
var hide_if_empty_1 = require("fumadocs-core/hide-if-empty");
function DocsLayout(props) {
    var _a, _b, _c, _d, _e, _f, _g;
    var _h = props.tabMode, tabMode = _h === void 0 ? 'sidebar' : _h, _j = props.nav, _k = _j === void 0 ? {} : _j, transparentMode = _k.transparentMode, nav = __rest(_k, ["transparentMode"]), _l = props.sidebar, _m = _l === void 0 ? {} : _l, tabOptions = _m.tabs, sidebarBanner = _m.banner, sidebarFooter = _m.footer, sidebarComponents = _m.components, sidebar = __rest(_m, ["tabs", "banner", "footer", "components"]), _o = props.i18n, i18n = _o === void 0 ? false : _o, _p = props.disableThemeSwitch, disableThemeSwitch = _p === void 0 ? false : _p, _q = props.themeSwitch, themeSwitch = _q === void 0 ? { enabled: !disableThemeSwitch } : _q;
    var navMode = (_a = nav.mode) !== null && _a !== void 0 ? _a : 'auto';
    var links = (0, shared_1.getLinks)((_b = props.links) !== null && _b !== void 0 ? _b : [], props.githubUrl);
    var tabs = (0, react_1.useMemo)(function () { var _a; return (_a = (0, shared_2.getSidebarTabsFromOptions)(tabOptions, props.tree)) !== null && _a !== void 0 ? _a : []; }, [tabOptions, props.tree]);
    var variables = (0, cn_1.cn)('[--fd-nav-height:56px] md:[--fd-sidebar-width:286px] md:[--fd-nav-height:64px] xl:[--fd-toc-width:286px]', tabs.length > 0 && tabMode === 'navbar' && 'lg:[--fd-nav-height:104px]');
    var sidebarHeader = (<div className="flex justify-between max-md:hidden">
      <link_1.default href={(_c = nav.url) !== null && _c !== void 0 ? _c : '/'} className="inline-flex items-center gap-2.5 font-medium">
        {nav.title}
      </link_1.default>
      {((_d = sidebar.collapsible) !== null && _d !== void 0 ? _d : true) && (<sidebar_1.SidebarCollapseTrigger className={(0, cn_1.cn)((0, button_1.buttonVariants)({
                color: 'ghost',
                size: 'icon-sm',
                className: 'mt-px mb-auto text-fd-muted-foreground',
            }))}>
          <lucide_react_1.Sidebar />
        </sidebar_1.SidebarCollapseTrigger>)}
    </div>);
    return (<tree_1.TreeContextProvider tree={props.tree}>
      <layout_1.NavProvider transparentMode={transparentMode}>
        <notebook_client_1.LayoutBody {...props.containerProps} className={(0, cn_1.cn)(variables, (_e = props.containerProps) === null || _e === void 0 ? void 0 : _e.className)}>
          <sidebar_1.Sidebar {...sidebar} className={(0, cn_1.cn)(navMode === 'top'
            ? 'border-e-0 md:bg-transparent'
            : 'md:[--fd-nav-height:0px]', sidebar.className)}>
            <hide_if_empty_1.HideIfEmpty>
              <sidebar_1.SidebarHeader className="data-[empty=true]:hidden">
                {navMode === 'auto' && sidebarHeader}
                {nav.children}
                {sidebarBanner}
                {tabMode === 'sidebar' && tabs.length > 0 ? (<root_toggle_1.RootToggle className="mb-2" options={tabs}/>) : null}
                {tabMode === 'navbar' && tabs.length > 0 && (<root_toggle_1.RootToggle options={tabs} className="lg:hidden"/>)}
              </sidebar_1.SidebarHeader>
            </hide_if_empty_1.HideIfEmpty>
            <sidebar_1.SidebarViewport>
              {links
            .filter(function (item) { return item.type !== 'icon'; })
            .map(function (item, i) { return (<shared_2.SidebarLinkItem key={i} item={item} className={(0, cn_1.cn)('lg:hidden', i === links.length - 1 && 'mb-4')}/>); })}

              <sidebar_1.SidebarPageTree components={sidebarComponents}/>
            </sidebar_1.SidebarViewport>
            <hide_if_empty_1.HideIfEmpty>
              <sidebar_1.SidebarFooter className="flex flex-row items-center justify-end data-[empty=true]:hidden">
                <div className="flex items-center flex-1 empty:hidden lg:hidden">
                  {links
            .filter(function (item) { return item.type === 'icon'; })
            .map(function (item, i) { return (<links_1.BaseLinkItem key={i} item={item} className={(0, cn_1.cn)((0, button_1.buttonVariants)({
                size: 'icon-sm',
                color: 'ghost',
                className: 'text-fd-muted-foreground',
            }))} aria-label={item.label}>
                        {item.icon}
                      </links_1.BaseLinkItem>); })}
                </div>
                {i18n ? (<language_toggle_1.LanguageToggle className="me-auto md:hidden">
                    <lucide_react_1.Languages className="size-4.5 text-fd-muted-foreground"/>
                  </language_toggle_1.LanguageToggle>) : null}
                {themeSwitch.enabled !== false &&
            ((_f = themeSwitch.component) !== null && _f !== void 0 ? _f : (<theme_toggle_1.ThemeToggle className="md:hidden" mode={(_g = themeSwitch === null || themeSwitch === void 0 ? void 0 : themeSwitch.mode) !== null && _g !== void 0 ? _g : 'light-dark-system'}/>))}
                {sidebarFooter}
              </sidebar_1.SidebarFooter>
            </hide_if_empty_1.HideIfEmpty>
          </sidebar_1.Sidebar>
          <DocsNavbar {...props} links={links} tabs={tabMode == 'navbar' ? tabs : []}/>
          {props.children}
        </notebook_client_1.LayoutBody>
      </layout_1.NavProvider>
    </tree_1.TreeContextProvider>);
}
function DocsNavbar(_a) {
    var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
    var links = _a.links, tabs = _a.tabs, _r = _a.searchToggle, searchToggle = _r === void 0 ? {} : _r, _s = _a.themeSwitch, themeSwitch = _s === void 0 ? {} : _s, props = __rest(_a, ["links", "tabs", "searchToggle", "themeSwitch"]);
    var navMode = (_c = (_b = props.nav) === null || _b === void 0 ? void 0 : _b.mode) !== null && _c !== void 0 ? _c : 'auto';
    var sidebarCollapsible = (_e = (_d = props.sidebar) === null || _d === void 0 ? void 0 : _d.collapsible) !== null && _e !== void 0 ? _e : true;
    var nav = (<link_1.default href={(_g = (_f = props.nav) === null || _f === void 0 ? void 0 : _f.url) !== null && _g !== void 0 ? _g : '/'} className={(0, cn_1.cn)('inline-flex items-center gap-2.5 font-semibold empty:hidden', navMode === 'auto' && 'md:hidden')}>
      {(_h = props.nav) === null || _h === void 0 ? void 0 : _h.title}
    </link_1.default>);
    return (<notebook_client_1.Navbar mode={navMode}>
      <div className={(0, cn_1.cn)('flex border-b px-4 flex-1', navMode === 'auto' && 'md:px-6')}>
        <div className={(0, cn_1.cn)('flex flex-row items-center', navMode === 'top' && 'flex-1 pe-4')}>
          {sidebarCollapsible && navMode === 'auto' ? (<sidebar_1.SidebarCollapseTrigger className={(0, cn_1.cn)((0, button_1.buttonVariants)({
                color: 'ghost',
                size: 'icon-sm',
            }), 'text-fd-muted-foreground -ms-1.5 me-2 data-[collapsed=false]:hidden max-md:hidden')}>
              <lucide_react_1.Sidebar />
            </sidebar_1.SidebarCollapseTrigger>) : null}
          {nav}
        </div>
        {searchToggle.enabled !== false &&
            (((_j = searchToggle.components) === null || _j === void 0 ? void 0 : _j.lg) ? (<div className={(0, cn_1.cn)('w-full my-auto max-md:hidden', navMode === 'top' ? 'rounded-xl max-w-sm' : 'max-w-[240px]')}>
              {(_k = searchToggle.components) === null || _k === void 0 ? void 0 : _k.lg}
            </div>) : (<search_toggle_1.LargeSearchToggle hideIfDisabled className={(0, cn_1.cn)('w-full my-auto max-md:hidden', navMode === 'top'
                    ? 'rounded-xl max-w-sm ps-2.5'
                    : 'max-w-[240px]')}/>))}
        <div className="flex flex-1 flex-row items-center justify-end">
          <div className="flex flex-row items-center gap-6 px-4 empty:hidden max-lg:hidden">
            {links
            .filter(function (item) { return item.type !== 'icon'; })
            .map(function (item, i) { return (<NavbarLinkItem key={i} item={item} className="text-sm text-fd-muted-foreground transition-colors hover:text-fd-accent-foreground"/>); })}
          </div>
          {(_l = props.nav) === null || _l === void 0 ? void 0 : _l.children}
          {searchToggle.enabled !== false &&
            ((_o = (_m = searchToggle.components) === null || _m === void 0 ? void 0 : _m.sm) !== null && _o !== void 0 ? _o : (<search_toggle_1.SearchToggle hideIfDisabled className="p-2 md:hidden"/>))}
          <notebook_client_1.NavbarSidebarTrigger className="p-2 -me-1.5 md:hidden"/>
          {links
            .filter(function (item) { return item.type === 'icon'; })
            .map(function (item, i) { return (<links_1.BaseLinkItem key={i} item={item} className={(0, cn_1.cn)((0, button_1.buttonVariants)({ size: 'icon-sm', color: 'ghost' }), 'text-fd-muted-foreground max-lg:hidden')} aria-label={item.label}>
                {item.icon}
              </links_1.BaseLinkItem>); })}
          {props.i18n ? (<language_toggle_1.LanguageToggle className="max-md:hidden">
              <lucide_react_1.Languages className="size-4.5 text-fd-muted-foreground"/>
            </language_toggle_1.LanguageToggle>) : null}
          {themeSwitch.enabled !== false &&
            ((_p = themeSwitch.component) !== null && _p !== void 0 ? _p : (<theme_toggle_1.ThemeToggle className="ms-2 max-md:hidden" mode={(_q = themeSwitch.mode) !== null && _q !== void 0 ? _q : 'light-dark-system'}/>))}
          {sidebarCollapsible && navMode === 'top' ? (<sidebar_1.SidebarCollapseTrigger className={(0, cn_1.cn)((0, button_1.buttonVariants)({
                color: 'secondary',
                size: 'icon-sm',
            }), 'ms-2 text-fd-muted-foreground rounded-full max-md:hidden')}>
              <lucide_react_1.Sidebar />
            </sidebar_1.SidebarCollapseTrigger>) : null}
        </div>
      </div>
      {tabs.length > 0 && (<notebook_client_1.LayoutTabs className={(0, cn_1.cn)('border-b h-10 max-lg:hidden', navMode === 'top' ? 'px-4' : 'px-6')} options={tabs}/>)}
    </notebook_client_1.Navbar>);
}
function NavbarLinkItem(_a) {
    var item = _a.item, props = __rest(_a, ["item"]);
    if (item.type === 'menu') {
        return (<popover_1.Popover>
        <popover_1.PopoverTrigger {...props} className={(0, cn_1.cn)('inline-flex items-center gap-1.5', props.className)}>
          {item.text}
          <lucide_react_1.ChevronDown className="size-3"/>
        </popover_1.PopoverTrigger>
        <popover_1.PopoverContent className="flex flex-col">
          {item.items.map(function (child, i) {
                if (child.type === 'custom')
                    return <react_1.Fragment key={i}>{child.children}</react_1.Fragment>;
                return (<links_1.BaseLinkItem key={i} item={child} className="inline-flex items-center gap-2 rounded-md p-2 text-start hover:bg-fd-accent hover:text-fd-accent-foreground data-[active=true]:text-fd-primary [&_svg]:size-4">
                {child.icon}
                {child.text}
              </links_1.BaseLinkItem>);
            })}
        </popover_1.PopoverContent>
      </popover_1.Popover>);
    }
    if (item.type === 'custom')
        return item.children;
    return (<links_1.BaseLinkItem item={item} {...props}>
      {item.text}
    </links_1.BaseLinkItem>);
}
