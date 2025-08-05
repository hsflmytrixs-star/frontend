import React, { useEffect, useRef, useState } from "react";
import JoditEditor from "jodit-react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import {
  BLOG_API_ENDPOINT,
  UPLOAD_API_ENDPOINT,
} from "../../utils/constants";

const AddBlog = () => {
  const user = useSelector((store) => store.User.loggedInUser);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/admin");
    }
  }, [user, navigate]);

  const editorRef = useRef(null);
  const [uploading, setUploading] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    blog: "",
    image: "",
  });

  const [preview, setPreview] = useState(null);

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
        toast.success("Image uploaded!");
      } else {
        toast.error("Image upload failed.");
      }
    } catch (err) {
      console.error("Upload error:", err);
      toast.error("Upload failed");
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const blogData = {
      title: formData.title,
      blog: formData.blog,
      image: formData.image,
    };

    try {
      const res = await axios.post(`${BLOG_API_ENDPOINT}/add`, blogData, {
        withCredentials: true,
      });

      if (res.data?.success) {
        toast.success("Blog added successfully!");
      }
    } catch (err) {
      console.error("Blog post error:", err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-emerald-50 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-10 border border-emerald-100">
        <h1 className="text-4xl font-bold text-center text-emerald-600 mb-10">
          Add New Blog
        </h1>

        <form onSubmit={handleSubmit} className="space-y-10">
          {/* Title */}
          <div>
            <label className="label font-semibold">Blog Title</label>
            <input
              type="text"
              className="input input-bordered w-full focus:border-emerald-500"
              placeholder="Enter blog title"
              value={formData.title}
              onChange={(e) => handleChange("title", e.target.value)}
              required
            />
          </div>

          {/* Image */}
          <div>
            <label className="label font-semibold">Blog Image</label>
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

          {/* Blog Content */}
          <div>
            <h2 className="text-xl font-semibold text-emerald-700 border-l-4 border-emerald-400 pl-3 mb-2">
              Blog Content
            </h2>
            <div className="rounded-lg border border-gray-200 overflow-hidden shadow-sm">
              <JoditEditor
                ref={editorRef}
                value={formData.blog}
                onChange={(value) => handleChange("blog", value)}
              />
            </div>
          </div>

          {/* Submit */}
          <div className="text-center mt-10">
            <button
              type="submit"
              className="btn btn-wide bg-emerald-600 hover:bg-emerald-700 text-white text-lg px-10"
              disabled={uploading}
            >
              {uploading ? "Uploading..." : "Save Blog"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBlog;
