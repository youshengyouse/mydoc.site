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
exports.default = DefaultSearchDialog;
var client_1 = require("fumadocs-core/search/client");
var react_1 = require("react");
var use_on_change_1 = require("fumadocs-core/utils/use-on-change");
var i18n_1 = require("@/contexts/i18n");
var search_1 = require("./search");
function DefaultSearchDialog(_a) {
    var defaultTag = _a.defaultTag, _b = _a.tags, tags = _b === void 0 ? [] : _b, api = _a.api, delayMs = _a.delayMs, _c = _a.type, type = _c === void 0 ? 'fetch' : _c, _d = _a.allowClear, allowClear = _d === void 0 ? false : _d, _e = _a.links, links = _e === void 0 ? [] : _e, footer = _a.footer, props = __rest(_a, ["defaultTag", "tags", "api", "delayMs", "type", "allowClear", "links", "footer"]);
    var locale = (0, i18n_1.useI18n)().locale;
    var _f = (0, react_1.useState)(defaultTag), tag = _f[0], setTag = _f[1];
    var _g = (0, client_1.useDocsSearch)(type === 'fetch'
        ? {
            type: 'fetch',
            api: api,
            locale: locale,
            tag: tag,
            delayMs: delayMs,
        }
        : {
            type: 'static',
            from: api,
            locale: locale,
            tag: tag,
            delayMs: delayMs,
        }), search = _g.search, setSearch = _g.setSearch, query = _g.query;
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
        {tags.length > 0 && (<search_1.TagsList tag={tag} onTagChange={setTag} allowClear={allowClear}>
            {tags.map(function (tag) { return (<search_1.TagsListItem key={tag.value} value={tag.value}>
                {tag.name}
              </search_1.TagsListItem>); })}
          </search_1.TagsList>)}
        {footer}
      </search_1.SearchDialogFooter>
    </search_1.SearchDialog>);
}
