const mongoose = require("mongoose");

async function connectdb() {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("database connected");
}

module.exports = connectdb;
