// *********************************************************************************
// orm.js - This file offers a set of easier-to-use methods for interacting with the MySQL db.
// *********************************************************************************

// Dependencies
// =============================================================
const connection = require("./connection.js");

// ORM
// =============================================================

const tableName = "character";

const orm = {
  // Here our ORM is creating a simple method for performing a query of the entire table.
  // We make use of the callback to ensure that data is returned only once the query is done.
  all: async () => {
    const query = "SELECT * FROM ??";

    const data = await connection.query(query, tableName);

    return data;
  },

  // Here our ORM is creating a simple method for performing a query of a single character in the table.
  // Again, we make use of the callback to grab a specific character from the database.
  search: async name => {
    const query = `SELECT * FROM ?? WHERE route_name = ?`;

    const data = await connection.query(query, [tableName, name]);

    return data;
  },

  // Here our ORM is creating a simple method for adding characters to the database
  // Effectively, the ORM's simple addCharacter method translates into a more complex SQL INSERT statement.
  create: async character => {
    // Creating a routeName so its easy to search.

    // Using a RegEx Pattern to remove spaces from character.name
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    let routeName = character.name.replace(/\s+/g, "").toLowerCase();

    const query = "INSERT INTO ?? (route_name, name, role, age, force_points) VALUES (?,?,?,?,?)";

    const data = await connection.query(query, [tableName, routeName, character.name, character.role, character.age, character.force_points]);

    return data;
  }
};

module.exports = orm;
