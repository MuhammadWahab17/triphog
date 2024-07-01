import React, { useState, useEffect } from "react";
import { CiLock } from "react-icons/ci";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { useAdminLogin } from "../../../Providers/Admin/AdminLoginProvider"; // Adjust the import path as needed

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, loading, error, isLoggedIn } = useAdminLogin();
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await login(email, password);
    if (success) {
      navigate("/admin");
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/admin");
    }
  }, [isLoggedIn, navigate]);

  return (
    <div className="flex h-screen">
      <div className="laptop:flex-1 hidden laptop:flex flex-col bg-deepBlue text-white">
        <div className="p-[20px]">
          <img
            height={"250px"}
            width={"250px"}
            src="/uploads/trip_hug_white.png"
            alt="Website Logo"
          />
        </div>
        <div className="flex flex-1 w-[100%] justify-center items-center">
          <div className="w-64 h-64 bg-[#252749] rounded-full flex items-center justify-center">
            <span className="text-2xl">Image here tbd</span>
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-center items-center mt-[-60px] mb-[-20px]">
        <div>
          <img src="/uploads/login.jpg" alt="login" className="laptop:hidden" />
        </div>
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-lg laptop:w-[75%] w-[100%]"
        >
          <h2 className="laptop:text-2xl text-m_e font-bold mb-6 text-center">
            Welcome
          </h2>
          <div className="laptop:mb-4 mb-8 relative laptop:text-[20px] text-[40px]">
            <input
              type="email"
              placeholder="Email / Username"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 laptop:pl-[40px] pl-[90px]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <span className="absolute inset-y-0 left-0 flex items-center laptop:text-[20px] text-[40px] text-gray-400 laptop:pl-[10px] pl-[30px]">
              <MdOutlineEmail />
            </span>
          </div>
          <div className="laptop:mb-4 mb-8 relative laptop:text-[20px] text-[40px]">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 laptop:pl-[40px] pl-[90px]"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span className="absolute inset-y-0 left-0 flex items-center laptop:text-[20px] text-[40px] text-gray-400 laptop:pl-[10px] pl-[30px]">
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
          <div className="mb-4">
            <Link
              to="/forgot-password"
              className="text-indigo-500 hover:text-indigo-700 float-right mb-[15px] laptop:text-[17px] text-[40px]"
            >
              Forgot password?
            </Link>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-deepBlue text-white laptop:py-2 py-4 rounded-full transition-colors duration-300 laptop:text-[17px] text-[40px]"
          >
            {loading ? "Logging in..." : "Log in"}
          </button>
          {error && (
            <div className="text-red-500 text-center mt-2">{error}</div>
          )}
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
