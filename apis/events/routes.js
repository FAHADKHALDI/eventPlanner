const express = require("express");
const {
  eventCreate,
  eventListFetch,
  eventUpdate,
  eventDelete,
} = require("./controllers");

const router = express.Router();

router.post("/", eventCreate);

router.get("/", eventListFetch);

router.put("/:eventId", eventUpdate);

router.delete("/:eventId", eventDelete);

module.exports = router;
