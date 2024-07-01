import React, { useState, useEffect } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { useCalendar } from "../../../Providers/Admin/CalendarContext";
import { useAuth } from "../../../Providers/Admin/AuthContext";

// Add this style object
const styles = {
  container: {
    fontFamily: '"Cabin", sans-serif',
  },
  button: {
    fontFamily: '"Cabin", sans-serif',
    fontSize: "14px",
    padding: "10px 20px",
    cursor: "pointer",
    borderRadius: "4px",
    border: "none",
    backgroundColor: "#30325E",
    color: "white",
    transition: "background-color 0.3s",
    margin: "10px",
  },
};

function CalendarDashboard() {
  const { isAuthenticated, login, logout } = useAuth();
  const { fetchEvents } = useCalendar();

  useEffect(() => {
    console.log("isAuthenticated:", isAuthenticated);
    if (isAuthenticated) {
      fetchEvents();
    }
  }, [isAuthenticated]);

  const onLoginSuccess = (response) => {
    console.log("LOGIN SUCCESS", response);
    login(response.code);
  };

  const onLoginFailure = (response) => {
    console.log("LOGIN FAILED", response);
  };

  const onLogoutSuccess = () => {
    console.log("LOGOUT SUCCESS");
    logout();
  };

  return (
    <div style={styles.container}>
      {!isAuthenticated ? (
        <GoogleLogin
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
          buttonText="Sign In & Authorize Calendar"
          onSuccess={onLoginSuccess}
          onFailure={onLoginFailure}
          cookiePolicy="single_host_origin"
          responseType="code"
          accessType="offline"
          scope="openid email profile https://www.googleapis.com/auth/calendar"
          render={(renderProps) => (
            <button
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
              style={styles.button}
            >
              Sign In & Authorize Calendar
            </button>
          )}
        />
      ) : (
        <GoogleLogout
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
          buttonText="Sign In & Authorize Calendar with Other Account"
          onLogoutSuccess={onLogoutSuccess}
          render={(renderProps) => (
            <button
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
              style={styles.button}
            >
              Sign In & Authorize Calendar with Other Account
            </button>
          )}
        />
      )}
    </div>
  );
}

export default CalendarDashboard;
