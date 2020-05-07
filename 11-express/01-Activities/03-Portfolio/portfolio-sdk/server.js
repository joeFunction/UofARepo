const http = require("http");

const PORT = 8080;

const handleRequest = (req, res) => {
    const path = req.url;

    switch (path) {
        case "/":
            displayRoot(res);
            break;

        case "/portfolio":
            displayPortolio(res);
            break;

        default:
            display404(res);
            break;
    }
};

const displayRoot = (res) => {
    const html = `
    <html>
        <head></head>
        <body>
            <h1>Home Page</h1>
            <a href='/portfolio'>Portfolio</a>
        </body>
    </html>
    `;

    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(html);
};

const displayPortolio = (res) => {
    const html = `
    <html>
        <head></head>
        <body>
            <h1>Portfolio Page</h1>
            <a href='/'>Go Home</a>
        </body>
    </html>
    `;

    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(html);
};

const display404 = (res) => {
    const html = `
    <html>
        <head></head>
        <body>
            <h1>404 - This is not the page that you are looking for</h1>
        </body>
    </html>
    `;

    res.writeHead(404, { "Content-Type": "text/html" });
    res.end(html);
};

const server = http.createServer(handleRequest);

server.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});