const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 8080;

const User = require("./userModel.js");
const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/mongoose_userDB", { useNewUrlParser: true, useUnifiedTopology: true });

app.post("/submit", async ({body}, res) => {
  try {
    const data = await User.create(body);

    res.json(data);

  } catch (error) {
    console.log(error);

    res.send(error);
  }
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
