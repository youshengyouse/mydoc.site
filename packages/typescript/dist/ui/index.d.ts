import * as runtime from 'react/jsx-runtime';
import { ReactNode } from 'react';
import { B as BaseTypeTableProps, b as Generator, c as GenerateTypeTableOptions } from '../base-CDpZg096.js';
import 'ts-morph';

type AutoTypeTableProps = BaseTypeTableProps;
declare function AutoTypeTable({ generator, options, renderMarkdown, ...props }: AutoTypeTableProps & {
    generator: Generator;
    renderMarkdown?: typeof renderMarkdownDefault;
    options?: GenerateTypeTableOptions;
}): Promise<Promise<runtime.JSX.Element>[]>;
declare function renderMarkdownDefault(md: string): Promise<ReactNode>;

export { AutoTypeTable, type AutoTypeTableProps };
