import type { JSX } from 'react/jsx-runtime';
export declare const CodeExampleProvider: (props: {
    route: string;
    examples: {
        key: string;
        data: import("../requests/_shared.js").RawRequestData;
        encoded: import("../requests/_shared.js").RequestData;
    }[];
    initialKey?: string;
    children: import("react").ReactNode;
}) => JSX.Element;
export declare const CodeExample: (props: import("../render/operation/index.js").CodeSample<unknown>) => JSX.Element;
export declare const CodeExampleSelector: (props: import("../render/renderer.js").SamplesProps) => JSX.Element;
export declare const ClientLazy: (props: import("../playground/client.js").ClientProps) => JSX.Element;
export declare const ApiProvider: (props: import("./contexts/api.js").ApiProviderProps) => JSX.Element;
//# sourceMappingURL=lazy.d.ts.map