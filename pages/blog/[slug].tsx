import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import MdxLayout from "../../components/mdx-layout";
import { overrideComponents } from "../../components/mdx-components";
import { posts } from "../../constant";
import rehypePrism from "@mapbox/rehype-prism";

export default function BlogPost({ post }) {
  return (
    <MdxLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-AAsecondary text-4xl font-bold">{post.title}</h1>
        <div className="mt-6">
          {/* Render the MDX content using MDXRemote */}

          <MDXRemote {...post.content} components={overrideComponents} />
        </div>
      </div>
    </MdxLayout>
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
