import { TableOfContents } from 'fumadocs-core/server';
import { FC, ReactNode } from 'react';
import { MDXProps } from 'mdx/types';
import { StructuredData } from 'fumadocs-core/mdx-plugins';
import { a as DocCollection, M as MetaCollection, b as DocsCollection } from '../define-DnJzAZrj.js';
import { StandardSchemaV1 } from '@standard-schema/spec';
import { PageData, MetaData, Source } from 'fumadocs-core/source';
import '@mdx-js/mdx';
import 'unified';
import 'zod';

interface CompiledMDXProperties<Frontmatter> {
    frontmatter: Frontmatter;
    structuredData: StructuredData;
    toc: TableOfContents;
    default: FC<MDXProps>;
    /**
     * Only available when `lastModifiedTime` is enabled on MDX loader
     */
    lastModified?: Date;
}
type CompiledMDXFile<Frontmatter> = CompiledMDXProperties<Frontmatter> & Record<string, unknown>;
type MDXFileToPageData<Frontmatter> = Frontmatter & Omit<CompiledMDXProperties<Frontmatter>, 'frontmatter'> & {
    _exports: Record<string, unknown>;
};
type AttachGlobValue<GlobValue, Attach> = GlobValue extends () => Promise<unknown> ? () => Promise<Attach> : Attach;
declare function fromConfig<Config>(): {
    doc: <Name extends keyof Config, GlobValue>(name: Name, glob: Record<string, GlobValue>) => Config[Name] extends DocCollection<infer Schema> ? Record<string, AttachGlobValue<GlobValue, CompiledMDXFile<StandardSchemaV1.InferOutput<Schema>>>> : never;
    meta: <Name extends keyof Config, GlobValue>(name: Name, glob: Record<string, GlobValue>) => Config[Name] extends MetaCollection<infer Schema> ? AttachGlobValue<GlobValue, StandardSchemaV1.InferOutput<Schema>> : never;
    docs: <Name extends keyof Config, DocGlobValue, MetaGlobValue>(name: Name, options: {
        meta: Record<string, MetaGlobValue>;
        doc: Record<string, DocGlobValue>;
    }) => Config[Name] extends DocsCollection<infer DocSchema, infer MetaSchema> ? {
        doc: Record<string, AttachGlobValue<DocGlobValue, CompiledMDXFile<StandardSchemaV1.InferOutput<DocSchema>>>>;
        meta: Record<string, AttachGlobValue<MetaGlobValue, StandardSchemaV1.InferOutput<MetaSchema>>>;
    } : never;
    source: <DocOut extends PageData, MetaOut extends MetaData>(doc: Record<string, CompiledMDXFile<DocOut>>, meta: Record<string, MetaOut>) => Source<{
        pageData: MDXFileToPageData<DocOut>;
        metaData: MetaOut;
    }>;
    sourceAsync: <DocOut extends PageData, MetaOut extends MetaData>(doc: Record<string, () => Promise<CompiledMDXFile<DocOut>>>, meta: Record<string, () => Promise<MetaOut>>) => Promise<Source<{
        pageData: MDXFileToPageData<DocOut>;
        metaData: MetaOut;
    }>>;
};
interface ClientLoaderOptions<Frontmatter, Props> {
    /**
     * Loader ID (usually your collection name)
     *
     * The code splitting strategy of frameworks like Tanstack Start may duplicate `createClientLoader()` into different chunks.
     *
     * We use loader ID to share cache between multiple instances of client loader.
     *
     * @defaultValue ''
     */
    id?: string;
    component: (loaded: CompiledMDXFile<Frontmatter>, props: Props) => ReactNode;
}
interface ClientLoader<Frontmatter, Props> {
    preload: (path: string) => Promise<CompiledMDXFile<Frontmatter>>;
    /**
     * Get a component that renders content with `React.lazy`
     */
    getComponent: (path: string) => FC<Props>;
}
declare function createClientLoader<Frontmatter, Props = object>(files: Record<string, () => Promise<CompiledMDXFile<Frontmatter>>>, options: ClientLoaderOptions<Frontmatter, Props>): ClientLoader<Frontmatter, Props>;
interface ClientRendererOptions<Frontmatter> {
    cache?: Map<string, CompiledMDXFile<Frontmatter>>;
}
type ClientRenderer<Props> = Record<string, FC<Props>>;
declare function toClientRenderer<Frontmatter, Props = object>(files: Record<string, () => Promise<CompiledMDXFile<Frontmatter>>>, component: (loaded: CompiledMDXFile<Frontmatter>, props: Props) => ReactNode, options?: ClientRendererOptions<Frontmatter>): ClientRenderer<Props>;

export { type ClientLoader, type ClientLoaderOptions, type ClientRendererOptions, type CompiledMDXFile, createClientLoader, fromConfig, toClientRenderer };
