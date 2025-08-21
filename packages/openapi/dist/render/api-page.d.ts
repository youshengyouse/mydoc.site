import type { RenderContext } from '../types.js';
import type { OpenAPIV3_1 } from 'openapi-types';
import { type ProcessedDocument } from '../utils/process-document.js';
import type { SharedOpenAPIOptions } from '../server/index.js';
export interface ApiPageProps extends SharedOpenAPIOptions {
    document: Promise<ProcessedDocument> | string | ProcessedDocument;
    hasHead: boolean;
    /**
     * An array of operations
     */
    operations?: OperationItem[];
    webhooks?: WebhookItem[];
}
export interface WebhookItem {
    name: string;
    method: OpenAPIV3_1.HttpMethods;
}
export interface OperationItem {
    path: string;
    method: OpenAPIV3_1.HttpMethods;
}
export declare function APIPage(props: ApiPageProps): Promise<import("react/jsx-runtime").JSX.Element>;
export declare function getContext(schema: ProcessedDocument, options?: SharedOpenAPIOptions): Promise<RenderContext>;
//# sourceMappingURL=api-page.d.ts.map