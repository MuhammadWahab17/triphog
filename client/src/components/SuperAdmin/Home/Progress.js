import React from "react";
import { FiDollarSign, FiUserCheck } from "react-icons/fi";
import { SiTicktick } from "react-icons/si";

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
      <div className="laptop:grid laptop:grid-cols-3 laptop:gap-[30px] laptop:mt-[20px] grid grid-cols-1 gap-[25px] mt-[25px]">
        <div className="grid grid-cols-[80%_auto] items-center bg-[#DF3670] rounded-[20px] laptop:p-[30px] p-[70px]">
          <div>
            <h3 className="laptop:text-lap_b text-[40px] font-[500] text-[white]">
              Total Payment
            </h3>
            <h1 className="text-[55px] laptop:text-lap_d font-[700] text-[white]">
              $1k/10k
            </h1>
          </div>
          <div className="text-[#ffffff85] laptop:text-[50px] text-[90px] font-[700]">
            <FiDollarSign />
          </div>
        </div>
        <div className="grid grid-cols-[80%_auto] items-center rounded-[20px] laptop:p-[30px] p-[70px] bg-[#4F3FF0] ">
          <div>
            <h3 className="laptop:text-lap_b text-[40px] font-[500] text-[white]">
              Paid Subscription
            </h3>
            <h1 className="text-[55px] laptop:text-lap_d font-[700] text-[white]">
              24/100
            </h1>
          </div>
          <div className="text-[#ffffff85] laptop:text-[50px] text-[90px] font-[700]">
            <SiTicktick />
          </div>
        </div>
        <div className="grid grid-cols-[80%_auto] items-center rounded-[20px] laptop:p-[30px] p-[70px] bg-[#096C86] ">
          <div>
            <h3 className="laptop:text-lap_b text-[40px] font-[500] text-[white]">
              New Subsciptions
            </h3>
            <h1 className="text-[55px] laptop:text-lap_d font-[700] text-[white]">
              42
            </h1>
          </div>
          <div className="text-[#ffffff85] laptop:text-[50px] text-[90px] font-[700]">
            <FiUserCheck />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progress;
