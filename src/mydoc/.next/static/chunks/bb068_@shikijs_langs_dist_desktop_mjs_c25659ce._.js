(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/.pnpm/@shikijs+langs@3.11.0/node_modules/@shikijs/langs/dist/desktop.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const lang = Object.freeze(JSON.parse("{\"displayName\":\"Desktop\",\"name\":\"desktop\",\"patterns\":[{\"include\":\"#layout\"},{\"include\":\"#keywords\"},{\"include\":\"#values\"},{\"include\":\"#inCommands\"},{\"include\":\"#inCategories\"}],\"repository\":{\"inCategories\":{\"patterns\":[{\"match\":\"(?<=^Categories.*)AudioVideo|(?<=^Categories.*)Audio|(?<=^Categories.*)Video|(?<=^Categories.*)Development|(?<=^Categories.*)Education|(?<=^Categories.*)Game|(?<=^Categories.*)Graphics|(?<=^Categories.*)Network|(?<=^Categories.*)Office|(?<=^Categories.*)Science|(?<=^Categories.*)Settings|(?<=^Categories.*)System|(?<=^Categories.*)Utility\",\"name\":\"markup.bold\"}]},\"inCommands\":{\"patterns\":[{\"match\":\"(?<=^Exec.*\\\\s)-+\\\\S+\",\"name\":\"variable.parameter\"},{\"match\":\"(?<=^Exec.*)\\\\s%[FUcfiku]\\\\s\",\"name\":\"variable.language\"},{\"match\":\"\\\".*\\\"\",\"name\":\"string\"}]},\"keywords\":{\"patterns\":[{\"match\":\"^(?:Type|Version|Name|GenericName|NoDisplay|Comment|Icon|Hidden|OnlyShowIn|NotShowIn|DBusActivatable|TryExec|Exec|Path|Terminal|Actions|MimeType|Categories|Implements|Keywords|StartupNotify|StartupWMClass|URL|PrefersNonDefaultGPU|Encoding)\\\\b\",\"name\":\"keyword\"},{\"match\":\"^X-[- 0-9A-z]*\",\"name\":\"keyword.other\"},{\"match\":\"(?<!^)\\\\[.+]\",\"name\":\"constant.language\"},{\"match\":\"^(?:GtkTheme|MetacityTheme|IconTheme|CursorTheme|ButtonLayout|ApplicationFont)\\\\b\",\"name\":\"keyword\"}]},\"layout\":{\"patterns\":[{\"begin\":\"^\\\\[Desktop\",\"end\":\"]\",\"name\":\"markup.heading\"},{\"begin\":\"^\\\\[X-\\\\w*\",\"end\":\"]\",\"name\":\"markup.heading\"},{\"match\":\"^\\\\s*#.*\",\"name\":\"comment\"},{\"match\":\";\",\"name\":\"strong\"}]},\"values\":{\"patterns\":[{\"match\":\"(?<=^\\\\S+)=\",\"name\":\"keyword.operator\"},{\"match\":\"\\\\b(?:tru|fals)e\\\\b\",\"name\":\"variable.other\"},{\"match\":\"(?<=^Version.*)\\\\d+(\\\\.?\\\\d*)\",\"name\":\"variable.other\"}]}},\"scopeName\":\"source.desktop\"}"));
const __TURBOPACK__default__export__ = [
    lang
];
}),
]);

//# sourceMappingURL=bb068_%40shikijs_langs_dist_desktop_mjs_c25659ce._.js.map