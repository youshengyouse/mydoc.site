import { MDXComponents } from 'mdx/types';
import { TableOfContents } from 'fumadocs-core/server';
import { FC } from 'react';

type MdxContent = FC<{
    components?: MDXComponents;
}>;
interface Options {
    scope?: Record<string, unknown>;
    baseUrl?: string | URL;
    jsxRuntime?: unknown;
}
declare function executeMdx(compiled: string, options?: Options): Promise<{
    default: MdxContent;
    toc?: TableOfContents;
}>;
declare function executeMdxSync(compiled: string, options?: Options): {
    default: MdxContent;
    toc?: TableOfContents;
};

export { type MdxContent, executeMdx, executeMdxSync };
