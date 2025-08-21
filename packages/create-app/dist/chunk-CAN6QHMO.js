// src/create-app.ts
import path from "path";
import fs2 from "fs/promises";

// src/git.ts
import * as fs from "fs/promises";
import { join } from "path";
import { x } from "tinyexec";
async function isInGitRepository(cwd2) {
  const { exitCode } = await x("git", ["rev-parse", "--is-inside-work-tree"], {
    nodeOptions: { cwd: cwd2 }
  });
  return exitCode === 0;
}
async function isDefaultBranchSet(cwd2) {
  const { exitCode } = await x("git", ["config", "init.defaultBranch"], {
    nodeOptions: { cwd: cwd2 }
  });
  return exitCode === 0;
}
async function tryGitInit(cwd2) {
  const { exitCode } = await x("git", ["--version"]);
  if (exitCode !== 0) return false;
  if (await isInGitRepository(cwd2)) return false;
  try {
    await x("git", ["init"], {
      throwOnError: true,
      nodeOptions: { cwd: cwd2 }
    });
    if (!await isDefaultBranchSet(cwd2)) {
      await x("git", ["checkout", "-b", "main"], {
        throwOnError: true,
        nodeOptions: {
          cwd: cwd2
        }
      });
    }
    await x("git", ["add", "-A"], {
      throwOnError: true,
      nodeOptions: {
        cwd: cwd2
      }
    });
    await x(
      "git",
      ["commit", "-m", "Initial commit from Create Fumadocs App"],
      {
        throwOnError: true,
        nodeOptions: {
          cwd: cwd2
        }
      }
    );
    return true;
  } catch {
    await fs.rmdir(join(cwd2, ".git"), { recursive: true }).catch(() => null);
    return false;
  }
}

// src/versions.js
var versions = { "fumadocs-core": "15.6.12", "fumadocs-ui": "15.6.12", "fumadocs-mdx": "11.7.5", "@fumadocs/mdx-remote": "1.4.0", "@fumadocs/content-collections": "1.2.1" };

// ../create-app-versions/package.json
var package_default = {
  name: "example-versions",
  version: "0.0.0",
  private: true,
  description: "Used to track dependency versions in create-fumadocs-app",
  license: "MIT",
  dependencies: {
    "@content-collections/core": "^0.10.0",
    "@content-collections/mdx": "^0.2.2",
    "@content-collections/next": "^0.2.6",
    "@react-router/dev": "^7.8.1",
    "@react-router/node": "^7.8.1",
    "@react-router/serve": "^7.8.1",
    "@tailwindcss/postcss": "^4.1.12",
    "@tailwindcss/vite": "^4.1.12",
    "@tanstack/react-router": "^1.131.27",
    "@tanstack/react-start": "^1.131.27",
    "@types/mdx": "^2.0.13",
    "@types/node": "24.3.0",
    "@types/react": "^19.1.10",
    "@types/react-dom": "^19.1.7",
    "@vitejs/plugin-react": "^5.0.1",
    "gray-matter": "^4.0.3",
    isbot: "^5.1.30",
    next: "15.5.0",
    postcss: "^8.5.6",
    react: "^19.1.1",
    "react-dom": "^19.1.1",
    "react-router": "^7.8.1",
    "react-router-devtools": "^5.0.6",
    shiki: "^3.11.0",
    tailwindcss: "^4.1.12",
    tinyglobby: "^0.2.14",
    typescript: "^5.9.2",
    vinxi: "^0.5.8",
    vite: "^7.1.3",
    "vite-tsconfig-paths": "^5.1.4"
  }
};

// src/auto-install.ts
import { x as x2 } from "tinyexec";
var managers = ["npm", "yarn", "bun", "pnpm"];
function getPackageManager() {
  const userAgent = process.env.npm_config_user_agent ?? "";
  if (userAgent.startsWith("yarn")) {
    return "yarn";
  }
  if (userAgent.startsWith("pnpm")) {
    return "pnpm";
  }
  if (userAgent.startsWith("bun")) {
    return "bun";
  }
  return "npm";
}
async function autoInstall(manager, dest) {
  await x2(manager, ["install"], {
    throwOnError: true,
    nodeOptions: {
      env: {
        ...process.env,
        NODE_ENV: "development",
        DISABLE_OPENCOLLECTIVE: "1"
      },
      cwd: dest
    }
  });
}

// src/constants.ts
import { fileURLToPath } from "url";
var sourceDir = fileURLToPath(new URL(`../`, import.meta.url).href);
var cwd = process.cwd();

