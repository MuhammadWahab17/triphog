import React, { useState } from "react";

// import { useUpdateAdminContext } from "../../../../Providers/SuperAdmin/UpdateAdminProvider";
import DriverprofileHeader from "./DriverprofileHeader";
import SingleDriverSideBar from "./SingleDriverSideBar";
import Modal from "../../../Modal";
import Rides from "./Rides";

const SingleAdmin = () => {
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
        <DriverprofileHeader />
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
            <div className="laptop:flex gap-16 laptop:my-[16px]">
              <div className="laptop:w-[45%] py-[18px] laptop:py-[5px] laptop:text-lap_b text-[30px] w-[100%]">
                <label className="">Role</label>
                <br />
                <select
                  // onChange={(event) => {
                  //   setRole(event.target.value);
                  // }}
                  // value={role}
                  className="mt-[8px] border-[0.6px] cursor-pointer rounded-md laptop:text-lap_b text-[30px] py-[10px] w-full px-[20px] bg-[#F4F7FF] focus:outline-none focus:border-gray-400 focus:bg-white"
                >
                  <option>Select Role</option>
                  <option value={"admin"}>Admin</option>
                </select>
              </div>
              <div className="laptop:w-[45%] py-[18px] laptop:py-[5px] laptop:text-lap_b text-[30px] w-[100%]">
                <label className="">Gender</label>
                <br />
                <select
                  // onChange={(event) => {
                  //   setGender(event.target.value);
                  // }}
                  // value={gender}
                  className="mt-[8px] border-[0.6px] cursor-pointer rounded-md laptop:text-lap_b text-[30px] py-[10px] w-full px-[20px] bg-[#F4F7FF] focus:outline-none focus:border-gray-400 focus:bg-white"
                >
                  <option>Select Gender</option>
                  <option value={"male"}>Male</option>
                  <option value={"female"}>Female</option>
                </select>
              </div>
            </div>
            <div className="laptop:flex gap-16 laptop:my-[16px]">
              <div className="laptop:w-[45%] py-[18px] laptop:py-[5px] laptop:text-lap_b text-[30px] w-[100%]">
                <label className="">Location</label>
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
                <label>Vehicle Name</label>
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
                <label className="">Signature</label>
                <br />
                <input
                  type="file"
                  // placeholder={email}
                  // onChange={(event) => {
                  //   setEmail(event.target.value);
                  // }}
                  className="mt-[8px] border-[0.6px] rounded-md laptop:text-lap_b text-[30px] py-[10px] w-full px-[20px] bg-[#F4F7FF] focus:outline-none focus:border-gray-400 focus:bg-white"
                />
              </div>
              <div className="laptop:w-[45%] py-[18px] laptop:py-[5px] laptop:text-lap_b text-[30px] w-[100%]">
                <label>List of Documents</label>
                <br />
                <input
                  type="file"
                  // placeholder={phoneNumber}
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
        <Rides />
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

export default SingleAdmin;
