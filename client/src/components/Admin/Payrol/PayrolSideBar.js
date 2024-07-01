import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import styles from "./PayrolSideBar.module.css";
const PayrolSideBar = () => {
  const [selectedNames, setSelectedNames] = useState([]);
  const [next, setNext] = useState(false);
  const [drivers, setDrivers] = useState([
    {
      id: 1,
      name: "John Charles",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYQrwc7xauDdmnjRG8qVcYZTUcLFminQIACg&s",
    },
    {
      id: 2,
      name: "Jane Smith",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYQrwc7xauDdmnjRG8qVcYZTUcLFminQIACg&s",
    },
    // Add more drivers as needed
  ]);
  return (
    <div className="bg-white rounded-[20px] p-[30px] mt-[20px] laptop:mr-[30px] float-right order-1">
      <h2 className="text-lap_c font-[600]">List of Drivers</h2>
      <div className="laptop:mb-4 mb-8 relative laptop:text-[15px] text-[40px] my-[15px]">
        <input
          type="text"
          placeholder="Search Drivers"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-darkgray laptop:pl-[40px] pl-[90px]"
        />
        <span className="absolute inset-y-0 left-0  flex items-center laptop:text-[20px] text-[40px] text-gray-400  laptop:pl-[10px] pl-[30px]">
          <CiSearch />
        </span>
      </div>
      <div className="flex items-center justify-between ">
        <h2 className="text-lap_c font-[600]">All Drivers</h2>
        <div className="flex items-center gap-2 text-lap_b font-[500] text-[#959595]">
          <h3>Select All</h3>
          <input
            className="cursor-pointer"
            type="checkbox"
            checked={selectedNames.length === drivers.length}
            // onChange={handleSelectAll}
          />
        </div>
      </div>
      <div>
        {drivers.map((driver) => (
          <div
            key={driver.id}
            className={`${
              selectedNames.some((d) => d.id === driver.id)
                ? "bg-deepBlue text-white"
                : "border text-black"
            } flex rounded-xl gap-[10px] cursor-pointer p-[20px] my-[15px] items-center justify-between`}
          >
            <div className="flex items-center gap-5">
              <img
                height={"50px"}
                width={"50px"}
                src={driver.imageUrl}
                alt="Business Man"
                className=" rounded-full"
              />
              <div>
                <div className="flex justify-between items-center">
                  <h2 className="text-lap_c font-[500]">{driver.name}</h2>
                </div>
              </div>
            </div>
            <input
              type="checkbox"
              className={`${
                selectedNames.some((d) => d.id === driver.id)
                  ? styles.customcheckbox
                  : "h-[18px] w-[18px] cursor-pointer"
              }`}
              checked={selectedNames.some((d) => d.id === driver.id)}
              //   onChange={() => handleCheckboxChange(driver)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PayrolSideBar;
