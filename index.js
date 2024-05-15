const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const bodyparser = require("body-parser");
const cors = require("cors");
app.use(cors());

bodyparser.urlencoded({ extended: false });
app.use(bodyparser.json());

// index.js
const allRoutes = require("./routes/index");

allRoutes(app);
app.listen(port, () => {
  console.log("Server Running in port: " + port);
});
