import { Plugin } from 'vite';

interface PluginOptions {
    /**
     * Automatically generate index files for accessing files with `import.meta.glob`.
     *
     * @defaultValue true
     */
    generateIndexFile?: boolean | {
        /**
         * add `.js` extensions to imports, needed for ESM without bundler resolution
         */
        addJsExtension?: boolean;
    };
    /**
     * @defaultValue source.config.ts
     */
    configPath?: string;
}
declare function mdx(config: Record<string, unknown>, options?: PluginOptions): Plugin;

export { type PluginOptions, mdx as default };
