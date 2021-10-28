const mongoose = require("mongoose");

const EventSchema = mongoose.Schema({
  organizer: String,
  name: {
    type: String,
    required: true,
  },
  email: String,
  image: { type: String },
  numOfSeats: {
    type: Number,
    min: 0,
  },
  numOfSeats: {
    type: Number,
  },
  startDate: Date,
  endDate: Date,
});

module.exports = mongoose.model("Event", EventSchema);
