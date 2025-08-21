export { A as AnyCollection, B as BaseCollection, C as CollectionSchema, D as DefaultMDXOptions, a as DocCollection, b as DocsCollection, G as GlobalConfig, M as MetaCollection, d as defineCollections, e as defineConfig, c as defineDocs, f as frontmatterSchema, g as getDefaultMDXOptions, m as metaSchema } from '../define-DnJzAZrj.cjs';
import { Processor, Transformer } from 'unified';
import { Root } from 'mdast';
import '@standard-schema/spec';
import 'fumadocs-core/mdx-plugins';
import '@mdx-js/mdx';
import 'zod';

declare function remarkInclude(this: Processor): Transformer<Root, Root>;

export { remarkInclude };
