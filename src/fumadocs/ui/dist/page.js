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
exports.DocsTitle = exports.DocsDescription = exports.DocsBody = void 0;
exports.DocsPage = DocsPage;
exports.EditOnGitHub = EditOnGitHub;
exports.withArticle = withArticle;
var react_1 = require("react");
var cn_1 = require("@/utils/cn");
var button_1 = require("@/components/ui/button");
var icons_1 = require("@/icons");
var i18n_1 = require("@/contexts/i18n");
var page_1 = require("@/layouts/docs/page");
function DocsPage(_a) {
    var _b;
    var editOnGithub = _a.editOnGithub, _c = _a.breadcrumb, _d = _c === void 0 ? {} : _c, _e = _d.enabled, breadcrumbEnabled = _e === void 0 ? true : _e, breadcrumb = _d.component, breadcrumbProps = __rest(_d, ["enabled", "component"]), _f = _a.footer, footer = _f === void 0 ? {} : _f, lastUpdate = _a.lastUpdate, container = _a.container, _g = _a.full, full = _g === void 0 ? false : _g, _h = _a.tableOfContentPopover, _j = _h === void 0 ? {} : _h, tocPopoverEnabled = _j.enabled, tocPopover = _j.component, tocPopoverOptions = __rest(_j, ["enabled", "component"]), _k = _a.tableOfContent, _l = _k === void 0 ? {} : _k, tocEnabled = _l.enabled, tocReplace = _l.component, tocOptions = __rest(_l, ["enabled", "component"]), _m = _a.toc, toc = _m === void 0 ? [] : _m, article = _a.article, children = _a.children;
    var isTocRequired = toc.length > 0 ||
        tocOptions.footer !== undefined ||
        tocOptions.header !== undefined;
    // disable TOC on full mode, you can still enable it with `enabled` option.
    tocEnabled !== null && tocEnabled !== void 0 ? tocEnabled : (tocEnabled = !full && isTocRequired);
    tocPopoverEnabled !== null && tocPopoverEnabled !== void 0 ? tocPopoverEnabled : (tocPopoverEnabled = toc.length > 0 ||
        tocPopoverOptions.header !== undefined ||
        tocPopoverOptions.footer !== undefined);
    return (<page_1.PageRoot toc={{
            toc: toc,
            single: tocOptions.single,
        }} {...container}>
      {tocPopoverEnabled &&
            (tocPopover !== null && tocPopover !== void 0 ? tocPopover : (<page_1.PageTOCPopover>
            <page_1.PageTOCPopoverTrigger />
            <page_1.PageTOCPopoverContent>
              {tocPopoverOptions.header}
              <page_1.PageTOCPopoverItems variant={tocPopoverOptions.style}/>
              {tocPopoverOptions.footer}
            </page_1.PageTOCPopoverContent>
          </page_1.PageTOCPopover>))}
      <page_1.PageArticle {...article}>
        {breadcrumbEnabled &&
            (breadcrumb !== null && breadcrumb !== void 0 ? breadcrumb : <page_1.PageBreadcrumb {...breadcrumbProps}/>)}
        {children}
        <div role="none" className="flex-1"/>
        <div className="flex flex-row flex-wrap items-center justify-between gap-4 empty:hidden">
          {editOnGithub && (<EditOnGitHub href={"https://github.com/".concat(editOnGithub.owner, "/").concat(editOnGithub.repo, "/blob/").concat(editOnGithub.sha, "/").concat(editOnGithub.path.startsWith('/') ? editOnGithub.path.slice(1) : editOnGithub.path)}/>)}
          {lastUpdate && <page_1.PageLastUpdate date={new Date(lastUpdate)}/>}
        </div>
        {footer.enabled !== false &&
            ((_b = footer.component) !== null && _b !== void 0 ? _b : <page_1.PageFooter items={footer.items}/>)}
      </page_1.PageArticle>
      {tocEnabled &&
            (tocReplace !== null && tocReplace !== void 0 ? tocReplace : (<page_1.PageTOC>
            {tocOptions.header}
            <page_1.PageTOCTitle />
            <page_1.PageTOCItems variant={tocOptions.style}/>
            {tocOptions.footer}
          </page_1.PageTOC>))}
    </page_1.PageRoot>);
}
function EditOnGitHub(props) {
    var _a;
    return (<a target="_blank" rel="noreferrer noopener" {...props} className={(0, cn_1.cn)((0, button_1.buttonVariants)({
            color: 'secondary',
            size: 'sm',
            className: 'gap-1.5 not-prose',
        }), props.className)}>
      {(_a = props.children) !== null && _a !== void 0 ? _a : (<>
          <icons_1.Edit className="size-3.5"/>
          <i18n_1.I18nLabel label="editOnGithub"/>
        </>)}
    </a>);
}
/**
 * Add typography styles
 */
exports.DocsBody = (0, react_1.forwardRef)(function (props, ref) { return (<div ref={ref} {...props} className={(0, cn_1.cn)('prose', props.className)}>
      {props.children}
    </div>); });
exports.DocsBody.displayName = 'DocsBody';
exports.DocsDescription = (0, react_1.forwardRef)(function (props, ref) {
    // don't render if no description provided
    if (props.children === undefined)
        return null;
    return (<p ref={ref} {...props} className={(0, cn_1.cn)('mb-8 text-lg text-fd-muted-foreground', props.className)}>
      {props.children}
    </p>);
});
exports.DocsDescription.displayName = 'DocsDescription';
exports.DocsTitle = (0, react_1.forwardRef)(function (props, ref) {
    return (<h1 ref={ref} {...props} className={(0, cn_1.cn)('text-3xl font-semibold', props.className)}>
        {props.children}
      </h1>);
});
exports.DocsTitle.displayName = 'DocsTitle';
/**
 * For separate MDX page
 */
function withArticle(props) {
    return (<main {...props} className={(0, cn_1.cn)('container py-12', props.className)}>
      <article className="prose">{props.children}</article>
    </main>);
}
