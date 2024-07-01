import React, { useEffect, useState } from "react";
import Paper from "@material-ui/core/Paper";
import {
  ViewState,
  EditingState,
  IntegratedEditing,
} from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  MonthView,
  WeekView,
  DayView,
  Toolbar,
  ViewSwitcher,
  Appointments,
  AppointmentTooltip,
  AppointmentForm,
  DateNavigator,
  TodayButton,
  ConfirmationDialog,
} from "@devexpress/dx-react-scheduler-material-ui";
import { useCalendar } from "../../../Providers/Admin/CalendarContext";
import CalendarDashboard from "./CalendarDashboard";
import CustomAppointmentForm from "./CustomAppointmentForm";
import MeetingSideBar from "./MeetingSideBar";

const Meeting = () => {
  const { events, fetchEvents, createEvent, updateEvent, deleteEvent } =
    useCalendar();
  const [currentDate, setCurrentDate] = useState(new Date());
  const [editingFormVisible, setEditingFormVisible] = useState(false);
  const [editingEvent, setEditingEvent] = useState(null);

  useEffect(() => {
    fetchEvents();
  }, []);

  const formatEvents = (events) => {
    return events.map((event) => ({
      ...event,
      startDate: new Date(event.startDate),
      endDate: new Date(
        Math.max(
          new Date(event.endDate),
          new Date(new Date(event.startDate).getTime() + 30 * 60000)
        )
      ),
    }));
  };

  const commitChanges = async ({ added, changed, deleted }) => {
    try {
      if (added) {
        console.log("Adding event:", added);
        validateDateTime(added);
        await createEvent(added);
      }
      if (changed) {
        const eventId = Object.keys(changed)[0];
        const updatedEvent = changed[eventId];

        const existingEvent = events.find((event) => event._id === eventId);
        const mergedEvent = { ...existingEvent, ...updatedEvent };

        console.log("Updating event:", mergedEvent);
        validateDateTime(mergedEvent);
        await updateEvent(eventId, mergedEvent);
      }
      if (deleted) {
        console.log("Deleting event ID:", deleted);
        await deleteEvent(deleted);
      }
    } catch (error) {
      console.error("Error committing changes:", error);
    }
  };

  const validateDateTime = (event) => {
    if (event.endDate <= event.startDate) {
      throw new Error("End time must be after start time");
    }
  };

  const onEditingAppointmentChange = (event) => {
    setEditingEvent(event);
    setEditingFormVisible(true);
  };

  const onEditingAppointmentCancel = () => {
    setEditingFormVisible(false);
    setEditingEvent(null);
  };

  const handleSaveAppointment = (eventData) => {
    const changes = { [editingEvent.id]: eventData };
    commitChanges({ changed: changes });
    setEditingFormVisible(false);
  };

  return (
    <>
      <div className="container order-2 ">
        <CalendarDashboard />
        <Paper>
          <Scheduler data={formatEvents(events)} height={900}>
            <ViewState
              currentDate={currentDate}
              onCurrentDateChange={setCurrentDate}
            />
            <EditingState
              onCommitChanges={commitChanges}
              onEditingAppointmentChange={onEditingAppointmentChange}
            />
            <ViewState
              currentDate={currentDate}
              onCurrentDateChange={setCurrentDate}
              style={{ fontFamily: '"Cabin", sans-serif' }}
            />
            <EditingState
              onCommitChanges={commitChanges}
              style={{ fontFamily: '"Cabin", sans-serif' }}
            />
            <IntegratedEditing style={{ fontFamily: '"Cabin", sans-serif' }} />

            <MonthView
              style={{ fontFamily: '"Cabin", sans-serif' }}
              timeTableCellComponent={({ children, ...restProps }) => (
                <MonthView.TimeTableCell
                  {...restProps}
                  style={{
                    borderRight: "1px solid #e0e0e0",
                    borderBottom: "1px solid #e0e0e0",
                    height: "120px",
                    fontFamily: '"Cabin", sans-serif',
                  }}
                >
                  {children}
                </MonthView.TimeTableCell>
              )}
              dayScaleCellComponent={({ children, ...restProps }) => (
                <MonthView.DayScaleCell
                  {...restProps}
                  style={{
                    textTransform: "uppercase",
                    color: "#888",
                    fontSize: "12px",
                    paddingBottom: "10px",
                    borderRight: "1px solid #e0e0e0",
                    fontFamily: '"Cabin", sans-serif',
                  }}
                >
                  {children}
                </MonthView.DayScaleCell>
              )}
            />
            <WeekView
              startDayHour={0}
              endDayHour={24}
              cellDuration={60}
              style={{ fontFamily: '"Cabin", sans-serif' }}
            />
            <DayView
              startDayHour={0}
              endDayHour={24}
              cellDuration={60}
              style={{ fontFamily: '"Cabin", sans-serif' }}
            />

            <Toolbar
              style={{ fontFamily: '"Cabin", sans-serif' }}
              rootComponent={({ children, ...restProps }) => (
                <Toolbar.Root
                  {...restProps}
                  style={{
                    marginBottom: "20px",
                    justifyContent: "space-between",
                    alignItems: "center",
                    fontFamily: '"Cabin", sans-serif',
                  }}
                >
                  {children}
                </Toolbar.Root>
              )}
            />
            <DateNavigator
              style={{ fontFamily: '"Cabin", sans-serif' }}
              openButtonComponent={({ children, ...restProps }) => (
                <DateNavigator.OpenButton
                  {...restProps}
                  style={{
                    fontSize: "24px",
                    fontWeight: "bold",
                    color: "#333",
                    border: "none",
                    background: "none",
                    fontFamily: '"Cabin", sans-serif',
                  }}
                >
                  {children}
                </DateNavigator.OpenButton>
              )}
            />
            <TodayButton
              style={{ fontFamily: '"Cabin", sans-serif' }}
              buttonComponent={({ children, ...restProps }) => (
                <TodayButton.Button
                  {...restProps}
                  style={{
                    background: "#f0f0f0",
                    color: "#333",
                    border: "none",
                    borderRadius: "20px",
                    padding: "5px 15px",
                    fontFamily: '"Cabin", sans-serif',
                  }}
                >
                  {children}
                </TodayButton.Button>
              )}
            />
            <ViewSwitcher
              style={{ fontFamily: '"Cabin", sans-serif' }}
              switcherComponent={({ children, ...restProps }) => (
                <ViewSwitcher.Switcher
                  {...restProps}
                  style={{
                    background: "#f0f0f0",
                    borderRadius: "20px",
                    overflow: "hidden",
                    fontFamily: '"Cabin", sans-serif',
                  }}
                >
                  {children}
                </ViewSwitcher.Switcher>
              )}
            />

            <Appointments
              style={{ fontFamily: '"Cabin", sans-serif' }}
              appointmentComponent={({ children, style, ...restProps }) => (
                <Appointments.Appointment
                  {...restProps}
                  style={{
                    ...style,
                    backgroundColor: "#30325E",
                    borderRadius: "10px",
                    fontFamily: '"Cabin", sans-serif',
                  }}
                >
                  {children}
                </Appointments.Appointment>
              )}
            />
            <AppointmentTooltip
              showCloseButton
              showOpenButton
              showDeleteButton
            />
            <AppointmentForm
              overlayComponent={(props) => (
                <CustomAppointmentForm
                  {...props}
                  appointmentData={editingEvent}
                  onFieldChange={handleSaveAppointment}
                  onHide={onEditingAppointmentCancel}
                />
              )}
            />
            <ConfirmationDialog />
          </Scheduler>
        </Paper>
      </div>
      <MeetingSideBar />
    </>
  );
};

export default Meeting;
