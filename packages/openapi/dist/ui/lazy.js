'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { lazy } from 'react';
// Waku wraps all export functions of a "use client" file in `React.lazy`, but `lazy(lazy(() => ...))` causes error.
// we wrap another layer of component such that it is valid
// TODO: perhaps we can remove it once Waku migrated to vite-rsc
function wrap(V) {
    return function wrapper(props) {
        return _jsx(V, { ...props });
    };
}
export const CodeExampleProvider = wrap(lazy(() => import('./contexts/code-example.js').then((mod) => ({
    default: mod.CodeExampleProvider,
}))));
export const CodeExample = wrap(lazy(() => import('./contexts/code-example.js').then((mod) => ({
    default: mod.CodeExample,
}))));
export const CodeExampleSelector = wrap(lazy(() => import('./contexts/code-example.js').then((mod) => ({
    default: mod.CodeExampleSelector,
}))));
export const ClientLazy = wrap(lazy(() => import('../playground/client.js')));
export const ApiProvider = wrap(lazy(() => import('./contexts/api.js').then((mod) => ({ default: mod.ApiProvider }))));
