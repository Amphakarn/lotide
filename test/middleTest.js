const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual(middle([1,2]), []); // should pass
assertArraysEqual(middle([1,2,3,4,5]), [3]); // should pass
assertArraysEqual(middle([1,2,3,4]), [2, 3]); // should pass
assertArraysEqual(middle(["A","B",null]), ["B", "C"]); // should fail