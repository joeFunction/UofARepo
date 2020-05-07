const http = require("http");

const PORTONE = 8000;
const PORTTWO = 8080;

const handleRequestOne = (req, res) => {
    res.end(`Hello World from ${PORTONE}`);
};

const handleRequestTwo = (req, res) => {
    res.end(`Hello from ${PORTTWO}`);
};

const serverOne = http.createServer(handleRequestOne);
const serverTwo = http.createServer(handleRequestTwo);

serverOne.listen(PORTONE, () => {
    console.log(`Happy server http://locahost:${PORTONE}`);
});

serverTwo.listen(PORTTWO, () => {
    console.log(`Server started at http://locahost:${PORTTWO}`);
});