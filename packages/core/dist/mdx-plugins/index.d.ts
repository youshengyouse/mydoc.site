export { Options as RemarkGfmOptions, default as remarkGfm } from 'remark-gfm';
import { Root } from 'hast';
import { RehypeShikiOptions } from '@shikijs/rehype';
import { Processor, Transformer } from 'unified';
import { ShikiTransformer } from 'shiki';
import { Root as Root$1, Code } from 'mdast';
export { a as StructureOptions, S as StructuredData, r as remarkStructure, s as structure } from '../remark-structure-DVje0Sib.js';
export { R as RemarkHeadingOptions, r as remarkHeading } from '../remark-heading-BPCoYwjn.js';
import { MdxJsxFlowElement } from 'mdast-util-mdx-jsx';

interface CodeBlockIcon {
    viewBox: string;
    fill: string;
    d: string;
}
interface IconOptions {
    shortcuts?: Record<string, string>;
    extend?: Record<string, CodeBlockIcon>;
}
/**
 * Inject icons to `icon` property (as HTML)
 */
declare function transformerIcon(options?: IconOptions): ShikiTransformer;

declare const rehypeCodeDefaultOptions: RehypeCodeOptions;
type RehypeCodeOptions = RehypeShikiOptions & {
    /**
     * Filter meta string before processing
     */
    filterMetaString?: (metaString: string) => string;
    /**
     * Add icon to code blocks
     */
    icon?: IconOptions | false;
    /**
     * Wrap code blocks in `<Tab>` component when "tab" meta string presents
     *
     * @defaultValue true
     */
    tab?: false;
    /**
     * Enable Shiki's experimental JS engine
     *
     * @defaultValue false
     */
    experimentalJSEngine?: boolean;
};
/**
 * Handle codeblocks
 */
declare function rehypeCode(this: Processor, _options?: Partial<RehypeCodeOptions>): Transformer<Root, Root>;
declare function transformerTab(): ShikiTransformer;

interface RemarkImageOptions {
    /**
     * Directory or base URL to resolve absolute image paths
     */
    publicDir?: string;
    /**
     * Preferred placeholder type, only available with `useImport` + local images.
     *
     * @defaultValue 'blur'
     */
    placeholder?: 'blur' | 'none';
    /**
     * Define how to handle errors when fetching image size.
     *
     * - `error` (default): throw an error.
     * - `ignore`: do absolutely nothing (Next.js Image component may complain).
     * - `hide`: remove that image element.
     *
     * @defaultValue 'error'
     */
    onError?: 'error' | 'hide' | 'ignore' | ((error: Error) => void);
    /**
     * Import images in the file, and let bundlers handle it.
     *
     * ```tsx
     * import MyImage from "./public/img.png";
     *
     * <img src={MyImage} />
     * ```
     *
     * When disabled, `placeholder` will be ignored.
     *
     * @defaultValue true
     */
    useImport?: boolean;
    /**
     * Fetch image size of external URLs
     *
     * @defaultValue true
     */
    external?: boolean;
}
/**
 * Turn images into Next.js Image compatible usage.
 */
declare function remarkImage({ placeholder, external, useImport, onError, publicDir, }?: RemarkImageOptions): Transformer<Root$1, Root$1>;

interface RemarkAdmonitionOptions {
    tag?: string;
    /**
     * Map type to another type
     */
    typeMap?: Record<string, string>;
}
/**
 * Remark Plugin to support Admonition syntax
 *
 * Useful when Migrating from Docusaurus
 */
declare function remarkAdmonition(options?: RemarkAdmonitionOptions): Transformer<Root$1, Root$1>;

interface RehypeTocOptions {
    /**
     * Export generated toc as a variable
     *
     * @defaultValue true
     */
    exportToc?: boolean;
}
declare function rehypeToc(this: Processor, { exportToc }?: RehypeTocOptions): Transformer<Root, Root>;

type TabType = keyof typeof Types;
interface RemarkCodeTabOptions {
    Tabs?: TabType;
    /**
     * Parse MDX in tab values
     *
     * @defaultValue false
     */
    parseMdx?: boolean;
}
declare const Types: {
    CodeBlockTabs: {
        convert(processor: Processor, nodes: Code[], withMdx?: boolean, withParent?: boolean): MdxJsxFlowElement;
    };
    Tabs: {
        convert(processor: Processor, nodes: Code[], withMdx?: boolean, withParent?: boolean): MdxJsxFlowElement;
    };
};
declare function remarkCodeTab(this: Processor, options?: RemarkCodeTabOptions): Transformer<Root$1, Root$1>;

interface RemarkStepsOptions {
    /**
     * Class name for steps container
     *
     * @defaultValue fd-steps
     */
    steps?: string;
    /**
     * Class name for step container
     *
     * @defaultValue fd-step
     */
    step?: string;
}
/**
 * Convert headings in the format of `1. Hello World` into steps.
 */
declare function remarkSteps({ steps, step, }?: RemarkStepsOptions): Transformer<Root$1, Root$1>;

interface PackageManager {
    name: string;
    /**
     * Convert from npm to another package manager
     */
    command: (command: string) => string;
}
interface RemarkNpmOptions {
    /**
     * Persist Tab value (Fumadocs UI only)
     *
     * @defaultValue false
     */
    persist?: {
        id: string;
    } | false;
    packageManagers?: PackageManager[];
}
/**
 * It generates multiple tabs of codeblocks for different package managers from a npm command codeblock.
 */
declare function remarkNpm({ persist, packageManagers, }?: RemarkNpmOptions): Transformer<Root$1, Root$1>;

export { type CodeBlockIcon, type RehypeCodeOptions, type RehypeTocOptions, type RemarkAdmonitionOptions, type RemarkCodeTabOptions, type RemarkImageOptions, type RemarkNpmOptions, type RemarkStepsOptions, rehypeCode, rehypeCodeDefaultOptions, rehypeToc, remarkAdmonition, remarkCodeTab, remarkImage, remarkNpm, remarkSteps, transformerIcon, transformerTab };
