import type { LinkItemType } from '../../layouts/links.js';
import { type SidebarComponents, type SidebarProps } from '../../components/layout/sidebar.js';
import type { PageTree } from 'fumadocs-core/server';
import type { ReactNode } from 'react';
import type { Option } from '../../components/layout/root-toggle.js';
import { type GetSidebarTabsOptions } from '../../utils/get-sidebar-tabs.js';
export interface SidebarOptions extends Pick<SidebarProps, 'defaultOpenLevel' | 'prefetch'> {
    components?: Partial<SidebarComponents>;
    /**
     * Root Toggle options
     */
    tabs?: Option[] | GetSidebarTabsOptions | false;
    banner?: ReactNode;
    footer?: ReactNode;
    /**
     * Support collapsing the sidebar on desktop mode
     *
     * @defaultValue true
     */
    collapsible?: boolean;
}
export declare function SidebarLinkItem({ item, ...props }: {
    item: LinkItemType;
    className?: string;
}): import("react/jsx-runtime").JSX.Element;
export declare function getSidebarTabsFromOptions(options: SidebarOptions['tabs'], tree: PageTree.Root): Option[] | undefined;
//# sourceMappingURL=shared.d.ts.map