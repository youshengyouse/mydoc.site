// src/utils/git-timestamp.ts
import path from "path";
import { x } from "tinyexec";
var cache = /* @__PURE__ */ new Map();
async function getGitTimestamp(file) {
  const cached = cache.get(file);
  if (cached) return cached;
  try {
    const out = await x(
      "git",
      ["log", "-1", '--pretty="%ai"', path.relative(process.cwd(), file)],
      {
        throwOnError: true
      }
    );
    const time = new Date(out.stdout);
    cache.set(file, time);
    return time;
  } catch {
    return;
  }
}

// src/utils/validation.ts
import picocolors from "picocolors";
var ValidationError = class extends Error {
  constructor(message, issues) {
    super(
      `${message}:
${issues.map((issue) => `  ${issue.path}: ${issue.message}`).join("\n")}`
    );
    this.title = message;
    this.issues = issues;
  }
  toStringFormatted() {
    return [
      picocolors.bold(`[MDX] ${this.title}:`),
      ...this.issues.map(
        (issue) => picocolors.redBright(
          `- ${picocolors.bold(issue.path?.join(".") ?? "*")}: ${issue.message}`
        )
      )
    ].join("\n");
  }
};
async function validate(schema, data, context, errorMessage) {
  if (typeof schema === "function" && !("~standard" in schema)) {
    schema = schema(context);
  }
  if ("~standard" in schema) {
    const result = await schema["~standard"].validate(
      data
    );
    if (result.issues) {
      throw new ValidationError(errorMessage, result.issues);
    }
    return result.value;
  }
  return data;
}

export {
  getGitTimestamp,
  ValidationError,
  validate
};
