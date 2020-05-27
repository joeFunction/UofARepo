const express = require("express");
const exphbs = require("express-handlebars");
const mysql = require("mysql");
const connection = require("./db/connection");
const htmlRoutes = require("./routes/html-routes");
const apiRoutes = require("./routes/api-routes");

const app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
const PORT = process.env.PORT || 8080;

// Use the express.static middleware to serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

htmlRoutes(app, connection);
apiRoutes(app, connection);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
  // Log (server-side) when our server has started
  console.log(`Server listening on: http://localhost:${PORT}`);
});
