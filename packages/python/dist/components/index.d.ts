import * as react_jsx_runtime from 'react/jsx-runtime';
import { ReactNode } from 'react';
export { Tab, Tabs } from 'fumadocs-ui/components/tabs';

declare function PyFunction(props: {
    name: string;
    type: string;
    children?: ReactNode;
}): react_jsx_runtime.JSX.Element;
declare function PyAttribute(props: {
    name: string;
    type?: string;
    value?: string;
    children?: ReactNode;
}): react_jsx_runtime.JSX.Element;
declare function PyParameter(props: {
    name: string;
    type?: string;
    value?: string;
    children?: ReactNode;
}): react_jsx_runtime.JSX.Element;
declare function PySourceCode({ children }: {
    children: ReactNode;
}): react_jsx_runtime.JSX.Element;
declare function PyFunctionReturn({ type, children, }: {
    type?: string;
    children: ReactNode;
}): react_jsx_runtime.JSX.Element;

export { PyAttribute, PyFunction, PyFunctionReturn, PyParameter, PySourceCode };
