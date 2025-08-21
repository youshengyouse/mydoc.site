'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from '../../utils/cn.js';
import { useMemo } from 'react';
import { useSidebar } from '../../contexts/sidebar.js';
import { useNav } from '../../contexts/layout.js';
import { buttonVariants } from '../../components/ui/button.js';
import { Sidebar as SidebarIcon } from '../../icons.js';
import Link from 'fumadocs-core/link';
import { usePathname } from 'fumadocs-core/framework';
import { isActive } from '../../utils/is-active.js';
export function Navbar({ mode, ...props }) {
    const { open, collapsed } = useSidebar();
    const { isTransparent } = useNav();
    return (_jsx("header", { id: "nd-subnav", ...props, className: cn('fixed flex flex-col inset-x-0 top-(--fd-banner-height) z-10 px-(--fd-layout-offset) h-(--fd-nav-height) backdrop-blur-sm transition-colors', (!isTransparent || open) && 'bg-fd-background/80', mode === 'auto' &&
            !collapsed &&
            'ps-[calc(var(--fd-layout-offset)+var(--fd-sidebar-width))]', props.className), children: props.children }));
}
export function LayoutBody(props) {
    const { collapsed } = useSidebar();
    return (_jsx("main", { id: "nd-docs-layout", ...props, className: cn('flex flex-1 flex-col transition-[padding] pt-(--fd-nav-height) fd-notebook-layout', props.className), style: {
            ...props.style,
            paddingInlineStart: collapsed
                ? 'min(calc(100vw - var(--fd-page-width)), var(--fd-sidebar-width))'
                : 'calc(var(--fd-sidebar-width) + var(--fd-layout-offset))',
            paddingInlineEnd: collapsed ? '0px' : 'var(--fd-layout-offset)',
        }, children: props.children }));
}
export function NavbarSidebarTrigger({ className, ...props }) {
    const { setOpen } = useSidebar();
    return (_jsx("button", { ...props, className: cn(buttonVariants({
            color: 'ghost',
            size: 'icon-sm',
            className,
        })), onClick: () => setOpen((prev) => !prev), children: _jsx(SidebarIcon, {}) }));
}
export function LayoutTabs({ options, ...props }) {
    const pathname = usePathname();
    const selected = useMemo(() => {
        const url = pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
        return options.findLast((option) => {
            if (option.urls) {
                return option.urls.has(url);
            }
            return isActive(option.url, pathname, true);
        });
    }, [options, pathname]);
    return (_jsx("div", { ...props, className: cn('flex flex-row items-center gap-4 overflow-auto', props.className), children: options.map((option) => (_jsx(LayoutTab, { selected: selected === option, option: option }, option.url))) }));
}
function LayoutTab({ option, selected = false, }) {
    return (_jsx(Link, { className: cn('inline-flex border-b border-transparent transition-colors items-center py-1.5 font-medium gap-2 text-fd-muted-foreground text-sm text-nowrap', selected && 'border-fd-primary text-fd-primary'), href: option.url, children: option.title }));
}
