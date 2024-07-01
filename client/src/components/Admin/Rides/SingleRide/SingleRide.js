import React, { useState } from "react";

// import { useUpdateAdminContext } from "../../../../Providers/SuperAdmin/UpdateAdminProvider";
import RideprofileHeader from "./RideprofileHeader";
import SingleDriverSideBar from "./SingleRideSideBar";
import Modal from "../../../Modal";
import Map from "./Map";

const SingleRide = () => {
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
        <RideprofileHeader />
        <div>
          <form
            className="text-darkgray laptop:text-lap_b"
            // onSubmit={handleSubmit}
          >
            <div className="laptop:flex gap-16 laptop:my-[16px]">
              <div className="laptop:w-[45%] py-[18px] laptop:py-[5px] laptop:text-lap_b text-[30px] w-[100%]">
                <label className="">Trip Ref</label>
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
                <label>Pickup Date</label>
                <br />
                <input
                  type="date"
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
                <label className="">Patient Ref</label>
                <br />
                <select
                  // onChange={(event) => {
                  //   setRole(event.target.value);
                  // }}
                  // value={role}
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
                  // placeholder={phoneNumber}
                  // onChange={(event) => {
                  //   setPhoneNumber(event.target.value);
                  // }}
                  className="mt-[8px] border-[0.6px] rounded-md laptop:text-lap_b text-[30px] py-[10px] w-full px-[20px] bg-[#F4F7FF] focus:outline-none focus:border-gray-400 focus:bg-white"
                />
              </div>
            </div>
            <div className="laptop:flex gap-16 laptop:my-[16px]">
              <div className="laptop:w-[45%] py-[18px] laptop:py-[5px] laptop:text-lap_b text-[30px] w-[100%]">
                <label className="">Driver Ref</label>
                <br />
                <select
                  // onChange={(event) => {
                  //   setRole(event.target.value);
                  // }}
                  // value={role}
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
                  // placeholder={phoneNumber}
                  // onChange={(event) => {
                  //   setPhoneNumber(event.target.value);
                  // }}
                  className="mt-[8px] border-[0.6px] rounded-md laptop:text-lap_b text-[30px] py-[10px] w-full px-[20px] bg-[#F4F7FF] focus:outline-none focus:border-gray-400 focus:bg-white"
                />
              </div>
            </div>
            <div className="laptop:flex gap-16 laptop:my-[16px]">
              <div className="laptop:w-[45%] py-[18px] laptop:py-[5px] laptop:text-lap_b text-[30px] w-[100%]">
                <label className="">Patient Phone number</label>
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
                <label>Patient Type</label>
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
            <div className="laptop:flex gap-16 laptop:my-[16px]">
              <div className="laptop:w-[45%] py-[18px] laptop:py-[5px] laptop:text-lap_b text-[30px] w-[100%]">
                <label className="">Mileage</label>
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
                <label>Leg ID</label>
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
            <div className="laptop:flex gap-16 items-center">
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
              <div className="laptop:w-[45%] py-[18px] laptop:py-[5px] laptop:text-lap_b text-[30px] w-[100%]">
                <label>Appointment Time</label>
                <br />
                <input
                  type="time"
                  // placeholder={phoneNumber}
                  // onChange={(event) => {
                  //   setPhoneNumber(event.target.value);
                  // }}
                  className="mt-[8px] border-[0.6px] rounded-md laptop:text-lap_b text-[30px] py-[10px] w-full px-[20px] bg-[#F4F7FF] focus:outline-none focus:border-gray-400 focus:bg-white"
                />
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
        <Map />
      </div>

      <div className="bg-white laptop:mt-[-80px]">
        <SingleDriverSideBar />
      </div>
      <>
        {/* {status && (
          <Modal status={status} setStatus={setStatus} message={modalMessage} />
        )} */}
      </>
    </>
  );
};

export default SingleRide;
