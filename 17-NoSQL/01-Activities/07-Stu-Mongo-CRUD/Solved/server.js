const express = require("express");
const mongojs = require("mongojs");
const logger = require("morgan");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

const databaseUrl = "notetakerDB";
const collections = ["notes"];

const db = mongojs(databaseUrl, collections);

db.on("error", error => {
  console.log("Database Error:", error);
});

app.get("/", (req, res) => {
  res.send(index.html);
});

// TODO: You will make six more routes. Each will use mongojs methods
// to interact with your mongoDB database, as instructed below.
// -/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/

// 1. Save a note to the database's collection
// POST: /submit
// ===========================================
app.post("/submit", (req, res) => {
  db.notes.insert(req.body, (error, data) => {
    if (error) {
      console.log(error);
      res.send(error);
    }

    console.log(data);

    res.send(data);
  });
});

// 2. Retrieve all notes from the database's collection
// GET: /all
// ====================================================
app.get("/all", (req, res) => {
  db.notes.find({}, (error, data) => {
    if (error) {
      console.log(error);
      res.send(error);
    }

    console.log(data);

    res.send(data);
  });
});

// 3. Retrieve one note in the database's collection by it's ObjectId
// TIP: when searching by an id, the id needs to be passed in
// as (mongojs.ObjectId(IdYouWantToFind))
// GET: /find/:id
// ==================================================================
app.get("/find/:id", (req, res) => {
  db.notes.findOne({
    _id: mongojs.ObjectId(req.params.id)
  }, (error, data) => {
    if (error) {
      console.log(error);
      res.send(error);
    }

    console.log(data);

    res.send(data);
  });
});

// 4. Update one note in the database's collection by it's ObjectId
// (remember, mongojs.ObjectId(IdYouWantToFind)
// PUT: /update/:id
// ================================================================
app.put("/update/:id", (req, res) => {
  db.notes.update(
    {
      _id: mongojs.ObjectId(req.params.id)
    },
    {
      $set: {
        title: req.body.title,
        note: req.body.note,
        modified: Date.now()
      }
    },
    (error, data) => {
      if (error) {
        console.log(error);
        res.send(error);
      }

      console.log(data);

      res.send(data);
    });
});

// 5. Delete one note from the database's collection by it's ObjectId
// (remember, mongojs.ObjectId(IdYouWantToFind)
// DELETE: /delete/:id
// ==================================================================
app.delete("/delete/:id", (req, res) => {
  db.notes.remove({
    _id: mongojs.ObjectId(req.params.id)
  }, (error, data) => {
    if (error) {
      console.log(error);
      res.send(error);
    }

    console.log(data);

    res.send(data);
  });
});

// 6. Clear the entire note collection
// DELETE: /clearall
// ===================================
app.delete("/clearall", (req, res) => {
  db.notes.remove({}, (error, data) => {
    if (error) {
      console.log(error);
      res.send(error);
    }

    console.log(data);

    res.send(data);
  });
});

// Listen on port 8080
app.listen(8080, () => {
  console.log("App running on port 8080!");
});
