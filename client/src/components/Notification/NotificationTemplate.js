import { Outlet, useParams } from "react-router-dom";
import AdminHeader from "../Admin/Header/Header";
import AdminWellcome from "../Admin/Header/Wellcome";
import SuperAdminHeader from "../SuperAdmin/Header/Header";
import SuperAdminWellcome from "../SuperAdmin/Home/Wellcome";

const NotificationTemplate = () => {
  const { role } = useParams();
  console.log(role);
  return (
    <div className="laptop:grid laptop:grid-cols-[120px_auto] px-[20px] laptop:px-0 ">
      {role === "admin" ? <AdminHeader /> : <SuperAdminHeader />}
      <div className="min-h-screen">
        {role === "admin" ? <AdminWellcome /> : <SuperAdminWellcome />}
        <div className="bg-[#f4f7ff]  laptop:py-[1px] min-h-screen w-[100%] laptop:pl-[30px]">
          <div className="laptop:grid  laptop:max-w-[100%] ">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationTemplate;
