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
exports.InlineTOC = InlineTOC;
var lucide_react_1 = require("lucide-react");
var collapsible_1 = require("./ui/collapsible");
var cn_1 = require("@/utils/cn");
function InlineTOC(_a) {
    var _b;
    var items = _a.items, props = __rest(_a, ["items"]);
    return (<collapsible_1.Collapsible {...props} className={(0, cn_1.cn)('not-prose rounded-lg border bg-fd-card text-fd-card-foreground', props.className)}>
      <collapsible_1.CollapsibleTrigger className="group inline-flex w-full items-center justify-between px-4 py-2.5 font-medium">
        {(_b = props.children) !== null && _b !== void 0 ? _b : 'Table of Contents'}
        <lucide_react_1.ChevronDown className="size-4 transition-transform duration-200 group-data-[state=open]:rotate-180"/>
      </collapsible_1.CollapsibleTrigger>
      <collapsible_1.CollapsibleContent>
        <div className="flex flex-col p-4 pt-0 text-sm text-fd-muted-foreground">
          {items.map(function (item) { return (<a key={item.url} href={item.url} className="border-s py-1.5 hover:text-fd-accent-foreground" style={{
                paddingInlineStart: 12 * Math.max(item.depth - 1, 0),
            }}>
              {item.title}
            </a>); })}
        </div>
      </collapsible_1.CollapsibleContent>
    </collapsible_1.Collapsible>);
}
