import React, { useRef } from "react";
import { CiMenuKebab, CiSearch } from "react-icons/ci";
import { MdOutlineCloudDownload, MdOutlineFileUpload } from "react-icons/md";
import { Link } from "react-router-dom";
import PaymentHistoryData from "./PaymentHistoryData";

const PaymentHistory = () => {
  const tableRef = useRef(null);
  //   const { setQuery, query } = useAllAdminsContext();
  const printTable = () => {
    const tableData = document.querySelector("table").cloneNode(true);
    const rows = tableData.querySelectorAll("tr");

    // Remove the "Actions" column from each row
    rows.forEach((row) => {
      const cells = row.querySelectorAll("td");
      if (cells.length > 5) {
        row.removeChild(cells[cells.length - 1]);
      }
    });

    const printWindow = window.open("", "", "height=800,width=800");
    printWindow.document.write(
      "<html><head><title>Print Table</title></head><body>"
    );
    printWindow.document.write(tableData.outerHTML);
    printWindow.document.write("</body></html>");
    printWindow.document.close();
    printWindow.print();
  };

  return (
    <>
      <div className="bg-white rounded-[20px] p-[30px] mt-[20px] laptop:mr-[30px]">
        <div className="flex  justify-between items-center w-[100%]">
          <h1 className="laptop:text-lap_c text-[40px] font-[600]">
            Your Payment History
          </h1>
          <div className="gap-[20px] ">
            <button
              className=" float-right bg-[#30325E] text-[white] text-[25px] laptop:text-lap_b laptop:py-[8px] laptop:px-[14px] py-[15px] px-[26px] rounded-[10px] cursor-pointer"
              onClick={printTable}
            >
              <span className="flex items-center gap-3">
                Download <MdOutlineCloudDownload />
              </span>
            </button>
          </div>
        </div>
        <div className="flex w-full justify-between items-center mt-[10px] ">
          <div></div>
          <div>
            <div className="float-right flex gap-[15px]">
              <input
                className="border-[#E4E4E4] border-solid border-[1.4px] rounded-[10px] text-[25px] laptop:text-lap_b text-[#B0B0B0] laptop:py-[8px] laptop:px-[14px] py-[15px] px-[26px] focus:border-[#E4E4E4] focus:border-solid focus:border-[1.4px] focus:rounded-[10px]"
                type="text"
                placeholder={((<CiSearch />), " Search by Name")}
                //   onChange={(event) => {
                //     setQuery({ ...query, name: event.target.value });
                //   }}
              />
              <button className=" bg-[#f4f7ff] text-[#30325E] laptop:py-[8px] laptop:px-[14px] px-[26px] py-[15px]  rounded-[10px] cursor-pointer text-[25px] laptop:text-lap_b border-[1.4px] border-[#30325E] border-solid">
                <span className="flex items-center gap-3">
                  Filter <MdOutlineCloudDownload />
                </span>
              </button>
              <button className=" bg-[white] text-[#30325E] p-[12px] laptop:py-[8px] laptop:px-[14px] py-[15px] px-[26px] rounded-[10px] text-[25px] laptop:text-lap_b cursor-pointer  border-[1.4px] border-[#E4E4E4] border-solid">
                <CiMenuKebab />
              </button>
            </div>
          </div>
        </div>
        <div>
          <PaymentHistoryData />
        </div>
      </div>
    </>
  );
};

export default PaymentHistory;
