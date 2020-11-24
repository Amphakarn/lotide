const assertEqual = function(actual, expected) {
  const pass = 0x2705;
  const fail = 0x1F6D1;
  if (actual === expected) {
    console.log(`${String.fromCodePoint(pass)} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${String.fromCodePoint(fail)} Assertion Failed: ${actual} !== ${expected}`);
  }
};

const head = function(arr) {
  if (arr.length >= 1) {
    return arr[0];
  } else {
    return undefined;
  }
  
}

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), 5);
assertEqual(head(["5"]), 5);