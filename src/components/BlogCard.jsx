import React from "react";
import { CalendarDays } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setBlog } from "../redux/blogSlice";

const BlogCard = ({ id, title, blog, image, date }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setBlog({ id, title, blog, image, date }));
    navigate(`/blog/${id}`);
  };
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 flex flex-col">
      <img
        src={`https://hsfl-backend.onrender.com${image}`}
        alt={title}
        className="w-full h-48 object-cover transition duration-300 hover:scale-[1.02]"
      />

      <div className="p-5 space-y-3 flex-grow flex flex-col">
        <h3 className="text-xl font-semibold text-gray-800 line-clamp-2">
          {title}
        </h3>

        <p
          className="text-sm text-gray-600 line-clamp-3"
          dangerouslySetInnerHTML={{ __html: blog }}
        ></p>

        <div className="flex items-center text-sm text-gray-400 pt-2">
          <CalendarDays className="w-4 h-4 mr-2" />
          <span>{date}</span>
        </div>

        {/* Read More Button */}
        <div className="pt-4 mt-auto">
          <button
            onClick={handleClick}
            className="px-4 py-2 text-sm font-medium text-white bg-[#2E5B41] rounded-md hover:bg-[#244A35] transition"
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
