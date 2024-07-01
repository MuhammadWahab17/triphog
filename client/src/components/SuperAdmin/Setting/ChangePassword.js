import React, { useState } from "react";
import { CiLock } from "react-icons/ci";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import SettingSideBar from "./SettingSideBar";

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState(false);
  const [newPassword, setNewPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);
  return (
    <>
      <div className="h-screen">
        <div className="bg-white rounded-[20px] p-[10%] mt-[20px] mr-[30px]">
          <h1 className="text-center font-[700] text-[25px] my-[20px]">
            Change Password
          </h1>
          <div>
            <label className="">Old Password</label>
            <div className="laptop:mb-4 mb-8 relative laptop:text-[15px] text-[40px] my-[10px]">
              <input
                type={oldPassword ? "text" : "password"}
                placeholder="Enter Old Password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 laptop:pl-[40px] pl-[90px]"
              />
              <span className="absolute inset-y-0 left-0  flex items-center laptop:text-[20px] text-[40px] text-gray-400  laptop:pl-[10px] pl-[30px]">
                <CiLock />
              </span>
              <button
                type="button"
                onClick={() => {
                  setOldPassword(!oldPassword);
                }}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 focus:outline-none"
              >
                {oldPassword ? <FaRegEyeSlash /> : <FaRegEye />}
              </button>
            </div>
          </div>
          <div>
            <label className="">New Password</label>
            <div className="laptop:mb-4 mb-8 relative laptop:text-[15px] text-[40px] my-[10px]">
              <input
                type={newPassword ? "text" : "password"}
                placeholder="Enter New Password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 laptop:pl-[40px] pl-[90px]"
              />
              <span className="absolute inset-y-0 left-0  flex items-center laptop:text-[20px] text-[40px] text-gray-400  laptop:pl-[10px] pl-[30px]">
                <CiLock />
              </span>
              <button
                type="button"
                onClick={() => {
                  setNewPassword(!newPassword);
                }}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 focus:outline-none"
              >
                {newPassword ? <FaRegEyeSlash /> : <FaRegEye />}
              </button>
            </div>
          </div>
          <div>
            <label className="">Confirm Password</label>
            <div className="laptop:mb-4 mb-8 relative laptop:text-[15px] text-[40px] my-[10px]">
              <input
                type={confirmPassword ? "text" : "password"}
                placeholder="Confirm your Password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 laptop:pl-[40px] pl-[90px]"
              />
              <span className="absolute inset-y-0 left-0  flex items-center laptop:text-[20px] text-[40px] text-gray-400  laptop:pl-[10px] pl-[30px]">
                <CiLock />
              </span>
              <button
                type="button"
                onClick={() => {
                  setConfirmPassword(!confirmPassword);
                }}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 focus:outline-none"
              >
                {confirmPassword ? <FaRegEyeSlash /> : <FaRegEye />}
              </button>
            </div>
          </div>
          <div className="text-center">
            <Link to={"/superadmin"}>
              <button className="div items-center justify-center px-[50px] bg-deepBlue text-white laptop:py-2 py-4 rounded-lg transition-colors duration-300 laptop:text-[17px] text-[40px]">
                Save
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-white mt-[-80px]">
        <SettingSideBar />
      </div>
    </>
  );
};

export default ChangePassword;
