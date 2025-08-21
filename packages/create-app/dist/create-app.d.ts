type PackageManager = (typeof managers)[number];
declare const managers: readonly ["npm", "yarn", "bun", "pnpm"];

declare const templates: readonly ["+next+content-collections", "+next+fuma-docs-mdx", "react-router", "tanstack-start", "waku"];
type Template = (typeof templates)[number];
interface Options {
    outputDir: string;
    template: Template;
    /**
     * the package manager to use
     */
    packageManager: PackageManager;
    /**
     * Create files inside `src`
     *
     * (Next.js only)
     */
    useSrcDir?: boolean;
    /**
     * Configure Tailwind CSS
     *
     * (Next.js only)
     */
    tailwindcss: boolean;
    /**
     * Configure Next.js ESLint plugin
     *
     * (Next.js only)
     */
    eslint?: boolean;
    installDeps?: boolean;
    initializeGit?: boolean;
    log?: (message: string) => void;
}
declare function create(options: Options): Promise<void>;

export { type Options, type Template, create, templates };
