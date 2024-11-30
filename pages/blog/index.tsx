// pages/index.js
import Link from "next/link";
import { posts } from "../../constant";
import Header from "../../components/Header/Header";
import GetInTouch from "../../components/Home/GetInTouch/GetInTouch";
import { getURL } from "../../util/helper";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8 pt-32">
      <Header title="Blog Home" />
      <ul className="max-w-4xl mx-auto mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {posts.map((post) => (
          <li key={post.slug} className="mb-6">
            <Link
              href={getURL(`/${post.slug}`)}
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
