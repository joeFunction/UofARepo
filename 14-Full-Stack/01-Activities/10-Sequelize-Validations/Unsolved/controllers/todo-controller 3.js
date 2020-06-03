// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// grab the orm from the config
// (remember: connection.js -> orm.js -> route file)
const express = require("express");
const router = express.Router();
const db = require("../models");

// Routes
// =============================================================
// GET route for getting all of the todos
router.get("/api/todos", async (req, res) => {
    try {
        const data = await db.todo.findAll();

        res.json(data);

    } catch (error) {
        console.log(error);

        res.status(500).send(error);
    }
});

// POST route for saving a new todo. We can create a todo using the data on req.body
router.post("/api/todos", async (req, res) => {
    try {
        const data = await db.todo.create(req.body);

        res.json(data);

    } catch (error) {
        console.log(error);

        res.status(500).send(error);
    }
});

// DELETE route for deleting todos. We can access the ID of the todo to delete in
// req.params.id
router.delete("/api/todos/:id", async (req, res) => {
    try {
        const data = await db.todo.destroy({
            where: {
                id: req.params.id
            }
        });

        res.json(data);

    } catch (error) {
        console.log(error);

        res.status(500).send(error);
    }
});

// PUT route for updating todos. We can access the updated todo in req.body
router.put("/api/todos/:id", async (req, res) => {
    try {
        const data = await db.todo.update(req.body, {
            where: {
                id: req.params.id
            }
        });

        res.json(data);

    } catch (error) {
        console.log(error);

        res.status(500).send(error);
    }
});

module.exports = router;
