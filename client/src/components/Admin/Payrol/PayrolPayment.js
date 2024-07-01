import React, { useRef } from "react";
import { CiMenuKebab, CiSearch } from "react-icons/ci";
import { MdOutlineCloudDownload, MdOutlineFileUpload } from "react-icons/md";
import { Link } from "react-router-dom";
import PayrolPaymentData from "./PayrolPaymentData";

const PayrolPayment = () => {
  return (
    <>
      <div className="bg-white rounded-[20px] p-[30px] mt-[20px] laptop:mr-[30px]">
        <div className="flex  justify-between items-center w-[100%]">
          <h1 className="laptop:text-lap_c text-[40px] font-[600]">
            John Payment Details{" "}
          </h1>
          <div className="gap-[20px] ">
            <select className=" float-right bg-[#30325E] text-[white] text-[25px] laptop:text-lap_b laptop:py-[8px] laptop:px-[14px] py-[15px] px-[26px] rounded-[10px] cursor-pointer">
              <option>Monthy</option>
              <option>Yearly</option>
            </select>
          </div>
        </div>
        <div className="flex w-full justify-between items-center mt-[10px] ">
          <div></div>
          <div>
            <div className="float-right flex gap-[15px]">
              <input
                className="border-[#E4E4E4] border-solid border-[1.4px] rounded-[10px] text-[25px] laptop:text-lap_b text-[#B0B0B0] laptop:py-[8px] laptop:px-[14px] py-[15px] px-[26px] focus:border-[#E4E4E4] focus:border-solid focus:border-[1.4px] focus:rounded-[10px]"
                type="text"
                placeholder={((<CiSearch />), " Search")}
                //   onChange={(event) => {
                //     setQuery({ ...query, name: event.target.value });
                //   }}
              />
              <button className=" bg-[#f4f7ff] text-[#30325E] laptop:py-[8px] laptop:px-[14px] px-[26px] py-[15px]  rounded-[10px] cursor-pointer text-[25px] laptop:text-lap_b border-[1.4px] border-[#30325E] border-solid">
                <span className="flex items-center gap-3">
                  Filter <MdOutlineCloudDownload />
                </span>
              </button>
              <button className=" bg-[white] text-[#30325E] p-[12px] laptop:py-[8px] laptop:px-[14px] py-[15px] px-[26px] rounded-[10px] text-[25px] laptop:text-lap_b cursor-pointer  border-[1.4px] border-[#E4E4E4] border-solid">
                <CiMenuKebab />
              </button>
            </div>
          </div>
        </div>
        <div>
          <PayrolPaymentData />
        </div>
      </div>
    </>
  );
};

export default PayrolPayment;
