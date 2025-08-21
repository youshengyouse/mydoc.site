'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LanguageToggle = LanguageToggle;
exports.LanguageToggleText = LanguageToggleText;
var i18n_1 = require("@/contexts/i18n");
var popover_1 = require("@/components/ui/popover");
var cn_1 = require("@/utils/cn");
var button_1 = require("@/components/ui/button");
function LanguageToggle(props) {
    var context = (0, i18n_1.useI18n)();
    if (!context.locales)
        throw new Error('Missing `<I18nProvider />`');
    return (<popover_1.Popover>
      <popover_1.PopoverTrigger aria-label={context.text.chooseLanguage} {...props} className={(0, cn_1.cn)((0, button_1.buttonVariants)({
            color: 'ghost',
            className: 'gap-1.5 p-1.5',
        }), props.className)}>
        {props.children}
      </popover_1.PopoverTrigger>
      <popover_1.PopoverContent className="flex flex-col overflow-hidden p-0">
        <p className="mb-1 p-2 text-xs font-medium text-fd-muted-foreground">
          {context.text.chooseLanguage}
        </p>
        {context.locales.map(function (item) { return (<button key={item.locale} type="button" className={(0, cn_1.cn)('p-2 text-start text-sm', item.locale === context.locale
                ? 'bg-fd-primary/10 font-medium text-fd-primary'
                : 'hover:bg-fd-accent hover:text-fd-accent-foreground')} onClick={function () {
                var _a;
                (_a = context.onChange) === null || _a === void 0 ? void 0 : _a.call(context, item.locale);
            }}>
            {item.name}
          </button>); })}
      </popover_1.PopoverContent>
    </popover_1.Popover>);
}
function LanguageToggleText(props) {
    var _a, _b;
    var context = (0, i18n_1.useI18n)();
    var text = (_b = (_a = context.locales) === null || _a === void 0 ? void 0 : _a.find(function (item) { return item.locale === context.locale; })) === null || _b === void 0 ? void 0 : _b.name;
    return <span {...props}>{text}</span>;
}
