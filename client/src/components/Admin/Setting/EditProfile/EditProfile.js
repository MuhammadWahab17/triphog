import { IoArrowBackOutline } from "react-icons/io5";
// import { useAddNewAdminContext } from "../../../../Providers/SuperAdmin/AddNewAdminProvider";
import { MdLinkedCamera } from "react-icons/md";

import { Link } from "react-router-dom";
// import AdminSideBar from "./AddNewAdminSideBar";
// import Modal from "../../../Modal";

const EditProfile = () => {
  // const {
  //   setFirstName,
  //   setLastName,
  //   setEmail,
  //   setPhoneNumber,
  //   setRole,
  //   setGender,
  //   setSubmit,
  //   photo,
  //   setPhoto,
  //   loading,
  //   status,
  //   setStatus,
  //   message,
  // } = useAddNewAdminContext();
  return (
    <>
      {/* <div className="laptop:h-screen"> */}
      <div className="bg-white rounded-[20px] p-[30px] mt-[20px] laptop:mr-[30px]">
        <Link to={"/admin"}>
          <h2 className="laptop:text-lap_c text-m_c text-center font-semibold my-4">
            Jenny Wilson Profile
          </h2>
        </Link>
        <div class="w-full rounded-sm  bg-cover bg-center bg-no-repeat items-center">
          <label
            for="upload_profile"
            style={{
              backgroundImage: `url(http://127.0.0.1:8000/uploads/)`,
            }}
            class="mx-auto cursor-pointer flex justify-center w-[141px] h-[141px] bg-blue-300/20 rounded-full bg-cover bg-center bg-no-repeat"
          >
            <div class="bg-white/90 rounded-full w-6 h-6 text-center ml-28 mt-4">
              <input
                type="file"
                name="photo"
                id="upload_profile"
                hidden
                // onChange={(event) => {
                //   const file = event.target.files[0]; // Get the selected file
                //   setPhoto(file); // Set the file to the photo state
                // }}
              />
              <label for="upload_profile">
                <span className="text-[25px] text-deepBlue">
                  <MdLinkedCamera />
                </span>
              </label>
            </div>
          </label>
        </div>
        <form
          className="text-darkgray laptop:text-lap_b text-[30px]"
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <div className="laptop:flex gap-16 laptop:my-[16px]">
            <div className="laptop:w-[45%] py-[18px] laptop:py-[5px] laptop:text-lap_b text-[30px] w-[100%] ">
              <label className="">First Name</label>
              <br />
              <input
                type="text"
                placeholder="Jenny"
                // onChange={(event) => {
                //   setFirstName(event.target.value);
                // }}
                className="mt-[8px] border-[0.6px] rounded-md laptop:text-lap_b text-[30px] py-[10px] w-full px-[20px] bg-[#F4F7FF] focus:outline-none focus:border-gray-400 focus:bg-white"
              />
            </div>
            <div className="laptop:w-[45%] py-[18px] laptop:py-[5px] laptop:text-lap_b text-[30px]">
              <label>Last Name</label>
              <br />
              <input
                type="text"
                placeholder="Wilson "
                // onChange={(event) => {
                //   setLastName(event.target.value);
                // }}
                className="mt-[8px] border-[0.6px] rounded-md laptop:text-lap_b text-[30px] py-[10px] w-full px-[20px] bg-[#F4F7FF] focus:outline-none focus:border-gray-400 focus:bg-white"
              />
            </div>
          </div>
          <div className="laptop:flex gap-16 laptop:my-[16px]">
            <div className="laptop:w-[45%] py-[18px] laptop:py-[5px] laptop:text-lap_b text-[30px] w-[100%] ">
              <label className="">Your Email</label>
              <br />
              <input
                type="text"
                placeholder="jenny@example.com"
                // onChange={(event) => {
                //   setEmail(event.target.value);
                // }}
                className="mt-[8px] border-[0.6px] rounded-md laptop:text-lap_b text-[30px] py-[10px] w-full px-[20px] bg-[#F4F7FF] focus:outline-none focus:border-gray-400 focus:bg-white"
              />
            </div>
            <div className="laptop:w-[45%] py-[18px] laptop:py-[5px] laptop:text-lap_b text-[30px] w-[100%]">
              <label>Phone Number</label>
              <br />
              <input
                type="text"
                placeholder="546-933-2772"
                // onChange={(event) => {
                //   setPhoneNumber(event.target.value);
                // }}
                className="mt-[8px] border-[0.6px] rounded-md laptop:text-lap_b text-[30px] py-[10px] w-full px-[20px] bg-[#F4F7FF] focus:outline-none focus:border-gray-400 focus:bg-white"
              />
            </div>
          </div>
          <div className="laptop:flex gap-16 laptop:my-[16px]">
            <div className="laptop:w-[45%] py-[18px] laptop:py-[5px] laptop:text-lap_b text-[30px] w-[100%] ">
              <label className="">Role</label>
              <br />
              <select
                // onChange={(event) => {
                //   setRole(event.target.value);
                // }}
                className="mt-[8px] border-[0.6px] cursor-pointer rounded-md laptop:text-lap_b text-[30px] py-[10px] w-full px-[20px] bg-[#F4F7FF] focus:outline-none focus:border-gray-400 focus:bg-white"
              >
                <option>Select Role</option>
                <option selected value={"admin"}>
                  Admin
                </option>
              </select>
            </div>
            <div className="laptop:w-[45%] py-[18px] laptop:py-[5px] laptop:text-lap_b text-[30px] w-[100%]">
              <label>Company Name</label>
              <br />
              <input
                type="text"
                placeholder="ABC"
                // onChange={(event) => {
                //   setPhoneNumber(event.target.value);
                // }}
                className="mt-[8px] border-[0.6px] rounded-md laptop:text-lap_b text-[30px] py-[10px] w-full px-[20px] bg-[#F4F7FF] focus:outline-none focus:border-gray-400 focus:bg-white"
              />
            </div>
          </div>
          <div className="laptop:flex gap-16 laptop:my-[16px]">
            <div className="laptop:w-[45%] py-[18px] laptop:py-[5px] laptop:text-lap_b text-[30px] w-[100%]">
              <label>Company Code</label>
              <br />
              <input
                type="text"
                placeholder="RWL1000"
                // onChange={(event) => {
                //   setPhoneNumber(event.target.value);
                // }}
                className="mt-[8px] border-[0.6px] rounded-md laptop:text-lap_b text-[30px] py-[10px] w-full px-[20px] bg-[#F4F7FF] focus:outline-none focus:border-gray-400 focus:bg-white"
              />
            </div>
          </div>

          <div className="flex justify-center items-center">
            <input
              onClick={() => {
                // setSubmit(true);
              }}
              type="submit"
              className="bg-deepBlue text-white laptop:text-lap_c text-m_b cursor-pointer rounded-md py-[7px] px-[40px] mt-[25px]"
            />
          </div>
        </form>
      </div>
      {/* </div> */}

      {/* {status && (
        <Modal status={status} setStatus={setStatus} message={message} />
      )} */}
    </>
  );
};

export default EditProfile;
