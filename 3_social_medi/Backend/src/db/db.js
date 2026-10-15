const mongoose = require("mongoose");

async function connectDb() {
  await mongoose.connect(process.env.MONGODB_URL);
}

module.exports = connectDb;
