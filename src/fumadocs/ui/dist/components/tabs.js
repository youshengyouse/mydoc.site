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
exports.TabsTrigger = exports.TabsList = void 0;
exports.Tabs = Tabs;
exports.Tab = Tab;
exports.TabsContent = TabsContent;
var React = require("react");
var react_1 = require("react");
var cn_1 = require("@/utils/cn");
var Unstyled = require("./tabs.unstyled");
var TabsContext = (0, react_1.createContext)(null);
function useTabContext() {
    var ctx = (0, react_1.useContext)(TabsContext);
    if (!ctx)
        throw new Error('You must wrap your component in <Tabs>');
    return ctx;
}
exports.TabsList = React.forwardRef(function (props, ref) { return (<Unstyled.TabsList ref={ref} {...props} className={(0, cn_1.cn)('flex gap-3.5 text-fd-secondary-foreground overflow-x-auto px-4 not-prose', props.className)}/>); });
exports.TabsList.displayName = 'TabsList';
exports.TabsTrigger = React.forwardRef(function (props, ref) { return (<Unstyled.TabsTrigger ref={ref} {...props} className={(0, cn_1.cn)('inline-flex items-center gap-2 whitespace-nowrap text-fd-muted-foreground border-b border-transparent py-2 text-sm font-medium transition-colors [&_svg]:size-4 hover:text-fd-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=active]:border-fd-primary data-[state=active]:text-fd-primary', props.className)}/>); });
exports.TabsTrigger.displayName = 'TabsTrigger';
function Tabs(_a) {
    var ref = _a.ref, className = _a.className, items = _a.items, label = _a.label, _b = _a.defaultIndex, defaultIndex = _b === void 0 ? 0 : _b, _c = _a.defaultValue, defaultValue = _c === void 0 ? items ? escapeValue(items[defaultIndex]) : undefined : _c, props = __rest(_a, ["ref", "className", "items", "label", "defaultIndex", "defaultValue"]);
    var _d = (0, react_1.useState)(defaultValue), value = _d[0], setValue = _d[1];
    var collection = (0, react_1.useMemo)(function () { return []; }, []);
    return (<Unstyled.Tabs ref={ref} className={(0, cn_1.cn)('flex flex-col overflow-hidden rounded-xl border bg-fd-secondary my-4', className)} value={value} onValueChange={function (v) {
            if (items && !items.some(function (item) { return escapeValue(item) === v; }))
                return;
            setValue(v);
        }} {...props}>
      {items && (<exports.TabsList>
          {label && (<span className="text-sm font-medium my-auto me-auto">{label}</span>)}
          {items.map(function (item) { return (<exports.TabsTrigger key={item} value={escapeValue(item)}>
              {item}
            </exports.TabsTrigger>); })}
        </exports.TabsList>)}
      <TabsContext.Provider value={(0, react_1.useMemo)(function () { return ({ items: items, collection: collection }); }, [collection, items])}>
        {props.children}
      </TabsContext.Provider>
    </Unstyled.Tabs>);
}
function Tab(_a) {
    var value = _a.value, props = __rest(_a, ["value"]);
    var items = useTabContext().items;
    var resolved = value !== null && value !== void 0 ? value : 
    // eslint-disable-next-line react-hooks/rules-of-hooks -- `value` is not supposed to change
    items === null || items === void 0 ? void 0 : items.at(useCollectionIndex());
    if (!resolved)
        throw new Error('Failed to resolve tab `value`, please pass a `value` prop to the Tab component.');
    return (<TabsContent value={escapeValue(resolved)} {...props}>
      {props.children}
    </TabsContent>);
}
function TabsContent(_a) {
    var value = _a.value, className = _a.className, props = __rest(_a, ["value", "className"]);
    return (<Unstyled.TabsContent value={value} forceMount className={(0, cn_1.cn)('p-4 text-[15px] bg-fd-background rounded-xl outline-none prose-no-margin data-[state=inactive]:hidden [&>figure:only-child]:-m-4 [&>figure:only-child]:border-none', className)} {...props}>
      {props.children}
    </Unstyled.TabsContent>);
}
/**
 * Inspired by Headless UI.
 *
 * Return the index of children, this is made possible by registering the order of render from children using React context.
 * This is supposed by work with pre-rendering & pure client-side rendering.
 */
function useCollectionIndex() {
    var key = (0, react_1.useId)();
    var collection = useTabContext().collection;
    (0, react_1.useEffect)(function () {
        return function () {
            var idx = collection.indexOf(key);
            if (idx !== -1)
                collection.splice(idx, 1);
        };
    }, [key, collection]);
    if (!collection.includes(key))
        collection.push(key);
    return collection.indexOf(key);
}
/**
 * only escape whitespaces in values in simple mode
 */
function escapeValue(v) {
    return v.toLowerCase().replace(/\s/, '-');
}
