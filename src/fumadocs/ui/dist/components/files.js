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
exports.Files = Files;
exports.File = File;
exports.Folder = Folder;
var class_variance_authority_1 = require("class-variance-authority");
var lucide_react_1 = require("lucide-react");
var react_1 = require("react");
var cn_1 = require("@/utils/cn");
var collapsible_1 = require("./ui/collapsible");
var itemVariants = (0, class_variance_authority_1.cva)('flex flex-row items-center gap-2 rounded-md px-2 py-1.5 text-sm hover:bg-fd-accent hover:text-fd-accent-foreground [&_svg]:size-4');
function Files(_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (<div className={(0, cn_1.cn)('not-prose rounded-md border bg-fd-card p-2', className)} {...props}>
      {props.children}
    </div>);
}
function File(_a) {
    var name = _a.name, _b = _a.icon, icon = _b === void 0 ? <lucide_react_1.File /> : _b, className = _a.className, rest = __rest(_a, ["name", "icon", "className"]);
    return (<div className={(0, cn_1.cn)(itemVariants({ className: className }))} {...rest}>
      {icon}
      {name}
    </div>);
}
function Folder(_a) {
    var name = _a.name, _b = _a.defaultOpen, defaultOpen = _b === void 0 ? false : _b, props = __rest(_a, ["name", "defaultOpen"]);
    var _c = (0, react_1.useState)(defaultOpen), open = _c[0], setOpen = _c[1];
    return (<collapsible_1.Collapsible open={open} onOpenChange={setOpen} {...props}>
      <collapsible_1.CollapsibleTrigger className={(0, cn_1.cn)(itemVariants({ className: 'w-full' }))}>
        {open ? <lucide_react_1.FolderOpen /> : <lucide_react_1.Folder />}
        {name}
      </collapsible_1.CollapsibleTrigger>
      <collapsible_1.CollapsibleContent>
        <div className="ms-2 flex flex-col border-l ps-2">{props.children}</div>
      </collapsible_1.CollapsibleContent>
    </collapsible_1.Collapsible>);
}
