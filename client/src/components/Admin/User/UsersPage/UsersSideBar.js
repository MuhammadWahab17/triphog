import React from "react";
import { IoNotificationsOutline } from "react-icons/io5";
import { TbRectangleFilled } from "react-icons/tb";

const UsersSideBar = () => {
  return (
    <div className="laptop:grid hidden laptop:sticky laptop:top-0 laptop:left-0 laptop:right-0 p-[25px] bg-white min-h-screen overflow-y-auto">
      {/* Added overflow-y-auto to enable scrolling */}
      <div className="w-[100%] ">
        <div className="flex float-right text-lap_e cursor-pointer">
          <IoNotificationsOutline />
        </div>
        <h2 className="text-lap_c mt-[60px] font-[600]">Users</h2>
        <h2 className="text-lap_d font-[700] text-deepBlue">4,209</h2>
        <div className="grid grid-cols-2 items-center my-[20px] gap-[10%]">
          <div>
            <div className="flex items-center my-[10px]">
              <h3 className="text-[#409261] text-lap_c">
                <TbRectangleFilled />
              </h3>
              &nbsp;&nbsp;&nbsp;&nbsp;{" "}
              <span className="text-deepBlue text-lap_b">60%</span> &nbsp;&nbsp;{" "}
              <span className="text-darkgray text-lap_b">Active</span>
            </div>
            <div className="flex items-center my-[10px]">
              <h3 className="text-[#D98634] text-lap_c">
                <TbRectangleFilled />
              </h3>
              &nbsp;&nbsp;&nbsp;&nbsp;{" "}
              <span className="text-deepBlue text-lap_b">20%</span> &nbsp;&nbsp;{" "}
              <span className="text-darkgray text-lap_b">On Hold</span>
            </div>
            <div className="flex items-center my-[10px]">
              <h3 className="text-[#E42346] text-lap_c">
                <TbRectangleFilled />
              </h3>
              &nbsp;&nbsp;&nbsp;&nbsp;{" "}
              <span className="text-deepBlue text-lap_b">20%</span> &nbsp;&nbsp;{" "}
              <span className="text-darkgray text-lap_b">Inactive</span>
            </div>
          </div>
          <div>Chart</div>
        </div>
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
    </div>
  );
};

export default UsersSideBar;
