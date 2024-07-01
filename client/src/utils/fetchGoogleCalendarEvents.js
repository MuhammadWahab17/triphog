// utils/googleCalendar.js
export const fetchGoogleCalendarEvents = async (calendarId, apiKey) => {
  const url = `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?key=${apiKey}`;
  const response = await fetch(url);
  const data = await response.json();

  if (!data.items || !Array.isArray(data.items)) {
    return [];
  }

  return data.items.map((event) => {
    const isAllDay = !event.start.dateTime;
    const start = isAllDay ? event.start.date : event.start.dateTime;
    const end = isAllDay ? event.end.date : event.end.dateTime;

    return {
      id: event.id,
      title: event.summary,
      start: new Date(start),
      end: new Date(end),
      allDay: isAllDay,
    };
  });
};
