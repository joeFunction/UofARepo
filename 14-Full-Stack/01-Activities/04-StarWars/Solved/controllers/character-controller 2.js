// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
const path = require("path");
const Character = require("../models/character");
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
      data = await Character.findOne({
        where: {
          route_name: req.params.character
        }
      });
    } else {
      data = await Character.findAll();
    }

    res.json(data);

  } catch (error) {
    console.log(error);

    res.status(500).send(error);
  }
});

router.post("/api/characters", async (req, res) => {
  try {
    let character = req.body;
    let routeName = character.name.replace(/\s+/g, "").toLowerCase();

    const data = await Character.create({
      route_name: routeName,
      name: character.name,
      role: character.role,
      age: character.age,
      force_points: character.force_points
    });

    res.json(data);

  } catch (error) {
    console.log(error);

    res.status(500).send(error);
  }
});

module.exports = router;
