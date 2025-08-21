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
exports.RootProvider = RootProvider;
var next_themes_1 = require("next-themes");
var react_1 = require("react");
var react_direction_1 = require("@radix-ui/react-direction");
var sidebar_1 = require("@/contexts/sidebar");
var search_1 = require("@/contexts/search");
var use_effect_event_1 = require("fumadocs-core/utils/use-effect-event");
var i18n_1 = require("@/contexts/i18n");
var framework_1 = require("fumadocs-core/framework");
var DefaultSearchDialog = (0, react_1.lazy)(function () { return Promise.resolve().then(function () { return require('@/components/dialog/search-default'); }); });
function RootProvider(_a) {
    var children = _a.children, _b = _a.dir, dir = _b === void 0 ? 'ltr' : _b, _c = _a.theme, theme = _c === void 0 ? {} : _c, search = _a.search, i18n = _a.i18n;
    var body = children;
    if ((search === null || search === void 0 ? void 0 : search.enabled) !== false)
        body = (<search_1.SearchProvider SearchDialog={DefaultSearchDialog} {...search}>
        {body}
      </search_1.SearchProvider>);
    if ((theme === null || theme === void 0 ? void 0 : theme.enabled) !== false)
        body = (<next_themes_1.ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange {...theme}>
        {body}
      </next_themes_1.ThemeProvider>);
    if (i18n) {
        body = <I18nProvider {...i18n}>{body}</I18nProvider>;
    }
    return (<react_direction_1.DirectionProvider dir={dir}>
      <sidebar_1.SidebarProvider>{body}</sidebar_1.SidebarProvider>
    </react_direction_1.DirectionProvider>);
}
function I18nProvider(_a) {
    var _b = _a.locales, locales = _b === void 0 ? [] : _b, locale = _a.locale, onLocaleChange = _a.onLocaleChange, props = __rest(_a, ["locales", "locale", "onLocaleChange"]);
    var router = (0, framework_1.useRouter)();
    var pathname = (0, framework_1.usePathname)();
    var onChange = (0, use_effect_event_1.useEffectEvent)(function (value) {
        if (onLocaleChange) {
            return onLocaleChange(value);
        }
        var segments = pathname.split('/').filter(function (v) { return v.length > 0; });
        // If locale prefix hidden
        if (segments[0] !== locale) {
            segments.unshift(value);
        }
        else {
            segments[0] = value;
        }
        router.push("/".concat(segments.join('/')));
        router.refresh();
    });
    return (<i18n_1.I18nContext.Provider value={(0, react_1.useMemo)(function () { return ({
            locale: locale,
            locales: locales,
            text: __assign(__assign({}, i18n_1.defaultTranslations), props.translations),
            onChange: onChange,
        }); }, [locale, locales, onChange, props.translations])}>
      {props.children}
    </i18n_1.I18nContext.Provider>);
}
