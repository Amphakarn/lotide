const assertEqual = function(actual, expected) {
  const pass = 0x2705;
  const fail = 0x1F6D1;
  if (actual === expected) {
    console.log(`${String.fromCodePoint(pass)} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${String.fromCodePoint(fail)} Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(sentence) {
  sentence = sentence.replace(/ /g, "");
  const results = {};
  for (let i of sentence) {
    if (results[i]) {
      results[i] += 1;
    } else {
      results[i] = 1;
    }
  }
  console.log(results);
  return results;
};

countLetters("lighthouse in the house");
countLetters("LHL");
