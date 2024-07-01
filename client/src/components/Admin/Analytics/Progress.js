import React from "react";
import { FaCarSide, FaRegCalendarAlt } from "react-icons/fa";
import { SiTicktick } from "react-icons/si";
import { TbMapPin, TbMapPinOff } from "react-icons/tb";
import { RxDashboard } from "react-icons/rx";
import { PiMapPinLight } from "react-icons/pi";


const Progress = () => {
  return (
    <div className="bg-white rounded-[20px] p-[20px] mt-[20px] laptop:mr-[30px]">
      <div className="flex w-full justify-between items-center ">
        <h1 className="laptop:text-lap_c text-[40px] font-[600]">
          This Month- April
        </h1>
        <select className=" float-right bg-[#30325E] text-[white] text-[25px] laptop:text-lap_b laptop:py-[8px] laptop:px-[14px] py-[15px] px-[26px] rounded-[10px] cursor-pointer">
          <option>Weekly</option>
          <option selected>Monthly</option>
          <option>Yearly</option>
        </select>
      </div>
      <div className="laptop:grid laptop:grid-cols-4 laptop:gap-[30px] laptop:mt-[20px] grid grid-cols-1 gap-[25px] mt-[25px]">
        <div className="grid grid-cols-[80%_auto] items-center bg-deepBlue rounded-[20px] laptop:p-[30px] p-[70px]">
          <div>
            <h3 className="laptop:text-lap_b text-[40px] font-[500] text-[white]">
            Total Trips
            </h3>
            <h1 className="text-[55px] laptop:text-lap_d font-[700] text-[white]">
              100
            </h1>
          </div>
          <div className="text-[#ffffff85] laptop:text-[50px] text-[90px] font-[700]">
          <FaCarSide />
          </div>
        </div>
        <div className="grid grid-cols-[80%_auto] items-center bg-[#096C86] rounded-[20px] laptop:p-[30px] p-[70px]">
          <div>
            <h3 className="laptop:text-lap_b text-[40px] font-[500] text-[white]">
            Completed Trips
            </h3>
            <h1 className="text-[55px] laptop:text-lap_d font-[700] text-[white]">
              20
            </h1>
          </div>
          <div className="text-[#ffffff85] laptop:text-[50px] text-[90px] font-[700]">
          <SiTicktick />
          </div>
        </div>
        <div className="grid grid-cols-[80%_auto] items-center rounded-[20px] laptop:p-[30px] p-[70px] bg-[#D98634] ">
          <div>
            <h3 className="laptop:text-lap_b text-[40px] font-[500] text-[white]">
            Non Responsive
            </h3>
            <h1 className="text-[55px] laptop:text-lap_d font-[700] text-[white]">
              20
            </h1>
          </div>
          <div className="text-[#ffffff85] laptop:text-[50px] text-[90px] font-[700]">
          <TbMapPin />

          </div>
        </div>
        <div className="grid grid-cols-[80%_auto] items-center rounded-[20px] laptop:p-[30px] p-[70px] bg-[#E42346] ">
          <div>
            <h3 className="laptop:text-lap_b text-[40px] font-[500] text-[white]">
            Cancelled Rides
            </h3>
            <h1 className="text-[55px] laptop:text-lap_d font-[700] text-[white]">
              0
            </h1>
          </div>
          <div className="text-[#ffffff85] laptop:text-[50px] text-[90px] font-[700]">
          <TbMapPinOff />

          </div>
        </div>
      </div>
      <div className="laptop:grid laptop:grid-cols-4 laptop:gap-[30px] laptop:mt-[20px] grid grid-cols-1 gap-[25px] mt-[25px]">
        <div className="grid grid-cols-[80%_auto] items-center bg-[#DF3670] rounded-[20px] laptop:p-[30px] p-[70px]">
          <div>
            <h3 className="laptop:text-lap_b text-[40px] font-[500] text-[white]">
            Total hrs Driven
            </h3>
            <h1 className="text-[55px] laptop:text-lap_d font-[700] text-[white]">
              0
            </h1>
          </div>
          <div className="text-[#ffffff85] laptop:text-[50px] text-[90px] font-[700]">
          <FaRegCalendarAlt />

          </div>
        </div>
        <div className="grid grid-cols-[80%_auto] items-center rounded-[20px] laptop:p-[30px] p-[70px] bg-[#4F3FF0] ">
          <div>
            <h3 className="laptop:text-lap_b text-[40px] font-[500] text-[white]">
            Total miles Driven
            </h3>
            <h1 className="text-[55px] laptop:text-lap_d font-[700] text-[white]">
              0
            </h1>
          </div>
          <div className="text-[#ffffff85] laptop:text-[50px] text-[90px] font-[700]">
          <RxDashboard />


          </div>
        </div>
        <div className="grid grid-cols-[80%_auto] items-center rounded-[20px] laptop:p-[30px] p-[70px] bg-[#3F3F3F] ">
          <div>
            <h3 className="laptop:text-lap_b text-[40px] font-[500] text-[white]">
            Actual miles Driven
            </h3>
            <h1 className="text-[55px] laptop:text-lap_d font-[700] text-[white]">
              0
            </h1>
          </div>
          <div className="text-[#ffffff85] laptop:text-[50px] text-[90px] font-[700]">
          <PiMapPinLight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progress;
