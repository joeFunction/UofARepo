const orm = require("./config/orm.js");

const getDataFromORM = async () => {
  const data = await orm.selectWhere("party", "party_type", "grown-up");

  console.log(data);
}

getDataFromORM();