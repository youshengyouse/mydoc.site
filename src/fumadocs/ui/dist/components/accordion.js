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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Accordion = exports.Accordions = void 0;
var AccordionPrimitive = require("@radix-ui/react-accordion");
var lucide_react_1 = require("lucide-react");
var react_1 = require("react");
var cn_1 = require("@/utils/cn");
var use_copy_button_1 = require("@/utils/use-copy-button");
var button_1 = require("@/components/ui/button");
var merge_refs_1 = require("@/utils/merge-refs");
exports.Accordions = (0, react_1.forwardRef)(function (_a, ref) {
    var _b = _a.type, type = _b === void 0 ? 'single' : _b, className = _a.className, defaultValue = _a.defaultValue, props = __rest(_a, ["type", "className", "defaultValue"]);
    var rootRef = (0, react_1.useRef)(null);
    var composedRef = (0, merge_refs_1.mergeRefs)(ref, rootRef);
    var _c = (0, react_1.useState)(function () {
        return type === 'single' ? (defaultValue !== null && defaultValue !== void 0 ? defaultValue : '') : (defaultValue !== null && defaultValue !== void 0 ? defaultValue : []);
    }), value = _c[0], setValue = _c[1];
    (0, react_1.useEffect)(function () {
        var id = window.location.hash.substring(1);
        var element = rootRef.current;
        if (!element || id.length === 0)
            return;
        var selected = document.getElementById(id);
        if (!selected || !element.contains(selected))
            return;
        var value = selected.getAttribute('data-accordion-value');
        if (value)
            setValue(function (prev) { return (typeof prev === 'string' ? value : __spreadArray([value], prev, true)); });
    }, []);
    return (
    // @ts-expect-error -- Multiple types
    <AccordionPrimitive.Root type={type} ref={composedRef} value={value} onValueChange={setValue} collapsible={type === 'single' ? true : undefined} className={(0, cn_1.cn)('divide-y divide-fd-border overflow-hidden rounded-lg border bg-fd-card', className)} {...props}/>);
});
exports.Accordions.displayName = 'Accordions';
exports.Accordion = (0, react_1.forwardRef)(function (_a, ref) {
    var title = _a.title, className = _a.className, id = _a.id, _b = _a.value, value = _b === void 0 ? String(title) : _b, children = _a.children, props = __rest(_a, ["title", "className", "id", "value", "children"]);
    return (<AccordionPrimitive.Item ref={ref} value={value} className={(0, cn_1.cn)('scroll-m-24', className)} {...props}>
        <AccordionPrimitive.Header id={id} data-accordion-value={value} className="not-prose flex flex-row items-center text-fd-card-foreground font-medium has-focus-visible:bg-fd-accent">
          <AccordionPrimitive.Trigger className="group flex flex-1 items-center gap-2 px-3 py-2.5 text-start focus-visible:outline-none">
            <lucide_react_1.ChevronRight className="size-4 shrink-0 text-fd-muted-foreground transition-transform duration-200 group-data-[state=open]:rotate-90"/>
            {title}
          </AccordionPrimitive.Trigger>
          {id ? <CopyButton id={id}/> : null}
        </AccordionPrimitive.Header>
        <AccordionPrimitive.Content className="overflow-hidden data-[state=closed]:animate-fd-accordion-up data-[state=open]:animate-fd-accordion-down">
          <div className="px-4 pb-2 text-[15px] prose-no-margin">
            {children}
          </div>
        </AccordionPrimitive.Content>
      </AccordionPrimitive.Item>);
});
function CopyButton(_a) {
    var id = _a.id;
    var _b = (0, use_copy_button_1.useCopyButton)(function () {
        var url = new URL(window.location.href);
        url.hash = id;
        return navigator.clipboard.writeText(url.toString());
    }), checked = _b[0], onClick = _b[1];
    return (<button type="button" aria-label="Copy Link" className={(0, cn_1.cn)((0, button_1.buttonVariants)({
            color: 'ghost',
            className: 'text-fd-muted-foreground me-2',
        }))} onClick={onClick}>
      {checked ? (<lucide_react_1.Check className="size-3.5"/>) : (<lucide_react_1.Link className="size-3.5"/>)}
    </button>);
}
exports.Accordion.displayName = 'Accordion';
