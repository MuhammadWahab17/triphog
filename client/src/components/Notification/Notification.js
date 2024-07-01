import React from "react";
import { LuBell } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";

const Notification = () => {
  return (
    <div className="bg-white rounded-[20px] p-[40px] mt-[20px] laptop:mr-[30px]">
      <div className="bg-[#EBECFF] rounded-2xl mx-auto w-[80%] p-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <LuBell className="text-[24px]" />
          <h3 className="text-lap_b">
            <span className="text-lap_b font-bold">
              Turn on push notifications{" "}
            </span>
            to know when your video has been watched and interacted with.
          </h3>
        </div>
        <div className="flex items-center gap-4">
          <button className=" rounded-full border-[#6C6685] py-[5px] px-[15px] border-[2px] text-lap_b font-semibold">
            Allow push notifications
          </button>
          <h3 className="text-lap_b font-semibold">Dismiss</h3>
        </div>
      </div>
      <h2 className="my-7 text-lap_c font-bold">Notifications</h2>
      <div className="my-2">
        <h3
          className="text-[#202224] text-lap_b font-semibold my-4
        "
        >
          Today, May 01
        </h3>
        <div className="mx-10">
          <div className="flex items-center gap-5 justify-between p-5">
            <div className="flex items-center gap-5">
              <img
                src="https://media.istockphoto.com/id/1413766112/photo/successful-mature-businessman-looking-at-camera-with-confidence.jpg?s=612x612&w=0&k=20&c=NJSugBzNuZqb7DJ8ZgLfYKb3qPr2EJMvKZ21Sj5Sfq4="
                alt="profile"
                className="h-[60px] w-[60px] rounded-full object-cover"
              />
              <div>
                <h2 className="text-[#222222] text-lap_b font-bold">
                  Meg Griffin has left you a review. Both of your reviews from
                  this ride are now public.
                </h2>
                <h4 className="text-[#717171] text-lap_b ">May 1, 2024</h4>
              </div>
            </div>
            <RxCross2 className="text-lap_d" />
          </div>
          <hr></hr>
          <div className="flex items-center gap-5 justify-between p-5 bg-[#ebecff]">
            <div className="flex items-center gap-5">
              <img
                src="https://media.istockphoto.com/id/1413766112/photo/successful-mature-businessman-looking-at-camera-with-confidence.jpg?s=612x612&w=0&k=20&c=NJSugBzNuZqb7DJ8ZgLfYKb3qPr2EJMvKZ21Sj5Sfq4="
                alt="profile"
                className="h-[60px] w-[60px] rounded-full object-cover"
              />
              <div>
                <h2 className="text-[#222222] text-lap_b font-bold">
                  Meg Griffin has left you a review. Both of your reviews from
                  this ride are now public.
                </h2>
                <h4 className="text-[#717171] text-lap_b ">May 1, 2024</h4>
              </div>
            </div>
            <RxCross2 className="text-lap_d" />
          </div>
          <hr></hr>
          <div className="flex items-center gap-5 justify-between p-5">
            <div className="flex items-center gap-5">
              <img
                src="https://media.istockphoto.com/id/1413766112/photo/successful-mature-businessman-looking-at-camera-with-confidence.jpg?s=612x612&w=0&k=20&c=NJSugBzNuZqb7DJ8ZgLfYKb3qPr2EJMvKZ21Sj5Sfq4="
                alt="profile"
                className="h-[60px] w-[60px] rounded-full object-cover"
              />
              <div>
                <h2 className="text-[#222222] text-lap_b font-bold">
                  Meg Griffin has left you a review. Both of your reviews from
                  this ride are now public.
                </h2>
                <h4 className="text-[#717171] text-lap_b ">May 1, 2024</h4>
              </div>
            </div>
            <RxCross2 className="text-lap_d" />
          </div>
          <hr></hr>
        </div>
      </div>
    </div>
  );
};

export default Notification;
