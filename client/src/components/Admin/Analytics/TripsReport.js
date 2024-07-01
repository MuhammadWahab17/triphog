import React from "react";
import TripsReportLineChart from "./TripsReportLineChart";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import TripsReportPieChart from "./TripsReportPieChart";

const TripsReport = () => {
  return (
    <div className="grid grid-cols-[65%_35%] my-[20px]">
      <div className="bg-white rounded-[20px] p-[20px] mt-[20px] laptop:mr-[30px]">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lap_c font-semibold">Trips Report</h3>
            <h5 className="text-lap_b text-[#BABEC6]">May 2022</h5>
          </div>
          <div className="flex items-center">
            <h4 className="text-lap_b text-[#BABEC6]">Sort by:</h4>
            <select className="cursor-pointer text-deepBlue">
              <option>Weekly</option>
              <option selected>Monthly</option>
              <option>Yearly</option>
            </select>
          </div>
        </div>
        <TripsReportLineChart />
      </div>
      <div className="bg-white rounded-[20px] p-[20px] mt-[20px] laptop:mr-[30px]">
        <div className="flex items-center justify-between">
          <h2 className="text-lap_c font-bold">Trips</h2>
          <HiOutlineDotsHorizontal className="text-lap_d font-bold" />
        </div>
        <hr className="my-[15px]" />
        <TripsReportPieChart />
      </div>
    </div>
  );
};

export default TripsReport;
