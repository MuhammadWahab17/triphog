import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Wellcome from "../Header/Wellcome";
import SettingSideBar from "./SettingSideBar";

const SettingTemplate = () => {
  return (
    <div className="laptop:grid laptop:grid-cols-[120px_auto] px-[20px] laptop:px-0 ">
      <Header />
      <div className="min-h-screen">
        <Wellcome />
        <div className="bg-[#f4f7ff]  laptop:py-[1px] min-h-screen w-[100%] laptop:pl-[30px]">
          <div className="laptop:grid laptop:grid-cols-[auto_350px] laptop:max-w-[100%] ">
            <Outlet />
            <div className="bg-white mt-[-80px]">
              <SettingSideBar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingTemplate;
