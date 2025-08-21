import { z } from 'zod';
import * as ts_morph from 'ts-morph';
import { Registry as Registry$1 } from 'shadcn/registry';

type Output = z.infer<typeof rootSchema>;
type NamespaceType = (typeof namespaces)[number];
declare const namespaces: readonly ["components", "lib", "css", "route", "ui", "block"];
declare const rootSchema: z.ZodObject<{
    name: z.ZodString;
    index: z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        title: z.ZodOptional<z.ZodString>;
        description: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    components: z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        title: z.ZodOptional<z.ZodString>;
        description: z.ZodOptional<z.ZodString>;
        files: z.ZodArray<z.ZodObject<{
            type: z.ZodLiteral<"components" | "lib" | "css" | "route" | "ui" | "block">;
            path: z.ZodString;
            target: z.ZodOptional<z.ZodString>;
            content: z.ZodString;
        }, z.core.$strip>>;
        dependencies: z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodString, z.ZodNull]>>;
        devDependencies: z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodString, z.ZodNull]>>;
        subComponents: z.ZodDefault<z.ZodArray<z.ZodString>>;
    }, z.core.$strip>>;
}, z.core.$strip>;

type ComponentBuilder = ReturnType<typeof createComponentBuilder>;
/**
 * @param registry registry object
 * @param packageJson parsed package json object
 */
declare function createComponentBuilder(registry: Registry, packageJson: PackageJson | undefined): {
    registryDir: string;
    registry: Registry;
    getDepFromSpecifier(specifier: string): string;
    getDepInfo(name: string): {
        type: "runtime" | "dev";
        name: string;
        version: string | null;
    } | undefined;
    createSourceFile(file: string): Promise<ts_morph.SourceFile>;
    getComponentByName(name: string): Component | undefined;
    getSubComponent(file: string): {
        component: Component;
        file: ComponentFile;
    } | undefined;
};

type SourceReference = {
    type: 'file';
    /**
     * Absolute path
     */
    file: string;
} | {
    type: 'dependency';
    dep: string;
    specifier: string;
} | {
    type: 'sub-component';
    resolved: {
        type: 'local';
        component: Component;
        file: ComponentFile;
    } | {
        type: 'remote';
        component: Component;
        file: ComponentFile;
        registryName: string;
    };
};
type Reference = SourceReference | {
    type: 'custom';
    specifier: string;
};

type OnResolve = (reference: SourceReference) => Reference;
interface ComponentFile {
    type: NamespaceType;
    path: string;
    target?: string;
}
interface Component {
    name: string;
    title?: string;
    description?: string;
    files: ComponentFile[];
    /**
     * Don't list the component in registry index file
     */
    unlisted?: boolean;
    /**
     * Map imported file paths, inherit from registry if not defined.
     */
    onResolve?: OnResolve;
}
interface PackageJson {
    dependencies: Record<string, string>;
    devDependencies: Record<string, string>;
}
interface Registry {
    name: string;
    packageJson: string | PackageJson;
    tsconfigPath: string;
    components: Component[];
    /**
     * The directory of registry, used to resolve relative paths
     */
    dir: string;
    /**
     * Map import paths of components
     */
    onResolve?: OnResolve;
    /**
     * When a referenced file is not found in component files, this function is called.
     */
    onUnknownFile?: (absolutePath: string) => ComponentFile | undefined;
    dependencies?: Record<string, string | null>;
    devDependencies?: Record<string, string | null>;
}
declare function build(registry: Registry): Promise<Output>;

declare function toShadcnRegistry(out: Output, baseUrl: string): Registry$1;

declare function combineRegistry(...items: Output[]): Output;
declare function writeShadcnRegistry(out: Output, options: {
    dir: string;
    /**
     * Remove previous outputs
     *
     * @defaultValue false
     */
    cleanDir?: boolean;
    baseUrl: string;
}): Promise<void>;
declare function writeFumadocsRegistry(out: Output, options: {
    dir: string;
    /**
     * Remove previous outputs
     *
     * @defaultValue false
     */
    cleanDir?: boolean;
    log?: boolean;
}): Promise<void>;

export { type Component, type ComponentBuilder, type ComponentFile, type OnResolve, type PackageJson, type Registry, build, combineRegistry, createComponentBuilder, toShadcnRegistry, writeFumadocsRegistry, writeShadcnRegistry };
