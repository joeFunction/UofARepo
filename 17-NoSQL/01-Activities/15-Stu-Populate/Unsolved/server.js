const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/populatedb", { useNewUrlParser: true });

const createUser = async () => {
  try {
    const data = await db.User.create({ name: "Ernest Hemingway" });

  } catch (error) {
    console.log(error);
  }
};

createUser();

app.get("/notes", async (req, res) => {
  try {
    const data = db.Note.find({});

    res.json(data);

  } catch (error) {
    console.log(error);

    res.send(error);
  }
});

app.get("/user", async (req, res) => {
  try {
    const data = db.User.find({});

    res.json(data);

  } catch (error) {
    console.log(error);

    res.send(error);
  }
});

app.post("/submit", ({ body }, res) => {
  try {
    const { _id } = await db.Note.create(body);
    const data = await db.User.findOneAndUpdate({}, { $push: { notes: _id } }, { new: true });
    res.json(data);

  } catch (error) {
    console.log(error);

    res.send(error);
  }
});

app.get("/populateduser", (req, res) => {
  // TODO
  // =====
  // Write the query to grab the documents from the User collection,
  // and populate them with any associated Notes.
  // TIP: Check the models out to see how the Notes refers to the User
});

// Start the server
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
