const express = require("express");

const {} = require("./controllers");
const router = express.Router();

router.post("/", eventCreate);

router.get("/");

module.exports = router;
