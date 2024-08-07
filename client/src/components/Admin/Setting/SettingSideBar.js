import React from "react";
import { IoNotificationsOutline } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";

const SettingSideBar = () => {
  return (
    <div className="laptop:grid laptop:sticky laptop:top-0 laptop:left-0 laptop:right-0 p-[25px] bg-white">
      <div className="w-[100%] bg-[white]">
        <div className="laptop:flex float-right text-lap_e cursor-pointer mb-[30px] hidden bg-[white] ">
          <IoNotificationsOutline />
        </div>
        <div className="laptop:mt-[-30px] laptop:mb-[80px] mb-[120px] pt-[40px]">
          <h2 className="laptop:text-lap_c mt-[50px] font-[700] text-m_c">
            Settings
          </h2>
          <hr className="my-[20px]"></hr>
          <Link to={"/admin/settings"}>
            <div className="border rounded-lg p-[20px] mt-[20px]">
              General Settings
            </div>
          </Link>
          <Link to={"/admin/settings/changepassword"}>
            <div className="border rounded-lg p-[20px] mt-[20px]">
              Change Password
            </div>
          </Link>
          <Link to={"/admin/settings/editprofile"}>
            <div className="border rounded-lg p-[20px] mt-[20px]">
              Edit Profile
            </div>
          </Link>
          <div className="border rounded-lg p-[20px] mt-[20px]">
            Notification Settings
          </div>
          <Link to={"/admin/settings/frequentvisitpages"}>
            <div className="border rounded-lg p-[20px] mt-[20px]">
              Manage Frequently Visited Pages
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SettingSideBar;
