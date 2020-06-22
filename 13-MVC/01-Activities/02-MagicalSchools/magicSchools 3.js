// Dependencies
const express = require("express");
const mysql = require("mysql2/promise");

// Create express app instance.
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
      database: "schools_db"
    });

    console.log(`Connected to database with id ${connection.threadId}`);
  } catch (error) {
    console.log(error);
  }
};

// Routes
app.get("/", async (req, res) => {
  try {
    // If the main route is hit, then we initiate a SQL query to grab all records.
    // All of the resulting records are stored in the variable "result."
    const [rows] = await connection.query("SELECT * FROM school");

    // We then begin building out HTML elements for the page.
    let html = "<h1> Magical Schools </h1>";

    // Here we begin an unordered list.
    html += "<ul>";

    // We then use the retrieved records from the database to populate our HTML file.
    for (const row of rows) {
      html += "<li><p> ID: " + row.id + "</p>";
      html += "<p>School: " + row.name + " </p></li>";
    }

    // We close our unordered list.
    html += "</ul>";

    // Finally we send the user the HTML file we dynamically created.
    res.send(html);

  } catch (error) {
    res.status(500).send(error);
  }
});

// Start database connection
connectToDatabase();

// Start our server so that it can begin listening to client requests.
app.listen(PORT, () => {
  // Log (server-side) when our server has started
  console.log(`Server listening on: http://localhost:${PORT}`);
});
