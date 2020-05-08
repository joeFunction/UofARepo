const express = require("express");
const htmlRoutes = require("./routes/html-routes")
const apiRoutes = require("./routes/api-routes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

htmlRoutes(app);
apiRoutes(app);

app.listen(PORT, function () {
    console.log(`GoT app listening on PORT :${PORT}`);
});