// src/create-app.ts
var templates = [
  "+next+content-collections",
  "+next+fuma-docs-mdx",
  "react-router",
  "tanstack-start",
  "waku"
];
async function create(options) {
  const {
    installDeps = true,
    initializeGit = true,
    log = console.log
  } = options;
  const projectName = path.basename(options.outputDir);
  const dest = path.resolve(cwd, options.outputDir);
  const isNext = options.template.startsWith("+next");
  function isRelative(dir, file) {
    return !path.relative(path.join(dest, dir), file).startsWith(`..${path.sep}`);
  }
  function defaultRename(file) {
    file = file.replace("example.gitignore", ".gitignore");
    if (!options.useSrcDir || !isNext) {
      return file;
    }
    if (path.basename(file) === "mdx-components.tsx" || isRelative("app", file) || isRelative("lib", file)) {
      return path.join(dest, "src", path.relative(dest, file));
    }
    return file;
  }
  if (isNext) {
    await copy(path.join(sourceDir, `template/+next`), dest, defaultRename);
    await copy(
      path.join(sourceDir, `template/${options.template}`),
      dest,
      defaultRename
    );
    if (options.tailwindcss) {
      await copy(
        path.join(sourceDir, `template/+next+tailwindcss`),
        dest,
        defaultRename
      );
      log("Configured Tailwind CSS");
    }
    if (options.eslint) {
      await copy(
        path.join(sourceDir, `template/+next+eslint`),
        dest,
        defaultRename
      );
      log("Configured ESLint");
    }
    if (options.useSrcDir) {
      const tsconfigPath = path.join(dest, "tsconfig.json");
      const content = (await fs2.readFile(tsconfigPath)).toString();
      const config = JSON.parse(content);
      if (config.compilerOptions?.paths) {
        Object.assign(config.compilerOptions.paths, {
          "@/*": ["./src/*"]
        });
      }
      await fs2.writeFile(tsconfigPath, JSON.stringify(config, null, 2));
    }
  } else {
    await copy(
      path.join(sourceDir, `template/${options.template}`),
      dest,
      defaultRename
    );
  }
  const packageJson = isNext ? await createNextPackageJson(projectName, options) : await createPackageJson(projectName, dest);
  await fs2.writeFile(
    path.join(dest, "package.json"),
    JSON.stringify(packageJson, null, 2)
  );
  const readMe = await getReadme(dest, projectName);
  await fs2.writeFile(path.join(dest, "README.md"), readMe);
  if (installDeps) {
    try {
      await autoInstall(options.packageManager, dest);
      log("Installed dependencies");
    } catch (err) {
      log(`Failed to install dependencies: ${err}`);
    }
  }
  if (initializeGit && await tryGitInit(dest)) {
    log("Initialized Git repository");
  }
}
async function getReadme(dest, projectName) {
  const template = await fs2.readFile(path.join(dest, "README.md")).then((res) => res.toString());
  return `# ${projectName}

${template}`;
}
async function copy(from, to, rename = (s) => s) {
  const stats = await fs2.stat(from);
  if (stats.isDirectory()) {
    const files = await fs2.readdir(from);
    await Promise.all(
      files.map(
        (file) => copy(path.join(from, file), rename(path.join(to, file)))
      )
    );
  } else {
    await fs2.mkdir(path.dirname(to), { recursive: true });
    await fs2.copyFile(from, to);
  }
}
async function createNextPackageJson(projectName, options) {
  return {
    name: projectName,
    version: "0.0.0",
    private: true,
    scripts: {
      build: "next build",
      dev: "next dev --turbo",
      start: "next start",
      ...options.template === "+next+fuma-docs-mdx" ? {
        postinstall: "fumadocs-mdx"
      } : null
    },
    dependencies: {
      ...pick(package_default.dependencies, ["next", "react", "react-dom"]),
      ...pick(versions, ["fumadocs-ui", "fumadocs-core"]),
      ...options.template === "+next+content-collections" ? {
        ...pick(package_default.dependencies, [
          "@content-collections/mdx",
          "@content-collections/core",
          "@content-collections/next"
        ]),
        ...pick(versions, ["@fumadocs/content-collections"])
      } : null,
      ...options.template === "+next+fuma-docs-mdx" ? pick(versions, ["fumadocs-mdx"]) : null
    },
    devDependencies: {
      ...pick(package_default.dependencies, [
        "@types/node",
        "@types/react",
        "@types/react-dom",
        "typescript",
        "@types/mdx"
      ]),
      ...options.tailwindcss ? pick(package_default.dependencies, [
        "@tailwindcss/postcss",
        "tailwindcss",
        "postcss"
      ]) : null,
      ...options.eslint ? {
        eslint: "^8",
        "eslint-config-next": package_default.dependencies.next
      } : null
    }
  };
}
async function createPackageJson(projectName, dir) {
  function replaceWorkspaceDeps(deps) {
    for (const k in deps) {
      if (deps[k].startsWith("workspace:") && k in versions) {
        deps[k] = versions[k];
      }
    }
    return deps;
  }
  const packageJson = JSON.parse(
    await fs2.readFile(path.join(dir, "package.json")).then((res) => res.toString())
  );
  return {
    name: projectName,
    ...packageJson,
    dependencies: replaceWorkspaceDeps(packageJson.dependencies),
    devDependencies: replaceWorkspaceDeps(packageJson.devDependencies)
  };
}
function pick(obj, keys) {
  const result = {};
  for (const key of keys) {
    if (key in obj) {
      result[key] = obj[key];
    }
  }
  return result;
}

export {
  managers,
  getPackageManager,
  cwd,
  templates,
  create
};
