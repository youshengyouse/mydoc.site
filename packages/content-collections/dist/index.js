import "./chunk-MLKGABMK.js";

// src/index.ts
function createMDXSource(allDocs, allMetas) {
  return {
    files: [
      ...allDocs.map((v) => ({
        type: "page",
        data: v,
        path: v._meta.filePath
      })),
      ...allMetas.map((v) => ({
        type: "meta",
        data: v,
        path: v._meta.filePath
      }))
    ]
  };
}
export {
  createMDXSource
};
