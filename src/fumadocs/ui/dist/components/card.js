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
exports.Cards = Cards;
exports.Card = Card;
var link_1 = require("fumadocs-core/link");
var cn_1 = require("@/utils/cn");
function Cards(props) {
    return (<div {...props} className={(0, cn_1.cn)('grid grid-cols-2 gap-3 @container', props.className)}>
      {props.children}
    </div>);
}
function Card(_a) {
    var icon = _a.icon, title = _a.title, description = _a.description, props = __rest(_a, ["icon", "title", "description"]);
    var E = props.href ? link_1.default : 'div';
    return (<E {...props} data-card className={(0, cn_1.cn)('block rounded-xl border bg-fd-card p-4 text-fd-card-foreground transition-colors @max-lg:col-span-full', props.href && 'hover:bg-fd-accent/80', props.className)}>
      {icon ? (<div className="not-prose mb-2 w-fit shadow-md rounded-lg border bg-fd-muted p-1.5 text-fd-muted-foreground [&_svg]:size-4">
          {icon}
        </div>) : null}
      <h3 className="not-prose mb-1 text-sm font-medium">{title}</h3>
      {description ? (<p className="!my-0 text-sm text-fd-muted-foreground">{description}</p>) : null}
      <div className="text-sm text-fd-muted-foreground prose-no-margin empty:hidden">
        {props.children}
      </div>
    </E>);
}
