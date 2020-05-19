CREATE DATABASE schools_db;

USE schools_db;

CREATE TABLE school (
	id INTEGER AUTO_INCREMENT NOT NULL,
    name VARCHAR(100) NOT NULL,
    
    PRIMARY KEY (id)
);
