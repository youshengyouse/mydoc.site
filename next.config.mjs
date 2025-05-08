import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  // reactStrictMode: true,
  // basePath: "/src/app",   // 我需要部署在子路径下
  // basePath: process.env.PAGES_BASE_PATH,
  output: "export",       // Next.js 启用静态导出
  // trailingSlash: true,    // 针对 Nginx，静态文件使用 xxx/index.html 格式
  // images: {
  //   unoptimized: true,    // 静态导出必须关闭图片优化
  // },
};

export default withMDX(config);
