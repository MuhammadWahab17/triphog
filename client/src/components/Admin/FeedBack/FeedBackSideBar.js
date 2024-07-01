import React from "react";
import { IoNotificationsOutline } from "react-icons/io5";

const FeedBackSideBar = () => {
  return (
    <div className="laptop:grid hidden laptop:sticky laptop:top-0 laptop:left-0 laptop:right-0 p-[25px] bg-white h-screen ">
      <div className="w-[100%]">
        <div className="flex float-right text-lap_e cursor-pointer">
          <IoNotificationsOutline />
        </div>
      </div>
    </div>
  );
};

export default FeedBackSideBar;
