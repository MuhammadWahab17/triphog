import React, { useState } from "react";
import { AiOutlineMessage } from "react-icons/ai";
import { CiBrightnessUp, CiCreditCard2, CiLogin } from "react-icons/ci";
import { FaCarSide, FaRegBuilding, FaRegMoon } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineCalendarMonth, MdSpaceDashboard } from "react-icons/md";
import { RiUserFollowLine } from "react-icons/ri";
import { NavLink, Link } from "react-router-dom";
import MobileNavBar from "./MobileNavBar";
import { BsGraphDown } from "react-icons/bs";

const Header = () => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="relative">
      {menu && <MobileNavBar menu={menu} setMenu={setMenu} />}

      {/* Mobile */}
      <div className="laptop:hidden mt-[20px] mx-[-20px] text-[70px] pb-[20px] mb-[30px] border-solid border-b-[3px] border-b-[#959595] box-border">
        <div className="px-[40px] flex justify-between items-center my-[-12px]">
          <div className="ml-[-20px]">
            <Link to={"/superadmin"}>
              <img
                height={"300px"}
                width={"300px"}
                src={`${process.env.PUBLIC_URL}/uploads/trip_hug_logo.png`}
                alt="Trip Hug"
              />
            </Link>
          </div>
          <div className="float-right" onClick={toggleMenu}>
            <IoMdMenu />
          </div>
        </div>
      </div>

      {/* Laptop */}
      <div className="laptop:max-w-[120px] hidden bg-[#FFFFFF] laptop:sticky laptop:top-0 laptop:left-0 laptop:right-0 laptop:h-screen laptop:place-items-center laptop:grid">
        <div className="cursor-pointer">
          <svg
            width="46"
            height="38"
            viewBox="0 0 46 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* SVG content */}
          </svg>
        </div>
        <div className="laptop:grid laptop:pt-[120px] laptop:gap-y-[20px] laptop:place-items-center">
          <div
            to="/superadmin"
            end
            className={({ isActive }) =>
              isActive ? "active" : "text-[#9FB4CD]"
            }
          >
            <div>
              <h1
                className={`text-[24px]
                `}
              >
                <MdSpaceDashboard />
              </h1>
            </div>
          </div>
          <div to="/superadmin/subscribers" className="text-[#9FB4CD]">
            <div className="text-[24px] cursor-pointer">
              <RiUserFollowLine />
            </div>
          </div>
          <div className="text-[24px] cursor-pointer text-[#9FB4CD] ">
            <FaCarSide />
          </div>
          <div className="text-[24px] cursor-pointer text-[#9FB4CD] ">
            <FaRegBuilding />
          </div>
          <div to={""} className="text-[#9FB4CD]">
            <div className="text-[24px] cursor-pointer">
              <BsGraphDown />
            </div>
          </div>
          <div to={""} className="text-[24px] cursor-pointer text-[#9FB4CD]">
            <div>
              <CiCreditCard2 />
            </div>
          </div>
          <div to={""} className="text-[24px] cursor-pointer text-[#9FB4CD]">
            <div>
              <AiOutlineMessage />
            </div>
          </div>
          <div to={""} className="text-[24px] cursor-pointer text-[#9FB4CD]">
            <div>
              <IoSettingsOutline />
            </div>
          </div>
        </div>
        <div className="laptop:grid laptop:pt-[120px] laptop:gap-y-[20px] laptop:place-items-center">
          <div className="text-[24px] text-[#1F1C2E] cursor-pointer">
            <CiLogin />
          </div>
          <div className="text-[24px] cursor-pointer text-[#9FB4CD]">
            <CiBrightnessUp />
          </div>
          <div className="text-[24px] cursor-pointer text-[#9FB4CD]">
            <FaRegMoon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
