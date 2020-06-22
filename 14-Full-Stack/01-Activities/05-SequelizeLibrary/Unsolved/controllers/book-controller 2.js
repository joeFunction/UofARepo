// *********************************************************************************
// book-controller.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
const Book = require("../models/book.js");
const express = require("express");
const router = express.Router();
const path = require("path");

// HTML Routes
// =============================================================
router.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../views/view.html"));
});

// add route loads the add.html page, where users can enter new books to the db
router.get("/add", function (req, res) {
    res.sendFile(path.join(__dirname, "../views/add.html"));
});

// all route loads the all.html page, where all books in the db are displayed
router.get("/all", function (req, res) {
    res.sendFile(path.join(__dirname, "../views/all.html"));
});

// short route loads the short.html page, where short books in the db are displayed
router.get("/short", function (req, res) {
    res.sendFile(path.join(__dirname, "../views/short.html"));
});

// long route loads the long.html page, where long books in the db are displayed
router.get("/long", function (req, res) {
    res.sendFile(path.join(__dirname, "../views/long.html"));
});

// API Routes
// =============================================================

// Add sequelize code to get all books and return them as JSON
router.get("/api/books", async (req, res) => {

});

// Add sequelize code to get a specific book and return it as JSON
router.get("/api/books/:book", async (req, res) => {

});

// Add sequelize code to get all books of a specific genre and return them as JSON
router.get("/api/genres/:genre", async (req, res) => {

});

// Add sequelize code to get all books from a specific author and return them as JSON
router.get("/api/authors/:author", async (req, res) => {

});

// Add sequelize code to get all "long" books (more than 150 pages) and return them as JSON
router.get("/api/long/books", async (req, res) => {

});

// Add sequelize code to get all "short" books (150 pages or less) and return them as JSON
router.get("/api/short/books", async (req, res) => {

});

// Add sequelize code to create a book
router.post("/api/books", async (req, res) => {

});

// Add sequelize code to delete a book
router.delete("/api/books/:id", async (req, res) => {

});

module.exports = router;
