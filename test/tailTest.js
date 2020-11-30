const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("return all elements except the first one for ['Hello', 'Lighthouse', 'Labs']", () => {
    const expected = ['Lighthouse', 'Labs'];
    const actual = tail(['Hello', 'Lighthouse', 'Labs']);
    assert.deepEqual(actual, expected);
  });
});

