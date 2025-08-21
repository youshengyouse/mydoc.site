import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Fragment, useMemo } from 'react';
import { cn } from '../../utils/cn.js';
import { getLinks, } from '../../layouts/shared.js';
import { NavProvider } from '../../contexts/layout.js';
import { Navbar, NavbarLink, NavbarMenu, NavbarMenuContent, NavbarMenuLink, NavbarMenuTrigger, } from '../../layouts/home/navbar.js';
import { LargeSearchToggle, SearchToggle, } from '../../components/layout/search-toggle.js';
import { ThemeToggle } from '../../components/layout/theme-toggle.js';
import { LanguageToggle, LanguageToggleText, } from '../../components/layout/language-toggle.js';
import { ChevronDown, Languages } from '../../icons.js';
import Link from 'fumadocs-core/link';
import { Menu, MenuContent, MenuLinkItem, MenuTrigger, } from '../../layouts/home/menu.js';
import { buttonVariants } from '../../components/ui/button.js';
export function HomeLayout(props) {
    const { nav = {}, links, githubUrl, i18n, disableThemeSwitch = false, themeSwitch = { enabled: !disableThemeSwitch }, searchToggle, ...rest } = props;
    return (_jsx(NavProvider, { transparentMode: nav?.transparentMode, children: _jsxs("main", { id: "nd-home-layout", ...rest, className: cn('flex flex-1 flex-col pt-14', rest.className), children: [nav.enabled !== false &&
                    (nav.component ?? (_jsx(Header, { links: links, nav: nav, themeSwitch: themeSwitch, searchToggle: searchToggle, i18n: i18n, githubUrl: githubUrl }))), props.children] }) }));
}
export function Header({ nav = {}, i18n = false, links, githubUrl, themeSwitch = {}, searchToggle = {}, }) {
    const finalLinks = useMemo(() => getLinks(links, githubUrl), [links, githubUrl]);
    const navItems = finalLinks.filter((item) => ['nav', 'all'].includes(item.on ?? 'all'));
    const menuItems = finalLinks.filter((item) => ['menu', 'all'].includes(item.on ?? 'all'));
    return (_jsxs(Navbar, { children: [_jsx(Link, { href: nav.url ?? '/', className: "inline-flex items-center gap-2.5 font-semibold", children: nav.title }), nav.children, _jsx("ul", { className: "flex flex-row items-center gap-2 px-6 max-sm:hidden", children: navItems
                    .filter((item) => !isSecondary(item))
                    .map((item, i) => (_jsx(NavbarLinkItem, { item: item, className: "text-sm" }, i))) }), _jsxs("div", { className: "flex flex-row items-center justify-end gap-1.5 flex-1 max-lg:hidden", children: [searchToggle.enabled !== false &&
                        (searchToggle.components?.lg ?? (_jsx(LargeSearchToggle, { className: "w-full rounded-full ps-2.5 max-w-[240px]", hideIfDisabled: true }))), themeSwitch.enabled !== false &&
                        (themeSwitch.component ?? _jsx(ThemeToggle, { mode: themeSwitch?.mode })), i18n ? (_jsx(LanguageToggle, { children: _jsx(Languages, { className: "size-5" }) })) : null, _jsx("div", { className: "flex flex-row items-center empty:hidden", children: navItems.filter(isSecondary).map((item, i) => (_jsx(NavbarLinkItem, { item: item }, i))) })] }), _jsxs("ul", { className: "flex flex-row items-center ms-auto -me-1.5 lg:hidden", children: [searchToggle.enabled !== false &&
                        (searchToggle.components?.sm ?? (_jsx(SearchToggle, { className: "p-2", hideIfDisabled: true }))), _jsxs(Menu, { children: [_jsx(MenuTrigger, { "aria-label": "Toggle Menu", className: cn(buttonVariants({
                                    size: 'icon',
                                    color: 'ghost',
                                    className: 'group',
                                })), enableHover: nav.enableHoverToOpen, children: _jsx(ChevronDown, { className: "!size-5.5 transition-transform duration-300 group-data-[state=open]:rotate-180" }) }), _jsxs(MenuContent, { className: "sm:flex-row sm:items-center sm:justify-end", children: [menuItems
                                        .filter((item) => !isSecondary(item))
                                        .map((item, i) => (_jsx(MenuLinkItem, { item: item, className: "sm:hidden" }, i))), _jsxs("div", { className: "-ms-1.5 flex flex-row items-center gap-1.5 max-sm:mt-2", children: [menuItems.filter(isSecondary).map((item, i) => (_jsx(MenuLinkItem, { item: item, className: "-me-1.5" }, i))), _jsx("div", { role: "separator", className: "flex-1" }), i18n ? (_jsxs(LanguageToggle, { children: [_jsx(Languages, { className: "size-5" }), _jsx(LanguageToggleText, {}), _jsx(ChevronDown, { className: "size-3 text-fd-muted-foreground" })] })) : null, themeSwitch.enabled !== false &&
                                                (themeSwitch.component ?? (_jsx(ThemeToggle, { mode: themeSwitch?.mode })))] })] })] })] })] }));
}
function NavbarLinkItem({ item, ...props }) {
    if (item.type === 'custom')
        return _jsx("div", { ...props, children: item.children });
    if (item.type === 'menu') {
        const children = item.items.map((child, j) => {
            if (child.type === 'custom')
                return _jsx(Fragment, { children: child.children }, j);
            const { banner = child.icon ? (_jsx("div", { className: "w-fit rounded-md border bg-fd-muted p-1 [&_svg]:size-4", children: child.icon })) : null, ...rest } = child.menu ?? {};
            return (_jsx(NavbarMenuLink, { href: child.url, external: child.external, ...rest, children: rest.children ?? (_jsxs(_Fragment, { children: [banner, _jsx("p", { className: "text-[15px] font-medium", children: child.text }), _jsx("p", { className: "text-sm text-fd-muted-foreground empty:hidden", children: child.description })] })) }, j));
        });
        return (_jsxs(NavbarMenu, { children: [_jsx(NavbarMenuTrigger, { ...props, children: item.url ? _jsx(Link, { href: item.url, children: item.text }) : item.text }), _jsx(NavbarMenuContent, { children: children })] }));
    }
    return (_jsx(NavbarLink, { ...props, item: item, variant: item.type, "aria-label": item.type === 'icon' ? item.label : undefined, children: item.type === 'icon' ? item.icon : item.text }));
}
function isSecondary(item) {
    if ('secondary' in item && item.secondary != null)
        return item.secondary;
    return item.type === 'icon';
}
