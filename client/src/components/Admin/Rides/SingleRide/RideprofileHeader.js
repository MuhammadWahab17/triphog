import { IoArrowBackOutline } from "react-icons/io5";
import { Link, NavLink, useParams } from "react-router-dom";
import styles from "./RideprofileHeader.module.css";
// import { useGetSingleAdminContext } from "../../../../Providers/SuperAdmin/GetSingleAdminProvider";
// import { useUpdateAdminContext } from "../../../../Providers/SuperAdmin/UpdateAdminProvider";

const DriverprofileHeader = () => {
  // const { firstName, lastName, photo, plan } = useGetSingleAdminContext();

  const { id } = useParams();
  return (
    <div>
      <div className="flex items-center  text-m_c laptop:text-lap_d font-[600] justify-between ">
        <Link to="/admin">
          <div className="flex items-center gap-2">
            <IoArrowBackOutline />
            <h2 className="laptop:text-lap_c text-m-c">{`Trip Details`}</h2>
          </div>
        </Link>

        <div className="flex  text-lap_b items-center">
          <div>
            <button className="bg-deepBlue text-white font-[400] py-[7px] px-[15px] rounded-lg">
              Reassign
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriverprofileHeader;
