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
    patientRefNo: "P001",
    driverRefNo: "D001",
    rideId: "R001",
    pickupDateTime: "2024-06-01 09:00:00",
    bookedTime: "2024-05-31 17:00:00",
    status: "Available",
  },
  {
    patientRefNo: "P002",
    driverRefNo: "D002",
    rideId: "R002",
    pickupDateTime: "2024-06-01 10:15:00",
    bookedTime: "2024-05-31 18:30:00",
    status: "Available",
  },
  {
    patientRefNo: "P003",
    driverRefNo: "D003",
    rideId: "R003",
    pickupDateTime: "2024-06-01 11:30:00",
    bookedTime: "2024-06-01 09:00:00",
    status: "On Route",
  },
  {
    patientRefNo: "P004",
    driverRefNo: "D004",
    rideId: "R004",
    pickupDateTime: "2024-06-01 12:45:00",
    bookedTime: "2024-06-01 10:20:00",
    status: "Not Available",
  },
  {
    patientRefNo: "P005",
    driverRefNo: "D005",
    rideId: "R005",
    pickupDateTime: "2024-06-01 14:00:00",
    bookedTime: "2024-06-01 11:40:00",
    status: "Available",
  },
  {
    patientRefNo: "P006",
    driverRefNo: "D006",
    rideId: "R006",
    pickupDateTime: "2024-06-01 15:15:00",
    bookedTime: "2024-06-01 13:00:00",
    status: "On Route",
  },
  {
    patientRefNo: "P007",
    driverRefNo: "D007",
    rideId: "R007",
    pickupDateTime: "2024-06-01 16:30:00",
    bookedTime: "2024-06-01 14:20:00",
    status: "Available",
  },
  {
    patientRefNo: "P008",
    driverRefNo: "D008",
    rideId: "R008",
    pickupDateTime: "2024-06-01 17:45:00",
    bookedTime: "2024-06-01 15:30:00",
    status: "Not Available",
  },
  {
    patientRefNo: "P009",
    driverRefNo: "D009",
    rideId: "R009",
    pickupDateTime: "2024-06-01 19:00:00",
    bookedTime: "2024-06-01 16:40:00",
    status: "On Route",
  },
];
const RideData = () => {
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
              Patient Ref no
            </th>
            <th
              scope="col"
              class="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Driver Ref no
            </th>
            <th
              scope="col"
              class="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Ride Id
            </th>
            <th
              scope="col"
              class="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Pickup Date - Time
            </th>
            <th
              scope="col"
              class="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Booked Time
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
                        {`${admin.patientRefNo}`}
                      </div>
                    </div>
                  </td>
                  <td class="px-2 py-4 whitespace-nowrap">
                    <h2>{admin.driverRefNo}</h2>
                  </td>
                  <td class="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                    {admin.rideId}
                  </td>
                  <td class="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                    {admin.pickupDateTime}
                  </td>
                  <td class="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                    {admin.bookedTime}
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

export default RideData;
