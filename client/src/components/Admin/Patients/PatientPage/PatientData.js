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
    refNo: "JC_ADD234",
    patientName: "John Cooper",
    leg: "A",
    pickupAddressTime: "GH34 - 12.53 PM",
    dropoffAddressTime: "Hospital - 12.53 PM",
    totalRides: 20,
  },
  {
    refNo: "JC_ADD234",
    patientName: "Alice Johnson",
    leg: "B",
    pickupAddressTime: "GH35 - 01.25 PM",
    dropoffAddressTime: "Clinic - 01.25 PM",
    totalRides: 20,
  },
  {
    refNo: "JC_ADD234",
    patientName: "Michael Smith",
    leg: "C",
    pickupAddressTime: "GH36 - 02.15 PM",
    dropoffAddressTime: "Nursing Home - 02.15 PM",
    totalRides: 20,
  },
  {
    refNo: "JC_ADD234",
    patientName: "Emily Davis",
    leg: "D",
    pickupAddressTime: "GH37 - 03.00 PM",
    dropoffAddressTime: "Rehabilitation Center - 03.00 PM",
    totalRides: 20,
  },
  {
    refNo: "JC_ADD234",
    patientName: "David Wilson",
    leg: "E",
    pickupAddressTime: "GH38 - 03.45 PM",
    dropoffAddressTime: "Home - 03.45 PM",
    totalRides: 20,
  },
];
const PatientData = () => {
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
              Ref no
            </th>
            <th
              scope="col"
              class="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Patient Name
            </th>
            <th
              scope="col"
              class="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Leg
            </th>
            <th
              scope="col"
              class="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Pickup Ad. - Time
            </th>
            <th
              scope="col"
              class="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              DropOff Ad. - Time
            </th>
            <th
              scope="col"
              class="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Total rides
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
                    <h2>{admin.patientName}</h2>
                  </td>
                  <td class="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                    {admin.leg}
                  </td>
                  <td class="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                    {admin.pickupAddressTime}
                  </td>
                  <td class="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                    {admin.dropoffAddressTime}
                  </td>
                  <td class="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                    {admin.totalRides}
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

export default PatientData;
