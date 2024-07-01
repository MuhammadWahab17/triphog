import { Outlet } from "react-router-dom";
import Header from "../components/SuperAdmin/Header/Header";
import Wellcome from "../components/SuperAdmin/Home/Wellcome";
import HomeSideBar from "../components/SuperAdmin/Home/HomeSideBar";

const SuperAdminTemplate = () => {
  return (
    <div className="laptop:grid laptop:grid-cols-[120px_auto] px-[20px] laptop:px-0 ">
      <Header />
      <div className="min-h-screen">
        <Wellcome />
        <div className="bg-[#f4f7ff]  laptop:py-[1px] min-h-screen w-[100%]">
          <div className="laptop:grid laptop:grid-cols-[auto_350px] laptop:max-w-[100%] laptop:pl-[30px]">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuperAdminTemplate;