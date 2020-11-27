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

const takeUntil = function(array, callback) {
  const result = [];  
  for (let i of array) {
    if (callback(i) === false) {
      result.push(i);
    } else {
      break;
    }    
  }
  return result;
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

assertArraysEqual(results1, [0, 2, 5, 7, 2]);
assertArraysEqual(results1, [1, 2, 5, 7, 2]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

assertArraysEqual(results2, ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"]);
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);
