'use client';
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
exports.ImageZoom = ImageZoom;
var framework_1 = require("fumadocs-core/framework");
require("./image-zoom.css");
var react_medium_image_zoom_1 = require("react-medium-image-zoom");
function getImageSrc(src) {
    if (typeof src === 'string')
        return src;
    if (typeof src === 'object') {
        // Next.js
        if ('default' in src)
            return src.default.src;
        return src.src;
    }
    return '';
}
function ImageZoom(_a) {
    var zoomInProps = _a.zoomInProps, children = _a.children, rmiz = _a.rmiz, props = __rest(_a, ["zoomInProps", "children", "rmiz"]);
    return (<react_medium_image_zoom_1.default zoomMargin={20} wrapElement="span" {...rmiz} zoomImg={__assign({ src: getImageSrc(props.src), sizes: undefined }, zoomInProps)}>
      {children !== null && children !== void 0 ? children : (<framework_1.Image sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 900px" {...props}/>)}
    </react_medium_image_zoom_1.default>);
}
