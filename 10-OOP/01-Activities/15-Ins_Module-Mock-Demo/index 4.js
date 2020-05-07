const MovieSearch = require("./MovieSearch");

const movie = new MovieSearch();

movie
  .search("Spider-Man")
  .then((res) => { console.log(res.data); })
  .catch((err) => { console.log(err); });
