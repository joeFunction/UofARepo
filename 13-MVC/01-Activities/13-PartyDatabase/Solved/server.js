const orm = require("./config/orm.js");

// For each of the following select methods, a string argument containing wildcard character ("*")
// could work in most environments, but some MySQL servers (like MAMP) will return an error.

// Console log all the party_name's.
orm.select("party_name", "party");

// Console log all the client_name's.
orm.select("client_name", "clienty");

// Console log all the parties that have a party-type of grown-up.
orm.selectWhere("party", "party_type", "grown-up");

// Console log all the clients and their parties.
orm.leftJoin(["client_name", "party_name"], "client", "party", "id", "client_id");