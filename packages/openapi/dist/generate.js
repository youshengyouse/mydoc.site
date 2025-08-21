import { getAPIPageItems } from './build-routes.js';
import { generateDocument, } from './utils/generate-document.js';
import { idToTitle } from './utils/id-to-title.js';
export async function generateAll(schemaId, processed, options = {}) {
    const { document } = processed;
    const items = getAPIPageItems(document);
    return generateDocument(schemaId, processed, {
        operations: items.operations,
        webhooks: items.webhooks,
        hasHead: true,
    }, {
        ...options,
        title: document.info.title,
        description: document.info.description,
    }, {
        type: 'file',
    });
}
export async function generatePages(schemaId, processed, options = {}) {
    const { document } = processed;
    const items = getAPIPageItems(document);
    const result = [];
    for (const item of items.operations) {
        const pathItem = document.paths?.[item.path];
        if (!pathItem)
            continue;
        const operation = pathItem[item.method];
        if (!operation)
            continue;
        result.push({
            type: 'operation',
            item,
            content: generateDocument(schemaId, processed, {
                operations: [item],
                hasHead: false,
            }, {
                ...options,
                title: operation.summary ??
                    pathItem.summary ??
                    idToTitle(operation.operationId ?? 'unknown'),
                description: operation.description ?? pathItem.description,
            }, {
                type: 'operation',
            }),
        });
    }
    for (const item of items.webhooks) {
        const pathItem = document.webhooks?.[item.name];
        if (!pathItem)
            continue;
        const operation = pathItem[item.method];
        if (!operation)
            continue;
        result.push({
            type: 'webhook',
            item,
            content: generateDocument(schemaId, processed, {
                webhooks: [item],
                hasHead: false,
            }, {
                ...options,
                title: operation.summary ?? pathItem.summary ?? idToTitle(item.name),
                description: operation.description ?? pathItem.description,
            }, {
                type: 'operation',
            }),
        });
    }
    return result;
}
export async function generateTags(schemaId, processed, options = {}) {
    const { document } = processed;
    if (!document.tags)
        return [];
    const items = getAPIPageItems(document);
    return document.tags.map((tag) => {
        const webhooks = items.webhooks.filter((v) => v.tags && v.tags.includes(tag.name));
        const operations = items.operations.filter((v) => v.tags && v.tags.includes(tag.name));
        const displayName = tag && 'x-displayName' in tag && typeof tag['x-displayName'] === 'string'
            ? tag['x-displayName']
            : idToTitle(tag.name);
        return {
            tag: tag.name,
            content: generateDocument(schemaId, processed, {
                operations,
                webhooks,
                hasHead: true,
            }, {
                ...options,
                title: displayName,
                description: tag?.description,
            }, {
                type: 'tag',
                tag,
            }),
        };
    });
}
