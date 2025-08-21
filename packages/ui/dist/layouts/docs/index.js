import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useMemo, } from 'react';
import { Languages, Sidebar as SidebarIcon } from '../../icons.js';
import { cn } from '../../utils/cn.js';
import { buttonVariants } from '../../components/ui/button.js';
import { Sidebar, SidebarCollapseTrigger, SidebarContent, SidebarContentMobile, SidebarFooter, SidebarHeader, SidebarPageTree, SidebarTrigger, SidebarViewport, } from '../../components/layout/sidebar.js';
import { BaseLinkItem, } from '../../layouts/links.js';
import { RootToggle } from '../../components/layout/root-toggle.js';
import { getLinks } from '../../layouts/shared.js';
import { LanguageToggle, LanguageToggleText, } from '../../components/layout/language-toggle.js';
import { CollapsibleControl, LayoutBody, Navbar } from '../../layouts/docs/client.js';
import { TreeContextProvider } from '../../contexts/tree.js';
import { ThemeToggle } from '../../components/layout/theme-toggle.js';
import { getSidebarTabsFromOptions, SidebarLinkItem, } from '../../layouts/docs/shared.js';
import { NavProvider } from '../../contexts/layout.js';
import Link from 'fumadocs-core/link';
import { LargeSearchToggle, SearchToggle, } from '../../components/layout/search-toggle.js';
import { HideIfEmpty } from 'fumadocs-core/hide-if-empty';
export function DocsLayout({ nav: { transparentMode, ...nav } = {}, sidebar: { tabs: sidebarTabs, enabled: sidebarEnabled = true, ...sidebarProps } = {}, searchToggle = {}, disableThemeSwitch = false, themeSwitch = { enabled: !disableThemeSwitch }, i18n = false, children, ...props }) {
    const tabs = useMemo(() => getSidebarTabsFromOptions(sidebarTabs, props.tree) ?? [], [sidebarTabs, props.tree]);
    const links = getLinks(props.links ?? [], props.githubUrl);
    const sidebarVariables = cn('md:[--fd-sidebar-width:268px] lg:[--fd-sidebar-width:286px]');
    function sidebar() {
        const { footer, banner, collapsible = true, component, components, defaultOpenLevel, prefetch, ...rest } = sidebarProps;
        if (component)
            return component;
        const iconLinks = links.filter((item) => item.type === 'icon');
        const viewport = (_jsxs(SidebarViewport, { children: [links
                    .filter((v) => v.type !== 'icon')
                    .map((item, i, list) => (_jsx(SidebarLinkItem, { item: item, className: cn(i === list.length - 1 && 'mb-4') }, i))), _jsx(SidebarPageTree, { components: components })] }));
        const mobile = (_jsxs(SidebarContentMobile, { ...rest, children: [_jsxs(SidebarHeader, { children: [_jsxs("div", { className: "flex text-fd-muted-foreground items-center gap-1.5", children: [_jsx("div", { className: "flex flex-1", children: iconLinks.map((item, i) => (_jsx(BaseLinkItem, { item: item, className: cn(buttonVariants({
                                            size: 'icon-sm',
                                            color: 'ghost',
                                            className: 'p-2',
                                        })), "aria-label": item.label, children: item.icon }, i))) }), i18n ? (_jsxs(LanguageToggle, { children: [_jsx(Languages, { className: "size-4.5" }), _jsx(LanguageToggleText, {})] })) : null, themeSwitch.enabled !== false &&
                                    (themeSwitch.component ?? (_jsx(ThemeToggle, { className: "p-0", mode: themeSwitch.mode }))), _jsx(SidebarTrigger, { className: cn(buttonVariants({
                                        color: 'ghost',
                                        size: 'icon-sm',
                                        className: 'p-2',
                                    })), children: _jsx(SidebarIcon, {}) })] }), tabs.length > 0 && _jsx(RootToggle, { options: tabs }), banner] }), viewport, _jsx(SidebarFooter, { className: "empty:hidden", children: footer })] }));
        const content = (_jsxs(SidebarContent, { ...rest, children: [_jsxs(SidebarHeader, { children: [_jsxs("div", { className: "flex", children: [_jsx(Link, { href: nav.url ?? '/', className: "inline-flex text-[15px] items-center gap-2.5 font-medium me-auto", children: nav.title }), nav.children, collapsible && (_jsx(SidebarCollapseTrigger, { className: cn(buttonVariants({
                                        color: 'ghost',
                                        size: 'icon-sm',
                                        className: 'mb-auto text-fd-muted-foreground',
                                    })), children: _jsx(SidebarIcon, {}) }))] }), searchToggle.enabled !== false &&
                            (searchToggle.components?.lg ?? (_jsx(LargeSearchToggle, { hideIfDisabled: true }))), tabs.length > 0 && _jsx(RootToggle, { options: tabs }), banner] }), viewport, _jsxs(HideIfEmpty, { as: SidebarFooter, children: [_jsxs("div", { className: "flex text-fd-muted-foreground items-center justify-end empty:hidden", children: [iconLinks.map((item, i) => (_jsx(BaseLinkItem, { item: item, className: cn(buttonVariants({ size: 'icon-sm', color: 'ghost' }), i === iconLinks.length - 1 && 'me-auto'), "aria-label": item.label, children: item.icon }, i))), i18n ? (_jsx(LanguageToggle, { children: _jsx(Languages, { className: "size-4.5" }) })) : null, themeSwitch.enabled !== false &&
                                    (themeSwitch.component ?? (_jsx(ThemeToggle, { className: "p-0", mode: themeSwitch.mode })))] }), footer] })] }));
        return (_jsx(Sidebar, { defaultOpenLevel: defaultOpenLevel, prefetch: prefetch, Mobile: mobile, Content: _jsxs(_Fragment, { children: [collapsible && _jsx(CollapsibleControl, {}), content] }) }));
    }
    return (_jsx(TreeContextProvider, { tree: props.tree, children: _jsxs(NavProvider, { transparentMode: transparentMode, children: [nav.enabled !== false &&
                    (nav.component ?? (_jsxs(Navbar, { className: "h-14 md:hidden", children: [_jsx(Link, { href: nav.url ?? '/', className: "inline-flex items-center gap-2.5 font-semibold", children: nav.title }), _jsx("div", { className: "flex-1", children: nav.children }), searchToggle.enabled !== false &&
                                (searchToggle.components?.sm ?? (_jsx(SearchToggle, { className: "p-2", hideIfDisabled: true }))), sidebarEnabled && (_jsx(SidebarTrigger, { className: cn(buttonVariants({
                                    color: 'ghost',
                                    size: 'icon-sm',
                                    className: 'p-2',
                                })), children: _jsx(SidebarIcon, {}) }))] }))), _jsxs(LayoutBody, { ...props.containerProps, className: cn('xl:[--fd-toc-width:286px]', sidebarEnabled && sidebarVariables, !nav.component &&
                        nav.enabled !== false &&
                        '[--fd-nav-height:56px] md:[--fd-nav-height:0px]', props.containerProps?.className), children: [sidebarEnabled && sidebar(), children] })] }) }));
}
export { CollapsibleControl, Navbar, SidebarTrigger };
