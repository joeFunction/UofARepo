const express = require("express");
const mongoose = require("mongoose");
const db = require("./models");

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/mongoose_relationshipDB", { useNewUrlParser: true, useUnifiedTopology: true });

const createLibrary = async () => {
    try {
        const data = await db.Library.create({ name: "Campus Library" });

        console.log(data);

    } catch (error) {
        console.log(error);
    }
};

// createLibrary();

app.post("/submit", async ({ body }, res) => {
    try {
        const { _id } = await db.Book.create(body);

        const data = await db.Library.findOneAndUpdate({ name: "Campus Library" }, { $push: { books: _id } }, { new: true });

        res.json(data);

    } catch (error) {
        console.log(error);

        res.send(error);
    }
});

app.get("/books", async (req, res) => {
    try {
        const data = await db.Book.find({});

        res.json(data);

    } catch (error) {
        console.log(error);

        res.send(error);
    }
});

app.get("/library", async (req, res) => {
    try {
        const data = await db.Library.find({});

        res.json(data);

    } catch (error) {
        console.log(error);

        res.send(error);
    }
});

app.get("/populated", async (req, res) => { 
    try {
        const data = await db.Library.find({}).populate("books");

        res.json(data);

    } catch (error) {
        
    }
});

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});
