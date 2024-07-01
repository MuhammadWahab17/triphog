import React, { createContext, useState, useContext } from "react";
import axios from "axios";
import { format } from "date-fns";

const CalendarContext = createContext();

export const useCalendar = () => useContext(CalendarContext);

export const CalendarProvider = ({ children }) => {
  const [events, setEvents] = useState([]);

  const fetchEvents = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND}/api/v1/calendar/events`,
        { withCredentials: true }
      );

      const transformedEvents = response.data.map((event) => ({
        id: event.id,
        title: event.summary || event.title,
        startDate: new Date(event.start.dateTime || event.start.date),
        endDate: new Date(event.end.dateTime || event.end.date),
        location: event.location || "",
        description: event.description || "",
        invite: event.attendees
          ? event.attendees.map((a) => a.email).join(", ")
          : "",
      }));

      setEvents(transformedEvents);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  const createEvent = async (newEvent) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND}/api/v1/calendar/events`,
        {
          title: newEvent.title,
          startDateTime: newEvent.startDate.toISOString(), // Ensure startDateTime is in ISO string format
          location: newEvent.location,
          invite: newEvent.invite,
          summary: newEvent.description, // Use 'description' field for summary
        },
        { withCredentials: true }
      );
      fetchEvents(); // Refresh events after creating
    } catch (error) {
      console.error("Error creating event:", error);
    }
  };

  const updateEvent = async (eventId, updatedEvent) => {
    try {
      const requestData = {
        title: updatedEvent.title,
        location: updatedEvent.location,
        invite: updatedEvent.invite,
        summary: updatedEvent.description,
        startDate: format(updatedEvent.startDate, "yyyy-MM-dd"),
        startTime: format(updatedEvent.startDate, "HH:mm"),
      };

      const response = await axios.put(
        `${process.env.REACT_APP_BACKEND}/api/v1/calendar/events/${eventId}`,
        requestData,
        { withCredentials: true }
      );
      fetchEvents(); // Refresh events after updating
    } catch (error) {
      console.error("Error updating event:", error);
    }
  };

  const deleteEvent = async (eventId) => {
    try {
      const response = await axios.delete(
        `${process.env.REACT_APP_BACKEND}/api/v1/calendar/events/${eventId}`,
        { withCredentials: true }
      );
      fetchEvents(); // Refresh events after deleting
    } catch (error) {
      console.error("Error deleting event:", error);
    }
  };

  return (
    <CalendarContext.Provider
      value={{ events, fetchEvents, createEvent, updateEvent, deleteEvent }}
    >
      {children}
    </CalendarContext.Provider>
  );
};
