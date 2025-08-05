import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./components/Homepage";
import Course from "./components/Course";
import About from "./components/About";
import Contact from "./components/Contact";
import AdminLogin from "./components/admin/AdminLogin";
import AdminPanel from "./components/admin/AdminPanel";
import AddCourse from "./components/admin/AddCourse";
import Blog from "./components/Blog";
import EditCourse from "./components/admin/EditCourse";
import Bardiya_RH from "./components/Bardiya_RH";
import Nagarkot_RH from "./components/Nagarkot_RH";
import AddBlog from "./components/admin/AddBlog";
import BlogPost from "./components/BlogPost";
import EditBlog from "./components/admin/EditBlog";
import Calendar from "./components/Calander";

const App = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "/course/:id",
      element: <Course />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/blog",
      element: <Blog />,
    },
    {
      path: "/blog/:id",
      element: <BlogPost />,
    },
    {
      path: "/calendar",
      element: <Calendar />,
    },
    {
      path: "/regeneration-hubs/bardiya",
      element: <Bardiya_RH />,
    },
    {
      path: "/regeneration-hubs/nagarkot",
      element: <Nagarkot_RH />,
    },
    {
      path: "/admin",
      element: <AdminLogin />,
    },
    {
      path: "/admin/home",
      element: <AdminPanel />,
    },
    {
      path: "/admin/course/add",
      element: <AddCourse />,
    },
    {
      path: "/admin/course/edit",
      element: <EditCourse />,
    },
    {
      path: "/admin/blog/add",
      element: <AddBlog />,
    },
    {
      path: "/admin/blog/edit",
      element: <EditBlog />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default App;
