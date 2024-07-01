import { IoArrowBackOutline } from "react-icons/io5";
// import { useAddNewAdminContext } from "../../../../Providers/SuperAdmin/AddNewAdminProvider";
import { MdLinkedCamera } from "react-icons/md";

import { Link } from "react-router-dom";
// import AdminSideBar from "./AddNewAdminSideBar";
import Modal from "../../../Modal";

const AddNewRide = () => {
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
      <div className="">
        <div className="bg-white rounded-[20px] p-[30px] mt-[20px] laptop:mr-[30px]">
          <Link to={"/admin"}>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2 laptop:text-lap_d text-m_c font-[600]">
                <IoArrowBackOutline />
                <h2 className="laptop:text-lap_c text-m_c">Add new Trip</h2>
              </div>
              <div className="grid text-lap_b font-[400] grid-cols-2 gap-[20px]">
                <button className="border border-deepBlue rounded-md py-[5px] px-[12px]">
                  Add Patient
                </button>
                <button className="border border-deepBlue bg-deepBlue text-white rounded-md py-[5px] px-[12px]">
                  Add Driver
                </button>
              </div>
            </div>
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
                <label className="">Trip Ref</label>
                <br />
                <input
                  type="text"
                  placeholder=""
                  // onChange={(event) => {
                  //   setFirstName(event.target.value);
                  // }}
                  className="mt-[8px] border-[0.6px] rounded-md laptop:text-lap_b text-[30px] py-[10px] w-full px-[20px] bg-[#F4F7FF] focus:outline-none focus:border-gray-400 focus:bg-white"
                />
              </div>
              <div className="laptop:w-[45%] py-[18px] laptop:py-[5px] laptop:text-lap_b text-[30px]">
                <label>Pickup Date </label>
                <br />
                <input
                  type="date"
                  placeholder="12.02.2024"
                  // onChange={(event) => {
                  //   setLastName(event.target.value);
                  // }}
                  className="mt-[8px] border-[0.6px] rounded-md laptop:text-lap_b text-[30px] py-[10px] w-full px-[20px] bg-[#F4F7FF] focus:outline-none focus:border-gray-400 focus:bg-white"
                />
              </div>
            </div>
            <div className="laptop:flex gap-16 laptop:my-[16px]">
              <div className="laptop:w-[45%] py-[18px] laptop:py-[5px] laptop:text-lap_b text-[30px] w-[100%] ">
                <label className="">Patient Ref</label>
                <br />
                <select
                  // onChange={(event) => {
                  //   setRole(event.target.value);
                  // }}
                  className="mt-[8px] border-[0.6px] cursor-pointer rounded-md laptop:text-lap_b text-[30px] py-[10px] w-full px-[20px] bg-[#F4F7FF] focus:outline-none focus:border-gray-400 focus:bg-white"
                >
                  <option disabled>Select Patient Ref</option>
                  <option selected value={"JJ_123KDD"}>
                    JJ_123KDD
                  </option>
                </select>
              </div>
              <div className="laptop:w-[45%] py-[18px] laptop:py-[5px] laptop:text-lap_b text-[30px] w-[100%]">
                <label>Patient Name (Full)</label>
                <br />
                <input
                  type="text"
                  placeholder="Jacob John "
                  // onChange={(event) => {
                  //   setPhoneNumber(event.target.value);
                  // }}
                  className="mt-[8px] border-[0.6px] rounded-md laptop:text-lap_b text-[30px] py-[10px] w-full px-[20px] bg-[#F4F7FF] focus:outline-none focus:border-gray-400 focus:bg-white"
                />
              </div>
            </div>
            <div className="laptop:flex gap-16 laptop:my-[16px]">
              <div className="laptop:w-[45%] py-[18px] laptop:py-[5px] laptop:text-lap_b text-[30px] w-[100%] ">
                <label className="">Driver Ref</label>
                <br />
                <select
                  // onChange={(event) => {
                  //   setRole(event.target.value);
                  // }}
                  className="mt-[8px] border-[0.6px] cursor-pointer rounded-md laptop:text-lap_b text-[30px] py-[10px] w-full px-[20px] bg-[#F4F7FF] focus:outline-none focus:border-gray-400 focus:bg-white"
                >
                  <option disabled>Select Driver Ref</option>
                  <option selected value={"JD_123KDD"}>
                    JD_123KDD
                  </option>
                </select>
              </div>
              <div className="laptop:w-[45%] py-[18px] laptop:py-[5px] laptop:text-lap_b text-[30px] w-[100%]">
                <label>Driver Name</label>
                <br />
                <input
                  type="text"
                  placeholder="Driver A"
                  // onChange={(event) => {
                  //   setPhoneNumber(event.target.value);
                  // }}
                  className="mt-[8px] border-[0.6px] rounded-md laptop:text-lap_b text-[30px] py-[10px] w-full px-[20px] bg-[#F4F7FF] focus:outline-none focus:border-gray-400 focus:bg-white"
                />
              </div>
            </div>
            <div className="laptop:flex gap-16 laptop:my-[16px]">
              <div className="laptop:w-[45%] py-[18px] laptop:py-[5px] laptop:text-lap_b text-[30px] w-[100%]">
                <label>Patient Phone number</label>
                <br />
                <input
                  type="Number"
                  placeholder="546-933-2772"
                  // onChange={(event) => {
                  //   setPhoneNumber(event.target.value);
                  // }}
                  className="mt-[8px] border-[0.6px] rounded-md laptop:text-lap_b text-[30px] py-[10px] w-full px-[20px] bg-[#F4F7FF] focus:outline-none focus:border-gray-400 focus:bg-white"
                />
              </div>
              <div className="laptop:w-[45%] py-[18px] laptop:py-[5px] laptop:text-lap_b text-[30px] w-[100%] ">
                <label className="">Patient Type</label>
                <br />
                <select
                  // onChange={(event) => {
                  //   setGender(event.target.value);
                  // }}
                  className="mt-[8px] border-[0.6px] cursor-pointer rounded-md laptop:text-lap_b text-[30px] py-[10px] w-full px-[20px] bg-[#F4F7FF] focus:outline-none focus:border-gray-400 focus:bg-white"
                >
                  <option disabled>Patient Type</option>
                  <option selected value={"Wheel Chair"}>
                    Wheel Chair
                  </option>
                </select>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="laptop:w-[45%] py-[18px] laptop:py-[5px] laptop:text-lap_b text-[30px] w-[100%]">
                <label>Leg ID</label>
                <br />
                <input
                  type="text"
                  placeholder="Q5469332171"
                  // onChange={(event) => {
                  //   setPhoneNumber(event.target.value);
                  // }}
                  className="mt-[8px] border-[0.6px] rounded-md laptop:text-lap_b text-[30px] py-[10px] w-full px-[20px] bg-[#F4F7FF] focus:outline-none focus:border-gray-400 focus:bg-white"
                />
              </div>
              <div className="laptop:w-[45%] py-[18px] laptop:py-[5px] laptop:text-lap_b text-[30px] w-[100%]">
                <label>Appointment Time</label>
                <br />
                <input
                  type="time"
                  // onChange={(event) => {
                  //   setPhoneNumber(event.target.value);
                  // }}
                  className="mt-[8px] border-[0.6px] rounded-md laptop:text-lap_b text-[30px] py-[10px] w-full px-[20px] bg-[#F4F7FF] focus:outline-none focus:border-gray-400 focus:bg-white"
                />
              </div>
            </div>
            <div className="laptop:w-[45%]  mt-[25px] py-[18px] laptop:py-[5px] laptop:text-lap_b text-[30px] w-[100%]">
              <label>Select Leg</label>
              <br />
              <div className="flex justify-between my-[10px]">
                <div className="flex items-center gap-[10px]">
                  <input
                    type="checkbox"
                    value={"Leg A"}
                    id="legA"
                    className="w-4 h-4 cursor-pointer rounded-lg accent-deepBlue"
                  />
                  <label
                    className="text-lap_[16px] text-black font-[600] "
                    for="legA"
                  >
                    Leg A
                  </label>
                </div>
                <div className="flex items-center gap-[10px]">
                  <input
                    type="checkbox"
                    value={"Leg B"}
                    id="legB"
                    className="w-4 h-4 cursor-pointer rounded-lg accent-deepBlue"
                  />
                  <label
                    className="text-lap_[16px] text-black font-[600] "
                    for="legB"
                  >
                    Leg B
                  </label>
                </div>
                <div className="flex items-center gap-[10px]">
                  <input
                    type="checkbox"
                    value={"Leg C"}
                    id="legC"
                    className="w-4 h-4 cursor-pointer rounded-lg accent-deepBlue"
                  />
                  <label
                    className="text-lap_[16px] text-black font-[600] "
                    for="legC"
                  >
                    Leg C
                  </label>
                </div>
              </div>
            </div>
            <h3 className="text-[#A6A6A6] text-lap_b">
              A Route is when patient leaves home and go to doctor. The B Route
              is when the patient leave doctor and goes home. C Route if patient
              stop to pharmacy before going home.
            </h3>
            <h2 className="text-lap_c mt-[25px] text-black font-[700]">
              Leg A Patient
            </h2>
            <div className="laptop:flex gap-16 laptop:my-[16px]">
              <div className="laptop:w-[45%] py-[18px] laptop:py-[5px] laptop:text-lap_b text-[30px] w-[100%] ">
                <label className="">Pickup Address - Time</label>
                <br />
                <div className="flex items-center justify-between">
                  <input
                    type="text"
                    placeholder="H/No GH34"
                    className="mt-[8px] border-[0.6px] rounded-md laptop:text-lap_b text-[30px] py-[10px] w-[45%] px-[20px] bg-[#F4F7FF] focus:outline-none focus:border-gray-400 focus:bg-white"
                  />
                  <input
                    type="time"
                    className="mt-[8px] border-[0.6px] rounded-md laptop:text-lap_b text-[30px] py-[10px] w-[45%] px-[20px] bg-[#F4F7FF] focus:outline-none focus:border-gray-400 focus:bg-white"
                  />
                </div>
              </div>
              <div className="laptop:w-[45%] py-[18px] laptop:py-[5px] laptop:text-lap_b text-[30px] w-[100%]">
                <label>Drop off Address - Time</label>
                <br />
                <input
                  type="text"
                  placeholder="Hospital"
                  // onChange={(event) => {
                  //   setPhoneNumber(event.target.value);
                  // }}
                  className="mt-[8px] border-[0.6px] rounded-md laptop:text-lap_b text-[30px] py-[10px] w-full px-[20px] bg-[#F4F7FF] focus:outline-none focus:border-gray-400 focus:bg-white"
                />
              </div>
            </div>
            <h2 className="text-lap_c mt-[25px] text-black font-[700]">
              Leg B Patient
            </h2>
            <div className="laptop:flex gap-16 laptop:my-[16px]">
              <div className="laptop:w-[45%] py-[18px] laptop:py-[5px] laptop:text-lap_b text-[30px] w-[100%] ">
                <label className="">Pickup Address - Time</label>
                <br />
                <div className="flex items-center justify-between">
                  <input
                    type="text"
                    placeholder="H/No GH34"
                    className="mt-[8px] border-[0.6px] rounded-md laptop:text-lap_b text-[30px] py-[10px] w-[45%] px-[20px] bg-[#F4F7FF] focus:outline-none focus:border-gray-400 focus:bg-white"
                  />
                  <input
                    type="time"
                    className="mt-[8px] border-[0.6px] rounded-md laptop:text-lap_b text-[30px] py-[10px] w-[45%] px-[20px] bg-[#F4F7FF] focus:outline-none focus:border-gray-400 focus:bg-white"
                  />
                </div>
              </div>
              <div className="laptop:w-[45%] py-[18px] laptop:py-[5px] laptop:text-lap_b text-[30px] w-[100%]">
                <label>Drop off Address - Time</label>
                <br />
                <input
                  type="text"
                  placeholder="Hospital"
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
      </div>
      <div className="mt-[-100px] bg-[white]">{/* <AdminSideBar /> */}</div>
      {/* {status && (
        <Modal status={status} setStatus={setStatus} message={message} />
      )} */}
    </>
  );
};

export default AddNewRide;
