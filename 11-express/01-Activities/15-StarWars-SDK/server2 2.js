const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", function (request, response) {
    response.send("Welcome to Star Wars Page");
});

app.listen(PORT, function () {
    console.log(`App listening on http://localhost:${PORT}`);
});