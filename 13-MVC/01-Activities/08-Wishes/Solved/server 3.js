const express = require("express");
const exphbs = require("express-handlebars");
const mysql = require("mysql2/promise");

const app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const connectToDatabase = async () => {
  try {
    // MySQL DB Connection Information (remember to change this with our specific credentials)
    connection = await mysql.createConnection({
      host: "localhost",
      port: 3306,
      user: "root",
      password: "password",
      database: "wishes_db"
    });

    console.log(`Connected to database with id ${connection.threadId}`);
  } catch (error) {
    console.log(error);
  }
};

// Root get route
app.get("/", (req, res) => {
  try {
    const [rows] = await connection.query("SELECT * FROM wish");

    res.render("index", { wishes: rows });

  } catch (error) {
    res.status(500).send(error);
  }
});

// Post route -> back to home
app.post("/", (req, res) => {
  try {
    const [rows] = await connection.query("INSERT INTO wish SET ?", req.body);

    res.redirect("/");

  } catch (error) {
    res.status(500).send(error);
  }
});

connectToDatabase();

// Start our server so that it can begin listening to client requests.
app.listen(PORT, () => {
  // Log (server-side) when our server has started
  console.log(`Server listening on: http://localhost:${PORT}`);
});
