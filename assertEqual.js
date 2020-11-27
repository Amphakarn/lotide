// compare 2 strings and console.log results
const assertEqual = function(actual, expected) {
  const pass = 0x2705;
  const fail = 0x1F6D1;
  if (actual === expected) {
    console.log(`${String.fromCodePoint(pass)} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${String.fromCodePoint(fail)} Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("L", "A");
assertEqual(1, -1);