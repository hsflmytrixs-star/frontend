import React, { useState } from "react";
import axios from "axios";
import { USER_API_ENDPOINT } from "../../utils/constants";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setLoggedInUser } from "../../redux/userSlice";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `${USER_API_ENDPOINT}/login`,
        {
          username,
          password,
        },
        { withCredentials: true }
      );

      if (res?.data?.success) {
        toast.success(res.data.message);
        dispatch(setLoggedInUser(res.data.loggedInUser));
        navigate("/admin/home");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="w-full max-w-md bg-base-100 rounded-2xl shadow-xl p-8 space-y-6">
        <h2 className="text-3xl font-bold text-center text-emerald-600">
          Admin Login
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Username */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="admin"
              className="input input-bordered w-full"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          {/* Password */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="input input-bordered w-full"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Submit Button */}
          <div className="form-control mt-6">
            <button
              type="submit"
              className="btn bg-emerald-500 hover:bg-emerald-600 text-white w-full"
            >
              Login
            </button>
          </div>
        </form>

        <p className="text-sm text-center text-gray-500">
          Only authorized users are allowed.
        </p>
      </div>
    </div>
  );
};

export default AdminLogin;
