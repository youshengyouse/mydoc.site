// src/components/index.tsx
import { cva } from "class-variance-authority";
import { cn } from "fumadocs-ui/utils/cn";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from "fumadocs-ui/components/ui/collapsible";
import { buttonVariants } from "fumadocs-ui/components/ui/button";

// ../../node_modules/.pnpm/lucide-react@0.540.0_react@19.1.1/node_modules/lucide-react/dist/esm/createLucideIcon.js
import { forwardRef as forwardRef2, createElement as createElement2 } from "react";

// ../../node_modules/.pnpm/lucide-react@0.540.0_react@19.1.1/node_modules/lucide-react/dist/esm/shared/src/utils.js
var toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
var toCamelCase = (string) => string.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (match, p1, p2) => p2 ? p2.toUpperCase() : p1.toLowerCase()
);
var toPascalCase = (string) => {
  const camelCase = toCamelCase(string);
  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
var mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();
var hasA11yProp = (props) => {
  for (const prop in props) {
    if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
      return true;
    }
  }
};

// ../../node_modules/.pnpm/lucide-react@0.540.0_react@19.1.1/node_modules/lucide-react/dist/esm/Icon.js
import { forwardRef, createElement } from "react";

// ../../node_modules/.pnpm/lucide-react@0.540.0_react@19.1.1/node_modules/lucide-react/dist/esm/defaultAttributes.js
var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};

// ../../node_modules/.pnpm/lucide-react@0.540.0_react@19.1.1/node_modules/lucide-react/dist/esm/Icon.js
var Icon = forwardRef(
  ({
    color = "currentColor",
    size = 24,
    strokeWidth = 2,
    absoluteStrokeWidth,
    className = "",
    children,
    iconNode,
    ...rest
  }, ref) => createElement(
    "svg",
    {
      ref,
      ...defaultAttributes,
      width: size,
      height: size,
      stroke: color,
      strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
      className: mergeClasses("lucide", className),
      ...!children && !hasA11yProp(rest) && { "aria-hidden": "true" },
      ...rest
    },
    [
      ...iconNode.map(([tag, attrs]) => createElement(tag, attrs)),
      ...Array.isArray(children) ? children : [children]
    ]
  )
);

// ../../node_modules/.pnpm/lucide-react@0.540.0_react@19.1.1/node_modules/lucide-react/dist/esm/createLucideIcon.js
var createLucideIcon = (iconName, iconNode) => {
  const Component = forwardRef2(
    ({ className, ...props }, ref) => createElement2(Icon, {
      ref,
      iconNode,
      className: mergeClasses(
        `lucide-${toKebabCase(toPascalCase(iconName))}`,
        `lucide-${iconName}`,
        className
      ),
      ...props
    })
  );
  Component.displayName = toPascalCase(iconName);
  return Component;
};

// ../../node_modules/.pnpm/lucide-react@0.540.0_react@19.1.1/node_modules/lucide-react/dist/esm/icons/chevron-right.js
var __iconNode = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]];
var ChevronRight = createLucideIcon("chevron-right", __iconNode);

