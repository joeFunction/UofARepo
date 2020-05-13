const express = require("express");
const characters = require("./data/character-data");

const app = express();
const PORT = 3000;

app.get("/", function (request, response) {
    response.send("Welcome to Star Wars Page");
});

app.get("/api/characters", function (request, response) {
    response.json(characters);
});

app.get("/:character", function (request, response) {
    let character = request.params.character;

    console.log(`Character: ${character}`);

    response.end();
});

app.listen(PORT, function () {
    console.log(`App listening on http://localhost:${PORT}`);
});