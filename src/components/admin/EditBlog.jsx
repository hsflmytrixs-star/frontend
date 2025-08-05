import React, { useEffect, useRef, useState } from "react";
import JoditEditor from "jodit-react";
import axios from "axios";
import toast from "react-hot-toast";
import {
  BLOG_API_ENDPOINT,
  UPLOAD_API_ENDPOINT,
} from "../../utils/constants";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const EditBlog = () => {
  const user = useSelector((store) => store.User.loggedInUser);
  const blog = useSelector((store) => store.Blog.blog);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate("/admin");
  }, [user]);

  const editorRef = useRef(null);

  const [formData, setFormData] = useState({
    title: "",
    content: "",
    image: "",
  });

  const [uploading, setUploading] = useState(false);
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    if (blog) {
      setFormData({
        title: blog.title || "",
        content: blog.blog || "",
        image: blog.image || "",
      });
      setPreview(`https://hsfl-backend.onrender.com${blog.image}`);
    }
  }, [blog]);

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

    const blogData = {
      id: blog.id,
      title: formData.title,
      blog: formData.content,
      image: formData.image,
    };

    try {
      const res = await axios.put(`${BLOG_API_ENDPOINT}/edit`, blogData, {
        withCredentials: true,
      });

      if (res.data?.success) {
        toast.success(res.data.message);
        navigate("/admin/home");
      }
    } catch (error) {
      console.error("Blog update error:", error);
      toast.error(error?.response?.data?.message || "Update failed");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-emerald-50 py-12 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-10 border border-emerald-100">
        <h1 className="text-4xl font-bold text-center text-emerald-600 mb-10">
          Edit Blog
        </h1>

        <form onSubmit={handleSubmit} className="space-y-10">
          {/* Title */}
          <div>
            <label className="label font-semibold">Blog Title</label>
            <input
              type="text"
              className="input input-bordered w-full focus:border-emerald-500"
              value={formData.title}
              onChange={(e) => handleChange("title", e.target.value)}
              required
            />
          </div>

          {/* Image Upload */}
          <div>
            <label className="label font-semibold">Blog Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="file-input file-input-bordered w-full"
            />
            {uploading && (
              <p className="text-sm text-gray-500 mt-2">Uploading...</p>
            )}
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

          {/* Blog Content Editor */}
          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-emerald-700 border-l-4 border-emerald-400 pl-3">
              Blog Content
            </h2>
            <div className="rounded-lg border border-gray-200 overflow-hidden shadow-sm">
              <JoditEditor
                ref={editorRef}
                value={formData.content}
                onChange={(value) => handleChange("content", value)}
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
              {uploading ? "Please wait..." : "Update Blog"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditBlog;
