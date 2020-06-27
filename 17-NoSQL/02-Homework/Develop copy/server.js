const express = require("express");
const mongoose = require("mongoose");
const db = require("./models");

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));


var apiRoutes = require ("./routes/apiroutes")
apiRoutes(app)

var htmlRoutes = require("./routes/htmlroutes")
htmlRoutes(app)

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout")


app.listen(PORT, function () {
  console.log("app is listening on port", PORT)
})