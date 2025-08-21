import { PageData, MetaData, Source, VirtualFile } from 'fumadocs-core/source';
import { R as Runtime, B as BaseCollectionEntry } from './types-DT4UJSPW.js';
import '@standard-schema/spec';
import './define-DnJzAZrj.js';
import 'fumadocs-core/mdx-plugins';
import '@mdx-js/mdx';
import 'unified';
import 'zod';
import 'react';
import 'mdx/types';
import 'fumadocs-core/server';

declare const _runtime: Runtime;
declare function createMDXSource<Doc extends PageData & BaseCollectionEntry, Meta extends MetaData & BaseCollectionEntry>(docs: Doc[], meta?: Meta[]): Source<{
    pageData: Doc;
    metaData: Meta;
}>;
interface ResolveOptions {
    docs: BaseCollectionEntry[];
    meta: BaseCollectionEntry[];
    rootDir?: string;
}
declare function resolveFiles({ docs, meta }: ResolveOptions): VirtualFile[];

export { _runtime, createMDXSource, resolveFiles };
