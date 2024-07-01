import { useState } from "react";
import { BiSolidError } from "react-icons/bi";
import { SiTicktick } from "react-icons/si";
import { Link } from "react-router-dom";

const Modal = ({ status, message, setStatus }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
      <div className=" rounded-[15px] grid w-[300px]">
        <div
          className={`${
            status === "success" ? `bg-[#8BC83F]` : `bg-[red]`
          } text-white h-[170px] rounded-t-[15px]`}
        >
          <div className="flex items-center justify-center h-[170px]">
            <div className="grid ">
              <h1 className="text-[60px] text-white">
                {status === "success" ? <SiTicktick /> : <BiSolidError />}
              </h1>
              <h1 className="mt-[5px] text-[20px] font-bold text-center">
                {status == "error" ? `Error` : `Success`}
              </h1>
            </div>
          </div>
        </div>
        <div className="bg-[white] h-[170px] rounded-b-[15px]">
          <div className=" flex items-center justify-center h-[170px]">
            <div className="grid ">
              <h2 className="text-darkgray text-lap_c text-center">
                {message}
              </h2>

              <button
                className={`mt-[15px] text-white ${
                  status === "success" ? `bg-[#8BC83F]` : `bg-[red]`
                } py-[10px] rounded-[10px] w-[80%] px-[15px] mx-auto text-[14px]`}
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

export default Modal;
