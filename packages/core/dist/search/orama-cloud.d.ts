import { CloudManager } from '@oramacloud/client';
import { S as StructuredData } from '../remark-structure-DVje0Sib.js';
import '../remark-heading-BPCoYwjn.js';
import 'mdast';
import 'unified';
import 'mdast-util-mdx-jsx';

interface SyncOptions {
    /**
     * Index name to sync
     */
    index: string;
    documents: OramaDocument[];
    /**
     * Deploy changes
     *
     * @defaultValue true
     */
    autoDeploy?: boolean;
}
type I18nSyncOptions = Omit<SyncOptions, 'index' | 'documents'> & {
    /**
     * Indexes to sync.
     *
     * Pairs of `locale`-`index`.
     **/
    indexes: Record<string, string>;
    documents: {
        locale: string;
        items: OramaDocument[];
    }[];
};
interface OramaDocument {
    /**
     * The ID of document, must be unique
     */
    id: string;
    title: string;
    description?: string;
    /**
     * URL to the page
     */
    url: string;
    structured: StructuredData;
    /**
     * Tag to filter results
     */
    tag?: string;
    /**
     * Data to be added to each section index
     */
    extra_data?: object;
}
interface OramaIndex {
    id: string;
    title: string;
    url: string;
    tag?: string;
    /**
     * The id of page, used for `group by`
     */
    page_id: string;
    /**
     * Heading content
     */
    section?: string;
    /**
     * Heading (anchor) id
     */
    section_id?: string;
    content: string;
}
declare function sync(cloudManager: CloudManager, options: SyncOptions): Promise<void>;
declare function syncI18n(cloudManager: CloudManager, options: I18nSyncOptions): Promise<void>;

export { type I18nSyncOptions, type OramaDocument, type OramaIndex, type SyncOptions, sync, syncI18n };
