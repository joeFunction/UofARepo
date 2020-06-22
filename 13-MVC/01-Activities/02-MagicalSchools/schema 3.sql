-- Drops the programming_db if it already exists --
DROP DATABASE IF EXISTS schools_db;

-- Created the DB "schools_db" (only works on local connections)
CREATE DATABASE schools_db;

-- Use the DB schools_db for all the rest of the script
USE schools_db;

-- Created the table "schools"
CREATE TABLE school (
  id INTEGER AUTO_INCREMENT NOT NULL,
  name VARCHAR(30) NOT NULL,
  PRIMARY KEY(id)
);
