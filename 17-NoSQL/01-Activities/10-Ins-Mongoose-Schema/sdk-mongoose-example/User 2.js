const { Schema, model } = require("mongoose");

// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

const userSchema = new Schema({
    first_name: String,
    last_name: String,
    full_name: String,
    username: {
        type: String,
        required: [true, "username is required"]
    },
    email: {
        type: String,
        match: [/.+\@.+\..+/, "e-mail not valid"]
    },
    password: {
        type: String,
        minlength: [6, "Too short password"]
    },
    create_date: {
        type: Date,
        default: Date.now()
    },
    admin: {
        type: Boolean,
        default: false
    }
});

userSchema.methods.setFullName = function () {
    this.full_name = `${this.first_name} ${this.last_name}`;

    return this.full_name;
};

const User = model("User", userSchema);

module.exports = User;