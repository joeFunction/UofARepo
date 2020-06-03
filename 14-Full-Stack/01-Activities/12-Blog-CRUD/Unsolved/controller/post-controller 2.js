// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Post model
const express = require("express");
const router = express.Router();
const db = require("../models");
const path = require("path");

// Routes
// =============================================================
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/blog.html"));
});

// Route to the cms page
router.get("/cms", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/cms.html"));
});

// blog route loads blog.html
router.get("/blog", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/blog.html"));
});

// GET route for getting all of the posts
router.get("/api/posts", (req, res) => {
  // Add sequelize code to find all posts, and return them to the user with res.json
});

// Get route for returning posts of a specific category
router.get("/api/posts/category/:category", (req, res) => {
  // Add sequelize code to find all posts where the category is equal to req.params.category,
  // return the result to the user with res.json
});

// Get route for retrieving a single post
router.get("/api/posts/:id", (req, res) => {
  // Add sequelize code to find a single post where the id is equal to req.params.id,
  // return the result to the user with res.json
});

// POST route for saving a new post
router.post("/api/posts", (req, res) => {
  // Add sequelize code for creating a post using req.body,
  // then return the result using res.json
});

// DELETE route for deleting posts
router.delete("/api/posts/:id", (req, res) => {
  // Add sequelize code to delete a post where the id is equal to req.params.id, 
  // then return the result to the user using res.json
});

// PUT route for updating posts
router.put("/api/posts/:id", (req, res) => {
  // Add code here to update a post using the values in req.body, where the id is equal to
  // req.body.id and return the result to the user using res.json
});

module.exports = router
