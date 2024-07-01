import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
const position = [50, 52];
const Map = () => {
  return (
    <div className="my-[30px]">
      <div className="flex justify-between items-center my-[5px]">
        <h2 className="text-lap_b font-[600]">Status (On Route) </h2>
        <select className=" float-right  bg-[#30325E] text-[white] text-[25px] laptop:text-lap_b laptop:py-[8px] laptop:px-[14px] py-[15px] px-[26px] rounded-[10px] cursor-pointer">
          <option disabled selected>
            Change Status
          </option>
          <option selected>Active</option>
          <option>De Activate</option>
        </select>
      </div>
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
  );
};

export default Map;
