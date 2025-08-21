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
exports.TocThumb = TocThumb;
var react_1 = require("react");
var Primitive = require("fumadocs-core/toc");
var use_on_change_1 = require("fumadocs-core/utils/use-on-change");
var use_effect_event_1 = require("fumadocs-core/utils/use-effect-event");
function calc(container, active) {
    if (active.length === 0 || container.clientHeight === 0) {
        return [0, 0];
    }
    var upper = Number.MAX_VALUE, lower = 0;
    for (var _i = 0, active_1 = active; _i < active_1.length; _i++) {
        var item = active_1[_i];
        var element = container.querySelector("a[href=\"#".concat(item, "\"]"));
        if (!element)
            continue;
        var styles = getComputedStyle(element);
        upper = Math.min(upper, element.offsetTop + parseFloat(styles.paddingTop));
        lower = Math.max(lower, element.offsetTop +
            element.clientHeight -
            parseFloat(styles.paddingBottom));
    }
    return [upper, lower - upper];
}
function update(element, info) {
    element.style.setProperty('--fd-top', "".concat(info[0], "px"));
    element.style.setProperty('--fd-height', "".concat(info[1], "px"));
}
function TocThumb(_a) {
    var containerRef = _a.containerRef, props = __rest(_a, ["containerRef"]);
    var active = Primitive.useActiveAnchors();
    var thumbRef = (0, react_1.useRef)(null);
    var onResize = (0, use_effect_event_1.useEffectEvent)(function () {
        if (!containerRef.current || !thumbRef.current)
            return;
        update(thumbRef.current, calc(containerRef.current, active));
    });
    (0, react_1.useEffect)(function () {
        if (!containerRef.current)
            return;
        var container = containerRef.current;
        onResize();
        var observer = new ResizeObserver(onResize);
        observer.observe(container);
        return function () {
            observer.disconnect();
        };
    }, [containerRef, onResize]);
    (0, use_on_change_1.useOnChange)(active, function () {
        if (!containerRef.current || !thumbRef.current)
            return;
        update(thumbRef.current, calc(containerRef.current, active));
    });
    return <div ref={thumbRef} role="none" {...props}/>;
}
