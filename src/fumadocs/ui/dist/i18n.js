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
exports.defaultTranslations = void 0;
exports.I18nProvider = I18nProvider;
var navigation_1 = require("next/navigation");
var use_effect_event_1 = require("fumadocs-core/utils/use-effect-event");
var react_1 = require("react");
var i18n_1 = require("@/contexts/i18n");
var i18n_2 = require("./contexts/i18n");
Object.defineProperty(exports, "defaultTranslations", { enumerable: true, get: function () { return i18n_2.defaultTranslations; } });
// TODO: remove next major
/**
 * @deprecated legacy I18n Provider, use `<RootProvider i18n={...} />` instead
 */
function I18nProvider(_a) {
    var _b = _a.locales, locales = _b === void 0 ? [] : _b, locale = _a.locale, _onChange = _a.onChange, _c = _a.onLocaleChange, onLocaleChange = _c === void 0 ? _onChange : _c, props = __rest(_a, ["locales", "locale", "onChange", "onLocaleChange"]);
    var router = (0, navigation_1.useRouter)();
    var pathname = (0, navigation_1.usePathname)();
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
