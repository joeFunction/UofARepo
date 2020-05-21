const express = require("express");
const exphbs = require("express-handlebars");
const connection = require("./db/connection");
const htmlRoutes = require("./routes/html-routes");
const apiRoutes = require("./routes/api-routes");

const app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
const PORT = process.env.PORT || 8080;

app.use(express.static("public"));
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

htmlRoutes(app, connection);
apiRoutes(app, connection);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, () => {
  // Log (server-side) when our server has started
  console.log(`Server listening on: http://localhost:${PORT}`);
});
