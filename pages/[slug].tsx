import { useEffect, useState } from "react";
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
import DraftBlogBanner from "../components/DraftBanner";

// Default base for local markdown lookup
const LOCAL_MARKDOWN_BASE = path.join(process.cwd(), "markdown");

export default function BlogPost({ post }) {
  const [content, setContent] = useState(post.content);

  useEffect(() => {
    async function fetchRemoteContent() {
      if (post.remoteUrl) {
        try {
          const response = await fetch(post.remoteUrl);
          const markdownContent = await response.text();
          const { content, data } = matter(markdownContent);

          const mdxSerialized = await serialize(content, {
            mdxOptions: {
              rehypePlugins: [rehypePrism],
            },
          });

          setContent(mdxSerialized);
        } catch (error) {
          console.error("Error fetching remote markdown content", error);
        }
      }
    }

    fetchRemoteContent();
  }, [post]);

  return (
    <div className="container mx-auto px-4 py-8 pt-24">
      <Header title="Blog Home" />
      {post.type === "draft" ? (
        <DraftBlogBanner />
      ) : (
        <MdxLayout header={post.title} subheader={post.subheader}>
          <div>
            <div className="mt-6">
              {content ? (
                <MDXRemote {...content} components={overrideComponents} />
              ) : (
                <div>Loading content...</div>
              )}
            </div>
          </div>
        </MdxLayout>
      )}

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

  let mdxContent = null;

  if (!post.remoteUrl) {
    try {
      const filePath = path.join(LOCAL_MARKDOWN_BASE, `${slug}.mdx`);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { content, data } = matter(fileContent);

      mdxContent = await serialize(content, {
        mdxOptions: {
          rehypePlugins: [rehypePrism],
        },
      });
    } catch (error) {
      console.error("Error reading local markdown content", error);
    }
  }

  return {
    props: {
      post: {
        ...post,
        content: mdxContent,
      },
    },
  };
}
