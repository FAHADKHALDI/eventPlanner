const express = require("express");

const { eventCreate, eventListFetch, eventUpdate } = require("./controllers");
const router = express.Router();

router.post("/", eventCreate);

router.get("/", eventListFetch);

router.put("/:eventId", eventUpdate);

module.exports = router;
