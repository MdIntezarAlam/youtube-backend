const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./path/to/your/userRoutes");

// Initialize Express
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Use the routes
app.use("/api", userRoutes);

// Export the handler
module.exports.handler = require("serverless-http")(app);
