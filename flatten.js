const assertArraysEqual = require('./assertArraysEqual');

// Flatten a nested array into a single-level array
const flatten = function (arr) {
  let flattenedArray = [];
  arr.forEach(item => {
    if (Array.isArray(item)) {
      flattenedArray = flattenedArray.concat(flatten(item));
    } else {      
      flattenedArray.push(item);
    }
  });
  return flattenedArray;
}

console.log(flatten([1, 2, [3, 4], 5, [6]]));
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [ 1, 2, 3, 4, 5, 6 ]);