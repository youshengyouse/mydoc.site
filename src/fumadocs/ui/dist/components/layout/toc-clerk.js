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
exports.default = ClerkTOCItems;
var Primitive = require("fumadocs-core/toc");
var react_1 = require("react");
var cn_1 = require("@/utils/cn");
var toc_thumb_1 = require("@/components/layout/toc-thumb");
var toc_1 = require("@/components/layout/toc");
var merge_refs_1 = require("@/utils/merge-refs");
var i18n_1 = require("@/contexts/i18n");
function ClerkTOCItems(_a) {
    var ref = _a.ref, className = _a.className, props = __rest(_a, ["ref", "className"]);
    var containerRef = (0, react_1.useRef)(null);
    var items = (0, toc_1.useTOCItems)();
    var text = (0, i18n_1.useI18n)().text;
    var _b = (0, react_1.useState)(), svg = _b[0], setSvg = _b[1];
    (0, react_1.useEffect)(function () {
        if (!containerRef.current)
            return;
        var container = containerRef.current;
        function onResize() {
            if (container.clientHeight === 0)
                return;
            var w = 0, h = 0;
            var d = [];
            for (var i = 0; i < items.length; i++) {
                var element = container.querySelector("a[href=\"#".concat(items[i].url.slice(1), "\"]"));
                if (!element)
                    continue;
                var styles = getComputedStyle(element);
                var offset = getLineOffset(items[i].depth) + 1, top_1 = element.offsetTop + parseFloat(styles.paddingTop), bottom = element.offsetTop +
                    element.clientHeight -
                    parseFloat(styles.paddingBottom);
                w = Math.max(offset, w);
                h = Math.max(h, bottom);
                d.push("".concat(i === 0 ? 'M' : 'L').concat(offset, " ").concat(top_1));
                d.push("L".concat(offset, " ").concat(bottom));
            }
            setSvg({
                path: d.join(' '),
                width: w + 1,
                height: h,
            });
        }
        var observer = new ResizeObserver(onResize);
        onResize();
        observer.observe(container);
        return function () {
            observer.disconnect();
        };
    }, [items]);
    if (items.length === 0)
        return (<div className="rounded-lg border bg-fd-card p-3 text-xs text-fd-muted-foreground">
        {text.tocNoHeadings}
      </div>);
    return (<>
      {svg ? (<div className="absolute start-0 top-0 rtl:-scale-x-100" style={{
                width: svg.width,
                height: svg.height,
                maskImage: "url(\"data:image/svg+xml,".concat(
                // Inline SVG
                encodeURIComponent("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 ".concat(svg.width, " ").concat(svg.height, "\"><path d=\"").concat(svg.path, "\" stroke=\"black\" stroke-width=\"1\" fill=\"none\" /></svg>")), "\")"),
            }}>
          <toc_thumb_1.TocThumb containerRef={containerRef} className="mt-(--fd-top) h-(--fd-height) bg-fd-primary transition-all"/>
        </div>) : null}
      <div ref={(0, merge_refs_1.mergeRefs)(containerRef, ref)} className={(0, cn_1.cn)('flex flex-col', className)} {...props}>
        {items.map(function (item, i) {
            var _a, _b;
            return (<TOCItem key={item.url} item={item} upper={(_a = items[i - 1]) === null || _a === void 0 ? void 0 : _a.depth} lower={(_b = items[i + 1]) === null || _b === void 0 ? void 0 : _b.depth}/>);
        })}
      </div>
    </>);
}
function getItemOffset(depth) {
    if (depth <= 2)
        return 14;
    if (depth === 3)
        return 26;
    return 36;
}
function getLineOffset(depth) {
    return depth >= 3 ? 10 : 0;
}
function TOCItem(_a) {
    var item = _a.item, _b = _a.upper, upper = _b === void 0 ? item.depth : _b, _c = _a.lower, lower = _c === void 0 ? item.depth : _c;
    var offset = getLineOffset(item.depth), upperOffset = getLineOffset(upper), lowerOffset = getLineOffset(lower);
    return (<Primitive.TOCItem href={item.url} style={{
            paddingInlineStart: getItemOffset(item.depth),
        }} className="prose relative py-1.5 text-sm text-fd-muted-foreground transition-colors [overflow-wrap:anywhere] first:pt-0 last:pb-0 data-[active=true]:text-fd-primary">
      {offset !== upperOffset ? (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="absolute -top-1.5 start-0 size-4 rtl:-scale-x-100">
          <line x1={upperOffset} y1="0" x2={offset} y2="12" className="stroke-fd-foreground/10" strokeWidth="1"/>
        </svg>) : null}
      <div className={(0, cn_1.cn)('absolute inset-y-0 w-px bg-fd-foreground/10', offset !== upperOffset && 'top-1.5', offset !== lowerOffset && 'bottom-1.5')} style={{
            insetInlineStart: offset,
        }}/>
      {item.title}
    </Primitive.TOCItem>);
}
