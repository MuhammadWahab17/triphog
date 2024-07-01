import React, { createContext, useState, useContext } from "react";
import axios from "axios";

const AdminLoginContext = createContext();

export const AdminLoginProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND}/api/v1/admin/login`,
        { email, password },
        { withCredentials: true } // Important for receiving cookies
      );

      if (response.data.status === "success") {
        setIsLoggedIn(true);
        setUser(response.data.data.admin);
        return true; // Return true for successful login
      } else {
        setError("Login failed. Please check your credentials.");
        return false; // Return false for failed login
      }
    } catch (err) {
      console.error("Login error:", err);
      setError(
        err.response?.data?.message || "An error occurred. Please try again."
      );
      return false; // Return false for failed login due to error
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      await axios.get(`${process.env.REACT_APP_BACKEND}/api/v1/auth/logout`, {
        withCredentials: true,
      });
      setIsLoggedIn(false);
      setUser(null);
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  return (
    <AdminLoginContext.Provider
      value={{
        login,
        logout,
        loading,
        error,
        isLoggedIn,
        user,
      }}
    >
      {children}
    </AdminLoginContext.Provider>
  );
};

export const useAdminLogin = () => useContext(AdminLoginContext);
