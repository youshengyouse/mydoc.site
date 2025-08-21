import { Meta, Context } from '@content-collections/core';
import { Options } from '@content-collections/mdx';
import * as Plugins from 'fumadocs-core/mdx-plugins';
import { StructuredData } from 'fumadocs-core/mdx-plugins';
import { z } from 'zod';
import { Pluggable } from 'unified';

type ResolvePlugins = Pluggable[] | ((v: Pluggable[]) => Pluggable[]);

/**
 * Default configuration
 *
 * You may copy and modify the code
 */

interface TransformOptions extends Omit<Options, 'remarkPlugins' | 'rehypePlugins'> {
    remarkPlugins?: ResolvePlugins;
    rehypePlugins?: ResolvePlugins;
    /**
     * Generate `structuredData`
     *
     * @defaultValue true
     * @deprecated use `remarkStructureOptions` instead
     */
    generateStructuredData?: boolean;
    remarkStructureOptions?: Plugins.StructureOptions | boolean;
    remarkHeadingOptions?: Plugins.RemarkHeadingOptions | boolean;
    rehypeCodeOptions?: Plugins.RehypeCodeOptions | boolean;
    remarkImageOptions?: Plugins.RemarkImageOptions | boolean;
    remarkCodeTabOptions?: Plugins.RemarkCodeTabOptions | boolean;
}
/**
 * The default TOC types support `ReactNode`, which isn't serializable
 */
type SerializableTOC = {
    title: string;
    url: string;
    depth: number;
}[];
interface BaseDoc {
    _meta: Meta;
    content: string;
}
/**
 * We need to convert interface types to object types.
 *
 * Otherwise, `T extends Serializable? true : false` gives us `false`.
 * Because interface types cannot extend a union type, but `Serializable` is.
 */
type InterfaceToObject<T> = T extends object ? {
    [K in keyof T]: InterfaceToObject<T[K]>;
} : T;
declare function transformMDX<D extends BaseDoc>(document: D, context: Context, options?: TransformOptions): Promise<D & {
    body: string;
    toc: SerializableTOC;
    /**
     * `StructuredData` for search indexes
     */
    structuredData: InterfaceToObject<StructuredData>;
}>;
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
declare function createDocSchema(z: typeof z): {
    title: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    icon: z.ZodOptional<z.ZodString>;
    full: z.ZodOptional<z.ZodBoolean>;
    _openapi: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
};
declare function createMetaSchema(z: typeof z): {
    title: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    pages: z.ZodOptional<z.ZodArray<z.ZodString>>;
    icon: z.ZodOptional<z.ZodString>;
    root: z.ZodOptional<z.ZodBoolean>;
    defaultOpen: z.ZodOptional<z.ZodBoolean>;
};

export { type SerializableTOC, type TransformOptions, createDocSchema, createMetaSchema, frontmatterSchema, metaSchema, transformMDX };
