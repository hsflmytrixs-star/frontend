import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice.js";
import coursesSlice from "./coursesSlice.js";
import courseSlice from "./courseSlice.js";
import blogsSlice from "./blogsSlice.js";
import blogSlice from "./blogSlice.js";

const store = configureStore({
  reducer: {
    User: userSlice,
    Courses: coursesSlice,
    Course: courseSlice,
    Blogs: blogsSlice,
    Blog: blogSlice
  },
});

export default store;
