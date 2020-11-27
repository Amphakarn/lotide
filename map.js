// compare 2 arrays and return boolean
const eqArrays = function(arrA, arrB) {
  if (arrA.length === arrB.length) {
    for (let i in arrA) {
      if (arrA[i] !== arrB[i]) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
};

// compare 2 strings and console.log results
const assertArraysEqual = function(arrA, arrB) {
  const pass = 0x2705;
  const fail = 0x1F6D1;
  if (eqArrays(arrA, arrB)) {
    console.log(`${String.fromCodePoint(pass)} Assertion Passed: ${arrA} === ${arrB}`);
  } else {
    console.log(`${String.fromCodePoint(fail)} Assertion Failed: ${arrA} !== ${arrB}`);
  }
};

// iterate over the array, call the callback function to pick up the first letter of each word and 
// push into an array then return the results array
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]);
console.log(results1);

assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);
assertArraysEqual(results1, [ 'G', 'c', 't', 'm', 't' ]);
assertArraysEqual(results1, [ 'g', 'c' ]);