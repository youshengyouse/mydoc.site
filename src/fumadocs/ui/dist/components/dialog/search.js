'use client';
"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchDialog = SearchDialog;
exports.SearchDialogHeader = SearchDialogHeader;
exports.SearchDialogInput = SearchDialogInput;
exports.SearchDialogClose = SearchDialogClose;
exports.SearchDialogFooter = SearchDialogFooter;
exports.SearchDialogOverlay = SearchDialogOverlay;
exports.SearchDialogContent = SearchDialogContent;
exports.SearchDialogList = SearchDialogList;
exports.SearchDialogListItem = SearchDialogListItem;
exports.SearchDialogIcon = SearchDialogIcon;
exports.TagsList = TagsList;
exports.TagsListItem = TagsListItem;
exports.useSearch = useSearch;
exports.useTagsList = useTagsList;
exports.useSearchList = useSearchList;
var lucide_react_1 = require("lucide-react");
var react_1 = require("react");
var i18n_1 = require("@/contexts/i18n");
var cn_1 = require("@/utils/cn");
var button_1 = require("@/components/ui/button");
var react_dialog_1 = require("@radix-ui/react-dialog");
var class_variance_authority_1 = require("class-variance-authority");
var use_effect_event_1 = require("fumadocs-core/utils/use-effect-event");
var framework_1 = require("fumadocs-core/framework");
var use_on_change_1 = require("fumadocs-core/utils/use-on-change");
var scroll_into_view_if_needed_1 = require("scroll-into-view-if-needed");
var Context = (0, react_1.createContext)(null);
var ListContext = (0, react_1.createContext)(null);
var TagsListContext = (0, react_1.createContext)(null);
function SearchDialog(_a) {
    var open = _a.open, onOpenChange = _a.onOpenChange, search = _a.search, onSearchChange = _a.onSearchChange, _b = _a.isLoading, isLoading = _b === void 0 ? false : _b, children = _a.children;
    var _c = (0, react_1.useState)(null), active = _c[0], setActive = _c[1];
    return (<react_dialog_1.Dialog open={open} onOpenChange={onOpenChange}>
      <Context.Provider value={(0, react_1.useMemo)(function () { return ({
            open: open,
            onOpenChange: onOpenChange,
            search: search,
            onSearchChange: onSearchChange,
            active: active,
            setActive: setActive,
            isLoading: isLoading,
        }); }, [active, isLoading, onOpenChange, onSearchChange, open, search])}>
        {children}
      </Context.Provider>
    </react_dialog_1.Dialog>);
}
function SearchDialogHeader(props) {
    return (<div {...props} className={(0, cn_1.cn)('flex flex-row items-center gap-2 p-3 pb-2', props.className)}/>);
}
function SearchDialogInput(props) {
    var text = (0, i18n_1.useI18n)().text;
    var _a = useSearch(), search = _a.search, onSearchChange = _a.onSearchChange;
    return (<input {...props} value={search} onChange={function (e) { return onSearchChange(e.target.value); }} placeholder={text.search} className="w-0 flex-1 bg-transparent text-lg placeholder:text-fd-muted-foreground focus-visible:outline-none"/>);
}
function SearchDialogClose(_a) {
    var _b = _a.children, children = _b === void 0 ? 'ESC' : _b, className = _a.className, props = __rest(_a, ["children", "className"]);
    var onOpenChange = useSearch().onOpenChange;
    return (<button type="button" onClick={function () { return onOpenChange(false); }} className={(0, cn_1.cn)((0, button_1.buttonVariants)({
            color: 'outline',
            size: 'sm',
            className: 'font-mono text-fd-muted-foreground',
        }), className)} {...props}>
      {children}
    </button>);
}
function SearchDialogFooter(props) {
    return (<div {...props} className={(0, cn_1.cn)('bg-fd-secondary/50 p-3 empty:hidden', props.className)}/>);
}
function SearchDialogOverlay(props) {
    return (<react_dialog_1.DialogOverlay {...props} className={(0, cn_1.cn)('fixed inset-0 z-50 max-md:backdrop-blur-xs data-[state=open]:animate-fd-fade-in data-[state=closed]:animate-fd-fade-out', props.className)}/>);
}
function SearchDialogContent(_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    var text = (0, i18n_1.useI18n)().text;
    return (<react_dialog_1.DialogContent aria-describedby={undefined} {...props} className={(0, cn_1.cn)('fixed divide-y divide-fd-border left-1/2 top-4 md:top-[calc(50%-250px)] z-50 w-[calc(100%-2*var(--spacing))] max-w-screen-sm -translate-x-1/2 rounded-2xl border bg-fd-popover/60 backdrop-blur-xl text-fd-popover-foreground shadow-2xl shadow-black/40 overflow-hidden data-[state=closed]:animate-fd-dialog-out data-[state=open]:animate-fd-dialog-in', props.className)}>
      <react_dialog_1.DialogTitle className="hidden">{text.search}</react_dialog_1.DialogTitle>
      {children}
    </react_dialog_1.DialogContent>);
}
function SearchDialogList(_a) {
    var _b = _a.items, items = _b === void 0 ? null : _b, _c = _a.Empty, Empty = _c === void 0 ? function () { return (<div className="py-12 text-center text-sm text-fd-muted-foreground">
      <i18n_1.I18nLabel label="searchNoResult"/>
    </div>); } : _c, _d = _a.Item, Item = _d === void 0 ? function (props) { return <SearchDialogListItem {...props}/>; } : _d, props = __rest(_a, ["items", "Empty", "Item"]);
    var ref = (0, react_1.useRef)(null);
    var _e = (0, react_1.useState)(function () {
        return items && items.length > 0 ? items[0].id : null;
    }), active = _e[0], setActive = _e[1];
    var onOpenChange = useSearch().onOpenChange;
    var router = (0, framework_1.useRouter)();
    var onOpen = function (_a) {
        var _b;
        var external = _a.external, url = _a.url;
        if (external)
            (_b = window.open(url, '_blank')) === null || _b === void 0 ? void 0 : _b.focus();
        else
            router.push(url);
        onOpenChange(false);
    };
    var onKey = (0, use_effect_event_1.useEffectEvent)(function (e) {
        var _a, _b;
        if (!items)
            return;
        if (e.key === 'ArrowDown' || e.key == 'ArrowUp') {
            var idx = items.findIndex(function (item) { return item.id === active; });
            if (idx === -1)
                idx = 0;
            else if (e.key === 'ArrowDown')
                idx++;
            else
                idx--;
            setActive((_b = (_a = items.at(idx % items.length)) === null || _a === void 0 ? void 0 : _a.id) !== null && _b !== void 0 ? _b : null);
            e.preventDefault();
        }
        if (e.key === 'Enter') {
            var selected = items.find(function (item) { return item.id === active; });
            if (selected)
                onOpen(selected);
            e.preventDefault();
        }
    });
    (0, react_1.useEffect)(function () {
        var element = ref.current;
        if (!element)
            return;
        var observer = new ResizeObserver(function () {
            var viewport = element.firstElementChild;
            element.style.setProperty('--fd-animated-height', "".concat(viewport.clientHeight, "px"));
        });
        var viewport = element.firstElementChild;
        if (viewport)
            observer.observe(viewport);
        window.addEventListener('keydown', onKey);
        return function () {
            observer.disconnect();
            window.removeEventListener('keydown', onKey);
        };
    }, [onKey]);
    (0, use_on_change_1.useOnChange)(items, function () {
        if (items && items.length > 0) {
            setActive(items[0].id);
        }
    });
    return (<div {...props} ref={ref} className={(0, cn_1.cn)('overflow-hidden h-(--fd-animated-height) transition-[height]', !items && 'border-b-0', props.className)}>
      <div className={(0, cn_1.cn)('w-full flex flex-col overflow-y-auto max-h-[460px] p-1', !items && 'hidden')}>
        <ListContext.Provider value={(0, react_1.useMemo)(function () { return ({
            active: active,
            setActive: setActive,
        }); }, [active])}>
          {(items === null || items === void 0 ? void 0 : items.length) === 0 && Empty()}

          {items === null || items === void 0 ? void 0 : items.map(function (item) { return (<react_1.Fragment key={item.id}>
              {Item({ item: item, onClick: function () { return onOpen(item); } })}
            </react_1.Fragment>); })}
        </ListContext.Provider>
      </div>
    </div>);
}
var icons = {
    text: null,
    heading: <lucide_react_1.Hash className="size-4 shrink-0 text-fd-muted-foreground"/>,
    page: (<lucide_react_1.FileText className="size-6 text-fd-muted-foreground bg-fd-muted border p-0.5 rounded-sm shadow-sm shrink-0"/>),
};
function SearchDialogListItem(_a) {
    var item = _a.item, className = _a.className, children = _a.children, props = __rest(_a, ["item", "className", "children"]);
    var _b = useSearchList(), activeId = _b.active, setActive = _b.setActive;
    var active = item.id === activeId;
    return (<button type="button" ref={(0, react_1.useCallback)(function (element) {
            if (active && element) {
                (0, scroll_into_view_if_needed_1.default)(element, {
                    scrollMode: 'if-needed',
                    block: 'nearest',
                    boundary: element.parentElement,
                });
            }
        }, [active])} aria-selected={active} className={(0, cn_1.cn)('relative flex select-none flex-row items-center gap-2 p-2 text-start text-sm rounded-lg', item.type !== 'page' && 'ps-8', item.type === 'page' || item.type === 'heading'
            ? 'font-medium'
            : 'text-fd-popover-foreground/80', active && 'bg-fd-accent text-fd-accent-foreground', className)} onPointerMove={function () { return setActive(item.id); }} {...props}>
      {children !== null && children !== void 0 ? children : (<>
          {item.type !== 'page' && (<div role="none" className="absolute start-4.5 inset-y-0 w-px bg-fd-border"/>)}
          {icons[item.type]}
          <p className="min-w-0 truncate">{item.content}</p>
        </>)}
    </button>);
}
function SearchDialogIcon(props) {
    var isLoading = useSearch().isLoading;
    return (<lucide_react_1.Search {...props} className={(0, cn_1.cn)('size-5 text-fd-muted-foreground', isLoading && 'animate-pulse duration-400', props.className)}/>);
}
var itemVariants = (0, class_variance_authority_1.cva)('rounded-md border px-2 py-0.5 text-xs font-medium text-fd-muted-foreground transition-colors', {
    variants: {
        active: {
            true: 'bg-fd-accent text-fd-accent-foreground',
        },
    },
});
function TagsList(_a) {
    var tag = _a.tag, onTagChange = _a.onTagChange, _b = _a.allowClear, allowClear = _b === void 0 ? false : _b, props = __rest(_a, ["tag", "onTagChange", "allowClear"]);
    return (<div {...props} className={(0, cn_1.cn)('flex items-center gap-1 flex-wrap', props.className)}>
      <TagsListContext.Provider value={(0, react_1.useMemo)(function () { return ({
            value: tag,
            onValueChange: onTagChange,
            allowClear: allowClear,
        }); }, [allowClear, onTagChange, tag])}>
        {props.children}
      </TagsListContext.Provider>
    </div>);
}
function TagsListItem(_a) {
    var value = _a.value, className = _a.className, props = __rest(_a, ["value", "className"]);
    var _b = useTagsList(), onValueChange = _b.onValueChange, selectedValue = _b.value, allowClear = _b.allowClear;
    var selected = value === selectedValue;
    return (<button type="button" data-active={selected} className={(0, cn_1.cn)(itemVariants({ active: selected, className: className }))} onClick={function () {
            onValueChange(selected && allowClear ? undefined : value);
        }} tabIndex={-1} {...props}>
      {props.children}
    </button>);
}
function useSearch() {
    var ctx = (0, react_1.useContext)(Context);
    if (!ctx)
        throw new Error('Missing <SearchDialog />');
    return ctx;
}
function useTagsList() {
    var ctx = (0, react_1.useContext)(TagsListContext);
    if (!ctx)
        throw new Error('Missing <TagsList />');
    return ctx;
}
function useSearchList() {
    var ctx = (0, react_1.useContext)(ListContext);
    if (!ctx)
        throw new Error('Missing <SearchDialogList />');
    return ctx;
}
