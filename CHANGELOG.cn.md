变更日志

# 1.0.0

2025-08-19

- 新装 nextjs

  - 使用命令 `npx create-next-app@latest mydoc.site`
  - push 到 github
  - 部署到 vercel, https://vercel.com/new?teamSlug=qiutians-projects,可惜要科学上网才能访问

# 1.1.0

2025-08-20

- 手工安装 fumadocs

  > 参考：https://fumadocs.dev/docs/ui/manual-installation#getting-started

  - 1.安装 fumadocs 的 core 和 ui 包
    - pnpm add ./src/fumadocs/core
    - pnpm add ./src/fumadocs/ui
  - 2.安装内容源相关包及配置文件
    - pnpm add ./src/fumadocs/mdx
    - pnpm add @types/mdx
    - 修改四个文件
      - next.config.mjs(原来是.ts)
      - mdx-components.tsx(新建)
      - source.config.tx
      - package.json
    - 内容来源
      - lib/source.ts

---

- git 命令

  - git branch -M main # 将当前分支重命名为 main
  - git remote add origin git@github.com:youshengyouse/mydoc.site.git
  - git push -u origin main

- [x] 支持代码高亮
- [ ] 添加更多自定义组件

---

# 7.0

10/19/2018

- General Changelog / Developer Notes
  - Accounts, Leads and Opportunities are now listable
  - Contacts can now be converted to leads
  - Campaigns
    - A/B testing for campaigns added
    - Account, Lead and Opportunity lists can now all be used in campaigns
  - Miscellaneous bug fixes
