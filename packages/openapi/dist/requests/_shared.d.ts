import type { MediaAdapter } from '../media/adapter.js';
import type { NoReference } from '../utils/schema.js';
import type { ParameterObject } from '../types.js';
export type SampleGenerator<ServerContext = unknown> = (url: string, data: RequestData, context: {
    mediaAdapters: Record<string, MediaAdapter>;
    server: ServerContext;
}) => string;
export interface RawRequestData {
    method: string;
    path: Record<string, unknown>;
    query: Record<string, unknown>;
    header: Record<string, unknown>;
    cookie: Record<string, unknown>;
    body?: unknown;
    bodyMediaType?: string;
}
interface EncodedParameter {
    readonly value: string | string[];
}
export interface RequestData {
    method: string;
    path: Record<string, EncodedParameter>;
    query: Record<string, EncodedParameter>;
    header: Record<string, EncodedParameter>;
    cookie: Record<string, EncodedParameter>;
    body?: unknown;
    bodyMediaType?: string;
}
export declare function ident(code: string, tab?: number): string;
export declare function encodeRequestData(from: RawRequestData, adapters: Record<string, MediaAdapter>, parameters: NoReference<ParameterObject>[]): RequestData;
export {};
//# sourceMappingURL=_shared.d.ts.map