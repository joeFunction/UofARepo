const orm = require("./config/orm.js");

const data = orm.selectWhere("party", "party_type", "grown-up");

console.log(data); // Data is Promise { <pending> }. Why?
