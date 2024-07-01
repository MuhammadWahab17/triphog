import React from "react";
import { LuCheckCircle } from "react-icons/lu";

const SubmitSuccessModal = ({ setStatus }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
      <div className=" rounded-[15px] grid w-[300px]">
        <div className="bg-[#8BC83F] text-white h-[170px] rounded-t-[15px]">
          <div className="flex items-center justify-center h-[170px]">
            <div className="grid ">
              <h1 className="text-[60px]">
                <LuCheckCircle />
              </h1>
              <h1 className="mt-[5px] text-[20px] font-bold">Success</h1>
            </div>
          </div>
        </div>
        <div className="bg-[white] h-[170px] rounded-b-[15px]">
          <div className=" flex items-center justify-center h-[170px]">
            <div className="grid ">
              <h2 className="text-darkgray text-lap_c text-center">
                Congratulations, admin has been successfully added.
              </h2>
              <button
                className="mt-[15px] text-white bg-[#8BC83F] py-[8px] rounded-[10px] w-[50%] mx-auto"
                onClick={() => {
                  setStatus(false);
                }}
              >
                Back to Dashboard
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmitSuccessModal;
