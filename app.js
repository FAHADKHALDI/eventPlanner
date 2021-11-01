const express = require("express");
const eventRoutes = require("./apis/events/routes");
const connectDb = require("./db/database");
const morgan = require("morgan");

const app = express();

app.use(express.json());
app.use("/api/events", eventRoutes);

app.use((req, res, next) => {
  const err = new Error("not found");
  res.status(404).json({ message: err.message });
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({ message: err.message });
});

app.use(morgan("dev"));

PORT = 8000;
app.listen(PORT, () => {
  console.log("The application is running on localhost:8000");
});

connectDb();
