// Dependencies
const express = require("express");
const mysql = require("mysql2/promise");

// Create instance of express app.
const app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
const PORT = process.env.PORT || 8080;

let connection;

// Create MySQL database connection
const connectToDatabase = async () => {
  try {
    // MySQL DB Connection Information (remember to change this with our specific credentials)
    connection = await mysql.createConnection({
      host: "localhost",
      port: 3306,
      user: "root",
      password: "password",
      database: "seinfeld_db"
    });

    console.log(`Connected to database with id ${connection.threadId}`);
  } catch (error) {
    console.log(error);
  }
};

// Routes
app.get("/cast", async (req, res) => {
  try {
    const [rows] = await connection.query("SELECT * FROM actor ORDER BY id");

    let html = "<h1>Actors Ordered BY ID</h1>";

    html += "<ul>";

    for (const row of rows) {
      html += "<li><p> ID: " + row.id + "</p>";
      html += "<p> Name: " + row.name + "</p>";
      html += "<p> Coolness Points: " + row.coolness_points + "</p>";
      html += "<p>Attitude: " + row.attitude + "</p></li>";
    }

    html += "</ul>";

    res.send(html);

  } catch (error) {
    res.status(500).send(error);
  }
});

app.get("/coolness-chart", async (req, res) => {
  try {
    const [rows] = await connection.query("SELECT * FROM actor ORDER BY coolness_points DESC");

    let html = "<h1>Actors by Coolness</h1>";

    html += "<ul>";

    for (const row of rows) {
      html += "<li><p> ID: " + row.id + "</p>";
      html += "<p> Name: " + row.name + "</p>";
      html += "<p> Coolness Points: " + row.coolness_points + "</p>";
      html += "<p>Attitude: " + row.attitude + "</p></li>";
    }

    html += "</ul>";

    res.send(html);

  } catch (error) {
    res.status(500).send(error);
  }
});

app.get("/attitude-chart/:att", async (req, res) => {
  try {
    const query = "SELECT * FROM actor WHERE attitude = ?";
    const [rows] = await connection.query(query, req.params.att);

    let html = "<h1>Actors With an Attitude of " + req.params.att + "</h1>";

    html += "<ul>";

    for (const row of rows) {
      html += "<li><p> ID: " + row.id + "</p>";
      html += "<p> Name: " + row.name + "</p>";
      html += "<p> Coolness Points: " + row.coolness_points + "</p>";
      html += "<p>Attitude: " + row.attitude + "</p></li>";
    }

    html += "</ul>";

    res.send(html);

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
