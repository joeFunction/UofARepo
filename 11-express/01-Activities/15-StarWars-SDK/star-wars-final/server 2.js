const express = require("express");
const path = require("path");
const characters = require("./data/character-data");

const app = express();
const PORT = process.env.PORT || 3000;

// used for converting/reading data as json that is in POST body.
app.use(express.json());
// used to read arrays/strings that the FORM POSTs.
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function (request, response) {
    console.log(`/ called`);
    response.sendFile(path.join(__dirname, "/public/index.html"));
    // response.sendFile(__dirname + "/public/index.html");
});

app.get("/add", function (req, res) {
    res.sendFile(path.join(__dirname, "/public/add.html"));
});

app.get("/api/characters", function (request, response) {
    console.log(`/api/characters called`);
    response.json(characters);
});

app.get("/api/characters/:id", function (request, response) {
    console.log(`/api/characters/${request.params.id} called`);

    let characterId = request.params.id;

    for (let i = 0; i < characters.length; i++) {
        if (characters[i].id === characterId) {
            console.log(characters[i]);

            return response.json(characters[i]);
        }
    }

    return response.json(false);
});

app.post("/api/characters", function (request, response) {
    console.log(`POST /api/characters called`);
    const newCharacter = request.body;
    newCharacter.id = (request.body.name.split(" "))[0].toLowerCase();

    console.log(newCharacter);

    characters.push(newCharacter);

    response.json(newCharacter);
});

app.listen(PORT, function () {
    console.log(`Server listening on PORT :${PORT}`);
});