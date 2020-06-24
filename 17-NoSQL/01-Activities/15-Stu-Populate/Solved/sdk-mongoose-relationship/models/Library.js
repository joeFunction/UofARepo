const { Schema, model } = require("mongoose");

const librarySchema = new Schema({
    name: String,
    books: [{
        type: Schema.Types.ObjectId,
        ref: "Book"
    }]
});

const Library = model("Library", librarySchema);

module.exports = Library;