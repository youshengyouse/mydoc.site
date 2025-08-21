'use client';
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Fragment, lazy, useEffect, useMemo, useState, } from 'react';
import { Controller, FormProvider, useForm, useFormContext, } from 'react-hook-form';
import { useApiContext, useServerSelectContext } from '../ui/contexts/api.js';
import { FieldInput, FieldSet, JsonInput, ObjectInput } from './inputs.js';
import { getStatusInfo } from './status-info.js';
import { joinURL, resolveRequestData, resolveServerUrl, withBase, } from '../utils/url.js';
import { DynamicCodeBlock } from 'fumadocs-ui/components/dynamic-codeblock';
import { MethodLabel } from '../ui/components/method-label.js';
import { useQuery } from '../utils/use-query.js';
import { Collapsible, CollapsibleContent, CollapsibleTrigger, } from 'fumadocs-ui/components/ui/collapsible';
import { ChevronDown, LoaderCircle } from '../icons.js';
import { encodeRequestData } from '../requests/_shared.js';
import { buttonVariants } from 'fumadocs-ui/components/ui/button';
import { cn } from 'fumadocs-ui/utils/cn';
import { SchemaProvider, useResolvedSchema, } from '../playground/schema.js';
import { useRequestDataUpdater, useRequestInitialData, } from '../ui/contexts/code-example.js';
import { useEffectEvent } from 'fumadocs-core/utils/use-effect-event';
import { useOnChange } from 'fumadocs-core/utils/use-on-change';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, } from '../ui/components/select.js';
import { labelVariants } from '../ui/components/input.js';
const AuthPrefix = '__fumadocs_auth';
const ServerSelect = lazy(() => import('../ui/server-select.js'));
const OauthDialog = lazy(() => import('./auth/oauth-dialog.js').then((mod) => ({
    default: mod.OauthDialog,
})));
const OauthDialogTrigger = lazy(() => import('./auth/oauth-dialog.js').then((mod) => ({
    default: mod.OauthDialogTrigger,
})));
export default function Client({ route, method = 'GET', securities, parameters = [], body, fields, references, proxyUrl, components: { ResultDisplay = DefaultResultDisplay } = {}, ...rest }) {
    const { server } = useServerSelectContext();
    const requestData = useRequestInitialData();
    const updater = useRequestDataUpdater();
    const fieldInfoMap = useMemo(() => new Map(), []);
    const { mediaAdapters } = useApiContext();
    const [securityId, setSecurityId] = useState(0);
    const { inputs, mapInputs } = useAuthInputs(securities[securityId]);
    const defaultValues = useMemo(() => ({
        path: requestData.path,
        query: requestData.query,
        header: requestData.header,
        body: requestData.body,
        cookie: requestData.cookie,
    }), [requestData]);
    const form = useForm({
        defaultValues,
    });
    const testQuery = useQuery(async (input) => {
        const fetcher = await import('./fetcher.js').then((mod) => mod.createBrowserFetcher(mediaAdapters));
        input._encoded ?? (input._encoded = encodeRequestData({ ...mapInputs(input), method, bodyMediaType: body?.mediaType }, mediaAdapters, parameters));
        return fetcher.fetch(joinURL(withBase(server ? resolveServerUrl(server.url, server.variables) : '/', window.location.origin), resolveRequestData(route, input._encoded)), {
            proxyUrl,
            ...input._encoded,
        });
    });
    function initAuthValues(values, inputs) {
        for (const item of inputs) {
            manipulateValues(values, item.fieldName, () => {
                const stored = localStorage.getItem(AuthPrefix + item.original.id);
                if (stored) {
                    const parsed = JSON.parse(stored);
                    if (typeof parsed === typeof item.defaultValue)
                        return parsed;
                }
                return item.defaultValue;
            });
        }
        return values;
    }
    useOnChange(defaultValues, () => {
        fieldInfoMap.clear();
        form.reset(initAuthValues(defaultValues, inputs));
    });
    useOnChange(inputs, (current, previous) => {
        form.reset((values) => {
            for (const item of previous) {
                if (current.some(({ original }) => original.id === item.original.id)) {
                    continue;
                }
                manipulateValues(values, item.fieldName, () => undefined);
            }
            return initAuthValues(values, current);
        });
    });
    const onUpdateDebounced = useEffectEvent((values) => {
        for (const item of inputs) {
            const value = item.fieldName
                .split('.')
                .reduce((v, seg) => v[seg], values);
            if (value) {
                localStorage.setItem(AuthPrefix + item.original.id, JSON.stringify(value));
            }
        }
        const data = {
            ...mapInputs(values),
            method,
            bodyMediaType: body?.mediaType,
        };
        values._encoded ?? (values._encoded = encodeRequestData(data, mediaAdapters, parameters));
        updater.setData(data, values._encoded);
    });
    useEffect(() => {
        let timer = null;
        const subscription = form.subscribe({
            formState: {
                values: true,
            },
            callback({ values }) {
                // remove cached encoded request data
                delete values._encoded;
                if (timer)
                    window.clearTimeout(timer);
                timer = window.setTimeout(() => onUpdateDebounced(values), timer ? 400 : 0);
            },
        });
        form.reset((values) => initAuthValues(values, inputs));
        return () => subscription();
        // eslint-disable-next-line react-hooks/exhaustive-deps -- mounted once only
    }, []);
    const onSubmit = form.handleSubmit((value) => {
        testQuery.start(mapInputs(value));
    });
    return (_jsx(FormProvider, { ...form, children: _jsx(SchemaProvider, { fieldInfoMap: fieldInfoMap, references: references, children: _jsxs("form", { ...rest, className: cn('not-prose flex flex-col rounded-xl border shadow-md overflow-hidden bg-fd-card text-fd-card-foreground', rest.className), onSubmit: onSubmit, children: [_jsx(ServerSelect, {}), _jsxs("div", { className: "flex flex-row items-center gap-2 text-sm p-3 pb-0", children: [_jsx(MethodLabel, { children: method }), _jsx(Route, { route: route, className: "flex-1" }), _jsx("button", { type: "submit", className: cn(buttonVariants({ color: 'primary', size: 'sm' }), 'px-3 py-1.5'), disabled: testQuery.isLoading, children: testQuery.isLoading ? (_jsx(LoaderCircle, { className: "size-4 animate-spin" })) : ('Send') })] }), securities.length > 0 && (_jsx(SecurityTabs, { securities: securities, securityId: securityId, setSecurityId: setSecurityId, children: inputs.map((input) => (_jsx(Fragment, { children: input.children }, input.fieldName))) })), _jsx(FormBody, { body: body, fields: fields, parameters: parameters }), testQuery.data ? _jsx(ResultDisplay, { data: testQuery.data }) : null] }) }) }));
}
function SecurityTabs({ securities, setSecurityId, securityId, children, }) {
    const [open, setOpen] = useState(false);
    const form = useFormContext();
    const result = (_jsxs(CollapsiblePanel, { title: "Authorization", children: [_jsxs(Select, { value: securityId.toString(), onValueChange: (v) => setSecurityId(Number(v)), children: [_jsx(SelectTrigger, { children: _jsx(SelectValue, {}) }), _jsx(SelectContent, { children: securities.map((security, i) => (_jsx(SelectItem, { value: i.toString(), children: security.map((item) => (_jsxs("div", { className: "max-w-[600px]", children: [_jsx("p", { className: "font-mono font-medium", children: item.id }), _jsx("p", { className: "text-fd-muted-foreground whitespace-pre-wrap", children: item.description })] }, item.id))) }, i))) })] }), children] }));
    for (let i = 0; i < securities.length; i++) {
        const security = securities[i];
        for (const item of security) {
            if (item.type === 'oauth2') {
                return (_jsx(OauthDialog, { scheme: item, scopes: item.scopes, open: open, setOpen: (v) => {
                        setOpen(v);
                        if (v) {
                            setSecurityId(i);
                        }
                    }, setToken: (token) => form.setValue('header.Authorization', token), children: result }));
            }
        }
    }
    return result;
}
const ParamTypes = ['path', 'header', 'cookie', 'query'];
function FormBody({ parameters = [], fields = {}, body, }) {
    const panels = useMemo(() => {
        return ParamTypes.map((type) => {
            const items = parameters.filter((v) => v.in === type);
            if (items.length === 0)
                return;
            return (_jsx(CollapsiblePanel, { title: {
                    header: 'Header',
                    cookie: 'Cookies',
                    query: 'Query',
                    path: 'Path',
                }[type], children: items.map((field) => {
                    const fieldName = `${type}.${field.name}`;
                    const schema = (field.content
                        ? field.content[Object.keys(field.content)[0]].schema
                        : field.schema);
                    if (fields?.parameter) {
                        return renderCustomField(fieldName, schema, fields.parameter, field.name);
                    }
                    return (_jsx(FieldSet, { name: field.name, fieldName: fieldName, field: schema }, fieldName));
                }) }, type));
        });
    }, [fields.parameter, parameters]);
    return (_jsxs(_Fragment, { children: [panels, body && (_jsx(CollapsiblePanel, { title: "Body", children: fields.body ? (renderCustomField('body', body.schema, fields.body)) : (_jsx(BodyInput, { field: body.schema })) }))] }));
}
function BodyInput({ field: _field }) {
    const field = useResolvedSchema(_field);
    const [isJson, setIsJson] = useState(false);
    if (field.format === 'binary')
        return _jsx(FieldSet, { field: field, fieldName: "body" });
    if (isJson)
        return (_jsxs(_Fragment, { children: [_jsx("button", { className: cn(buttonVariants({
                        color: 'secondary',
                        size: 'sm',
                        className: 'w-fit font-mono p-2',
                    })), onClick: () => setIsJson(false), type: "button", children: "Close JSON Editor" }), _jsx(JsonInput, { fieldName: "body" })] }));
    return (_jsx(FieldSet, { field: field, fieldName: "body", collapsible: false, name: _jsx("button", { type: "button", className: cn(buttonVariants({
                color: 'secondary',
                size: 'sm',
                className: 'p-2',
            })), onClick: () => setIsJson(true), children: "Open JSON Editor" }) }));
}
/**
 * manipulate values without mutating the original object
 *
 * @returns a new manipulated object
 */
