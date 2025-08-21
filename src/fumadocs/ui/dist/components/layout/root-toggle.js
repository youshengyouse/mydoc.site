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
exports.RootToggle = RootToggle;
var lucide_react_1 = require("lucide-react");
var react_1 = require("react");
var link_1 = require("fumadocs-core/link");
var framework_1 = require("fumadocs-core/framework");
var cn_1 = require("@/utils/cn");
var is_active_1 = require("@/utils/is-active");
var sidebar_1 = require("@/contexts/sidebar");
var popover_1 = require("../ui/popover");
function RootToggle(_a) {
    var options = _a.options, placeholder = _a.placeholder, props = __rest(_a, ["options", "placeholder"]);
    var _b = (0, react_1.useState)(false), open = _b[0], setOpen = _b[1];
    var closeOnRedirect = (0, sidebar_1.useSidebar)().closeOnRedirect;
    var pathname = (0, framework_1.usePathname)();
    var selected = (0, react_1.useMemo)(function () {
        var lookup = pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
        return options.findLast(function (item) {
            if (item.urls)
                return item.urls.has(lookup);
            return (0, is_active_1.isActive)(item.url, pathname, true);
        });
    }, [options, pathname]);
    var onClick = function () {
        closeOnRedirect.current = false;
        setOpen(false);
    };
    var item = selected ? (<>
      <div className="size-9 md:size-5">{selected.icon}</div>
      <div>
        <p className="text-sm font-medium">{selected.title}</p>
        <p className="text-[13px] text-fd-muted-foreground empty:hidden md:hidden">
          {selected.description}
        </p>
      </div>
    </>) : (placeholder);
    return (<popover_1.Popover open={open} onOpenChange={setOpen}>
      {item && (<popover_1.PopoverTrigger {...props} className={(0, cn_1.cn)('flex items-center gap-2 rounded-lg p-2 border bg-fd-secondary/50 text-start text-fd-secondary-foreground transition-colors hover:bg-fd-accent data-[state=open]:bg-fd-accent data-[state=open]:text-fd-accent-foreground', props.className)}>
          {item}
          <lucide_react_1.ChevronsUpDown className="ms-auto size-4 text-fd-muted-foreground"/>
        </popover_1.PopoverTrigger>)}
      <popover_1.PopoverContent className="flex flex-col gap-1 min-w-(--radix-popover-trigger-width) overflow-hidden p-1">
        {options.map(function (item) {
            var _a;
            var isActive = item === selected;
            return (<link_1.default key={item.url} href={item.url} onClick={onClick} {...item.props} className={(0, cn_1.cn)('flex items-center gap-2 rounded-lg p-1.5 hover:bg-fd-accent hover:text-fd-accent-foreground', (_a = item.props) === null || _a === void 0 ? void 0 : _a.className)}>
              <div className="size-9 md:size-5 md:mt-1 md:mb-auto">
                {item.icon}
              </div>
              <div>
                <p className="text-sm font-medium">{item.title}</p>
                <p className="text-[13px] text-fd-muted-foreground empty:hidden">
                  {item.description}
                </p>
              </div>

              <lucide_react_1.Check className={(0, cn_1.cn)('ms-auto size-3.5 text-fd-primary', !isActive && 'invisible')}/>
            </link_1.default>);
        })}
      </popover_1.PopoverContent>
    </popover_1.Popover>);
}
