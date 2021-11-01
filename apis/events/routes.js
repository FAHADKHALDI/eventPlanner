const express = require("express");
const {
  createEvent,
  eventListFetch,
  updateEvent,
  deleteEvent,
  eventDetail,
  fullBookedEvent,
} = require("./controllers");

const router = express.Router();

router.post("/", createEvent);

router.get("/", eventListFetch);

router.put("/:eventId", updateEvent);

router.delete("/:eventId", deleteEvent);

router.get("/full", fullBookedEvent);

router.get("/:eventId", eventDetail);

module.exports = router;
