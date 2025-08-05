import React, { useEffect, useRef, useState } from "react";
import JoditEditor from "jodit-react";
import axios from "axios";
import toast from "react-hot-toast";
import {
  COURSE_API_ENDPOINT,
  UPLOAD_API_ENDPOINT,
} from "../../utils/constants";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const EditCourse = () => {
  const user = useSelector((store) => store.User.loggedInUser);
  const course = useSelector((store) => store.Course.course);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate("/admin");
  }, [user]);

  const editorRefs = {
    overview: useRef(null),
    sampleItinerary: useRef(null),
    packingList: useRef(null),
    faq: useRef(null),
    courseDetails: useRef(null),
  };

  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    overview: "",
    sampleItinerary: "",
    packingList: "",
    faq: "",
    courseDetails: "",
    image: "",
    video: "",
  });

  const [uploading, setUploading] = useState(false);
  const [preview, setPreview] = useState(null);

  // Pre-fill the form with Redux course data
  useEffect(() => {
    if (course) {
      setFormData({
        title: course.title || "",
        subtitle: course.subtitle || "",
        overview: course.overview || "",
        sampleItinerary: course.sample_itinerary || "",
        packingList: course.packing_list || "",
        faq: course.faq || "",
        courseDetails: course.course_details || "",
        image: course.image || "",
        video: course.video || "",
      });
      setPreview(course.image ? `https://hsfl-backend.onrender.com${course.image}` : null);
    }
  }, [course]);

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setPreview(URL.createObjectURL(file));
    setUploading(true);

    try {
      const data = new FormData();
      data.append("file", file);

      const res = await axios.post(`${UPLOAD_API_ENDPOINT}`, data, {
        headers: { "Content-Type": "multipart/form-data" },
        withCredentials: true,
      });

      if (res.data?.success) {
        handleChange("image", res.data.src);
      } else {
        console.error("Image upload failed");
      }
    } catch (err) {
      console.error("Image upload error:", err);
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const courseData = {
      id: course._id,
      title: formData.title,
      subtitle: formData.subtitle,
      overview: formData.overview,
      sample_itinerary: formData.sampleItinerary,
      packing_list: formData.packingList,
      faq: formData.faq,
      course_details: formData.courseDetails,
      image: formData.image,
      video: formData.video,
    };

    try {
      const res = await axios.put(`${COURSE_API_ENDPOINT}/edit`, courseData, {
        withCredentials: true,
      });

      if (res.data?.success) {
        toast.success(res.data.message);
        navigate("/admin/home");
      }
    } catch (error) {
      console.error("Course update error:", error);
      toast.error(error?.response?.data?.message || "Update failed");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-emerald-50 py-12 px-4">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl p-10 border border-emerald-100">
        <h1 className="text-4xl font-bold text-center text-emerald-600 mb-10">
          Edit Course
        </h1>

        <form onSubmit={handleSubmit} className="space-y-10">
          {/* Title & Subtitle */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="label font-semibold">Course Title</label>
              <input
                type="text"
                className="input input-bordered w-full focus:border-emerald-500"
                value={formData.title}
                onChange={(e) => handleChange("title", e.target.value)}
                required
              />
            </div>

            <div>
              <label className="label font-semibold">Course Subtitle</label>
              <input
                type="text"
                className="input input-bordered w-full focus:border-emerald-500"
                value={formData.subtitle}
                onChange={(e) => handleChange("subtitle", e.target.value)}
              />
            </div>
          </div>

          {/* Image Upload */}
          <div>
            <label className="label font-semibold">Course Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="file-input file-input-bordered w-full"
            />
            {uploading && <p className="text-sm text-gray-500 mt-2">Uploading...</p>}
            {preview && (
              <div className="mt-4">
                <img
                  src={preview}
                  alt="Preview"
                  className="w-full max-w-sm rounded-xl border border-gray-200 shadow"
                />
              </div>
            )}
          </div>

          {/* Jodit Editors */}
          {[
            { key: "overview", label: "Overview" },
            { key: "sampleItinerary", label: "Sample Itinerary" },
            { key: "packingList", label: "Packing List" },
            { key: "faq", label: "FAQ" },
            { key: "courseDetails", label: "Course Details" },
          ].map((section) => (
            <div key={section.key} className="space-y-2">
              <h2 className="text-xl font-semibold text-emerald-700 border-l-4 border-emerald-400 pl-3">
                {section.label}
              </h2>
              <div className="rounded-lg border border-gray-200 overflow-hidden shadow-sm">
                <JoditEditor
                  ref={editorRefs[section.key]}
                  value={formData[section.key]}
                  onChange={(value) => handleChange(section.key, value)}
                />
              </div>
            </div>
          ))}

          {/* Submit */}
          <div className="text-center mt-10">
            <button
              type="submit"
              className="btn btn-wide bg-emerald-600 hover:bg-emerald-700 text-white text-lg px-10"
              disabled={uploading}
            >
              {uploading ? "Please wait..." : "Update Course"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditCourse;
