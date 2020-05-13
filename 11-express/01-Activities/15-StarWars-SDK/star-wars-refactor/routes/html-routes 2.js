const path = require("path");

module.exports = function (app) {
    app.get("/", function (request, response) {
        console.log(`/ called`);
        response.sendFile(path.join(__dirname, "../public/html/index.html"));
    });

    app.get("/add", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/html/add.html"));
    });
};