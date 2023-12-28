/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  distDir: "docs",
  output: "export",
  basePath: "/github-pages",
};

module.exports = nextConfig;
