// Write a function to sum the numbers in a file.
//
// This function should take the name of a plain text file with one number per
// line, as in data/integers.txt.
// It should add all the numbers and pass the result as the second argument to
// the callback provided. e.g `callback(null, sum);`.
//
// Blank lines should be ignored.
// However, if there is a line with non-numeric content (e.g. "oops"),
// an Error should be passed as the first argument to the callback provided,
// e.g. `callback(new Error('line not a number'));`
//

'use strict';

const fs = require('fs');

let fileName = '../data/integers.txt';

const sumLines = (fileName, callback) => {
  fs.readFile(fileName, { encoding: 'utf8' }, (err, lines) => {
    let lno = 0;
    let sum = lines.split('\n').reduce((prev, curr, i) => {
      lno = i;
      return prev + (+curr);
    }, 0);
    let error = isNaN(sum) && new Error(`line ${lno}: not a number`);
    callback(error, sum);
  });
};

// new Promise((resolve, reject) => {
//   fs.readFile(fileName, { encoding: 'utf8' }, (error, lines) => {
//     if (error) {
//       reject(error);
//     }
//     resolve(lines);
//   })
//   .then((lines) => {
//       lines.split('\n');
//       return lines;
//   })
//   .then((lines) => {
//     let lno = 0;
//     return lines.reduce((prev, curr, i) => {
//       lno = i;
//       return prev + (+curr);
//     }, 0);
//   });
//   .catch((error) => {
//      let error = isNaN(sum) && new Error(`line ${lno}: not a number`);
//   });
// });

module.exports = {
  sumLines,
};
