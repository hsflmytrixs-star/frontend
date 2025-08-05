import React, { useState } from "react";
import Navbar from "./shared/Navbar";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Course = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");

  const course = useSelector((store) => store.Course.course);

  return (
    <div className="bg-[#c4c7c4]">
      <Navbar />
      <div className="text-gray-800">
        {/* Hero Section */}
        <div
          className="w-full h-[80vh] bg-center bg-cover relative flex items-center justify-center"
          style={{
            backgroundImage: `url('https://hsfl-backend.onrender.com${course?.image}')`,
          }}
        >
          <div className="absolute bg-black/30 inset-0 flex flex-col items-center justify-center px-4 text-center text-white">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              {course?.title}
            </h1>
            <p className="text-lg md:text-2xl mb-2">{course?.subtitle}</p>
          </div>
        </div>

        {/* Tab Buttons */}
        <div className="bg-[#c4c7c4] px-4 md:px-20 mt-10">
          <div className="flex flex-wrap gap-2 md:gap-4">
            {["overview", "itinerary", "packing", "faq", "video"].map((tab) => (
              <button
                key={tab}
                className={`px-4 py-2 text-sm md:text-base rounded font-semibold ${
                  activeTab === tab
                    ? "bg-green-700 text-white"
                    : "bg-gray-100 hover:bg-green-700 hover:text-white"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab === "overview" && "OVERVIEW"}
                {tab === "itinerary" && "SAMPLE ITINERARY"}
                {tab === "packing" && "PACKING LIST"}
                {tab === "faq" && "FAQ"}
                {tab === "video" && "VIDEO"}
              </button>
            ))}
          </div>
        </div>

        {/* Content and Course Details Section */}
        <div className="bg-[#c4c7c4] px-4 md:px-20 py-12 flex flex-col lg:flex-row gap-12 items-start">
          {/* Main Tab Content */}
          <div className="flex-1">
            {activeTab === "overview" && (
              <div dangerouslySetInnerHTML={{ __html: course?.overview }} />
            )}
            {activeTab === "itinerary" && (
              <div dangerouslySetInnerHTML={{ __html: course?.sample_itinerary }} />
            )}
            {activeTab === "packing" && (
              <div dangerouslySetInnerHTML={{ __html: course?.packing_list }} />
            )}
            {activeTab === "faq" && (
              <div dangerouslySetInnerHTML={{ __html: course?.faq }} />
            )}
            {activeTab === "video" && course?.video && (
              <div>
                <h2 className="text-xl font-semibold mb-4">Course Video</h2>
                <video
                  controls
                  className="w-full rounded shadow"
                  src={`https://hsfl-backend.onrender.com${course.video}`}
                />
              </div>
            )}
          </div>

          {/* Sidebar Course Details */}
          <div className="lg:w-[350px] w-full bg-gray-100 shadow-lg rounded-xl p-6 space-y-4 max-h-[80vh] overflow-y-auto">
            <h2 className="text-2xl font-bold text-gray-800">Course Details</h2>
            <div dangerouslySetInnerHTML={{ __html: course?.course_details }} />
            <button
              onClick={() => navigate("/contact")}
              className="btn btn-outline text-green-700 border-green-700 hover:bg-green-700 hover:text-white"
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
