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
  /* Input = array
  let mid = [];
  Check array length
  If length > 2 then
    Check if array length is even or odd number
    If odd number then 
      grab a single middle element
      push the element in the mid array
    End if
    Else if even number then
      grab the two middle elements
      push the elements in the mid array
    End else if
  */
  return mid
}

console.log(middle([1,2,3]));