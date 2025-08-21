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
exports.PageTOCPopoverContent = exports.PageTOCPopoverTrigger = exports.PageTOCPopover = exports.PageTOC = exports.PageLastUpdate = exports.PageFooter = exports.PageBreadcrumb = exports.PageRoot = void 0;
exports.PageProse = PageProse;
exports.PageTOCTitle = PageTOCTitle;
exports.PageTOCItems = PageTOCItems;
exports.PageTOCPopoverItems = PageTOCPopoverItems;
exports.PageArticle = PageArticle;
var cn_1 = require("@/utils/cn");
var page_client_1 = require("./page-client");
Object.defineProperty(exports, "PageBreadcrumb", { enumerable: true, get: function () { return page_client_1.PageBreadcrumb; } });
Object.defineProperty(exports, "PageFooter", { enumerable: true, get: function () { return page_client_1.PageFooter; } });
Object.defineProperty(exports, "PageLastUpdate", { enumerable: true, get: function () { return page_client_1.PageLastUpdate; } });
Object.defineProperty(exports, "PageRoot", { enumerable: true, get: function () { return page_client_1.PageRoot; } });
Object.defineProperty(exports, "PageTOC", { enumerable: true, get: function () { return page_client_1.PageTOC; } });
Object.defineProperty(exports, "PageTOCPopover", { enumerable: true, get: function () { return page_client_1.PageTOCPopover; } });
Object.defineProperty(exports, "PageTOCPopoverContent", { enumerable: true, get: function () { return page_client_1.PageTOCPopoverContent; } });
Object.defineProperty(exports, "PageTOCPopoverTrigger", { enumerable: true, get: function () { return page_client_1.PageTOCPopoverTrigger; } });
var toc_1 = require("@/components/layout/toc");
var lucide_react_1 = require("lucide-react");
var i18n_1 = require("@/contexts/i18n");
var toc_clerk_1 = require("@/components/layout/toc-clerk");
/**
 * Apply `prose` on div
 */
function PageProse(props) {
    return (<div {...props} className={(0, cn_1.cn)('prose', props.className)}>
      {props.children}
    </div>);
}
function PageTOCTitle(props) {
    return (<h3 {...props} className={(0, cn_1.cn)('inline-flex items-center gap-1.5 text-sm text-fd-muted-foreground', props.className)}>
      <lucide_react_1.Text className="size-4"/>
      <i18n_1.I18nLabel label="toc"/>
    </h3>);
}
function PageTOCItems(_a) {
    var _b = _a.variant, variant = _b === void 0 ? 'normal' : _b, props = __rest(_a, ["variant"]);
    return (<toc_1.TOCScrollArea {...props}>
      {variant === 'clerk' ? <toc_clerk_1.default /> : <toc_1.TOCItems />}
    </toc_1.TOCScrollArea>);
}
function PageTOCPopoverItems(_a) {
    var _b = _a.variant, variant = _b === void 0 ? 'normal' : _b, props = __rest(_a, ["variant"]);
    return (<toc_1.TOCScrollArea {...props}>
      {variant === 'clerk' ? <toc_clerk_1.default /> : <toc_1.TOCItems />}
    </toc_1.TOCScrollArea>);
}
function PageArticle(props) {
    return (<article {...props} className={(0, cn_1.cn)('flex min-w-0 w-full flex-col gap-4 px-4 pt-8 md:px-6 md:mx-auto xl:pt-12 xl:px-12', props.className)}>
      {props.children}
    </article>);
}
