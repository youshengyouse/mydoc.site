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
exports.SearchToggle = SearchToggle;
exports.LargeSearchToggle = LargeSearchToggle;
var lucide_react_1 = require("lucide-react");
var search_1 = require("@/contexts/search");
var i18n_1 = require("@/contexts/i18n");
var cn_1 = require("@/utils/cn");
var button_1 = require("@/components/ui/button");
function SearchToggle(_a) {
    var hideIfDisabled = _a.hideIfDisabled, _b = _a.size, size = _b === void 0 ? 'icon-sm' : _b, _c = _a.color, color = _c === void 0 ? 'ghost' : _c, props = __rest(_a, ["hideIfDisabled", "size", "color"]);
    var _d = (0, search_1.useSearchContext)(), setOpenSearch = _d.setOpenSearch, enabled = _d.enabled;
    if (hideIfDisabled && !enabled)
        return null;
    return (<button type="button" className={(0, cn_1.cn)((0, button_1.buttonVariants)({
            size: size,
            color: color,
        }), props.className)} data-search="" aria-label="Open Search" onClick={function () {
            setOpenSearch(true);
        }}>
      <lucide_react_1.Search />
    </button>);
}
function LargeSearchToggle(_a) {
    var hideIfDisabled = _a.hideIfDisabled, props = __rest(_a, ["hideIfDisabled"]);
    var _b = (0, search_1.useSearchContext)(), enabled = _b.enabled, hotKey = _b.hotKey, setOpenSearch = _b.setOpenSearch;
    var text = (0, i18n_1.useI18n)().text;
    if (hideIfDisabled && !enabled)
        return null;
    return (<button type="button" data-search-full="" {...props} className={(0, cn_1.cn)('inline-flex items-center gap-2 rounded-lg border bg-fd-secondary/50 p-1.5 ps-2 text-sm text-fd-muted-foreground transition-colors hover:bg-fd-accent hover:text-fd-accent-foreground', props.className)} onClick={function () {
            setOpenSearch(true);
        }}>
      <lucide_react_1.Search className="size-4"/>
      {text.search}
      <div className="ms-auto inline-flex gap-0.5">
        {hotKey.map(function (k, i) { return (<kbd key={i} className="rounded-md border bg-fd-background px-1.5">
            {k.display}
          </kbd>); })}
      </div>
    </button>);
}
