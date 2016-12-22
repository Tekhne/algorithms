module.exports.search = function (key, array) {
  let hi = array.length - 1;
  let lo = 0;
  let mid;

  while (lo <= hi) {
    mid = lo + Math.ceil((hi - lo) / 2);

    if (key < array[mid]) {
      hi = mid - 1;
    } else if (key > array[mid]) {
      lo = mid + 1;
    } else {
      return mid;
    }
  }

  return -1;
};
