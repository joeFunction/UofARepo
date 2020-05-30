// Dependencies
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard library
const { DataTypes } = require("sequelize");

// sequelize (lowercase) references our connection to the DB.
const sequelize = require("../config/connection.js");

// Creates a "Character" model that matches up with DB
const Character = sequelize.define("character",
    {
        route_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING
        },
        role: {
            type: DataTypes.STRING
        },
        age: {
            type: DataTypes.INTEGER
        },
        force_points: {
            type: DataTypes.INTEGER
        }
    },
    {
        freezeTableName: true,
        timestamps: false
    });

    Character.sync({ force: true });

// Makes the Character Model available for other files (will also create a table)
module.exports = Character;
