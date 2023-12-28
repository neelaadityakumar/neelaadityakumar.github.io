/** @type {import('next').NextConfig} */

const production = process.env.NODE_ENV === "production";
const prodConfig = {
  output: "export",
  basePath: "/github-pages",
};
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  distDir: "out",
};

if (production) {
  nextConfig.output = prodConfig.output;
  nextConfig.basePath = prodConfig.basePath;
}

module.exports = nextConfig;
