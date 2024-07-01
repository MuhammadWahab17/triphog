import React, { useState, useEffect } from "react";
import { HiDotsVertical } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import { useCalendar } from "../../../Providers/Admin/CalendarContext";

const MeetingSideBar = () => {
  const [meetingCreate, setMeetingCreate] = useState(false);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  const [scheduledWith, setScheduledWith] = useState("");
  const [notes, setNotes] = useState("");

  const { fetchEvents, createEvent, events } = useCalendar();

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleSubmit = () => {
    if (!date || !time) {
      console.error("Date or time is missing.");
      return;
    }

    const combinedDateTime = new Date(`${date}T${time}:00`).toISOString();

    const newEvent = {
      title,
      startDateTime: combinedDateTime,
      location,
      invite: scheduledWith,
      description: notes,
    };

    createEvent(newEvent);
    // Optionally close the form after submission
    setMeetingCreate(false);
  };

  return (
    <div className="bg-white rounded-[20px] p-[30px] mt-[20px] laptop:mr-[30px] float-right order-1">
      <div className="w-[100%]">
        <button
          className="bg-deepBlue text-white flex w-[100%] mx-auto text-center justify-center py-[8px] rounded-lg text-lap_b"
          onClick={() => setMeetingCreate(true)}
        >
          + Create New Meeting
        </button>
        {meetingCreate && (
          <div className="shadow-md rounded-lg bg-white p-[20px] border-[2px] absolute left-[580px] top-[100px] w-[400px] z-10">
            <div className="flex items-center justify-between font-[600]">
              <h2>Create new Meeting</h2>
              <RxCross2
                className="float-right text-[#9CA3AF] cursor-pointer"
                onClick={() => setMeetingCreate(false)}
              />
            </div>
            <hr className="my-[20px] mx-[-20px]"></hr>
            <div className="py-[18px] laptop:py-[5px] laptop:text-lap_b text-[30px] w-[100%] ">
              <label>Title</label>
              <br />
              <input
                type="text"
                placeholder="Enter your Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="mt-[8px] border-[0.6px] rounded-md laptop:text-lap_b text-[30px] py-[10px] w-full px-[20px] bg-[#F4F7FF] focus:outline-none focus:border-gray-400 focus:bg-white"
              />
            </div>
            <div className="py-[18px] laptop:py-[5px] laptop:text-lap_b text-[30px] w-[100%] ">
              <label>Date and Time</label>
              <br />
              <div className="flex gap-[5%]">
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="mt-[8px]  border-[0.6px] rounded-md laptop:text-lap_b text-[30px] py-[10px] w-full px-[20px] bg-[#F4F7FF] focus:outline-none focus:border-gray-400 focus:bg-white"
                />
                <input
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="mt-[8px]  border-[0.6px] rounded-md laptop:text-lap_b text-[30px] py-[10px] w-full px-[20px] bg-[#F4F7FF] focus:outline-none focus:border-gray-400 focus:bg-white"
                />
              </div>
            </div>
            <div className="py-[18px] laptop:py-[5px] laptop:text-lap_b text-[30px] w-[100%] ">
              <label>Location</label>
              <br />
              <input
                type="text"
                placeholder="Enter your Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="mt-[8px] border-[0.6px] rounded-md laptop:text-lap_b text-[30px] py-[10px] w-full px-[20px] bg-[#F4F7FF] focus:outline-none focus:border-gray-400 focus:bg-white"
              />
            </div>
            <div className="py-[18px] laptop:py-[5px] laptop:text-lap_b text-[30px] w-[100%] ">
              <label>Scheduled with</label>
              <br />
              <input
                type="text"
                placeholder="Email Here (Optional)"
                value={scheduledWith}
                onChange={(e) => setScheduledWith(e.target.value)}
                className="mt-[8px] border-[0.6px] rounded-md laptop:text-lap_b text-[30px] py-[10px] w-full px-[20px] bg-[#F4F7FF] focus:outline-none focus:border-gray-400 focus:bg-white"
              />
            </div>
            <div className="py-[18px] laptop:py-[5px] laptop:text-lap_b text-[30px] w-[100%] ">
              <label>Notes</label>
              <br />
              <textarea
                placeholder="Write your notes here..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="mt-[8px] border-[0.6px] rounded-md laptop:text-lap_b text-[30px] py-[10px] w-full px-[20px] bg-[#F4F7FF] focus:outline-none focus:border-gray-400 focus:bg-white"
              ></textarea>
            </div>
            <button
              className="flex my-[8px] bg-deepBlue w-[100%] justify-center text-white py-[7px] rounded-lg"
              onClick={handleSubmit}
            >
              Create Meeting
            </button>
          </div>
        )}

        <div className="flex items-center justify-between my-[20px] text-lap_c font-[600]">
          <h2>Meetings</h2>
          <div className="border rounded-lg py-[8px] px-[8px]">
            <HiDotsVertical className="float-right" />
          </div>
        </div>

        <div className="my-[5px]">
          {events.map((event) => (
            <div
              key={event.id}
              className="grid grid-cols-[25%_auto] gap-[5%] border-[2px] rounded-lg p-[10px] my-[5px]"
            >
              <div>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLbnlySWjQ2vihkJYcZUzYt3_vUrmARoE6yA&s"
                  alt="user"
                  className="h-[60px] w-[60px] object-cover rounded-full"
                />
              </div>
              <div>
                <h3 className="font-[600] text-lap_c">{event.title}</h3>
                <h4 className="text-lap_b my-3 text-[#606060]">
                  {event.startDate.toLocaleString()} <br />
                  {event.location && `${event.location}`} <br />
                  {event.invite && `Scheduled with: ${event.invite}`} <br />
                  {event.description && `Notes: ${event.description}`}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MeetingSideBar;
