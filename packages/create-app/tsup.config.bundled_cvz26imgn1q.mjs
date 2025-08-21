// tsup.config.ts
import { writeFileSync } from 'node:fs';
import { defineConfig } from 'tsup';

// ../content-collections/package.json
var package_default = {
  name: '@fumadocs/content-collections',
  version: '1.2.1',
  description: 'The Content Collections adapter for Fumadocs',
  keywords: ['NextJs', 'Docs', 'Content Collections'],
  homepage: 'https://fumadocs.vercel.app',
  repository: 'github:fuma-nama/fumadocs',
  license: 'MIT',
  author: 'Fuma Nama',
  type: 'module',
  exports: {
    '.': {
      import: './dist/index.js',
      types: './dist/index.d.ts',
    },
    './configuration': {
      import: './dist/configuration.js',
      types: './dist/configuration.d.ts',
    },
  },
  main: './dist/index.js',
  types: './dist/index.d.ts',
  files: ['dist/*'],
  scripts: {
    build: 'tsup',
    clean: 'rimraf dist',
    dev: 'tsup --watch',
    lint: 'eslint .',
    'types:check': 'tsc --noEmit',
  },
  devDependencies: {
    '@content-collections/core': '^0.10.0',
    '@content-collections/mdx': '^0.2.2',
    '@types/node': '24.3.0',
    'eslint-config-custom': 'workspace:*',
    'fumadocs-core': 'workspace:*',
    tsconfig: 'workspace:*',
    unified: '^11.0.5',
    zod: '^4.0.17',
  },
  peerDependencies: {
    '@content-collections/core': '0.x.x',
    '@content-collections/mdx': '0.x.x',
    'fumadocs-core': '^14.0.0 || ^15.0.0',
  },
  publishConfig: {
    access: 'public',
  },
};

// ../core/package.json
var package_default2 = {
  name: 'fumadocs-core',
  version: '15.6.12',
  description: 'The library for building a documentation website in Next.js',
  keywords: ['NextJs', 'Docs'],
  homepage: 'https://fumadocs.vercel.app',
  repository: 'github:fuma-nama/fumadocs',
  license: 'MIT',
  author: 'Fuma Nama',
  type: 'module',
  exports: {
    './sidebar': {
      import: './dist/sidebar.js',
      types: './dist/sidebar.d.ts',
    },
    './breadcrumb': {
      import: './dist/breadcrumb.js',
      types: './dist/breadcrumb.d.ts',
    },
    './toc': {
      import: './dist/toc.js',
      types: './dist/toc.d.ts',
    },
    './content': {
      import: './dist/content/index.js',
      types: './dist/content/index.d.ts',
    },
    './hide-if-empty': {
      import: './dist/hide-if-empty.js',
      types: './dist/hide-if-empty.d.ts',
    },
    './search/*': {
      import: './dist/search/*.js',
      types: './dist/search/*.d.ts',
    },
    './server': {
      import: './dist/server/index.js',
      types: './dist/server/index.d.ts',
    },
    './source': {
      import: './dist/source/index.js',
      types: './dist/source/index.d.ts',
    },
    './utils/*': {
      import: './dist/utils/*.js',
      types: './dist/utils/*.d.ts',
    },
    './link': {
      import: './dist/link.js',
      types: './dist/link.d.ts',
    },
    './dynamic-link': {
      import: './dist/dynamic-link.js',
      types: './dist/dynamic-link.d.ts',
    },
    './mdx-plugins': {
      import: './dist/mdx-plugins/index.js',
      types: './dist/mdx-plugins/index.d.ts',
    },
    './i18n': {
      browser: './dist/i18n/index.js',
      import: './dist/i18n/index.server.js',
      types: './dist/i18n/index.server.d.ts',
    },
    './i18n/middleware': {
      import: './dist/i18n/middleware.js',
      types: './dist/i18n/middleware.d.ts',
    },
    './highlight': {
      import: './dist/highlight/index.js',
      types: './dist/highlight/index.d.ts',
    },
    './highlight/client': {
      import: './dist/highlight/client.js',
      types: './dist/highlight/client.d.ts',
    },
    './framework': {
      import: './dist/framework/index.js',
      types: './dist/framework/index.d.ts',
    },
    './framework/*': {
      import: './dist/framework/*.js',
      types: './dist/framework/*.d.ts',
    },
  },
  files: ['dist/*'],
  scripts: {
    build: 'tsup',
    clean: 'rimraf dist',
    dev: 'tsup --watch',
    lint: 'eslint .',
    'types:check': 'tsc --noEmit',
  },
  dependencies: {
    '@formatjs/intl-localematcher': '^0.6.1',
    '@orama/orama': '^3.1.11',
    '@shikijs/rehype': '^3.11.0',
    '@shikijs/transformers': '^3.11.0',
    'github-slugger': '^2.0.0',
    'hast-util-to-estree': '^3.1.3',
    'hast-util-to-jsx-runtime': '^2.3.6',
    'image-size': '^2.0.2',
    negotiator: '^1.0.0',
    'npm-to-yarn': '^3.0.1',
    'react-remove-scroll': '^2.7.1',
    remark: '^15.0.0',
    'remark-gfm': '^4.0.1',
    'remark-rehype': '^11.1.2',
    'scroll-into-view-if-needed': '^3.1.0',
    shiki: '^3.11.0',
    'unist-util-visit': '^5.0.0',
  },
  devDependencies: {
    '@mdx-js/mdx': '^3.1.0',
    '@mixedbread/sdk': '^0.25.0',
    '@oramacloud/client': '^2.1.4',
    '@tanstack/react-router': '^1.131.27',
    '@types/estree-jsx': '^1.0.5',
    '@types/hast': '^3.0.4',
    '@types/mdast': '^4.0.3',
    '@types/negotiator': '^0.6.4',
    '@types/node': '24.3.0',
    '@types/react': '^19.1.10',
    '@types/react-dom': '^19.1.7',
    algoliasearch: '5.35.0',
    'eslint-config-custom': 'workspace:*',
    'mdast-util-mdx-jsx': '^3.2.0',
    'mdast-util-mdxjs-esm': '^2.0.1',
    next: '^15.5.0',
    'react-router': '^7.8.1',
    'remark-mdx': '^3.1.0',
    'remove-markdown': '^0.6.2',
    tsconfig: 'workspace:*',
    typescript: '^5.9.2',
    unified: '^11.0.5',
    vfile: '^6.0.3',
    waku: '^0.25.0',
  },
  peerDependencies: {
    '@mixedbread/sdk': '^0.19.0',
    '@oramacloud/client': '1.x.x || 2.x.x',
    '@types/react': '*',
    algoliasearch: '5.x.x',
    next: '14.x.x || 15.x.x',
    react: '18.x.x || 19.x.x',
    'react-dom': '18.x.x || 19.x.x',
    'react-router': '7.x.x',
  },
  peerDependenciesMeta: {
    '@mixedbread/sdk': {
      optional: true,
    },
    '@types/react': {
      optional: true,
    },
    '@oramacloud/client': {
      optional: true,
    },
    algoliasearch: {
      optional: true,
    },
    next: {
      optional: true,
    },
    react: {
      optional: true,
    },
    'react-dom': {
      optional: true,
    },
    'react-router': {
      optional: true,
    },
  },
  publishConfig: {
    access: 'public',
  },
};

// ../mdx-remote/package.json
var package_default3 = {
  name: '@fumadocs/mdx-remote',
  version: '1.4.0',
  description: 'The remote MDX files adapter for Fumadocs',
  keywords: ['NextJs', 'Docs', 'fumadocs', 'next-mdx-remote'],
  homepage: 'https://fumadocs.vercel.app',
  repository: 'github:fuma-nama/fumadocs',
  license: 'MIT',
  author: 'Fuma Nama',
  type: 'module',
  exports: {
    '.': {
      import: './dist/index.js',
      types: './dist/index.d.ts',
    },
    './client': {
      import: './dist/client/index.js',
      types: './dist/client/index.d.ts',
    },
  },
  module: './dist/index.js',
  types: './dist/index.d.ts',
  files: ['dist/*'],
  scripts: {
    build: 'tsup',
    clean: 'rimraf dist',
    dev: 'tsup --watch',
    lint: 'eslint .',
    'types:check': 'tsc --noEmit',
  },
  dependencies: {
    '@mdx-js/mdx': '^3.1.0',
    'gray-matter': '^4.0.3',
    zod: '^4.0.17',
  },
  devDependencies: {
    '@types/mdx': '^2.0.13',
    '@types/node': '24.3.0',
    '@types/react': '^19.1.10',
    'eslint-config-custom': 'workspace:*',
    'fumadocs-core': 'workspace:*',
    react: '^19.1.1',
    tinyglobby: '^0.2.14',
    tsconfig: 'workspace:*',
    unified: '^11.0.5',
    vfile: '^6.0.3',
  },
  peerDependencies: {
    '@types/react': '*',
    'fumadocs-core': '^14.0.0 || ^15.0.0',
    react: '18.x.x || 19.x.x',
  },
  peerDependenciesMeta: {
    '@types/react': {
      optional: true,
    },
  },
  publishConfig: {
    access: 'public',
  },
};

