import React, { useState } from "react";
import { IoArrowBackOutline } from "react-icons/io5";
import { Link, NavLink, useParams } from "react-router-dom";
import styles from "./DriverprofileHeader.module.css";
// import { useGetSingleAdminContext } from "../../../../Providers/SuperAdmin/GetSingleAdminProvider";
// import { useUpdateAdminContext } from "../../../../Providers/SuperAdmin/UpdateAdminProvider";
import { MdLinkedCamera, MdOutlineCancel } from "react-icons/md";

const DriverprofileHeader = () => {
  // const { firstName, lastName, photo, plan } = useGetSingleAdminContext();
  const [firstName, lastName] = ["Ali", "Latif"];
  const [deny, setDeny] = useState(false);
  const { id } = useParams();
  return (
    <div>
      <div className="flex items-center  text-m_c laptop:text-lap_d font-[600] justify-between ">
        <Link to="/admin">
          <div className="flex items-center gap-2">
            <IoArrowBackOutline />
            <h2 className="laptop:text-lap_c text-m-c">{`Driver ${firstName} ${lastName} Details`}</h2>
          </div>
        </Link>
        {deny && (
          <div className="bg-white rounded-lg shadow-2xl p-[30px] absolute top-[170px] left-[650px]">
            <div className="flex items-center justify-between w-[400px]">
              <h2 className="text-lap_c">Reason for Denial</h2>
              <h2
                className="float-right text-[#9CA3AF] cursor-pointer"
                onClick={() => {
                  setDeny(false);
                }}
              >
                <MdOutlineCancel />
              </h2>
            </div>
            <hr className="my-[15px]"></hr>
            <form className="text-darkgray laptop:text-lap_b font-[400]">
              <div className=" py-[18px] laptop:py-[5px] laptop:text-lap_b text-[20px] w-[100%]">
                <label className="">Title</label>
                <br />
                <input
                  type="text"
                  placeholder={"Enter your title "}
                  // onChange={(event) => {
                  //   setFirstName(event.target.value);
                  // }}
                  className="mt-[8px] border-[0.6px] rounded-md laptop:text-lap_b text-[30px] py-[10px] w-full px-[20px] bg-[#F4F7FF] focus:outline-none focus:border-gray-400 focus:bg-white"
                />
              </div>
              <div className=" py-[18px] laptop:py-[5px] laptop:text-lap_b text-[20px] w-[100%]">
                <label className="">Details</label>
                <br />
                <textarea
                  placeholder={"Write your details here..."}
                  // onChange={(event) => {
                  //   setFirstName(event.target.value);
                  // }}
                  className="mt-[8px] border-[0.6px] rounded-md laptop:text-lap_b text-[30px] py-[10px] w-full px-[20px] bg-[#F4F7FF] focus:outline-none focus:border-gray-400 focus:bg-white"
                ></textarea>
              </div>
              <div className=" py-[18px] laptop:py-[5px] laptop:text-lap_b text-[20px] w-[100%]">
                <label className="">Upload file</label>
                <br />
                <input
                  type="file"
                  // onChange={(event) => {
                  //   setFirstName(event.target.value);
                  // }}
                  className="mt-[8px] border-[0.6px] rounded-md laptop:text-lap_b text-[30px] py-[10px] w-full px-[20px] bg-[#F4F7FF] focus:outline-none focus:border-gray-400 focus:bg-white"
                />
              </div>
              <div className=" py-[18px] laptop:py-[5px] laptop:text-lap_b text-[20px] w-[100%]">
                <input
                  type="submit"
                  onClick={() => {
                    setDeny(false);
                  }}
                  // onChange={(event) => {
                  //   setFirstName(event.target.value);
                  // }}
                  className="mt-[8px] cursor-pointer text-white bg-deepBlue border-[0.6px] rounded-md laptop:text-lap_b text-[30px] py-[10px] w-full px-[20px] focus:outline-none focus:border-gray-400 focus:bg-white"
                />
              </div>
            </form>
          </div>
        )}

        <div className="grid grid-cols-2 text-lap_b items-center">
          <div>
            <button
              className="bg-vibrantPink text-white font-[400] py-[7px] px-[15px] rounded-lg"
              onClick={() => {
                setDeny(true);
              }}
            >
              Deny Driver
            </button>
          </div>

          <div>
            <button className="bg-deepBlue text-white font-[400] py-[7px] px-[15px] rounded-lg">
              Approve Driver
            </button>
          </div>
        </div>
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
            {`${firstName} ${lastName}`}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DriverprofileHeader;
