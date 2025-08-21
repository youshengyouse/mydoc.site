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
exports.Banner = Banner;
var react_1 = require("react");
var lucide_react_1 = require("lucide-react");
var cn_1 = require("@/utils/cn");
var button_1 = require("@/components/ui/button");
function Banner(_a) {
    var id = _a.id, _b = _a.variant, variant = _b === void 0 ? 'normal' : _b, _c = _a.changeLayout, changeLayout = _c === void 0 ? true : _c, _d = _a.height, height = _d === void 0 ? '3rem' : _d, _e = _a.rainbowColors, rainbowColors = _e === void 0 ? [
        'rgba(0,149,255,0.56)',
        'rgba(231,77,255,0.77)',
        'rgba(255,0,0,0.73)',
        'rgba(131,255,166,0.66)',
    ] : _e, props = __rest(_a, ["id", "variant", "changeLayout", "height", "rainbowColors"]);
    var _f = (0, react_1.useState)(true), open = _f[0], setOpen = _f[1];
    var globalKey = id ? "nd-banner-".concat(id) : null;
    (0, react_1.useEffect)(function () {
        if (globalKey)
            setOpen(localStorage.getItem(globalKey) !== 'true');
    }, [globalKey]);
    if (!open)
        return null;
    return (<div id={id} {...props} className={(0, cn_1.cn)('sticky top-0 z-40 flex flex-row items-center justify-center px-4 text-center text-sm font-medium', variant === 'normal' && 'bg-fd-secondary', variant === 'rainbow' && 'bg-fd-background', !open && 'hidden', props.className)} style={{
            height: height,
        }}>
      {changeLayout && open ? (<style>
          {globalKey
                ? ":root:not(.".concat(globalKey, ") { --fd-banner-height: ").concat(height, "; }")
                : ":root { --fd-banner-height: ".concat(height, "; }")}
        </style>) : null}
      {globalKey ? (<style>{".".concat(globalKey, " #").concat(id, " { display: none; }")}</style>) : null}
      {globalKey ? (<script dangerouslySetInnerHTML={{
                __html: "if (localStorage.getItem('".concat(globalKey, "') === 'true') document.documentElement.classList.add('").concat(globalKey, "');"),
            }}/>) : null}

      {variant === 'rainbow'
            ? flow({
                colors: rainbowColors,
            })
            : null}
      {props.children}
      {id ? (<button type="button" aria-label="Close Banner" onClick={function () {
                setOpen(false);
                if (globalKey)
                    localStorage.setItem(globalKey, 'true');
            }} className={(0, cn_1.cn)((0, button_1.buttonVariants)({
                color: 'ghost',
                className: 'absolute end-2 top-1/2 -translate-y-1/2 text-fd-muted-foreground/50',
                size: 'icon-sm',
            }))}>
          <lucide_react_1.X />
        </button>) : null}
    </div>);
}
var maskImage = 'linear-gradient(to bottom,white,transparent), radial-gradient(circle at top center, white, transparent)';
function flow(_a) {
    var colors = _a.colors;
    return (<>
      <div className="absolute inset-0 z-[-1]" style={{
            maskImage: maskImage,
            maskComposite: 'intersect',
            animation: 'fd-moving-banner 20s linear infinite',
            backgroundImage: "repeating-linear-gradient(70deg, ".concat(__spreadArray(__spreadArray([], colors, true), [colors[0]], false).map(function (color, i) { return "".concat(color, " ").concat((i * 50) / colors.length, "%"); }).join(', '), ")"),
            backgroundSize: '200% 100%',
            filter: 'saturate(2)',
        }}/>
      <style>
        {"@keyframes fd-moving-banner {\n            from { background-position: 0% 0;  }\n            to { background-position: 100% 0;  }\n         }"}
      </style>
    </>);
}
