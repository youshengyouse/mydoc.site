import type { PageTree } from 'fumadocs-core/server';
import { type ReactNode } from 'react';
type MakeRequired<O, K extends keyof O> = Omit<O, K> & Pick<Required<O>, K>;
interface TreeContextType {
    root: MakeRequired<PageTree.Root | PageTree.Folder, '$id'>;
}
export declare function TreeContextProvider(props: {
    tree: PageTree.Root;
    children: ReactNode;
}): import("react/jsx-runtime").JSX.Element;
export declare function useTreePath(): PageTree.Node[];
export declare function useTreeContext(): TreeContextType;
export {};
//# sourceMappingURL=tree.d.ts.map