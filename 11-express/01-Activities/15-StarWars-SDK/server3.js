const express = require("express");

const app = express();
const PORT = 3000;

const yoda = {
    name: "Master Yoda",
    role: "Jedi Master",
    age: 900,
    affiliation: "Jedi Order"
};

const vader = {
    name: "Darth Vader",
    role: "Sith Lord",
    age: 50,
    affiliation: "Sith Order"
};

app.get("/", function (request, response) {
    response.send("Welcome to Star Wars Page");
});

app.get("/yoda", function (request, response) {
    response.json(jon);
});

app.get("/vader", function (request, response) {
    response.json(cersei);
});

app.listen(PORT, function () {
    console.log(`App listening on http://localhost:${PORT}`);
});