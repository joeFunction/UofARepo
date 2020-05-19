-- A query which returns all data for songs sung by a specific artist
SELECT * FROM top5000 
WHERE artist = "Will Smith";

-- A query which searches for a specific song in the top 5000 and returns the data for it
SELECT * FROM top5000
WHERE song = "lose YOURself";

SELECT * FROM top5000
WHERE song LIKE "lose%";

-- A query which returns all data contained within a specific range
-- BETWEEN
SELECT * FROM top5000
WHERE position BETWEEN 200 AND 300;

SELECT * FROM top5000
WHERE release_year BETWEEN 2000 AND 2010
ORDER BY release_year;

SELECT * FROM top5000
WHERE song BETWEEN "white christmas" AND "yeah!"
ORDER BY song;

-- A query which returns all artists who appear within the top 5000 more than once
-- GROUP BY
-- HAVING
SELECT artist, COUNT(*) AS number_of_times FROM top5000
GROUP BY artist
HAVING number_of_times > 1
ORDER BY number_of_times DESC;

SELECT * FROM top5000;