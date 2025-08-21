'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSearchContext = useSearchContext;
exports.SearchProvider = SearchProvider;
exports.SearchOnly = SearchOnly;
var react_1 = require("react");
var framework_1 = require("fumadocs-core/framework");
var SearchContext = (0, framework_1.createContext)('SearchContext', {
    enabled: false,
    hotKey: [],
    setOpenSearch: function () { return undefined; },
});
function useSearchContext() {
    return SearchContext.use();
}
function MetaOrControl() {
    var _a = (0, react_1.useState)('⌘'), key = _a[0], setKey = _a[1];
    (0, react_1.useEffect)(function () {
        var isWindows = window.navigator.userAgent.includes('Windows');
        if (isWindows)
            setKey('Ctrl');
    }, []);
    return key;
}
function SearchProvider(_a) {
    var SearchDialog = _a.SearchDialog, children = _a.children, _b = _a.preload, preload = _b === void 0 ? true : _b, options = _a.options, _c = _a.hotKey, hotKey = _c === void 0 ? [
        {
            key: function (e) { return e.metaKey || e.ctrlKey; },
            display: <MetaOrControl />,
        },
        {
            key: 'k',
            display: 'K',
        },
    ] : _c, links = _a.links;
    var _d = (0, react_1.useState)(preload ? false : undefined), isOpen = _d[0], setIsOpen = _d[1];
    (0, react_1.useEffect)(function () {
        var handler = function (e) {
            if (hotKey.every(function (v) {
                return typeof v.key === 'string' ? e.key === v.key : v.key(e);
            })) {
                setIsOpen(true);
                e.preventDefault();
            }
        };
        window.addEventListener('keydown', handler);
        return function () {
            window.removeEventListener('keydown', handler);
        };
    }, [hotKey]);
    return (<SearchContext.Provider value={(0, react_1.useMemo)(function () { return ({ enabled: true, hotKey: hotKey, setOpenSearch: setIsOpen }); }, [hotKey])}>
      {isOpen !== undefined && (<SearchDialog open={isOpen} onOpenChange={setIsOpen} 
        // @ts-expect-error -- insert prop for official UIs
        links={links} {...options}/>)}
      {children}
    </SearchContext.Provider>);
}
/**
 * Show children only when search is enabled via React Context
 */
function SearchOnly(_a) {
    var children = _a.children;
    var search = useSearchContext();
    if (search.enabled)
        return children;
}
