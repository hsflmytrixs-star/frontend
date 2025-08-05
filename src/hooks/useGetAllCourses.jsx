import { useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { COURSE_API_ENDPOINT } from "../utils/constants";
import { setCourses } from "../redux/coursesSlice";

const useGetAllCourses = () => {
  const dispatch = useDispatch();

  const fetchCourses = useCallback(async () => {
    try {
      const response = await axios.get(`${COURSE_API_ENDPOINT}/get/all`, {
        withCredentials: true,
      });

      if (response.data?.success) {
        dispatch(setCourses(response.data.courses));
      }
    } catch (error) {
      console.error("Failed to fetch courses:", error);
    }
  }, [dispatch]);

  useEffect(() => {
    fetchCourses();
  }, [fetchCourses]);

  return fetchCourses;
};

export default useGetAllCourses;
