interface BaseContext {
    /**
     * Passed by your custom example generator, for your custom media adapter to receive.
     */
    customData?: Record<string, unknown>;
}
interface GoContext extends BaseContext {
    lang: 'go';
    addImport: (name: string) => void;
}
interface JavaScriptContext extends BaseContext {
    lang: 'js';
    addImport: (pkg: string, name: string) => void;
}
interface JavaContext extends BaseContext {
    lang: 'java';
    addImport: (specifier: string) => void;
}
interface CSharpContext extends BaseContext {
    lang: 'csharp';
    addImport: (specifier: string) => void;
}
export type MediaContext = JavaContext | GoContext | JavaScriptContext | CSharpContext | (BaseContext & {
    lang: string;
});
export interface MediaAdapter {
    /**
     * the same adapter that's passed from a client component.
     *
     * It is needed for client-side serialization of values.
     */
    client?: MediaAdapter;
    /**
     * encode data into specified media type for `fetch()`.
     *
     * Return the encoded form of `data.body` property.
     */
    encode: (data: {
        body: unknown;
    }) => BodyInit;
    /**
     * generate code example for creating the body in a given programming language.
     *
     * @param data - request data.
     * @param lang - name of programming language.
     * @param ctx - context passed from the generator of programming language.
     *
     * @returns code that inits a `body` variable, or undefined if not supported (skip example for that language).
     */
    generateExample: (data: {
        body: unknown;
    }, ctx: MediaContext) => string | undefined;
}
export declare const defaultAdapters: {
    'application/json': {
        encode(data: {
            body: unknown;
        }): string;
        generateExample(data: {
            body: unknown;
        }, ctx: MediaContext): string | undefined;
    };
    'application/xml': {
        encode(data: {
            body: unknown;
        }): any;
        generateExample(data: {
            body: unknown;
        }, ctx: MediaContext): string | undefined;
    };
    'application/x-ndjson': {
        encode(data: {
            body: unknown;
        }): string;
        generateExample(data: {
            body: unknown;
        }, ctx: MediaContext): string | undefined;
    };
    'application/x-www-form-urlencoded': {
        encode(data: {
            body: unknown;
        }): URLSearchParams;
        generateExample(data: {
            body: unknown;
        }, ctx: MediaContext): string | undefined;
    };
    'multipart/form-data': {
        encode(data: {
            body: unknown;
        }): FormData;
        generateExample(data: {
            body: unknown;
        }, ctx: MediaContext): string | undefined;
    };
    'application/octet-stream': {
        encode(data: {
            body: unknown;
        }): BodyInit;
        generateExample(): undefined;
    };
};
export {};
//# sourceMappingURL=adapter.d.ts.map