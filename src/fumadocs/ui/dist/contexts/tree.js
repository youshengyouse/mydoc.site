'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TreeContextProvider = TreeContextProvider;
exports.useTreePath = useTreePath;
exports.useTreeContext = useTreeContext;
var framework_1 = require("fumadocs-core/framework");
var react_1 = require("react");
var breadcrumb_1 = require("fumadocs-core/breadcrumb");
var TreeContext = (0, framework_1.createContext)('TreeContext');
var PathContext = (0, framework_1.createContext)('PathContext', []);
function TreeContextProvider(props) {
    var _a, _b, _c;
    var nextIdRef = (0, react_1.useRef)(0);
    var pathname = (0, framework_1.usePathname)();
    // I found that object-typed props passed from a RSC will be re-constructed, hence breaking all hooks' dependencies
    // using the id here to make sure this never happens
    // eslint-disable-next-line react-hooks/exhaustive-deps
    var tree = (0, react_1.useMemo)(function () { return props.tree; }, [(_a = props.tree.$id) !== null && _a !== void 0 ? _a : props.tree]);
    var path = (0, react_1.useMemo)(function () { var _a; return (_a = (0, breadcrumb_1.searchPath)(tree.children, pathname)) !== null && _a !== void 0 ? _a : []; }, [tree, pathname]);
    var root = (_b = path.findLast(function (item) { return item.type === 'folder' && item.root; })) !== null && _b !== void 0 ? _b : tree;
    (_c = root.$id) !== null && _c !== void 0 ? _c : (root.$id = String(nextIdRef.current++));
    return (<TreeContext.Provider value={(0, react_1.useMemo)(function () { return ({ root: root }); }, [root])}>
      <PathContext.Provider value={path}>{props.children}</PathContext.Provider>
    </TreeContext.Provider>);
}
function useTreePath() {
    return PathContext.use();
}
function useTreeContext() {
    return TreeContext.use('You must wrap this component under <DocsLayout />');
}
