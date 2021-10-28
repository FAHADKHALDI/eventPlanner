const mongoose = require("mongoose");
const mongooseSlugPlugin = require("mongoose-slug-plugin");

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

EventSchema.plugin(mongooseSlugPlugin, { tmpl: "<%=name%>" });
