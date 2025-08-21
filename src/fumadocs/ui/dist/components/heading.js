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
exports.Heading = Heading;
var lucide_react_1 = require("lucide-react");
var cn_1 = require("@/utils/cn");
function Heading(_a) {
    var as = _a.as, className = _a.className, props = __rest(_a, ["as", "className"]);
    var As = as !== null && as !== void 0 ? as : 'h1';
    if (!props.id)
        return <As className={className} {...props}/>;
    return (<As className={(0, cn_1.cn)('flex scroll-m-28 flex-row items-center gap-2', className)} {...props}>
      <a data-card="" href={"#".concat(props.id)} className="peer">
        {props.children}
      </a>
      <lucide_react_1.Link aria-label="Link to section" className="size-3.5 shrink-0 text-fd-muted-foreground opacity-0 transition-opacity peer-hover:opacity-100"/>
    </As>);
}
