import { bundle, dereference, upgrade } from '@scalar/openapi-parser';
import { fetchUrls, readFiles } from '@scalar/openapi-parser/plugins';
const cache = new Map();
/**
 * process & reference input document to a Fumadocs OpenAPI compatible format
 */
export async function processDocument(input, disableCache = false) {
    const cached = !disableCache && typeof input === 'string' ? cache.get(input) : null;
    if (cached)
        return cached;
    const dereferenceMap = new Map();
    let document = await bundle(input, {
        plugins: [fetchUrls(), readFiles()],
        treeShake: false,
    });
    // upgrade
    document = upgrade(document).specification;
    const { schema: dereferenced } = await dereference(document, {
        onDereference({ ref, schema }) {
            dereferenceMap.set(schema, ref);
        },
    });
    const processed = {
        document: dereferenced,
        dereferenceMap,
        downloaded: document,
    };
    if (!disableCache && typeof input === 'string') {
        cache.set(input, processed);
    }
    return processed;
}
