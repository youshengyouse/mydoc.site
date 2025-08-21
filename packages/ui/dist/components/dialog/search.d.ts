import { type ComponentProps, type ReactNode } from 'react';
import { DialogContent, DialogOverlay } from '@radix-ui/react-dialog';
import type { SortedResult } from 'fumadocs-core/server';
import type { SharedProps } from '../../contexts/search.js';
import type { HighlightedText } from 'fumadocs-core/search/server';
type ReactSortedResult = Omit<SortedResult, 'content'> & {
    external?: boolean;
    content: ReactNode;
};
export type { SharedProps };
export interface SearchDialogProps extends SharedProps {
    search: string;
    onSearchChange: (v: string) => void;
    isLoading?: boolean;
    children: ReactNode;
}
export declare function SearchDialog({ open, onOpenChange, search, onSearchChange, isLoading, children, }: SearchDialogProps): import("react/jsx-runtime").JSX.Element;
export declare function SearchDialogHeader(props: ComponentProps<'div'>): import("react/jsx-runtime").JSX.Element;
export declare function SearchDialogInput(props: ComponentProps<'input'>): import("react/jsx-runtime").JSX.Element;
export declare function SearchDialogClose({ children, className, ...props }: ComponentProps<'button'>): import("react/jsx-runtime").JSX.Element;
export declare function SearchDialogFooter(props: ComponentProps<'div'>): import("react/jsx-runtime").JSX.Element;
export declare function SearchDialogOverlay(props: ComponentProps<typeof DialogOverlay>): import("react/jsx-runtime").JSX.Element;
export declare function SearchDialogContent({ children, ...props }: ComponentProps<typeof DialogContent>): import("react/jsx-runtime").JSX.Element;
export declare function SearchDialogList({ items, Empty, Item, ...props }: Omit<ComponentProps<'div'>, 'children'> & {
    items: ReactSortedResult[] | null | undefined;
    /**
     * Renderer for empty list UI
     */
    Empty?: () => ReactNode;
    /**
     * Renderer for items
     */
    Item?: (props: {
        item: ReactSortedResult;
        onClick: () => void;
    }) => ReactNode;
}): import("react/jsx-runtime").JSX.Element;
export declare function SearchDialogListItem({ item, className, children, renderHighlights: render, ...props }: ComponentProps<'button'> & {
    renderHighlights?: typeof renderHighlights;
    item: ReactSortedResult;
}): import("react/jsx-runtime").JSX.Element;
export declare function SearchDialogIcon(props: ComponentProps<'svg'>): import("react/jsx-runtime").JSX.Element;
export interface TagsListProps extends ComponentProps<'div'> {
    tag?: string;
    onTagChange: (tag: string | undefined) => void;
    allowClear?: boolean;
}
export declare function TagsList({ tag, onTagChange, allowClear, ...props }: TagsListProps): import("react/jsx-runtime").JSX.Element;
export declare function TagsListItem({ value, className, ...props }: ComponentProps<'button'> & {
    value: string;
}): import("react/jsx-runtime").JSX.Element;
declare function renderHighlights(highlights: HighlightedText[]): ReactNode;
export declare function useSearch(): {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    search: string;
    onSearchChange: (v: string) => void;
    isLoading: boolean;
};
export declare function useTagsList(): {
    value?: string;
    onValueChange: (value: string | undefined) => void;
    allowClear: boolean;
};
export declare function useSearchList(): {
    active: string | null;
    setActive: (v: string | null) => void;
};
//# sourceMappingURL=search.d.ts.map