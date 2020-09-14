require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const app = express();

var corsOptions = {
  origin: "http://localhost:3000",
};
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const db = require("./models");



db.sequelize.sync()
require("./routes/customer-routes")(app);
const PORT = process.env.PORT || 8080;
app.listen(PORT, function () {
  console.log(`App listening on PORT ${PORT}!`);
});
