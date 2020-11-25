const assertEqual = function(actual, expected) {
  const pass = 0x2705;
  const fail = 0x1F6D1;
  if (actual === expected) {
    console.log(`${String.fromCodePoint(pass)} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${String.fromCodePoint(fail)} Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true); // => should FAIL

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => should PASS
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true); // => should FAIL
assertEqual(eqArrays([], ["1", "2", 3]), true); // => should FAIL

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, "3"], [1, 2, 3]);
assertArraysEqual([1, 2], [1, 2, 3]);