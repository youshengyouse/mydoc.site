import { ShikiTransformer } from 'shiki';
import { TransformerTwoslashIndexOptions } from '@shikijs/twoslash';
import { TwoslashReturn } from 'twoslash';

interface TwoslashTypesCache {
    /**
     * Read cached result
     *
     * @param code Source code
     */
    read: (code: string) => TwoslashReturn | null;
    /**
     * Save result to cache
     *
     * @param code Source code
     * @param data Twoslash data
     */
    write: (code: string, data: TwoslashReturn) => void;
    /**
     * On initialization
     */
    init?: () => void | Promise<void>;
}
interface TransformerTwoslashOptions extends TransformerTwoslashIndexOptions {
    typesCache?: TwoslashTypesCache;
}
declare function transformerTwoslash({ typesCache, ...options }?: TransformerTwoslashOptions): ShikiTransformer;

export { type TransformerTwoslashOptions, type TwoslashTypesCache, transformerTwoslash };
