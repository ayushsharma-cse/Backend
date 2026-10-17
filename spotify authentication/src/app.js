const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/auth.routes");
const musicRoutes = require("./routes/music.Routes");

const app = express();

// Middlewares

app.use(express.json());
app.use(cookieParser());

// Auth Routes
app.use("/api/auth", authRoutes);
app.use("/api/music", musicRoutes);

module.exports = app;
