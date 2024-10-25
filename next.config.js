/** @type {import('next').NextConfig} */

let nextConfig = {};
if (process.env.NODE_ENV == "production") {
  nextConfig = {
    ...nextConfig,
    reactStrictMode: false,
    swcMinify: true,
    distDir: "out",
    output: "export",
    basePath: "/github-pages",
    assetPrefix: "./",
  };
}

module.exports = nextConfig;
