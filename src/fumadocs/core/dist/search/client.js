import {
  useOnChange
} from "../chunk-EMWGTXSW.js";

// src/search/client.ts
import { useRef as useRef2, useState as useState2 } from "react";

// src/utils/use-debounce.ts
import { useRef, useState } from "react";
function useDebounce(value, delayMs = 1e3) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  const timer = useRef(void 0);
  if (delayMs === 0) return value;
  if (value !== debouncedValue && timer.current?.value !== value) {
    if (timer.current) clearTimeout(timer.current.handler);
    const handler = window.setTimeout(() => {
      setDebouncedValue(value);
    }, delayMs);
    timer.current = { value, handler };
  }
  return debouncedValue;
}

// src/search/client.ts
function isDifferentDeep(a, b) {
  if (Array.isArray(a) && Array.isArray(b)) {
    return b.length !== a.length || a.some((v, i) => isDifferentDeep(v, b[i]));
  }
  if (typeof a === "object" && a && typeof b === "object" && b) {
    const aKeys = Object.keys(a);
    const bKeys = Object.keys(b);
    return aKeys.length !== bKeys.length || aKeys.some(
      (key) => isDifferentDeep(a[key], b[key])
    );
  }
  return a !== b;
}
function useDocsSearch(clientOptions, _locale, _tag, _delayMs = 100, _allowEmpty = false, _key) {
  const {
    delayMs = _delayMs ?? 100,
    allowEmpty = _allowEmpty ?? false,
    ...client
  } = clientOptions;
  client.tag ??= _tag;
  client.locale ??= _locale;
  const [search, setSearch] = useState2("");
  const [results, setResults] = useState2("empty");
  const [error, setError] = useState2();
  const [isLoading, setIsLoading] = useState2(false);
  const debouncedValue = useDebounce(search, delayMs);
  const onStart = useRef2(void 0);
  useOnChange(
    [client, debouncedValue],
    () => {
      if (onStart.current) {
        onStart.current();
        onStart.current = void 0;
      }
      setIsLoading(true);
      let interrupt = false;
      onStart.current = () => {
        interrupt = true;
      };
      async function run() {
        if (debouncedValue.length === 0 && !allowEmpty) return "empty";
        if (client.type === "fetch") {
          const { fetchDocs } = await import("../fetch-YKY7NMVE.js");
          return fetchDocs(debouncedValue, client);
        }
        if (client.type === "algolia") {
          const { searchDocs } = await import("../algolia-NXNLN7TR.js");
          return searchDocs(debouncedValue, client);
        }
        if (client.type === "orama-cloud") {
          const { searchDocs } = await import("../orama-cloud-I4WBDIAI.js");
          return searchDocs(debouncedValue, client);
        }
        if (client.type === "static") {
          const { search: search2 } = await import("../static-5YPNWD5F.js");
          return search2(debouncedValue, client);
        }
        throw new Error("unknown search client");
      }
      void run().then((res) => {
        if (interrupt) return;
        setError(void 0);
        setResults(res);
      }).catch((err) => {
        setError(err);
      }).finally(() => {
        setIsLoading(false);
      });
    },
    isDifferentDeep
  );
  return { search, setSearch, query: { isLoading, data: results, error } };
}
export {
  useDocsSearch
};
