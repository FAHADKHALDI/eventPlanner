const express = require("express");
const eventRoutes = require("./apis/events/routes");
const connectDb = require("./db/database");

const app = express();

app.use(express.json());
app.use("api/events", eventRoutes);

PORT = 8000;
app.listen(PORT, () => {
  console.log("The application is running on localhost:8000");
});

connectDb();
