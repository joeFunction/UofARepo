// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
const express = require("express");
const router = express.Router();
const db = require("../models");
const path = require("path");

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/blog.html"));
});

// cms route loads cms.html
router.get("/cms", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/cms.html"));
});

// blog route loads blog.html
router.get("/blog", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/blog.html"));
});

// Routes
// =============================================================
// GET route for getting all of the posts
router.get("/api/posts", async (req, res) => {
  try {
    const query = {};
    if (req.query.author_id) {
      query.authorId = req.query.author_id;
    }

    const data = await db.post.findAll({
      where: query
    });

    res.json(data);

  } catch (error) {
    console.log(error);

    res.status(500).send();
  }
});

// Get route for retrieving a single post
router.get("/api/posts/:id", async (req, res) => {
  try {
    const data = await db.post.findOne({
      where: req.params.id
    });

    res.json(data);

  } catch (error) {
    console.log(error);

    res.status(500).send();
  }
});

// POST route for saving a new post
router.post("/api/posts", async (req, res) => {
  try {
    const data = await db.post.create(req.body);

    res.json(data);

  } catch (error) {
    console.log(error);

    res.status(500).send();
  }
});

// DELETE route for deleting posts
router.delete("/api/posts/:id", async (req, res) => {
  try {
    const data = await db.post.destroy({
      where: req.params.id
    });

    res.json(data);

  } catch (error) {
    console.log(error);

    res.status(500).send();
  }
});

// PUT route for updating posts
router.put("/api/posts/:id", async (req, res) => {
  try {
    const data = await db.post.update(req.body, {
      where: {
        id: req.params.id
      }
    });

    res.json(data);

  } catch (error) {
    console.log(error);

    res.status(500).send();
  }
});

module.exports = router;
