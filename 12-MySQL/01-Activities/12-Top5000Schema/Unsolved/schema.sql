<<<<<<< HEAD
<<<<<<< HEAD
CREATE DATABASE top_songDB;
USE top_songDB;
=======
=======
>>>>>>> 91949dde86c32b43b682997c5a2d5857a8d9625a
DROP DATABASE IF EXISTS top_songsDB;
CREATE DATABASE top_songsDB;

USE top_songsDB;
<<<<<<< HEAD
>>>>>>> 91949dde86c32b43b682997c5a2d5857a8d9625a
=======
>>>>>>> 91949dde86c32b43b682997c5a2d5857a8d9625a

CREATE TABLE Top5000 (
    position INTEGER NOT NULL,
    artist VARCHAR(100),
<<<<<<< HEAD
<<<<<<< HEAD
    album VARCHAR(100),
    release_year INTEGER,
    raw_total DECIMAL(7,4),
    raw_usa DECIMAL(7,4),
    raw_uk DECIMAL(7,4),
    raw_europe DECIMAL(7,4),
    raw_row DECIMAL (7,4),
=======
=======
>>>>>>> 91949dde86c32b43b682997c5a2d5857a8d9625a
    song VARCHAR(100),
    release_year INTEGER,
    raw_total DECIMAL(7, 4),
    raw_usa DECIMAL(7, 4),
    raw_uk DECIMAL(7, 4),
    raw_europe DECIMAL(7, 4),
    raw_row DECIMAL(7, 4),
<<<<<<< HEAD
>>>>>>> 91949dde86c32b43b682997c5a2d5857a8d9625a
=======
>>>>>>> 91949dde86c32b43b682997c5a2d5857a8d9625a
    PRIMARY KEY (position)
);