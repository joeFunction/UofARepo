const characters = require("../data/character-data");

module.exports = function (app) {
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
};