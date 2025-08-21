import type { OpenAPIV3_1 as V3_1 } from 'openapi-types';
import type { default as Slugger } from 'github-slugger';
import { type Renderer } from './render/renderer.js';
import type { NoReference } from './utils/schema.js';
import type { ProcessedDocument } from './utils/process-document.js';
import type { MediaAdapter } from './media/adapter.js';
import type { SharedOpenAPIOptions } from './server/index.js';
export type Document = V3_1.Document;
export type OperationObject = V3_1.OperationObject;
export type ParameterObject = V3_1.ParameterObject;
export type SecurityRequirementObject = V3_1.SecurityRequirementObject;
export type SecuritySchemeObject = V3_1.SecuritySchemeObject;
export type ReferenceObject = V3_1.ReferenceObject;
export type PathItemObject = V3_1.PathItemObject;
export type TagObject = V3_1.TagObject;
export type ServerObject = NoReference<V3_1.ServerObject>;
export type CallbackObject = NoReference<V3_1.CallbackObject>;
export type ServerVariableObject = NoReference<V3_1.ServerVariableObject>;
export type MethodInformation = NoReference<OperationObject> & {
    method: string;
};
/**
 * Dereferenced value and its original `$ref` value
 */
export type DereferenceMap = Map<unknown, string>;
export interface RenderContext extends SharedOpenAPIOptions {
    renderer: Renderer;
    servers: ServerObject[];
    slugger: Slugger;
    /**
     * dereferenced schema
     */
    schema: ProcessedDocument;
    mediaAdapters: Record<string, MediaAdapter>;
}
//# sourceMappingURL=types.d.ts.map