import React from "react";
import { CiMenuKebab, CiSearch, CiStar } from "react-icons/ci";
import { FaMicrophone, FaPrint } from "react-icons/fa";
import { IoChevronBackSharp, IoCloudUploadOutline } from "react-icons/io5";
import { RiImageAddLine } from "react-icons/ri";
import { IoIosSend } from "react-icons/io";
import { MdDelete } from "react-icons/md";

const Chat = () => {
  return (
    <>
      <div className="bg-white rounded-[20px] p-[30px] mt-[20px]  float-left order-2 w-[100%]">
        <div className="w-[100%] ">
          <div>
            <div className="grid grid-cols-[2%_28%_60%_10%] gap-[6px] items-center">
              <div className="bg-[#F5F5F5] py-[2px] rounded-md">
                <IoChevronBackSharp />
              </div>
              <div className="flex items-center font-[600] gap-[18px]">
                <h2>John Charles</h2>
                <button className="text-[#4F3FF0] bg-[#f4f7ff] text-lap_a py-[5px] px-[15px]">
                  Admin
                </button>
              </div>
              <div></div>
              <div className="flex items-center justify-between bg-[#f4f7ff] p-[6px] rounded-lg border-[1px] text-lap_c">
                <FaPrint />
                <CiStar />
                <MdDelete />
              </div>
            </div>
            <hr className="my-[20px]"></hr>
            <div className="grid grid-cols-[7%_63%_auto] my-[30px] items-center">
              <div>
                <img
                  src="https://media.istockphoto.com/id/1413766112/photo/successful-mature-businessman-looking-at-camera-with-confidence.jpg?s=612x612&w=0&k=20&c=NJSugBzNuZqb7DJ8ZgLfYKb3qPr2EJMvKZ21Sj5Sfq4="
                  alt="admin"
                  width={"50px"}
                  height={"50px"}
                  className="rounded-full w-[50px] h-[50px] object-cover"
                />
              </div>
              <div className="bg-[#F5F5F5] rounded-lg p-[15px] text-lap_b text-[#202224]">
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  aliquet justo ut eros facilisis, at tristique turpis pharetra.
                  Vestibulum ante ipsum primis in faucibus orci luctus et
                  ultrices posuere cubilia curae; Sed sed quam eget neque varius
                  ultricies.
                </div>
                <div className="flex items-center float-right my-[5px] gap-[10px] text-[#757575]">
                  <div>6.35 pm</div>
                  <div>
                    <CiMenuKebab />
                  </div>
                </div>
              </div>
              <div></div>
            </div>
            <div className="grid grid-cols-[37%_auto] my-[30px] items-center">
              <div></div>
              <div className="bg-deepBlue text-white rounded-lg p-[15px] text-lap_b">
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  aliquet justo ut eros facilisis, at tristique turpis pharetra.
                  Vestibulum ante ipsum primis in faucibus orci luctus et
                  ultrices posuere cubilia curae; Sed sed quam eget neque varius
                  ultricies.
                </div>
                <div className="flex items-center float-right my-[5px] gap-[10px] text-white">
                  <div>6.35 pm</div>
                  <div>
                    <CiMenuKebab />
                  </div>
                </div>
              </div>
              <div></div>
            </div>
            <div className="grid grid-cols-[7%_63%_auto] my-[30px] items-center">
              <div>
                <img
                  src="https://media.istockphoto.com/id/1413766112/photo/successful-mature-businessman-looking-at-camera-with-confidence.jpg?s=612x612&w=0&k=20&c=NJSugBzNuZqb7DJ8ZgLfYKb3qPr2EJMvKZ21Sj5Sfq4="
                  alt="admin"
                  width={"50px"}
                  height={"50px"}
                  className="rounded-full w-[50px] h-[50px] object-cover"
                />
              </div>
              <div className="bg-[#F5F5F5] rounded-lg p-[15px] text-lap_b text-[#202224]">
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  aliquet justo ut eros facilisis, at tristique turpis pharetra.
                  Vestibulum ante ipsum primis in faucibus orci luctus et
                  ultrices posuere cubilia curae; Sed sed quam eget neque varius
                  ultricies.
                </div>
                <div className="flex items-center float-right my-[5px] gap-[10px] text-[#757575]">
                  <div>6.35 pm</div>
                  <div>
                    <CiMenuKebab />
                  </div>
                </div>
              </div>
              <div></div>
            </div>
          </div>
          <hr></hr>
          <div className="grid items-center grid-cols-[5%_75%_5%_5%_10%] text-[#9D9D9D] text-lap_b mt-[20px]">
            <div className="text-lap_c cursor-pointer">
              <FaMicrophone />
            </div>
            <div className="cursor-pointer">
              <input
                type="text"
                className="w-[100%] focus:outline-none px-[10px]"
                placeholder="Write message"
              />
            </div>
            <div className="cursor-pointer">
              <input type="file" id="file" hidden />
              <label for="file" className="text-lap_c cursor-pointer">
                <IoCloudUploadOutline />
              </label>
            </div>
            <div className="cursor-pointer">
              <input type="file" id="image" hidden />
              <label for="image" className="text-lap_c cursor-pointer">
                <RiImageAddLine />
              </label>
            </div>
            <div>
              <button className="flex items-center text-lap_c text-white bg-deepBlue px-[15px] py-[2px] rounded-lg cursor-pointer">
                <h2>Send</h2>
                <div className="">
                  <IoIosSend />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-[20px] p-[30px] mt-[20px] laptop:mr-[30px] float-right order-1">
        <h2 className="text-lap_c font-[600]">Inquiries</h2>
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
        <div>
          <div className="bg-deepBlue flex rounded-xl gap-[10px] cursor-pointer p-[20px] text-white my-[15px]">
            <div>
              <img
                height={"80px"}
                width={"80px"}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYQrwc7xauDdmnjRG8qVcYZTUcLFminQIACg&s"
                alt="Business Man"
                className=" rounded-full"
              />
            </div>
            <div>
              <div className="flex justify-between items-center">
                <h2 className="text-lap_c font-[500]">John Charles</h2>
                <h4 className="text-lap_a text-lightgray">Wednesday</h4>
              </div>
              <h3 className="text-lap_b font-[300] text-lightgray">
                What destinations do your group tour packages cover?
              </h3>
            </div>
          </div>
          <div className="bg-white flex rounded-xl gap-[10px] cursor-pointer p-[20px] text-black my-[15px] border-[2px]">
            <div>
              <img
                height={"80px"}
                width={"80px"}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYQrwc7xauDdmnjRG8qVcYZTUcLFminQIACg&s"
                alt="Business Man"
                className=" rounded-full"
              />
            </div>
            <div>
              <div className="flex justify-between items-center">
                <h2 className="text-lap_c font-[500]">John Charles</h2>
                <h4 className="text-lap_a text-darkgray">Wednesday</h4>
              </div>
              <h3 className="text-lap_b font-[300] text-darkgray">
                What destinations do your group tour packages cover?
              </h3>
            </div>
          </div>
          <div className="bg-white flex rounded-xl gap-[10px] cursor-pointer p-[20px] text-black my-[15px] border-[2px]">
            <div>
              <img
                height={"80px"}
                width={"80px"}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYQrwc7xauDdmnjRG8qVcYZTUcLFminQIACg&s"
                alt="Business Man"
                className=" rounded-full"
              />
            </div>
            <div>
              <div className="flex justify-between items-center">
                <h2 className="text-lap_c font-[500]">John Charles</h2>
                <h4 className="text-lap_a text-darkgray">Wednesday</h4>
              </div>
              <h3 className="text-lap_b font-[300] text-darkgray">
                What destinations do your group tour packages cover?
              </h3>
            </div>
          </div>
          <div className="bg-white flex rounded-xl gap-[10px] cursor-pointer p-[20px] text-black my-[15px] border-[2px]">
            <div>
              <img
                height={"80px"}
                width={"80px"}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYQrwc7xauDdmnjRG8qVcYZTUcLFminQIACg&s"
                alt="Business Man"
                className=" rounded-full"
              />
            </div>
            <div>
              <div className="flex justify-between items-center">
                <h2 className="text-lap_c font-[500]">John Charles</h2>
                <h4 className="text-lap_a text-darkgray">Wednesday</h4>
              </div>
              <h3 className="text-lap_b font-[300] text-darkgray">
                What destinations do your group tour packages cover?
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;
