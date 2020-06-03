/*
This file is intended to help developers get their SQL Databases setup correctly.
It is important since other developers will be unlikely to have the same database or tables setup already.
*/

/* Create and use the starwars db */
DROP DATABASE IF EXISTS starwars_db;
CREATE DATABASE starwars_db;

USE starwars_db;

/* Create a table for all your star wars characters */
CREATE TABLE `character` (
	id INTEGER AUTO_INCREMENT NOT NULL,
	route_name VARCHAR(255) NOT NULL,
	name VARCHAR(255) NOT NULL,
	role VARCHAR(255) NOT NULL,
	age INTEGER NOT NULL,
	force_points INTEGER NOT NULL,
	PRIMARY KEY (id)
);
