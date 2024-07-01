import React from "react";
import AnalyticsSideBar from "./AnalyticsSideBar";
import Progress from "./Progress";
import TripsReport from "./TripsReport";
import DriversReport from "./DriversReport";
import PatientsReport from "./PatientsReport";

const Analytics = () => {
  return (
    <>
      <div>
        <Progress />
        <TripsReport />
        <DriversReport />
        <PatientsReport />
      </div>
      <div className="mt-[-80px] ">
        <AnalyticsSideBar />
      </div>
    </>
  );
};

export default Analytics;
