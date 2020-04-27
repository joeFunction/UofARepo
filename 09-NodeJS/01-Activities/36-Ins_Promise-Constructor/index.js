const fs = require("fs");

function readFileAsync(path, encoding) {
  return new Promise(function(resolve, reject) {
    // for front-end js, try doing this with setTimeout().
    // the above Promise constructor remains the same
    fs.readFile(path, encoding, function(err, data) {
      if (err) {
        return reject(err);
      }

      resolve(data);
    });
  });
}

readFileAsync("example.txt", "utf8")
  .then(function(data) {
    console.log(data);
  })
  .catch(function(err) {
    console.log(err);
  });
