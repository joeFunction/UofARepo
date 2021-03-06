// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Dependencies
const { Sequelize } = require("sequelize");

// Creates mySQL connection using Sequelize, the empty string in the third argument spot is our password.
const sequelize = new Sequelize("starwars_db", "root", "password", {
  host: "localhost",
  port: 3306,
  dialect: "mysql"
});

// Exports the connection for other files to use
module.exports = sequelize;
