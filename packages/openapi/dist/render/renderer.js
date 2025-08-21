import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { Tab, Tabs } from 'fumadocs-ui/components/tabs';
import { AccordionContent, AccordionHeader, AccordionItem, Accordions, AccordionTrigger, } from '../ui/components/accordion.js';
import { API, APIExample, APIInfo, ObjectCollapsible, Property, Root, } from '../ui/index.js';
import { APIPlayground } from '../playground/index.js';
import { CodeExampleSelector } from '../ui/lazy.js';
import { CodeBlockTab, CodeBlockTabs, CodeBlockTabsList, CodeBlockTabsTrigger, } from 'fumadocs-ui/components/codeblock';
export function createRenders() {
    return {
        Root,
        API,
        APIInfo: ({ children, head }) => (_jsxs(APIInfo, { children: [head, children] })),
        APIExample,
        Responses: (props) => (_jsx(Tabs, { ...props, groupId: "fumadocs_openapi_responses" })),
        Response: Tab,
        ResponseTypes: (props) => (_jsx(Accordions, { type: "single", className: "pt-2", defaultValue: props.defaultValue, children: props.children })),
        ResponseType: (props) => (_jsxs(AccordionItem, { value: props.label, children: [_jsx(AccordionHeader, { children: _jsx(AccordionTrigger, { children: props.label }) }), _jsx(AccordionContent, { className: "prose-no-margin", children: props.children })] })),
        Property,
        ObjectCollapsible,
        Requests: ({ items, children }) => (_jsxs(CodeBlockTabs, { groupId: "fumadocs_openapi_requests", defaultValue: items[0], children: [_jsx(CodeBlockTabsList, { children: items.map((item) => (_jsx(CodeBlockTabsTrigger, { value: item, children: item }, item))) }), children] })),
        CodeExampleSelector,
        Request: (props) => (_jsx(CodeBlockTab, { value: props.name, children: props.children })),
        APIPlayground,
    };
}
