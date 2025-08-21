import { G as GenerateOptions, a as GeneratedDoc, D as DocEntry, b as Generator, c as GenerateTypeTableOptions } from './base-CDpZg096.js';
export { e as GeneratorOptions, f as createGenerator, d as createProject, g as generateDocumentation } from './base-CDpZg096.js';
import { GlobOptions } from 'tinyglobby';
import { Nodes } from 'hast';
import { Root } from 'mdast';
import { Transformer } from 'unified';
import 'ts-morph';

interface Templates {
    block: (doc: GeneratedDoc, children: string) => string;
    property: (entry: DocEntry) => string;
}
interface GenerateMDXOptions extends GenerateOptions {
    /**
     * a root directory to resolve relative file paths
     */
    basePath?: string;
    templates?: Partial<Templates>;
}
declare function generateMDX(generator: Generator, source: string, { basePath, templates: overrides, ...rest }?: GenerateMDXOptions): string;

interface GenerateFilesOptions {
    input: string | string[];
    /**
     * Output directory, or a function that returns the output path
     */
    output: string | ((inputPath: string) => string);
    globOptions?: GlobOptions;
    options?: GenerateMDXOptions;
    /**
     * @returns New content
     */
    transformOutput?: (path: string, content: string) => string;
}
declare function generateFiles(generator: Generator, options: GenerateFilesOptions): Promise<void>;

declare function renderMarkdownToHast(md: string): Promise<Nodes>;

interface RemarkAutoTypeTableOptions {
    /**
     * @defaultValue 'auto-type-table'
     */
    name?: string;
    /**
     * @defaultValue 'TypeTable'
     */
    outputName?: string;
    renderMarkdown?: typeof renderMarkdownToHast;
    /**
     * Customise type table generation
     */
    options?: GenerateTypeTableOptions;
    /**
     * generate required `value` property for `remark-stringify`
     */
    remarkStringify?: boolean;
    generator?: Generator;
}
/**
 * Compile `auto-type-table` into Fumadocs UI compatible TypeTable
 *
 * MDX is required to use this plugin.
 */
declare function remarkAutoTypeTable({ name, outputName, renderMarkdown, options, remarkStringify, generator, }?: RemarkAutoTypeTableOptions): Transformer<Root, Root>;

export { DocEntry, type GenerateFilesOptions, type GenerateMDXOptions, GenerateOptions, GeneratedDoc, Generator, type RemarkAutoTypeTableOptions, generateFiles, generateMDX, remarkAutoTypeTable, renderMarkdownToHast };
