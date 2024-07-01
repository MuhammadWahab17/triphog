import React, { useState } from "react";
import { CiMenuKebab, CiSearch, CiStar } from "react-icons/ci";
import { FaMicrophone, FaPrint } from "react-icons/fa";
import { IoChevronBackSharp, IoCloudUploadOutline } from "react-icons/io5";
import { RiImageAddLine } from "react-icons/ri";
import { IoIosSend } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import AdminChatSideBar from "./AdminChatSideBar";
import NewGroupSideBar from "./NewGroupSideBar";

const AdminChat = () => {
  const [newGroup, setNewGroup] = useState(false);
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
      {newGroup ? (
        <NewGroupSideBar />
      ) : (
        <AdminChatSideBar newGroup={newGroup} setNewGroup={setNewGroup} />
      )}
    </>
  );
};

export default AdminChat;
