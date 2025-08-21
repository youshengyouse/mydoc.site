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
exports.ThemeToggle = ThemeToggle;
var class_variance_authority_1 = require("class-variance-authority");
var lucide_react_1 = require("lucide-react");
var next_themes_1 = require("next-themes");
var react_1 = require("react");
var cn_1 = require("@/utils/cn");
var itemVariants = (0, class_variance_authority_1.cva)('size-6.5 rounded-full p-1.5 text-fd-muted-foreground', {
    variants: {
        active: {
            true: 'bg-fd-accent text-fd-accent-foreground',
            false: 'text-fd-muted-foreground',
        },
    },
});
var full = [
    ['light', lucide_react_1.Sun],
    ['dark', lucide_react_1.Moon],
    ['system', lucide_react_1.Airplay],
];
function ThemeToggle(_a) {
    var className = _a.className, _b = _a.mode, mode = _b === void 0 ? 'light-dark' : _b, props = __rest(_a, ["className", "mode"]);
    var _c = (0, next_themes_1.useTheme)(), setTheme = _c.setTheme, theme = _c.theme, resolvedTheme = _c.resolvedTheme;
    var _d = (0, react_1.useState)(false), mounted = _d[0], setMounted = _d[1];
    (0, react_1.useLayoutEffect)(function () {
        setMounted(true);
    }, []);
    var container = (0, cn_1.cn)('inline-flex items-center rounded-full border p-1', className);
    if (mode === 'light-dark') {
        var value_1 = mounted ? resolvedTheme : null;
        return (<button className={container} aria-label={"Toggle Theme"} onClick={function () { return setTheme(value_1 === 'light' ? 'dark' : 'light'); }} data-theme-toggle="" {...props}>
        {full.map(function (_a) {
                var key = _a[0], Icon = _a[1];
                if (key === 'system')
                    return;
                return (<Icon key={key} fill="currentColor" className={(0, cn_1.cn)(itemVariants({ active: value_1 === key }))}/>);
            })}
      </button>);
    }
    var value = mounted ? theme : null;
    return (<div className={container} data-theme-toggle="" {...props}>
      {full.map(function (_a) {
            var key = _a[0], Icon = _a[1];
            return (<button key={key} aria-label={key} className={(0, cn_1.cn)(itemVariants({ active: value === key }))} onClick={function () { return setTheme(key); }}>
          <Icon className="size-full" fill="currentColor"/>
        </button>);
        })}
    </div>);
}
