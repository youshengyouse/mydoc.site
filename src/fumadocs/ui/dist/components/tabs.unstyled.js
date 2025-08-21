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
exports.TabsContent = TabsContent;
var react_1 = require("react");
var Primitive = require("@radix-ui/react-tabs");
var merge_refs_1 = require("@/utils/merge-refs");
var use_effect_event_1 = require("fumadocs-core/utils/use-effect-event");
var listeners = new Map();
function addChangeListener(id, listener) {
    var _a;
    var list = (_a = listeners.get(id)) !== null && _a !== void 0 ? _a : [];
    list.push(listener);
    listeners.set(id, list);
}
function removeChangeListener(id, listener) {
    var _a;
    var list = (_a = listeners.get(id)) !== null && _a !== void 0 ? _a : [];
    listeners.set(id, list.filter(function (item) { return item !== listener; }));
}
var TabsContext = (0, react_1.createContext)(null);
function useTabContext() {
    var ctx = (0, react_1.useContext)(TabsContext);
    if (!ctx)
        throw new Error('You must wrap your component in <Tabs>');
    return ctx;
}
exports.TabsList = Primitive.TabsList;
exports.TabsTrigger = Primitive.TabsTrigger;
/**
 * @internal You better not use it
 */
function Tabs(_a) {
    var ref = _a.ref, groupId = _a.groupId, _b = _a.persist, persist = _b === void 0 ? false : _b, _c = _a.updateAnchor, updateAnchor = _c === void 0 ? false : _c, defaultValue = _a.defaultValue, _value = _a.value, _onValueChange = _a.onValueChange, props = __rest(_a, ["ref", "groupId", "persist", "updateAnchor", "defaultValue", "value", "onValueChange"]);
    var tabsRef = (0, react_1.useRef)(null);
    var _d = _value === undefined
        ? // eslint-disable-next-line react-hooks/rules-of-hooks -- not supposed to change controlled/uncontrolled
            (0, react_1.useState)(defaultValue)
        : [_value, _onValueChange !== null && _onValueChange !== void 0 ? _onValueChange : (function () { return undefined; })], value = _d[0], setValue = _d[1];
    var onChange = (0, use_effect_event_1.useEffectEvent)(function (v) { return setValue(v); });
    var valueToIdMap = (0, react_1.useMemo)(function () { return new Map(); }, []);
    (0, react_1.useLayoutEffect)(function () {
        if (!groupId)
            return;
        var previous = persist
            ? localStorage.getItem(groupId)
            : sessionStorage.getItem(groupId);
        if (previous)
            onChange(previous);
        addChangeListener(groupId, onChange);
        return function () {
            removeChangeListener(groupId, onChange);
        };
    }, [groupId, onChange, persist]);
    (0, react_1.useLayoutEffect)(function () {
        var _a;
        var hash = window.location.hash.slice(1);
        if (!hash)
            return;
        for (var _i = 0, _b = valueToIdMap.entries(); _i < _b.length; _i++) {
            var _c = _b[_i], value_1 = _c[0], id = _c[1];
            if (id === hash) {
                onChange(value_1);
                (_a = tabsRef.current) === null || _a === void 0 ? void 0 : _a.scrollIntoView();
                break;
            }
        }
    }, [onChange, valueToIdMap]);
    return (<Primitive.Tabs ref={(0, merge_refs_1.mergeRefs)(ref, tabsRef)} value={value} onValueChange={function (v) {
            var _a;
            if (updateAnchor) {
                var id = valueToIdMap.get(v);
                if (id) {
                    window.history.replaceState(null, '', "#".concat(id));
                }
            }
            if (groupId) {
                (_a = listeners.get(groupId)) === null || _a === void 0 ? void 0 : _a.forEach(function (item) {
                    item(v);
                });
                if (persist)
                    localStorage.setItem(groupId, v);
                else
                    sessionStorage.setItem(groupId, v);
            }
            else {
                setValue(v);
            }
        }} {...props}>
      <TabsContext.Provider value={(0, react_1.useMemo)(function () { return ({ valueToIdMap: valueToIdMap }); }, [valueToIdMap])}>
        {props.children}
      </TabsContext.Provider>
    </Primitive.Tabs>);
}
function TabsContent(_a) {
    var value = _a.value, props = __rest(_a, ["value"]);
    var valueToIdMap = useTabContext().valueToIdMap;
    if (props.id) {
        valueToIdMap.set(value, props.id);
    }
    return (<Primitive.TabsContent value={value} {...props}>
      {props.children}
    </Primitive.TabsContent>);
}
