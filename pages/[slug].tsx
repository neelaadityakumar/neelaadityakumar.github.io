import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

import rehypePrism from "@mapbox/rehype-prism";
import Header from "../components/Header/Header";
import GetInTouch from "../components/Home/GetInTouch/GetInTouch";
import { overrideComponents } from "../components/mdx-components";
import MdxLayout from "../components/mdx-layout";
import { posts } from "../constant";

export default function BlogPost({ post }) {
  return (
    <div className="container mx-auto px-4 py-8 pt-24">
      <Header title="Blog Home" />
      <MdxLayout>
        <div>
          <h1 className="text-white text-4xl font-bold">{post.title}</h1>
          <div className="mt-6">
            <MDXRemote {...post.content} components={overrideComponents} />
          </div>
        </div>
      </MdxLayout>
      <GetInTouch />
    </div>
  );
}

export async function getStaticPaths() {
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const post = posts.find((post) => post.slug === slug);

  const filePath = path.join(process.cwd(), `markdown/${slug}.mdx`);
  const fileContent = fs.readFileSync(filePath, "utf-8");

  const { content, data } = matter(fileContent);

  const mdxContent = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [rehypePrism],
    },
  });

  return {
    props: {
      post: {
        ...post,
        content: mdxContent,
      },
    },
  };
}
