// // fs is a Node standard library package for reading and writing files
// var fs = require("fs");

// // return the contents of 'data.csv' as a string in the variable "data"
// // "utf8" encodes the raw buffer data in human-readable format
// fs.readFile("data.csv", "utf8", function(error, data) {

//   if (error) {
//     return console.log(error);
//   }

//   console.log(data);

// });

// impor fs module into your node js prgram
const fs = require('fs');
//encoding utf 8 means all possible char on your keyboard
// fs.readFile('./data.csv', 'utf-8', function (err, data) {
//   if (err) {
//     return console.log(err)
//   }

//   console.log(data)
// })
let name = process.argv[3]

fs.appendFile('log.txt', name , function (err) {
  if (err) {
  return console.error(err);
}

console.log('success')
});