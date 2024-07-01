import React from "react";
import { IoNotificationsOutline } from "react-icons/io5";
import { TbRectangleFilled } from "react-icons/tb";

const DriverSideBar = () => {
  return (
    <div className="laptop:grid hidden laptop:sticky laptop:top-0 laptop:left-0 laptop:right-0 p-[25px] bg-white min-h-screen ">
      <div className="w-[100%]">
        <div className="flex float-right text-lap_e cursor-pointer">
          <IoNotificationsOutline />
        </div>
        <h2 className="text-lap_c mt-[60px] font-[600]">Total Patients</h2>
        <h2 className="text-lap_d font-[700] text-deepBlue">220</h2>
        <div className="grid  items-center my-[20px] gap-[10%]">
          <div>
            <div className="flex items-center my-[10px]">
              <h3 className="text-[#409261] text-lap_c">
                <TbRectangleFilled />
              </h3>
              &nbsp;&nbsp;&nbsp;&nbsp;{" "}
              <span className="text-deepBlue text-lap_b">140</span> &nbsp;&nbsp;{" "}
              <span className="text-darkgray text-lap_b">New Patients</span>
            </div>
            <div className="flex items-center my-[10px]">
              <h3 className="text-[#D98634] text-lap_c">
                <TbRectangleFilled />
              </h3>
              &nbsp;&nbsp;&nbsp;&nbsp;{" "}
              <span className="text-deepBlue text-lap_b">20</span> &nbsp;&nbsp;{" "}
              <span className="text-darkgray text-lap_b">
                Repeated Patients
              </span>
            </div>
            <div className="flex items-center my-[10px]">
              <h3 className="text-[#E42346] text-lap_c">
                <TbRectangleFilled />
              </h3>
              &nbsp;&nbsp;&nbsp;&nbsp;{" "}
              <span className="text-deepBlue text-lap_b">0</span> &nbsp;&nbsp;{" "}
              <span className="text-darkgray text-lap_b">
                Patients Booked Ride
              </span>
            </div>
            <div className="flex items-center my-[10px]">
              <h3 className="text-[#409261] text-lap_c">
                <TbRectangleFilled />
              </h3>
              &nbsp;&nbsp;&nbsp;&nbsp;{" "}
              <span className="text-deepBlue text-lap_b">0</span> &nbsp;&nbsp;{" "}
              <span className="text-darkgray text-lap_b">
                Patients cancelled Ride
              </span>
            </div>
          </div>
          <h2>Chart</h2>
          <div className="mt-[10px]">
            <h2 className="text-lap_c font-[600] my-[5px]">Today’s Booking</h2>
            <h1 className="text-lap_d font-[800] text-[#30325E] my-[5px]">
              05
            </h1>
          </div>
          <div className="mb-[10px]">
            <h2 className="text-lap_c font-[600] mb-[5px]">
              Today’s Cancellation
            </h2>
            <h1 className="text-lap_d font-[800] text-[#30325E] my-[5px]">
              05
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriverSideBar;
