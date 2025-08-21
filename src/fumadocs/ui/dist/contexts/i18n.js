'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.I18nContext = exports.defaultTranslations = void 0;
exports.I18nLabel = I18nLabel;
exports.useI18n = useI18n;
var react_1 = require("react");
exports.defaultTranslations = {
    search: 'Search',
    searchNoResult: 'No results found',
    toc: 'On this page',
    tocNoHeadings: 'No Headings',
    lastUpdate: 'Last updated on',
    chooseLanguage: 'Choose a language',
    nextPage: 'Next Page',
    previousPage: 'Previous Page',
    chooseTheme: 'Theme',
    editOnGithub: 'Edit on GitHub',
};
exports.I18nContext = (0, react_1.createContext)({
    text: exports.defaultTranslations,
});
function I18nLabel(props) {
    var text = useI18n().text;
    return text[props.label];
}
function useI18n() {
    return (0, react_1.useContext)(exports.I18nContext);
}