// ../mdx/package.json
var package_default4 = {
  name: 'fumadocs-mdx',
  version: '11.7.5',
  description: 'The built-in source for Fumadocs',
  keywords: ['NextJs', 'Docs'],
  homepage: 'https://fumadocs.vercel.app',
  repository: 'github:fuma-nama/fumadocs',
  license: 'MIT',
  author: 'Fuma Nama',
  type: 'module',
  exports: {
    './loader-mdx': './loader-mdx.cjs',
    './config': {
      import: './dist/config/index.js',
      types: './dist/config/index.d.ts',
      require: './dist/config/index.cjs',
    },
    './config/zod-3': {
      import: './dist/config/zod-3.js',
      types: './dist/config/zod-3.d.ts',
      require: './dist/config/zod-3.cjs',
    },
    './next': {
      import: './dist/next/index.js',
      types: './dist/next/index.d.ts',
      require: './dist/next/index.cjs',
    },
    './vite': {
      import: './dist/vite/index.js',
      types: './dist/vite/index.d.ts',
      require: './dist/vite/index.cjs',
    },
    './runtime/async': {
      import: './dist/runtime/async.js',
      types: './dist/runtime/async.d.ts',
    },
    './runtime/vite': {
      import: './dist/runtime/vite.js',
      types: './dist/runtime/vite.d.ts',
    },
    '.': {
      import: './dist/index.js',
      types: './dist/index.d.ts',
      require: './dist/index.cjs',
    },
  },
  main: './dist/index.js',
  types: './dist/index.d.ts',
  bin: './bin.js',
  files: ['dist/*', 'loader-mdx.cjs', 'bin.js'],
  scripts: {
    build: 'tsup',
    clean: 'rimraf dist',
    dev: 'tsup --watch',
    lint: 'eslint .',
    'types:check': 'tsc --noEmit',
  },
  dependencies: {
    '@mdx-js/mdx': '^3.1.0',
    '@standard-schema/spec': '^1.0.0',
    chokidar: '^4.0.3',
    esbuild: '^0.25.9',
    'estree-util-value-to-estree': '^3.4.0',
    'js-yaml': '^4.1.0',
    'lru-cache': '^11.1.0',
    picocolors: '^1.1.1',
    tinyexec: '^1.0.1',
    tinyglobby: '^0.2.14',
    'unist-util-visit': '^5.0.0',
    zod: '^4.0.17',
  },
  devDependencies: {
    '@fumadocs/mdx-remote': 'workspace:*',
    '@types/js-yaml': '^4.0.9',
    '@types/mdast': '^4.0.3',
    '@types/mdx': '^2.0.13',
    '@types/node': '^24.3.0',
    '@types/react': '^19.1.10',
    'eslint-config-custom': 'workspace:*',
    'fumadocs-core': 'workspace:*',
    'mdast-util-mdx-jsx': '^3.2.0',
    next: '^15.5.0',
    react: '^19.1.1',
    rollup: '^4.46.3',
    tsconfig: 'workspace:*',
    unified: '^11.0.5',
    vfile: '^6.0.3',
    vite: '^7.1.3',
    webpack: '^5.101.3',
  },
  peerDependencies: {
    '@fumadocs/mdx-remote': '^1.4.0',
    'fumadocs-core': '^14.0.0 || ^15.0.0',
    next: '^15.3.0',
    react: '*',
    vite: '6.x.x || 7.x.x',
  },
  peerDependenciesMeta: {
    react: {
      optional: true,
    },
    next: {
      optional: true,
    },
    vite: {
      optional: true,
    },
    '@fumadocs/mdx-remote': {
      optional: true,
    },
  },
  publishConfig: {
    access: 'public',
  },
};

// ../ui/package.json
var package_default5 = {
  name: 'fumadocs-ui',
  version: '15.6.12',
  description: 'The framework for building a documentation website in Next.js',
  keywords: ['NextJs', 'Docs'],
  homepage: 'https://fumadocs.vercel.app',
  repository: 'github:fuma-nama/fumadocs',
  license: 'MIT',
  author: 'Fuma Nama',
  type: 'module',
  exports: {
    './style.css': './dist/style.css',
    './css/*': './css/*',
    './image-zoom.css': './dist/image-zoom.css',
    './components/*': {
      import: './dist/components/*.js',
      types: './dist/components/*.d.ts',
      default: './dist/components/*.js',
    },
    './i18n': {
      import: './dist/i18n.js',
      types: './dist/i18n.d.ts',
    },
    './layouts/home': {
      import: './dist/layouts/home/index.js',
      types: './dist/layouts/home/index.d.ts',
    },
    './layouts/home/*': {
      import: './dist/layouts/home/*.js',
      types: './dist/layouts/home/*.d.ts',
    },
    './layouts/docs': {
      import: './dist/layouts/docs/index.js',
      types: './dist/layouts/docs/index.d.ts',
    },
    './layouts/docs/page': {
      import: './dist/layouts/docs/page.js',
      types: './dist/layouts/docs/page.d.ts',
    },
    './layouts/docs-client': {
      import: './dist/layouts/docs/client.js',
      types: './dist/layouts/docs/client.d.ts',
    },
    './layouts/notebook': {
      import: './dist/layouts/notebook/index.js',
      types: './dist/layouts/notebook/index.d.ts',
    },
    './layouts/notebook-client': {
      import: './dist/layouts/notebook/client.js',
      types: './dist/layouts/notebook/client.d.ts',
    },
    './layouts/links': {
      import: './dist/layouts/links.js',
      types: './dist/layouts/links.d.ts',
    },
    './layouts/shared': {
      import: './dist/layouts/shared.js',
      types: './dist/layouts/shared.d.ts',
    },
    './page': {
      node: './dist/page.server.js',
      import: './dist/page.js',
      types: './dist/page.server.d.ts',
    },
    './provider': {
      import: './dist/provider/index.js',
      types: './dist/provider/index.d.ts',
    },
    './provider/*': {
      import: './dist/provider/*.js',
      types: './dist/provider/*.d.ts',
    },
    './contexts/*': {
      import: './dist/contexts/*.js',
      types: './dist/contexts/*.d.ts',
    },
    './mdx': {
      node: './dist/mdx.server.js',
      import: './dist/mdx.js',
      types: './dist/mdx.d.ts',
    },
    './og': {
      import: './dist/og.js',
      types: './dist/og.d.ts',
    },
    './theme/*': {
      import: './dist/theme/*.js',
      types: './dist/theme/*.d.ts',
    },
    './utils/*': {
      import: './dist/utils/*.js',
      types: './dist/utils/*.d.ts',
    },
    './internal/icons': {
      import: './dist/icons.js',
      types: './dist/icons.d.ts',
    },
  },
  files: ['dist/*', 'css/*'],
  scripts: {
    build: 'pnpm build:layout && pnpm build:tailwind',
    'build:layout':
      'tsc --project tsconfig.build.json && tsc-alias -p tsconfig.build.json',
    'build:tailwind':
      'tailwindcss -i css/style.css -o ./dist/style.css && tailwindcss -i src/components/image-zoom.css -o dist/components/image-zoom.css',
    clean: 'rimraf dist',
    dev: 'concurrently "tsc -w --project tsconfig.build.json" "tsc-alias -w -p tsconfig.build.json" "pnpm dev:tailwind"',
    'dev:tailwind':
      'tailwindcss -i css/style.css -o ./dist/style.css -w && tailwindcss -i src/components/image-zoom.css -o dist/components/image-zoom.css -w',
    lint: 'eslint .',
    'types:check': 'tsc --noEmit',
  },
  dependencies: {
    '@radix-ui/react-accordion': '^1.2.12',
    '@radix-ui/react-collapsible': '^1.1.12',
    '@radix-ui/react-dialog': '^1.1.15',
    '@radix-ui/react-direction': '^1.1.1',
    '@radix-ui/react-navigation-menu': '^1.2.14',
    '@radix-ui/react-popover': '^1.1.15',
    '@radix-ui/react-presence': '^1.1.5',
    '@radix-ui/react-scroll-area': '^1.2.10',
    '@radix-ui/react-slot': '^1.2.3',
    '@radix-ui/react-tabs': '^1.1.13',
    'class-variance-authority': '^0.7.1',
    'fumadocs-core': 'workspace:*',
    'lodash.merge': '^4.6.2',
    'next-themes': '^0.4.6',
    'postcss-selector-parser': '^7.1.0',
    'react-medium-image-zoom': '^5.3.0',
    'scroll-into-view-if-needed': '^3.1.0',
    'tailwind-merge': '^3.3.1',
  },
  devDependencies: {
    '@fumadocs/cli': 'workspace:*',
    '@next/eslint-plugin-next': '^15.5.0',
    '@tailwindcss/cli': '^4.1.12',
    '@types/lodash.merge': '^4.6.9',
    '@types/react': '^19.1.10',
    '@types/react-dom': '^19.1.7',
    'eslint-config-custom': 'workspace:*',
    'fumadocs-core': 'workspace:*',
    next: '15.5.0',
    tailwindcss: '^4.1.12',
    'tsc-alias': '^1.8.16',
    tsconfig: 'workspace:*',
  },
  peerDependencies: {
    '@types/react': '*',
    next: '14.x.x || 15.x.x',
    react: '18.x.x || 19.x.x',
    'react-dom': '18.x.x || 19.x.x',
    tailwindcss: '^3.4.14 || ^4.0.0',
  },
  peerDependenciesMeta: {
    next: {
      optional: true,
    },
    '@types/react': {
      optional: true,
    },
    tailwindcss: {
      optional: true,
    },
  },
  publishConfig: {
    access: 'public',
  },
};

