'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usePageStyles = exports.StylesProvider = exports.NavProvider = exports.useNav = exports.TreeContextProvider = exports.useTreeContext = exports.useTreePath = exports.useSidebar = exports.SidebarProvider = exports.useSearchContext = exports.SearchOnly = exports.SearchProvider = exports.I18nLabel = exports.useI18n = void 0;
exports.RootProvider = RootProvider;
var base_1 = require("./base");
var next_1 = require("fumadocs-core/framework/next");
function RootProvider(props) {
    return (<next_1.NextProvider>
      <base_1.RootProvider {...props}>{props.children}</base_1.RootProvider>
    </next_1.NextProvider>);
}
var i18n_1 = require("@/contexts/i18n");
Object.defineProperty(exports, "useI18n", { enumerable: true, get: function () { return i18n_1.useI18n; } });
Object.defineProperty(exports, "I18nLabel", { enumerable: true, get: function () { return i18n_1.I18nLabel; } });
var search_1 = require("@/contexts/search");
Object.defineProperty(exports, "SearchProvider", { enumerable: true, get: function () { return search_1.SearchProvider; } });
Object.defineProperty(exports, "SearchOnly", { enumerable: true, get: function () { return search_1.SearchOnly; } });
Object.defineProperty(exports, "useSearchContext", { enumerable: true, get: function () { return search_1.useSearchContext; } });
var sidebar_1 = require("@/contexts/sidebar");
Object.defineProperty(exports, "SidebarProvider", { enumerable: true, get: function () { return sidebar_1.SidebarProvider; } });
Object.defineProperty(exports, "useSidebar", { enumerable: true, get: function () { return sidebar_1.useSidebar; } });
var tree_1 = require("@/contexts/tree");
Object.defineProperty(exports, "useTreePath", { enumerable: true, get: function () { return tree_1.useTreePath; } });
Object.defineProperty(exports, "useTreeContext", { enumerable: true, get: function () { return tree_1.useTreeContext; } });
Object.defineProperty(exports, "TreeContextProvider", { enumerable: true, get: function () { return tree_1.TreeContextProvider; } });
var layout_1 = require("@/contexts/layout");
Object.defineProperty(exports, "useNav", { enumerable: true, get: function () { return layout_1.useNav; } });
Object.defineProperty(exports, "NavProvider", { enumerable: true, get: function () { return layout_1.NavProvider; } });
Object.defineProperty(exports, "StylesProvider", { enumerable: true, get: function () { return layout_1.StylesProvider; } });
Object.defineProperty(exports, "usePageStyles", { enumerable: true, get: function () { return layout_1.usePageStyles; } });
