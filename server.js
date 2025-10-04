const express = require("express");
const colors = require("colors");
const moragan = require("morgan");
const dotenv = require("dotenv");
const connectDB = require("./src/db");
const path = require("path");
//dotenv config
dotenv.config();

// mongodb connection
connectDB();

const app = express();

// middleware
app.use(express.json()); // to avoid error in parsing
app.use(moragan("dev"));

// routes
app.use("/api/v1/user", require("./routes/userRoutes"));
app.use("/api/v1/admin", require("./routes/adminRoutes"));
app.use("/api/v1/doctor", require("./routes/doctorRoutes"));

// API root endpoint
app.get("/", (req, res) => {
  res.json({
    message: "Arogya Care API Server",
    status: "Running",
    version: "1.0.0"
  });
});

// port

const port = process.env.PORT || 8080;
//listen port
app.listen(port, () => {
  console.log(
    `Server Running in ${process.env.NODE_ENV} Mode on port ${process.env.PORT}`
      .bgCyan.white
  );
});
