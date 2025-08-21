'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSidebar = useSidebar;
exports.SidebarProvider = SidebarProvider;
var react_1 = require("react");
var framework_1 = require("fumadocs-core/framework");
var use_on_change_1 = require("fumadocs-core/utils/use-on-change");
var SidebarContext = (0, framework_1.createContext)('SidebarContext');
function useSidebar() {
    return SidebarContext.use();
}
function SidebarProvider(_a) {
    var children = _a.children;
    var closeOnRedirect = (0, react_1.useRef)(true);
    var _b = (0, react_1.useState)(false), open = _b[0], setOpen = _b[1];
    var _c = (0, react_1.useState)(false), collapsed = _c[0], setCollapsed = _c[1];
    var pathname = (0, framework_1.usePathname)();
    (0, use_on_change_1.useOnChange)(pathname, function () {
        if (closeOnRedirect.current) {
            setOpen(false);
        }
        closeOnRedirect.current = true;
    });
    return (<SidebarContext.Provider value={(0, react_1.useMemo)(function () { return ({
            open: open,
            setOpen: setOpen,
            collapsed: collapsed,
            setCollapsed: setCollapsed,
            closeOnRedirect: closeOnRedirect,
        }); }, [open, collapsed])}>
      {children}
    </SidebarContext.Provider>);
}
