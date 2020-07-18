// This code is meant to serve as a mock fetch from an API.
export const getDeveloper = new Promise(function(resolve) {
  setTimeout(() => {
    resolve({
      excitementLevel: 100,
      lifeLongLearner: true,
      mood: "happy",
      name: "Alec"
    });
  }, 1000);
});
