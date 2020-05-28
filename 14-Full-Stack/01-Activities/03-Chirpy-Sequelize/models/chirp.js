// Dependencies
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard library
const { DataTypes } = require("sequelize");

// sequelize (lowercase) references our connection to the DB.
const sequelize = require("../config/connection.js");

// Creates a "Chirp" model that matches up with DB
const Chirp = sequelize.define("chirp",
  {
    author: {
      type: DataTypes.STRING,
      allowNull: false
    },
    body: {
      type: DataTypes.STRING
    },
    created_at: {
      type: DataTypes.DATE
    }
  },
  {
    freezeTableName: true,
    timestamps: false
  });

Chirp.sync({ force: true });

// Makes the Chirp Model available for other files (will also create a table)
module.exports = Chirp;
