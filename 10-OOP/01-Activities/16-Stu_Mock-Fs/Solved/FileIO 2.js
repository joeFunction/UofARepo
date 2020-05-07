const fs = require("fs");

class FileIO {
  constructor() { };

  read(file) {
    return fs.readFileSync(file, "utf8");
  };

  write(path, data) {
    return fs.writeFileSync(path, data);
  };

  append(file, data) {
    return fs.appendFileSync(file, data);
  };
}

module.exports = FileIO;
