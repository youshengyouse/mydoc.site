import { StandardSchemaV1 } from '@standard-schema/spec';
import * as plugins from 'fumadocs-core/mdx-plugins';
import { ProcessorOptions } from '@mdx-js/mdx';
import { Pluggable } from 'unified';
import { z } from 'zod';

type ResolvePlugins = Pluggable[] | ((v: Pluggable[]) => Pluggable[]);
type DefaultMDXOptions = Omit<NonNullable<ProcessorOptions>, 'rehypePlugins' | 'remarkPlugins' | '_ctx'> & {
    rehypePlugins?: ResolvePlugins;
    remarkPlugins?: ResolvePlugins;
    /**
     * Properties to export from `vfile.data`
     */
    valueToExport?: string[];
    remarkStructureOptions?: plugins.StructureOptions | false;
    remarkHeadingOptions?: plugins.RemarkHeadingOptions;
    remarkImageOptions?: plugins.RemarkImageOptions | false;
    remarkCodeTabOptions?: plugins.RemarkCodeTabOptions | false;
    remarkNpmOptions?: plugins.RemarkNpmOptions | false;
    rehypeCodeOptions?: plugins.RehypeCodeOptions | false;
    _withoutBundler?: boolean;
};
declare function getDefaultMDXOptions({ valueToExport, rehypeCodeOptions, remarkImageOptions, remarkHeadingOptions, remarkStructureOptions, remarkCodeTabOptions, remarkNpmOptions, _withoutBundler, ...mdxOptions }: DefaultMDXOptions): ProcessorOptions;

declare const metaSchema: z.ZodObject<{
    title: z.ZodOptional<z.ZodString>;
    pages: z.ZodOptional<z.ZodArray<z.ZodString>>;
    description: z.ZodOptional<z.ZodString>;
    root: z.ZodOptional<z.ZodBoolean>;
    defaultOpen: z.ZodOptional<z.ZodBoolean>;
    icon: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
declare const frontmatterSchema: z.ZodObject<{
    title: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    icon: z.ZodOptional<z.ZodString>;
    full: z.ZodOptional<z.ZodBoolean>;
    _openapi: z.ZodOptional<z.ZodObject<{}, z.core.$loose>>;
}, z.core.$strip>;

type CollectionSchema<Schema extends StandardSchemaV1, Context> = Schema | ((ctx: Context) => Schema);
type AnyCollection = DocsCollection | DocCollection | MetaCollection;
interface BaseCollection {
    /**
     * Directories to scan
     */
    dir: string | string[];
    /**
     * what files to include/exclude (glob patterns)
     *
     * Include all files if not specified
     */
    files?: string[];
}
interface MetaCollection<Schema extends StandardSchemaV1 = StandardSchemaV1> extends BaseCollection {
    type: 'meta';
    schema?: CollectionSchema<Schema, {
        path: string;
        source: string;
    }>;
}
interface DocCollection<Schema extends StandardSchemaV1 = StandardSchemaV1, Async extends boolean = boolean> extends BaseCollection {
    type: 'doc';
    mdxOptions?: ProcessorOptions;
    /**
     * Load files with async
     */
    async?: Async;
    schema?: CollectionSchema<Schema, {
        path: string;
        source: string;
    }>;
}
interface DocsCollection<DocSchema extends StandardSchemaV1 = StandardSchemaV1, MetaSchema extends StandardSchemaV1 = StandardSchemaV1, Async extends boolean = boolean> {
    type: 'docs';
    dir: string;
    docs: DocCollection<DocSchema, Async>;
    meta: MetaCollection<MetaSchema>;
}
type GlobalConfigMDXOptions = ({
    preset?: 'fumadocs';
} & DefaultMDXOptions) | ({
    preset: 'minimal';
} & ProcessorOptions);
interface GlobalConfig {
    /**
     * Configure global MDX options
     */
    mdxOptions?: GlobalConfigMDXOptions | (() => Promise<GlobalConfigMDXOptions>);
    /**
     * Fetch last modified time with specified version control
     * @defaultValue 'none'
     */
    lastModifiedTime?: 'git' | 'none';
}
declare function defineCollections<Schema extends StandardSchemaV1 = StandardSchemaV1, Async extends boolean = false>(options: DocCollection<Schema, Async>): DocCollection<Schema, Async>;
declare function defineCollections<Schema extends StandardSchemaV1 = StandardSchemaV1>(options: MetaCollection<Schema>): MetaCollection<Schema>;
declare function defineDocs<DocSchema extends StandardSchemaV1 = typeof frontmatterSchema, MetaSchema extends StandardSchemaV1 = typeof metaSchema, Async extends boolean = false>(options?: {
    /**
     * The directory to scan files
     *
     *  @defaultValue 'content/docs'
     */
    dir?: string;
    docs?: Omit<DocCollection<DocSchema, Async>, 'dir' | 'type'>;
    meta?: Omit<MetaCollection<MetaSchema>, 'dir' | 'type'>;
}): DocsCollection<DocSchema, MetaSchema, Async>;
declare function defineConfig(config?: GlobalConfig): GlobalConfig;

export { type AnyCollection as A, type BaseCollection as B, type CollectionSchema as C, type DefaultMDXOptions as D, type GlobalConfig as G, type MetaCollection as M, type DocCollection as a, type DocsCollection as b, defineDocs as c, defineCollections as d, defineConfig as e, frontmatterSchema as f, getDefaultMDXOptions as g, metaSchema as m };
