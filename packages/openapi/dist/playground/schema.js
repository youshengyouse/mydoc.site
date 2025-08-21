import { jsx as _jsx } from "react/jsx-runtime";
import { Ajv2020 } from 'ajv/dist/2020';
import { createContext, useContext, useMemo, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { useEffectEvent } from 'fumadocs-core/utils/use-effect-event';
import { getDefaultValue } from '../playground/get-default-values.js';
const SchemaContext = createContext(undefined);
export const anyFields = {
    type: ['string', 'number', 'boolean', 'array', 'object'],
    items: true,
    additionalProperties: true,
};
export function SchemaProvider({ references, fieldInfoMap, children, }) {
    const ajv = useMemo(() => new Ajv2020({
        strict: false,
        validateSchema: false,
        validateFormats: false,
        schemas: references,
    }), [references]);
    return (_jsx(SchemaContext.Provider, { value: useMemo(() => ({ references, fieldInfoMap, ajv }), [fieldInfoMap, references, ajv]), children: children }));
}
/**
 * A hook to store dynamic info of a field, such as selected schema of `oneOf`.
 *
 * @param fieldName - field name of form.
 * @param schema - The JSON Schema to generate initial values.
 * @param depth - The depth to avoid duplicated field name with same schema (e.g. nested `oneOf`).
 */
export function useFieldInfo(fieldName, schema, depth) {
    const { fieldInfoMap, ajv } = useContext(SchemaContext);
    const form = useFormContext();
    const keyName = `${fieldName}:${depth}`;
    const value = form.getValues(fieldName);
    const [info, setInfo] = useState(() => {
        return fieldInfoMap.get(keyName) ?? init();
    });
    fieldInfoMap.set(keyName, info);
    /**
     * We automatically merge `allOf` | `anyOf` if all members are objects, but it's also possible for them to behave same as a union (`oneOf`).
     */
    function isUnion(anyOrAllOf) {
        return anyOrAllOf.every((item) => {
            if (typeof item === 'boolean')
                return true;
            const u = item.anyOf || item.allOf;
            return item.type !== 'object' && (!u || isUnion(u));
        });
    }
    function getUnion() {
        if (schema.anyOf && isUnion(schema.anyOf)) {
            return [schema.anyOf, 'anyOf'];
        }
        if (schema.allOf && isUnion(schema.allOf)) {
            return [schema.allOf, 'allOf'];
        }
        if (schema.oneOf)
            return [schema.oneOf, 'oneOf'];
    }
    function init() {
        const union = getUnion();
        if (union) {
            const [members, field] = union;
            let oneOf = members.findIndex((item) => ajv.validate(item, value));
            if (oneOf === -1)
                oneOf = 0;
            return {
                oneOf,
                unionField: field,
            };
        }
        if (Array.isArray(schema.type)) {
            const types = schema.type;
            return {
                selectedType: types.find((type) => {
                    schema.type = type;
                    const match = ajv.validate(schema, value);
                    schema.type = types;
                    return match;
                }) ?? types[0],
                oneOf: -1,
            };
        }
        return { oneOf: -1 };
    }
    return {
        info,
        updateInfo: useEffectEvent((value) => {
            const updated = {
                ...info,
                ...value,
            };
            if (updated.oneOf === info.oneOf &&
                updated.selectedType === info.selectedType)
                return;
            setInfo(updated);
            let valueSchema = schema;
            if (updated.unionField) {
                valueSchema = schema[updated.unionField][updated.oneOf];
            }
            else if (updated.selectedType) {
                valueSchema = { ...schema, type: updated.selectedType };
            }
            form.setValue(fieldName, getDefaultValue(valueSchema));
        }),
    };
}
/**
 * Resolve `$ref` in the schema, **not recursive**.
 */
export function useResolvedSchema(schema) {
    const { references } = useContext(SchemaContext);
    return useMemo(() => {
        if (typeof schema === 'boolean')
            return anyFields;
        if (schema.$ref)
            return fallbackAny(references[schema.$ref]);
        return schema;
    }, [references, schema]);
}
export function fallbackAny(schema) {
    return typeof schema === 'boolean' ? anyFields : schema;
}
