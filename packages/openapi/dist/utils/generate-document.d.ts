import type { ApiPageProps } from '../render/api-page.js';
import type { GenerateOptions } from '../generate.js';
import type { TagObject } from '../types.js';
import type { ProcessedDocument } from '../utils/process-document.js';
export type DocumentContext = {
    type: 'tag';
    tag: TagObject | undefined;
} | {
    type: 'operation';
} | {
    type: 'file';
};
export declare function generateDocument(schemaId: string, processed: ProcessedDocument, pageProps: Omit<ApiPageProps, 'document'>, options: GenerateOptions & {
    title: string;
    description?: string;
}, context: DocumentContext): string;
//# sourceMappingURL=generate-document.d.ts.map