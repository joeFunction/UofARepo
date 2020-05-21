/*

To run this file, we do the following in our Terminal:

1. Go to the directory of this sql file.

2. Get into our mysql console.

3. Run "source schema.sql"

*/

-- Drops the task_saver_db if it already exists --
DROP DATABASE IF EXISTS task_saver_db;

-- Create the database task_saver_db and specified it for use.
CREATE DATABASE task_saver_db;

USE task_saver_db;

-- Create the table tasks.
CREATE TABLE task (
  id INTEGER NOT NULL AUTO_INCREMENT,
  task VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);
