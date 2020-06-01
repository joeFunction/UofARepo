// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
const express = require("express");
const db = require("./models");
const authorController = require("./controllers/author-controller");
const postController = require("./controllers/post-controller");

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));

// Routes
// =============================================================
app.use(authorController);
app.use(postController)

// Starting our Express app
// =============================================================
const startServer = async () => {
  await db.sequelize.sync({ force: true });

  app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}`);
  });
};

startServer();
