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

const middle = function(arr) {  
  let arrLen = arr.length;
  if (arrLen <= 2) {
    return [];
  }

  let mid = [];
  let midIndex;
  if (arrLen % 2 === 1) {
    midIndex = Math.floor(arrLen / 2);
    mid.push(arr[midIndex]);
  } else {    
    midIndex = arrLen / 2;
    mid.push(arr[midIndex - 1]);
    mid.push(arr[midIndex]);
  }
  return mid;
}

assertArraysEqual(middle([1,2]), []);
assertArraysEqual(middle([1,2,3,4,5]), [3]);
assertArraysEqual(middle([1,2,3,4]), [2, 3]); 
assertArraysEqual(middle(["A","B",null]), ["B", "C"]);