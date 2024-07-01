// // src/components/GoogleAuthCallback.js
// import React, { useEffect } from "react";
// import { useNavigate, useLocation } from "react-router-dom";

// import axios from "axios";
// import { useCalendar } from "../../../Providers/Admin/CalendarProvider";

// const GoogleAuthCallback = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { setGoogleConnected, fetchEvents } = useCalendar();

//   useEffect(() => {
//     const handleCallback = async () => {
//       const searchParams = new URLSearchParams(location.search);
//       const code = searchParams.get("code");
//       const state = searchParams.get("state"); // This is our adminId

//       if (!code || !state) {
//         navigate("/"); // Redirect to home page if code or state is missing
//         return;
//       }

//       try {
//         const response = await axios.post(
//           `${process.env.REACT_APP_BACKEND}/auth/google/token`,
//           { code, state },
//           { withCredentials: true }
//         );

//         if (
//           response.data.message === "Google Calendar connected successfully!"
//         ) {
//           setGoogleConnected();
//           await fetchEvents();
//           navigate("/admin/meeting"); // Redirect to calendar page
//         } else {
//           throw new Error("Failed to connect Google Calendar");
//         }
//       } catch (error) {
//         console.error("Error in Google Auth Callback:", error);
//         navigate("/"); // Redirect to home page or show an error
//       }
//     };

//     handleCallback();
//   }, [setGoogleConnected, fetchEvents, navigate, location]);

//   return <div>Connecting to Google Calendar...</div>;
// };

// export default GoogleAuthCallback;
