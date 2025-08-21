import { TwoslashTypesCache } from './index.js';
import 'shiki';
import '@shikijs/twoslash';
import 'twoslash';

interface FileSystemTypeResultCacheOptions {
    /**
     * The directory to store the cache files.
     *
     * @default '.next/cache/twoslash'
     */
    dir?: string;
    cwd?: string;
}
declare function createFileSystemTypesCache(options?: FileSystemTypeResultCacheOptions): TwoslashTypesCache;

export { type FileSystemTypeResultCacheOptions, createFileSystemTypesCache };
