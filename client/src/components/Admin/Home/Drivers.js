import React from "react";
import { FaPencil } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import { RiDeleteBin5Line } from "react-icons/ri";
import { Link } from "react-router-dom";

const allAdmins = [
  { refNo: 12, name: "John Cooper", status: "Available" },
  { refNo: 13, name: "John Cooper", status: "On Route" },
  { refNo: 14, name: "John Cooper", status: "Not Available" },
];

const Drivers = () => {
  return (
    <div className="bg-white rounded-[20px] p-[20px] mt-[20px] mr-[30px]">
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
              Ref No
            </th>
            <th
              scope="col"
              class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Driver Name
            </th>

            <th
              scope="col"
              class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Status
            </th>
            <th
              scope="col"
              class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Actions
            </th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          {allAdmins.map((admin) => {
            return (
              <>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <input type="checkbox" />
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div class="text-sm font-medium text-gray-900">
                        {`${admin.refNo}`}
                      </div>
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <h2>{admin.name}</h2>
                  </td>

                  <td class="py-4 px-6 border-b border-gray-200 ">
                    <span
                      class={` ${
                        admin.status === "Not Available"
                          ? "text-[#E42346] bg-[#DF367033]"
                          : admin.status === "Available"
                          ? "text-[#409261] bg-[#E9FFEF]"
                          : "text-[#D98634] bg-[#FFF2DD]"
                      } flex  items-center py-2 px-2 rounded-full text-xs justify-center`}
                    >
                      <GoDotFill /> {admin.status}
                    </span>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-[20px] font-medium flex gap-4 pt-[30px] ">
                    <Link>
                      <FaPencil />
                    </Link>

                    <span
                      className="text-[red] cursor-pointer"
                      //   onClick={() => {
                      //     handleDelete(
                      //       admin.firstName,
                      //       admin.lastName,
                      //       admin._id
                      //     );
                      //   }}
                    >
                      <RiDeleteBin5Line />
                    </span>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Drivers;
