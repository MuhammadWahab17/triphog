import React, { useState, useEffect } from "react";
import { CiLock } from "react-icons/ci";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { useNavigate, useParams } from "react-router-dom";
import { useCreatePasswordContext } from "../../../Providers/SuperAdmin/CreatePasswordProvider";

const CreatePassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();
  const { token } = useParams();

  const {
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    setToken,
    createPassword,
    loading,
    status,
    message,
  } = useCreatePasswordContext();

  useEffect(() => {
    if (token) {
      setToken(token);
    }
  }, [token, setToken]);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createPassword();
    if (status === "success") {
      // Redirect to login page or dashboard after successful password creation
      navigate("/superadmin");
    }
  };

  return (
    <div className="flex h-screen ">
      {/* Left side (logo and image) remains unchanged */}
      <div className="flex-1 flex flex-col justify-center items-center mt-[-60px] mb-[-20px]">
        <div>
          <img
            src="/uploads/login.jpg"
            alt="login "
            className="laptop:hidden"
          />
        </div>
        <div className="bg-white p-8 rounded-lg  laptop:w-[75%] w-[100%]">
          <h2 className="laptop:text-2xl text-m_e font-bold mb-6 text-center">
            Password Creation
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="laptop:mb-4 mb-8 relative laptop:text-[20px] text-[40px]">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 laptop:pl-[40px] pl-[90px]"
              />
              <span className="absolute inset-y-0 left-0  flex items-center laptop:text-[20px] text-[40px] text-gray-400  laptop:pl-[10px] pl-[30px]">
                <CiLock />
              </span>
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 focus:outline-none"
              >
                {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
              </button>
            </div>
            <div className="laptop:mb-4 mb-8 relative laptop:text-[20px] text-[40px]">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 laptop:pl-[40px] pl-[90px]"
              />
              <span className="absolute inset-y-0 left-0  flex items-center laptop:text-[20px] text-[40px] text-gray-400  laptop:pl-[10px] pl-[30px]">
                <CiLock />
              </span>
              <button
                type="button"
                onClick={toggleConfirmPasswordVisibility}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 focus:outline-none"
              >
                {showConfirmPassword ? <FaRegEyeSlash /> : <FaRegEye />}
              </button>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-deepBlue text-white laptop:py-2 py-4 rounded-full transition-colors duration-300 laptop:text-[17px] text-[40px]"
            >
              {loading ? "Creating..." : "Create Password"}
            </button>
          </form>

          {status && (
            <div
              className={`mt-4 text-center ${
                status === "success" ? "text-green-600" : "text-red-600"
              }`}
            >
              {message}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreatePassword;
