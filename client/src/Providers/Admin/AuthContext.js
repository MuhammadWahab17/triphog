import React, { createContext, useState, useContext, useEffect } from "react";
import { gapi } from "gapi-script";
import axios from "axios";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const storedAuthState = localStorage.getItem("isAuthenticated");
    return storedAuthState ? JSON.parse(storedAuthState) : false;
  });

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
        scope: "openid email profile https://www.googleapis.com/auth/calendar",
      });
    }
    gapi.load("client:auth2", start);
  }, []);

  useEffect(() => {
    localStorage.setItem("isAuthenticated", JSON.stringify(isAuthenticated));
  }, [isAuthenticated]);

  const login = async (code) => {
    try {
      console.log("Sending code to backend:", code);
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND}/auth/create-token`,
        { code },
        { withCredentials: true }
      );
      console.log("Login response:", response.data);
      setIsAuthenticated(true);
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const logout = () => {
    console.log("Logging out");
    setIsAuthenticated(false);
    localStorage.removeItem("isAuthenticated");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
