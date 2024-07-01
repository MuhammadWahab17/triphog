import React from "react";
import Header from "../../Header/Header";
import Wellcome from "../../Header/Wellcome";
import { Outlet } from "react-router-dom";

const PackagesTemplate = () => {
  return (
    <div className="laptop:grid laptop:grid-cols-[120px_auto] px-[20px] laptop:px-0 ">
      <Header />
      <div className="min-h-screen ">
        <Wellcome />
        <div className="bg-[#f4f7ff]  laptop:py-[1px] min-h-screen w-[100%]">
          <div className="laptop:grid laptop:max-w-[100%] laptop:pl-[30px]">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackagesTemplate;
