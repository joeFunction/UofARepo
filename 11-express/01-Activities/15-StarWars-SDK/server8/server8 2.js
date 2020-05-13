const express = require("express");
const characters = require("./data/character-data");

const app = express();
const PORT = 3000;

// used for converting/reading data as json that is in POST body.
app.use(express.json());
// used to read arrays/strings that the FORM POSTs.
app.use(express.urlencoded({ extended: true }));

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

app.post("/api/characters", function (request, response) {
    const newCharacter = request.body;

    console.log(newCharacter);

    characters.push(newCharacter);

    response.json(newCharacter);
});

app.listen(PORT, function () {
    console.log(`App listening on http://localhost:${PORT}`);
});