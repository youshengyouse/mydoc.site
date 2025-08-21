import { ReactElement } from 'react';
import { I18nConfig } from '../i18n/index.js';
import { R as Root, I as Item, F as Folder, S as Separator } from '../definitions-D0ZpOeqd.js';

/**
 * In memory file system.
 */
declare class FileSystem<File> {
    files: Map<string, File>;
    folders: Map<string, string[]>;
    constructor();
    read(path: string): File | undefined;
    /**
     * get the direct children of folder (in virtual file path)
     */
    readDir(path: string): string[] | undefined;
    write(path: string, file: File): void;
    getFiles(): string[];
    makeDir(path: string): void;
}

interface LoadOptions {
    transformers?: Transformer[];
    buildFile: (file: VirtualFile) => MetaFile | PageFile;
}
type ContentStorage<Page extends PageData = PageData, Meta extends MetaData = MetaData> = FileSystem<MetaFile<Meta> | PageFile<Page>>;
interface MetaFile<Data extends MetaData = MetaData> {
    path: string;
    absolutePath: string;
    format: 'meta';
    data: Data;
}
interface PageFile<Data extends PageData = PageData> {
    path: string;
    absolutePath: string;
    format: 'page';
    slugs: string[];
    data: Data;
}
type Transformer = (context: {
    storage: ContentStorage;
    options: LoadOptions;
}) => void;
declare const parsers: {
    dir(path: string): [string, string?];
    dot(path: string): [string, string?];
    none(path: string): [string, string?];
};
/**
 * @returns a map of locale and its content storage.
 *
 * in the storage, locale codes are removed from file paths, hence the same file will have same file paths in every storage.
 */
declare function loadFiles(files: VirtualFile[], options: LoadOptions, i18n: {
    parser: keyof typeof parsers;
    languages: string[];
    defaultLanguage: string;
}): Record<string, ContentStorage>;

interface FileInfo {
    /**
     * File path without extension
     *
     * @deprecated obtain it with `join(dirname, name)`
     */
    flattenedPath: string;
    /**
     * path of file (unparsed)
     */
    path: string;
    /**
     * File name without extension
     */
    name: string;
    /**
     * file extension from the last `.`, like `.md`
     *
     * empty string if no file extension
     */
    ext: string;
    dirname: string;
}
interface FolderInfo {
    /**
     * Original path of folder
     */
    path: string;
    /**
     * folder name
     */
    name: string;
    dirname: string;
}
declare function parseFilePath(path: string): FileInfo;
/**
 * @deprecated use `dirname` and `basename` directly.
 */
declare function parseFolderPath(path: string): FolderInfo;

interface LoaderConfig {
    source: SourceConfig;
    i18n: I18nConfig | undefined;
}
interface SourceConfig {
    pageData: PageData;
    metaData: MetaData;
}
interface LoaderOptions<T extends SourceConfig = SourceConfig, I18n extends I18nConfig | undefined = I18nConfig | undefined> {
    baseUrl: string;
    icon?: NonNullable<BaseOptions['resolveIcon']>;
    slugs?: (info: FileInfo) => string[];
    url?: UrlFn;
    source: Source<T>;
    transformers?: Transformer[];
    /**
     * Additional options for page tree builder
     */
    pageTree?: Partial<BaseOptions<T['pageData'], T['metaData']>>;
    /**
     * Configure i18n
     */
    i18n?: I18n;
}
interface Source<Config extends SourceConfig> {
    /**
     * @internal
     */
    _config?: Config;
    files: VirtualFile[] | (() => VirtualFile[]);
}
interface SharedFileInfo {
    /**
     * Virtualized file path (parsed)
     *
     * @deprecated Use `path` instead.
     */
    file: FileInfo;
    /**
     * Virtualized file path (relative to content directory)
     *
     * @example `docs/page.mdx`
     */
    path: string;
    /**
     * Absolute path of the file
     */
    absolutePath: string;
}
interface VirtualFile {
    /**
     * Virtualized path (relative to content directory)
     *
     * @example `docs/page.mdx`
     */
    path: string;
    /**
     * Absolute path of the file
     */
    absolutePath?: string;
    type: 'page' | 'meta';
    /**
     * Specified Slugs for page
     */
    slugs?: string[];
    data: unknown;
}
interface Page<Data = PageData> extends SharedFileInfo {
    slugs: string[];
    url: string;
    data: Data;
    locale?: string | undefined;
}
interface Meta<Data = MetaData> extends SharedFileInfo {
    data: Data;
}
interface LanguageEntry<Data = PageData> {
    language: string;
    pages: Page<Data>[];
}
interface LoaderOutput<Config extends LoaderConfig> {
    pageTree: Config['i18n'] extends I18nConfig ? Record<string, Root> : Root;
    getPageTree: (locale?: string) => Root;
    getPageByHref: (href: string, options?: {
        language?: string;
        /**
         * resolve relative file paths in `href` from specified dirname, must be a virtual path.
         */
        dir?: string;
    }) => {
        page: Page<Config['source']['pageData']>;
        hash?: string;
    } | undefined;
    _i18n?: I18nConfig;
    /**
     * Get list of pages from language
     *
     * @param language - If empty, the default language will be used
     */
    getPages: (language?: string) => Page<Config['source']['pageData']>[];
    getLanguages: () => LanguageEntry<Config['source']['pageData']>[];
    /**
     * Get page with slugs
     *
     * @param language - If empty, the default language will be used
     */
    getPage: (slugs: string[] | undefined, language?: string) => Page<Config['source']['pageData']> | undefined;
    getNodePage: (node: Item, language?: string) => Page<Config['source']['pageData']> | undefined;
    getNodeMeta: (node: Folder, language?: string) => Meta<Config['source']['metaData']> | undefined;
    /**
     * generate static params for Next.js SSG
     *
     * @param slug - customise parameter name for slugs
     * @param lang - customise parameter name for lang
     */
    generateParams: <TSlug extends string = 'slug', TLang extends string = 'lang'>(slug?: TSlug, lang?: TLang) => (Record<TSlug, string[]> & Record<TLang, string>)[];
}
declare function createGetUrl(baseUrl: string, i18n?: I18nConfig): UrlFn;
declare function loader<Config extends SourceConfig, I18n extends I18nConfig | undefined = undefined>(options: LoaderOptions<Config, I18n>): LoaderOutput<{
    source: Config;
    i18n: I18n;
}>;
/**
 * Convert file path into slugs, also encode non-ASCII characters, so they can work in pathname
 */
