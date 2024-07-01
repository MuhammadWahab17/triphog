import React, { useState, createContext, useContext } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

const CreatePasswordContext = createContext();

const CreatePasswordProvider = ({ children }) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [message, setMessage] = useState("");

  const createPassword = async () => {
    if (!password || !confirmPassword || !token) {
      setStatus("error");
      setMessage("Please fill in all required fields.");
      return;
    }

    if (password !== confirmPassword) {
      setStatus("error");
      setMessage("Passwords do not match.");
      return;
    }

    try {
      setLoading(true);
      setStatus("");
      setMessage("");

      const { data } = await axios.post(
        `${process.env.REACT_APP_BACKEND}/api/v1/superadmin/admin/create-password/${token}`,
        { password, confirmPassword }
      );

      if (data.status === "success") {
        setStatus("success");
        setMessage("Password created successfully.");
      } else {
        setStatus("error");
        setMessage(
          data.message || "Failed to create password. Please try again."
        );
      }
    } catch (err) {
      console.error("Error creating password:", err);
      setStatus("error");
      setMessage(
        err.response?.data?.message ||
          "Something went wrong. Please try again later."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <CreatePasswordContext.Provider
      value={{
        password,
        setPassword,
        confirmPassword,
        setConfirmPassword,
        token,
        setToken,
        createPassword,
        loading,
        status,
        message,
      }}
    >
      {children}
    </CreatePasswordContext.Provider>
  );
};

export const useCreatePasswordContext = () => {
  return useContext(CreatePasswordContext);
};

export default CreatePasswordProvider;
