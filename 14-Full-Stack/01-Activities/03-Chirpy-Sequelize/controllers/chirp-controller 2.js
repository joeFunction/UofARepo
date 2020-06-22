// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
const Chirp = require("../models/chirp.js");
const express = require("express");
const router = express.Router();

// Routes
// =============================================================

// Get all chirps
router.get("/api/chirps", async (req, res) => {
  try {
    const data = await Chirp.findAll();
    res.json(data);

  } catch (error) {
    res.status(500).send(error);
  }
});

// Add a chirp
router.post("/api/chirps", async (req, res) => {
  try {
    const data = Chirp.create(req.body);
    res.json(data);

  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
