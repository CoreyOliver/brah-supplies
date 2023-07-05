//server set up

const express = require("express");
var cors = require("cors");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const logger = require("morgan");

//middleware init

require("dotenv").config({ path: "./config/.env" });
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger("dev"));
app.use(cors());

app.get("*", (req, res) =>
  res.sendFile(path.resolve(__dirname, "../Client", "index.html"),{extensions: ["jsx"]})
);

//file connect

const connectDB = require("./config/main.database");
const mainRoutes = require("./routes/main.route");

//db init

connectDB();

//route set up

app.use("/", mainRoutes);

//listening

app.listen(process.env.PORT, () => {
  console.log(`Server is running on ${process.env.PORT}, you better catch it!`);
});
