import {
  remarkHeading
} from "../chunk-Y2774T3B.js";

// src/server/get-toc.ts
import { remark } from "remark";
function getTableOfContents(content, remarkPlugins) {
  if (remarkPlugins) {
    return remark().use(remarkPlugins).use(remarkHeading).process(content).then((result2) => {
      if ("toc" in result2.data) return result2.data.toc;
      return [];
    });
  }
  const result = remark().use(remarkHeading).processSync(content);
  if ("toc" in result.data) return result.data.toc;
  return [];
}

// src/utils/page-tree.tsx
function flattenTree(tree) {
  return tree.flatMap((node) => {
    if (node.type === "separator") return [];
    if (node.type === "folder") {
      const child = flattenTree(node.children);
      if (node.index) return [node.index, ...child];
      return child;
    }
    return [node];
  });
}
function findNeighbour(tree, url, options) {
  const { separateRoot = true } = options ?? {};
  const roots = separateRoot ? getPageTreeRoots(tree) : [tree];
  for (const root of roots) {
    const list = flattenTree(root.children);
    for (let i = 0; i < list.length; i++) {
      if (list[i].url === url) {
        return {
          next: list[i + 1],
          previous: list[i - 1]
        };
      }
    }
  }
  return {};
}
function getPageTreeRoots(pageTree) {
  const result = pageTree.children.flatMap((child) => {
    if (child.type !== "folder") return [];
    const roots = getPageTreeRoots(child);
    if (child.root) {
      roots.push(child);
    }
    return roots;
  });
  if (!("type" in pageTree)) result.push(pageTree);
  return result;
}
function separatePageTree(pageTree) {
  return pageTree.children.flatMap((child) => {
    if (child.type !== "folder") return [];
    return {
      name: child.name,
      url: child.index?.url,
      children: child.children
    };
  });
}
function getPageTreePeers(tree, url) {
  const parent = findParentFromTree(tree, url);
  if (!parent) return [];
  return parent.children.filter(
    (item) => item.type === "page" && item.url !== url
  );
}
function findParentFromTree(node, url) {
  if ("index" in node && node.index?.url === url) {
    return node;
  }
  for (const child of node.children) {
    if (child.type === "folder") {
      const parent = findParentFromTree(child, url);
      if (parent) return parent;
    }
    if (child.type === "page" && child.url === url) {
      return node;
    }
  }
}

// src/server/page-tree.ts
var page_tree_exports = {};

// src/server/git-api.ts
async function getGithubLastEdit({
  repo,
  token,
  owner,
  path,
  sha,
  options = {},
  params: customParams = {}
}) {
  const headers = new Headers(options.headers);
  const params = new URLSearchParams();
  params.set("path", path);
  params.set("page", "1");
  params.set("per_page", "1");
  if (sha) params.set("sha", sha);
  for (const [key, value] of Object.entries(customParams)) {
    params.set(key, value);
  }
  if (token) {
    headers.append("authorization", token);
  }
  const res = await fetch(
    `https://api.github.com/repos/${owner}/${repo}/commits?${params.toString()}`,
    {
      cache: "force-cache",
      ...options,
      headers
    }
  );
  if (!res.ok)
    throw new Error(
      `Failed to fetch last edit time from Git ${await res.text()}`
    );
  const data = await res.json();
  if (data.length === 0) return null;
  return new Date(data[0].commit.committer.date);
}

// src/server/metadata.ts
function createMetadataImage(options) {
  const { filename = "image.png", imageRoute = "/docs-og" } = options;
  function getImageMeta(slugs) {
    return {
      alt: "Banner",
      url: `/${[...imageRoute.split("/"), ...slugs, filename].filter((v) => v.length > 0).join("/")}`,
      width: 1200,
      height: 630
    };
  }
  return {
    getImageMeta,
    withImage(slugs, data) {
      const imageData = getImageMeta(slugs);
      return {
        ...data,
        openGraph: {
          images: imageData,
          ...data?.openGraph
        },
        twitter: {
          images: imageData,
          card: "summary_large_image",
          ...data?.twitter
        }
      };
    },
    generateParams() {
      return options.source.generateParams().map((params) => ({
        ...params,
        slug: [...params.slug, filename]
      }));
    },
    createAPI(handler) {
      return async (req, args) => {
        const params = await args.params;
        if (!params || !("slug" in params) || params.slug === void 0)
          throw new Error(`Invalid params: ${JSON.stringify(params)}`);
        const lang = "lang" in params && typeof params.lang === "string" ? params.lang : void 0;
        const input = {
          slug: Array.isArray(params.slug) ? params.slug : [params.slug],
          lang
        };
        const page = options.source.getPage(
          input.slug.slice(0, -1),
          //remove filename
          lang
        );
        if (!page)
          return new Response(null, {
            status: 404
          });
        return handler(page, req, { params: input });
      };
    }
  };
}
export {
  page_tree_exports as PageTree,
  createMetadataImage,
  findNeighbour,
  flattenTree,
  getGithubLastEdit,
  getPageTreePeers,
  getPageTreeRoots,
  getTableOfContents,
  separatePageTree
};
