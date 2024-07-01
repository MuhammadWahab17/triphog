import React, { useState } from "react";

// import { useUpdateAdminContext } from "../../../../Providers/SuperAdmin/UpdateAdminProvider";
import PatientprofileHeader from "./PatientprofileHeader";
import SinglePatientSideBar from "./SinglePatientSideBar";
import Modal from "../../../Modal";
import Rides from "./Rides";

const SinglePatient = () => {
  // const {
  //   firstName,
  //   lastName,
  //   email,
  //   phoneNumber,
  //   role,
  //   gender,
  //   setFirstName,
  //   setLastName,
  //   setEmail,
  //   setPhoneNumber,
  //   setRole,
  //   setGender,
  //   setSubmit,
  //   status,
  //   setStatus,
  //   modalMessage,
  //   loading,
  // } = useUpdateAdminContext();

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   setSubmit(true);
  // };

  return (
    <>
      <div className="bg-white rounded-[20px] p-[30px] mt-[20px] laptop:mr-[30px]">
        <PatientprofileHeader />
        <div>
          <form
            className="text-darkgray laptop:text-lap_b"
            // onSubmit={handleSubmit}
          >
            <div className="laptop:flex gap-16 laptop:my-[16px]">
              <div className="laptop:w-[45%] py-[18px] laptop:py-[5px] laptop:text-lap_b text-[30px] w-[100%]">
                <label className="">First Name</label>
                <br />
                <input
                  type="text"
                  // placeholder={firstName}
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
                  // placeholder={lastName}
                  // onChange={(event) => {
                  //   setLastName(event.target.value);
                  // }}
                  className="mt-[8px] border-[0.6px] rounded-md laptop:text-lap_b text-[30px] py-[10px] w-full px-[20px] bg-[#F4F7FF] focus:outline-none focus:border-gray-400 focus:bg-white"
                />
              </div>
            </div>
            <div className="laptop:flex gap-16 laptop:my-[16px]">
              <div className="laptop:w-[45%] py-[18px] laptop:py-[5px] laptop:text-lap_b text-[30px] w-[100%]">
                <label className="">Your Email</label>
                <br />
                <input
                  type="text"
                  // placeholder={email}
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
                  // placeholder={phoneNumber}
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
            </div>
            <div className="laptop:w-[45%] py-[18px] laptop:py-[5px] laptop:text-lap_b text-[30px] w-[100%]">
              <label>Signature</label>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgsFFpPlaSeRKT5jlhyl0vFNlMQWWuIbdpSg&s"
                alt="Signature"
                className="h-[120px] w-[120px]"
              />
            </div>
            <div className="laptop:flex laptop:justify-center laptop:items-center">
              <input
                type="submit"
                className="bg-deepBlue text-white laptop:text-lap_c text-m_b cursor-pointer rounded-md py-[7px] px-[40px] mt-[25px]"
                // onChange={() => {
                //   setSubmit(true);
                // }}
              />
            </div>
          </form>
        </div>
        <Rides />
      </div>

      <div className="bg-white laptop:mt-[-80px]">
        <SinglePatientSideBar />
      </div>
      <>
        {/* {status && (
          <Modal status={status} setStatus={setStatus} message={modalMessage} />
        )} */}
      </>
    </>
  );
};

export default SinglePatient;
