import React from "react";
import AdminprofileHeader from "./AdminprofileHeader";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaPencil } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import { useAllPaymentContext } from "../../../../Providers/SuperAdmin/AllPaymentProvider";
import SingleAdminSideBar from "./SingleAdminSideBar";
import UpdateAdminProvider from "../../../../Providers/SuperAdmin/UpdateAdminProvider";

const Payment = () => {
  const { loading, allPayments } = useAllPaymentContext();
  return (
    <>
      <div className="bg-white rounded-[20px] p-[30px] mt-[20px] laptop:mr-[30px]">
        <AdminprofileHeader />
        <div>
          <select className="  float-left bg-[#30325E] text-[white] text-[25px] my-[20px] laptop:text-lap_b laptop:py-[8px] laptop:px-[14px] py-[15px] px-[26px] rounded-[10px] cursor-pointer">
            <option>Weekly</option>
            <option selected>Monthly</option>
            <option>Yearly</option>
          </select>
          <table class="min-w-full divide-y divide-gray-200 overflow-x-auto mt-[20px]  border-[2px] border-solid border-[#B0B0B0] rounded-full">
            <thead class="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  <input type="checkbox" />
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Date
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Amount
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Payment Method
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Payment Status
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Actions
                </th>
              </tr>
            </thead>
            {allPayments &&
              allPayments.payments &&
              allPayments.payments.length > 0 && (
                <tbody class="bg-white divide-y divide-gray-200">
                  {allPayments.payments.map((element) => {
                    return (
                      <tr>
                        <td class="px-6 py-4 whitespace-nowrap">
                          <input type="checkbox" />
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                          <h2>
                            {
                              new Date(element.createdAt)
                                .toISOString()
                                .split("T")[0]
                            }
                          </h2>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                          <h2>$ {element.amount}</h2>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {element.paymentMethod}
                        </td>
                        <td class="py-4 px-6 border-b border-gray-200 ">
                          <span
                            class={` ${
                              element.status === "Failed"
                                ? "text-[#E42346] bg-[#DF367033]"
                                : element.status === "Paid"
                                ? "text-[#409261] bg-[#E9FFEF]"
                                : "text-[#D98634] bg-[#FFF2DD]"
                            } flex  items-center py-2 px-2 rounded-full text-xs justify-center`}
                          >
                            <GoDotFill /> {element.status}
                          </span>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-[20px] font-medium flex gap-4 pt-[30px] ">
                          <FaPencil />
                          <span className="text-[red]">
                            <RiDeleteBin5Line />
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              )}
          </table>
        </div>
      </div>
      <div className="mt-[-80px] bg-white">
        <UpdateAdminProvider>
          <SingleAdminSideBar />
        </UpdateAdminProvider>
      </div>
    </>
  );
};

export default Payment;
