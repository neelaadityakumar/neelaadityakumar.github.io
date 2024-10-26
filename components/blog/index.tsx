import BlogCard from "./BlogCard";

function Blog({ blogs }) {
  return (
    <div
      id="blogs"
      className="relative z-50 my-12 lg:my-24 border-[#25213b] max-w-6xl mx-auto"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
        {blogs.map(
          (blog, i) => blog?.cover_image && <BlogCard blog={blog} key={i} />
        )}
      </div>
    </div>
  );
}

export default Blog;
