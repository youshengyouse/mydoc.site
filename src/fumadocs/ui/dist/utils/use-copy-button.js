'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCopyButton = useCopyButton;
var react_1 = require("react");
var use_effect_event_1 = require("fumadocs-core/utils/use-effect-event");
function useCopyButton(onCopy) {
    var _a = (0, react_1.useState)(false), checked = _a[0], setChecked = _a[1];
    var timeoutRef = (0, react_1.useRef)(null);
    var onClick = (0, use_effect_event_1.useEffectEvent)(function () {
        if (timeoutRef.current)
            window.clearTimeout(timeoutRef.current);
        var res = Promise.resolve(onCopy());
        void res.then(function () {
            setChecked(true);
            timeoutRef.current = window.setTimeout(function () {
                setChecked(false);
            }, 1500);
        });
    });
    // Avoid updates after being unmounted
    (0, react_1.useEffect)(function () {
        return function () {
            if (timeoutRef.current)
                window.clearTimeout(timeoutRef.current);
        };
    }, []);
    return [checked, onClick];
}
