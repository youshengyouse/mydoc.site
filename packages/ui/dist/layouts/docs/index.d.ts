import type { PageTree } from 'fumadocs-core/server';
import { type ComponentProps, type HTMLAttributes, type ReactNode } from 'react';
import { SidebarTrigger } from '../../components/layout/sidebar.js';
import { type LinkItemType } from '../../layouts/links.js';
import { type BaseLayoutProps } from '../../layouts/shared.js';
import { CollapsibleControl, Navbar } from '../../layouts/docs/client.js';
import { type SidebarOptions } from '../../layouts/docs/shared.js';
export interface DocsLayoutProps extends BaseLayoutProps {
    tree: PageTree.Root;
    sidebar?: SidebarOptions & ComponentProps<'aside'> & {
        enabled?: boolean;
        component?: ReactNode;
    };
    /**
     * Props for the `div` container
     */
    containerProps?: HTMLAttributes<HTMLDivElement>;
}
export declare function DocsLayout({ nav: { transparentMode, ...nav }, sidebar: { tabs: sidebarTabs, enabled: sidebarEnabled, ...sidebarProps }, searchToggle, disableThemeSwitch, themeSwitch, i18n, children, ...props }: DocsLayoutProps): import("react/jsx-runtime").JSX.Element;
export { CollapsibleControl, Navbar, SidebarTrigger, type LinkItemType };
//# sourceMappingURL=index.d.ts.map