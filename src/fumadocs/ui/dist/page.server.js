"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
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
exports.DocsCategory = DocsCategory;
var server_1 = require("fumadocs-core/server");
var card_1 = require("@/components/card");
var path = require("node:path");
/**
 * @deprecated use https://fumadocs.vercel.app/docs/ui/markdown#further-reading-section instead
 */
function DocsCategory(_a) {
    var _b;
    var page = _a.page, from = _a.from, forcedTree = _a.tree, props = __rest(_a, ["page", "from", "tree"]);
    var tree;
    if (forcedTree) {
        tree = forcedTree;
    }
    else if (from._i18n) {
        var locale = (_b = page.locale) !== null && _b !== void 0 ? _b : from._i18n.defaultLanguage;
        tree = from.pageTree[locale];
    }
    else {
        tree = from.pageTree;
    }
    var items = (0, server_1.getPageTreePeers)(tree, page.url);
    if (items.length === 0) {
        var pages = from.getPages(page.locale);
        items = pages
            .filter(function (item) {
            return path.dirname(item.path) === path.dirname(page.path) &&
                item.path !== page.path;
        })
            .map(function (page) { return ({
            type: 'page',
            name: page.data.title,
            description: page.data.description,
            url: page.url,
        }); });
    }
    if (items.length === 0)
        return null;
    return (<card_1.Cards {...props}>
      {items.map(function (item) { return (<card_1.Card key={item.url} title={item.name} description={item.description} href={item.url}/>); })}
    </card_1.Cards>);
}
__exportStar(require("./page"), exports);
