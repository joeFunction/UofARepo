// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
const path = require("path");
const orm = require("../config/orm.js");
const character = require("../models/character");
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/view.html"));
});

router.get("/add", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/add.html"));
});

router.get("/all", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/all.html"));
});

router.get("/api/characters/:character?", async (req, res) => {
  try {
    let data;

    if (req.params.character) {
      data = await character.search(req.params.character);
      data = data[0];
    } else {
      data = await character.all();
    }

    res.json(data);

  } catch (error) {
    console.log(error);
    
    res.status(500).send(error);
  }
});

router.post("/api/characters", async (req, res) => {
  try {
    const data = await character.create(req.body);

    res.json(data);

  } catch (error) {
    console.log(error);
    
    res.status(500).send(error);
  }
});

module.exports = router;
