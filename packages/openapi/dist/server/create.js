import { createProxy } from '../server/proxy.js';
import { processDocument, } from '../utils/process-document.js';
export function createOpenAPI(options = {}) {
    const { input = [], disableCache = process.env.NODE_ENV === 'development', ...shared } = options;
    let schemas;
    async function getSchemas() {
        const out = {};
        if (Array.isArray(input)) {
            await Promise.all(input.map(async (item) => {
                out[item] = await processDocument(item, disableCache);
            }));
        }
        else {
            await Promise.all(Object.entries(await input()).map(async ([k, v]) => {
                out[k] = await processDocument(v, disableCache);
            }));
        }
        return out;
    }
    return {
        createProxy,
        async getSchemas() {
            return (schemas ?? (schemas = getSchemas()));
        },
        getAPIPageProps({ document, ...props }) {
            return {
                ...shared,
                ...props,
                document: typeof document === 'string'
                    ? this.getSchemas().then((map) => {
                        return map[document] ?? processDocument(document, disableCache);
                    })
                    : document,
            };
        },
    };
}
export function createCodeSample(options) {
    return options;
}
