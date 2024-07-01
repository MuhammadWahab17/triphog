import React from "react";
import AdminprofileHeader from "./AdminprofileHeader";
import SingleAdminSideBar from "./SingleAdminSideBar";
import UpdateAdminProvider from "../../../../Providers/SuperAdmin/UpdateAdminProvider";

const ManageStatus = () => {
  return (
    <>
      <div className="bg-white rounded-[20px] p-[30px] mt-[20px] mr-[30px]">
        <AdminprofileHeader />
        <div className="w-[80%] mx-auto mt-[40px]">
          <div>
            <div className="flex justify-between">
              <h3 className="text-darygray text-lap_b">Current Plan </h3>
              <h4 className="text-lightgray text-lap_b">
                Note: This user trial started on 25 May 2023, 5:12 pm and will
                expire on 25 May 2024. 5:12 pm.{" "}
              </h4>
            </div>
            <div className="mt-[8px] border-[0.6px] rounded-md text-lap_b py-[15px] w-full px-[20px] bg-[#F4F7FF] flex justify-between items-center">
              <h1 className="text-lap_c">Ultimate</h1>
              <div className="flex gap-[15px]">
                <button className="bg-deepBlue text-white text-lap_b cursor-pointer rounded-md py-[5px] px-[30px] ">
                  Temporary Hold
                </button>
                <button className="bg-transparent text-deepBlue text-lap_b cursor-pointer rounded-md py-[5px] px-[30px]  border-deepBlue border-solid border-[1px] ">
                  Cancel Plan
                </button>
              </div>
            </div>
          </div>

          <div className="mt-[15px]">
            <h3 className="text-darygray text-lap_b">Give Warning</h3>
            <textarea className="mt-[8px] border-[0.6px] rounded-md text-lap_b py-[10px] w-full px-[20px] bg-[#F4F7FF] focus:outline-none focus:border-gray-400 focus:bg-white"></textarea>
          </div>
          <div className="flex gap-[15px] mt-[15px] float-end">
            <button className="bg-transparent text-deepBlue text-lap_b cursor-pointer rounded-md py-[5px] px-[30px]  border-deepBlue border-solid border-[1px] ">
              Back
            </button>
            <button className="bg-deepBlue text-white text-lap_b cursor-pointer rounded-md py-[5px] px-[30px] ">
              Send
            </button>
          </div>
          <div className="flex justify-center mt-[50px]">
            <button className="flex bg-deepBlue text-white text-lap_c cursor-pointer rounded-md py-[6px] px-[50px]  justify-center">
              Save
            </button>
          </div>
        </div>
      </div>
      <div className="bg-white mt-[-80px]">
        <UpdateAdminProvider>
          <SingleAdminSideBar />
        </UpdateAdminProvider>
      </div>
    </>
  );
};

export default ManageStatus;
