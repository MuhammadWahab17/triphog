import React from "react";
import { IoNotificationsOutline } from "react-icons/io5";
import { TbRectangleFilled } from "react-icons/tb";

const AnalyticsSideBar = () => {
  return (
    <div className="laptop:grid hidden laptop:sticky laptop:top-0 laptop:left-0 laptop:right-0 p-[25px] bg-white min-h-screen ">
      <div className="w-[100%]">
        <div className="flex float-right text-lap_e cursor-pointer">
          <IoNotificationsOutline />
        </div>
        <div>
          <h2 className="text-lap_c mt-[60px] font-[600]">Total Rides</h2>
          <h2 className="text-lap_d font-[700] text-deepBlue">220</h2>
          <div className="grid  items-center my-[20px] gap-[10%]">
            <div>
              <div className="flex items-center my-[10px]">
                <h3 className="text-[#409261] text-lap_c">
                  <TbRectangleFilled />
                </h3>
                &nbsp;&nbsp;&nbsp;&nbsp;{" "}
                <span className="text-deepBlue text-lap_b">140</span>{" "}
                &nbsp;&nbsp;{" "}
                <span className="text-darkgray text-lap_b">Assigned</span>
              </div>
              <div className="flex items-center my-[10px]">
                <h3 className="text-[#D98634] text-lap_c">
                  <TbRectangleFilled />
                </h3>
                &nbsp;&nbsp;&nbsp;&nbsp;{" "}
                <span className="text-deepBlue text-lap_b">20</span>{" "}
                &nbsp;&nbsp;{" "}
                <span className="text-darkgray text-lap_b">On Route</span>
              </div>
              <div className="flex items-center my-[10px]">
                <h3 className="text-[#E42346] text-lap_c">
                  <TbRectangleFilled />
                </h3>
                &nbsp;&nbsp;&nbsp;&nbsp;{" "}
                <span className="text-deepBlue text-lap_b">0</span> &nbsp;&nbsp;{" "}
                <span className="text-darkgray text-lap_b">Completed</span>
              </div>
              <div className="flex items-center my-[10px]">
                <h3 className="text-[#409261] text-lap_c">
                  <TbRectangleFilled />
                </h3>
                &nbsp;&nbsp;&nbsp;&nbsp;{" "}
                <span className="text-deepBlue text-lap_b">0</span> &nbsp;&nbsp;{" "}
                <span className="text-darkgray text-lap_b">Cancelled</span>
              </div>
              <div className="flex items-center my-[10px]">
                <h3 className="text-[#D98634] text-lap_c">
                  <TbRectangleFilled />
                </h3>
                &nbsp;&nbsp;&nbsp;&nbsp;{" "}
                <span className="text-deepBlue text-lap_b">60</span>{" "}
                &nbsp;&nbsp;{" "}
                <span className="text-darkgray text-lap_b">Not Assigned</span>
              </div>
              <div className="flex items-center my-[10px]">
                <h3 className="text-[#E42346] text-lap_c">
                  <TbRectangleFilled />
                </h3>
                &nbsp;&nbsp;&nbsp;&nbsp;{" "}
                <span className="text-deepBlue text-lap_b">10</span>{" "}
                &nbsp;&nbsp;{" "}
                <span className="text-darkgray text-lap_b">Non Responsive</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-lap_c mt-[60px] font-[600]">Total Drivers</h2>
          <h2 className="text-lap_d font-[700] text-deepBlue">220</h2>
          <div className="grid  items-center my-[20px] gap-[10%]">
            <div>
              <div className="flex items-center my-[10px]">
                <h3 className="text-[#409261] text-lap_c">
                  <TbRectangleFilled />
                </h3>
                &nbsp;&nbsp;&nbsp;&nbsp;{" "}
                <span className="text-deepBlue text-lap_b">140</span>{" "}
                &nbsp;&nbsp;{" "}
                <span className="text-darkgray text-lap_b">Available</span>
              </div>
              <div className="flex items-center my-[10px]">
                <h3 className="text-[#D98634] text-lap_c">
                  <TbRectangleFilled />
                </h3>
                &nbsp;&nbsp;&nbsp;&nbsp;{" "}
                <span className="text-deepBlue text-lap_b">20</span>{" "}
                &nbsp;&nbsp;{" "}
                <span className="text-darkgray text-lap_b">On Route</span>
              </div>
              <div className="flex items-center my-[10px]">
                <h3 className="text-[#E42346] text-lap_c">
                  <TbRectangleFilled />
                </h3>
                &nbsp;&nbsp;&nbsp;&nbsp;{" "}
                <span className="text-deepBlue text-lap_b">0</span> &nbsp;&nbsp;{" "}
                <span className="text-darkgray text-lap_b">Not Available</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-lap_c mt-[60px] font-[600]">Total Patients</h2>
          <h2 className="text-lap_d font-[700] text-deepBlue">220</h2>
          <div className="grid  items-center my-[20px] gap-[10%]">
            <div>
              <div className="flex items-center my-[10px]">
                <h3 className="text-[#409261] text-lap_c">
                  <TbRectangleFilled />
                </h3>
                &nbsp;&nbsp;&nbsp;&nbsp;{" "}
                <span className="text-deepBlue text-lap_b">140</span>{" "}
                &nbsp;&nbsp;{" "}
                <span className="text-darkgray text-lap_b">New</span>
              </div>
              <div className="flex items-center my-[10px]">
                <h3 className="text-[#D98634] text-lap_c">
                  <TbRectangleFilled />
                </h3>
                &nbsp;&nbsp;&nbsp;&nbsp;{" "}
                <span className="text-deepBlue text-lap_b">20</span>{" "}
                &nbsp;&nbsp;{" "}
                <span className="text-darkgray text-lap_b">Repeated</span>
              </div>
              <div className="flex items-center my-[10px]">
                <h3 className="text-[#E42346] text-lap_c">
                  <TbRectangleFilled />
                </h3>
                &nbsp;&nbsp;&nbsp;&nbsp;{" "}
                <span className="text-deepBlue text-lap_b">60</span>{" "}
                &nbsp;&nbsp;{" "}
                <span className="text-darkgray text-lap_b">
                  Patients Booked Ride
                </span>
              </div>
              <div className="flex items-center my-[10px]">
                <h3 className="text-[#E42346] text-lap_c">
                  <TbRectangleFilled />
                </h3>
                &nbsp;&nbsp;&nbsp;&nbsp;{" "}
                <span className="text-deepBlue text-lap_b">60</span>{" "}
                &nbsp;&nbsp;{" "}
                <span className="text-darkgray text-lap_b">
                  Patients not Booked Ride
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsSideBar;
