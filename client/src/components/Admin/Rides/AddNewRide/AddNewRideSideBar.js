import React from "react";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { IoNotificationsOutline } from "react-icons/io5";
import { TbRectangleFilled } from "react-icons/tb";
import { CiCalendarDate } from "react-icons/ci";
import { FaCarSide } from "react-icons/fa6";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
const position = [51.505, -0.09];

const HomeSideBar = () => {
  return (
    <div className="laptop:grid hidden laptop:sticky laptop:top-0 laptop:left-0 laptop:right-0 p-[25px] bg-white">
      <div className="w-[100%]">
        <div className="flex float-right text-lap_e cursor-pointer">
          <IoNotificationsOutline />
        </div>
        <h2 className="text-lap_c mt-[60px] font-[600]">Total Rides</h2>
        <h2 className="text-lap_d font-[700] text-deepBlue">220</h2>
        <div className="grid grid-cols-2 items-center my-[20px] gap-[10%]">
          <div>
            <div className="flex items-center my-[10px]">
              <h3 className="text-[#409261] text-lap_c">
                <TbRectangleFilled />
              </h3>
              &nbsp;&nbsp;&nbsp;&nbsp;{" "}
              <span className="text-deepBlue text-lap_b">140</span> &nbsp;&nbsp;{" "}
              <span className="text-darkgray text-lap_b">Ongoing</span>
            </div>
            <div className="flex items-center my-[10px]">
              <h3 className="text-[#D98634] text-lap_c">
                <TbRectangleFilled />
              </h3>
              &nbsp;&nbsp;&nbsp;&nbsp;{" "}
              <span className="text-deepBlue text-lap_b">60</span> &nbsp;&nbsp;{" "}
              <span className="text-darkgray text-lap_b">Completed</span>
            </div>
            <div className="flex items-center my-[10px]">
              <h3 className="text-[#E42346] text-lap_c">
                <TbRectangleFilled />
              </h3>
              &nbsp;&nbsp;&nbsp;&nbsp;{" "}
              <span className="text-deepBlue text-lap_b">20</span> &nbsp;&nbsp;{" "}
              <span className="text-darkgray text-lap_b">Cancelled</span>
            </div>
          </div>
          <div>Chart</div>
        </div>
      </div>
      <div>
        <h1 className="text-lap_c font-[600] my-[20px]">Hours Ridden</h1>
        <div className="grid grid-cols-2 my-[25px]">
          <div>
            <h3 className="text-lap_b text-[#273240]">Last 24 hours</h3>
            <h2 className="text-lap_e text-deepBlue font-[700]">20 hours</h2>
          </div>
          <div>
            <h3 className="text-lap_b text-[#273240]">Last 7 days</h3>
            <h2 className="text-lap_e text-deepBlue font-[700]">80 hours</h2>
          </div>
        </div>
        <div className="grid grid-cols-2 my-[25px]">
          <div>
            <h3 className="text-lap_b text-[#273240]">Last 30 days</h3>
            <h2 className="text-lap_e text-deepBlue font-[700]">120 hours</h2>
          </div>
          <div>
            <h3 className="text-lap_b text-[#273240]">All Time</h3>
            <h2 className="text-lap_e text-deepBlue font-[700]">220 hours</h2>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-lap_c font-[800] my-[10px]">Live Tracking</h2>
        <div>
          <MapContainer
            center={position}
            zoom={13}
            scrollWheelZoom={true}
            style={{ height: "300px" }}
            className="rounded-lg border"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Popup>Driver</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default HomeSideBar;
