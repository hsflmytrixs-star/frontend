import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "./shared/Navbar";
import Carousel from "./Carousel";
import Hero from "./Hero";
import CourseCard from "./CourseCard";
import Footer from "./shared/Footer";
import CoreValuesSection from "./CoreValuesSection";
import SDGFrameworkSection from "./SDGFrameworkSection";
import LearningModelSection from "./LearningModelSection";
import useGetAllCourses from "../hooks/useGetAllCourses";
import { useSelector } from "react-redux";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const hoverScale = {
  scale: 1.05,
  transition: { duration: 0.3, ease: "easeOut" },
};

const Homepage = () => {
  const fetchCourses = useGetAllCourses();

  useEffect(() => {
    fetchCourses();
  }, [fetchCourses]);

  const courses = useSelector((store) => store.Courses?.courses);

  return (
    <>
      <div className="bg-white min-h-screen">
        <Navbar />
        <Carousel />

        <Hero />

        {/* Divider #2 - Blue */}
        <div className="w-full h-0.5 bg-black"></div>

        <CoreValuesSection />

        {/* Divider #3 - Orange */}
        <div className="w-full h-0.5 bg-black"></div>

        <SDGFrameworkSection />

        {/* Divider #4 - Yellow */}
        <div className="w-full h-0.5 bg-black"></div>

        <LearningModelSection />

        {/* Divider #6 - Blue */}
        <div className="w-full h-0.5 bg-black"></div>

        {/* Courses Section */}
        <section className="px-4 sm:px-6 md:px-12 lg:px-24 py-16 bg-white text-center">
          <div className="flex justify-center">
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={fadeUpVariant}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-10 relative group"
            >
              Discover{" "}
              <span className="relative inline-block">
                <span className="text-black bg-clip-text">Courses</span>
                <span className="block h-1 bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left mt-1"></span>
              </span>
            </motion.h1>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {courses.map((course, index) => (
              <motion.div
                key={index}
                whileHover={hoverScale}
                variants={fadeUpVariant}
              >
                <CourseCard
                  title={course?.title}
                  description={course?.description}
                  id={course?._id}
                  image={course?.image}
                />
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Divider #7 - Orange */}
        <div className="w-full h-0.5 bg-black"></div>
      </div>

      {/* More at Hanifl Centre Section */}
      <section className="bg-[#10144e] py-20 px-6 md:px-12 lg:px-24">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
          className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12 relative group"
        >
          <span className="relative inline-block">
            <span className="bg-white bg-clip-text text-transparent">
              More At HSRL
            </span>
            <span className="block h-1 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left mt-1"></span>
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 text-white"
        >
          Watch insightful videos, tutorials, and talks from the Himalayan
          School to boost your learning journey.
        </motion.p>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {/* Video 1 */}
          <motion.div
            whileHover={hoverScale}
            variants={fadeUpVariant}
            className="rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="relative w-full pt-[56.25%]">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/MgxqUjuyXI4?si=pY90ezrNalZBqxX4"
                title="Video 1"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>

          {/* Video 2 */}
          <motion.div
            whileHover={hoverScale}
            variants={fadeUpVariant}
            className="rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="relative w-full pt-[56.25%]">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/GoZCjhHX__c?si=KQsHzweih7kmH2-x"
                title="Video 2"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>

          {/* Video 3 */}
          <motion.div
            whileHover={hoverScale}
            variants={fadeUpVariant}
            className="rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="relative w-full pt-[56.25%]">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/7-09aHlXqIc?si=FUJz5-Fulu_aewYU"
                title="Video 3"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>

          {/* Video 4 */}
          <motion.div
            whileHover={hoverScale}
            variants={fadeUpVariant}
            className="rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="relative w-full pt-[56.25%]">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/mWDh-9vR6KI?si=8QXf1rB_A0sJ-aYr"
                title="Video 4"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>

          {/* Video 5 */}
          <motion.div
            whileHover={hoverScale}
            variants={fadeUpVariant}
            className="rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="relative w-full pt-[56.25%]">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/qjxCTjdEvP0?si=Y-J0nlSJSwUvLcqQ"
                title="Video 5"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>

          {/* Video 6 */}
          <motion.div
            whileHover={hoverScale}
            variants={fadeUpVariant}
            className="rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="relative w-full pt-[56.25%]">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/h__pjtjuy1o?si=NIxLc-KGTZ0WHFDY"
                title="Video 6"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </>
  );
};

export default Homepage;
