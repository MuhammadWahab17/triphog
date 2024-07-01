import React from "react";

import { IoNotificationsOutline } from "react-icons/io5";
import { TbRectangleFilled } from "react-icons/tb";

const HomeSideBar = () => {
  return (
    <div className="laptop:grid hidden laptop:sticky laptop:top-0 laptop:left-0 laptop:right-0 p-[25px] bg-white">
      <div className="w-[100%]">
        <div className="flex float-right text-lap_e cursor-pointer">
          <IoNotificationsOutline />
        </div>
        <h2 className="text-lap_c mt-[60px] font-[600]">Total Rides</h2>
        <h2 className="text-lap_d font-[700] text-deepBlue">220</h2>
        <div className="grid grid-cols-2 items-center my-[20px] gap-[5%]">
          <div>
            <div className="flex items-center my-[10px]">
              <h3 className="text-[#30325E] text-lap_c">
                <TbRectangleFilled />
              </h3>
              &nbsp;&nbsp;&nbsp;&nbsp;{" "}
              <span className="text-deepBlue text-lap_b">140</span> &nbsp;&nbsp;{" "}
              <span className="text-darkgray text-lap_b">Assigned</span>
            </div>
            <div className="flex items-center my-[10px]">
              <h3 className="text-[#096C86] text-lap_c">
                <TbRectangleFilled />
              </h3>
              &nbsp;&nbsp;&nbsp;&nbsp;{" "}
              <span className="text-deepBlue text-lap_b">20</span> &nbsp;&nbsp;{" "}
              <span className="text-darkgray text-lap_b">On Route</span>
            </div>
            <div className="flex items-center my-[10px]">
              <h3 className="text-[#409261] text-lap_c">
                <TbRectangleFilled />
              </h3>
              &nbsp;&nbsp;&nbsp;&nbsp;{" "}
              <span className="text-deepBlue text-lap_b">0</span> &nbsp;&nbsp;{" "}
              <span className="text-darkgray text-lap_b">Completed</span>
            </div>
            <div className="flex items-center my-[10px]">
              <h3 className="text-[#E42346] text-lap_c">
                <TbRectangleFilled />
              </h3>
              &nbsp;&nbsp;&nbsp;&nbsp;{" "}
              <span className="text-deepBlue text-lap_b">0</span> &nbsp;&nbsp;{" "}
              <span className="text-darkgray text-lap_b">Cancelled</span>
            </div>
            <div className="flex items-center my-[10px]">
              <h3 className="text-[#cccccc] text-lap_c">
                <TbRectangleFilled />
              </h3>
              &nbsp;&nbsp;&nbsp;&nbsp;{" "}
              <span className="text-deepBlue text-lap_b">60</span> &nbsp;&nbsp;{" "}
              <span className="text-darkgray text-lap_b">Not Assigned</span>
            </div>
          </div>
          <div>Chart</div>
        </div>
      </div>
      <div className="w-[100%]">
        <h2 className="text-lap_c mt-[20px] font-[600]">
          John Cooper Driver Rides
        </h2>
        <h2 className="text-lap_d font-[700] text-deepBlue">220</h2>
        <div className="grid grid-cols-2 items-center gap-[5%]">
          <div>
            <div className="flex items-center my-[10px]">
              <h3 className="text-[#30325E] text-lap_c">
                <TbRectangleFilled />
              </h3>
              &nbsp;&nbsp;&nbsp;&nbsp;{" "}
              <span className="text-deepBlue text-lap_b">140</span> &nbsp;&nbsp;{" "}
              <span className="text-darkgray text-lap_b">Ongoing</span>
            </div>
            <div className="flex items-center my-[10px]">
              <h3 className="text-[#096C86] text-lap_c">
                <TbRectangleFilled />
              </h3>
              &nbsp;&nbsp;&nbsp;&nbsp;{" "}
              <span className="text-deepBlue text-lap_b">60</span> &nbsp;&nbsp;{" "}
              <span className="text-darkgray text-lap_b">Completed</span>
            </div>

            <div className="flex items-center my-[10px]">
              <h3 className="text-[#cccccc] text-lap_c">
                <TbRectangleFilled />
              </h3>
              &nbsp;&nbsp;&nbsp;&nbsp;{" "}
              <span className="text-deepBlue text-lap_b">60</span> &nbsp;&nbsp;{" "}
              <span className="text-darkgray text-lap_b">Cancelled</span>
            </div>
          </div>
          <div>Chart</div>
        </div>
      </div>
      <div>
        <h1 className="text-lap_c font-[600] my-[20px]">Hours Ridden</h1>
        <div className="grid grid-cols-2 my-[25px]">
          <div>
            <h3 className="text-lap_b text-[#273240]">Last 24 hours</h3>
            <h2 className="text-lap_e text-deepBlue font-[700]">20 hours</h2>
          </div>
          <div>
            <h3 className="text-lap_b text-[#273240]">Last 7 days</h3>
            <h2 className="text-lap_e text-deepBlue font-[700]">80 hours</h2>
          </div>
        </div>
        <div className="grid grid-cols-2 my-[25px]">
          <div>
            <h3 className="text-lap_b text-[#273240]">Last 30 days</h3>
            <h2 className="text-lap_e text-deepBlue font-[700]">120 hours</h2>
          </div>
          <div>
            <h3 className="text-lap_b text-[#273240]">All Time</h3>
            <h2 className="text-lap_e text-deepBlue font-[700]">220 hours</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSideBar;
