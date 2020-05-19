CREATE DATABASE top_songDB;
USE top_songDB;

CREATE TABLE Top5000 (
    position INTEGER NOT NULL,
    artist VARCHAR(100),
    album VARCHAR(100),
    release_year INTEGER,
    raw_total DECIMAL(7,4),
    raw_usa DECIMAL(7,4),
    raw_uk DECIMAL(7,4),
    raw_europe DECIMAL(7,4),
    raw_row DECIMAL (7,4),
    PRIMARY KEY (position)
);