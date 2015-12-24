module.exports = function (array) {
  var length = array.length;
  var headroom = Math.pow(length, 3);

  for (var i = 0; i < length; i++) {
    array[i] = [Math.random(headroom), array[i]];
  }

  array.sort(function (a, b) {
    if (a[0] < b[0]) { return -1; }
    if (a[0] > b[0]) { return 1; }
    return 0;
  });

  for (var i = 0; i < length; i++) {
    array[i] = array[i][1];
  }

  return array;
};
