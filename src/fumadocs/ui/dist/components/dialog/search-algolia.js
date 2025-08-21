'use client';
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
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
exports.default = AlgoliaSearchDialog;
var client_1 = require("fumadocs-core/search/client");
var react_1 = require("react");
var use_on_change_1 = require("fumadocs-core/utils/use-on-change");
var search_1 = require("./search");
var i18n_1 = require("@/contexts/i18n");
function AlgoliaSearchDialog(_a) {
    var searchOptions = _a.searchOptions, _b = _a.tags, tags = _b === void 0 ? [] : _b, defaultTag = _a.defaultTag, _c = _a.showAlgolia, showAlgolia = _c === void 0 ? false : _c, _d = _a.allowClear, allowClear = _d === void 0 ? false : _d, _e = _a.links, links = _e === void 0 ? [] : _e, footer = _a.footer, props = __rest(_a, ["searchOptions", "tags", "defaultTag", "showAlgolia", "allowClear", "links", "footer"]);
    var _f = (0, react_1.useState)(defaultTag), tag = _f[0], setTag = _f[1];
    var locale = (0, i18n_1.useI18n)().locale;
    var _g = (0, client_1.useDocsSearch)(__assign({ type: 'algolia', tag: tag, locale: locale }, searchOptions)), search = _g.search, setSearch = _g.setSearch, query = _g.query;
    var defaultItems = (0, react_1.useMemo)(function () {
        if (links.length === 0)
            return null;
        return links.map(function (_a) {
            var name = _a[0], link = _a[1];
            return ({
                type: 'page',
                id: name,
                content: name,
                url: link,
            });
        });
    }, [links]);
    (0, use_on_change_1.useOnChange)(defaultTag, function (v) {
        setTag(v);
    });
    var label = showAlgolia && <AlgoliaTitle />;
    return (<search_1.SearchDialog search={search} onSearchChange={setSearch} isLoading={query.isLoading} {...props}>
      <search_1.SearchDialogOverlay />
      <search_1.SearchDialogContent>
        <search_1.SearchDialogHeader>
          <search_1.SearchDialogIcon />
          <search_1.SearchDialogInput />
          <search_1.SearchDialogClose />
        </search_1.SearchDialogHeader>
        <search_1.SearchDialogList items={query.data !== 'empty' ? query.data : defaultItems}/>
      </search_1.SearchDialogContent>
      <search_1.SearchDialogFooter>
        {tags.length > 0 ? (<search_1.TagsList tag={tag} onTagChange={setTag} allowClear={allowClear}>
            {tags.map(function (tag) { return (<search_1.TagsListItem key={tag.value} value={tag.value}>
                {tag.name}
              </search_1.TagsListItem>); })}
            {label}
          </search_1.TagsList>) : (label)}
        {footer}
      </search_1.SearchDialogFooter>
    </search_1.SearchDialog>);
}
function AlgoliaTitle() {
    return (<a href="https://algolia.com" rel="noreferrer noopener" className="ms-auto text-xs text-fd-muted-foreground">
      Search powered by Algolia
    </a>);
}