function manipulateValues(values, fieldName, update, clone = false) {
    const root = clone ? { ...values } : values;
    let current = root;
    const segments = fieldName.split('.');
    for (let i = 0; i < segments.length; i++) {
        const segment = segments[i];
        if (i !== segments.length - 1) {
            let v = current[segment];
            if (clone)
                v = { ...v };
            current[segment] = v;
            current = v;
            continue;
        }
        const updated = update(current[segment]);
        if (updated === undefined) {
            delete current[segment];
        }
        else {
            current[segment] = updated;
        }
    }
    return root;
}
function useAuthInputs(securities) {
    const inputs = useMemo(() => {
        const result = [];
        if (!securities)
            return result;
        for (const security of securities) {
            if (security.type === 'http' && security.scheme === 'basic') {
                const fieldName = `header.Authorization`;
                result.push({
                    fieldName,
                    original: security,
                    defaultValue: {
                        username: '',
                        password: '',
                    },
                    mapOutput(out) {
                        if (out && typeof out === 'object') {
                            return `Basic ${btoa(`${'username' in out ? out.username : ''}:${'password' in out ? out.password : ''}`)}`;
                        }
                        return out;
                    },
                    children: (_jsx(ObjectInput, { field: {
                            type: 'object',
                            properties: {
                                username: {
                                    type: 'string',
                                },
                                password: {
                                    type: 'string',
                                },
                            },
                            required: ['username', 'password'],
                        }, fieldName: fieldName })),
                });
            }
            else if (security.type === 'oauth2') {
                const fieldName = 'header.Authorization';
                result.push({
                    fieldName: fieldName,
                    original: security,
                    defaultValue: 'Bearer ',
                    children: (_jsxs("fieldset", { className: "flex flex-col gap-2", children: [_jsx("label", { htmlFor: fieldName, className: cn(labelVariants()), children: "Access Token" }), _jsxs("div", { className: "flex gap-2", children: [_jsx(FieldInput, { fieldName: fieldName, isRequired: true, field: {
                                            type: 'string',
                                        }, className: "flex-1" }), _jsx(OauthDialogTrigger, { type: "button", className: cn(buttonVariants({
                                            size: 'sm',
                                            color: 'secondary',
                                        })), children: "Authorize" })] })] })),
                });
            }
            else if (security.type === 'http') {
                const fieldName = 'header.Authorization';
                result.push({
                    fieldName: fieldName,
                    original: security,
                    defaultValue: 'Bearer ',
                    children: (_jsx(FieldSet, { name: "Authorization (header)", fieldName: fieldName, isRequired: true, field: {
                            type: 'string',
                        } })),
                });
            }
            else if (security.type === 'apiKey') {
                const fieldName = `${security.in}.${security.name}`;
                result.push({
                    fieldName,
                    defaultValue: '',
                    original: security,
                    children: (_jsx(FieldSet, { fieldName: fieldName, name: `${security.name} (${security.in})`, isRequired: true, field: {
                            type: 'string',
                        } })),
                });
            }
            else {
                const fieldName = 'header.Authorization';
                result.push({
                    fieldName,
                    defaultValue: '',
                    original: security,
                    children: (_jsxs(_Fragment, { children: [_jsx(FieldSet, { name: "Authorization (header)", isRequired: true, fieldName: fieldName, field: {
                                    type: 'string',
                                } }), _jsx("p", { className: "text-fd-muted-foreground text-xs", children: "OpenID Connect is not supported at the moment, you can still set an access token here." })] })),
                });
            }
        }
        return result;
    }, [securities]);
    const mapInputs = useEffectEvent((values) => {
        for (const item of inputs) {
            if (!item.mapOutput)
                continue;
            values = manipulateValues(values, item.fieldName, item.mapOutput, true);
        }
        return values;
    });
    return { inputs, mapInputs };
}
function renderCustomField(fieldName, info, field, key) {
    return (_jsx(Controller, { 
        // @ts-expect-error we use string here
        render: (props) => field.render({ ...props, info }), name: fieldName }, key));
}
function Route({ route, ...props }) {
    const segments = route.split('/').filter((part) => part.length > 0);
    return (_jsx("div", { ...props, className: cn('flex flex-row items-center gap-0.5 overflow-auto text-nowrap', props.className), children: segments.map((part, index) => (_jsxs(Fragment, { children: [_jsx("span", { className: "text-fd-muted-foreground", children: "/" }), part.startsWith('{') && part.endsWith('}') ? (_jsx("code", { className: "bg-fd-primary/10 text-fd-primary", children: part })) : (_jsx("code", { className: "text-fd-foreground", children: part }))] }, index))) }));
}
function DefaultResultDisplay({ data }) {
    const statusInfo = useMemo(() => getStatusInfo(data.status), [data.status]);
    const { shikiOptions } = useApiContext();
    return (_jsxs("div", { className: "flex flex-col gap-3 p-3", children: [_jsxs("div", { className: "inline-flex items-center gap-1.5 text-sm font-medium text-fd-foreground", children: [_jsx(statusInfo.icon, { className: cn('size-4', statusInfo.color) }), statusInfo.description] }), _jsx("p", { className: "text-sm text-fd-muted-foreground", children: data.status }), data.data ? (_jsx(DynamicCodeBlock, { lang: typeof data.data === 'string' && data.data.length > 50000
                    ? 'text'
                    : data.type, code: typeof data.data === 'string'
                    ? data.data
                    : JSON.stringify(data.data, null, 2), options: shikiOptions })) : null] }));
}
function CollapsiblePanel({ title, children, ...props }) {
    return (_jsxs(Collapsible, { ...props, className: "border-b last:border-b-0", children: [_jsxs(CollapsibleTrigger, { className: "group w-full flex items-center gap-2 p-3 text-sm font-medium", children: [title, _jsx(ChevronDown, { className: "ms-auto size-3.5 text-fd-muted-foreground group-data-[state=open]:rotate-180" })] }), _jsx(CollapsibleContent, { children: _jsx("div", { className: "flex flex-col gap-3 p-3 pt-1", children: children }) })] }));
}
