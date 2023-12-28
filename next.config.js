/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  distDir: "out",
  basePath: "/github-pages",
  assetPrefix: "/github-pages",
};

module.exports = nextConfig;
