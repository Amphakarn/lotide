//return a new array of element from index 1 to the rest
const tail = function(arr) {
  const tailArr = arr.slice(1);
  return tailArr;
};

module.exports = tail;