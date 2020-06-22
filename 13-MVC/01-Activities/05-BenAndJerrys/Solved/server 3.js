// Dependencies
const express = require("express");
const exphbs = require("express-handlebars");

// Create an instance of the express app.
const app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
const PORT = process.env.PORT || 8080;

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Data
const icecreams = [
  { name: "vanilla", price: 10, awesomeness: 3 },
  { name: "chocolate", price: 4, awesomeness: 8 },
  { name: "banana", price: 1, awesomeness: 1 },
  { name: "green tea", price: 5, awesomeness: 7 },
  { name: "jawbreakers", price: 6, awesomeness: 2 },
  { name: "pistachio", price: 11, awesomeness: 15 }
];

// Routes
app.get("/icecreams/:name", (req, res) => {
  for (const icecream of icecreams) {
    if (icecream.name === req.params.name) {
      return res.render("icecream", icecream);
    }
  }
});

app.get("/icecreams", (req, res) => {
  res.render("icecreams", { icecreams: icecreams });
});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, () => {
  // Log (server-side) when our server has started
  console.log(`Server listening on: http://localhost:${PORT}`);
});
