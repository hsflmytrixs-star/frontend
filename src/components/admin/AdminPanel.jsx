import React, { useEffect } from "react";
import { BookOpen, LogOut, Text } from "lucide-react";
import useGetAllCourses from "../../hooks/useGetAllCourses";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import AdminCourseCard from "./AdminCourseCard";
import AdminBlogCard from "./AdminBlogCard";
import useGetAllBlogs from "../../hooks/useGetAllBlogs";
import { setLoggedInUser } from "../../redux/userSlice";

const AdminPanel = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.User.loggedInUser);
  const courses = useSelector((store) => store.Courses.courses);
  const blogs = useSelector((store) => store.Blogs.blogs);
  const fetchCourses = useGetAllCourses();
  const fetchBlogs = useGetAllBlogs();

  useEffect(() => {
    if (!user) {
      navigate("/admin");
    } else {
      fetchCourses();
      fetchBlogs();
    }
  }, [user, navigate, fetchCourses, fetchBlogs]);

  const handleLogout = async (req, res) => {
    try {
      dispatch(setLoggedInUser(null));
      navigate("/admin");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-emerald-600 text-white p-6 space-y-6 min-h-screen overflow-y-auto">
        <h1 className="text-2xl font-bold mb-6">Admin Panel</h1>
        <nav className="space-y-2">
          <Link
            to="/admin/course/add"
            className="flex items-center space-x-3 hover:bg-emerald-700 p-3 rounded cursor-pointer transition"
          >
            <BookOpen className="w-5 h-5" />
            <span>Add Courses</span>
          </Link>
          <Link
            to="/admin/blog/add"
            className="flex items-center space-x-3 hover:bg-emerald-700 p-3 rounded cursor-pointer transition"
          >
            <Text className="w-5 h-5" />
            <span>Add Blogs</span>
          </Link>
          <button
            onClick={handleLogout}
            className="flex items-center space-x-3 hover:bg-emerald-700 p-3 rounded cursor-pointer transition w-full text-left"
            type="button"
          >
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-50 p-6 overflow-y-auto min-h-screen">
        <h2 className="text-2xl font-semibold text-emerald-700 mb-4">
          Welcome, Admin
        </h2>

        {/* Courses Section */}
        <section id="courses" className="mt-8">
          <div className="text-xl font-medium text-gray-700 mb-4">Courses</div>
          <div className="border border-dashed border-gray-300 rounded-lg bg-white p-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {courses.map((course) => (
                <AdminCourseCard
                  key={course?._id}
                  id={course?._id}
                  title={course?.title}
                  description={course?.description}
                  image={course?.image}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ✅ Blogs Section */}
        <section id="blogs" className="mt-12">
          <div className="text-xl font-medium text-gray-700 mb-4">Blogs</div>
          <div className="border border-dashed border-gray-300 rounded-lg bg-white p-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {blogs.map((blog) => (
                <AdminBlogCard
                  key={blog._id}
                  id={blog._id}
                  title={blog.title}
                  blog={blog.blog}
                  image={blog.image}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AdminPanel;
