// src/render.ts
import jsxRuntimeDefault from "react/jsx-runtime";
async function executeMdx(compiled, options = {}) {
  const fullScope = {
    ...options.scope,
    opts: {
      ...options.scope?.opts,
      ...options.jsxRuntime ?? jsxRuntimeDefault,
      baseUrl: options.baseUrl
    }
  };
  const values = Object.values(fullScope);
  const params = Object.keys(fullScope);
  params.push(`return (async () => { ${compiled} })()`);
  const hydrateFn = new Function(...params);
  return await hydrateFn.apply(hydrateFn, values);
}
function executeMdxSync(compiled, options = {}) {
  const fullScope = {
    ...options.scope,
    opts: {
      ...options.scope?.opts,
      ...options.jsxRuntime ?? jsxRuntimeDefault,
      baseUrl: options.baseUrl
    }
  };
  const values = Object.values(fullScope);
  const params = Object.keys(fullScope);
  params.push(`return (() => { ${compiled} })()`);
  const hydrateFn = new Function(...params);
  return hydrateFn.apply(hydrateFn, values);
}

export {
  executeMdx,
  executeMdxSync
};
