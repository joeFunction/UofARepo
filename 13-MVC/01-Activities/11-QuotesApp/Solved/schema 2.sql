-- ### Schema

CREATE DATABASE quotes_db;
USE quotes_db;

CREATE TABLE quote
(
	id INTEGER NOT NULL AUTO_INCREMENT,
	author VARCHAR(255) NOT NULL,
	quote TEXT NOT NULL,
	PRIMARY KEY (id)
);
