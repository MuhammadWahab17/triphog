import React, { useState } from "react";
import { IoNotificationsOutline } from "react-icons/io5";
import { FaPencilAlt } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useUpdateAdminContext } from "../../../../Providers/SuperAdmin/UpdateAdminProvider";

const SingleAdminSideBar = () => {
  const { features, setFeatures } = useUpdateAdminContext();
  const [currentFeature, setCurrentFeature] = useState("");
  const [editingIndex, setEditingIndex] = useState(-1);

  const handleAddFeature = () => {
    if (currentFeature.trim()) {
      setFeatures([...features, currentFeature.trim()]);
      setCurrentFeature("");
    }
  };

  const handleEditFeature = (index) => {
    setCurrentFeature(features[index]);
    setEditingIndex(index);
  };

  const handleDeleteFeature = (index) => {
    setFeatures(features.filter((_, i) => i !== index));
  };

  const handleFeatureChange = (e) => {
    setCurrentFeature(e.target.value);
  };

  const handleSaveEdit = () => {
    if (currentFeature.trim()) {
      const updatedFeatures = [...features];
      updatedFeatures[editingIndex] = currentFeature.trim();
      setFeatures(updatedFeatures);
      setEditingIndex(-1);
      setCurrentFeature("");
    }
  };

  return (
    <>
      <div className="laptop:grid laptop:sticky laptop:top-0 laptop:left-0 laptop:right-0 p-[25px] bg-white">
        <div className="w-[100%] bg-[white]">
          <div className="laptop:flex float-right text-lap_e cursor-pointer mb-[30px] hidden bg-[white] ">
            <IoNotificationsOutline />
          </div>
          <div className="laptop:mt-[-30px] laptop:mb-[80px] mb-[120px] pt-[40px]">
            <h2 className="laptop:text-lap_c mt-[50px] font-[700] text-m_c">
              Features
            </h2>
            <div className="grid w-[100%] my-[10px] p-[20px] border-[2px] rounded-lg">
              <textarea
                className="p-[10px] border-[1px] rounded-lg border-lightgray laptop:text-lap_b text-m_a text-darkgray"
                placeholder="Write your new feature here..."
                value={currentFeature}
                onChange={handleFeatureChange}
              ></textarea>
            </div>
            <button
              className="grid float-right bg-deepBlue text-white px-[30px] py-[5px] laptop:text-lap_b text-m_b rounded-lg"
              onClick={editingIndex === -1 ? handleAddFeature : handleSaveEdit}
            >
              Save
            </button>
          </div>
          {features.map((feature, index) => (
            <div
              key={index}
              className="grid grid-cols-[80%_20%] items-center border rounded-lg px-[10px] py-[20px] laptop:text-lap_b text-[35px] mt-[20px]"
            >
              <div>Access to {feature}</div>
              <div className="flex laptop:gap-[10px] gap-[40px] items-center laptop:text-lap_c text-m_b">
                <FaPencilAlt
                  className="cursor-pointer"
                  onClick={() => handleEditFeature(index)}
                />
                <RiDeleteBin5Line
                  className="text-[red] cursor-pointer"
                  onClick={() => handleDeleteFeature(index)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SingleAdminSideBar;
