const axios = require("axios");
const MovieSearch = require("../MovieSearch");

jest.mock("axios");

describe("MovieSearch", () => {
  describe("buildUrl", () => {
    it("should return an OMDB movie search URL using a movie name", () => {
      const movie = new MovieSearch();
      const name = "Rocky";

      const url = movie.buildUrl(name);

      expect(url).toEqual(`https://www.omdbapi.com/?t=${name}&apikey=trilogy`);
    });
  });

  describe("search", () => {
    it("should search the OMDB API for a given movie", () => {
      const movie = new MovieSearch();
      const name = "Rocky";

      axios.get.mockReturnValue(
        new Promise((resolve) => {
          resolve({ data: { Title: "Rocky" } });
        })
      );

      expect(movie.search(name)).resolves.toEqual({ data: { Title: "Rocky" } });
      expect(axios.get).toHaveBeenLastCalledWith(movie.buildUrl(name));
    });
  });
});
