import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./../Header/Header";
import Wellcome from "./Wellcome";
import Progress from "./Progress";

const HomeTemplate = () => {
  return (
    <div className="laptop:grid laptop:grid-cols-[120px_auto] px-[20px] laptop:px-0 bg-[#f4f7ff]">
      <Header />
      <div className="">
        <Wellcome />
        <div className="mt-[20px] mx-[30px]">
          <Progress />
        </div>
        <div className=" laptop:py-[1px] min-h-screen w-full laptop:pl-[30px]">
          <div className="laptop:grid laptop:grid-cols-[auto_350px] laptop:max-w-full">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTemplate;
