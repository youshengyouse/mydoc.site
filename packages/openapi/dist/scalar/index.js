import { jsx as _jsx } from "react/jsx-runtime";
import { lazy } from 'react';
const Client = lazy(() => import('./client.js'));
export function APIPlayground({ path, method, ctx, }) {
    return (_jsx(Client, { method: method.method, path: path, spec: ctx.schema.downloaded }));
}
