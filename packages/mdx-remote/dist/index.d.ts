import { TableOfContents } from 'fumadocs-core/server';
import { MdxContent } from './client/index.js';
import * as Plugins from 'fumadocs-core/mdx-plugins';
import { CompileOptions } from '@mdx-js/mdx';
import { MDXComponents } from 'mdx/types';
import { Pluggable } from 'unified';
import { VFile, Compatible } from 'vfile';
import 'react';

type ResolvePlugins = Pluggable[] | ((v: Pluggable[]) => Pluggable[]);
/**
 * Parse frontmatter, currently powered by `gray-matter`
 */
declare function parseFrontmatter(content: string): {
    frontmatter: {
        [key: string]: any;
    };
    content: string;
};

type FumadocsPresetOptions = Omit<CompileOptions, 'remarkPlugins' | 'rehypePlugins'> & {
    preset?: 'fumadocs';
    remarkPlugins?: ResolvePlugins;
    rehypePlugins?: ResolvePlugins;
    remarkHeadingOptions?: Plugins.RemarkHeadingOptions | false;
    rehypeCodeOptions?: Plugins.RehypeCodeOptions | false;
    rehypeTocOptions?: Plugins.RehypeTocOptions | false;
    remarkCodeTabOptions?: Plugins.RemarkCodeTabOptions | false;
    remarkNpmOptions?: Plugins.RemarkNpmOptions | false;
    /**
     * The directory to find image sizes
     *
     * @defaultValue './public'
     * @deprecated Use `remarkImageOptions.publicDir` instead
     */
    imageDir?: string;
    remarkImageOptions?: Plugins.RemarkImageOptions | false;
};
type CompilerOptions = (CompileOptions & {
    preset: 'minimal';
}) | FumadocsPresetOptions;
interface CompileMDXOptions {
    source: string;
    /**
     * File path of source content
     */
    filePath?: string;
    components?: MDXComponents;
    scope?: Record<string, unknown>;
    /**
     * @deprecated Use `compiler.compileFile` instead if you doesn't need to execute output JavaScript code.
     */
    skipRender?: boolean;
}
interface CompileMDXResult<TFrontmatter = Record<string, unknown>> {
    body: MdxContent;
    frontmatter: TFrontmatter;
    toc: TableOfContents;
    vfile: VFile;
    compiled: string;
    exports: Record<string, unknown> | null;
}
declare function createCompiler(mdxOptions?: CompilerOptions): {
    render(compiled: string, scope?: Record<string, unknown>, filePath?: string): Promise<{
        default: MdxContent;
        toc?: TableOfContents;
    }>;
    /**
     * Compile VFile
     */
    compileFile(from: Compatible): Promise<VFile>;
    compile<Frontmatter extends object = Record<string, unknown>>(options: CompileMDXOptions): Promise<CompileMDXResult<Frontmatter>>;
};
/**
 * @deprecated Use `createCompiler()` API instead, this function will always create a new compiler instance.
 */
declare function compileMDX<Frontmatter extends object = Record<string, unknown>>(options: CompileMDXOptions & {
    mdxOptions?: CompilerOptions;
}): Promise<CompileMDXResult<Frontmatter>>;

/**
 * @deprecated Use `compiler.render` instead
 */
declare function executeMdx(compiled: string, scope: object, baseUrl?: string | URL): Promise<{
    default: MdxContent;
    toc?: TableOfContents;
}>;

export { type CompileMDXOptions, type CompileMDXResult, type CompilerOptions, type FumadocsPresetOptions, type CompilerOptions as MDXOptions, compileMDX, createCompiler, executeMdx, parseFrontmatter };
