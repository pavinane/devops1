const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const todoRoutes = require("./routes/todoRoutes");
const cors = require("cors");

const app = express();
dotenv.config()

connectDB();

app.use(cors({
  origin: "http://localhost:5173"
}));
app.use(express.json());

app.use("/api/todos",todoRoutes );

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});