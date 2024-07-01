const express = require("express");
const { google } = require("googleapis");
const {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent,
} = require("../controllers/meetingController");
const { protect } = require("../controllers/adminController");

const router = express.Router();

router.get("/events", protect, getEvents);
router.post("/events", protect, createEvent);
router.put("/events/:eventId", protect, updateEvent);
router.delete("/events/:eventId", protect, deleteEvent);

module.exports = router;
