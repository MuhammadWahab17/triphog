import React, { useState } from "react";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import PayrolSideBar from "./PayrolSideBar";
import PayrolprofileHeader from "./PayrolprofileHeader";
import PayrolPayment from "./PayrolPayment";
import { FaCalendarAlt } from "react-icons/fa";

const Payrol = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const handleDateRangeClick = () => {
    setIsOpen(!isOpen);
  };

  const handleDateRangeChange = (item) => {
    setState([item.selection]);
  };

  return (
    <>
      <div className="bg-white rounded-[20px] p-[30px] mt-[20px] float-left order-2 w-[95%]">
        <PayrolprofileHeader />
        <div className="bg-white rounded-[20px] p-[30px] mt-[20px] laptop:mr-[30px]">
          <div>
            <form className="text-darkgray laptop:text-lap_b grid items-center laptop:ml-[25%]">
              <div className="laptop:w-[75%] py-[18px] laptop:py-[5px] laptop:text-lap_b text-[30px] w-[100%]">
                <label className="">Select Date Range</label>
                <br />
                <div className="flex items-center justify-between">
                  <h1
                    onClick={handleDateRangeClick}
                    className="mt-[8px] border-[0.6px] cursor-pointer rounded-md laptop:text-lap_b text-[30px] py-[10px] w-full px-[20px] bg-[#F4F7FF] focus:outline-none focus:border-gray-400 focus:bg-white"
                  >{`${format(state[0].startDate, "MM/dd/yyyy")} - ${format(
                    state[0].endDate,
                    "MM/dd/yyyy"
                  )}`}</h1>
                </div>
                <div className="shadow-lg mx-auto rounded-2xl border absolute left-[1050px]">
                  {isOpen && (
                    <DateRange
                      editableDateInputs={true}
                      onChange={handleDateRangeChange}
                      moveRangeOnFirstSelection={false}
                      ranges={state}
                      closeOnOutsideClick={true}
                      className="w-[100%]  rounded-2xl border"
                    />
                  )}
                </div>
              </div>
              <div className="laptop:w-[75%] py-[18px] laptop:py-[5px] laptop:text-lap_b text-[30px] w-[100%]">
                <label className="">Rate per hour</label>
                <br />
                <select className="mt-[8px] border-[0.6px] cursor-pointer rounded-md laptop:text-lap_b text-[30px] py-[10px] w-full px-[20px] bg-[#F4F7FF] focus:outline-none focus:border-gray-400 focus:bg-white">
                  <option>30$</option>
                  <option>40$</option>
                  <option>50$</option>
                </select>
              </div>
              <div className="laptop:w-[75%] py-[18px] laptop:py-[5px] laptop:text-lap_b text-[30px]">
                <label>Total hours this Month</label>
                <br />
                <select className="mt-[8px] border-[0.6px] cursor-pointer rounded-md laptop:text-lap_b text-[30px] py-[10px] w-full px-[20px] bg-[#F4F7FF] focus:outline-none focus:border-gray-400 focus:bg-white">
                  <option>40 hours</option>
                  <option>50 hours</option>
                  <option>70 hours</option>
                </select>
              </div>

              <div className="laptop:w-[75%] py-[18px] laptop:py-[5px] laptop:text-lap_b text-[30px] w-[100%]">
                <label className="">Monthly Pay</label>
                <br />
                <select className="mt-[8px] border-[0.6px] cursor-pointer rounded-md laptop:text-lap_b text-[30px] py-[10px] w-full px-[20px] bg-[#F4F7FF] focus:outline-none focus:border-gray-400 focus:bg-white">
                  <option>1000$</option>
                  <option>1500$</option>
                  <option>2000$</option>
                </select>
              </div>
            </form>
          </div>
        </div>
        <PayrolPayment />
      </div>

      <PayrolSideBar />
    </>
  );
};

export default Payrol;
