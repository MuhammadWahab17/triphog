import React from "react";
import { GoDotFill, GoKebabHorizontal } from "react-icons/go";

const Rides = () => {
  return (
    <div className="bg-white rounded-[20px] p-[20px] mt-[20px]">
      <div className="flex items-center justify-between text-lap_c font-[600]">
        <h2>Messages</h2>
        <h2 className="float-right">
          <GoKebabHorizontal />
        </h2>
      </div>
      <hr className="my-[10px]"></hr>
      <div className="flex my-[10px] items-center gap-5 justify-between bg-deepBlue text-white rounded-lg p-[15px] text-lap_b ">
        <img
          src="https://media.istockphoto.com/id/1413766112/photo/successful-mature-businessman-looking-at-camera-with-confidence.jpg?s=612x612&w=0&k=20&c=NJSugBzNuZqb7DJ8ZgLfYKb3qPr2EJMvKZ21Sj5Sfq4="
          alt=""
          className="h-[50px] w-[50px] object-cover rounded-full"
        />
        <h2>John Charles</h2>
        <div className="flex items-center gap-1">
          <h4 className="bg-white text-deepBlue rounded-full px-1 py-[0.5px]">
            10
          </h4>
          <h3 className="text-[#959595]">12:37 PM</h3>
        </div>
      </div>
      <div className="flex my-[10px] items-center gap-5 justify-between border  text-black rounded-lg p-[15px] text-lap_b ">
        <img
          src="https://media.istockphoto.com/id/1413766112/photo/successful-mature-businessman-looking-at-camera-with-confidence.jpg?s=612x612&w=0&k=20&c=NJSugBzNuZqb7DJ8ZgLfYKb3qPr2EJMvKZ21Sj5Sfq4="
          alt=""
          className="h-[50px] w-[50px] object-cover rounded-full"
        />
        <h2 className="font-[600]">John Charles</h2>
        <div className="flex items-center gap-1">
          <h4 className="bg-deepBlue text-white rounded-full px-1 py-[0.5px]">
            10
          </h4>
          <h3 className="text-[#959595]">12:37 PM</h3>
        </div>
      </div>
      <div className="flex my-[10px] items-center gap-5 justify-between border  text-black rounded-lg p-[15px] text-lap_b ">
        <img
          src="https://media.istockphoto.com/id/1413766112/photo/successful-mature-businessman-looking-at-camera-with-confidence.jpg?s=612x612&w=0&k=20&c=NJSugBzNuZqb7DJ8ZgLfYKb3qPr2EJMvKZ21Sj5Sfq4="
          alt=""
          className="h-[50px] w-[50px] object-cover rounded-full"
        />
        <h2 className="font-[600]">John Charles</h2>
        <div className="flex items-center gap-1">
          <h4 className="bg-deepBlue text-white rounded-full px-1 py-[0.5px]">
            10
          </h4>
          <h3 className="text-[#959595]">12:37 PM</h3>
        </div>
      </div>
    </div>
  );
};

export default Rides;
