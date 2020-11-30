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
};

module.exports = middle;