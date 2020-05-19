DROP DATABASE IF EXISTS top_songsDB;
CREATE DATABASE top_songsDB;

USE top_songsDB;

CREATE TABLE Top5000 (
    position INTEGER NOT NULL,
    artist VARCHAR(100),
    song VARCHAR(100),
    release_year INTEGER,
    raw_total DECIMAL(7, 4),
    raw_usa DECIMAL(7, 4),
    raw_uk DECIMAL(7, 4),
    raw_europe DECIMAL(7, 4),
    raw_row DECIMAL(7, 4),
    PRIMARY KEY (position)
);

CREATE TABLE TopAlbums (
    position INTEGER NOT NULL,
    artist VARCHAR(100),
    album VARCHAR(100),
    release_year INTEGER,
    raw_total DECIMAL(7, 4),
    raw_usa DECIMAL(7, 4),
    raw_uk DECIMAL(7, 4),
    raw_europe DECIMAL(7, 4),
    raw_row DECIMAL(7, 4),
    PRIMARY KEY (position)
);