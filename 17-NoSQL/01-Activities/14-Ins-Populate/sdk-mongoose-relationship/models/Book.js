const { Schema, model } = require("mongoose");

const bookSchema = new Schema({
    author: String,
    title: String
});

const Book = model("Book", bookSchema);

module.exports = Book;