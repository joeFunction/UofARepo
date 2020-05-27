const connection = require("./connection.js");

// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection
const orm = {
  select: async (tableInput, colToSearch, valOfCol) => {
    try {
      const queryString = "SELECT * FROM ??";

      const result = await connection.query(queryString, tableInput);

      console.log(result);

    } catch (error) {
      throw error;
    }
  },

  selectWhere: async (tableInput, colToSearch, valOfCol) => {
    try {
      const queryString = "SELECT * FROM ?? WHERE ?? = ?";

      const result = await connection.query(queryString, [tableInput, colToSearch, valOfCol]);

      console.log(result);

    } catch (error) {
      throw error;
    }
  },

  selectAndOrder: async (whatToSelect, table, orderCol) => {
    try {
      const queryString = "SELECT ?? FROM ?? ORDER BY ?? DESC";

      const result = await connection.query(queryString, [whatToSelect, table, orderCol]);

      console.log(result);

    } catch (error) {
      throw error;
    }
  },

  findWhoHasMost: async (tableOneCol, tableTwoForeignKey, tableOne, tableTwo) => {
    try {
      const queryString = "SELECT ??, COUNT(??) AS count FROM ?? LEFT JOIN ?? ON ??.??= ??.id GROUP BY ?? ORDER BY count DESC LIMIT 1";

      const result = await connection.query(queryString, [tableOneCol, tableOneCol, tableOne, tableTwo, tableTwo, tableTwoForeignKey, tableOne, tableOneCol]);

      console.log(result);

    } catch (error) {
      throw error;
    }
  }
};

module.exports = orm;
