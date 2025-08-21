'use client';
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { FileText, Hash, Search as SearchIcon } from '../../icons.js';
import { createContext, Fragment, useCallback, useContext, useEffect, useMemo, useRef, useState, } from 'react';
import { I18nLabel, useI18n } from '../../contexts/i18n.js';
import { cn } from '../../utils/cn.js';
import { Dialog, DialogContent, DialogOverlay, DialogTitle, } from '@radix-ui/react-dialog';
import { cva } from 'class-variance-authority';
import { useEffectEvent } from 'fumadocs-core/utils/use-effect-event';
import { useRouter } from 'fumadocs-core/framework';
import { useOnChange } from 'fumadocs-core/utils/use-on-change';
import scrollIntoView from 'scroll-into-view-if-needed';
import { buttonVariants } from '../../components/ui/button.js';
const Context = createContext(null);
const ListContext = createContext(null);
const TagsListContext = createContext(null);
export function SearchDialog({ open, onOpenChange, search, onSearchChange, isLoading = false, children, }) {
    const [active, setActive] = useState(null);
    return (_jsx(Dialog, { open: open, onOpenChange: onOpenChange, children: _jsx(Context.Provider, { value: useMemo(() => ({
                open,
                onOpenChange,
                search,
                onSearchChange,
                active,
                setActive,
                isLoading,
            }), [active, isLoading, onOpenChange, onSearchChange, open, search]), children: children }) }));
}
export function SearchDialogHeader(props) {
    return (_jsx("div", { ...props, className: cn('flex flex-row items-center gap-2 p-3', props.className) }));
}
export function SearchDialogInput(props) {
    const { text } = useI18n();
    const { search, onSearchChange } = useSearch();
    return (_jsx("input", { ...props, value: search, onChange: (e) => onSearchChange(e.target.value), placeholder: text.search, className: "w-0 flex-1 bg-transparent text-lg placeholder:text-fd-muted-foreground focus-visible:outline-none" }));
}
export function SearchDialogClose({ children = 'ESC', className, ...props }) {
    const { onOpenChange } = useSearch();
    return (_jsx("button", { type: "button", onClick: () => onOpenChange(false), className: cn(buttonVariants({
            color: 'outline',
            size: 'sm',
            className: 'font-mono text-fd-muted-foreground',
        }), className), ...props, children: children }));
}
export function SearchDialogFooter(props) {
    return (_jsx("div", { ...props, className: cn('bg-fd-secondary/50 p-3 empty:hidden', props.className) }));
}
export function SearchDialogOverlay(props) {
    return (_jsx(DialogOverlay, { ...props, className: cn('fixed inset-0 z-50 max-md:backdrop-blur-xs data-[state=open]:animate-fd-fade-in data-[state=closed]:animate-fd-fade-out', props.className) }));
}
export function SearchDialogContent({ children, ...props }) {
    const { text } = useI18n();
    return (_jsxs(DialogContent, { "aria-describedby": undefined, ...props, className: cn('fixed left-1/2 top-4 md:top-[calc(50%-250px)] z-50 w-[calc(100%-1rem)] max-w-screen-sm -translate-x-1/2 rounded-2xl border bg-fd-popover/80 backdrop-blur-xl text-fd-popover-foreground shadow-2xl shadow-black/50 overflow-hidden data-[state=closed]:animate-fd-dialog-out data-[state=open]:animate-fd-dialog-in', '*:border-b *:has-[+:last-child[data-empty=true]]:border-b-0 *:data-[empty=true]:border-b-0 *:last:border-b-0', props.className), children: [_jsx(DialogTitle, { className: "hidden", children: text.search }), children] }));
}
export function SearchDialogList({ items = null, Empty = () => (_jsx("div", { className: "py-12 text-center text-sm text-fd-muted-foreground", children: _jsx(I18nLabel, { label: "searchNoResult" }) })), Item = (props) => _jsx(SearchDialogListItem, { ...props }), ...props }) {
    const ref = useRef(null);
    const [active, setActive] = useState(() => items && items.length > 0 ? items[0].id : null);
    const { onOpenChange } = useSearch();
    const router = useRouter();
    const onOpen = ({ external, url }) => {
        if (external)
            window.open(url, '_blank')?.focus();
        else
            router.push(url);
        onOpenChange(false);
    };
    const onKey = useEffectEvent((e) => {
        if (!items || e.isComposing)
            return;
        if (e.key === 'ArrowDown' || e.key == 'ArrowUp') {
            let idx = items.findIndex((item) => item.id === active);
            if (idx === -1)
                idx = 0;
            else if (e.key === 'ArrowDown')
                idx++;
            else
                idx--;
            setActive(items.at(idx % items.length)?.id ?? null);
            e.preventDefault();
        }
        if (e.key === 'Enter') {
            const selected = items.find((item) => item.id === active);
            if (selected)
                onOpen(selected);
            e.preventDefault();
        }
    });
    useEffect(() => {
        const element = ref.current;
        if (!element)
            return;
        const observer = new ResizeObserver(() => {
            const viewport = element.firstElementChild;
            element.style.setProperty('--fd-animated-height', `${viewport.clientHeight}px`);
        });
        const viewport = element.firstElementChild;
        if (viewport)
            observer.observe(viewport);
        window.addEventListener('keydown', onKey);
        return () => {
            observer.disconnect();
            window.removeEventListener('keydown', onKey);
        };
    }, [onKey]);
    useOnChange(items, () => {
        if (items && items.length > 0) {
            setActive(items[0].id);
        }
    });
    return (_jsx("div", { ...props, ref: ref, "data-empty": items === null, className: cn('overflow-hidden h-(--fd-animated-height) transition-[height]', props.className), children: _jsx("div", { className: cn('w-full flex flex-col overflow-y-auto max-h-[460px] p-1', !items && 'hidden'), children: _jsxs(ListContext.Provider, { value: useMemo(() => ({
                    active,
                    setActive,
                }), [active]), children: [items?.length === 0 && Empty(), items?.map((item) => (_jsx(Fragment, { children: Item({ item, onClick: () => onOpen(item) }) }, item.id)))] }) }) }));
}
const icons = {
    text: null,
    heading: _jsx(Hash, { className: "size-4 shrink-0 text-fd-muted-foreground" }),
    page: (_jsx(FileText, { className: "size-6 text-fd-muted-foreground bg-fd-muted border p-0.5 rounded-sm shadow-sm shrink-0" })),
};
export function SearchDialogListItem({ item, className, children, renderHighlights: render = renderHighlights, ...props }) {
    const { active: activeId, setActive } = useSearchList();
    const active = item.id === activeId;
    return (_jsx("button", { type: "button", ref: useCallback((element) => {
            if (active && element) {
                scrollIntoView(element, {
                    scrollMode: 'if-needed',
                    block: 'nearest',
                    boundary: element.parentElement,
                });
            }
        }, [active]), "aria-selected": active, className: cn('relative flex select-none flex-row items-center gap-2 p-2 text-start text-sm rounded-lg', item.type !== 'page' && 'ps-8', item.type === 'page' || item.type === 'heading'
            ? 'font-medium'
            : 'text-fd-popover-foreground/80', active && 'bg-fd-accent text-fd-accent-foreground', className), onPointerMove: () => setActive(item.id), ...props, children: children ?? (_jsxs(_Fragment, { children: [item.type !== 'page' && (_jsx("div", { role: "none", className: "absolute start-4.5 inset-y-0 w-px bg-fd-border" })), icons[item.type], _jsx("p", { className: "min-w-0 truncate", children: item.contentWithHighlights
                        ? render(item.contentWithHighlights)
                        : item.content })] })) }));
}
export function SearchDialogIcon(props) {
    const { isLoading } = useSearch();
    return (_jsx(SearchIcon, { ...props, className: cn('size-5 text-fd-muted-foreground', isLoading && 'animate-pulse duration-400', props.className) }));
}
const itemVariants = cva('rounded-md border px-2 py-0.5 text-xs font-medium text-fd-muted-foreground transition-colors', {
    variants: {
        active: {
            true: 'bg-fd-accent text-fd-accent-foreground',
        },
    },
});
export function TagsList({ tag, onTagChange, allowClear = false, ...props }) {
    return (_jsx("div", { ...props, className: cn('flex items-center gap-1 flex-wrap', props.className), children: _jsx(TagsListContext.Provider, { value: useMemo(() => ({
                value: tag,
                onValueChange: onTagChange,
                allowClear,
            }), [allowClear, onTagChange, tag]), children: props.children }) }));
}
export function TagsListItem({ value, className, ...props }) {
    const { onValueChange, value: selectedValue, allowClear } = useTagsList();
    const selected = value === selectedValue;
    return (_jsx("button", { type: "button", "data-active": selected, className: cn(itemVariants({ active: selected, className })), onClick: () => {
            onValueChange(selected && allowClear ? undefined : value);
        }, tabIndex: -1, ...props, children: props.children }));
}
function renderHighlights(highlights) {
    return highlights.map((node, i) => {
        if (node.styles?.highlight) {
            return (_jsx("span", { className: "text-fd-primary bg-fd-primary/10", children: node.content }, i));
        }
        return _jsx(Fragment, { children: node.content }, i);
    });
}
export function useSearch() {
    const ctx = useContext(Context);
    if (!ctx)
        throw new Error('Missing <SearchDialog />');
    return ctx;
}
export function useTagsList() {
    const ctx = useContext(TagsListContext);
    if (!ctx)
        throw new Error('Missing <TagsList />');
    return ctx;
}
export function useSearchList() {
    const ctx = useContext(ListContext);
    if (!ctx)
        throw new Error('Missing <SearchDialogList />');
    return ctx;
}
