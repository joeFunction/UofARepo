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

app.get("/api/characters/:id", function (request, response) {
    let characterId = request.params.id;

    for (let i = 0; i < characters.length; i++) {
        if (characters[i].id === characterId) {
            console.log(characters[i]);

            return response.json(characters[i]);
        }
    }

    response.send(`No character with id ${characterId} found`);
});

app.listen(PORT, function () {
    console.log(`App listening on http://localhost:${PORT}`);
});