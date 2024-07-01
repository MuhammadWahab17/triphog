import React, { useState } from "react";
import { IoNotificationsOutline } from "react-icons/io5";
import { FaPencil } from "react-icons/fa6";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useAddNewAdminContext } from "../../../../Providers/SuperAdmin/AddNewAdminProvider";

const AddNewAdminSideBar = () => {
  const { setFeatures, features } = useAddNewAdminContext();
  const [dummyfeatures, setDummyFeatures] = useState([]);
  const [newFeature, setNewFeature] = useState("");
  const [editingIndex, setEditingIndex] = useState(-1);

  const handleAddFeature = () => {
    if (newFeature.trim()) {
      setDummyFeatures([...dummyfeatures, newFeature.trim()]);
      setFeatures([...dummyfeatures, newFeature.trim()]);
      setNewFeature("");
    }
  };

  const handleEditFeature = (index) => {
    setEditingIndex(index);
    setNewFeature(dummyfeatures[index]);
  };

  const handleDeleteFeature = (index) => {
    setDummyFeatures(dummyfeatures.filter((_, i) => i !== index));
    setFeatures(features.filter((_, i) => i !== index));
  };

  const handleFeatureChange = (e) => {
    setNewFeature(e.target.value);
  };

  const handleSaveEdit = () => {
    if (newFeature.trim()) {
      const updatedFeatures = [...dummyfeatures];
      updatedFeatures[editingIndex] = newFeature.trim();
      setDummyFeatures(updatedFeatures);
      setFeatures(updatedFeatures);
      setEditingIndex(-1);
      setNewFeature("");
    }
  };

  return (
    <div className="laptop:grid laptop:sticky laptop:top-0 laptop:left-0 laptop:right-0 p-[25px] bg-white">
      <div className="w-[100%] mt-[-60px]">
        <div className="laptop:flex float-right text-lap_e cursor-pointer hidden laptop:pt-[50px]">
          <IoNotificationsOutline />
        </div>
        <div className="laptop:mt-[30px] mt-[80px] laptop:mb-[80px] mb-[120px] laptop:pt-[30px]">
          <h2 className="laptop:text-lap_c mt-[50px] text-m_c font-[700]">
            Features
          </h2>
          <div className="grid w-[100%] my-[10px] p-[20px] border-[2px] rounded-lg">
            <textarea
              className="p-[10px] border-[1px] rounded-lg border-lightgray laptop:text-lap_b text-m_a text-darkgray"
              placeholder="Write your new feature here..."
              value={newFeature}
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
        {dummyfeatures.map((feature, index) => (
          <div
            key={index}
            className="grid grid-cols-[80%_20%] items-center border rounded-lg px-[10px] py-[20px] laptop:text-lap_b text-[35px] mt-[20px]"
          >
            <div>Access to {feature}</div>
            <div className="flex laptop:gap-[10px] gap-[20px] items-center laptop:text-lap_c text-m_c">
              <h2 className="cursor-pointer">
                <FaPencil onClick={() => handleEditFeature(index)} />
              </h2>
              <h2 className="text-[red] cursor-pointer">
                <RiDeleteBin5Line onClick={() => handleDeleteFeature(index)} />
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddNewAdminSideBar;
