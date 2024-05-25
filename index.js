const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || "develop";
const bodyparser = require("body-parser");
const cors = require("cors");
app.use(cors({ origin: process.env.FRONT_URI, credentials: true }));
bodyparser.urlencoded({ extended: false });
app.use(bodyparser.json());

// index.js
const allRoutes = require("./routes/index");

allRoutes(app);
app.listen(port, () => {
  console.log("Server Running in port: " + port + " in " + env);
});
