import React, { useState } from "react";
import FeedBackSideBar from "./FeedBackSideBar";
import { CiSearch } from "react-icons/ci";
import { Rating } from "@smastrom/react-rating";

const FeedBack = () => {
  const [rating, setRating] = useState(0);
  return (
    <>
      <div className="bg-white h-screen rounded-[20px] p-[30px] mt-[20px] laptop:mr-[30px]">
        <div className="flex items-center justify-between">
          <h3 className="text-lap_c font-semibold">Reviews and Rating</h3>
          <div className="laptop:mb-4 mb-8 relative laptop:text-[15px] text-[40px] my-[15px]">
            <input
              type="text"
              placeholder="Search"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-darkgray laptop:pl-[40px] pl-[90px]"
            />
            <span className="absolute inset-y-0 left-0  flex items-center laptop:text-[20px] text-[40px] text-gray-400  laptop:pl-[10px] pl-[30px]">
              <CiSearch />
            </span>
          </div>
        </div>
        <div>
          <div className="bg-deepBlue rounded-lg p-[25px] my-5">
            <div className="flex items-center justify-between my-3">
              <div className="flex items-center gap-5">
                <img
                  src="https://media.istockphoto.com/id/1413766112/photo/successful-mature-businessman-looking-at-camera-with-confidence.jpg?s=612x612&w=0&k=20&c=NJSugBzNuZqb7DJ8ZgLfYKb3qPr2EJMvKZ21Sj5Sfq4="
                  alt="UserFeddBack"
                  className="h-[60px] w-[60px] object-cover rounded-full"
                />
                <div className="text-white text-lap_b">
                  <h3 className="font-[800]">Jacob Jones</h3>
                  <h4>12-12-2023</h4>
                </div>
              </div>
              <div>
                <Rating
                  style={{ maxWidth: 100 }}
                  value={rating}
                  onChange={setRating}
                />
              </div>
            </div>
            <div className="text-lap_b font-[300] text-white">
              Wow! WanderEase made planning my vacation a breeze. The interface
              is user-friendly, and I love how it suggests popular attractions
              and activities based on my preferences. The ability to customize
              my itinerary and save favorite destinations is a game-changer.
              Plus, the customer support team was incredibly helpful and
              responsive when I had questions. Highly recommended for anyone
              looking to streamline their travel planning process!
            </div>
          </div>
          <div className="border rounded-lg p-[25px] my-5">
            <div className="flex items-center justify-between my-3">
              <div className="flex items-center gap-5">
                <img
                  src="https://media.istockphoto.com/id/1413766112/photo/successful-mature-businessman-looking-at-camera-with-confidence.jpg?s=612x612&w=0&k=20&c=NJSugBzNuZqb7DJ8ZgLfYKb3qPr2EJMvKZ21Sj5Sfq4="
                  alt="UserFeddBack"
                  className="h-[60px] w-[60px] object-cover rounded-full"
                />
                <div className="text-[#80848C] text-lap_b">
                  <h3 className="font-[800]">Jacob Jones</h3>
                  <h4>12-12-2023</h4>
                </div>
              </div>
              <div>
                <Rating
                  style={{ maxWidth: 100 }}
                  value={rating}
                  onChange={setRating}
                />
              </div>
            </div>
            <div className="text-lap_b font-[300] text-[#80848C]">
              Wow! WanderEase made planning my vacation a breeze. The interface
              is user-friendly, and I love how it suggests popular attractions
              and activities based on my preferences. The ability to customize
              my itinerary and save favorite destinations is a game-changer.
              Plus, the customer support team was incredibly helpful and
              responsive when I had questions. Highly recommended for anyone
              looking to streamline their travel planning process!
            </div>
          </div>
          <div className="border rounded-lg p-[25px] my-5">
            <div className="flex items-center justify-between my-3">
              <div className="flex items-center gap-5">
                <img
                  src="https://media.istockphoto.com/id/1413766112/photo/successful-mature-businessman-looking-at-camera-with-confidence.jpg?s=612x612&w=0&k=20&c=NJSugBzNuZqb7DJ8ZgLfYKb3qPr2EJMvKZ21Sj5Sfq4="
                  alt="UserFeddBack"
                  className="h-[60px] w-[60px] object-cover rounded-full"
                />
                <div className="text-[#80848C] text-lap_b">
                  <h3 className="font-[800]">Jacob Jones</h3>
                  <h4>12-12-2023</h4>
                </div>
              </div>
              <div>
                <Rating
                  style={{ maxWidth: 100 }}
                  value={rating}
                  onChange={setRating}
                />
              </div>
            </div>
            <div className="text-lap_b font-[300] text-[#80848C]">
              Wow! WanderEase made planning my vacation a breeze. The interface
              is user-friendly, and I love how it suggests popular attractions
              and activities based on my preferences. The ability to customize
              my itinerary and save favorite destinations is a game-changer.
              Plus, the customer support team was incredibly helpful and
              responsive when I had questions. Highly recommended for anyone
              looking to streamline their travel planning process!
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[-80px]">
        <FeedBackSideBar />
      </div>
    </>
  );
};

export default FeedBack;
