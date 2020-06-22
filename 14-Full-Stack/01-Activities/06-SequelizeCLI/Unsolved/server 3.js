// *********************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
// *********************************************************************************

// Dependencies
// =============================================================
const express = require("express");

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 8080;

// Starts the server to begin listening
// =============================================================
app.listen(PORT, () => {
  console.log(`Server listening on: http://localhost:${PORT}`);
});
