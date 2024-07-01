import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const DeleteAdminContext = createContext();

const DeleteAdminProvider = ({ children, onDelete }) => {
  const [submit, setSubmit] = useState(false);
  const [status, setStatus] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [id, setId] = useState();

  useEffect(() => {
    if (submit && id) {
      const deleteAdmin = async () => {
        try {
          const { data } = await axios.delete(
            `${process.env.REACT_APP_BACKEND}/api/v1/superadmin/admin/${id}`
          );
          if (data.status === "success") {
            setStatus("success");
            setModalMessage(`Admin Deleted Successfully`);
            onDelete(); // Notify about the deletion
          } else {
            setStatus("error");
            setModalMessage(`Error Deleting Admin`);
          }
        } catch (error) {
          console.error("Network Error:", error);
          setStatus("error"); // Set status to "error" on network error
          setModalMessage(`Network Error: Failed to delete admin`);
        } finally {
          setSubmit(false);
        }
      };

      deleteAdmin();
    }
  }, [submit, id, onDelete]);

  return (
    <DeleteAdminContext.Provider
      value={{ setSubmit, setId, status, modalMessage, setStatus }}
    >
      {children}
    </DeleteAdminContext.Provider>
  );
};

export const useDeleteAdminContext = () => {
  return useContext(DeleteAdminContext);
};

export default DeleteAdminProvider;
