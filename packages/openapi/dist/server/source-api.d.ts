import type { PageTree } from 'fumadocs-core/server';
import type { PageFile, PageTreeTransformer } from 'fumadocs-core/source';
/**
 * Source API Integration
 *
 * Add this to page tree builder options
 */
export declare const attachFile: (node: PageTree.Item, file: PageFile | undefined) => PageTree.Item;
export declare function transformerOpenAPI(): PageTreeTransformer;
//# sourceMappingURL=source-api.d.ts.map