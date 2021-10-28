const express = require("express");
const {
  eventCreate,
  eventListFetch,
  eventUpdate,
  eventDelete,
  eventDetail,
} = require("./controllers");

const router = express.Router();

router.post("/", eventCreate);

router.get("/", eventListFetch);

router.put("/:eventId", eventUpdate);

router.delete("/:eventId", eventDelete);

router.get("/:eventId", eventDetail);

module.exports = router;
