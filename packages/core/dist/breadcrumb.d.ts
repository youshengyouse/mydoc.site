import { ReactNode } from 'react';
import { R as Root, N as Node } from './definitions-D0ZpOeqd.js';

interface BreadcrumbItem {
    name: ReactNode;
    url?: string;
}
interface BreadcrumbOptions {
    /**
     * Include the root itself in the breadcrumb items array.
     * Specify the url by passing an object instead
     *
     * @defaultValue false
     */
    includeRoot?: boolean | {
        url: string;
    };
    /**
     * Include the page itself in the breadcrumb items array
     *
     * @defaultValue true
     */
    includePage?: boolean;
    /**
     * Count separator as an item
     *
     * @defaultValue false
     */
    includeSeparator?: boolean;
}
declare function useBreadcrumb(url: string, tree: Root, options?: BreadcrumbOptions): BreadcrumbItem[];
declare function getBreadcrumbItems(url: string, tree: Root, options?: BreadcrumbOptions): BreadcrumbItem[];
declare function getBreadcrumbItemsFromPath(tree: Root, path: Node[], options: BreadcrumbOptions): BreadcrumbItem[];
/**
 * Search the path of a node in the tree by a specified url
 *
 * - When the page doesn't exist, return null
 *
 * @returns The path to the target node from root
 * @internal
 */
declare function searchPath(nodes: Node[], url: string): Node[] | null;

export { type BreadcrumbItem, type BreadcrumbOptions, getBreadcrumbItems, getBreadcrumbItemsFromPath, searchPath, useBreadcrumb };
