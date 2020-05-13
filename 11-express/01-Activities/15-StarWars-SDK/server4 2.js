const express = require("express");

const app = express();
const PORT = 3000;

const characters = [
    {
        id: "yoda",
        name: "Master Yoda",
        role: "Jedi Master",
        age: 900,
        affiliation: "Jedi Order"
    },
    {
        id: "vader",
        name: "Darth Vader",
        role: "Sith Lord",
        age: 50,
        affiliation: "Sith Order"
    },
    {
        id: "luke",
        name: "Luke Skywalker",
        role: "Jedi Master",
        age: 60,
        affiliation: "Jedi Order"
    }
];

app.get("/", function (request, response) {
    response.send("Welcome to Star Wars Page");
});

app.get("/:character", function (request, response) {
    let character = request.params.character;

    console.log(`Character: ${character}`);

    response.end();
});

app.listen(PORT, function () {
    console.log(`App listening on http://localhost:${PORT}`);
});