import { type ComponentProps } from 'react';
import { type BreadcrumbProps, type FooterProps, PageBreadcrumb, PageFooter, PageLastUpdate, PageTOC, PageTOCPopover, PageTOCPopoverContent, PageTOCPopoverTrigger, type RootProps } from './page-client.js';
/**
 * Apply `prose` on div
 */
export declare function PageProse(props: ComponentProps<'div'>): import("react/jsx-runtime").JSX.Element;
export declare function PageTOCTitle(props: ComponentProps<'h2'>): import("react/jsx-runtime").JSX.Element;
export declare function PageTOCItems({ variant, ...props }: ComponentProps<'div'> & {
    variant?: 'clerk' | 'normal';
}): import("react/jsx-runtime").JSX.Element;
export declare function PageTOCPopoverItems({ variant, ...props }: ComponentProps<'div'> & {
    variant?: 'clerk' | 'normal';
}): import("react/jsx-runtime").JSX.Element;
export declare function PageArticle(props: ComponentProps<'article'>): import("react/jsx-runtime").JSX.Element;
export declare function PageRoot({ toc, children, ...props }: RootProps): import("react/jsx-runtime").JSX.Element;
export { PageBreadcrumb, PageFooter, PageLastUpdate, PageTOC, PageTOCPopover, PageTOCPopoverTrigger, PageTOCPopoverContent, type FooterProps, type BreadcrumbProps, type RootProps, };
//# sourceMappingURL=page.d.ts.map