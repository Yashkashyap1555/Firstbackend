const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const route = require("./route/userRoute");
const app = express();
const port = 8000;

mongoose.connect("mongodb://127.0.0.1:27017/firstbackend");
const connection = mongoose.connection;
connection.once("open", (req, res) => {
  console.log("mongodb is connected successfully");
});

app.use(bodyparser.json())
app.use("/", route)


app.listen(port, (req, res) => {
  console.log(`server is connected successfully ${port}`);
});
