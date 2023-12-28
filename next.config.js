/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  distDir: "build",
  output: "export",
};

module.exports = nextConfig;
