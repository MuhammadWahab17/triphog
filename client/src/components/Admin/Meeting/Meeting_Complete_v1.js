// import React, { useEffect, useState } from "react";
// import Paper from "@material-ui/core/Paper";
// import {
//   ViewState,
//   EditingState,
//   IntegratedEditing,
// } from "@devexpress/dx-react-scheduler";
// import {
//   Scheduler,
//   MonthView,
//   WeekView,
//   DayView,
//   Toolbar,
//   ViewSwitcher,
//   Appointments,
//   AppointmentTooltip,
//   AppointmentForm,
//   DateNavigator,
//   TodayButton,
//   ConfirmationDialog,
// } from "@devexpress/dx-react-scheduler-material-ui";
// import { useCalendar } from "../../../Providers/Admin/CalendarContext";
// import CalendarDashboard from "./CalendarDashboard";
// import CustomAppointmentForm from "./CustomAppointmentForm"; // Ensure correct import
// import MeetingSideBar from "./MeetingSideBar";

// const styles = `
//   body {
//     font-family: "Cabin", sans-serif;
//   }
// `;

// const Meeting = () => {
//   const { events, fetchEvents, createEvent, updateEvent, deleteEvent } =
//     useCalendar();
//   const [currentDate, setCurrentDate] = useState(new Date());

//   useEffect(() => {
//     fetchEvents();
//   }, []);

//   const formatEvents = (events) => {
//     return events.map((event) => ({
//       ...event,
//       startDate: new Date(event.startDate),
//       endDate: new Date(
//         Math.max(
//           new Date(event.endDate),
//           new Date(new Date(event.startDate).getTime() + 30 * 60000)
//         )
//       ),
//     }));
//   };

//   const commitChanges = async ({ added, changed, deleted }) => {
//     try {
//       if (added) {
//         // Log the added event for debugging
//         console.log("Adding event:", added);
//         validateDateTime(added);
//         await createEvent(added);
//       }
//       if (changed) {
//         const eventId = Object.keys(changed)[0];
//         // Log the changed event for debugging
//         console.log("Updating event:", { eventId, ...changed[eventId] });
//         validateDateTime(changed[eventId]);
//         await updateEvent(eventId, changed[eventId]);
//       }
//       if (deleted) {
//         // Log the deleted event ID for debugging
//         console.log("Deleting event ID:", deleted);
//         await deleteEvent(deleted);
//       }
//     } catch (error) {
//       console.error("Error committing changes:", error);
//     }
//   };

//   const validateDateTime = (event) => {
//     const { startDate, endDate } = event;
//     if (isNaN(new Date(startDate)) || isNaN(new Date(endDate))) {
//       throw new Error("Invalid date or time value");
//     }
//   };

//   return (
//     <>
//       <style>{styles}</style>
//       <div className="bg-white rounded-[20px] p-[30px] mt-[20px] laptop:mr-[30px] float-right order-2">
//         <CalendarDashboard />
//         <Paper
//           style={{
//             borderRadius: "20px",
//             boxShadow: "none",
//             border: "1px solid #e0e0e0",
//             fontFamily: '"Cabin", sans-serif',
//           }}
//         >
//           <Scheduler
//             data={formatEvents(events)}
//             height={800}
//             timeZone="Asia/Karachi"
//             style={{ padding: "20px", fontFamily: '"Cabin", sans-serif' }}
//           >
//             <ViewState
//               currentDate={currentDate}
//               onCurrentDateChange={setCurrentDate}
//               style={{ fontFamily: '"Cabin", sans-serif' }}
//             />
//             <EditingState
//               onCommitChanges={commitChanges}
//               style={{ fontFamily: '"Cabin", sans-serif' }}
//             />
//             <IntegratedEditing style={{ fontFamily: '"Cabin", sans-serif' }} />

