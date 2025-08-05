// hooks/useGetCourse.js
import axios from "axios";
import { useDispatch } from "react-redux";
import { COURSE_API_ENDPOINT } from "../utils/constants";
import { setCourse } from "../redux/courseSlice";

const useGetCourse = () => {
  const dispatch = useDispatch();

  const fetchCourse = async (id) => {
    try {
      const response = await axios.get(`${COURSE_API_ENDPOINT}/get/${id}`, {
        withCredentials: true,
      });

      if (response.data?.success) {
        dispatch(setCourse(response.data.course));
      }
    } catch (error) {
      console.error("Error fetching course:", error);
    }
  };

  return fetchCourse;
};

export default useGetCourse;
