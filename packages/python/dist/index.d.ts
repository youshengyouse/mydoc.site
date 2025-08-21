interface ModuleInterface {
    name: string;
    path: string;
    description: string | null;
    docstring: DocstringSection[] | null;
    modules: {
        [key: string]: ModuleInterface;
    };
    attributes: AttributeInterface[];
    classes: {
        [key: string]: ClassInterface;
    };
    functions: {
        [key: string]: FunctionInterface;
    };
    version?: string;
}
interface ClassInterface {
    name: string;
    path: string;
    description: string | null;
    docstring: DocstringSection[] | null;
    parameters: ParameterInterface[];
    attributes: AttributeInterface[];
    functions: {
        [key: string]: FunctionInterface;
    };
    source: string;
    inherited_members: {
        [key: string]: {
            kind: string;
            path: string;
        }[];
    };
}
interface FunctionInterface {
    name: string;
    path: string;
    signature: string;
    description: string | null;
    docstring: DocstringSection[];
    parameters: ParameterInterface[];
    returns: ReturnInterface;
    source: string;
}
interface AttributeInterface {
    name: string;
    annotation: string | null;
    description: DocstringSection[] | null;
    value: string | null;
}
type DocstringSection = {
    kind: 'text';
    value: string;
} | {
    kind: 'code';
    value: string;
    title?: string;
} | {
    kind: 'admonition';
    value: {
        annotation: string;
        description: string;
    };
    title: string;
} | {
    kind: 'examples';
    value: [string, string][];
} | {
    kind: string;
    value: any;
    title?: string;
};
interface ParameterInterface {
    name: string;
    annotation: string | null;
    description: string | DocstringSection[] | null;
    value?: string | null;
}
interface ReturnInterface {
    name: string;
    annotation: string | null;
    description: string | null;
}

type OutputFile = {
    path: string;
    frontmatter: Record<string, unknown>;
    content: string;
};
interface ConvertOptions {
    baseUrl?: string;
}
declare function convert(mod: ModuleInterface, options?: ConvertOptions): OutputFile[];

interface WriteOptions {
    outDir?: string;
}
declare function write(output: OutputFile[], options?: WriteOptions): Promise<void>;
declare function frontmatter(obj: unknown): string;

export { type AttributeInterface, type ClassInterface, type ConvertOptions, type DocstringSection, type FunctionInterface, type ModuleInterface, type OutputFile, type ParameterInterface, type ReturnInterface, convert, frontmatter, write };
