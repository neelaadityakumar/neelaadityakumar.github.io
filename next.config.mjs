import createMDX from "@next/mdx";
import remarkGfm from "remark-gfm";
import rehypePrism from "rehype-prism-plus";

let nextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github.com",
        pathname: "/sudheerj/reactjs-interview-questions/raw/master/images/**",
      },
    ],
  },
  webpack(config, options) {
    config.module.rules.push({
      test: /\.mdx$/,
      use: [
        options.defaultLoaders.babel,
        {
          loader: "@mdx-js/loader",
        },
      ],
    });
    return config;
  },
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
    rehypePlugins: [rehypePrism],
  },
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
