import React, { useState, useCallback } from "react";
import Admins from "../Home/Admins";
import AllAdminsProvider from "../../../Providers/SuperAdmin/AllAdminsProvider";
import HomeSideBar from "../Home/HomeSideBar";
import DeleteAdminProvider from "../../../Providers/SuperAdmin/DeleteAdminProvider";

const Index = () => {
  const [deleteDependency, setDeleteDependency] = useState(0);

  const handleDelete = useCallback(() => {
    setDeleteDependency((prev) => prev + 1); // Update dependency to trigger re-fetch
  }, []);

  return (
    <>
      <DeleteAdminProvider onDelete={handleDelete}>
        <AllAdminsProvider dependency={deleteDependency}>
          <div className="h-screen">
            <Admins />
          </div>
          <div className="mt-[-70px] bg-[white]">
            <HomeSideBar />
          </div>
        </AllAdminsProvider>
      </DeleteAdminProvider>
    </>
  );
};

export default Index;
