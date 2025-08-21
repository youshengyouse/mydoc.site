import { compile } from '@fumari/json-schema-to-typescript';
export async function getTypescriptSchema(schema, dereferenceMap) {
    try {
        const cloned = structuredClone({ schema, dereferenceMap });
        return await compile(cloned.schema, 'Response', {
            $refOptions: false,
            schemaToId: cloned.dereferenceMap,
            bannerComment: '',
            additionalProperties: false,
            enableConstEnums: false,
        });
    }
    catch (e) {
        console.warn('Failed to generate typescript schema:', e);
    }
}
