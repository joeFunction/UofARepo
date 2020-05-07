const http = require("http");
const fs = require("fs");

const PORT = 8080;

const handleRequest = (req, res) => {
    const path = req.url;

    switch (path) {
        case "/":
            displayOriginal(res);
            break;

        case "/prequel":
            displayPrequel(res);
            break;

        case "/sequel":
            displaySequel(res);
        default:
            break;
    }
};

const displayOriginal = (res) => {
    fs.readFile(__dirname + "/original.html", "utf-8", (err, data) => {
        if (err) {
            throw err;
        };

        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
    });
};

const displayPrequel = (res) => {
    fs.readFile(__dirname + "/prequel.html", "utf-8", (err, data) => {
        if (err) {
            throw err;
        };

        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
    });
};

const displaySequel = (res) => {
    fs.readFile(__dirname + "/sequel.html", "utf-8", (err, data) => {
        if (err) {
            throw err;
        };

        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
    });
};

const server = http.createServer(handleRequest);

server.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});