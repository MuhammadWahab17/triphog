import { FaPencil } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import { RiDeleteBin5Line } from "react-icons/ri";
// import { useAllAdminsContext } from "../../../Providers/SuperAdmin/AllAdminsProvider";
import { Link } from "react-router-dom";

// import { useDeleteAdminContext } from "../../../Providers/SuperAdmin/DeleteAdminProvider";
import Modal from "../../../Modal";
const totalPages = 10;
const currentPage = 1;
const allAdmins = [
  {
    refNo: "001",
    driverName: "John Doe",
    email: "john.doe@example.com",
    vechile: "ABC123",
    totalHoursRide: 10,
    status: "Available",
  },
  {
    refNo: "002",
    driverName: "Jane Smith",
    email: "jane.smith@example.com",
    vechile: "XYZ789",
    totalHoursRide: 8,
    status: "On Route",
  },
  {
    refNo: "003",
    driverName: "Michael Johnson",
    email: "michael.johnson@example.com",
    vechile: "DEF456",
    totalHoursRide: 12,
    status: "Not Available",
  },
  {
    refNo: "004",
    driverName: "Emily Brown",
    email: "emily.brown@example.com",
    vechile: "GHI789",
    totalHoursRide: 6,
    status: "Available",
  },
  {
    refNo: "005",
    driverName: "David Lee",
    email: "david.lee@example.com",
    vechile: "JKL012",
    totalHoursRide: 9,
    status: "On Route",
  },
];
const DriverData = () => {
  // const {
  //   allAdmins,
  //   totalRecords,
  //   currentPage,
  //   recordsPerPage,
  //   handlePageChange,
  // } = useAllAdminsContext();
  // const { setSubmit, setId, status, modalMessage, setStatus } =
  //   useDeleteAdminContext();
  // const handleDelete = (firstName, lastName, id) => {
  //   setSubmit(
  //     // eslint-disable-next-line
  //     confirm(`Are You Sure want to Delete Admin ${firstName} ${lastName} `)
  //   );
  //   setId(id);
  // };
  // Calculate total number of pages
  // const totalPages = Math.ceil(totalRecords / recordsPerPage);

  // console.log(allAdmins);
  return (
    <div>
      <table class="min-w-full divide-y divide-gray-200 overflow-x-auto mt-[20px]  border-[2px] border-solid border-[#B0B0B0] rounded-full">
        <thead class="bg-gray-50">
          <tr>
            <th
              scope="col"
              class="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              <input type="checkbox" />
            </th>
            <th
              scope="col"
              class="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Ref No
            </th>
            <th
              scope="col"
              class="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Driver Name
            </th>
            <th
              scope="col"
              class="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Email
            </th>
            <th
              scope="col"
              class="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Vechile #
            </th>
            <th
              scope="col"
              class="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Total hours <br /> Ride
            </th>
            <th
              scope="col"
              class="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Status
            </th>
            <th
              scope="col"
              class="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
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
                  <td class="px-2 py-4 whitespace-nowrap">
                    <input type="checkbox" />
                  </td>
                  <td class="px-2 py-4 whitespace-nowrap">
                    <div class="ml-4">
                      <div class="text-sm font-medium text-gray-900">
                        {`${admin.refNo}`}
                      </div>
                    </div>
                  </td>
                  <td class="px-2 py-4 whitespace-nowrap">
                    <h2>{admin.driverName}</h2>
                  </td>
                  <td class="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                    {admin.email}
                  </td>
                  <td class="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                    {admin.vechile}
                  </td>
                  <td class="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                    {admin.totalHoursRide}
                  </td>
                  <td class="py-4 px-2 border-b border-gray-200 ">
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
                  <td class="px-2 py-4 whitespace-nowrap text-[20px] font-medium flex gap-4 pt-[30px] ">
                    <Link>
                      <FaPencil />
                    </Link>

                    <span
                      className="text-[red] cursor-pointer"
                      // onClick={() => {
                      //   handleDelete(
                      //     admin.firstName,
                      //     admin.lastName,
                      //     admin._id
                      //   );
                      // }}
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

      <div className="flex justify-center items-center mt-6">
        <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
          {Array.from({ length: totalPages }, (_, i) => (
            <div
              key={i}
              // onClick={() => handlePageChange(i + 1)}
              className={` cursor-pointer ${
                currentPage === i + 1
                  ? "bg-gray-300"
                  : "bg-white hover:bg-gray-50"
              } relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium text-gray-700 hover:text-gray-500`}
            >
              {i + 1}
            </div>
          ))}
        </nav>
      </div>
      {/* {status && (
        <Modal status={status} setStatus={setStatus} message={modalMessage} />
      )} */}
    </div>
  );
};

export default DriverData;
