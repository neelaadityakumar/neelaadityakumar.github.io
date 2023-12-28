/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  distDir: "out",
  output: "export",
  basePath: "/github-pages",
};

module.exports = nextConfig;
