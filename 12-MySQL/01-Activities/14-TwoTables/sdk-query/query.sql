SELECT * FROM topalbums;
SELECT * FROM top5000;

SELECT ta.artist, ta.album, 
t5.song, ta.position, ta.release_year
FROM topalbums ta
INNER JOIN top5000 t5
ON ta.artist = t5.artist AND
ta.release_year = t5.release_year
WHERE ta.artist = "Elvis Presley" AND
t5.artist = "Elvis Presley"
ORDER BY ta.release_year;