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
exports.NavbarMenu = void 0;
exports.Navbar = Navbar;
exports.NavbarMenuContent = NavbarMenuContent;
exports.NavbarMenuTrigger = NavbarMenuTrigger;
exports.NavbarMenuLink = NavbarMenuLink;
exports.NavbarLink = NavbarLink;
var react_1 = require("react");
var class_variance_authority_1 = require("class-variance-authority");
var link_1 = require("fumadocs-core/link");
var cn_1 = require("@/utils/cn");
var links_1 = require("@/layouts/links");
var navigation_menu_1 = require("@/components/ui/navigation-menu");
var layout_1 = require("@/contexts/layout");
var button_1 = require("@/components/ui/button");
var navItemVariants = (0, class_variance_authority_1.cva)('inline-flex items-center gap-1 p-2 text-fd-muted-foreground transition-colors hover:text-fd-accent-foreground data-[active=true]:text-fd-primary [&_svg]:size-4');
function Navbar(props) {
    var _a = (0, react_1.useState)(''), value = _a[0], setValue = _a[1];
    var isTransparent = (0, layout_1.useNav)().isTransparent;
    return (<navigation_menu_1.NavigationMenu value={value} onValueChange={setValue} asChild>
      <header id="nd-nav" {...props} className={(0, cn_1.cn)('fixed top-(--fd-banner-height) z-40 left-0 backdrop-blur-lg border-b transition-colors *:mx-auto *:max-w-fd-container', value.length > 0 && 'max-lg:shadow-lg max-lg:rounded-b-2xl', (!isTransparent || value.length > 0) && 'bg-fd-background/80', props.className)} style={{
            right: 'var(--removed-body-scroll-bar-size, 0px)',
        }}>
        <navigation_menu_1.NavigationMenuList className="flex h-14 w-full items-center px-4" asChild>
          <nav>{props.children}</nav>
        </navigation_menu_1.NavigationMenuList>

        <navigation_menu_1.NavigationMenuViewport />
      </header>
    </navigation_menu_1.NavigationMenu>);
}
exports.NavbarMenu = navigation_menu_1.NavigationMenuItem;
function NavbarMenuContent(props) {
    return (<navigation_menu_1.NavigationMenuContent {...props} className={(0, cn_1.cn)('grid grid-cols-1 gap-2 p-4 md:grid-cols-2 lg:grid-cols-3', props.className)}>
      {props.children}
    </navigation_menu_1.NavigationMenuContent>);
}
function NavbarMenuTrigger(props) {
    return (<navigation_menu_1.NavigationMenuTrigger {...props} className={(0, cn_1.cn)(navItemVariants(), 'rounded-md', props.className)}>
      {props.children}
    </navigation_menu_1.NavigationMenuTrigger>);
}
function NavbarMenuLink(props) {
    return (<navigation_menu_1.NavigationMenuLink asChild>
      <link_1.default {...props} className={(0, cn_1.cn)('flex flex-col gap-2 rounded-lg border bg-fd-card p-3 transition-colors hover:bg-fd-accent/80 hover:text-fd-accent-foreground', props.className)}>
        {props.children}
      </link_1.default>
    </navigation_menu_1.NavigationMenuLink>);
}
var linkVariants = (0, class_variance_authority_1.cva)('', {
    variants: {
        variant: {
            main: navItemVariants(),
            button: (0, button_1.buttonVariants)({
                color: 'secondary',
                className: 'gap-1.5 [&_svg]:size-4',
            }),
            icon: (0, button_1.buttonVariants)({
                color: 'ghost',
                size: 'icon',
            }),
        },
    },
    defaultVariants: {
        variant: 'main',
    },
});
function NavbarLink(_a) {
    var item = _a.item, variant = _a.variant, props = __rest(_a, ["item", "variant"]);
    return (<navigation_menu_1.NavigationMenuItem>
      <navigation_menu_1.NavigationMenuLink asChild>
        <links_1.BaseLinkItem {...props} item={item} className={(0, cn_1.cn)(linkVariants({ variant: variant }), props.className)}>
          {props.children}
        </links_1.BaseLinkItem>
      </navigation_menu_1.NavigationMenuLink>
    </navigation_menu_1.NavigationMenuItem>);
}
