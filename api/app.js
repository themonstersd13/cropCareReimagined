const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require('dotenv').config();

const app = express();
app.use(cors());

mongoose.connect(process.env.MONGO_URL);
const db = mongoose.connection;

db.on("error", () => console.log("Connection error"));
db.once("open", () => console.log("Connected to MongoDB successfully"));

app.use(express.json());

app.get('/', (req, res) => {
  res.send("Server is working");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
