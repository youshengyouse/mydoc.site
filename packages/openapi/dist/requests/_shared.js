const FormDelimiter = {
    spaceDelimited: ' ',
    pipeDelimited: '|',
};
const PathPrefix = {
    label: '.',
    matrix: ';',
};
export function ident(code, tab = 1) {
    return code
        .split('\n')
        .map((v) => '  '.repeat(tab) + v)
        .join('\n');
}
export function encodeRequestData(from, adapters, parameters) {
    function getMediaEncoder(field) {
        if (!field.content)
            return;
        for (const k in field.content) {
            if (k in adapters) {
                return (v) => String(adapters[k].encode({ body: v }));
            }
        }
    }
    function writeObject(parentKey, value, deep, output) {
        for (const k in value) {
            const prop = value[k];
            if (prop == null)
                continue;
            const key = deep ? `${parentKey}[${k}]` : k;
            if (!deep || typeof prop !== 'object') {
                output[key] = {
                    value: String(prop),
                };
                continue;
            }
            writeObject(key, value, deep, output);
        }
    }
    function write(key, value, output = {}, field) {
        if (!field) {
            output[key] = { value: String(value) };
            return output;
        }
        const encoder = getMediaEncoder(field);
        if (encoder) {
            output[key] = { value: encoder(value) };
            return output;
        }
        const explode = field.explode ?? true;
        let prefix = '';
        let sep = ',';
        if (field.in === 'path') {
            const style = field.style ?? 'simple';
            if (style in PathPrefix) {
                prefix = PathPrefix[style];
                if (explode)
                    sep = prefix;
            }
        }
        if (Array.isArray(value)) {
            // header & cookie doesn't support explode for array values
            if (explode && field.in !== 'header' && field.in !== 'cookie') {
                output[key] = {
                    value: prefix + value.map(String),
                };
                return output;
            }
            if (field.in === 'query') {
                const style = field.style ?? 'form';
                if (style in FormDelimiter)
                    sep = FormDelimiter[style];
            }
            output[key] = {
                value: prefix + value.map(String).join(sep),
            };
            return output;
        }
        if (typeof value === 'object' && value) {
            // header & path creates key-value pairs
            if (explode && (field.in === 'header' || field.in === 'path')) {
                output[key] = {
                    value: prefix +
                        Object.entries(value)
                            .map(([k, v]) => `${k}=${v}`)
                            .join(sep),
                };
                return output;
            }
            if (explode || field.style === 'deepObject') {
                writeObject(key, value, field.style === 'deepObject', output);
                return output;
            }
            output[key] = {
                value: prefix + Object.entries(value).flat().join(sep),
            };
            return output;
        }
        output[key] = {
            value: prefix + String(value),
        };
        return output;
    }
    const result = {
        method: from.method,
        body: from.body,
        bodyMediaType: from.bodyMediaType,
    };
    for (const type of ['cookie', 'query', 'header', 'path']) {
        const out = {};
        for (const k in from[type]) {
            const value = from[type][k];
            if (value == null)
                continue;
            const field = parameters.find((p) => p.name === k && p.in === type);
            write(k, value, out, field);
        }
        result[type] = out;
    }
    return result;
}