// src/components/index.tsx
import { highlight } from "fumadocs-core/highlight";
import { Tab, Tabs } from "fumadocs-ui/components/tabs";
import { jsx, jsxs } from "react/jsx-runtime";
var cardVariants = cva("bg-fd-card rounded-lg text-sm my-6 p-3 border");
var badgeVariants = cva(
  "text-xs font-medium border p-1 rounded-lg not-prose",
  {
    variants: {
      color: {
        func: "bg-fdpy-func/10 text-fdpy-func border-fdpy-func/50",
        attribute: "bg-fdpy-attribute/10 text-fdpy-attribute border-fdpy-attribute/50",
        class: "bg-fdpy-class/10 text-fdpy-class border-fdpy-class/50",
        primary: "bg-fd-primary/10 text-fd-primary border-fd-primary/10"
      }
    }
  }
);
function PyFunction(props) {
  return /* @__PURE__ */ jsxs("figure", { className: cn(cardVariants()), children: [
    /* @__PURE__ */ jsxs("div", { className: "flex gap-2 items-center font-mono flex-wrap mb-4", children: [
      /* @__PURE__ */ jsx("code", { className: cn(badgeVariants({ color: "func" })), children: "func" }),
      props.name,
      /* @__PURE__ */ jsx(
        InlineCode,
        {
          lang: "python",
          className: "not-prose text-xs text-fd-muted-foreground",
          code: props.type
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: "text-fd-muted-foreground prose-no-margin", children: props.children })
  ] });
}
function PyAttribute(props) {
  return /* @__PURE__ */ jsxs("figure", { className: cn(cardVariants()), children: [
    /* @__PURE__ */ jsxs("div", { className: "flex gap-2 items-center flex-wrap font-mono mb-4", children: [
      /* @__PURE__ */ jsx("code", { className: cn(badgeVariants({ color: "attribute" })), children: "attribute" }),
      props.name,
      props.type && /* @__PURE__ */ jsx(
        InlineCode,
        {
          lang: "python",
          className: "not-prose text-fd-muted-foreground text-xs",
          code: props.type
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "text-fd-muted-foreground prose-no-margin", children: [
      props.value && /* @__PURE__ */ jsx(
        InlineCode,
        {
          lang: "python",
          className: "not-prose text-xs",
          code: `= ${props.value}`
        }
      ),
      props.children
    ] })
  ] });
}
function PyParameter(props) {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      "data-parameter": "",
      className: "bg-fd-secondary rounded-lg text-sm p-3 border shadow-md rounded-none first:rounded-t-lg last:rounded-b-lg",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-2 items-center font-mono text-fd-foreground", children: [
          /* @__PURE__ */ jsx("code", { className: cn(badgeVariants({ color: "primary" })), children: "param" }),
          props.name,
          props.type && /* @__PURE__ */ jsx(
            InlineCode,
            {
              lang: "python",
              className: "ms-auto text-fd-muted-foreground not-prose text-xs",
              code: props.type
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "text-fd-muted-foreground prose-no-margin mt-4 empty:hidden", children: [
          props.value ? /* @__PURE__ */ jsx(
            InlineCode,
            {
              lang: "python",
              code: `= ${props.value}`,
              className: "not-prose text-xs"
            }
          ) : null,
          props.children
        ] })
      ]
    }
  );
}
function PySourceCode({ children }) {
  return /* @__PURE__ */ jsxs(Collapsible, { className: "my-6", children: [
    /* @__PURE__ */ jsxs(
      CollapsibleTrigger,
      {
        className: cn(
          buttonVariants({
            color: "secondary",
            size: "sm",
            className: "group"
          })
        ),
        children: [
          "Source Code",
          /* @__PURE__ */ jsx(ChevronRight, { className: "size-3.5 text-fd-muted-foreground group-data-[state=open]:rotate-90" })
        ]
      }
    ),
    /* @__PURE__ */ jsx(CollapsibleContent, { className: "prose-no-margin", children })
  ] });
}
function PyFunctionReturn({
  type,
  children
}) {
  return /* @__PURE__ */ jsxs("div", { className: "border bg-fd-secondary rounded-lg p-3 mt-2", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-2 not-prose", children: [
      /* @__PURE__ */ jsx("p", { className: "font-medium me-auto", children: "Returns" }),
      /* @__PURE__ */ jsx(InlineCode, { lang: "python", code: type ?? "None", className: "text-xs" })
    ] }),
    children
  ] });
}
async function InlineCode({
  lang,
  code,
  ...rest
}) {
  return highlight(code, {
    lang,
    components: {
      pre: (props) => /* @__PURE__ */ jsx(
        "span",
        {
          ...props,
          ...rest,
          className: cn(rest.className, props.className)
        }
      )
    }
  });
}
export {
  PyAttribute,
  PyFunction,
  PyFunctionReturn,
  PyParameter,
  PySourceCode,
  Tab,
  Tabs
};
/*! Bundled license information:

lucide-react/dist/esm/shared/src/utils.js:
lucide-react/dist/esm/defaultAttributes.js:
lucide-react/dist/esm/Icon.js:
lucide-react/dist/esm/createLucideIcon.js:
lucide-react/dist/esm/icons/chevron-right.js:
lucide-react/dist/esm/lucide-react.js:
  (**
   * @license lucide-react v0.540.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)
*/
