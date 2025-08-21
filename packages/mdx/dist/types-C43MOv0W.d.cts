import { StandardSchemaV1 } from '@standard-schema/spec';
import { Source, PageData, MetaData } from 'fumadocs-core/source';
import { a as DocCollection, M as MetaCollection, b as DocsCollection, G as GlobalConfig } from './define-DnJzAZrj.cjs';
import { ProcessorOptions } from '@mdx-js/mdx';
import { FC } from 'react';
import { MDXProps } from 'mdx/types';
import { StructuredData } from 'fumadocs-core/mdx-plugins';
import { TableOfContents } from 'fumadocs-core/server';

interface LoadedConfig {
    collections: Map<string, DocCollection | MetaCollection | DocsCollection>;
    global: GlobalConfig;
    getDefaultMDXOptions(mode?: 'default' | 'remote'): Promise<ProcessorOptions>;
}

interface BaseCollectionEntry {
    /**
     * Raw file path of collection entry, including absolute path (not normalized).
     */
    _file: FileInfo;
}
interface FileInfo {
    path: string;
    absolutePath: string;
}
interface MarkdownProps {
    body: FC<MDXProps>;
    structuredData: StructuredData;
    toc: TableOfContents;
    _exports: Record<string, unknown>;
    /**
     * Only available when `lastModifiedTime` is enabled on MDX loader
     */
    lastModified?: Date;
}
interface RuntimeFile {
    info: FileInfo;
    data: Record<string, unknown>;
}
interface AsyncRuntimeFile {
    info: FileInfo;
    data: Record<string, unknown>;
    content: {
        matter: string;
        body: string;
    };
    lastModified?: Date;
}
type DocOut<Schema extends StandardSchemaV1> = Override<MarkdownProps & {
    /**
     * Read the original content of file from file system.
     */
    get content(): string;
}, StandardSchemaV1.InferOutput<Schema> & BaseCollectionEntry>;
type Override<A, B> = Omit<A, keyof B> & B;
type MetaOut<Schema extends StandardSchemaV1> = StandardSchemaV1.InferOutput<Schema> & BaseCollectionEntry;
interface Runtime {
    doc: <C>(files: RuntimeFile[]) => C extends DocCollection<infer Schema, false> ? DocOut<Schema>[] : never;
    meta: <C>(files: RuntimeFile[]) => C extends MetaCollection<infer Schema> ? MetaOut<Schema>[] : never;
    docs: <C>(docs: RuntimeFile[], metas: RuntimeFile[]) => C extends DocsCollection<infer DocSchema, infer MetaSchema, false> ? {
        docs: DocOut<DocSchema>[];
        meta: MetaOut<MetaSchema>[];
        toFumadocsSource: () => Source<{
            pageData: DocOut<DocSchema> extends PageData ? DocOut<DocSchema> : never;
            metaData: MetaOut<MetaSchema> extends MetaData ? MetaOut<MetaSchema> : never;
        }>;
    } : never;
}
type AsyncDocOut<Schema extends StandardSchemaV1> = StandardSchemaV1.InferOutput<Schema> & BaseCollectionEntry & {
    content: string;
    load: () => Promise<MarkdownProps>;
};
interface RuntimeAsync {
    doc: <C>(files: AsyncRuntimeFile[], collection: string, config: LoadedConfig) => C extends DocCollection<infer Schema, true> ? AsyncDocOut<Schema>[] : never;
    docs: <C>(docs: AsyncRuntimeFile[], metas: RuntimeFile[], collection: string, config: LoadedConfig) => C extends DocsCollection<infer DocSchema, infer MetaSchema, true> ? {
        docs: AsyncDocOut<DocSchema>[];
        meta: MetaOut<MetaSchema>[];
        toFumadocsSource: () => Source<{
            pageData: AsyncDocOut<DocSchema> extends PageData ? AsyncDocOut<DocSchema> : never;
            metaData: MetaOut<MetaSchema> extends MetaData ? MetaOut<MetaSchema> : never;
        }>;
    } : never;
}

export type { BaseCollectionEntry as B, LoadedConfig as L, Runtime as R, RuntimeAsync as a };
