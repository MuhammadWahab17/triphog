import React from "react";
import PaymentHistory from "./PaymentHistory";
import PlanSideBar from "./PlanSideBar";

const Plan = () => {
  return (
    <>
      <div>
        <div className="bg-white rounded-[20px] p-[30px] mt-[20px] laptop:mr-[30px]">
          <div className="my-[40px]">
            <div className="flex items-center justify-between my-[10px]">
              <h2 className="text-lap_c font-[600]">Your Current Plan</h2>
              <h4 className="float-right text-[#80848C] text-lap_b">
                Note: This user trial will expire on 25 May 2024. 5:12 pm.{" "}
              </h4>
            </div>
            <div className="flex items-center justify-between border rounded-lg px-[50px] py-[20px]">
              <h2 className="text-lap_c text-[#30325E] font-[600]">
                Ultimate Plan
              </h2>
              <div className="float-right text-lap_b">
                <button className="bg-deepBlue text-white py-[6px] px-[15px] rounded-lg mr-[20px]">
                  Change Plan
                </button>
                <button className=" text-deepBlue border border-deepBlue py-[6px] px-[15px] rounded-lg">
                  Cancel Plan
                </button>
              </div>
            </div>
          </div>
          <div className="my-[10px]">
            <div className="flex items-center justify-between my-[10px]">
              <h2 className="text-lap_c font-[600]">Your Payments</h2>
            </div>
            <div className="flex items-center justify-between border rounded-lg px-[50px] py-[20px]">
              <h2 className="text-lap_c text-[#409261] font-[600]">$33 Paid</h2>
              <div className="float-right text-lap_b">
                <button className="bg-deepBlue text-white py-[6px] px-[15px] rounded-lg mr-[20px]">
                  Make Payment
                </button>
              </div>
            </div>
          </div>
        </div>
        <PaymentHistory />
      </div>
      <div className="mt-[-80px]">
        <PlanSideBar />
      </div>
    </>
  );
};

export default Plan;
