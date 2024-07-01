import React, { useEffect, useState } from "react";
import { createContext, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const getSingleAdminContext = createContext();

const GetSingleAdminProvider = ({ children }) => {
  const { id } = useParams();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [plan, setPlan] = useState(false);
  const [loading, setLoading] = useState(false);
  const [photo, setPhoto] = useState();
  console.log(firstName);
  useEffect(() => {
    try {
      const getAdmin = async () => {
        setLoading(true);
        const { data } = await axios.get(
          `${process.env.REACT_APP_BACKEND}/api/v1/superadmin/admin/${id}`
        );

        setFirstName(data.data.firstName);
        setLastName(data.data.lastName);
        setPlan(data.data.plan);
        setPhoto(data.data.photo);
      };
      getAdmin();
    } catch (error) {
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <getSingleAdminContext.Provider
      value={{
        firstName,
        lastName,
        setFirstName,
        setLastName,
        plan,
        photo,
        setPhoto,
        loading,
      }}
    >
      {children}
    </getSingleAdminContext.Provider>
  );
};

export const useGetSingleAdminContext = () => {
  return useContext(getSingleAdminContext);
};

export default GetSingleAdminProvider;
