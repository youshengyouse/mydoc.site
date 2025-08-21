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
exports.Menu = void 0;
exports.MenuLinkItem = MenuLinkItem;
exports.MenuTrigger = MenuTrigger;
exports.MenuContent = MenuContent;
var links_1 = require("@/layouts/links");
var cn_1 = require("@/utils/cn");
var navigation_menu_1 = require("@/components/ui/navigation-menu");
var link_1 = require("fumadocs-core/link");
var class_variance_authority_1 = require("class-variance-authority");
var button_1 = require("@/components/ui/button");
var menuItemVariants = (0, class_variance_authority_1.cva)('', {
    variants: {
        variant: {
            main: 'inline-flex items-center gap-2 py-1.5 transition-colors hover:text-fd-popover-foreground/50 data-[active=true]:font-medium data-[active=true]:text-fd-primary [&_svg]:size-4',
            icon: (0, button_1.buttonVariants)({
                size: 'icon',
                color: 'ghost',
            }),
            button: (0, button_1.buttonVariants)({
                color: 'secondary',
                className: 'gap-1.5 [&_svg]:size-4',
            }),
        },
    },
    defaultVariants: {
        variant: 'main',
    },
});
function MenuLinkItem(_a) {
    var item = _a.item, props = __rest(_a, ["item"]);
    if (item.type === 'custom')
        return <div className={(0, cn_1.cn)('grid', props.className)}>{item.children}</div>;
    if (item.type === 'menu') {
        var header = (<>
        {item.icon}
        {item.text}
      </>);
        return (<div className={(0, cn_1.cn)('mb-4 flex flex-col', props.className)}>
        <p className="mb-1 text-sm text-fd-muted-foreground">
          {item.url ? (<navigation_menu_1.NavigationMenuLink asChild>
              <link_1.default href={item.url}>{header}</link_1.default>
            </navigation_menu_1.NavigationMenuLink>) : (header)}
        </p>
        {item.items.map(function (child, i) { return (<MenuLinkItem key={i} item={child}/>); })}
      </div>);
    }
    return (<navigation_menu_1.NavigationMenuLink asChild>
      <links_1.BaseLinkItem item={item} className={(0, cn_1.cn)(menuItemVariants({ variant: item.type }), props.className)} aria-label={item.type === 'icon' ? item.label : undefined}>
        {item.icon}
        {item.type === 'icon' ? undefined : item.text}
      </links_1.BaseLinkItem>
    </navigation_menu_1.NavigationMenuLink>);
}
exports.Menu = navigation_menu_1.NavigationMenuItem;
function MenuTrigger(_a) {
    var _b = _a.enableHover, enableHover = _b === void 0 ? false : _b, props = __rest(_a, ["enableHover"]);
    return (<navigation_menu_1.NavigationMenuTrigger {...props} onPointerMove={enableHover ? undefined : function (e) { return e.preventDefault(); }}>
      {props.children}
    </navigation_menu_1.NavigationMenuTrigger>);
}
function MenuContent(props) {
    return (<navigation_menu_1.NavigationMenuContent {...props} className={(0, cn_1.cn)('flex flex-col p-4', props.className)}>
      {props.children}
    </navigation_menu_1.NavigationMenuContent>);
}
