// import React from "react";
// import { useCalendar } from "../../../Providers/Admin/CalendarProvider";

// const EventList = ({ events }) => {
//   const { deleteEvent, updateEvent } = useCalendar();

//   const handleDelete = (eventId) => {
//     if (window.confirm("Are you sure you want to delete this event?")) {
//       deleteEvent(eventId);
//     }
//   };

//   const handleUpdate = (event) => {
//     const updatedSummary = prompt("Enter new event title:", event.summary);
//     if (updatedSummary) {
//       updateEvent(event.id, { ...event, summary: updatedSummary });
//     }
//   };

//   return (
//     <ul>
//       {events.map((event) => (
//         <li key={event.id}>
//           {event.summary} - {new Date(event.start.dateTime).toLocaleString()}
//           <button onClick={() => handleUpdate(event)}>Edit</button>
//           <button onClick={() => handleDelete(event.id)}>Delete</button>
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default EventList;
