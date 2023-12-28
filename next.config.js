/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  distDir: "docs",
  output: "export",
};

module.exports = nextConfig;
