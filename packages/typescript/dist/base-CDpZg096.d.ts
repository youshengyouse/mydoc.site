import { Project, Type, ExportedDeclarations, Symbol } from 'ts-morph';

interface TypescriptConfig {
    files?: string[];
    tsconfigPath?: string;
    /** A root directory to resolve relative path entries in the config file to. e.g. outDir */
    basePath?: string;
}
declare function createProject(options?: TypescriptConfig): Project;

interface BaseTypeTableProps {
    /**
     * The path to source TypeScript file.
     */
    path?: string;
    /**
     * Exported type name to generate from.
     */
    name?: string;
    /**
     * Set the type to generate from.
     *
     * When used with `name`, it generates the type with `name` as export name.
     *
     * ```ts
     * export const myName = MyType;
     * ```
     *
     * When `type` contains multiple lines, `export const` is not added.
     * You need to export it manually, and specify the type name with `name`.
     *
     * ```tsx
     * <AutoTypeTable
     *   path="./file.ts"
     *   type={`import { ReactNode } from "react"
     *   export const MyName = ReactNode`}
     *   name="MyName"
     * />
     * ```
     */
    type?: string;
}
interface GenerateTypeTableOptions extends GenerateOptions {
    /**
     * base path to resolve `path` prop
     */
    basePath?: string;
}

interface GeneratedDoc {
    name: string;
    description: string;
    entries: DocEntry[];
}
interface DocEntry {
    name: string;
    description: string;
    type: string;
    tags: Record<string, string>;
    required: boolean;
    deprecated: boolean;
}
interface EntryContext {
    program: Project;
    transform?: Transformer;
    type: Type;
    declaration: ExportedDeclarations;
}
type Transformer = (this: EntryContext, entry: DocEntry, propertyType: Type, propertySymbol: Symbol) => void;
interface GenerateOptions {
    /**
     * Allow fields with `@internal` tag
     *
     * @defaultValue false
     */
    allowInternal?: boolean;
    /**
     * Modify output property entry
     */
    transform?: Transformer;
}
type Generator = ReturnType<typeof createGenerator>;
interface GeneratorOptions extends TypescriptConfig {
    /**
     * cache results, note that some options are not marked as dependency.
     *
     * @defaultValue fs
     */
    cache?: 'fs' | false;
    project?: Project;
}
declare function createGenerator(config?: GeneratorOptions | Project): {
    generateDocumentation(file: {
        path: string;
        content?: string;
    }, name: string | undefined, options?: GenerateOptions): GeneratedDoc[];
    generateTypeTable(props: BaseTypeTableProps, options?: GenerateTypeTableOptions): Promise<GeneratedDoc[]>;
};
/**
 * Generate documentation for properties in an exported type/interface
 *
 * @deprecated use `createGenerator` instead
 */
declare function generateDocumentation(file: string, name: string | undefined, content: string, options?: GenerateOptions & {
    /**
     * Typescript configurations
     */
    config?: TypescriptConfig;
    project?: Project;
}): GeneratedDoc[];

export { type BaseTypeTableProps as B, type DocEntry as D, type GenerateOptions as G, type GeneratedDoc as a, type Generator as b, type GenerateTypeTableOptions as c, createProject as d, type GeneratorOptions as e, createGenerator as f, generateDocumentation as g };
