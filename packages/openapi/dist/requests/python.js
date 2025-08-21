'use client';
export const generator = (url, data, { mediaAdapters }) => {
    const headers = {};
    const params = [`"${data.method}"`, 'url'];
    let body;
    if (data.body && data.bodyMediaType && data.bodyMediaType in mediaAdapters) {
        headers['Content-Type'] = data.bodyMediaType;
        body = mediaAdapters[data.bodyMediaType].generateExample(data, {
            lang: 'python',
        });
        if (body && data.bodyMediaType === 'application/json') {
            params.push('json = body');
        }
        else if (body) {
            params.push('data = body');
        }
    }
    for (const [k, v] of Object.entries(data.header)) {
        headers[k] = v.value;
    }
    if (Object.keys(headers).length > 0) {
        params.push(`headers = ${JSON.stringify(headers, null, 2)}`);
    }
    const inputCookies = Object.entries(data.cookie);
    if (inputCookies.length > 0) {
        const cookies = {};
        for (const [k, v] of inputCookies) {
            cookies[k] = v.value;
        }
        params.push(`cookies = ${JSON.stringify(cookies, null, 2)}`);
    }
    return `import requests

url = ${JSON.stringify(url)}
${body ?? ''}
response = requests.request(${params.join(', ')})

print(response.text)`;
};