// tsup.config.ts
var versions = {
  'fumadocs-core': package_default2.version,
  'fumadocs-ui': package_default5.version,
  'fumadocs-mdx': package_default4.version,
  '@fumadocs/mdx-remote': package_default3.version,
  '@fumadocs/content-collections': package_default.version,
};
writeFileSync(
  './src/versions.js',
  `export const versions = ${JSON.stringify(versions)}`,
);
console.log('Create-Fumadocs-App: versions.json updated');
var tsup_config_default = defineConfig({
  entry: ['./src/index.ts', './src/create-app.ts'],
  format: 'esm',
  target: 'node18',
  dts: true,
});
export { tsup_config_default as default };
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidHN1cC5jb25maWcudHMiLCAiLi4vY29udGVudC1jb2xsZWN0aW9ucy9wYWNrYWdlLmpzb24iLCAiLi4vY29yZS9wYWNrYWdlLmpzb24iLCAiLi4vbWR4LXJlbW90ZS9wYWNrYWdlLmpzb24iLCAiLi4vbWR4L3BhY2thZ2UuanNvbiIsICIuLi91aS9wYWNrYWdlLmpzb24iXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9faW5qZWN0ZWRfZmlsZW5hbWVfXyA9IFwiL2hvbWUvdG9tL3d3dzIwMjYvOF9zZXJ2ZXIvdmVyY2VsL2Z1bWFkb2NzL3BhY2thZ2VzL2NyZWF0ZS1hcHAvdHN1cC5jb25maWcudHNcIjtjb25zdCBfX2luamVjdGVkX2Rpcm5hbWVfXyA9IFwiL2hvbWUvdG9tL3d3dzIwMjYvOF9zZXJ2ZXIvdmVyY2VsL2Z1bWFkb2NzL3BhY2thZ2VzL2NyZWF0ZS1hcHBcIjtjb25zdCBfX2luamVjdGVkX2ltcG9ydF9tZXRhX3VybF9fID0gXCJmaWxlOi8vL2hvbWUvdG9tL3d3dzIwMjYvOF9zZXJ2ZXIvdmVyY2VsL2Z1bWFkb2NzL3BhY2thZ2VzL2NyZWF0ZS1hcHAvdHN1cC5jb25maWcudHNcIjtpbXBvcnQgeyB3cml0ZUZpbGVTeW5jIH0gZnJvbSAnbm9kZTpmcyc7XG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd0c3VwJztcbmltcG9ydCBjb250ZW50Q29sbGVjdGlvbnNQa2cgZnJvbSAnLi4vY29udGVudC1jb2xsZWN0aW9ucy9wYWNrYWdlLmpzb24nO1xuaW1wb3J0IGNvcmVQa2cgZnJvbSAnLi4vY29yZS9wYWNrYWdlLmpzb24nO1xuaW1wb3J0IG1keFJlbW90ZVBrZyBmcm9tICcuLi9tZHgtcmVtb3RlL3BhY2thZ2UuanNvbic7XG5pbXBvcnQgbWR4UGtnIGZyb20gJy4uL21keC9wYWNrYWdlLmpzb24nO1xuaW1wb3J0IHVpUGtnIGZyb20gJy4uL3VpL3BhY2thZ2UuanNvbic7XG5cbmNvbnN0IHZlcnNpb25zID0ge1xuICAnZnVtYWRvY3MtY29yZSc6IGNvcmVQa2cudmVyc2lvbixcbiAgJ2Z1bWFkb2NzLXVpJzogdWlQa2cudmVyc2lvbixcbiAgJ2Z1bWFkb2NzLW1keCc6IG1keFBrZy52ZXJzaW9uLFxuICAnQGZ1bWFkb2NzL21keC1yZW1vdGUnOiBtZHhSZW1vdGVQa2cudmVyc2lvbixcbiAgJ0BmdW1hZG9jcy9jb250ZW50LWNvbGxlY3Rpb25zJzogY29udGVudENvbGxlY3Rpb25zUGtnLnZlcnNpb24sXG59O1xuXG53cml0ZUZpbGVTeW5jKFxuICAnLi9zcmMvdmVyc2lvbnMuanMnLFxuICBgZXhwb3J0IGNvbnN0IHZlcnNpb25zID0gJHtKU09OLnN0cmluZ2lmeSh2ZXJzaW9ucyl9YCxcbik7XG5cbmNvbnNvbGUubG9nKCdDcmVhdGUtRnVtYWRvY3MtQXBwOiB2ZXJzaW9ucy5qc29uIHVwZGF0ZWQnKTtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgZW50cnk6IFsnLi9zcmMvaW5kZXgudHMnLCAnLi9zcmMvY3JlYXRlLWFwcC50cyddLFxuICBmb3JtYXQ6ICdlc20nLFxuICB0YXJnZXQ6ICdub2RlMTgnLFxuICBkdHM6IHRydWUsXG59KTtcbiIsICJ7XG4gIFwibmFtZVwiOiBcIkBmdW1hZG9jcy9jb250ZW50LWNvbGxlY3Rpb25zXCIsXG4gIFwidmVyc2lvblwiOiBcIjEuMi4xXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJUaGUgQ29udGVudCBDb2xsZWN0aW9ucyBhZGFwdGVyIGZvciBGdW1hZG9jc1wiLFxuICBcImtleXdvcmRzXCI6IFtcbiAgICBcIk5leHRKc1wiLFxuICAgIFwiRG9jc1wiLFxuICAgIFwiQ29udGVudCBDb2xsZWN0aW9uc1wiXG4gIF0sXG4gIFwiaG9tZXBhZ2VcIjogXCJodHRwczovL2Z1bWFkb2NzLnZlcmNlbC5hcHBcIixcbiAgXCJyZXBvc2l0b3J5XCI6IFwiZ2l0aHViOmZ1bWEtbmFtYS9mdW1hZG9jc1wiLFxuICBcImxpY2Vuc2VcIjogXCJNSVRcIixcbiAgXCJhdXRob3JcIjogXCJGdW1hIE5hbWFcIixcbiAgXCJ0eXBlXCI6IFwibW9kdWxlXCIsXG4gIFwiZXhwb3J0c1wiOiB7XG4gICAgXCIuXCI6IHtcbiAgICAgIFwiaW1wb3J0XCI6IFwiLi9kaXN0L2luZGV4LmpzXCIsXG4gICAgICBcInR5cGVzXCI6IFwiLi9kaXN0L2luZGV4LmQudHNcIlxuICAgIH0sXG4gICAgXCIuL2NvbmZpZ3VyYXRpb25cIjoge1xuICAgICAgXCJpbXBvcnRcIjogXCIuL2Rpc3QvY29uZmlndXJhdGlvbi5qc1wiLFxuICAgICAgXCJ0eXBlc1wiOiBcIi4vZGlzdC9jb25maWd1cmF0aW9uLmQudHNcIlxuICAgIH1cbiAgfSxcbiAgXCJtYWluXCI6IFwiLi9kaXN0L2luZGV4LmpzXCIsXG4gIFwidHlwZXNcIjogXCIuL2Rpc3QvaW5kZXguZC50c1wiLFxuICBcImZpbGVzXCI6IFtcbiAgICBcImRpc3QvKlwiXG4gIF0sXG4gIFwic2NyaXB0c1wiOiB7XG4gICAgXCJidWlsZFwiOiBcInRzdXBcIixcbiAgICBcImNsZWFuXCI6IFwicmltcmFmIGRpc3RcIixcbiAgICBcImRldlwiOiBcInRzdXAgLS13YXRjaFwiLFxuICAgIFwibGludFwiOiBcImVzbGludCAuXCIsXG4gICAgXCJ0eXBlczpjaGVja1wiOiBcInRzYyAtLW5vRW1pdFwiXG4gIH0sXG4gIFwiZGV2RGVwZW5kZW5jaWVzXCI6IHtcbiAgICBcIkBjb250ZW50LWNvbGxlY3Rpb25zL2NvcmVcIjogXCJeMC4xMC4wXCIsXG4gICAgXCJAY29udGVudC1jb2xsZWN0aW9ucy9tZHhcIjogXCJeMC4yLjJcIixcbiAgICBcIkB0eXBlcy9ub2RlXCI6IFwiMjQuMy4wXCIsXG4gICAgXCJlc2xpbnQtY29uZmlnLWN1c3RvbVwiOiBcIndvcmtzcGFjZToqXCIsXG4gICAgXCJmdW1hZG9jcy1jb3JlXCI6IFwid29ya3NwYWNlOipcIixcbiAgICBcInRzY29uZmlnXCI6IFwid29ya3NwYWNlOipcIixcbiAgICBcInVuaWZpZWRcIjogXCJeMTEuMC41XCIsXG4gICAgXCJ6b2RcIjogXCJeNC4wLjE3XCJcbiAgfSxcbiAgXCJwZWVyRGVwZW5kZW5jaWVzXCI6IHtcbiAgICBcIkBjb250ZW50LWNvbGxlY3Rpb25zL2NvcmVcIjogXCIwLngueFwiLFxuICAgIFwiQGNvbnRlbnQtY29sbGVjdGlvbnMvbWR4XCI6IFwiMC54LnhcIixcbiAgICBcImZ1bWFkb2NzLWNvcmVcIjogXCJeMTQuMC4wIHx8IF4xNS4wLjBcIlxuICB9LFxuICBcInB1Ymxpc2hDb25maWdcIjoge1xuICAgIFwiYWNjZXNzXCI6IFwicHVibGljXCJcbiAgfVxufVxuIiwgIntcbiAgXCJuYW1lXCI6IFwiZnVtYWRvY3MtY29yZVwiLFxuICBcInZlcnNpb25cIjogXCIxNS42LjEyXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJUaGUgbGlicmFyeSBmb3IgYnVpbGRpbmcgYSBkb2N1bWVudGF0aW9uIHdlYnNpdGUgaW4gTmV4dC5qc1wiLFxuICBcImtleXdvcmRzXCI6IFtcbiAgICBcIk5leHRKc1wiLFxuICAgIFwiRG9jc1wiXG4gIF0sXG4gIFwiaG9tZXBhZ2VcIjogXCJodHRwczovL2Z1bWFkb2NzLnZlcmNlbC5hcHBcIixcbiAgXCJyZXBvc2l0b3J5XCI6IFwiZ2l0aHViOmZ1bWEtbmFtYS9mdW1hZG9jc1wiLFxuICBcImxpY2Vuc2VcIjogXCJNSVRcIixcbiAgXCJhdXRob3JcIjogXCJGdW1hIE5hbWFcIixcbiAgXCJ0eXBlXCI6IFwibW9kdWxlXCIsXG4gIFwiZXhwb3J0c1wiOiB7XG4gICAgXCIuL3NpZGViYXJcIjoge1xuICAgICAgXCJpbXBvcnRcIjogXCIuL2Rpc3Qvc2lkZWJhci5qc1wiLFxuICAgICAgXCJ0eXBlc1wiOiBcIi4vZGlzdC9zaWRlYmFyLmQudHNcIlxuICAgIH0sXG4gICAgXCIuL2JyZWFkY3J1bWJcIjoge1xuICAgICAgXCJpbXBvcnRcIjogXCIuL2Rpc3QvYnJlYWRjcnVtYi5qc1wiLFxuICAgICAgXCJ0eXBlc1wiOiBcIi4vZGlzdC9icmVhZGNydW1iLmQudHNcIlxuICAgIH0sXG4gICAgXCIuL3RvY1wiOiB7XG4gICAgICBcImltcG9ydFwiOiBcIi4vZGlzdC90b2MuanNcIixcbiAgICAgIFwidHlwZXNcIjogXCIuL2Rpc3QvdG9jLmQudHNcIlxuICAgIH0sXG4gICAgXCIuL2NvbnRlbnRcIjoge1xuICAgICAgXCJpbXBvcnRcIjogXCIuL2Rpc3QvY29udGVudC9pbmRleC5qc1wiLFxuICAgICAgXCJ0eXBlc1wiOiBcIi4vZGlzdC9jb250ZW50L2luZGV4LmQudHNcIlxuICAgIH0sXG4gICAgXCIuL2hpZGUtaWYtZW1wdHlcIjoge1xuICAgICAgXCJpbXBvcnRcIjogXCIuL2Rpc3QvaGlkZS1pZi1lbXB0eS5qc1wiLFxuICAgICAgXCJ0eXBlc1wiOiBcIi4vZGlzdC9oaWRlLWlmLWVtcHR5LmQudHNcIlxuICAgIH0sXG4gICAgXCIuL3NlYXJjaC8qXCI6IHtcbiAgICAgIFwiaW1wb3J0XCI6IFwiLi9kaXN0L3NlYXJjaC8qLmpzXCIsXG4gICAgICBcInR5cGVzXCI6IFwiLi9kaXN0L3NlYXJjaC8qLmQudHNcIlxuICAgIH0sXG4gICAgXCIuL3NlcnZlclwiOiB7XG4gICAgICBcImltcG9ydFwiOiBcIi4vZGlzdC9zZXJ2ZXIvaW5kZXguanNcIixcbiAgICAgIFwidHlwZXNcIjogXCIuL2Rpc3Qvc2VydmVyL2luZGV4LmQudHNcIlxuICAgIH0sXG4gICAgXCIuL3NvdXJjZVwiOiB7XG4gICAgICBcImltcG9ydFwiOiBcIi4vZGlzdC9zb3VyY2UvaW5kZXguanNcIixcbiAgICAgIFwidHlwZXNcIjogXCIuL2Rpc3Qvc291cmNlL2luZGV4LmQudHNcIlxuICAgIH0sXG4gICAgXCIuL3V0aWxzLypcIjoge1xuICAgICAgXCJpbXBvcnRcIjogXCIuL2Rpc3QvdXRpbHMvKi5qc1wiLFxuICAgICAgXCJ0eXBlc1wiOiBcIi4vZGlzdC91dGlscy8qLmQudHNcIlxuICAgIH0sXG4gICAgXCIuL2xpbmtcIjoge1xuICAgICAgXCJpbXBvcnRcIjogXCIuL2Rpc3QvbGluay5qc1wiLFxuICAgICAgXCJ0eXBlc1wiOiBcIi4vZGlzdC9saW5rLmQudHNcIlxuICAgIH0sXG4gICAgXCIuL2R5bmFtaWMtbGlua1wiOiB7XG4gICAgICBcImltcG9ydFwiOiBcIi4vZGlzdC9keW5hbWljLWxpbmsuanNcIixcbiAgICAgIFwidHlwZXNcIjogXCIuL2Rpc3QvZHluYW1pYy1saW5rLmQudHNcIlxuICAgIH0sXG4gICAgXCIuL21keC1wbHVnaW5zXCI6IHtcbiAgICAgIFwiaW1wb3J0XCI6IFwiLi9kaXN0L21keC1wbHVnaW5zL2luZGV4LmpzXCIsXG4gICAgICBcInR5cGVzXCI6IFwiLi9kaXN0L21keC1wbHVnaW5zL2luZGV4LmQudHNcIlxuICAgIH0sXG4gICAgXCIuL2kxOG5cIjoge1xuICAgICAgXCJicm93c2VyXCI6IFwiLi9kaXN0L2kxOG4vaW5kZXguanNcIixcbiAgICAgIFwiaW1wb3J0XCI6IFwiLi9kaXN0L2kxOG4vaW5kZXguc2VydmVyLmpzXCIsXG4gICAgICBcInR5cGVzXCI6IFwiLi9kaXN0L2kxOG4vaW5kZXguc2VydmVyLmQudHNcIlxuICAgIH0sXG4gICAgXCIuL2kxOG4vbWlkZGxld2FyZVwiOiB7XG4gICAgICBcImltcG9ydFwiOiBcIi4vZGlzdC9pMThuL21pZGRsZXdhcmUuanNcIixcbiAgICAgIFwidHlwZXNcIjogXCIuL2Rpc3QvaTE4bi9taWRkbGV3YXJlLmQudHNcIlxuICAgIH0sXG4gICAgXCIuL2hpZ2hsaWdodFwiOiB7XG4gICAgICBcImltcG9ydFwiOiBcIi4vZGlzdC9oaWdobGlnaHQvaW5kZXguanNcIixcbiAgICAgIFwidHlwZXNcIjogXCIuL2Rpc3QvaGlnaGxpZ2h0L2luZGV4LmQudHNcIlxuICAgIH0sXG4gICAgXCIuL2hpZ2hsaWdodC9jbGllbnRcIjoge1xuICAgICAgXCJpbXBvcnRcIjogXCIuL2Rpc3QvaGlnaGxpZ2h0L2NsaWVudC5qc1wiLFxuICAgICAgXCJ0eXBlc1wiOiBcIi4vZGlzdC9oaWdobGlnaHQvY2xpZW50LmQudHNcIlxuICAgIH0sXG4gICAgXCIuL2ZyYW1ld29ya1wiOiB7XG4gICAgICBcImltcG9ydFwiOiBcIi4vZGlzdC9mcmFtZXdvcmsvaW5kZXguanNcIixcbiAgICAgIFwidHlwZXNcIjogXCIuL2Rpc3QvZnJhbWV3b3JrL2luZGV4LmQudHNcIlxuICAgIH0sXG4gICAgXCIuL2ZyYW1ld29yay8qXCI6IHtcbiAgICAgIFwiaW1wb3J0XCI6IFwiLi9kaXN0L2ZyYW1ld29yay8qLmpzXCIsXG4gICAgICBcInR5cGVzXCI6IFwiLi9kaXN0L2ZyYW1ld29yay8qLmQudHNcIlxuICAgIH1cbiAgfSxcbiAgXCJmaWxlc1wiOiBbXG4gICAgXCJkaXN0LypcIlxuICBdLFxuICBcInNjcmlwdHNcIjoge1xuICAgIFwiYnVpbGRcIjogXCJ0c3VwXCIsXG4gICAgXCJjbGVhblwiOiBcInJpbXJhZiBkaXN0XCIsXG4gICAgXCJkZXZcIjogXCJ0c3VwIC0td2F0Y2hcIixcbiAgICBcImxpbnRcIjogXCJlc2xpbnQgLlwiLFxuICAgIFwidHlwZXM6Y2hlY2tcIjogXCJ0c2MgLS1ub0VtaXRcIlxuICB9LFxuICBcImRlcGVuZGVuY2llc1wiOiB7XG4gICAgXCJAZm9ybWF0anMvaW50bC1sb2NhbGVtYXRjaGVyXCI6IFwiXjAuNi4xXCIsXG4gICAgXCJAb3JhbWEvb3JhbWFcIjogXCJeMy4xLjExXCIsXG4gICAgXCJAc2hpa2lqcy9yZWh5cGVcIjogXCJeMy4xMS4wXCIsXG4gICAgXCJAc2hpa2lqcy90cmFuc2Zvcm1lcnNcIjogXCJeMy4xMS4wXCIsXG4gICAgXCJnaXRodWItc2x1Z2dlclwiOiBcIl4yLjAuMFwiLFxuICAgIFwiaGFzdC11dGlsLXRvLWVzdHJlZVwiOiBcIl4zLjEuM1wiLFxuICAgIFwiaGFzdC11dGlsLXRvLWpzeC1ydW50aW1lXCI6IFwiXjIuMy42XCIsXG4gICAgXCJpbWFnZS1zaXplXCI6IFwiXjIuMC4yXCIsXG4gICAgXCJuZWdvdGlhdG9yXCI6IFwiXjEuMC4wXCIsXG4gICAgXCJucG0tdG8teWFyblwiOiBcIl4zLjAuMVwiLFxuICAgIFwicmVhY3QtcmVtb3ZlLXNjcm9sbFwiOiBcIl4yLjcuMVwiLFxuICAgIFwicmVtYXJrXCI6IFwiXjE1LjAuMFwiLFxuICAgIFwicmVtYXJrLWdmbVwiOiBcIl40LjAuMVwiLFxuICAgIFwicmVtYXJrLXJlaHlwZVwiOiBcIl4xMS4xLjJcIixcbiAgICBcInNjcm9sbC1pbnRvLXZpZXctaWYtbmVlZGVkXCI6IFwiXjMuMS4wXCIsXG4gICAgXCJzaGlraVwiOiBcIl4zLjExLjBcIixcbiAgICBcInVuaXN0LXV0aWwtdmlzaXRcIjogXCJeNS4wLjBcIlxuICB9LFxuICBcImRldkRlcGVuZGVuY2llc1wiOiB7XG4gICAgXCJAbWR4LWpzL21keFwiOiBcIl4zLjEuMFwiLFxuICAgIFwiQG1peGVkYnJlYWQvc2RrXCI6IFwiXjAuMjUuMFwiLFxuICAgIFwiQG9yYW1hY2xvdWQvY2xpZW50XCI6IFwiXjIuMS40XCIsXG4gICAgXCJAdGFuc3RhY2svcmVhY3Qtcm91dGVyXCI6IFwiXjEuMTMxLjI3XCIsXG4gICAgXCJAdHlwZXMvZXN0cmVlLWpzeFwiOiBcIl4xLjAuNVwiLFxuICAgIFwiQHR5cGVzL2hhc3RcIjogXCJeMy4wLjRcIixcbiAgICBcIkB0eXBlcy9tZGFzdFwiOiBcIl40LjAuM1wiLFxuICAgIFwiQHR5cGVzL25lZ290aWF0b3JcIjogXCJeMC42LjRcIixcbiAgICBcIkB0eXBlcy9ub2RlXCI6IFwiMjQuMy4wXCIsXG4gICAgXCJAdHlwZXMvcmVhY3RcIjogXCJeMTkuMS4xMFwiLFxuICAgIFwiQHR5cGVzL3JlYWN0LWRvbVwiOiBcIl4xOS4xLjdcIixcbiAgICBcImFsZ29saWFzZWFyY2hcIjogXCI1LjM1LjBcIixcbiAgICBcImVzbGludC1jb25maWctY3VzdG9tXCI6IFwid29ya3NwYWNlOipcIixcbiAgICBcIm1kYXN0LXV0aWwtbWR4LWpzeFwiOiBcIl4zLjIuMFwiLFxuICAgIFwibWRhc3QtdXRpbC1tZHhqcy1lc21cIjogXCJeMi4wLjFcIixcbiAgICBcIm5leHRcIjogXCJeMTUuNS4wXCIsXG4gICAgXCJyZWFjdC1yb3V0ZXJcIjogXCJeNy44LjFcIixcbiAgICBcInJlbWFyay1tZHhcIjogXCJeMy4xLjBcIixcbiAgICBcInJlbW92ZS1tYXJrZG93blwiOiBcIl4wLjYuMlwiLFxuICAgIFwidHNjb25maWdcIjogXCJ3b3Jrc3BhY2U6KlwiLFxuICAgIFwidHlwZXNjcmlwdFwiOiBcIl41LjkuMlwiLFxuICAgIFwidW5pZmllZFwiOiBcIl4xMS4wLjVcIixcbiAgICBcInZmaWxlXCI6IFwiXjYuMC4zXCIsXG4gICAgXCJ3YWt1XCI6IFwiXjAuMjUuMFwiXG4gIH0sXG4gIFwicGVlckRlcGVuZGVuY2llc1wiOiB7XG4gICAgXCJAbWl4ZWRicmVhZC9zZGtcIjogXCJeMC4xOS4wXCIsXG4gICAgXCJAb3JhbWFjbG91ZC9jbGllbnRcIjogXCIxLngueCB8fCAyLngueFwiLFxuICAgIFwiQHR5cGVzL3JlYWN0XCI6IFwiKlwiLFxuICAgIFwiYWxnb2xpYXNlYXJjaFwiOiBcIjUueC54XCIsXG4gICAgXCJuZXh0XCI6IFwiMTQueC54IHx8IDE1LngueFwiLFxuICAgIFwicmVhY3RcIjogXCIxOC54LnggfHwgMTkueC54XCIsXG4gICAgXCJyZWFjdC1kb21cIjogXCIxOC54LnggfHwgMTkueC54XCIsXG4gICAgXCJyZWFjdC1yb3V0ZXJcIjogXCI3LngueFwiXG4gIH0sXG4gIFwicGVlckRlcGVuZGVuY2llc01ldGFcIjoge1xuICAgIFwiQG1peGVkYnJlYWQvc2RrXCI6IHtcbiAgICAgIFwib3B0aW9uYWxcIjogdHJ1ZVxuICAgIH0sXG4gICAgXCJAdHlwZXMvcmVhY3RcIjoge1xuICAgICAgXCJvcHRpb25hbFwiOiB0cnVlXG4gICAgfSxcbiAgICBcIkBvcmFtYWNsb3VkL2NsaWVudFwiOiB7XG4gICAgICBcIm9wdGlvbmFsXCI6IHRydWVcbiAgICB9LFxuICAgIFwiYWxnb2xpYXNlYXJjaFwiOiB7XG4gICAgICBcIm9wdGlvbmFsXCI6IHRydWVcbiAgICB9LFxuICAgIFwibmV4dFwiOiB7XG4gICAgICBcIm9wdGlvbmFsXCI6IHRydWVcbiAgICB9LFxuICAgIFwicmVhY3RcIjoge1xuICAgICAgXCJvcHRpb25hbFwiOiB0cnVlXG4gICAgfSxcbiAgICBcInJlYWN0LWRvbVwiOiB7XG4gICAgICBcIm9wdGlvbmFsXCI6IHRydWVcbiAgICB9LFxuICAgIFwicmVhY3Qtcm91dGVyXCI6IHtcbiAgICAgIFwib3B0aW9uYWxcIjogdHJ1ZVxuICAgIH1cbiAgfSxcbiAgXCJwdWJsaXNoQ29uZmlnXCI6IHtcbiAgICBcImFjY2Vzc1wiOiBcInB1YmxpY1wiXG4gIH1cbn1cbiIsICJ7XG4gIFwibmFtZVwiOiBcIkBmdW1hZG9jcy9tZHgtcmVtb3RlXCIsXG4gIFwidmVyc2lvblwiOiBcIjEuNC4wXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJUaGUgcmVtb3RlIE1EWCBmaWxlcyBhZGFwdGVyIGZvciBGdW1hZG9jc1wiLFxuICBcImtleXdvcmRzXCI6IFtcbiAgICBcIk5leHRKc1wiLFxuICAgIFwiRG9jc1wiLFxuICAgIFwiZnVtYWRvY3NcIixcbiAgICBcIm5leHQtbWR4LXJlbW90ZVwiXG4gIF0sXG4gIFwiaG9tZXBhZ2VcIjogXCJodHRwczovL2Z1bWFkb2NzLnZlcmNlbC5hcHBcIixcbiAgXCJyZXBvc2l0b3J5XCI6IFwiZ2l0aHViOmZ1bWEtbmFtYS9mdW1hZG9jc1wiLFxuICBcImxpY2Vuc2VcIjogXCJNSVRcIixcbiAgXCJhdXRob3JcIjogXCJGdW1hIE5hbWFcIixcbiAgXCJ0eXBlXCI6IFwibW9kdWxlXCIsXG4gIFwiZXhwb3J0c1wiOiB7XG4gICAgXCIuXCI6IHtcbiAgICAgIFwiaW1wb3J0XCI6IFwiLi9kaXN0L2luZGV4LmpzXCIsXG4gICAgICBcInR5cGVzXCI6IFwiLi9kaXN0L2luZGV4LmQudHNcIlxuICAgIH0sXG4gICAgXCIuL2NsaWVudFwiOiB7XG4gICAgICBcImltcG9ydFwiOiBcIi4vZGlzdC9jbGllbnQvaW5kZXguanNcIixcbiAgICAgIFwidHlwZXNcIjogXCIuL2Rpc3QvY2xpZW50L2luZGV4LmQudHNcIlxuICAgIH1cbiAgfSxcbiAgXCJtb2R1bGVcIjogXCIuL2Rpc3QvaW5kZXguanNcIixcbiAgXCJ0eXBlc1wiOiBcIi4vZGlzdC9pbmRleC5kLnRzXCIsXG4gIFwiZmlsZXNcIjogW1xuICAgIFwiZGlzdC8qXCJcbiAgXSxcbiAgXCJzY3JpcHRzXCI6IHtcbiAgICBcImJ1aWxkXCI6IFwidHN1cFwiLFxuICAgIFwiY2xlYW5cIjogXCJyaW1yYWYgZGlzdFwiLFxuICAgIFwiZGV2XCI6IFwidHN1cCAtLXdhdGNoXCIsXG4gICAgXCJsaW50XCI6IFwiZXNsaW50IC5cIixcbiAgICBcInR5cGVzOmNoZWNrXCI6IFwidHNjIC0tbm9FbWl0XCJcbiAgfSxcbiAgXCJkZXBlbmRlbmNpZXNcIjoge1xuICAgIFwiQG1keC1qcy9tZHhcIjogXCJeMy4xLjBcIixcbiAgICBcImdyYXktbWF0dGVyXCI6IFwiXjQuMC4zXCIsXG4gICAgXCJ6b2RcIjogXCJeNC4wLjE3XCJcbiAgfSxcbiAgXCJkZXZEZXBlbmRlbmNpZXNcIjoge1xuICAgIFwiQHR5cGVzL21keFwiOiBcIl4yLjAuMTNcIixcbiAgICBcIkB0eXBlcy9ub2RlXCI6IFwiMjQuMy4wXCIsXG4gICAgXCJAdHlwZXMvcmVhY3RcIjogXCJeMTkuMS4xMFwiLFxuICAgIFwiZXNsaW50LWNvbmZpZy1jdXN0b21cIjogXCJ3b3Jrc3BhY2U6KlwiLFxuICAgIFwiZnVtYWRvY3MtY29yZVwiOiBcIndvcmtzcGFjZToqXCIsXG4gICAgXCJyZWFjdFwiOiBcIl4xOS4xLjFcIixcbiAgICBcInRpbnlnbG9iYnlcIjogXCJeMC4yLjE0XCIsXG4gICAgXCJ0c2NvbmZpZ1wiOiBcIndvcmtzcGFjZToqXCIsXG4gICAgXCJ1bmlmaWVkXCI6IFwiXjExLjAuNVwiLFxuICAgIFwidmZpbGVcIjogXCJeNi4wLjNcIlxuICB9LFxuICBcInBlZXJEZXBlbmRlbmNpZXNcIjoge1xuICAgIFwiQHR5cGVzL3JlYWN0XCI6IFwiKlwiLFxuICAgIFwiZnVtYWRvY3MtY29yZVwiOiBcIl4xNC4wLjAgfHwgXjE1LjAuMFwiLFxuICAgIFwicmVhY3RcIjogXCIxOC54LnggfHwgMTkueC54XCJcbiAgfSxcbiAgXCJwZWVyRGVwZW5kZW5jaWVzTWV0YVwiOiB7XG4gICAgXCJAdHlwZXMvcmVhY3RcIjoge1xuICAgICAgXCJvcHRpb25hbFwiOiB0cnVlXG4gICAgfVxuICB9LFxuICBcInB1Ymxpc2hDb25maWdcIjoge1xuICAgIFwiYWNjZXNzXCI6IFwicHVibGljXCJcbiAgfVxufVxuIiwgIntcbiAgXCJuYW1lXCI6IFwiZnVtYWRvY3MtbWR4XCIsXG4gIFwidmVyc2lvblwiOiBcIjExLjcuNVwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiVGhlIGJ1aWx0LWluIHNvdXJjZSBmb3IgRnVtYWRvY3NcIixcbiAgXCJrZXl3b3Jkc1wiOiBbXG4gICAgXCJOZXh0SnNcIixcbiAgICBcIkRvY3NcIlxuICBdLFxuICBcImhvbWVwYWdlXCI6IFwiaHR0cHM6Ly9mdW1hZG9jcy52ZXJjZWwuYXBwXCIsXG4gIFwicmVwb3NpdG9yeVwiOiBcImdpdGh1YjpmdW1hLW5hbWEvZnVtYWRvY3NcIixcbiAgXCJsaWNlbnNlXCI6IFwiTUlUXCIsXG4gIFwiYXV0aG9yXCI6IFwiRnVtYSBOYW1hXCIsXG4gIFwidHlwZVwiOiBcIm1vZHVsZVwiLFxuICBcImV4cG9ydHNcIjoge1xuICAgIFwiLi9sb2FkZXItbWR4XCI6IFwiLi9sb2FkZXItbWR4LmNqc1wiLFxuICAgIFwiLi9jb25maWdcIjoge1xuICAgICAgXCJpbXBvcnRcIjogXCIuL2Rpc3QvY29uZmlnL2luZGV4LmpzXCIsXG4gICAgICBcInR5cGVzXCI6IFwiLi9kaXN0L2NvbmZpZy9pbmRleC5kLnRzXCIsXG4gICAgICBcInJlcXVpcmVcIjogXCIuL2Rpc3QvY29uZmlnL2luZGV4LmNqc1wiXG4gICAgfSxcbiAgICBcIi4vY29uZmlnL3pvZC0zXCI6IHtcbiAgICAgIFwiaW1wb3J0XCI6IFwiLi9kaXN0L2NvbmZpZy96b2QtMy5qc1wiLFxuICAgICAgXCJ0eXBlc1wiOiBcIi4vZGlzdC9jb25maWcvem9kLTMuZC50c1wiLFxuICAgICAgXCJyZXF1aXJlXCI6IFwiLi9kaXN0L2NvbmZpZy96b2QtMy5janNcIlxuICAgIH0sXG4gICAgXCIuL25leHRcIjoge1xuICAgICAgXCJpbXBvcnRcIjogXCIuL2Rpc3QvbmV4dC9pbmRleC5qc1wiLFxuICAgICAgXCJ0eXBlc1wiOiBcIi4vZGlzdC9uZXh0L2luZGV4LmQudHNcIixcbiAgICAgIFwicmVxdWlyZVwiOiBcIi4vZGlzdC9uZXh0L2luZGV4LmNqc1wiXG4gICAgfSxcbiAgICBcIi4vdml0ZVwiOiB7XG4gICAgICBcImltcG9ydFwiOiBcIi4vZGlzdC92aXRlL2luZGV4LmpzXCIsXG4gICAgICBcInR5cGVzXCI6IFwiLi9kaXN0L3ZpdGUvaW5kZXguZC50c1wiLFxuICAgICAgXCJyZXF1aXJlXCI6IFwiLi9kaXN0L3ZpdGUvaW5kZXguY2pzXCJcbiAgICB9LFxuICAgIFwiLi9ydW50aW1lL2FzeW5jXCI6IHtcbiAgICAgIFwiaW1wb3J0XCI6IFwiLi9kaXN0L3J1bnRpbWUvYXN5bmMuanNcIixcbiAgICAgIFwidHlwZXNcIjogXCIuL2Rpc3QvcnVudGltZS9hc3luYy5kLnRzXCJcbiAgICB9LFxuICAgIFwiLi9ydW50aW1lL3ZpdGVcIjoge1xuICAgICAgXCJpbXBvcnRcIjogXCIuL2Rpc3QvcnVudGltZS92aXRlLmpzXCIsXG4gICAgICBcInR5cGVzXCI6IFwiLi9kaXN0L3J1bnRpbWUvdml0ZS5kLnRzXCJcbiAgICB9LFxuICAgIFwiLlwiOiB7XG4gICAgICBcImltcG9ydFwiOiBcIi4vZGlzdC9pbmRleC5qc1wiLFxuICAgICAgXCJ0eXBlc1wiOiBcIi4vZGlzdC9pbmRleC5kLnRzXCIsXG4gICAgICBcInJlcXVpcmVcIjogXCIuL2Rpc3QvaW5kZXguY2pzXCJcbiAgICB9XG4gIH0sXG4gIFwibWFpblwiOiBcIi4vZGlzdC9pbmRleC5qc1wiLFxuICBcInR5cGVzXCI6IFwiLi9kaXN0L2luZGV4LmQudHNcIixcbiAgXCJiaW5cIjogXCIuL2Jpbi5qc1wiLFxuICBcImZpbGVzXCI6IFtcbiAgICBcImRpc3QvKlwiLFxuICAgIFwibG9hZGVyLW1keC5janNcIixcbiAgICBcImJpbi5qc1wiXG4gIF0sXG4gIFwic2NyaXB0c1wiOiB7XG4gICAgXCJidWlsZFwiOiBcInRzdXBcIixcbiAgICBcImNsZWFuXCI6IFwicmltcmFmIGRpc3RcIixcbiAgICBcImRldlwiOiBcInRzdXAgLS13YXRjaFwiLFxuICAgIFwibGludFwiOiBcImVzbGludCAuXCIsXG4gICAgXCJ0eXBlczpjaGVja1wiOiBcInRzYyAtLW5vRW1pdFwiXG4gIH0sXG4gIFwiZGVwZW5kZW5jaWVzXCI6IHtcbiAgICBcIkBtZHgtanMvbWR4XCI6IFwiXjMuMS4wXCIsXG4gICAgXCJAc3RhbmRhcmQtc2NoZW1hL3NwZWNcIjogXCJeMS4wLjBcIixcbiAgICBcImNob2tpZGFyXCI6IFwiXjQuMC4zXCIsXG4gICAgXCJlc2J1aWxkXCI6IFwiXjAuMjUuOVwiLFxuICAgIFwiZXN0cmVlLXV0aWwtdmFsdWUtdG8tZXN0cmVlXCI6IFwiXjMuNC4wXCIsXG4gICAgXCJqcy15YW1sXCI6IFwiXjQuMS4wXCIsXG4gICAgXCJscnUtY2FjaGVcIjogXCJeMTEuMS4wXCIsXG4gICAgXCJwaWNvY29sb3JzXCI6IFwiXjEuMS4xXCIsXG4gICAgXCJ0aW55ZXhlY1wiOiBcIl4xLjAuMVwiLFxuICAgIFwidGlueWdsb2JieVwiOiBcIl4wLjIuMTRcIixcbiAgICBcInVuaXN0LXV0aWwtdmlzaXRcIjogXCJeNS4wLjBcIixcbiAgICBcInpvZFwiOiBcIl40LjAuMTdcIlxuICB9LFxuICBcImRldkRlcGVuZGVuY2llc1wiOiB7XG4gICAgXCJAZnVtYWRvY3MvbWR4LXJlbW90ZVwiOiBcIndvcmtzcGFjZToqXCIsXG4gICAgXCJAdHlwZXMvanMteWFtbFwiOiBcIl40LjAuOVwiLFxuICAgIFwiQHR5cGVzL21kYXN0XCI6IFwiXjQuMC4zXCIsXG4gICAgXCJAdHlwZXMvbWR4XCI6IFwiXjIuMC4xM1wiLFxuICAgIFwiQHR5cGVzL25vZGVcIjogXCJeMjQuMy4wXCIsXG4gICAgXCJAdHlwZXMvcmVhY3RcIjogXCJeMTkuMS4xMFwiLFxuICAgIFwiZXNsaW50LWNvbmZpZy1jdXN0b21cIjogXCJ3b3Jrc3BhY2U6KlwiLFxuICAgIFwiZnVtYWRvY3MtY29yZVwiOiBcIndvcmtzcGFjZToqXCIsXG4gICAgXCJtZGFzdC11dGlsLW1keC1qc3hcIjogXCJeMy4yLjBcIixcbiAgICBcIm5leHRcIjogXCJeMTUuNS4wXCIsXG4gICAgXCJyZWFjdFwiOiBcIl4xOS4xLjFcIixcbiAgICBcInJvbGx1cFwiOiBcIl40LjQ2LjNcIixcbiAgICBcInRzY29uZmlnXCI6IFwid29ya3NwYWNlOipcIixcbiAgICBcInVuaWZpZWRcIjogXCJeMTEuMC41XCIsXG4gICAgXCJ2ZmlsZVwiOiBcIl42LjAuM1wiLFxuICAgIFwidml0ZVwiOiBcIl43LjEuM1wiLFxuICAgIFwid2VicGFja1wiOiBcIl41LjEwMS4zXCJcbiAgfSxcbiAgXCJwZWVyRGVwZW5kZW5jaWVzXCI6IHtcbiAgICBcIkBmdW1hZG9jcy9tZHgtcmVtb3RlXCI6IFwiXjEuNC4wXCIsXG4gICAgXCJmdW1hZG9jcy1jb3JlXCI6IFwiXjE0LjAuMCB8fCBeMTUuMC4wXCIsXG4gICAgXCJuZXh0XCI6IFwiXjE1LjMuMFwiLFxuICAgIFwicmVhY3RcIjogXCIqXCIsXG4gICAgXCJ2aXRlXCI6IFwiNi54LnggfHwgNy54LnhcIlxuICB9LFxuICBcInBlZXJEZXBlbmRlbmNpZXNNZXRhXCI6IHtcbiAgICBcInJlYWN0XCI6IHtcbiAgICAgIFwib3B0aW9uYWxcIjogdHJ1ZVxuICAgIH0sXG4gICAgXCJuZXh0XCI6IHtcbiAgICAgIFwib3B0aW9uYWxcIjogdHJ1ZVxuICAgIH0sXG4gICAgXCJ2aXRlXCI6IHtcbiAgICAgIFwib3B0aW9uYWxcIjogdHJ1ZVxuICAgIH0sXG4gICAgXCJAZnVtYWRvY3MvbWR4LXJlbW90ZVwiOiB7XG4gICAgICBcIm9wdGlvbmFsXCI6IHRydWVcbiAgICB9XG4gIH0sXG4gIFwicHVibGlzaENvbmZpZ1wiOiB7XG4gICAgXCJhY2Nlc3NcIjogXCJwdWJsaWNcIlxuICB9XG59XG4iLCAie1xuICBcIm5hbWVcIjogXCJmdW1hZG9jcy11aVwiLFxuICBcInZlcnNpb25cIjogXCIxNS42LjEyXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJUaGUgZnJhbWV3b3JrIGZvciBidWlsZGluZyBhIGRvY3VtZW50YXRpb24gd2Vic2l0ZSBpbiBOZXh0LmpzXCIsXG4gIFwia2V5d29yZHNcIjogW1xuICAgIFwiTmV4dEpzXCIsXG4gICAgXCJEb2NzXCJcbiAgXSxcbiAgXCJob21lcGFnZVwiOiBcImh0dHBzOi8vZnVtYWRvY3MudmVyY2VsLmFwcFwiLFxuICBcInJlcG9zaXRvcnlcIjogXCJnaXRodWI6ZnVtYS1uYW1hL2Z1bWFkb2NzXCIsXG4gIFwibGljZW5zZVwiOiBcIk1JVFwiLFxuICBcImF1dGhvclwiOiBcIkZ1bWEgTmFtYVwiLFxuICBcInR5cGVcIjogXCJtb2R1bGVcIixcbiAgXCJleHBvcnRzXCI6IHtcbiAgICBcIi4vc3R5bGUuY3NzXCI6IFwiLi9kaXN0L3N0eWxlLmNzc1wiLFxuICAgIFwiLi9jc3MvKlwiOiBcIi4vY3NzLypcIixcbiAgICBcIi4vaW1hZ2Utem9vbS5jc3NcIjogXCIuL2Rpc3QvaW1hZ2Utem9vbS5jc3NcIixcbiAgICBcIi4vY29tcG9uZW50cy8qXCI6IHtcbiAgICAgIFwiaW1wb3J0XCI6IFwiLi9kaXN0L2NvbXBvbmVudHMvKi5qc1wiLFxuICAgICAgXCJ0eXBlc1wiOiBcIi4vZGlzdC9jb21wb25lbnRzLyouZC50c1wiLFxuICAgICAgXCJkZWZhdWx0XCI6IFwiLi9kaXN0L2NvbXBvbmVudHMvKi5qc1wiXG4gICAgfSxcbiAgICBcIi4vaTE4blwiOiB7XG4gICAgICBcImltcG9ydFwiOiBcIi4vZGlzdC9pMThuLmpzXCIsXG4gICAgICBcInR5cGVzXCI6IFwiLi9kaXN0L2kxOG4uZC50c1wiXG4gICAgfSxcbiAgICBcIi4vbGF5b3V0cy9ob21lXCI6IHtcbiAgICAgIFwiaW1wb3J0XCI6IFwiLi9kaXN0L2xheW91dHMvaG9tZS9pbmRleC5qc1wiLFxuICAgICAgXCJ0eXBlc1wiOiBcIi4vZGlzdC9sYXlvdXRzL2hvbWUvaW5kZXguZC50c1wiXG4gICAgfSxcbiAgICBcIi4vbGF5b3V0cy9ob21lLypcIjoge1xuICAgICAgXCJpbXBvcnRcIjogXCIuL2Rpc3QvbGF5b3V0cy9ob21lLyouanNcIixcbiAgICAgIFwidHlwZXNcIjogXCIuL2Rpc3QvbGF5b3V0cy9ob21lLyouZC50c1wiXG4gICAgfSxcbiAgICBcIi4vbGF5b3V0cy9kb2NzXCI6IHtcbiAgICAgIFwiaW1wb3J0XCI6IFwiLi9kaXN0L2xheW91dHMvZG9jcy9pbmRleC5qc1wiLFxuICAgICAgXCJ0eXBlc1wiOiBcIi4vZGlzdC9sYXlvdXRzL2RvY3MvaW5kZXguZC50c1wiXG4gICAgfSxcbiAgICBcIi4vbGF5b3V0cy9kb2NzL3BhZ2VcIjoge1xuICAgICAgXCJpbXBvcnRcIjogXCIuL2Rpc3QvbGF5b3V0cy9kb2NzL3BhZ2UuanNcIixcbiAgICAgIFwidHlwZXNcIjogXCIuL2Rpc3QvbGF5b3V0cy9kb2NzL3BhZ2UuZC50c1wiXG4gICAgfSxcbiAgICBcIi4vbGF5b3V0cy9kb2NzLWNsaWVudFwiOiB7XG4gICAgICBcImltcG9ydFwiOiBcIi4vZGlzdC9sYXlvdXRzL2RvY3MvY2xpZW50LmpzXCIsXG4gICAgICBcInR5cGVzXCI6IFwiLi9kaXN0L2xheW91dHMvZG9jcy9jbGllbnQuZC50c1wiXG4gICAgfSxcbiAgICBcIi4vbGF5b3V0cy9ub3RlYm9va1wiOiB7XG4gICAgICBcImltcG9ydFwiOiBcIi4vZGlzdC9sYXlvdXRzL25vdGVib29rL2luZGV4LmpzXCIsXG4gICAgICBcInR5cGVzXCI6IFwiLi9kaXN0L2xheW91dHMvbm90ZWJvb2svaW5kZXguZC50c1wiXG4gICAgfSxcbiAgICBcIi4vbGF5b3V0cy9ub3RlYm9vay1jbGllbnRcIjoge1xuICAgICAgXCJpbXBvcnRcIjogXCIuL2Rpc3QvbGF5b3V0cy9ub3RlYm9vay9jbGllbnQuanNcIixcbiAgICAgIFwidHlwZXNcIjogXCIuL2Rpc3QvbGF5b3V0cy9ub3RlYm9vay9jbGllbnQuZC50c1wiXG4gICAgfSxcbiAgICBcIi4vbGF5b3V0cy9saW5rc1wiOiB7XG4gICAgICBcImltcG9ydFwiOiBcIi4vZGlzdC9sYXlvdXRzL2xpbmtzLmpzXCIsXG4gICAgICBcInR5cGVzXCI6IFwiLi9kaXN0L2xheW91dHMvbGlua3MuZC50c1wiXG4gICAgfSxcbiAgICBcIi4vbGF5b3V0cy9zaGFyZWRcIjoge1xuICAgICAgXCJpbXBvcnRcIjogXCIuL2Rpc3QvbGF5b3V0cy9zaGFyZWQuanNcIixcbiAgICAgIFwidHlwZXNcIjogXCIuL2Rpc3QvbGF5b3V0cy9zaGFyZWQuZC50c1wiXG4gICAgfSxcbiAgICBcIi4vcGFnZVwiOiB7XG4gICAgICBcIm5vZGVcIjogXCIuL2Rpc3QvcGFnZS5zZXJ2ZXIuanNcIixcbiAgICAgIFwiaW1wb3J0XCI6IFwiLi9kaXN0L3BhZ2UuanNcIixcbiAgICAgIFwidHlwZXNcIjogXCIuL2Rpc3QvcGFnZS5zZXJ2ZXIuZC50c1wiXG4gICAgfSxcbiAgICBcIi4vcHJvdmlkZXJcIjoge1xuICAgICAgXCJpbXBvcnRcIjogXCIuL2Rpc3QvcHJvdmlkZXIvaW5kZXguanNcIixcbiAgICAgIFwidHlwZXNcIjogXCIuL2Rpc3QvcHJvdmlkZXIvaW5kZXguZC50c1wiXG4gICAgfSxcbiAgICBcIi4vcHJvdmlkZXIvKlwiOiB7XG4gICAgICBcImltcG9ydFwiOiBcIi4vZGlzdC9wcm92aWRlci8qLmpzXCIsXG4gICAgICBcInR5cGVzXCI6IFwiLi9kaXN0L3Byb3ZpZGVyLyouZC50c1wiXG4gICAgfSxcbiAgICBcIi4vY29udGV4dHMvKlwiOiB7XG4gICAgICBcImltcG9ydFwiOiBcIi4vZGlzdC9jb250ZXh0cy8qLmpzXCIsXG4gICAgICBcInR5cGVzXCI6IFwiLi9kaXN0L2NvbnRleHRzLyouZC50c1wiXG4gICAgfSxcbiAgICBcIi4vbWR4XCI6IHtcbiAgICAgIFwibm9kZVwiOiBcIi4vZGlzdC9tZHguc2VydmVyLmpzXCIsXG4gICAgICBcImltcG9ydFwiOiBcIi4vZGlzdC9tZHguanNcIixcbiAgICAgIFwidHlwZXNcIjogXCIuL2Rpc3QvbWR4LmQudHNcIlxuICAgIH0sXG4gICAgXCIuL29nXCI6IHtcbiAgICAgIFwiaW1wb3J0XCI6IFwiLi9kaXN0L29nLmpzXCIsXG4gICAgICBcInR5cGVzXCI6IFwiLi9kaXN0L29nLmQudHNcIlxuICAgIH0sXG4gICAgXCIuL3RoZW1lLypcIjoge1xuICAgICAgXCJpbXBvcnRcIjogXCIuL2Rpc3QvdGhlbWUvKi5qc1wiLFxuICAgICAgXCJ0eXBlc1wiOiBcIi4vZGlzdC90aGVtZS8qLmQudHNcIlxuICAgIH0sXG4gICAgXCIuL3V0aWxzLypcIjoge1xuICAgICAgXCJpbXBvcnRcIjogXCIuL2Rpc3QvdXRpbHMvKi5qc1wiLFxuICAgICAgXCJ0eXBlc1wiOiBcIi4vZGlzdC91dGlscy8qLmQudHNcIlxuICAgIH0sXG4gICAgXCIuL2ludGVybmFsL2ljb25zXCI6IHtcbiAgICAgIFwiaW1wb3J0XCI6IFwiLi9kaXN0L2ljb25zLmpzXCIsXG4gICAgICBcInR5cGVzXCI6IFwiLi9kaXN0L2ljb25zLmQudHNcIlxuICAgIH1cbiAgfSxcbiAgXCJmaWxlc1wiOiBbXG4gICAgXCJkaXN0LypcIixcbiAgICBcImNzcy8qXCJcbiAgXSxcbiAgXCJzY3JpcHRzXCI6IHtcbiAgICBcImJ1aWxkXCI6IFwicG5wbSBidWlsZDpsYXlvdXQgJiYgcG5wbSBidWlsZDp0YWlsd2luZFwiLFxuICAgIFwiYnVpbGQ6bGF5b3V0XCI6IFwidHNjIC0tcHJvamVjdCB0c2NvbmZpZy5idWlsZC5qc29uICYmIHRzYy1hbGlhcyAtcCB0c2NvbmZpZy5idWlsZC5qc29uXCIsXG4gICAgXCJidWlsZDp0YWlsd2luZFwiOiBcInRhaWx3aW5kY3NzIC1pIGNzcy9zdHlsZS5jc3MgLW8gLi9kaXN0L3N0eWxlLmNzcyAmJiB0YWlsd2luZGNzcyAtaSBzcmMvY29tcG9uZW50cy9pbWFnZS16b29tLmNzcyAtbyBkaXN0L2NvbXBvbmVudHMvaW1hZ2Utem9vbS5jc3NcIixcbiAgICBcImNsZWFuXCI6IFwicmltcmFmIGRpc3RcIixcbiAgICBcImRldlwiOiBcImNvbmN1cnJlbnRseSBcXFwidHNjIC13IC0tcHJvamVjdCB0c2NvbmZpZy5idWlsZC5qc29uXFxcIiBcXFwidHNjLWFsaWFzIC13IC1wIHRzY29uZmlnLmJ1aWxkLmpzb25cXFwiIFxcXCJwbnBtIGRldjp0YWlsd2luZFxcXCJcIixcbiAgICBcImRldjp0YWlsd2luZFwiOiBcInRhaWx3aW5kY3NzIC1pIGNzcy9zdHlsZS5jc3MgLW8gLi9kaXN0L3N0eWxlLmNzcyAtdyAmJiB0YWlsd2luZGNzcyAtaSBzcmMvY29tcG9uZW50cy9pbWFnZS16b29tLmNzcyAtbyBkaXN0L2NvbXBvbmVudHMvaW1hZ2Utem9vbS5jc3MgLXdcIixcbiAgICBcImxpbnRcIjogXCJlc2xpbnQgLlwiLFxuICAgIFwidHlwZXM6Y2hlY2tcIjogXCJ0c2MgLS1ub0VtaXRcIlxuICB9LFxuICBcImRlcGVuZGVuY2llc1wiOiB7XG4gICAgXCJAcmFkaXgtdWkvcmVhY3QtYWNjb3JkaW9uXCI6IFwiXjEuMi4xMlwiLFxuICAgIFwiQHJhZGl4LXVpL3JlYWN0LWNvbGxhcHNpYmxlXCI6IFwiXjEuMS4xMlwiLFxuICAgIFwiQHJhZGl4LXVpL3JlYWN0LWRpYWxvZ1wiOiBcIl4xLjEuMTVcIixcbiAgICBcIkByYWRpeC11aS9yZWFjdC1kaXJlY3Rpb25cIjogXCJeMS4xLjFcIixcbiAgICBcIkByYWRpeC11aS9yZWFjdC1uYXZpZ2F0aW9uLW1lbnVcIjogXCJeMS4yLjE0XCIsXG4gICAgXCJAcmFkaXgtdWkvcmVhY3QtcG9wb3ZlclwiOiBcIl4xLjEuMTVcIixcbiAgICBcIkByYWRpeC11aS9yZWFjdC1wcmVzZW5jZVwiOiBcIl4xLjEuNVwiLFxuICAgIFwiQHJhZGl4LXVpL3JlYWN0LXNjcm9sbC1hcmVhXCI6IFwiXjEuMi4xMFwiLFxuICAgIFwiQHJhZGl4LXVpL3JlYWN0LXNsb3RcIjogXCJeMS4yLjNcIixcbiAgICBcIkByYWRpeC11aS9yZWFjdC10YWJzXCI6IFwiXjEuMS4xM1wiLFxuICAgIFwiY2xhc3MtdmFyaWFuY2UtYXV0aG9yaXR5XCI6IFwiXjAuNy4xXCIsXG4gICAgXCJmdW1hZG9jcy1jb3JlXCI6IFwid29ya3NwYWNlOipcIixcbiAgICBcImxvZGFzaC5tZXJnZVwiOiBcIl40LjYuMlwiLFxuICAgIFwibmV4dC10aGVtZXNcIjogXCJeMC40LjZcIixcbiAgICBcInBvc3Rjc3Mtc2VsZWN0b3ItcGFyc2VyXCI6IFwiXjcuMS4wXCIsXG4gICAgXCJyZWFjdC1tZWRpdW0taW1hZ2Utem9vbVwiOiBcIl41LjMuMFwiLFxuICAgIFwic2Nyb2xsLWludG8tdmlldy1pZi1uZWVkZWRcIjogXCJeMy4xLjBcIixcbiAgICBcInRhaWx3aW5kLW1lcmdlXCI6IFwiXjMuMy4xXCJcbiAgfSxcbiAgXCJkZXZEZXBlbmRlbmNpZXNcIjoge1xuICAgIFwiQGZ1bWFkb2NzL2NsaVwiOiBcIndvcmtzcGFjZToqXCIsXG4gICAgXCJAbmV4dC9lc2xpbnQtcGx1Z2luLW5leHRcIjogXCJeMTUuNS4wXCIsXG4gICAgXCJAdGFpbHdpbmRjc3MvY2xpXCI6IFwiXjQuMS4xMlwiLFxuICAgIFwiQHR5cGVzL2xvZGFzaC5tZXJnZVwiOiBcIl40LjYuOVwiLFxuICAgIFwiQHR5cGVzL3JlYWN0XCI6IFwiXjE5LjEuMTBcIixcbiAgICBcIkB0eXBlcy9yZWFjdC1kb21cIjogXCJeMTkuMS43XCIsXG4gICAgXCJlc2xpbnQtY29uZmlnLWN1c3RvbVwiOiBcIndvcmtzcGFjZToqXCIsXG4gICAgXCJmdW1hZG9jcy1jb3JlXCI6IFwid29ya3NwYWNlOipcIixcbiAgICBcIm5leHRcIjogXCIxNS41LjBcIixcbiAgICBcInRhaWx3aW5kY3NzXCI6IFwiXjQuMS4xMlwiLFxuICAgIFwidHNjLWFsaWFzXCI6IFwiXjEuOC4xNlwiLFxuICAgIFwidHNjb25maWdcIjogXCJ3b3Jrc3BhY2U6KlwiXG4gIH0sXG4gIFwicGVlckRlcGVuZGVuY2llc1wiOiB7XG4gICAgXCJAdHlwZXMvcmVhY3RcIjogXCIqXCIsXG4gICAgXCJuZXh0XCI6IFwiMTQueC54IHx8IDE1LngueFwiLFxuICAgIFwicmVhY3RcIjogXCIxOC54LnggfHwgMTkueC54XCIsXG4gICAgXCJyZWFjdC1kb21cIjogXCIxOC54LnggfHwgMTkueC54XCIsXG4gICAgXCJ0YWlsd2luZGNzc1wiOiBcIl4zLjQuMTQgfHwgXjQuMC4wXCJcbiAgfSxcbiAgXCJwZWVyRGVwZW5kZW5jaWVzTWV0YVwiOiB7XG4gICAgXCJuZXh0XCI6IHtcbiAgICAgIFwib3B0aW9uYWxcIjogdHJ1ZVxuICAgIH0sXG4gICAgXCJAdHlwZXMvcmVhY3RcIjoge1xuICAgICAgXCJvcHRpb25hbFwiOiB0cnVlXG4gICAgfSxcbiAgICBcInRhaWx3aW5kY3NzXCI6IHtcbiAgICAgIFwib3B0aW9uYWxcIjogdHJ1ZVxuICAgIH1cbiAgfSxcbiAgXCJwdWJsaXNoQ29uZmlnXCI6IHtcbiAgICBcImFjY2Vzc1wiOiBcInB1YmxpY1wiXG4gIH1cbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBd1UsU0FBUyxxQkFBcUI7QUFDdFcsU0FBUyxvQkFBb0I7OztBQ0Q3QjtBQUFBLEVBQ0UsTUFBUTtBQUFBLEVBQ1IsU0FBVztBQUFBLEVBQ1gsYUFBZTtBQUFBLEVBQ2YsVUFBWTtBQUFBLElBQ1Y7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFVBQVk7QUFBQSxFQUNaLFlBQWM7QUFBQSxFQUNkLFNBQVc7QUFBQSxFQUNYLFFBQVU7QUFBQSxFQUNWLE1BQVE7QUFBQSxFQUNSLFNBQVc7QUFBQSxJQUNULEtBQUs7QUFBQSxNQUNI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QjtBQUFBLElBQ2pCLE1BQVE7QUFBQSxJQUNSLGFBQWU7QUFBQSxJQUNmLGFBQWE7QUFBQSxJQUNiLFVBQVk7QUFBQSxFQUNkO0FBQUEsRUFDQSxrQkFBb0I7QUFBQSxJQUNsQixnQkFBZ0I7QUFBQSxJQUNoQixNQUFRO0FBQUEsSUFDUixPQUFTO0FBQUEsSUFDVCxhQUFhO0FBQUEsSUFDYixhQUFlO0FBQUEsRUFDakI7QUFBQSxFQUNBLHNCQUF3QjtBQUFBLElBQ3RCLE1BQVE7QUFBQSxNQUNOLFVBQVk7QUFBQSxJQUNkO0FBQUEsSUFDQSxnQkFBZ0I7QUFBQSxNQUNkLFVBQVk7QUFBQSxJQUNkO0FBQUEsSUFDQSxhQUFlO0FBQUEsTUFDYixVQUFZO0FBQUEsSUFDZDtBQUFBLEVBQ0Y7QUFBQSxFQUNBLGVBQWlCO0FBQUEsSUFDZixRQUFVO0FBQUEsRUFDWjtBQUNGOzs7QUxsS0EsSUFBTSxXQUFXO0FBQUEsRUFDZixpQkFBaUJDLGlCQUFRO0FBQUEsRUFDekIsZUFBZUEsaUJBQU07QUFBQSxFQUNyQixnQkFBZ0JBLGlCQUFPO0FBQUEsRUFDdkIsd0JBQXdCQSxpQkFBYTtBQUFBLEVBQ3JDLGlDQUFpQyxnQkFBc0I7QUFDekQ7QUFFQTtBQUFBLEVBQ0U7QUFBQSxFQUNBLDJCQUEyQixLQUFLLFVBQVUsUUFBUSxDQUFDO0FBQ3JEO0FBRUEsUUFBUSxJQUFJLDRDQUE0QztBQUV4RCxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixPQUFPLENBQUMsa0JBQWtCLHFCQUFxQjtBQUFBLEVBQy9DLFFBQVE7QUFBQSxFQUNSLFFBQVE7QUFBQSxFQUNSLEtBQUs7QUFDUCxDQUFDOyIsCiAgIm5hbWVzIjogWyJwYWNrYWdlX2RlZmF1bHQiLCAicGFja2FnZV9kZWZhdWx0IiwgInBhY2thZ2VfZGVmYXVsdCIsICJwYWNrYWdlX2RlZmF1bHQiLCAicGFja2FnZV9kZWZhdWx0Il0KfQo=
