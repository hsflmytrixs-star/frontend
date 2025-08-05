import React from "react";
import { motion } from "framer-motion";
import useGetCourse from "../hooks/useGetCourse";
import { useNavigate } from "react-router-dom";

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" },
};

export default function CourseCard({ title, description, id, image }) {
  const navigate = useNavigate();
  const fetchCourse = useGetCourse();

  const handleClick = async () => {
    try {
      await fetchCourse(id);
      navigate(`/course/${id}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      transition={fadeIn.transition}
      className="card bg-base-100 w-96 shadow-sm"
    >
      <figure>
        <img
          src={`https://hsfl-backend.onrender.com${image}`}
          alt={title}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button
            onClick={handleClick}
            className="btn btn-outline btn-primary"
          >
            View Course
          </button>
        </div>
      </div>
    </motion.div>
  );
}
