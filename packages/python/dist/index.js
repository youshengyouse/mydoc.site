// src/convert.ts
function convert(mod, options = {}) {
  const files = [];
  const content = [];
  const tabs = [];
  const tabContents = [];
  if (mod.description) content.push(encodeText(mod.description));
  for (const attr of mod.attributes) {
    content.push(convertAttribute(attr));
  }
  if (Object.keys(mod.classes).length > 0) {
    tabs.push("Class");
    const lines = [];
    for (const cls of Object.values(mod.classes)) {
      files.push(...convertClass(cls));
      lines.push(
        element("Card", {
          title: cls.name,
          href: getHref(cls, options)
        })
      );
    }
    tabContents.push(element("Cards", void 0, lines.join("\n")));
  }
  if (Object.keys(mod.functions).length > 0) {
    tabs.push("Functions");
    const lines = [];
    for (const func of Object.values(mod.functions)) {
      lines.push(convertFunction(func));
    }
    tabContents.push(lines.join("\n"));
  }
  if (Object.keys(mod.modules).length > 0) {
    tabs.push("Modules");
    const lines = [];
    for (const submod of Object.values(mod.modules)) {
      files.push(...convert(submod, options));
      lines.push(
        element("Card", {
          href: getHref(submod, options),
          title: submod.name
        })
      );
    }
    tabContents.push(element("Cards", void 0, lines.join("\n")));
  }
  if (tabs.length > 0) {
    content.push(
      element(
        "Tabs",
        {
          items: tabs
        },
        tabContents.map((content2, i) => element("Tab", { value: tabs[i] }, content2)).join("\n")
      )
    );
  }
  files.push({
    path: [...mod.path.split("."), "index.mdx"].join("/"),
    frontmatter: {
      title: mod.name
    },
    content: content.join("\n\n")
  });
  return files;
}
function convertClass(cls) {
  const content = [];
  const files = [];
  if (cls.description) content.push(encodeText(cls.description));
  if (cls.attributes.length > 0) {
    content.push(heading(2, "Attributes"));
  }
  for (const attr of cls.attributes) {
    content.push(convertAttribute(attr));
  }
  if (Object.keys(cls.functions).length > 0) {
    content.push(heading(2, "Functions"));
    for (const func of Object.values(cls.functions)) {
      content.push(convertFunction(func));
    }
  }
  files.push({
    path: cls.path.replaceAll(".", "/") + ".mdx",
    frontmatter: {
      title: cls.name
    },
    content: content.join("\n\n")
  });
  return files;
}
function convertFunction(func) {
  return element(
    "PyFunction",
    {
      name: func.name,
      type: func.signature
    },
    [
      func.description ? encodeText(func.description) : null,
      convertDoc(func.docstring ?? []),
      func.source.length > 0 ? element("PySourceCode", void 0, codeblock("python", func.source)) : null,
      func.parameters.length > 0 ? element(
        "div",
        void 0,
        func.parameters.map(convertParameter).join("\n")
      ) : null,
      element(
        "PyFunctionReturn",
        {
          type: func.returns.annotation
        },
        [func.returns.description ? encodeText(func.returns.description) : null].filter(Boolean).join("\n")
      )
    ].filter(Boolean).join("\n\n")
  );
}
function convertParameter(param) {
  const lines = [];
  if (param.description)
    lines.push(
      typeof param.description === "string" ? param.description : convertDoc(param.description)
    );
  return element(
    "PyParameter",
    { name: param.name, type: param.annotation, value: param.value },
    lines.join("\n")
  );
}
function convertAttribute(attribute) {
  return element(
    "PyAttribute",
    {
      name: attribute.name,
      type: attribute.annotation,
      value: attribute.value
    },
    [attribute.description ? convertDoc(attribute.description) : null].filter(Boolean).join("\n")
  );
}
function convertDoc(docstring) {
  const lines = [];
  for (const item of docstring) {
    if (item.kind === "text") {
      lines.push(encodeText(item.value));
    }
    if (item.kind === "admonition") {
      const value = item.value;
      lines.push(
        element(
          "Callout",
          {
            title: item.title,
            type: value.annotation
          },
          encodeText(item.value.description)
        )
      );
    }
    if (item.kind === "code") {
      console.log(item.value);
    }
  }
  return lines.join("\n\n");
}
function heading(depth, content) {
  return ["#".repeat(depth), content].join(" ");
}
function codeblock(meta, code) {
  const delimit = "```";
  return `${delimit}${meta}
${code.replaceAll(delimit, "\\" + delimit)}
${delimit}`;
}
function element(name, props = {}, children) {
  const propsStr = [];
  for (const key in props) {
    propsStr.push(`${key}={${JSON.stringify(props[key])}}`);
  }
  if (children)
    return `<${name} ${propsStr.join(" ")}>

${children}

</${name}>`;
  return `<${name} ${propsStr.join(" ")} />`;
}
function getHref(ele, options) {
  const { baseUrl = "/" } = options;
  return "/" + [...baseUrl.split("/"), ...ele.path.split(".")].filter((v) => v.length > 0).join("/");
}
function encodeText(v) {
  return v.replaceAll("<", "\\<").replaceAll("{", "\\{").replaceAll("}", "\\}");
}

// src/write.ts
import * as fs from "fs/promises";
import { dump } from "js-yaml";
import * as path from "path";
async function write(output, options = {}) {
  await Promise.all(
    output.map(async (file) => {
      const filePath = path.resolve(
        options.outDir ?? "./",
        file.path.split("/").slice(1).join("/")
      );
      console.log("write", filePath);
      await fs.mkdir(path.dirname(filePath), { recursive: true });
      await fs.writeFile(
        filePath,
        Object.keys(file.frontmatter).length > 0 ? `${frontmatter(file.frontmatter)}

${file.content}` : file.content
      );
    })
  );
}
function frontmatter(obj) {
  return `---
${dump(obj).trim()}
---`;
}
export {
  convert,
  frontmatter,
  write
};
