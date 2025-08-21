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
exports.SidebarLinkItem = SidebarLinkItem;
exports.getSidebarTabsFromOptions = getSidebarTabsFromOptions;
var sidebar_1 = require("@/components/layout/sidebar");
var get_sidebar_tabs_1 = require("@/utils/get-sidebar-tabs");
function SidebarLinkItem(_a) {
    var item = _a.item, props = __rest(_a, ["item"]);
    if (item.type === 'menu')
        return (<sidebar_1.SidebarFolder {...props}>
        {item.url ? (<sidebar_1.SidebarFolderLink href={item.url}>
            {item.icon}
            {item.text}
          </sidebar_1.SidebarFolderLink>) : (<sidebar_1.SidebarFolderTrigger>
            {item.icon}
            {item.text}
          </sidebar_1.SidebarFolderTrigger>)}
        <sidebar_1.SidebarFolderContent>
          {item.items.map(function (child, i) { return (<SidebarLinkItem key={i} item={child}/>); })}
        </sidebar_1.SidebarFolderContent>
      </sidebar_1.SidebarFolder>);
    if (item.type === 'custom')
        return <div {...props}>{item.children}</div>;
    return (<sidebar_1.SidebarItem href={item.url} icon={item.icon} external={item.external} {...props}>
      {item.text}
    </sidebar_1.SidebarItem>);
}
function getSidebarTabsFromOptions(options, tree) {
    if (Array.isArray(options)) {
        return options;
    }
    else if (typeof options === 'object') {
        return (0, get_sidebar_tabs_1.getSidebarTabs)(tree, options);
    }
    else if (options !== false) {
        return (0, get_sidebar_tabs_1.getSidebarTabs)(tree);
    }
}
