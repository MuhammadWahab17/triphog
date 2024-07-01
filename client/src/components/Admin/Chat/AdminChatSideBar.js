import React, { useState } from "react";
import { CiCirclePlus, CiSearch } from "react-icons/ci";

const AdminChatSideBar = ({ newGroup, setNewGroup }) => {
  const [chat, setChat] = useState(false);
  return (
    <div className="bg-white rounded-[20px] p-[30px] mt-[20px] laptop:mr-[30px] float-right order-1">
      <div className="flex justify-between items-center">
        <h2 className="text-lap_c font-[600]">Inquiries</h2>
        <CiCirclePlus
          className="text-lap_e font-bold cursor-pointer text-deepBlue"
          onClick={() => {
            setChat(!chat);
          }}
        />
      </div>
      {chat && (
        <div className="grid grid-cols-2 absolute z-30 left-[280px]">
          <div></div>
          <div className="bg-[#d4deff] rounded-lg p-[20px] shadow-md text-lap_b font-semibold">
            <h3 className="text-[#838383] cursor-pointer">New Chat</h3>
            <h3
              className="text-deepBlue cursor-pointer"
              onClick={() => {
                setNewGroup(true);
              }}
            >
              New Group
            </h3>
          </div>
        </div>
      )}

      <div className="laptop:mb-4 mb-8 relative laptop:text-[15px] text-[40px] my-[15px]">
        <input
          type="text"
          placeholder="Search"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-darkgray laptop:pl-[40px] pl-[90px]"
        />
        <span className="absolute inset-y-0 left-0  flex items-center laptop:text-[20px] text-[40px] text-gray-400  laptop:pl-[10px] pl-[30px]">
          <CiSearch />
        </span>
      </div>
      <div>
        <div className="bg-deepBlue flex rounded-xl gap-[10px] cursor-pointer p-[20px] text-white my-[15px]">
          <div>
            <img
              height={"80px"}
              width={"80px"}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYQrwc7xauDdmnjRG8qVcYZTUcLFminQIACg&s"
              alt="Business Man"
              className=" rounded-full"
            />
          </div>
          <div>
            <div className="flex justify-between items-center">
              <h2 className="text-lap_c font-[500]">John Charles</h2>
              <h4 className="text-lap_a text-lightgray">Wednesday</h4>
            </div>
            <h3 className="text-lap_b font-[300] text-lightgray">
              What destinations do your group tour packages cover?
            </h3>
          </div>
        </div>
        <div className="bg-white flex rounded-xl gap-[10px] cursor-pointer p-[20px] text-black my-[15px] border-[2px]">
          <div>
            <img
              height={"80px"}
              width={"80px"}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYQrwc7xauDdmnjRG8qVcYZTUcLFminQIACg&s"
              alt="Business Man"
              className=" rounded-full"
            />
          </div>
          <div>
            <div className="flex justify-between items-center">
              <h2 className="text-lap_c font-[500]">John Charles</h2>
              <h4 className="text-lap_a text-darkgray">Wednesday</h4>
            </div>
            <h3 className="text-lap_b font-[300] text-darkgray">
              What destinations do your group tour packages cover?
            </h3>
          </div>
        </div>
        <div className="bg-white flex rounded-xl gap-[10px] cursor-pointer p-[20px] text-black my-[15px] border-[2px]">
          <div>
            <img
              height={"80px"}
              width={"80px"}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYQrwc7xauDdmnjRG8qVcYZTUcLFminQIACg&s"
              alt="Business Man"
              className=" rounded-full"
            />
          </div>
          <div>
            <div className="flex justify-between items-center">
              <h2 className="text-lap_c font-[500]">John Charles</h2>
              <h4 className="text-lap_a text-darkgray">Wednesday</h4>
            </div>
            <h3 className="text-lap_b font-[300] text-darkgray">
              What destinations do your group tour packages cover?
            </h3>
          </div>
        </div>
        <div className="bg-white flex rounded-xl gap-[10px] cursor-pointer p-[20px] text-black my-[15px] border-[2px]">
          <div>
            <img
              height={"80px"}
              width={"80px"}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYQrwc7xauDdmnjRG8qVcYZTUcLFminQIACg&s"
              alt="Business Man"
              className=" rounded-full"
            />
          </div>
          <div>
            <div className="flex justify-between items-center">
              <h2 className="text-lap_c font-[500]">John Charles</h2>
              <h4 className="text-lap_a text-darkgray">Wednesday</h4>
            </div>
            <h3 className="text-lap_b font-[300] text-darkgray">
              What destinations do your group tour packages cover?
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminChatSideBar;
