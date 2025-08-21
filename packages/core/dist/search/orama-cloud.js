import "../chunk-JSBRDJBE.js";

// src/search/orama-cloud.ts
async function sync(cloudManager, options) {
  const { autoDeploy = true } = options;
  const index = cloudManager.index(options.index);
  await index.snapshot(options.documents.flatMap(toIndex));
  if (autoDeploy) await index.deploy();
}
async function syncI18n(cloudManager, options) {
  const { autoDeploy = true } = options;
  const tasks = options.documents.map(async (document) => {
    const index = cloudManager.index(options.indexes[document.locale]);
    await index.snapshot(document.items.flatMap(toIndex));
    if (autoDeploy) await index.deploy();
  });
  await Promise.all(tasks);
}
function toIndex(page) {
  let id = 0;
  const indexes = [];
  const scannedHeadings = /* @__PURE__ */ new Set();
  function createIndex(section, sectionId, content) {
    return {
      id: `${page.id}-${(id++).toString()}`,
      title: page.title,
      url: page.url,
      page_id: page.id,
      tag: page.tag,
      section,
      section_id: sectionId,
      content,
      ...page.extra_data
    };
  }
  if (page.description)
    indexes.push(createIndex(void 0, void 0, page.description));
  page.structured.contents.forEach((p) => {
    const heading = p.heading ? page.structured.headings.find((h) => p.heading === h.id) : null;
    const index = createIndex(heading?.content, heading?.id, p.content);
    if (heading && !scannedHeadings.has(heading.id)) {
      scannedHeadings.add(heading.id);
      indexes.push(createIndex(heading.content, heading.id, heading.content));
    }
    indexes.push(index);
  });
  return indexes;
}
export {
  sync,
  syncI18n
};
