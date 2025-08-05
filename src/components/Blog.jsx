import React, { useEffect } from "react";
import Navbar from "./shared/Navbar";
import BlogCard from "./BlogCard";
import Footer from "./shared/Footer";
import { useSelector } from "react-redux";
import useGetAllBlogs from "../hooks/useGetAllBlogs";

const Blog = () => {
  const fetchBlogs = useGetAllBlogs();
  const blogs = useSelector((store) => store.Blogs.blogs);

  useEffect(() => {
    fetchBlogs(); // fetch blogs when component mounts
  }, [fetchBlogs]);

  return (
    <>
      <Navbar />

      {/* Hero Banner */}
      <div
        className="w-full h-[80vh] bg-cover bg-center flex items-center justify-center relative"
        style={{
          backgroundImage: "url('/About_us_banner.jpg')",
        }}
      >
        <div className="bg-black/50 w-full h-full absolute top-0 left-0" />
        <h1 className="text-white text-4xl md:text-5xl font-bold z-10 text-center drop-shadow-lg">
          Our Blog
        </h1>
      </div>

      {/* Blog Cards Section */}
      <section className="min-h-[60vh] px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-neutral-900 mb-12">
            Latest Blog Posts
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {blogs.length > 0 ? (
              blogs.map((blog) => (
                <BlogCard
                  key={blog._id}
                  id={blog._id}
                  title={blog.title}
                  blog={blog.blog}
                  image={blog.image}
                  date={new Date(blog.createdAt).toDateString()}
                />
              ))
            ) : (
              <p className="text-center col-span-full text-gray-500">
                No blog posts available.
              </p>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Blog;
