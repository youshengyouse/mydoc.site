import { PageData, MetaData, Source } from 'fumadocs-core/source';
import { Meta } from '@content-collections/core';

interface BaseMetaData extends MetaData {
    _meta: Meta;
}
interface BaseDocsData extends PageData {
    _meta: Meta;
}

declare function createMDXSource<Docs extends BaseDocsData, Meta extends BaseMetaData>(allDocs: Docs[], allMetas: Meta[]): Source<{
    metaData: Meta;
    pageData: Docs;
}>;

export { createMDXSource };
