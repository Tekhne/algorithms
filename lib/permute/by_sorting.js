'use strict';

module.exports = (array) => {
  const length = array.length;
  const headroom = Math.pow(length, 3);

  for (let i = 0; i < length; i++) {
    array[i] = [Math.random(headroom), array[i]];
  }

  array.sort((a, b) => {
    if (a[0] < b[0]) { return -1; }
    if (a[0] > b[0]) { return 1; }
    return 0;
  });

  for (let i = 0; i < length; i++) {
    array[i] = array[i][1];
  }

  return array;
};
