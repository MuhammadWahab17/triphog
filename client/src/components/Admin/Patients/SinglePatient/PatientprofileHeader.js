import React, { useState } from "react";
import { IoArrowBackOutline } from "react-icons/io5";
import { Link, NavLink, useParams } from "react-router-dom";
import styles from "./PatientprofileHeader.module.css";
// import { useGetSingleAdminContext } from "../../../../Providers/SuperAdmin/GetSingleAdminProvider";
// import { useUpdateAdminContext } from "../../../../Providers/SuperAdmin/UpdateAdminProvider";
import { MdLinkedCamera, MdOutlineCancel } from "react-icons/md";

const DriverprofileHeader = () => {
  // const { firstName, lastName, photo, plan } = useGetSingleAdminContext();

  return (
    <div>
      <div className="flex items-center  text-m_c laptop:text-lap_d font-[600] justify-between ">
        <Link to="/admin">
          <div className="flex items-center gap-2">
            <IoArrowBackOutline />
            <h2 className="laptop:text-lap_c text-m-c">{`Patient Details`}</h2>
          </div>
        </Link>
      </div>
      <div className="grid justify-center mb-[20px] mt-[35px]">
        <div class="w-full rounded-sm  bg-cover bg-center bg-no-repeat items-center">
          <label
            for="upload_profile"
            style={{
              backgroundImage: `url(https://media.istockphoto.com/id/1413766112/photo/successful-mature-businessman-looking-at-camera-with-confidence.webp?b=1&s=170667a&w=0&k=20&c=lrHSjzuqKIAC76-vpOhzR7pRsP38DGPWt7x7SOFbm0Q=)`,
            }}
            class="mx-auto cursor-pointer flex justify-center w-[141px] h-[141px] bg-blue-300/20 rounded-full bg-cover bg-center bg-no-repeat"
          >
            <div class="bg-white/90 rounded-full w-6 h-6 text-center ml-28 mt-4">
              <input
                type="file"
                name="photo"
                id="upload_profile"
                hidden
                onChange={(event) => {
                  const file = event.target.files[0]; // Get the selected file
                  // setPhoto(file); // Set the file to the photo state
                }}
              />
              <label for="upload_profile">
                <span className="text-[25px] text-deepBlue">
                  <MdLinkedCamera />
                </span>
              </label>
            </div>
          </label>
        </div>
        <h2 className="text-[#4379EE] laptop:text-lap_b text-m_b my-[10px]">
          {/* Monthly {plan} User */}
        </h2>
        <Link>
          <button className="bg-deepBlue text-white laptop:text-lap_b text-m_b cursor-pointer rounded-md  mx-auto py-[5px] px-[30px] justify-center flex">
            {`Ali Latif`}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DriverprofileHeader;
