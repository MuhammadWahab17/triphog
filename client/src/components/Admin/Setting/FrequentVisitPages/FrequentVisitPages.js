import React from "react";
import { Link } from "react-router-dom";

const FrequentVisitPages = () => {
  return (
    <div className="h-screen">
      <div className="bg-white rounded-[20px] p-[10%] mt-[20px] mr-[30px]">
        <h1 className="text-center font-[700] text-[25px] mb-[30px]">
          Jenny Wilson Frequently Visited Pages
        </h1>
        <div className="w-[55%] grid mx-auto items-center my-3">
          <label className="text-[#606060]">
            Select the top page you frequently visit.
          </label>
          <div className="laptop:mb-4 mb-8 relative laptop:text-[15px] text-[40px] my-[5px]">
            <select className="mt-[8px] border-[0.6px] cursor-pointer rounded-md laptop:text-lap_b text-[30px] py-[10px] w-full px-[20px] bg-[#F4F7FF] focus:outline-none focus:border-gray-400 focus:bg-white">
              <option value={"Dashboard"}>Dashboard</option>
            </select>
          </div>
        </div>
        <div className="w-[55%] grid mx-auto items-center my-3">
          <label className="text-[#606060]">
            Select the second page you frequently visit.
          </label>
          <div className="laptop:mb-4 mb-8 relative laptop:text-[15px] text-[40px] my-[5px]">
            <select className="mt-[8px] border-[0.6px] cursor-pointer rounded-md laptop:text-lap_b text-[30px] py-[10px] w-full px-[20px] bg-[#F4F7FF] focus:outline-none focus:border-gray-400 focus:bg-white">
              <option value={"Dashboard"}>Add Ride</option>
            </select>
          </div>
        </div>
        <div className="w-[55%] grid mx-auto items-center my-3">
          <label className="text-[#606060]">
            Select the third page you frequently visit.
          </label>
          <div className="laptop:mb-4 mb-8 relative laptop:text-[15px] text-[40px] my-[5px]">
            <select className="mt-[8px] border-[0.6px] cursor-pointer rounded-md laptop:text-lap_b text-[30px] py-[10px] w-full px-[20px] bg-[#F4F7FF] focus:outline-none focus:border-gray-400 focus:bg-white">
              <option value={"Dashboard"}>Settings</option>
            </select>
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
  );
};

export default FrequentVisitPages;
