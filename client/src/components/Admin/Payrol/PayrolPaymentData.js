import { FaPencil } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import { RiDeleteBin5Line } from "react-icons/ri";
import { Link } from "react-router-dom";

const PayrolPaymentData = () => {
  const totalPages = 10;
  const currentPage = 1;
  const allPayments = [
    {
      paymentDate: "2024-06-01",
      amount: "$50.00",
      paymentMethod: "Credit Card",
      paymentStatus: "Paid",
    },
    {
      paymentDate: "2024-06-02",
      amount: "$40.00",
      paymentMethod: "PayPal",
      paymentStatus: "Failed",
    },
    // Add more payment data as needed
  ];

  return (
    <div>
      <table className="min-w-full divide-y divide-gray-200 overflow-x-auto mt-[20px] border-[2px] border-solid border-[#B0B0B0] rounded-full">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              <input type="checkbox" />
            </th>
            <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Date
            </th>
            <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Amount
            </th>
            <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Payment Method
            </th>
            <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {allPayments.map((payment, index) => (
            <tr key={index}>
              <td className="px-2 py-4 whitespace-nowrap">
                <input type="checkbox" />
              </td>
              <td className="px-2 py-4 whitespace-nowrap">
                <div className="ml-4">
                  <div className="text-sm font-medium text-gray-900">
                    {payment.paymentDate}
                  </div>
                </div>
              </td>
              <td className="px-2 py-4 whitespace-nowrap">
                <h2>{payment.amount}</h2>
              </td>
              <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                {payment.paymentMethod}
              </td>
              <td className="py-4 px-2 border-b border-gray-200">
                <span
                  className={`${
                    payment.paymentStatus === "Failed"
                      ? "text-[#E42346] bg-[#DF367033]"
                      : payment.paymentStatus === "Paid"
                      ? "text-[#409261] bg-[#E9FFEF]"
                      : "text-[#D98634] bg-[#FFF2DD]"
                  } flex items-center py-2 px-2 rounded-full text-xs justify-center`}
                >
                  <GoDotFill /> {payment.paymentStatus}
                </span>
              </td>
              <td className="px-2 py-4 whitespace-nowrap text-[20px] font-medium flex gap-4 pt-[30px]">
                <Link>
                  <FaPencil />
                </Link>
                <span className="text-[red] cursor-pointer">
                  <RiDeleteBin5Line />
                </span>
              </td>
            </tr>
          ))}
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
    </div>
  );
};

export default PayrolPaymentData;