//             <MonthView
//               style={{ fontFamily: '"Cabin", sans-serif' }}
//               timeTableCellComponent={({ children, ...restProps }) => (
//                 <MonthView.TimeTableCell
//                   {...restProps}
//                   style={{
//                     borderRight: "1px solid #e0e0e0",
//                     borderBottom: "1px solid #e0e0e0",
//                     height: "120px",
//                     fontFamily: '"Cabin", sans-serif',
//                   }}
//                 >
//                   {children}
//                 </MonthView.TimeTableCell>
//               )}
//               dayScaleCellComponent={({ children, ...restProps }) => (
//                 <MonthView.DayScaleCell
//                   {...restProps}
//                   style={{
//                     textTransform: "uppercase",
//                     color: "#888",
//                     fontSize: "12px",
//                     paddingBottom: "10px",
//                     borderRight: "1px solid #e0e0e0",
//                     fontFamily: '"Cabin", sans-serif',
//                   }}
//                 >
//                   {children}
//                 </MonthView.DayScaleCell>
//               )}
//             />
//             <WeekView
//               startDayHour={0}
//               endDayHour={24}
//               cellDuration={60}
//               style={{ fontFamily: '"Cabin", sans-serif' }}
//             />
//             <DayView
//               startDayHour={0}
//               endDayHour={24}
//               cellDuration={60}
//               style={{ fontFamily: '"Cabin", sans-serif' }}
//             />

//             <Toolbar
//               style={{ fontFamily: '"Cabin", sans-serif' }}
//               rootComponent={({ children, ...restProps }) => (
//                 <Toolbar.Root
//                   {...restProps}
//                   style={{
//                     marginBottom: "20px",
//                     justifyContent: "space-between",
//                     alignItems: "center",
//                     fontFamily: '"Cabin", sans-serif',
//                   }}
//                 >
//                   {children}
//                 </Toolbar.Root>
//               )}
//             />
//             <DateNavigator
//               style={{ fontFamily: '"Cabin", sans-serif' }}
//               openButtonComponent={({ children, ...restProps }) => (
//                 <DateNavigator.OpenButton
//                   {...restProps}
//                   style={{
//                     fontSize: "24px",
//                     fontWeight: "bold",
//                     color: "#333",
//                     border: "none",
//                     background: "none",
//                     fontFamily: '"Cabin", sans-serif',
//                   }}
//                 >
//                   {children}
//                 </DateNavigator.OpenButton>
//               )}
//             />
//             <TodayButton
//               style={{ fontFamily: '"Cabin", sans-serif' }}
//               buttonComponent={({ children, ...restProps }) => (
//                 <TodayButton.Button
//                   {...restProps}
//                   style={{
//                     background: "#f0f0f0",
//                     color: "#333",
//                     border: "none",
//                     borderRadius: "20px",
//                     padding: "5px 15px",
//                     fontFamily: '"Cabin", sans-serif',
//                   }}
//                 >
//                   {children}
//                 </TodayButton.Button>
//               )}
//             />
//             <ViewSwitcher
//               style={{ fontFamily: '"Cabin", sans-serif' }}
//               switcherComponent={({ children, ...restProps }) => (
//                 <ViewSwitcher.Switcher
//                   {...restProps}
//                   style={{
//                     background: "#f0f0f0",
//                     borderRadius: "20px",
//                     overflow: "hidden",
//                     fontFamily: '"Cabin", sans-serif',
//                   }}
//                 >
//                   {children}
//                 </ViewSwitcher.Switcher>
//               )}
//             />

//             <Appointments
//               style={{ fontFamily: '"Cabin", sans-serif' }}
//               appointmentComponent={({ children, style, ...restProps }) => (
//                 <Appointments.Appointment
//                   {...restProps}
//                   style={{
//                     ...style,
//                     backgroundColor: "#90CAF9",
//                     borderRadius: "10px",
//                     fontFamily: '"Cabin", sans-serif',
//                   }}
//                 >
//                   {children}
//                 </Appointments.Appointment>
//               )}
//             />
//             <AppointmentTooltip
//               showCloseButton
//               showOpenButton
//               showDeleteButton
//               contentComponent={({ children, ...restProps }) => (
//                 <AppointmentTooltip.Content
//                   {...restProps}
//                   style={{
//                     padding: "10px",
//                     fontFamily: '"Cabin", sans-serif',
//                   }}
//                 >
//                   {children}
//                 </AppointmentTooltip.Content>
//               )}
//             />
//             <AppointmentForm
//               basicLayoutComponent={CustomAppointmentForm}
//               textEditorComponent={({ ...restProps }) => (
//                 <AppointmentForm.TextEditor
//                   {...restProps}
//                   style={{ fontFamily: '"Cabin", sans-serif' }}
//                 />
//               )}
//             />
//             <ConfirmationDialog
//               style={{ fontFamily: '"Cabin", sans-serif' }}
//               overlayComponent={({ children, ...restProps }) => (
//                 <ConfirmationDialog.Overlay
//                   {...restProps}
//                   style={{
//                     backgroundColor: "rgba(0, 0, 0, 0.5)",
//                     fontFamily: '"Cabin", sans-serif',
//                   }}
//                 >
//                   {children}
//                 </ConfirmationDialog.Overlay>
//               )}
//             />
//           </Scheduler>
//         </Paper>
//       </div>
//       <div className="float-left order-1 laptop:w-[calc(35%_-_30px)] w-full mt-[20px]">
//         <MeetingSideBar />
//       </div>
//     </>
//   );
// };

