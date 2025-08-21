var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/utils.ts
function createElement(name, attributes, children) {
  const element = {
    type: "mdxJsxFlowElement",
    name,
    attributes
  };
  if (children) element.children = children;
  return element;
}
function expressionToAttribute(key, value) {
  return {
    type: "mdxJsxAttribute",
    name: key,
    value: {
      type: "mdxJsxAttributeValueExpression",
      value: "",
      data: {
        estree: {
          type: "Program",
          body: [
            {
              type: "ExpressionStatement",
              expression: value
            }
          ]
        }
      }
    }
  };
}

export {
  __async,
  createElement,
  expressionToAttribute
};
