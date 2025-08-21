"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isActive = isActive;
function isActive(url, pathname, nested) {
    if (nested === void 0) { nested = true; }
    if (url.endsWith('/'))
        url = url.slice(0, -1);
    if (pathname.endsWith('/'))
        pathname = pathname.slice(0, -1);
    return url === pathname || (nested && pathname.startsWith("".concat(url, "/")));
}
