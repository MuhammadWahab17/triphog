import { MdDeleteOutline } from "react-icons/md";
import { useDeleteAdminContext } from "../../../Providers/SuperAdmin/DeleteAdminProvider";
import { useEffect } from "react";

const DeleteModal = ({ setStatus, id }) => {
  const { setSubmit, setId } = useDeleteAdminContext();
  useEffect(() => {
    setId(id);
  }, []);
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
      <div className=" rounded-[15px] grid w-[300px]">
        <div className="bg-[red] text-white h-[170px] rounded-t-[15px]">
          <div className="flex items-center justify-center h-[170px]">
            <div className="grid ">
              <h1 className="text-[60px]">
                <MdDeleteOutline />
              </h1>
              <h1 className="mt-[5px] text-[20px] font-bold">Delete</h1>
            </div>
          </div>
        </div>
        <div className="bg-[white] h-[170px] rounded-b-[15px]">
          <div className=" flex items-center justify-center h-[170px]">
            <div className="grid ">
              <h2 className="text-darkgray text-lap_c text-center">
                Confirm to Delete Admin
              </h2>
              <button
                className="mt-[15px] text-white bg-[red] py-[8px] rounded-[10px] w-[50%] mx-auto"
                onClick={() => {
                  setSubmit(true);
                }}
              >
                Delete
              </button>
              <button
                className="mt-[15px] text-white bg-[#8BC83F] py-[8px] rounded-[10px] w-[50%] mx-auto"
                onClick={() => {
                  setStatus(false);
                }}
              >
                {" "}
                Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