declare function getSlugs(file: string | FileInfo): string[];

interface MetaData {
    icon?: string | undefined;
    title?: string | undefined;
    root?: boolean | undefined;
    pages?: string[] | undefined;
    defaultOpen?: boolean | undefined;
    description?: string | undefined;
}
interface PageData {
    icon?: string | undefined;
    title?: string;
    description?: string | undefined;
}
type InferPageType<Utils extends LoaderOutput<any>> = Utils extends LoaderOutput<infer Config> ? Page<Config['source']['pageData']> : never;
type InferMetaType<Utils extends LoaderOutput<any>> = Utils extends LoaderOutput<infer Config> ? Meta<Config['source']['metaData']> : never;
/**
 * @internal
 */
type UrlFn = (slugs: string[], locale?: string) => string;

interface LegacyTransformerOptions<Page extends PageData, Meta extends MetaData> {
    /**
     * @deprecated use `transformers` instead
     */
    attachFile?: (node: Item, file?: PageFile<Page>) => Item;
    /**
     * @deprecated use `transformers` instead
     */
    attachFolder?: (node: Folder, folder: {
        children: (PageFile<Page> | MetaFile<Meta>)[];
    }, meta?: MetaFile<Meta>) => Folder;
    /**
     * @deprecated use `transformers` instead
     */
    attachSeparator?: (node: Separator) => Separator;
}

interface PageTreeBuilderContext<Page extends PageData = PageData, Meta extends MetaData = MetaData> {
    /**
     * @internal
     */
    resolveName: (name: string, format: 'meta' | 'page') => string;
    options: BaseOptions<Page, Meta>;
    transformers: PageTreeTransformer<Page, Meta>[];
    builder: PageTreeBuilder<Page, Meta>;
    storage: ContentStorage<Page, Meta>;
    locale?: string;
    localeStorage?: ContentStorage<Page, Meta>;
    getUrl: UrlFn;
}
interface PageTreeTransformer<Page extends PageData = any, Meta extends MetaData = any> {
    name?: string;
    file?: (this: PageTreeBuilderContext<Page, Meta>, node: Item, filePath?: string) => Item;
    folder?: (this: PageTreeBuilderContext<Page, Meta>, node: Folder, folderPath: string, metaPath?: string) => Folder;
    separator?: (this: PageTreeBuilderContext<Page, Meta>, node: Separator) => Separator;
    root?: (this: PageTreeBuilderContext<Page, Meta>, node: Root) => Root;
}
interface BaseOptions<Page extends PageData = PageData, Meta extends MetaData = MetaData> extends LegacyTransformerOptions<Page, Meta> {
    /**
     * Remove references to the file path of original nodes (`$ref`)
     *
     * @defaultValue false
     */
    noRef?: boolean;
    transformers?: PageTreeTransformer<Page, Meta>[];
    resolveIcon?: (icon: string | undefined) => ReactElement | undefined;
}
interface PageTreeBuilder<Page extends PageData = PageData, Meta extends MetaData = MetaData> {
    build: (options: BaseOptions<Page, Meta> & {
        id?: string;
        storage: ContentStorage<Page, Meta>;
        /**
         * generate fallback page tree
         *
         * @defaultValue true
         */
        generateFallback?: boolean;
    }) => Root;
    /**
     * Build page tree and fallback to the default language if the localized page doesn't exist
     */
    buildI18n: (options: BaseOptions<Page, Meta> & {
        id?: string;
        storages: Record<string, ContentStorage<Page, Meta>>;
        i18n: I18nConfig;
    }) => Record<string, Root>;
}
declare function createPageTreeBuilder(getUrl: UrlFn): PageTreeBuilder;

export { type BaseOptions, type ContentStorage, type FileInfo, FileSystem, type FolderInfo, type InferMetaType, type InferPageType, type LanguageEntry, type LoadOptions, type LoaderConfig, type LoaderOptions, type LoaderOutput, type Meta, type MetaData, type MetaFile, type Page, type PageData, type PageFile, type PageTreeBuilder, type PageTreeBuilderContext, type PageTreeTransformer, type Source, type SourceConfig, type Transformer, type UrlFn, type VirtualFile, createGetUrl, createPageTreeBuilder, getSlugs, loadFiles, loader, parseFilePath, parseFolderPath };
