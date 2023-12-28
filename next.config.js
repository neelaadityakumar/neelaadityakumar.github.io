/** @type {import('next').NextConfig} */

const production = process.env.NODE_ENV === "production";
const prodConfig = {
  reactStrictMode: false,
  swcMinify: true,
  distDir: "out",
  output: "export",
  basePath: "/github-pages",
};
const devConfig = {
  reactStrictMode: false,
  swcMinify: true,
  distDir: "out",
};
let nextConfig = prodConfig;
if (!production) {
  nextConfig = { ...devConfig };
}

module.exports = nextConfig;