// export default Meeting;
// import React, { useState, useEffect } from "react";
// import { GoogleLogin, GoogleLogout } from "react-google-login";
// import { useCalendar } from "../../../Providers/Admin/CalendarContext";
// import { useAuth } from "../../../Providers/Admin/AuthContext";

// // Add this style object
// const styles = {
//   container: {
//     fontFamily: '"Cabin", sans-serif',
//   },
//   button: {
//     fontFamily: '"Cabin", sans-serif',
//     fontSize: "14px",
//     padding: "10px 20px",
//     cursor: "pointer",
//     borderRadius: "4px",
//     border: "none",
//     backgroundColor: "#30325E",
//     color: "white",
//     transition: "background-color 0.3s",
//     margin: "10px",
//   },
// };

// function CalendarDashboard() {
//   const { isAuthenticated, login, logout } = useAuth();
//   const { fetchEvents } = useCalendar();

//   useEffect(() => {
//     console.log("isAuthenticated:", isAuthenticated);
//     if (isAuthenticated) {
//       fetchEvents();
//     }
//   }, [isAuthenticated]);

//   const onLoginSuccess = (response) => {
//     console.log("LOGIN SUCCESS", response);
//     login(response.code);
//   };

//   const onLoginFailure = (response) => {
//     console.log("LOGIN FAILED", response);
//   };

//   const onLogoutSuccess = () => {
//     console.log("LOGOUT SUCCESS");
//     logout();
//   };

//   return (
//     <div style={styles.container}>
//       {!isAuthenticated ? (
//         <GoogleLogin
//           clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
//           buttonText="Sign In & Authorize Calendar"
//           onSuccess={onLoginSuccess}
//           onFailure={onLoginFailure}
//           cookiePolicy="single_host_origin"
//           responseType="code"
//           accessType="offline"
//           scope="openid email profile https://www.googleapis.com/auth/calendar"
//           render={(renderProps) => (
//             <button
//               onClick={renderProps.onClick}
//               disabled={renderProps.disabled}
//               style={styles.button}
//             >
//               Sign In & Authorize Calendar
//             </button>
//           )}
//         />
//       ) : (
//         <GoogleLogout
//           clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
//           buttonText="Sign In & Authorize Calendar with Other Account"
//           onLogoutSuccess={onLogoutSuccess}
//           render={(renderProps) => (
//             <button
//               onClick={renderProps.onClick}
//               disabled={renderProps.disabled}
//               style={styles.button}
//             >
//               Sign In & Authorize Calendar with Other Account
//             </button>
//           )}
//         />
//       )}
//     </div>
//   );
// }

// export default CalendarDashboard;
// import React, { useState } from "react";
// import { format } from "date-fns";
// import { RxCross2 } from "react-icons/rx";

// const styles = {
//   container: {
//     fontFamily: '"Cabin", sans-serif',
//     backgroundColor: "white",
//     borderRadius: "20px",
//     padding: "30px",
//     boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
//     width: "100%",
//     zIndex: 100,
//   },
//   header: {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     marginBottom: "20px",
//   },
//   title: {
//     fontSize: "18px",
//     fontWeight: "600",
//   },
//   closeIcon: {
//     cursor: "pointer",
//     color: "#9CA3AF",
//   },
//   inputGroup: {
//     marginBottom: "18px",
//   },
//   label: {
//     display: "block",
//     marginBottom: "8px",
//     fontSize: "14px",
//   },
//   input: {
//     width: "100%",
//     padding: "10px",
//     fontSize: "14px",
//     border: "1px solid #e0e0e0",
//     borderRadius: "4px",
//     backgroundColor: "#F4F7FF",
//   },
//   dateTimeGroup: {
//     display: "flex",
//     gap: "5%",
//   },
//   dateInput: {
//     width: "60%",
//   },
//   timeInput: {
//     width: "35%",
//   },
//   textarea: {
//     width: "100%",
//     padding: "10px",
//     fontSize: "14px",
//     border: "1px solid #e0e0e0",
//     borderRadius: "4px",
//     backgroundColor: "#F4F7FF",
//     resize: "vertical",
//     minHeight: "100px",
//   },
//   button: {
//     width: "100%",
//     padding: "10px",
//     backgroundColor: "#30325E",
//     color: "white",
//     border: "none",
//     borderRadius: "4px",
//     fontSize: "14px",
//     cursor: "pointer",
//   },
// };

