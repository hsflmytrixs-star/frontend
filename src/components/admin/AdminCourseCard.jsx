import React from "react";
import { motion } from "framer-motion";
import axios from "axios";
import toast from "react-hot-toast";
import { COURSE_API_ENDPOINT } from "../../utils/constants";
import { useNavigate } from "react-router-dom";
import useGetAllCourses from "../../hooks/useGetAllCourses";
import useGetCourse from "../../hooks/useGetCourse"; // ✅ import the hook

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" },
};

export default function AdminCourseCard({ title, description, id, image }) {
  const navigate = useNavigate();
  const fetchCourses = useGetAllCourses();
  const fetchCourse = useGetCourse(); // ✅ use the hook

  const handleDelete = async () => {
    try {
      const res = await axios.delete(`${COURSE_API_ENDPOINT}/delete`, {
        data: { id },
        withCredentials: true,
      });

      if (res?.data?.success) {
        toast.success(res.data.message);
        await fetchCourses();
      }
    } catch (error) {
      console.error("Delete error:", error);
      toast.error("Failed to delete course");
    }
  };

  const handleEdit = async () => {
    await fetchCourse(id); // ✅ fetch course from server and store in Redux
    navigate("/admin/course/edit"); // ✅ navigate after setting it
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
        <p>{description}</p>
        <div className="card-actions justify-end flex gap-2">
          <button onClick={handleEdit} className="btn btn-outline btn-sm btn-default">
            Edit
          </button>
          <button onClick={handleDelete} className="btn btn-outline btn-sm btn-error">
            Delete
          </button>
        </div>
      </div>
    </motion.div>
  );
}
