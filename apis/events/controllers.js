const Event = require("../../db/models/Event");

exports.eventListFetch = async (req, res, next) => {
  try {
    const events = await Event.find();
    return res.json(events);
  } catch (error) {
    next(error);
  }
};

exports.eventCreate = async (req, res, next) => {
  try {
    const newEvent = await Event.create(req.body);
    return res.status(201).json(newEvent);
  } catch (error) {
    next(error);
  }
};

exports.eventUpdate = async (req, res, next) => {
  const { eventId } = req.params;
  try {
    const event = await Event.findByIdAndUpdate(
      { _id: eventId },
      req.body,
      { new: true, runValidators: true } // returns the updated event
    );
    if (event) {
      return res.status(200).json(event);
    } else {
      return res.status(404).json({ message: "Event Not Found" });
    }
  } catch (error) {
    next(error);
  }
};

exports.eventDelete = async (req, res, next) => {
  const { eventId } = req.params;
  try {
    const events = await Event.findByIdAndDelete({ _id: eventId });
    if (events) {
      return res.status(204).end();
    } else {
      return res.status(404).json({ message: "Event not found!" });
    }
  } catch (error) {
    next(error);
  }
};
