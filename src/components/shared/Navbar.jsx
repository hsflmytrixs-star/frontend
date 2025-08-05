import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import useGetCourse from "../../hooks/useGetCourse";
import { HiOutlineMail } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false);
  const [mobileHubsOpen, setMobileHubsOpen] = useState(false);
  const navigate = useNavigate();

  const courses = useSelector((store) => store.Courses.courses);
  const fetchCourse = useGetCourse();

  const handleClick = async (id) => {
    try {
      await fetchCourse(id);
      navigate(`/course/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <nav className="relative bg-white shadow-sm z-50">
      {/* Top Nav Bar */}
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <img
            src="/Assets/BCRCF Logos Final[1]-05.png"
            alt="Himalayan School Logo"
            className="h-24 md:h-36 object-contain mr-7"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8 text-gray-700 font-medium">
          <li className="relative group">
            <Link to="/about" className="block px-4 py-2 text-gray-70">
              <button className="flex items-center gap-1 hover:text-primary transition-colors focus:outline-none">
                About
              </button>
            </Link>
          </li>

          <li className="relative group">
            <button className="flex items-center gap-1 hover:text-primary transition-colors focus:outline-none">
              Courses
            </button>
            <ul className="absolute left-0 top-full mt-2 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 w-40 max-h-64 overflow-auto">
              {courses && courses.length > 0 ? (
                courses.map((course) => (
                  <li key={course?._id}>
                    <div
                      onClick={() => handleClick(course?._id)}
                      className="cursor-pointer block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                    >
                      {course?.title}
                    </div>
                  </li>
                ))
              ) : (
                <li className="px-4 py-2 text-gray-500">
                  No courses available
                </li>
              )}
            </ul>
          </li>

          <li className="relative group">
            <button className="flex items-center gap-1 hover:text-primary transition-colors focus:outline-none">
              Regeneration Hubs
            </button>
            <ul className="absolute left-0 top-full mt-2 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 w-40 max-h-64 overflow-auto z-50">
              <li>
                <Link
                  to="/regeneration-hubs/bardiya"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  Bardiya
                </Link>
              </li>
              <li>
                <Link
                  to="/regeneration-hubs/nagarkot"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  Nagarkot
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link
              to="/calendar"
              className="hover:text-primary transition-colors"
            >
              Calendar
            </Link>
          </li>
          <li>
            <Link to="/blog" className="hover:text-primary transition-colors">
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </li>
          {/* Added email and WhatsApp icons */}
          <li>
            <a
              href="mailto:dakshinakhadka700@gmail.com"
              className="flex items-center gap-1 hover:text-primary transition-colors"
              aria-label="Send Email"
            >
              <HiOutlineMail size={20} />
            </a>
          </li>
          <li>
            <a
              href="https://wa.me/9843376717"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-primary transition-colors"
              aria-label="WhatsApp Chat"
            >
              <FaWhatsapp size={20} color="#25D366" />
            </a>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden ml-auto p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <ul className="flex flex-col space-y-2 px-6 py-4 text-gray-700 font-medium">
            <li>
              <Link
                to="/about"
                className="block hover:text-primary transition-colors"
              >
                About Us
              </Link>
            </li>
            <li>
              <button
                className="w-full text-left flex items-center justify-between hover:text-primary transition-colors focus:outline-none"
                onClick={() => setMobileCoursesOpen(!mobileCoursesOpen)}
              >
                Courses
                <span>{mobileCoursesOpen ? "▲" : "▼"}</span>
              </button>
              {mobileCoursesOpen && (
                <ul className="mt-2 space-y-1 pl-4 max-h-64 overflow-auto">
                  {courses && courses.length > 0 ? (
                    courses.map((course) => (
                      <li key={course._id}>
                        <Link
                          to={`/course/${course._id}`}
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                        >
                          {course.title}
                        </Link>
                      </li>
                    ))
                  ) : (
                    <li className="px-4 py-2 text-gray-500">
                      No courses available
                    </li>
                  )}
                </ul>
              )}
            </li>
            <li>
              <button
                className="w-full text-left flex items-center justify-between hover:text-primary transition-colors focus:outline-none py-2"
                onClick={() => setMobileHubsOpen(!mobileHubsOpen)}
              >
                Regeneration Hubs
                <span>{mobileHubsOpen ? "▲" : "▼"}</span>
              </button>
              {mobileHubsOpen && (
                <ul className="mt-2 space-y-1 pl-4">
                  <li>
                    <Link
                      to="/regeneration-hubs/bardiya"
                      className="block px-4 py-1 text-gray-700 hover:text-primary transition-colors"
                    >
                      Bardiya
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/regeneration-hubs/nagarkot"
                      className="block px-4 py-1 text-gray-700 hover:text-primary transition-colors"
                    >
                      Nagarkot
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <Link
                to="/calendar"
                className="block hover:text-primary transition-colors"
              >
                Calendar
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className="block hover:text-primary transition-colors"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block hover:text-primary transition-colors"
              >
                Contact
              </Link>
            </li>

            {/* {email and whatsapp} */}
            <li>
              <a
                href="mailto:dakshinakhadka700@gmail.com"
                className="flex items-center gap-1 hover:text-primary transition-colors"
              >
                <HiOutlineMail size={20} />
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/9843376717"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-primary transition-colors"
              >
                <FaWhatsapp size={20} color="#25D366" />
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
