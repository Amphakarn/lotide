// Pair programming with Ryan MacFarlane

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

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

const findKeyByValue = function(object, value) {
  for (const key of Object.keys(object)) {
    if (object[key] === value) {
      return key;
    }
  }
};

// console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"); // Should return true
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined); // Should return true
