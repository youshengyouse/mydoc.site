import "./chunk-ORMEWXMH.js";

// src/cache-fs.ts
import { createHash } from "crypto";
import * as fs from "fs";
import * as path from "path";
import * as process from "process";
function createFileSystemTypesCache(options = {}) {
  var _a;
  const { cwd: cwd2 = process.cwd() } = options;
  const dir = path.join(cwd2, (_a = options.dir) != null ? _a : ".next/cache/twoslash");
  return {
    init() {
      try {
        fs.mkdirSync(dir, { recursive: true });
      } catch (e) {
      }
    },
    read(code) {
      const hash = createHash("SHA256").update(code).digest("hex").slice(0, 12);
      const filePath = path.join(dir, `${hash}.json`);
      if (!fs.existsSync(filePath)) {
        return null;
      }
      return JSON.parse(fs.readFileSync(filePath, { encoding: "utf-8" }));
    },
    write(code, data) {
      const hash = createHash("SHA256").update(code).digest("hex").slice(0, 12);
      const filePath = path.join(dir, `${hash}.json`);
      const json = JSON.stringify(data);
      fs.writeFileSync(filePath, json, { encoding: "utf-8" });
    }
  };
}
export {
  createFileSystemTypesCache
};
