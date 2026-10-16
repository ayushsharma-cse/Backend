const mongoose = require("mongoose");

async function connectDb() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to Spotify Database successfully 🎵");
  } catch (err) {
    console.error("Database connection error:", err.message);
    process.exit(1);
  }
}

module.exports = connectDb;
