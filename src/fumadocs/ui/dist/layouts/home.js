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
exports.HomeLayout = HomeLayout;
exports.Header = Header;
var react_1 = require("react");
var cn_1 = require("@/utils/cn");
var shared_1 = require("./shared");
var layout_1 = require("@/contexts/layout");
var navbar_1 = require("@/layouts/home/navbar");
var search_toggle_1 = require("@/components/layout/search-toggle");
var theme_toggle_1 = require("@/components/layout/theme-toggle");
var language_toggle_1 = require("@/components/layout/language-toggle");
var lucide_react_1 = require("lucide-react");
var link_1 = require("fumadocs-core/link");
var menu_1 = require("@/layouts/home/menu");
var button_1 = require("@/components/ui/button");
function HomeLayout(props) {
    var _a;
    var _b = props.nav, nav = _b === void 0 ? {} : _b, links = props.links, githubUrl = props.githubUrl, i18n = props.i18n, _c = props.disableThemeSwitch, disableThemeSwitch = _c === void 0 ? false : _c, _d = props.themeSwitch, themeSwitch = _d === void 0 ? { enabled: !disableThemeSwitch } : _d, searchToggle = props.searchToggle, rest = __rest(props, ["nav", "links", "githubUrl", "i18n", "disableThemeSwitch", "themeSwitch", "searchToggle"]);
    return (<layout_1.NavProvider transparentMode={nav === null || nav === void 0 ? void 0 : nav.transparentMode}>
      <main id="nd-home-layout" {...rest} className={(0, cn_1.cn)('flex flex-1 flex-col pt-14', rest.className)}>
        {nav.enabled !== false &&
            ((_a = nav.component) !== null && _a !== void 0 ? _a : (<Header links={links} nav={nav} themeSwitch={themeSwitch} searchToggle={searchToggle} i18n={i18n} githubUrl={githubUrl}/>))}
        {props.children}
      </main>
    </layout_1.NavProvider>);
}
function Header(_a) {
    var _b, _c, _d, _e, _f, _g, _h;
    var _j = _a.nav, nav = _j === void 0 ? {} : _j, _k = _a.i18n, i18n = _k === void 0 ? false : _k, links = _a.links, githubUrl = _a.githubUrl, _l = _a.themeSwitch, themeSwitch = _l === void 0 ? {} : _l, _m = _a.searchToggle, searchToggle = _m === void 0 ? {} : _m;
    var finalLinks = (0, react_1.useMemo)(function () { return (0, shared_1.getLinks)(links, githubUrl); }, [links, githubUrl]);
    var navItems = finalLinks.filter(function (item) { var _a; return ['nav', 'all'].includes((_a = item.on) !== null && _a !== void 0 ? _a : 'all'); });
    var menuItems = finalLinks.filter(function (item) { var _a; return ['menu', 'all'].includes((_a = item.on) !== null && _a !== void 0 ? _a : 'all'); });
    return (<navbar_1.Navbar>
      <link_1.default href={(_b = nav.url) !== null && _b !== void 0 ? _b : '/'} className="inline-flex items-center gap-2.5 font-semibold">
        {nav.title}
      </link_1.default>
      {nav.children}
      <ul className="flex flex-row items-center gap-2 px-6 max-sm:hidden">
        {navItems
            .filter(function (item) { return !isSecondary(item); })
            .map(function (item, i) { return (<NavbarLinkItem key={i} item={item} className="text-sm"/>); })}
      </ul>
      <div className="flex flex-row items-center justify-end gap-1.5 flex-1">
        {searchToggle.enabled !== false && (<>
            {(_d = (_c = searchToggle.components) === null || _c === void 0 ? void 0 : _c.sm) !== null && _d !== void 0 ? _d : (<search_toggle_1.SearchToggle className="p-2 lg:hidden" hideIfDisabled/>)}
            {(_f = (_e = searchToggle.components) === null || _e === void 0 ? void 0 : _e.lg) !== null && _f !== void 0 ? _f : (<search_toggle_1.LargeSearchToggle className="w-full rounded-full ps-2.5 max-w-[240px] max-lg:hidden" hideIfDisabled/>)}
          </>)}
        {themeSwitch.enabled !== false &&
            ((_g = themeSwitch.component) !== null && _g !== void 0 ? _g : (<theme_toggle_1.ThemeToggle className="max-lg:hidden" mode={themeSwitch === null || themeSwitch === void 0 ? void 0 : themeSwitch.mode}/>))}
        {i18n ? (<language_toggle_1.LanguageToggle className="max-lg:hidden">
            <lucide_react_1.Languages className="size-5"/>
          </language_toggle_1.LanguageToggle>) : null}
      </div>
      <ul className="flex flex-row items-center">
        {navItems.filter(isSecondary).map(function (item, i) { return (<NavbarLinkItem key={i} item={item} className="max-lg:hidden"/>); })}
        <menu_1.Menu className="lg:hidden">
          <menu_1.MenuTrigger aria-label="Toggle Menu" className={(0, cn_1.cn)((0, button_1.buttonVariants)({
            size: 'icon',
            color: 'ghost',
            className: 'group -me-1.5',
        }))} enableHover={nav.enableHoverToOpen}>
            <lucide_react_1.ChevronDown className="!size-5.5 transition-transform duration-300 group-data-[state=open]:rotate-180"/>
          </menu_1.MenuTrigger>
          <menu_1.MenuContent className="sm:flex-row sm:items-center sm:justify-end">
            {menuItems
            .filter(function (item) { return !isSecondary(item); })
            .map(function (item, i) { return (<menu_1.MenuLinkItem key={i} item={item} className="sm:hidden"/>); })}
            <div className="-ms-1.5 flex flex-row items-center gap-1.5 max-sm:mt-2">
              {menuItems.filter(isSecondary).map(function (item, i) { return (<menu_1.MenuLinkItem key={i} item={item} className="-me-1.5"/>); })}
              <div role="separator" className="flex-1"/>
              {i18n ? (<language_toggle_1.LanguageToggle>
                  <lucide_react_1.Languages className="size-5"/>
                  <language_toggle_1.LanguageToggleText />
                  <lucide_react_1.ChevronDown className="size-3 text-fd-muted-foreground"/>
                </language_toggle_1.LanguageToggle>) : null}
              {themeSwitch.enabled !== false &&
            ((_h = themeSwitch.component) !== null && _h !== void 0 ? _h : (<theme_toggle_1.ThemeToggle mode={themeSwitch === null || themeSwitch === void 0 ? void 0 : themeSwitch.mode}/>))}
            </div>
          </menu_1.MenuContent>
        </menu_1.Menu>
      </ul>
    </navbar_1.Navbar>);
}
function NavbarLinkItem(_a) {
    var item = _a.item, props = __rest(_a, ["item"]);
    if (item.type === 'custom')
        return <div {...props}>{item.children}</div>;
    if (item.type === 'menu') {
        var children = item.items.map(function (child, j) {
            var _a, _b;
            if (child.type === 'custom')
                return <react_1.Fragment key={j}>{child.children}</react_1.Fragment>;
            var _c = (_a = child.menu) !== null && _a !== void 0 ? _a : {}, _d = _c.banner, banner = _d === void 0 ? child.icon ? (<div className="w-fit rounded-md border bg-fd-muted p-1 [&_svg]:size-4">
            {child.icon}
          </div>) : null : _d, rest = __rest(_c, ["banner"]);
            return (<navbar_1.NavbarMenuLink key={j} href={child.url} external={child.external} {...rest}>
          {(_b = rest.children) !== null && _b !== void 0 ? _b : (<>
              {banner}
              <p className="text-[15px] font-medium">{child.text}</p>
              <p className="text-sm text-fd-muted-foreground empty:hidden">
                {child.description}
              </p>
            </>)}
        </navbar_1.NavbarMenuLink>);
        });
        return (<navbar_1.NavbarMenu>
        <navbar_1.NavbarMenuTrigger {...props}>
          {item.url ? <link_1.default href={item.url}>{item.text}</link_1.default> : item.text}
        </navbar_1.NavbarMenuTrigger>
        <navbar_1.NavbarMenuContent>{children}</navbar_1.NavbarMenuContent>
      </navbar_1.NavbarMenu>);
    }
    return (<navbar_1.NavbarLink {...props} item={item} variant={item.type} aria-label={item.type === 'icon' ? item.label : undefined}>
      {item.type === 'icon' ? item.icon : item.text}
    </navbar_1.NavbarLink>);
}
function isSecondary(item) {
    return (('secondary' in item && item.secondary === true) || item.type === 'icon');
}
