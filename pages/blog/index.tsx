// pages/index.js
import Link from "next/link";
import { posts } from "../../constant";
import Header from "../../components/Header/Header";
import GetInTouch from "../../components/Home/GetInTouch/GetInTouch";
// data/posts.js

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8 pt-32">
      <Header title="Blog Home" />
      <h1 className="text-AAsecondary text-4xl font-bold">Blog Home</h1>
      <ul className="mt-6">
        {posts.map((post) => (
          <li key={post.slug} className="mb-6">
            <Link
              href={`/blog/${post.slug}`}
              className="text-AAsecondary text-2xl font-semibold hover:underline"
            >
              {post.title}
            </Link>
            <p className="text-gray-400">{post.description}</p>
            <span className="text-sm text-gray-500">{post.date}</span>
          </li>
        ))}
      </ul>{" "}
      <GetInTouch />
    </div>
  );
}
