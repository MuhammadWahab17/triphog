import React, { useState, useCallback } from "react";
import Progress from "./Progress";
import Admins from "./Admins";
import HomeSideBar from "./HomeSideBar";
import AllAdminsProvider from "../../../Providers/SuperAdmin/AllAdminsProvider";
import DeleteAdminProvider from "../../../Providers/SuperAdmin/DeleteAdminProvider";

const Home = () => {
  const [deleteDependency, setDeleteDependency] = useState(0);

  const handleDelete = useCallback(() => {
    setDeleteDependency((prev) => prev + 1); // Update dependency to trigger re-fetch
  }, []);

  return (
    <>
      <DeleteAdminProvider onDelete={handleDelete}>
        <AllAdminsProvider dependency={deleteDependency}>
          <div>
            <Progress />
            <Admins />
          </div>
          <div className="mt-[-100px]">
            <HomeSideBar />
          </div>
        </AllAdminsProvider>
      </DeleteAdminProvider>
    </>
  );
};

export default Home;
