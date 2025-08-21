import type { ApiPageProps } from '../render/api-page.js';
import { createProxy } from '../server/proxy.js';
import type { CodeSample } from '../render/operation/index.js';
import type { Renderer } from '../render/renderer.js';
import type { NoReference } from '../utils/schema.js';
import type { BuiltinTheme, CodeOptionsThemes, CodeToHastOptionsCommon } from 'shiki';
import type { MediaAdapter } from '../media/adapter.js';
import type { MethodInformation } from '../types.js';
import type { OpenAPIV3, OpenAPIV3_1 } from 'openapi-types';
import { type ProcessedDocument } from '../utils/process-document.js';
type Awaitable<T> = T | Promise<T>;
/**
 * schema id -> downloaded schema object
 */
type SchemaMap = Record<string, OpenAPIV3_1.Document | OpenAPIV3.Document>;
type ProcessedSchemaMap = Record<string, ProcessedDocument>;
export interface SharedOpenAPIOptions {
    /**
     * The url of proxy to avoid CORS issues
     */
    proxyUrl?: string;
    renderer?: Partial<Renderer>;
    /**
     * Disable API Playground
     *
     * @defaultValue false
     */
    disablePlayground?: boolean;
    /**
     * Generate TypeScript definitions from response schema.
     *
     * Pass `false` to disable it.
     *
     * @param method - the operation object
     * @param statusCode - status code
     */
    generateTypeScriptSchema?: ((method: NoReference<MethodInformation>, statusCode: string) => Awaitable<string>) | false;
    /**
     * Generate code samples for endpoint.
     */
    generateCodeSamples?: (method: MethodInformation) => Awaitable<CodeSample[]>;
    shikiOptions?: Omit<CodeToHastOptionsCommon, 'lang'> & CodeOptionsThemes<BuiltinTheme>;
    /**
     * Show full response schema instead of only example response & Typescript definitions
     *
     * @default true
     */
    showResponseSchema?: boolean;
    mediaAdapters?: Record<string, MediaAdapter>;
}
export interface OpenAPIOptions extends SharedOpenAPIOptions {
    /**
     * Schema files, can be:
     * - URL
     * - file path
     * - a function returning records of downloaded schemas.
     */
    input?: string[] | (() => Promise<SchemaMap>);
    /**
     * By default, it is disabled on dev mode
     */
    disableCache?: boolean;
}
export interface OpenAPIServer {
    getAPIPageProps: (from: ApiPageProps) => ApiPageProps;
    createProxy: typeof createProxy;
    getSchemas: () => Promise<ProcessedSchemaMap>;
}
export declare function createOpenAPI(options?: OpenAPIOptions): OpenAPIServer;
export declare function createCodeSample<T>(options: CodeSample<T>): CodeSample;
export {};
//# sourceMappingURL=create.d.ts.map