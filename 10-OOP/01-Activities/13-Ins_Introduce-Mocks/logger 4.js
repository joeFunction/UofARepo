class Logger {
  constructor() {
    this.colors = {
      red: "\x1b[31m",
      green: "\x1b[32m",
      yellow: "\x1b[33m",
      blue: "\x1b[34m",
      magenta: "\x1b[35m",
      cyan: "\x1b[36m",
    };
  };

  red(text) {
    console.log(this.colors.red, text);
  };

  blue(text) {
    console.log(this.colors.blue, text);
  };

  magenta(text) {
    console.log(this.colors.magenta, text);
  };

  green(text) {
    console.log(this.colors.green, text);
  };

  yellow(text) {
    console.log(this.colors.yellow, text);
  };

  cyan(text) {
    console.log(this.colors.cyan, text);
  };
}

module.exports = Logger;
