require("dotenv").config();
const app = require("./src/app");
const connectDb = require("./src/db/db");

// Connect to MongoDB
connectDb();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Spotify server is running on http://localhost:${PORT} 🚀`);
});
