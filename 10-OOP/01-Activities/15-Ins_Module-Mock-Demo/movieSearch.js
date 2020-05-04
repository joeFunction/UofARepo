const axios = require("axios");

class MovieSearch {
  constructor() { };

  buildUrl(movie) {
    return `https://www.omdbapi.com/?t=${movie}&apikey=trilogy`;
  };

  search(movie) {
    return axios.get(this.buildUrl(movie));
  };
}

module.exports = MovieSearch;
