import React from "react";
import { AiOutlineMessage } from "react-icons/ai";
import { BsXSquare } from "react-icons/bs";
import { CiLogin, CiUser } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import {
  MdArrowForwardIos,
  MdOutlineCalendarMonth,
  MdSpaceDashboard,
} from "react-icons/md";
import { RiUserFollowLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const MobileNavBar = ({ menu, setMenu }) => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-50 z-10 ransition-transform duration-3000 ease-in-out 
       translate-x-0"
    >
      <div className="fixed top-0 left-0 h-screen w-1/2 bg-white z-20 py-[20px] px-[30px]">
        <div className="flex justify-between items-center">
          <div className="bg-[#C8F7DC] h-[100px] w-[100px] rounded-full">
            <img
              className="h-[100px] w-[100px]"
              src="https://s3-alpha-sig.figma.com/img/098c/cde0/8799f08faa40145a018b2cf2c8d3c214?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MMKvMK7zb6q9LLRxCLqaIL0-TihGBquH30NZEOn12o7Gc3l3FxtYxtoaPkGvC7ZX6Tt7JR1B9SRPwiIeACnat3kNpWZr1LQVuqH67D3Lx7zr3psO08xVlrNkT1ETUpfmyc~kdZPnAg3eLcVpS9qmFp4u7~O6G-AsPtyyt5yjHe5yXyQWPQAklJ6D4hGaOAhpN4HcA-7Kz~gm5ERwCAjiEwBdt0CQ~HiPjZvkhhxJIH1pbZLIDlmr22ZEz7P-JdQCBojybvIopFu3Td-sF3ge8U7rIyKnkmStxY0tRGjoblOabTGGBhz1bGztURxb77Xx44RwU~S0m1~dhHjPXL5REA__"
              alt="profile"
            />
          </div>
          <h1 className="text-[35px] text-[#262626] font-[700]">
            Jenny Wilson👋{" "}
          </h1>
          <div
            className="float-right text-[50px] text-deepBlue "
            onClick={() => {
              setMenu(!menu);
            }}
          >
            <BsXSquare />
          </div>
        </div>

        <div className="grid mt-[40px]">
          <Link
            to={"/superadmin"}
            onClick={() => {
              setMenu(false);
            }}
          >
            <div className="flex items-center justify-between text-m_b my-[15px]">
              <h2 className="text-darkgray">Dashboard</h2>
              <div className="text-deepBlue">
                <MdSpaceDashboard />
              </div>
            </div>
          </Link>
          <Link
            to={"/superadmin/subscribers"}
            onClick={() => {
              setMenu(false);
            }}
          >
            <div className="flex items-center justify-between text-m_b my-[15px]">
              <h2 className="text-darkgray">Subscribers</h2>
              <div className="text-deepBlue">
                <RiUserFollowLine />
              </div>
            </div>
          </Link>
          <div className="flex items-center justify-between text-m_b my-[15px]">
            <h2 className="text-darkgray">Meeting</h2>
            <div className="text-deepBlue">
              <MdOutlineCalendarMonth />
            </div>
          </div>
          <div className="flex items-center justify-between text-m_b my-[15px]">
            <h2 className="text-darkgray">Inquiry</h2>
            <div className="text-deepBlue">
              <AiOutlineMessage />
            </div>
          </div>
          <div className="flex items-center justify-between text-m_b my-[15px]">
            <h2 className="text-darkgray">Settings</h2>
            <div className="text-deepBlue">
              <IoSettingsOutline />
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between text-m_b my-[15px] mt-[150%]">
            <h2 className="text-[red]">Log Out</h2>
            <div className="text-deepBlue">
              <CiLogin />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNavBar;
