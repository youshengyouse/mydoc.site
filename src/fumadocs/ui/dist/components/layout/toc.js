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
exports.useTOCItems = useTOCItems;
exports.TOCProvider = TOCProvider;
exports.TOCScrollArea = TOCScrollArea;
exports.TOCItems = TOCItems;
var Primitive = require("fumadocs-core/toc");
var react_1 = require("react");
var cn_1 = require("@/utils/cn");
var i18n_1 = require("@/contexts/i18n");
var toc_thumb_1 = require("@/components/layout/toc-thumb");
var merge_refs_1 = require("@/utils/merge-refs");
var TOCContext = (0, react_1.createContext)([]);
function useTOCItems() {
    return (0, react_1.useContext)(TOCContext);
}
function TOCProvider(_a) {
    var toc = _a.toc, children = _a.children, props = __rest(_a, ["toc", "children"]);
    return (<TOCContext value={toc}>
      <Primitive.AnchorProvider toc={toc} {...props}>
        {children}
      </Primitive.AnchorProvider>
    </TOCContext>);
}
function TOCScrollArea(_a) {
    var ref = _a.ref, className = _a.className, props = __rest(_a, ["ref", "className"]);
    var viewRef = (0, react_1.useRef)(null);
    return (<div ref={(0, merge_refs_1.mergeRefs)(viewRef, ref)} className={(0, cn_1.cn)('relative min-h-0 text-sm ms-px overflow-auto [scrollbar-width:none] [mask-image:linear-gradient(to_bottom,transparent,white_16px,white_calc(100%-16px),transparent)] py-3', className)} {...props}>
      <Primitive.ScrollProvider containerRef={viewRef}>
        {props.children}
      </Primitive.ScrollProvider>
    </div>);
}
function TOCItems(_a) {
    var ref = _a.ref, className = _a.className, props = __rest(_a, ["ref", "className"]);
    var containerRef = (0, react_1.useRef)(null);
    var items = useTOCItems();
    var text = (0, i18n_1.useI18n)().text;
    if (items.length === 0)
        return (<div className="rounded-lg border bg-fd-card p-3 text-xs text-fd-muted-foreground">
        {text.tocNoHeadings}
      </div>);
    return (<>
      <toc_thumb_1.TocThumb containerRef={containerRef} className="absolute top-(--fd-top) h-(--fd-height) w-px bg-fd-primary transition-all"/>
      <div ref={(0, merge_refs_1.mergeRefs)(ref, containerRef)} className={(0, cn_1.cn)('flex flex-col border-s border-fd-foreground/10', className)} {...props}>
        {items.map(function (item) { return (<TOCItem key={item.url} item={item}/>); })}
      </div>
    </>);
}
function TOCItem(_a) {
    var item = _a.item;
    return (<Primitive.TOCItem href={item.url} className={(0, cn_1.cn)('prose py-1.5 text-sm text-fd-muted-foreground transition-colors [overflow-wrap:anywhere] first:pt-0 last:pb-0 data-[active=true]:text-fd-primary', item.depth <= 2 && 'ps-3', item.depth === 3 && 'ps-6', item.depth >= 4 && 'ps-8')}>
      {item.title}
    </Primitive.TOCItem>);
}
