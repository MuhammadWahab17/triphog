import React from "react";
import { FaCarSide, FaMapMarkerAlt } from "react-icons/fa";
import { FiDollarSign, FiUserCheck } from "react-icons/fi";
import { SiSemaphoreci, SiTicktick } from "react-icons/si";
import { TbMapPinCancel } from "react-icons/tb";

const Progress = () => {
  return (
    <div className="bg-white rounded-[20px] py-[20px] px-[100px] mt-[20px] ">
      <div className="flex w-full justify-between items-center ">
        <h1 className="laptop:text-lap_c text-[40px] font-[600]">
          This Month- April
        </h1>
        <select className=" float-right  bg-[#30325E] text-[white] text-[25px] laptop:text-lap_b laptop:py-[8px] laptop:px-[14px] py-[15px] px-[26px] rounded-[10px] cursor-pointer">
          <option>Today</option>
          <option selected>Monthly</option>
          <option>Yearly</option>
          <option>All</option>
        </select>
      </div>
      <div className="laptop:grid laptop:grid-cols-5 laptop:gap-[20px] laptop:mt-[20px] grid grid-cols-1 gap-[25px] mt-[25px]">
        <div className="grid grid-cols-[80%_auto] items-center  bg-deepBlue rounded-[20px] laptop:p-[30px] p-[70px]">
          <div>
            <h3 className="laptop:text-lap_b text-[40px] font-[500] text-[white]">
              Total Trips
            </h3>
            <h1 className="text-[55px] laptop:text-lap_d font-[700] text-[white]">
              100
            </h1>
          </div>
          <div className="text-[#ffffff85] laptop:text-[40px] text-[90px] font-[700]">
            <FaCarSide />
          </div>
        </div>
        <div className="grid grid-cols-[80%_auto] items-center  bg-[#096C86] rounded-[20px] laptop:p-[30px] p-[70px]">
          <div>
            <h3 className="laptop:text-lap_b text-[40px] font-[500] text-[white]">
              Completed Trips
            </h3>
            <h1 className="text-[55px] laptop:text-lap_d font-[700] text-[white]">
              20
            </h1>
          </div>
          <div className="text-[#ffffff85] laptop:text-[40px] text-[90px] font-[700]">
            <SiTicktick />
          </div>
        </div>
        <div className="grid grid-cols-[80%_auto] items-center rounded-[20px] laptop:p-[30px] p-[70px]  bg-[#D98634] ">
          <div>
            <h3 className="laptop:text-lap_b text-[40px] font-[500] text-[white]">
              Non Responsive
            </h3>
            <h1 className="text-[55px] laptop:text-lap_d font-[700] text-[white]">
              20
            </h1>
          </div>
          <div className="text-[#ffffff85] laptop:text-[40px] text-[90px] font-[700]">
            <FaMapMarkerAlt />
          </div>
        </div>
        <div className="grid grid-cols-[80%_auto] items-center rounded-[20px] laptop:p-[30px] p-[70px] bg-[#E42346]">
          <div>
            <h3 className="laptop:text-lap_b text-[40px] font-[500] text-[white]">
              Cancelled Trips
            </h3>
            <h1 className="text-[55px] laptop:text-lap_d font-[700] text-[white]">
              0
            </h1>
          </div>
          <div className="text-[#ffffff85] laptop:text-[40px] text-[90px] font-[700]">
            <TbMapPinCancel />
          </div>
        </div>
        <div className="grid grid-cols-[80%_auto] items-center rounded-[20px] laptop:p-[30px] p-[70px]  bg-[#D98634] ">
          <div>
            <h3 className="laptop:text-lap_b text-[40px] font-[500] text-[white]">
              No Show
            </h3>
            <h1 className="text-[55px] laptop:text-lap_d font-[700] text-[white]">
              20
            </h1>
          </div>
          <div className="text-[#ffffff85] laptop:text-[40px] text-[90px] font-[700]">
            <FaMapMarkerAlt />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progress;