// const CustomAppointmentForm = ({
//   onFieldChange,
//   appointmentData,
//   onHide,
//   ...restProps
// }) => {
//   const [title, setTitle] = useState(appointmentData.title || "");
//   const [startDate, setStartDate] = useState(
//     appointmentData.startDate || new Date()
//   );
//   const [startTime, setStartTime] = useState(
//     format(appointmentData.startDate || new Date(), "HH:mm")
//   );
//   const [endDate, setEndDate] = useState(
//     appointmentData.endDate || new Date(new Date().getTime() + 60 * 60 * 1000)
//   );
//   const [endTime, setEndTime] = useState(
//     format(
//       appointmentData.endDate ||
//         new Date(new Date().getTime() + 60 * 60 * 1000),
//       "HH:mm"
//     )
//   );
//   const [location, setLocation] = useState(appointmentData.location || "");
//   const [invite, setInvite] = useState(appointmentData.invite || "");
//   const [summary, setSummary] = useState(appointmentData.description || "");

//   const handleSave = () => {
//     const updatedData = {
//       title,
//       startDate: new Date(`${format(startDate, "yyyy-MM-dd")}T${startTime}`),
//       endDate: new Date(`${format(endDate, "yyyy-MM-dd")}T${endTime}`),
//       location,
//       invite,
//       description: summary,
//     };

//     // Log the updated data for debugging
//     console.log("Saving event:", updatedData);

//     onFieldChange(updatedData);
//     // onHide();
//   };

//   return (
//     <div style={styles.container}>
//       <div style={styles.header}>
//         <h2 style={styles.title}>Create new Meeting</h2>
//         <RxCross2 style={styles.closeIcon} onClick={onHide} />
//       </div>
//       <div style={styles.inputGroup}>
//         <label style={styles.label}>Title</label>
//         <input
//           style={styles.input}
//           type="text"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           placeholder="Enter your Title"
//         />
//       </div>
//       <div style={styles.inputGroup}>
//         <label style={styles.label}>Date and Timing</label>
//         <div style={styles.dateTimeGroup}>
//           <input
//             style={{ ...styles.input, ...styles.dateInput }}
//             type="date"
//             value={format(startDate, "yyyy-MM-dd")}
//             onChange={(e) => setStartDate(new Date(e.target.value))}
//           />
//           <input
//             style={{ ...styles.input, ...styles.timeInput }}
//             type="time"
//             value={startTime}
//             onChange={(e) => setStartTime(e.target.value)}
//           />
//         </div>
//       </div>
//       <div style={styles.inputGroup}>
//         <label style={styles.label}>End Date and Time</label>
//         <div style={styles.dateTimeGroup}>
//           <input
//             style={{ ...styles.input, ...styles.dateInput }}
//             type="date"
//             value={format(endDate, "yyyy-MM-dd")}
//             onChange={(e) => setEndDate(new Date(e.target.value))}
//           />
//           <input
//             style={{ ...styles.input, ...styles.timeInput }}
//             type="time"
//             value={endTime}
//             onChange={(e) => setEndTime(e.target.value)}
//           />
//         </div>
//       </div>
//       <div style={styles.inputGroup}>
//         <label style={styles.label}>Location</label>
//         <input
//           style={styles.input}
//           type="text"
//           value={location}
//           onChange={(e) => setLocation(e.target.value)}
//           placeholder="Enter your Location"
//         />
//       </div>
//       <div style={styles.inputGroup}>
//         <label style={styles.label}>Scheduled with</label>
//         <input
//           style={styles.input}
//           type="text"
//           value={invite}
//           onChange={(e) => setInvite(e.target.value)}
//           placeholder="Email Here (Optional)"
//         />
//       </div>
//       <div style={styles.inputGroup}>
//         <label style={styles.label}>Notes</label>
//         <textarea
//           style={styles.textarea}
//           value={summary}
//           onChange={(e) => setSummary(e.target.value)}
//           placeholder="Write your notes here..."
//         />
//       </div>
//       <button style={styles.button} onClick={handleSave}>
//         Create Meeting
//       </button>
//     </div>
//   );
// };

// export default CustomAppointmentForm;
