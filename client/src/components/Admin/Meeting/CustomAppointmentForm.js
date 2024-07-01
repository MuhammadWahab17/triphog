import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import { RxCross2 } from "react-icons/rx";
import { ImCross } from "react-icons/im";

const CustomAppointmentForm = ({
  appointmentData,
  onFieldChange,
  onHide,
  ...restProps
}) => {
  const [title, setTitle] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [startTime, setStartTime] = useState(format(new Date(), "HH:mm"));
  const [endDate, setEndDate] = useState(
    new Date(new Date().getTime() + 60 * 60 * 1000)
  );
  const [endTime, setEndTime] = useState(format(new Date(), "HH:mm"));
  const [location, setLocation] = useState("");
  const [invite, setInvite] = useState("");
  const [summary, setSummary] = useState("");

  useEffect(() => {
    if (appointmentData) {
      setTitle(appointmentData.title || "");
      setStartDate(new Date(appointmentData.startDate));
      setStartTime(format(new Date(appointmentData.startDate), "HH:mm"));
      setEndDate(new Date(appointmentData.endDate));
      setEndTime(format(new Date(appointmentData.endDate), "HH:mm"));
      setLocation(appointmentData.location || "");
      setInvite(appointmentData.invite || "");
      setSummary(appointmentData.description || "");
    }
  }, [appointmentData]);

  const handleSave = () => {
    const updatedData = {
      title,
      startDate: new Date(`${format(startDate, "yyyy-MM-dd")}T${startTime}`),
      endDate: new Date(`${format(endDate, "yyyy-MM-dd")}T${endTime}`),
      location,
      invite,
      description: summary,
    };

    console.log("Saving event:", updatedData);
    onFieldChange(updatedData);
    onHide();
  };

  if (!appointmentData) {
    return null; // Render nothing if appointmentData is null or undefined
  }

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div className="flex items-center justify-between w-[100%]">
          <h2 style={styles.title}>Edit Meeting</h2>
          <ImCross
            className="cursor-pointer"
            onClick={() => {
              onHide();
            }}
          />
        </div>
      </div>
      <div style={styles.inputGroup}>
        <label style={styles.label}>Title</label>
        <input
          style={styles.input}
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter your Title"
        />
      </div>
      <div style={styles.inputGroup}>
        <label style={styles.label}>Date and Timing</label>
        <div style={styles.dateTimeGroup}>
          <input
            style={{ ...styles.input, ...styles.dateInput }}
            type="date"
            value={format(startDate, "yyyy-MM-dd")}
            onChange={(e) => setStartDate(new Date(e.target.value))}
          />
          <input
            style={{ ...styles.input, ...styles.timeInput }}
            type="time"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
          />
        </div>
      </div>
      <div style={styles.inputGroup}>
        <label style={styles.label}>Location</label>
        <input
          style={styles.input}
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter your Location"
        />
      </div>
      <div style={styles.inputGroup}>
        <label style={styles.label}>Scheduled with</label>
        <input
          style={styles.input}
          type="text"
          value={invite}
          onChange={(e) => setInvite(e.target.value)}
          placeholder="Email Here (Optional)"
        />
      </div>
      <div style={styles.inputGroup}>
        <label style={styles.label}>Notes</label>
        <textarea
          style={styles.textarea}
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          placeholder="Write your notes here..."
        />
      </div>
      <button style={styles.button} onClick={handleSave}>
        Save
      </button>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: '"Cabin", sans-serif',
    backgroundColor: "white",
    borderRadius: "20px",
    padding: "30px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    width: "50%",
    zIndex: 100,
    position: "absolute",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
  },
  title: {
    fontSize: "18px",
    fontWeight: "600",
  },
  inputGroup: {
    marginBottom: "18px",
  },
  label: {
    display: "block",
    marginBottom: "8px",
    fontSize: "14px",
  },
  input: {
    width: "100%",
    padding: "10px",
    fontSize: "14px",
    border: "1px solid #e0e0e0",
    borderRadius: "4px",
    backgroundColor: "#F4F7FF",
  },
  dateTimeGroup: {
    display: "flex",
    gap: "5%",
  },
  dateInput: {
    width: "60%",
  },
  timeInput: {
    width: "35%",
  },
  textarea: {
    width: "100%",
    padding: "10px",
    fontSize: "14px",
    border: "1px solid #e0e0e0",
    borderRadius: "4px",
    backgroundColor: "#F4F7FF",
    resize: "vertical",
    minHeight: "100px",
  },
  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#30325E",
    color: "white",
    border: "none",
    borderRadius: "4px",
    fontSize: "14px",
    cursor: "pointer",
  },
};

export default CustomAppointmentForm;
