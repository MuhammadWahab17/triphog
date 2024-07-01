import React, { useState, useEffect, createContext, useContext } from "react";
import axios from "axios";
import SubmitSuccessModal from "../../components/SuperAdmin/Subscribers/AddNewAdmin/SubmitSuccessModal";
import { useParams } from "react-router-dom";

const UpdateAdminContext = createContext();

const UpdateAdminProvider = ({ children }) => {
  const { id } = useParams();
  const [firstName, setFirstName] = useState("ali");
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [role, setRole] = useState();
  const [gender, setGender] = useState();
  const [submit, setSubmit] = useState(false);
  const [status, setStatus] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [plan, setPlan] = useState(false);
  const [loading, setLoading] = useState(false);
  const [photo, setPhoto] = useState();
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    const getAdmin = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(
          `${process.env.REACT_APP_BACKEND}/api/v1/superadmin/admin/${id}`
        );
        setFirstName(data.data.firstName);
        setLastName(data.data.lastName);
        setEmail(data.data.email);
        setPhoneNumber(data.data.phoneNumber);
        setRole(data.data.role);
        setGender(data.data.gender);
        setPlan(data.data.plan);
        setPhoto(data.data.photo);
        setFeatures(data.data.features);
      } catch (error) {
        console.error("Error fetching admin data:", error);
      } finally {
        setLoading(false);
      }
    };

    getAdmin();
  }, []);

  useEffect(() => {
    const updateAdmin = async () => {
      try {
        setLoading(true);
        console.log(features);

        const { data } = await axios.patch(
          `${process.env.REACT_APP_BACKEND}/api/v1/superadmin/admin/${id}`,
          {
            firstName,
            lastName,
            email,
            phoneNumber,
            role,
            gender,
            photo,
            features,
          }
        );
        if (data.status === "success") {
          setStatus("success");
          setModalMessage(
            `Admin ${firstName} ${lastName} updated Successfully`
          );
          setSubmit(false); // Reset the submit state
        }
      } catch (error) {
        console.error("Error updating admin data:", error);
        setStatus("error");
        setModalMessage("Error updating admin data");
      } finally {
        setLoading(false);
        setSubmit(false);
      }
    };

    if (submit) {
      updateAdmin();
    }
  }, [submit]);

  return (
    <UpdateAdminContext.Provider
      value={{
        firstName,
        lastName,
        email,
        phoneNumber,
        role,
        gender,
        setFirstName,
        setLastName,
        setEmail,
        setPhoneNumber,
        setRole,
        setGender,
        features,
        setFeatures,
        plan,
        photo,
        setPhoto,
        setSubmit,
        loading,
        status,
        setStatus,
        modalMessage,
      }}
    >
      <>{children}</>
    </UpdateAdminContext.Provider>
  );
};

export const useUpdateAdminContext = () => {
  return useContext(UpdateAdminContext);
};

export default UpdateAdminProvider;
