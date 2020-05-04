class Algo {
  constructor() { };

  reverse(str) {
    return str
      .split("")
      .reverse()
      .join("");
  };

  isPalindrome(str) {
    return this.reverse(str) === str;
  };

  capitalize(str) {
    return str.split(" ").map(word => {
      return word.substring(0, 1).toUpperCase() + word.substring(1);
    }).join(" ");
  };
}

module.exports = Algo;
