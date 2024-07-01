// import React, { useState } from "react";
// import { useCalendar } from "../../../Providers/Admin/CalendarProvider";

// const EventForm = () => {
//   const [eventData, setEventData] = useState({
//     summary: "",
//     description: "",
//     start: "",
//     end: "",
//     attendees: "",
//   });
//   const { createEvent } = useCalendar();

//   const handleChange = (e) => {
//     setEventData({ ...eventData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     createEvent({
//       ...eventData,
//       attendees: eventData.attendees.split(",").map((email) => email.trim()),
//     });
//     setEventData({
//       summary: "",
//       description: "",
//       start: "",
//       end: "",
//       attendees: "",
//     });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         name="summary"
//         value={eventData.summary}
//         onChange={handleChange}
//         placeholder="Event Title"
//         required
//       />
//       <input
//         name="description"
//         value={eventData.description}
//         onChange={handleChange}
//         placeholder="Description"
//       />
//       <input
//         name="start"
//         type="datetime-local"
//         value={eventData.start}
//         onChange={handleChange}
//         required
//       />
//       <input
//         name="end"
//         type="datetime-local"
//         value={eventData.end}
//         onChange={handleChange}
//         required
//       />
//       <input
//         name="attendees"
//         value={eventData.attendees}
//         onChange={handleChange}
//         placeholder="Attendees (comma-separated emails)"
//       />
//       <button type="submit">Create Event</button>
//     </form>
//   );
// };

// export default EventForm;
