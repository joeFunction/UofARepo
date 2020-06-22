/*

To run this file, we do the following in our Terminal:

1. Go to the directory of this sql file.

2. Get into our mysql console.

3. Run "source schema.sql"

*/

-- Create the database seinfeld and specified it for use.
CREATE DATABASE seinfeld_db;
USE seinfeld_db;

-- Create the table actor.
CREATE TABLE actor (
  id INTEGER AUTO_INCREMENT NOT NULL,
  name VARCHAR(30) NOT NULL,
  coolness_points INTEGER NOT NULL,
  attitude VARCHAR(60) NOT NULL,
  PRIMARY KEY(id)
);

