"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.generateOGImage = generateOGImage;
exports.generate = generate;
var og_1 = require("next/og");
function generateOGImage(options) {
    var title = options.title, description = options.description, icon = options.icon, site = options.site, primaryColor = options.primaryColor, primaryTextColor = options.primaryTextColor, rest = __rest(options, ["title", "description", "icon", "site", "primaryColor", "primaryTextColor"]);
    return new og_1.ImageResponse(generate({
        title: title,
        description: description,
        icon: icon,
        site: site,
        primaryTextColor: primaryTextColor,
        primaryColor: primaryColor,
    }), __assign({ width: 1200, height: 630 }, rest));
}
function generate(_a) {
    var _b = _a.primaryColor, primaryColor = _b === void 0 ? 'rgba(255,150,255,0.3)' : _b, _c = _a.primaryTextColor, primaryTextColor = _c === void 0 ? 'rgb(255,150,255)' : _c, props = __rest(_a, ["primaryColor", "primaryTextColor"]);
    return (<div style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            height: '100%',
            color: 'white',
            padding: '4rem',
            backgroundColor: '#0c0c0c',
            backgroundImage: "linear-gradient(to top right, ".concat(primaryColor, ", transparent)"),
        }}>
      <div style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '12px',
            color: primaryTextColor,
        }}>
        {props.icon}
        <p style={{
            fontSize: '56px',
            fontWeight: 600,
        }}>
          {props.site}
        </p>
      </div>

      <p style={{
            fontWeight: 800,
            fontSize: '82px',
        }}>
        {props.title}
      </p>
      <p style={{
            fontSize: '52px',
            color: 'rgba(240,240,240,0.8)',
        }}>
        {props.description}
      </p>
    </div>);
}
