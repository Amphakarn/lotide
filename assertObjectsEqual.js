// Pair programming with Ryan MacFarlane

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

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length === Object.keys(object2).length) {
    for (const key of Object.keys(object1)) {
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        if (!eqArrays(object1[key], object2[key])) {
          return false;
        } else return true;
      }
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
    return true;
  }
  return false;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  const pass = 0x2705;
  const fail = 0x1F6D1;
  if (eqObjects(actual, expected) === true) {
    console.log(`${String.fromCodePoint(pass)} Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`${String.fromCodePoint(fail)} Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); // Should pass
assertObjectsEqual({ b: "2"}, { a: "4", b: "2"}); // Should fail
assertObjectsEqual({ a: "4", b: ["2"]}, { a: "4", b: "2"}); // Should fail
assertObjectsEqual({ a: "4", b: "2"}, { a: "4", b: "2"}); // Should pass
assertObjectsEqual({ a: "4", b: ["2"]}, { a: "4", b: ["2"]}); // Should pass