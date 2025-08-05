import React from "react";
import { motion } from "framer-motion";
import { setBlog } from "../../redux/blogSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BLOG_API_ENDPOINT } from "../../utils/constants";
import axios from "axios";
import toast from "react-hot-toast";
import useGetAllBlogs from "../../hooks/useGetAllBlogs";

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" },
};

export default function AdminBlogCard({ id, title, blog, image }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fetchBlogs = useGetAllBlogs();

  const handleEdit = () => {
    dispatch(setBlog({ id, title, blog, image }));
    navigate("/admin/blog/edit");
  };

  const handleDelete = async () => {
    try {
      const res = await axios.delete(`${BLOG_API_ENDPOINT}/delete`, {
        data: { id },
      });

      if (res.data.success) {
        toast.success("Blog deleted successfully!");
        fetchBlogs();
      } else {
        toast.error(res.data.message);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      transition={fadeIn.transition}
      className="card bg-base-100 w-full shadow-sm"
    >
      <figure>
        <img src={`https://hsfl-backend.onrender.com${image}`} alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="card-actions justify-end flex gap-2">
          <button
            onClick={handleEdit}
            className="btn btn-outline btn-sm btn-default"
          >
            Edit
          </button>
          <button onClick={handleDelete} className="btn btn-outline btn-sm btn-error">Delete</button>
        </div>
      </div>
    </motion.div>
  );
}
