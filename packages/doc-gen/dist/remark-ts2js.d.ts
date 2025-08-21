import { Transformer } from 'unified';
import { Root } from 'mdast';

interface TypeScriptToJavaScriptOptions {
    /**
     * Persist Tab value (Fumadocs UI only)
     *
     * @defaultValue false
     */
    persist?: {
        id: string;
    } | false;
    /**
     * Transform all TypeScript codeblocks by default, without a trigger
     */
    disableTrigger?: boolean;
    Tabs?: string;
    Tab?: string;
}
/**
 * A remark plugin to transform TypeScript codeblocks into two tabs of codeblocks with its JS variant.
 *
 * Add `ts2js` to enable transformation:
 * ````md
 * ```tsx ts2js
 * import { ReactNode } from "react";
 *
 * export default function Layout({ children }: { children: ReactNode }) {
 *     return <div>{children}</div>
 * }
 * ```
 * ````
 */
declare function remarkTypeScriptToJavaScript({ persist, disableTrigger, Tab, Tabs, }?: TypeScriptToJavaScriptOptions): Transformer<Root>;

export { type TypeScriptToJavaScriptOptions, remarkTypeScriptToJavaScript };
