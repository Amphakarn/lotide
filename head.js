const head = function(arr) {
  if (arr.length >= 1) {
    return arr[0];
  } else {
    return undefined;
  }
};

module.exports = head;