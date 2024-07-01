import React, { useEffect, useState } from "react";
import { createContext, useContext } from "react";
import axios from "axios";

const AddNewAdminContext = createContext();

const AddNewAdminProvider = ({ children }) => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [role, setRole] = useState();
  const [photo, setPhoto] = useState();
  const [gender, setGender] = useState();
  const [features, setFeatures] = useState([]);
  const [submit, setSubmit] = useState(false);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [modalMessage, setModalMessage] = useState("");

  useEffect(() => {
    if (submit) {
      const fetchData = async () => {
        try {
          setLoading(true);
          setStatus("");
          setModalMessage("");
          if (
            !firstName ||
            !lastName ||
            !email ||
            !phoneNumber ||
            !role ||
            !gender
          ) {
            setModalMessage("Please fill in all required fields.");
            setStatus("error");
            setLoading(false);
            setSubmit(false);
            return;
          }

          const { data } = await axios.post(
            `${process.env.REACT_APP_BACKEND}/api/v1/superadmin/admin`,
            { firstName, lastName, email, phoneNumber, role, gender, features }
          );

          if (data.status === "success") {
            setStatus("success");
            setModalMessage("Congratulations, admin added successfully");
          } else {
            setStatus("error");
            setModalMessage("Something went wrong. Please try again later.");
          }
        } catch (err) {
          console.error("Error fetching data:", err);
          setStatus("error");
          setModalMessage("Something went wrong. Please try again later.");
        } finally {
          setLoading(false);
          setSubmit(false);
        }
      };
      fetchData();
    }
  }, [submit]);

  return (
    <AddNewAdminContext.Provider
      value={{
        setFirstName,
        setLastName,
        setEmail,
        setPhoneNumber,
        setRole,
        setGender,
        setSubmit,
        photo,
        setPhoto,
        setFeatures,
        features,
        loading,
        //
        status,
        setStatus,
        message: modalMessage,
      }}
    >
      {children}
    </AddNewAdminContext.Provider>
  );
};

export const useAddNewAdminContext = () => {
  return useContext(AddNewAdminContext);
};

export default AddNewAdminProvider;
