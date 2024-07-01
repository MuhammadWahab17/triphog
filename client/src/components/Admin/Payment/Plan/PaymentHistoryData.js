import { FaPencil } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import { RiDeleteBin5Line } from "react-icons/ri";
// import { useAllAdminsContext } from "../../../Providers/SuperAdmin/AllAdminsProvider";
import { Link } from "react-router-dom";

// import { useDeleteAdminContext } from "../../../Providers/SuperAdmin/DeleteAdminProvider";
import Modal from "../../../Modal";
const totalPages = 10;
const currentPage = 1;
const paymentHistoryData = [
  {
    paymentId: "PAY001",
    date: "2024-06-01",
    cardLast4: "1234",
    cardOwner: "John Doe",
    amount: "$100.00",
    paymentStatus: "Completed",
  },
  {
    paymentId: "PAY002",
    date: "2024-06-02",
    cardLast4: "5678",
    cardOwner: "Jane Smith",
    amount: "$150.00",
    paymentStatus: "Pending",
  },
  {
    paymentId: "PAY003",
    date: "2024-06-03",
    cardLast4: "9101",
    cardOwner: "Mike Johnson",
    amount: "$200.00",
    paymentStatus: "Failed",
  },
  {
    paymentId: "PAY004",
    date: "2024-06-04",
    cardLast4: "1121",
    cardOwner: "Emily Davis",
    amount: "$50.00",
    paymentStatus: "Completed",
  },
  {
    paymentId: "PAY005",
    date: "2024-06-05",
    cardLast4: "3141",
    cardOwner: "Chris Brown",
    amount: "$75.00",
    paymentStatus: "Completed",
  },
];
const PaymentHistoryData = () => {
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
              Payment ID
            </th>
            <th
              scope="col"
              class="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Date
            </th>
            <th
              scope="col"
              class="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Card Last 4 Digits
            </th>
            <th
              scope="col"
              class="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Card Owner
            </th>
            <th
              scope="col"
              class="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Amount
            </th>
            <th
              scope="col"
              class="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Payment Status
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
          {paymentHistoryData.map((payment) => {
            return (
              <>
                <tr>
                  <td class="px-2 py-4 whitespace-nowrap">
                    <input type="checkbox" />
                  </td>
                  <td class="px-2 py-4 whitespace-nowrap">
                    <div class="ml-4">
                      <div class="text-sm font-medium text-gray-900">
                        {`${payment.paymentId}`}
                      </div>
                    </div>
                  </td>
                  <td class="px-2 py-4 whitespace-nowrap">
                    <h2>{payment.date}</h2>
                  </td>
                  <td class="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                    {payment.cardLast4}
                  </td>
                  <td class="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                    {payment.cardOwner}
                  </td>
                  <td class="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                    {payment.amount}
                  </td>
                  <td class="py-4 px-2 border-b border-gray-200 ">
                    <span
                      class={` ${
                        payment.paymentStatus === "Not Available"
                          ? "text-[#E42346] bg-[#DF367033]"
                          : payment.paymentStatus === "Available"
                          ? "text-[#409261] bg-[#E9FFEF]"
                          : "text-[#D98634] bg-[#FFF2DD]"
                      } flex  items-center py-2 px-2 rounded-full text-xs justify-center`}
                    >
                      <GoDotFill /> {payment.paymentStatus}
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
                      //     payment.firstName,
                      //     payment.lastName,
                      //     payment._id
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

export default PaymentHistoryData;
