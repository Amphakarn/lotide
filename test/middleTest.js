// const middle = require('../middle');
// const assertArraysEqual = require('../assertArraysEqual');

// assertArraysEqual(middle([1,2]), []); // should pass
// assertArraysEqual(middle([1,2,3,4,5]), [3]); // should pass
// assertArraysEqual(middle([1,2,3,4]), [2, 3]); // should pass
// assertArraysEqual(middle(["A","B",null]), ["B", "C"]); // should fail

const assert =  require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("return empty array for [1,2]", () => {
    const expected = [];
    const actual = middle([1,2]);
    assert.deepEqual(actual, expected);
  });

  it("return [3] for [1,2,3,4,5]", () => {
    const expected = [3];
    const actual = middle([1,2,3,4,5]);
    assert.deepEqual(actual, expected);
  });

  it("return [2, 3] for 1,2,3,4]", () => {
    const expected = [2, 3];
    const actual = middle([1,2,3,4]);
    assert.deepEqual(actual, expected);
  });
});
