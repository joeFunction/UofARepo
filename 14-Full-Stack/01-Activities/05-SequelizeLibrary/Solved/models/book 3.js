// Dependencies
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard library
const { DataTypes } = require("sequelize");

// sequelize (lowercase) references our connection to the DB.
const sequelize = require("../config/connection.js");

// Creates a "Character" model that matches up with DB
const Book = sequelize.define("book",
    {
        title: {
            type: DataTypes.STRING,
        },
        author: {
            type: DataTypes.STRING
        },
        genre: {
            type: DataTypes.STRING
        },
        pages: {
            type: DataTypes.INTEGER
        }
    },
    {
        freezeTableName: true,
        timestamps: false
    });

Book.sync();

module.exports = Book;
