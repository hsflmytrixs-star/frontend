import { useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { BLOG_API_ENDPOINT } from "../utils/constants";
import { setBlogs } from "../redux/blogsSlice";

const useGetAllBlogs = () => {
  const dispatch = useDispatch();

  const fetchBlogs = useCallback(async () => {
    try {
      const response = await axios.get(`${BLOG_API_ENDPOINT}/get/all`, {
        withCredentials: true,
      });

      console.log(response);

      if (response.data?.success) {
        dispatch(setBlogs(response.data.blogs));
      }
    } catch (error) {
      console.error("Failed to fetch blogs:", error);
    }
  }, [dispatch]);

  useEffect(() => {
    fetchBlogs();
  }, [fetchBlogs]);

  return fetchBlogs;
};

export default useGetAllBlogs;
