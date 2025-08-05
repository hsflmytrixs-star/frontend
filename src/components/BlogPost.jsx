import React from "react";
import { CalendarDays } from "lucide-react";
import Navbar from "./shared/Navbar";
import Footer from "./shared/Footer";
import { useSelector } from "react-redux";

const BlogPost = () => {
  const blog = useSelector((store) => store.Blog.blog);

  return (
    <>
      <Navbar />
      <div className="bg-white text-gray-800 min-h-screen">
        {/* Hero Section with background image */}
        <div
          className="w-full h-[60vh] md:h-[80vh] bg-cover bg-center flex items-center justify-center relative"
          style={{ backgroundImage: `url(https://hsfl-backend.onrender.com${blog.image})` }}
        >
          <div className="absolute inset-0 bg-black/50" />
          <h1 className="relative z-10 text-white text-3xl md:text-5xl font-bold text-center px-4 drop-shadow-lg max-w-4xl">
            {blog.title}
          </h1>
        </div>

        {/* Date Meta */}
        <div className="max-w-3xl mx-auto mt-10 px-4 md:px-0 flex items-center text-gray-500 text-sm space-x-2">
          <CalendarDays className="w-5 h-5" />
          <span>{blog.date}</span>
        </div>

        {/* Blog Content */}
        <article
          className="max-w-3xl mx-auto mt-8 px-4 md:px-0 text-lg leading-relaxed space-y-8"
          dangerouslySetInnerHTML={{ __html: blog.blog }}
        />
      </div>
      <Footer />
    </>
  );
};

export default BlogPost;
