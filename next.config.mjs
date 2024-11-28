import createMDX from "@next/mdx";
import remarkGfm from "remark-gfm";

let nextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

if (process.env.NODE_ENV === "production") {
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

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
  },
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
