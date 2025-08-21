import { Root, Heading } from 'mdast';
import { Transformer } from 'unified';

declare module 'mdast' {
    interface HeadingData extends Data {
        hProperties?: {
            id?: string;
        };
    }
}
interface RemarkHeadingOptions {
    slug?: (root: Root, heading: Heading, text: string) => string;
    /**
     * Allow custom headings ids
     *
     * @defaultValue true
     */
    customId?: boolean;
    /**
     * Attach an array of `TOCItemType` to `file.data.toc`
     *
     * @defaultValue true
     */
    generateToc?: boolean;
}
/**
 * Add heading ids and extract TOC
 */
declare function remarkHeading({ slug: defaultSlug, customId, generateToc, }?: RemarkHeadingOptions): Transformer<Root, Root>;

export { type RemarkHeadingOptions as R, remarkHeading as r };
