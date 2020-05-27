const connection = require("./connection.js");

// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection
const orm = {
  select: async (whatToSelect, tableInput) => {
    try {
      const queryString = "SELECT ?? FROM ??";

      const result = await connection.query(queryString, [whatToSelect, tableInput]);

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

  leftJoin: async (whatToSelect, tableOne, tableTwo, onTableOneCol, onTableTwoCol) => {
    try {
      const queryString = `
          SELECT ?? FROM 
          ?? AS tOne
          LEFT JOIN ?? AS tTwo
          ON tOne.?? = tTwo.??`;

      const result = await connection.query(queryString, [whatToSelect, tableOne, tableTwo, onTableOneCol, onTableTwoCol]);

      console.log(result);

    } catch (error) {
      throw error;
    }
  }
};

module.exports = orm;
