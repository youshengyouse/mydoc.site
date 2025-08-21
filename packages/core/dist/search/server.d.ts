import { TypedDocument, Orama, Language, RawData, create, SearchParams } from '@orama/orama';
import { S as StructuredData } from '../remark-structure-DVje0Sib.js';
import { S as SortedResult } from '../shared-ORgOfXFw.js';
export { H as HighlightedText, c as createContentHighlighter } from '../shared-ORgOfXFw.js';
import { I18nConfig } from '../i18n/index.js';
import { LoaderOutput, LoaderConfig, InferPageType } from '../source/index.js';
import 'mdast';
import 'unified';
import 'mdast-util-mdx-jsx';
import 'react';
import '../definitions-D0ZpOeqd.js';

type AdvancedDocument = TypedDocument<Orama<typeof advancedSchema>>;
declare const advancedSchema: {
    readonly content: "string";
    readonly page_id: "string";
    readonly type: "string";
    readonly tags: "enum[]";
    readonly url: "string";
};
type SimpleDocument = TypedDocument<Orama<typeof simpleSchema>>;
declare const simpleSchema: {
    readonly url: "string";
    readonly title: "string";
    readonly description: "string";
    readonly content: "string";
    readonly keywords: "string";
};

interface Options<S extends LoaderOutput<LoaderConfig>> extends Omit<AdvancedOptions, 'indexes'> {
    localeMap?: {
        [K in S extends LoaderOutput<infer C> ? C['i18n'] extends I18nConfig<infer Languages> ? Languages : string : string]?: Partial<AdvancedOptions> | Language;
    };
    buildIndex?: (page: InferPageType<S>) => AdvancedIndex;
}
declare function createFromSource<S extends LoaderOutput<LoaderConfig>>(source: S, options?: Options<S>): SearchAPI;
/**
 * @deprecated Use `createFromSource(source, options)` instead.
 */
declare function createFromSource<S extends LoaderOutput<LoaderConfig>>(source: S, pageToIndexFn?: (page: InferPageType<S>) => AdvancedIndex, options?: Omit<Options<S>, 'buildIndex'>): SearchAPI;

type I18nOptions<O extends SimpleOptions | AdvancedOptions, Idx> = Omit<O, 'language' | 'indexes'> & {
    i18n: I18nConfig;
    /**
     * Map locale name from i18n config to Orama compatible `language` or options
     */
    localeMap?: Record<string, Language | Partial<O> | undefined>;
    indexes: WithLocale<Idx>[] | Dynamic<WithLocale<Idx>>;
};
type I18nSimpleOptions = I18nOptions<SimpleOptions, Index>;
type I18nAdvancedOptions = I18nOptions<AdvancedOptions, AdvancedIndex>;
type WithLocale<T> = T & {
    locale: string;
};
declare function createI18nSearchAPI<T extends 'simple' | 'advanced'>(type: T, options: T extends 'simple' ? I18nSimpleOptions : I18nAdvancedOptions): SearchAPI;

type SearchType = 'simple' | 'advanced';
type ExportedData = (RawData & {
    type: SearchType;
}) | {
    type: 'i18n';
    data: Record<string, RawData & {
        type: SearchType;
    }>;
};
interface SearchServer {
    search: (query: string, options?: {
        locale?: string;
        tag?: string | string[];
    }) => Promise<SortedResult[]>;
    /**
     * Export the database
     *
     * You can reference the exported database to implement client-side search
     */
    export: () => Promise<ExportedData>;
}
interface SearchAPI extends SearchServer {
    GET: (request: Request) => Promise<Response>;
    /**
     * `GET` route handler that exports search indexes for static search.
     */
    staticGET: () => Promise<Response>;
}
/**
 * Resolve indexes dynamically
 */
type Dynamic<T> = () => T[] | Promise<T[]>;
type OramaInput = Parameters<typeof create>[0];
type SharedOptions = Pick<OramaInput, 'sort' | 'components' | 'plugins'> & {
    language?: string;
    tokenizer?: Required<OramaInput>['components']['tokenizer'];
};
interface SimpleOptions extends SharedOptions {
    indexes: Index[] | Dynamic<Index>;
    /**
     * Customise search options on server
     */
    search?: Partial<SearchParams<Orama<typeof simpleSchema>, SimpleDocument>>;
}
interface AdvancedOptions extends SharedOptions {
    indexes: AdvancedIndex[] | Dynamic<AdvancedIndex>;
    /**
     * Customise search options on server
     */
    search?: Partial<SearchParams<Orama<typeof advancedSchema>, AdvancedDocument>>;
}
declare function createSearchAPI<T extends SearchType>(type: T, options: T extends 'simple' ? SimpleOptions : AdvancedOptions): SearchAPI;
interface Index {
    title: string;
    description?: string;
    content: string;
    url: string;
    keywords?: string;
}
declare function initSimpleSearch(options: SimpleOptions): SearchServer;
interface AdvancedIndex {
    id: string;
    title: string;
    description?: string;
    /**
     * @deprecated No longer used
     */
    keywords?: string;
    /**
     * Required if tag filter is enabled
     */
    tag?: string | string[];
    /**
     * preprocess mdx content with `structure`
     */
    structuredData: StructuredData;
    url: string;
}
declare function initAdvancedSearch(options: AdvancedOptions): SearchServer;

export { type AdvancedIndex, type AdvancedOptions, type Dynamic, type ExportedData, type Index, type SearchAPI, type SearchServer, type SimpleOptions, SortedResult, createFromSource, createI18nSearchAPI, createSearchAPI, initAdvancedSearch, initSimpleSearch };
