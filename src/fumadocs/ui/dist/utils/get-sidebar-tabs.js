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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSidebarTabs = getSidebarTabs;
var defaultTransform = function (option, node) {
    if (!node.icon)
        return option;
    return __assign(__assign({}, option), { icon: (<div className="size-full [&_svg]:size-full max-md:p-1.5 max-md:rounded-md max-md:border max-md:bg-fd-secondary">
        {node.icon}
      </div>) });
};
function getSidebarTabs(pageTree, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.transform, transform = _c === void 0 ? defaultTransform : _c;
    function findOptions(node) {
        var _a;
        var results = [];
        if (node.root) {
            var urls = getFolderUrls(node);
            if (urls.size > 0) {
                var option = {
                    url: (_a = urls.values().next().value) !== null && _a !== void 0 ? _a : '',
                    title: node.name,
                    icon: node.icon,
                    description: node.description,
                    urls: urls,
                };
                var mapped = transform ? transform(option, node) : option;
                if (mapped)
                    results.push(mapped);
            }
        }
        for (var _i = 0, _b = node.children; _i < _b.length; _i++) {
            var child = _b[_i];
            if (child.type === 'folder')
                results.push.apply(results, findOptions(child));
        }
        return results;
    }
    return findOptions(pageTree);
}
function getFolderUrls(folder, output) {
    if (output === void 0) { output = new Set(); }
    if (folder.index)
        output.add(folder.index.url);
    for (var _i = 0, _a = folder.children; _i < _a.length; _i++) {
        var child = _a[_i];
        if (child.type === 'page' && !child.external)
            output.add(child.url);
        if (child.type === 'folder')
            getFolderUrls(child, output);
    }
    return output;
}
