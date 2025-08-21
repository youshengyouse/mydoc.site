'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Check, Copy } from '../icons.js';
import { createContext, useContext, useMemo, useRef, } from 'react';
import { cn } from '../utils/cn.js';
import { useCopyButton } from '../utils/use-copy-button.js';
import { buttonVariants } from '../components/ui/button.js';
import { Tabs, TabsContent, TabsList, TabsTrigger, } from '../components/tabs.unstyled.js';
import { mergeRefs } from '../utils/merge-refs.js';
const TabsContext = createContext(null);
export function Pre(props) {
    return (_jsx("pre", { ...props, className: cn('min-w-full w-max *:flex *:flex-col', props.className), children: props.children }));
}
export function CodeBlock({ ref, title, allowCopy, keepBackground = false, icon, viewportProps = {}, children, Actions = (props) => (_jsx("div", { ...props, className: cn('empty:hidden', props.className) })), ...props }) {
    const isTab = useContext(TabsContext) !== null;
    const areaRef = useRef(null);
    allowCopy ?? (allowCopy = !isTab);
    const bg = cn('bg-fd-secondary', keepBackground && 'bg-(--shiki-light-bg) dark:bg-(--shiki-dark-bg)');
    return (_jsxs("figure", { ref: ref, dir: "ltr", ...props, className: cn(isTab ? [bg, 'rounded-lg shadow-sm'] : 'my-4 rounded-xl bg-fd-card p-1', 'shiki relative border outline-none not-prose overflow-hidden text-sm', props.className), children: [title ? (_jsxs("div", { className: cn('flex text-fd-muted-foreground items-center gap-2 ps-3 h-9.5', isTab && 'border-b'), children: [typeof icon === 'string' ? (_jsx("div", { className: "[&_svg]:size-3.5", dangerouslySetInnerHTML: {
                            __html: icon,
                        } })) : (icon), _jsx("figcaption", { className: "flex-1 truncate", children: title }), Actions({
                        children: allowCopy && _jsx(CopyButton, { containerRef: areaRef }),
                    })] })) : (Actions({
                className: 'absolute top-1 right-1 z-2 bg-fd-card rounded-bl-lg border-l border-b text-fd-muted-foreground',
                children: allowCopy && _jsx(CopyButton, { containerRef: areaRef }),
            })), _jsx("div", { ref: areaRef, ...viewportProps, className: cn(!isTab && [bg, 'rounded-lg border'], 'text-[13px] py-3.5 overflow-auto max-h-[600px] fd-scroll-container', viewportProps.className), style: {
                    // space for toolbar
                    '--padding-right': !title ? 'calc(var(--spacing) * 8)' : undefined,
                    counterSet: props['data-line-numbers']
                        ? `line ${Number(props['data-line-numbers-start'] ?? 1) - 1}`
                        : undefined,
                    ...viewportProps.style,
                }, children: children })] }));
}
function CopyButton({ className, containerRef, ...props }) {
    const [checked, onClick] = useCopyButton(() => {
        const pre = containerRef.current?.getElementsByTagName('pre').item(0);
        if (!pre)
            return;
        const clone = pre.cloneNode(true);
        clone.querySelectorAll('.nd-copy-ignore').forEach((node) => {
            node.replaceWith('\n');
        });
        void navigator.clipboard.writeText(clone.textContent ?? '');
    });
    return (_jsx("button", { type: "button", className: cn(buttonVariants({
            color: 'ghost',
            className: '[&_svg]:size-3.5',
        }), className), "aria-label": checked ? 'Copied Text' : 'Copy Text', onClick: onClick, ...props, children: checked ? _jsx(Check, {}) : _jsx(Copy, {}) }));
}
export function CodeBlockTabs({ ref, ...props }) {
    const containerRef = useRef(null);
    const nested = useContext(TabsContext) !== null;
    return (_jsx(Tabs, { ref: mergeRefs(containerRef, ref), ...props, className: cn('bg-fd-card p-1 rounded-xl border overflow-hidden', !nested && 'my-4', props.className), children: _jsx(TabsContext.Provider, { value: useMemo(() => ({
                containerRef,
                nested,
            }), [nested]), children: props.children }) }));
}
export function CodeBlockTabsList(props) {
    const { containerRef, nested } = useContext(TabsContext);
    return (_jsxs(TabsList, { ...props, className: cn('flex flex-row overflow-x-auto px-1 -mx-1 text-fd-muted-foreground', props.className), children: [props.children, !nested && (_jsx(CopyButton, { className: "sticky ms-auto right-0 bg-fd-card backdrop-blur-sm", containerRef: containerRef }))] }));
}
export function CodeBlockTabsTrigger({ children, ...props }) {
    return (_jsxs(TabsTrigger, { ...props, className: cn('relative group inline-flex text-sm font-medium text-nowrap items-center gap-2 px-2 first:ms-1 py-1.5 hover:text-fd-accent-foreground data-[state=active]:text-fd-primary [&_svg]:size-3.5', props.className), children: [_jsx("div", { className: "absolute inset-x-2 bottom-0 h-px group-data-[state=active]:bg-fd-primary" }), children] }));
}
// TODO: currently Vite RSC plugin has problem with adding `asChild` here, maybe revisit this in future
export const CodeBlockTab = TabsContent;
