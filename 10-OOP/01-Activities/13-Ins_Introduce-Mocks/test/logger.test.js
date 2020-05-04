const Logger = require("../Logger");

const colors = {
  red: "\x1b[31m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  magenta: "\x1b[35m",
  cyan: "\x1b[36m",
};

describe("Logger", () => {
  describe("colors", () => {
    it("should print in red", () => {
      const log = new Logger();
      const message = "Hello world!";
      const mock = jest.spyOn(console, "log");
      mock.mockImplementation(() => {});

      log.red(message);

      expect(mock).toHaveBeenCalledWith(colors.red, message);

      mock.mockRestore();
    });

    it("should print in green", () => {
      const log = new Logger();
      const message = "Hello world!";
      const mock = jest.spyOn(console, "log");
      mock.mockImplementation(() => {});

      log.green(message);

      expect(mock).toHaveBeenCalledWith(colors.green, message);

      mock.mockRestore();
    });

    it("should print in yellow", () => {
      const log = new Logger();
      const message = "Hello world!";
      const mock = jest.spyOn(console, "log");
      mock.mockImplementation(() => {});

      log.yellow(message);

      expect(mock).toHaveBeenCalledWith(colors.yellow, message);

      mock.mockRestore();
    });

    it("should print in blue", () => {
      const log = new Logger();
      const message = "Hello world!";
      const mock = jest.spyOn(console, "log");
      mock.mockImplementation(() => {});

      log.blue(message);

      expect(mock).toHaveBeenCalledWith(colors.blue, message);

      mock.mockRestore();
    });

    it("should print in magenta", () => {
      const log = new Logger();
      const message = "Hello world!";
      const mock = jest.spyOn(console, "log");
      mock.mockImplementation(() => {});

      log.magenta(message);

      expect(mock).toHaveBeenCalledWith(colors.magenta, message);

      mock.mockRestore();
    });

    it("should print in cyan", () => {
      const log = new Logger();
      const message = "Hello world!";
      const mock = jest.spyOn(console, "log");
      mock.mockImplementation(() => {});

      log.cyan(message);

      expect(mock).toHaveBeenCalledWith(colors.cyan, message);

      mock.mockRestore();
    });
  });
});
