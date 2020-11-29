

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

const assertArraysEqual = function(arrA, arrB) {
  const pass = 0x2705;
  const fail = 0x1F6D1;
  if (eqArrays(arrA, arrB)) {
    console.log(`${String.fromCodePoint(pass)} Assertion Passed: ${arrA} === ${arrB}`);
  } else {
    console.log(`${String.fromCodePoint(fail)} Assertion Failed: ${arrA} !== ${arrB}`);
  }
};

const without = function(source, itemToRem) {
  let leftOver = [];
  for (let i in source) {
    for (let j in itemToRem) {
      if (itemToRem[j] === source[i]) {
        leftOver = source.filter(function(e) {
          return e !== source[i];
        });
      }
    }
  }
  console.log(leftOver);
};

without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]
without([], [1]);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);