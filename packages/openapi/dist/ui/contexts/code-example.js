'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createContext, useContext, useEffect, useMemo, useRef, useState, } from 'react';
import { useApiContext, useServerSelectContext } from '../../ui/contexts/api.js';
import { DynamicCodeBlock } from 'fumadocs-ui/components/dynamic-codeblock';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, } from '../../ui/components/select.js';
import { useEffectEvent } from 'fumadocs-core/utils/use-effect-event';
import { joinURL, resolveRequestData, resolveServerUrl, withBase, } from '../../utils/url.js';
const CodeExampleContext = createContext(null);
export function CodeExampleProvider({ route, examples, initialKey, children, }) {
    const [key, setKey] = useState(initialKey ?? examples[0].key);
    const listeners = useRef([]);
    const setData = useEffectEvent((data, encoded) => {
        for (const example of examples) {
            if (example.key === key) {
                // persistent changes
                example.data = data;
                example.encoded = encoded;
                break;
            }
        }
        for (const listener of listeners.current) {
            listener(data, encoded);
        }
    });
    const updateKey = useEffectEvent((newKey) => {
        const example = examples.find((example) => example.key === newKey);
        if (!example)
            return;
        setKey(newKey);
        for (const listener of listeners.current) {
            listener(example.data, example.encoded);
        }
    });
    const addListener = useEffectEvent((listener) => {
        // initial call to listeners to ensure their data is the latest
        // this is necessary to avoid race conditions between `useEffect()`
        const example = examples.find((example) => example.key === key);
        listener(example.data, example.encoded);
        listeners.current.push(listener);
    });
    const removeListener = useEffectEvent((listener) => {
        listeners.current = listeners.current.filter((item) => item !== listener);
    });
    return (_jsx(CodeExampleContext, { value: useMemo(() => ({
            key,
            route,
            setKey: updateKey,
            examples,
            setData,
            removeListener,
            addListener,
        }), [addListener, examples, key, removeListener, route, setData, updateKey]), children: children }));
}
export function CodeExample(sample) {
    const { shikiOptions, mediaAdapters } = useApiContext();
    const { examples, key, route, addListener, removeListener } = useContext(CodeExampleContext);
    const { server } = useServerSelectContext();
    const [data, setData] = useState(() => {
        return examples.find((example) => example.key === key).encoded;
    });
    useEffect(() => {
        const listener = (_, encoded) => setData(encoded);
        addListener(listener);
        return () => {
            removeListener(listener);
        };
    }, [addListener, removeListener]);
    const code = useMemo(() => {
        if (!sample.source)
            return;
        if (typeof sample.source === 'string')
            return sample.source;
        return sample.source(joinURL(withBase(server ? resolveServerUrl(server.url, server.variables) : '/', typeof window !== 'undefined'
            ? window.location.origin
            : 'https://loading'), resolveRequestData(route, data)), data, {
            server: sample.serverContext,
            mediaAdapters,
        });
    }, [mediaAdapters, sample, server, route, data]);
    if (!code || !sample)
        return null;
    return (_jsx(DynamicCodeBlock, { lang: sample.lang, code: code, options: shikiOptions }));
}
export function CodeExampleSelector({ items }) {
    const { key, setKey } = useContext(CodeExampleContext);
    const item = items.find((item) => item.value === key);
    return (_jsxs(Select, { value: key, onValueChange: setKey, children: [_jsx(SelectTrigger, { className: "not-prose mb-2", children: _jsx(SelectValue, { asChild: true, children: item ? _jsx(SelectDisplay, { item: item }) : null }) }), _jsx(SelectContent, { children: items.map((item) => (_jsx(SelectItem, { value: item.value, children: _jsx(SelectDisplay, { item: item }) }, item.value))) })] }));
}
function SelectDisplay({ item, ...props }) {
    return (_jsxs("div", { ...props, children: [_jsx("span", { className: "font-medium text-sm", children: item.title }), _jsx("span", { className: "text-fd-muted-foreground", children: item.description })] }));
}
export function useRequestInitialData() {
    const { examples, key } = useContext(CodeExampleContext);
    return useMemo(() => examples.find((example) => example.key === key).data, [examples, key]);
}
export function useRequestDataUpdater() {
    const { setData } = useContext(CodeExampleContext);
    return { setData };
}
