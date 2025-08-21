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
exports.CodeBlockTab = void 0;
exports.Pre = Pre;
exports.CodeBlock = CodeBlock;
exports.CodeBlockTabs = CodeBlockTabs;
exports.CodeBlockTabsList = CodeBlockTabsList;
exports.CodeBlockTabsTrigger = CodeBlockTabsTrigger;
var lucide_react_1 = require("lucide-react");
var react_1 = require("react");
var cn_1 = require("@/utils/cn");
var use_copy_button_1 = require("@/utils/use-copy-button");
var button_1 = require("@/components/ui/button");
var tabs_unstyled_1 = require("@/components/tabs.unstyled");
var merge_refs_1 = require("@/utils/merge-refs");
var TabsContext = (0, react_1.createContext)(null);
function Pre(props) {
    return (<pre {...props} className={(0, cn_1.cn)('min-w-full w-max *:flex *:flex-col', props.className)}>
      {props.children}
    </pre>);
}
function CodeBlock(_a) {
    var _b;
    var ref = _a.ref, title = _a.title, allowCopy = _a.allowCopy, _c = _a.keepBackground, keepBackground = _c === void 0 ? false : _c, icon = _a.icon, _d = _a.viewportProps, viewportProps = _d === void 0 ? {} : _d, children = _a.children, _e = _a.Actions, Actions = _e === void 0 ? function (props) { return (<div {...props} className={(0, cn_1.cn)('empty:hidden', props.className)}/>); } : _e, props = __rest(_a, ["ref", "title", "allowCopy", "keepBackground", "icon", "viewportProps", "children", "Actions"]);
    var isTab = (0, react_1.useContext)(TabsContext) !== null;
    var areaRef = (0, react_1.useRef)(null);
    allowCopy !== null && allowCopy !== void 0 ? allowCopy : (allowCopy = !isTab);
    var bg = (0, cn_1.cn)('bg-fd-secondary', keepBackground && 'bg-(--shiki-light-bg) dark:bg-(--shiki-dark-bg)');
    return (<figure ref={ref} dir="ltr" {...props} className={(0, cn_1.cn)(isTab ? [bg, 'rounded-lg shadow-sm'] : 'my-4 rounded-xl bg-fd-card p-1', 'shiki relative border outline-none not-prose overflow-hidden text-sm', props.className)}>
      {title ? (<div className={(0, cn_1.cn)('flex text-fd-muted-foreground items-center gap-2 ps-3 h-9.5', isTab && 'border-b')}>
          {typeof icon === 'string' ? (<div className="[&_svg]:size-3.5" dangerouslySetInnerHTML={{
                    __html: icon,
                }}/>) : (icon)}
          <figcaption className="flex-1 truncate">{title}</figcaption>
          {Actions({
                children: allowCopy && <CopyButton containerRef={areaRef}/>,
            })}
        </div>) : (Actions({
            className: 'absolute top-1 right-1 z-2 bg-fd-card rounded-bl-lg border-l border-b text-fd-muted-foreground',
            children: allowCopy && <CopyButton containerRef={areaRef}/>,
        }))}
      <div ref={areaRef} {...viewportProps} className={(0, cn_1.cn)(!isTab && [bg, 'rounded-lg border'], 'text-[13px] py-3.5 overflow-auto max-h-[600px] fd-scroll-container', viewportProps.className)} style={__assign({ 
            // space for toolbar
            '--padding-right': !title ? 'calc(var(--spacing) * 8)' : undefined, counterSet: props['data-line-numbers']
                ? "line ".concat(Number((_b = props['data-line-numbers-start']) !== null && _b !== void 0 ? _b : 1) - 1)
                : undefined }, viewportProps.style)}>
        {children}
      </div>
    </figure>);
}
function CopyButton(_a) {
    var className = _a.className, containerRef = _a.containerRef, props = __rest(_a, ["className", "containerRef"]);
    var _b = (0, use_copy_button_1.useCopyButton)(function () {
        var _a, _b;
        var pre = (_a = containerRef.current) === null || _a === void 0 ? void 0 : _a.getElementsByTagName('pre').item(0);
        if (!pre)
            return;
        var clone = pre.cloneNode(true);
        clone.querySelectorAll('.nd-copy-ignore').forEach(function (node) {
            node.replaceWith('\n');
        });
        void navigator.clipboard.writeText((_b = clone.textContent) !== null && _b !== void 0 ? _b : '');
    }), checked = _b[0], onClick = _b[1];
    return (<button type="button" className={(0, cn_1.cn)((0, button_1.buttonVariants)({
            color: 'ghost',
            className: '[&_svg]:size-3.5',
        }), className)} aria-label={checked ? 'Copied Text' : 'Copy Text'} onClick={onClick} {...props}>
      {checked ? <lucide_react_1.Check /> : <lucide_react_1.Copy />}
    </button>);
}
function CodeBlockTabs(_a) {
    var ref = _a.ref, props = __rest(_a, ["ref"]);
    var containerRef = (0, react_1.useRef)(null);
    var nested = (0, react_1.useContext)(TabsContext) !== null;
    return (<tabs_unstyled_1.Tabs ref={(0, merge_refs_1.mergeRefs)(containerRef, ref)} {...props} className={(0, cn_1.cn)('bg-fd-card p-1 rounded-xl border overflow-hidden', !nested && 'my-4', props.className)}>
      <TabsContext.Provider value={(0, react_1.useMemo)(function () { return ({
            containerRef: containerRef,
            nested: nested,
        }); }, [nested])}>
        {props.children}
      </TabsContext.Provider>
    </tabs_unstyled_1.Tabs>);
}
function CodeBlockTabsList(props) {
    var _a = (0, react_1.useContext)(TabsContext), containerRef = _a.containerRef, nested = _a.nested;
    return (<tabs_unstyled_1.TabsList {...props} className={(0, cn_1.cn)('flex flex-row overflow-x-auto px-1 -mx-1 text-fd-muted-foreground', props.className)}>
      {props.children}
      {!nested && (<CopyButton className="sticky ms-auto right-0 bg-fd-card backdrop-blur-sm" containerRef={containerRef}/>)}
    </tabs_unstyled_1.TabsList>);
}
function CodeBlockTabsTrigger(_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return (<tabs_unstyled_1.TabsTrigger {...props} className={(0, cn_1.cn)('relative group inline-flex text-sm font-medium items-center gap-2 px-2 first:ms-1 py-1.5 hover:text-fd-accent-foreground data-[state=active]:text-fd-primary [&_svg]:size-3.5', props.className)}>
      <div className="absolute inset-x-2 bottom-0 h-px group-data-[state=active]:bg-fd-primary"/>
      {children}
    </tabs_unstyled_1.TabsTrigger>);
}
var CodeBlockTab = function (props) { return (<tabs_unstyled_1.TabsContent {...props} asChild/>); };
exports.CodeBlockTab = CodeBlockTab;
