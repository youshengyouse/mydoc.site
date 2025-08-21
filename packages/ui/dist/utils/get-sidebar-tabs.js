import { jsx as _jsx } from "react/jsx-runtime";
const defaultTransform = (option, node) => {
    if (!node.icon)
        return option;
    return {
        ...option,
        icon: (_jsx("div", { className: "size-full [&_svg]:size-full max-md:p-1.5 max-md:rounded-md max-md:border max-md:bg-fd-secondary", children: node.icon })),
    };
};
export function getSidebarTabs(tree, { transform = defaultTransform } = {}) {
    function findOptions(node, unlisted) {
        const results = [];
        if ('root' in node && node.root) {
            const urls = getFolderUrls(node);
            if (urls.size > 0) {
                const option = {
                    url: urls.values().next().value ?? '',
                    title: node.name,
                    icon: node.icon,
                    unlisted,
                    description: node.description,
                    urls,
                };
                const mapped = transform ? transform(option, node) : option;
                if (mapped)
                    results.push(mapped);
            }
        }
        for (const child of node.children) {
            if (child.type === 'folder')
                results.push(...findOptions(child, unlisted));
        }
        return results;
    }
    const options = findOptions(tree);
    if (tree.fallback) {
        options.push(...findOptions(tree.fallback, true));
    }
    return options;
}
function getFolderUrls(folder, output = new Set()) {
    if (folder.index)
        output.add(folder.index.url);
    for (const child of folder.children) {
        if (child.type === 'page' && !child.external)
            output.add(child.url);
        if (child.type === 'folder')
            getFolderUrls(child, output);
    }
    return output;
}
