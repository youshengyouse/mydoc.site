// src/search/algolia.ts
async function sync(client, options) {
  const { document = "document", indexName = document, documents } = options;
  await setIndexSettings(client, indexName);
  await updateDocuments(client, indexName, documents);
}
async function setIndexSettings(client, indexName) {
  await client.setSettings({
    indexName,
    indexSettings: {
      attributeForDistinct: "page_id",
      attributesToRetrieve: [
        "title",
        "section",
        "content",
        "url",
        "section_id"
      ],
      searchableAttributes: ["title", "section", "content"],
      attributesToSnippet: [],
      attributesForFaceting: ["tag"]
    }
  });
}
function toIndex(page) {
  let id = 0;
  const indexes = [];
  const scannedHeadings = /* @__PURE__ */ new Set();
  function createIndex(section, sectionId, content) {
    return {
      objectID: `${page._id}-${(id++).toString()}`,
      title: page.title,
      url: page.url,
      page_id: page._id,
      tag: page.tag,
      section,
      section_id: sectionId,
      content,
      ...page.extra_data
    };
  }
  if (page.description)
    indexes.push(createIndex(void 0, void 0, page.description));
  const { headings, contents } = page.structured;
  for (const p of contents) {
    const heading = p.heading ? headings.find((h) => p.heading === h.id) : null;
    const index = createIndex(heading?.content, heading?.id, p.content);
    if (heading && !scannedHeadings.has(heading.id)) {
      scannedHeadings.add(heading.id);
      indexes.push(createIndex(heading.content, heading.id, heading.content));
    }
    indexes.push(index);
  }
  return indexes;
}
async function updateDocuments(client, indexName, documents) {
  const objects = documents.flatMap(toIndex);
  await client.replaceAllObjects({
    indexName,
    objects
  });
}
export {
  setIndexSettings,
  sync,
  updateDocuments
};
