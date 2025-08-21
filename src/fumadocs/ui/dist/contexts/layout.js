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
exports.usePageStyles = usePageStyles;
exports.StylesProvider = StylesProvider;
exports.NavProvider = NavProvider;
exports.useNav = useNav;
var react_1 = require("react");
var framework_1 = require("fumadocs-core/framework");
/**
 * applied styles to different layout components in `Page` from layouts
 */
var StylesContext = (0, framework_1.createContext)('StylesContext', {
    tocNav: 'xl:hidden',
    toc: 'max-xl:hidden',
});
function usePageStyles() {
    return StylesContext.use();
}
function StylesProvider(_a) {
    var children = _a.children, value = __rest(_a, ["children"]);
    return (<StylesContext.Provider value={value}>{children}</StylesContext.Provider>);
}
var NavContext = (0, framework_1.createContext)('NavContext', {
    isTransparent: false,
});
function NavProvider(_a) {
    var _b = _a.transparentMode, transparentMode = _b === void 0 ? 'none' : _b, children = _a.children;
    var _c = (0, react_1.useState)(transparentMode !== 'none'), transparent = _c[0], setTransparent = _c[1];
    (0, react_1.useEffect)(function () {
        if (transparentMode !== 'top')
            return;
        var listener = function () {
            setTransparent(window.scrollY < 10);
        };
        listener();
        window.addEventListener('scroll', listener);
        return function () {
            window.removeEventListener('scroll', listener);
        };
    }, [transparentMode]);
    return (<NavContext.Provider value={(0, react_1.useMemo)(function () { return ({ isTransparent: transparent }); }, [transparent])}>
      {children}
    </NavContext.Provider>);
}
function useNav() {
    return NavContext.use();
}
