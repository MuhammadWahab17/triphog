import React from "react";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { IoNotificationsOutline } from "react-icons/io5";
import { TbRectangleFilled } from "react-icons/tb";
import { CiCalendarDate } from "react-icons/ci";
import { FaCarSide } from "react-icons/fa6";

const HomeSideBar = () => {
  return (
    <div className="laptop:grid hidden laptop:sticky laptop:top-0 laptop:left-0 laptop:right-0 p-[25px] bg-white rounded-3xl mt-[20px]">
      <div className="w-[100%]">
        <h2 className="text-lap_c font-[700] mt-[20px] mb-[15px]">
          Today, Meetings
        </h2>
        <div className="flex gap-[5%] border-b-[2px] border-lightgray pb-[25px]">
          <div className="bg-bluegray p-[12px] rounded-lg text-lap_b">
            <h3 className="text-center">03</h3>
            <h3 className="text-center">Mon</h3>
          </div>
          <div className="bg-bluegray p-[12px] rounded-lg text-lap_b">
            <h3 className="text-center">04</h3>
            <h3 className="text-center">Tue</h3>
          </div>
          <div className="bg-bluegray p-[12px] rounded-lg text-lap_b">
            <h3 className="text-center">05</h3>
            <h3 className="text-center">Wed</h3>
          </div>
          <div className="bg-deepBlue p-[12px] rounded-lg text-lap_b text-white">
            <h3 className="text-center">06</h3>
            <h3 className="text-center">Thu</h3>
          </div>
          <div className="bg-bluegray p-[12px] rounded-lg text-lap_b">
            <h3 className="text-center">07</h3>
            <h3 className="text-center">Frid</h3>
          </div>
        </div>
      </div>
      <div>
        <div className="mt-[30px] grid grid-cols-[20%_auto] items-center">
          <div>08 am</div>
          <div>
            <hr></hr>
          </div>
        </div>
        <div className="bg-[#4F3FF0] text-white  p-[15px] my-[10px] rounded-lg">
          <h2 className="text-lap_b">Trip Planning</h2>
          <h3 className="text-lap_a">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h3>
        </div>
      </div>
      <div>
        <div className="mt-[10px] grid grid-cols-[20%_auto] items-center">
          <div>10 am</div>
          <div>
            <hr></hr>
          </div>
        </div>
        <div className="bg-[#096C86] text-white  p-[15px] my-[10px] rounded-lg">
          <h2 className="text-lap_b">Trip Planning</h2>
          <h3 className="text-lap_a">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h3>
        </div>
      </div>
      <div className="my-[40px]">
        <h2 className="font-[600] mb-[25px]">Most Frequently Visited Pages</h2>
        <div className="flex gap-[20px] items-center my-[10px] rounded-md border p-[20px]">
          <h2 className="text-lap_e">
            <FaRegMoneyBillAlt />
          </h2>
          <h2 className="text-[#4379EE] text-lap_b">Billing Details</h2>
        </div>
        <div className="flex gap-[20px] items-center my-[10px] rounded-md border p-[20px]">
          <h2 className="text-lap_e">
            <CiCalendarDate />
          </h2>
          <h2 className=" text-lap_b">Schedule Meeting</h2>
        </div>
        <div className="flex gap-[20px] items-center my-[10px] rounded-md border p-[20px]">
          <h2 className="text-lap_e">
            <FaCarSide />
          </h2>
          <h2 className=" text-lap_b">Load Ride</h2>
        </div>
      </div>
    </div>
  );
};

export default HomeSideBar;
