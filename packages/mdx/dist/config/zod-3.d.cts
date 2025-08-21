import { z } from 'zod/v3';
export { A as AnyCollection, B as BaseCollection, C as CollectionSchema, D as DefaultMDXOptions, a as DocCollection, b as DocsCollection, G as GlobalConfig, M as MetaCollection, d as defineCollections, e as defineConfig, c as defineDocs, g as getDefaultMDXOptions } from '../define-DnJzAZrj.cjs';
export { remarkInclude } from './index.cjs';
import '@standard-schema/spec';
import 'fumadocs-core/mdx-plugins';
import '@mdx-js/mdx';
import 'unified';
import 'zod';
import 'mdast';

declare const metaSchema: z.ZodObject<{
    title: z.ZodOptional<z.ZodString>;
    pages: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    description: z.ZodOptional<z.ZodString>;
    root: z.ZodOptional<z.ZodBoolean>;
    defaultOpen: z.ZodOptional<z.ZodBoolean>;
    icon: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    title?: string | undefined;
    pages?: string[] | undefined;
    description?: string | undefined;
    root?: boolean | undefined;
    defaultOpen?: boolean | undefined;
    icon?: string | undefined;
}, {
    title?: string | undefined;
    pages?: string[] | undefined;
    description?: string | undefined;
    root?: boolean | undefined;
    defaultOpen?: boolean | undefined;
    icon?: string | undefined;
}>;
declare const frontmatterSchema: z.ZodObject<{
    title: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    icon: z.ZodOptional<z.ZodString>;
    full: z.ZodOptional<z.ZodBoolean>;
    _openapi: z.ZodOptional<z.ZodObject<{}, "passthrough", z.ZodTypeAny, z.objectOutputType<{}, z.ZodTypeAny, "passthrough">, z.objectInputType<{}, z.ZodTypeAny, "passthrough">>>;
}, "strip", z.ZodTypeAny, {
    title: string;
    description?: string | undefined;
    icon?: string | undefined;
    full?: boolean | undefined;
    _openapi?: z.objectOutputType<{}, z.ZodTypeAny, "passthrough"> | undefined;
}, {
    title: string;
    description?: string | undefined;
    icon?: string | undefined;
    full?: boolean | undefined;
    _openapi?: z.objectInputType<{}, z.ZodTypeAny, "passthrough"> | undefined;
}>;

export { frontmatterSchema, metaSchema };
