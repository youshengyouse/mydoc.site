import { AnyOrama } from '@orama/orama';
import '../remark-structure-DVje0Sib.js';
import { BaseIndex } from './algolia.js';
import { LiteClient, SearchResponse } from 'algoliasearch/lite';
import { OramaClient, ClientSearchParams } from '@oramacloud/client';
import Mixedbread from '@mixedbread/sdk';
import { S as SortedResult } from '../shared-ORgOfXFw.js';
import 'mdast';
import 'unified';
import 'mdast-util-mdx-jsx';
import 'algoliasearch';

interface FetchOptions {
    /**
     * API route for search endpoint
     *
     * @defaultValue '/api/search'
     */
    api?: string;
    /**
     * Filter results with specific tag(s).
     */
    tag?: string | string[];
    /**
     * Filter by locale
     */
    locale?: string;
}

interface StaticOptions {
    /**
     * Where to download exported search indexes (URL)
     *
     * @defaultValue '/api/search'
     */
    from?: string;
    initOrama?: (locale?: string) => AnyOrama | Promise<AnyOrama>;
    /**
     * Filter results with specific tag(s).
     */
    tag?: string | string[];
    /**
     * Filter by locale (unsupported at the moment)
     */
    locale?: string;
}

interface AlgoliaOptions {
    indexName: string;
    client: LiteClient;
    /**
     * Filter results with specific tag.
     */
    tag?: string;
    locale?: string;
    onSearch?: (query: string, tag?: string, locale?: string) => Promise<{
        results: SearchResponse<BaseIndex>[];
    }>;
}

interface OramaCloudOptions {
    client: OramaClient;
    /**
     * The type of your index.
     *
     * You can set it to `crawler` if you use crawler instead of the JSON index with schema provided by Fumadocs
     */
    index?: 'default' | 'crawler';
    params?: ClientSearchParams;
    /**
     * Filter results with specific tag.
     */
    tag?: string;
    /**
     * Filter by locale (unsupported at the moment)
     */
    locale?: string;
}

interface MixedbreadOptions {
    /**
     * The ID of the vector store to search in
     */
    vectorStoreId: string;
    /**
     * The Mixedbread SDK client instance
     */
    client: Mixedbread;
    /**
     * Filter results with specific tag.
     */
    tag?: string;
    /**
     * Filter by locale (unsupported at the moment)
     */
    locale?: string;
}

interface UseDocsSearch {
    search: string;
    setSearch: (v: string) => void;
    query: {
        isLoading: boolean;
        data?: SortedResult[] | 'empty';
        error?: Error;
    };
}
type Client = ({
    type: 'fetch';
} & FetchOptions) | ({
    type: 'static';
} & StaticOptions) | ({
    type: 'algolia';
} & AlgoliaOptions) | ({
    type: 'orama-cloud';
} & OramaCloudOptions) | ({
    type: 'mixedbread';
} & MixedbreadOptions);
/**
 * Provide a hook to query different official search clients.
 *
 * Note: it will re-query when its parameters changed, make sure to use `useCallback()` on functions passed to this hook.
 */
declare function useDocsSearch(clientOptions: Client & {
    /**
     * The debounced delay for performing a search (in ms).
     * .
     * @defaultValue 100
     */
    delayMs?: number;
    /**
     * still perform search even if query is empty.
     *
     * @defaultValue false
     */
    allowEmpty?: boolean;
}, 
/**
 * @deprecated pass to `client` object instead
 */
_locale?: string, 
/**
 * @deprecated pass to `client` object instead
 */
_tag?: string, 
/**
 * @deprecated pass to `client` object instead
 */
_delayMs?: number, 
/**
 * @deprecated pass to `client` object instead
 */
_allowEmpty?: boolean, 
/**
 * @deprecated No longer used
 */
_key?: string): UseDocsSearch;

export { type AlgoliaOptions, type Client, type FetchOptions, type OramaCloudOptions, type StaticOptions, useDocsSearch };
