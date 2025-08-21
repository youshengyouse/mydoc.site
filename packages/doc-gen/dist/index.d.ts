import { Code, Root } from 'mdast';
import { Transformer } from 'unified';
import { VFile } from 'vfile';
import { Expression } from 'estree';
import { MdxJsxAttribute } from 'mdast-util-mdx-jsx';
import { z } from 'zod';

type Awaitable<T> = T | Promise<T>;
interface DocGenerator {
    name: string;
    /**
     * Transform codeblocks to another mdast element
     */
    run: (input: unknown, context: Context) => Awaitable<object | object[] | undefined>;
    onFile?: (tree: Root, file: VFile) => void;
}
interface Context {
    node: Code;
    path: string;
    cwd: string;
}
interface RemarkDocGenOptions {
    generators?: DocGenerator[];
}
declare function remarkDocGen({ generators, }: RemarkDocGenOptions): Transformer<Root, Root>;

declare function createElement(name: string, attributes: object[], children?: unknown): object;
declare function expressionToAttribute(key: string, value: Expression): MdxJsxAttribute;

interface FileGeneratorOptions {
    /** @defaultValue true */
    trim?: boolean;
    /**
     * Resolve reference files relative to `vfile.path`
     *
     * @defaultValue false
     */
    relative?: boolean;
}
type FileGeneratorInput = z.output<typeof fileGeneratorSchema>;
declare const fileGeneratorSchema: z.ZodObject<{
    file: z.ZodString;
    codeblock: z.ZodDefault<z.ZodUnion<readonly [z.ZodObject<{
        lang: z.ZodOptional<z.ZodString>;
        meta: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodBoolean]>>;
}, z.core.$strip>;
declare function fileGenerator({ relative, trim, }?: FileGeneratorOptions): DocGenerator;

interface PackageManager {
    name: string;
    /**
     * Convert from npm to another package manager
     */
    command: (command: string) => string;
}
type RemarkInstallOptions = {
    Tabs?: string;
    Tab?: string;
    /**
     * Persist Tab value (Fumadocs UI only)
     *
     * @defaultValue false
     */
    persist?: {
        id: string;
    } | false;
    packageManagers?: PackageManager[];
};
/**
 * It generates the following structure from a code block with `package-install` as language
 *
 * @example
 * ```tsx
 * <Tabs items={["npm", "pnpm", "yarn", "bun"]}>
 *  <Tab value="pnpm">...</Tab>
 *  ...
 * </Tabs>
 * ```
 *
 * @deprecated Use `remarkNpm` from `fumadocs-core/mdx-plugins` instead, it's a drop-in replacement.
 */
declare function remarkInstall({ Tab, Tabs, persist, packageManagers, }?: RemarkInstallOptions): Transformer<Root, Root>;

declare function remarkShow(options?: {
    variables?: Record<string, unknown>;
}): Transformer<Root, Root>;

export { type DocGenerator, type FileGeneratorInput, type FileGeneratorOptions, type RemarkDocGenOptions, type RemarkInstallOptions, createElement, expressionToAttribute, fileGenerator, fileGeneratorSchema, remarkDocGen, remarkInstall, remarkShow };
