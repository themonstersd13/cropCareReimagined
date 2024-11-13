const express = require("express");
const mongoose = require("mongoose");
const loginRouter = require('./routes/login');
const registerRouter = require('./routes/register');
const cors = require("cors");
require('dotenv').config();

const app = express();
app.use(express.json());

app.use(loginRouter);
app.use(registerRouter);
app.use(cors());

mongoose.connect(process.env.MONGO_URL);
const db = mongoose.connection;

db.on("error", () => console.log("Connection error"));
db.once("open", () => console.log("Connected to MongoDB successfully"));


app.get('/', (req, res) => {
  res.send("Server is working");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
