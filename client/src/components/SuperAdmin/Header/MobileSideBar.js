import React from "react";
import { BsXSquare } from "react-icons/bs";

const MobileSideBar = ({ sidebar, setSidebar }) => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-50 z-10 ransition-transform duration-3000 ease-in-out 
       translate-x-0"
    >
      <div className="fixed top-0 left-0 h-screen w-1/2 bg-white z-20 py-[20px] px-[30px]">
        <div className="flex justify-between items-center">
          <div className="">
            <h1 className="text-[60px]">SideBar</h1>
          </div>
          <div
            className="float-right text-[45px] "
            onClick={() => {
              setSidebar(!sidebar);
            }}
          >
            <BsXSquare />
          </div>
        </div>
        <div className="grid mt-[20px]">
          <h1 className="text-[30px]">Menu 1</h1>
          <h1 className="text-[30px]">Menu 2</h1>
          <h1 className="text-[30px]">Menu 3</h1>
          <h1 className="text-[30px]">Menu 4</h1>
        </div>
      </div>
    </div>
  );
};

export default MobileSideBar;
