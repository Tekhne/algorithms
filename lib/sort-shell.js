'use strict';

const swap = require('./util').swap;

module.exports = ary => {
  const N = ary.length;
  let h = 1;

  while (h < Math.floor(N / 3)) {
    h = 3 * h + 1;
  }

  while (h >= 1) {
    for (let i = h; i < N; i++) {
      for (let j = i; j >= h && ary[j] < ary[j - h]; j -= h) {
        swap(ary, j, j - h);
      }
    }

    h = Math.floor(h / 3);
  }

  return ary;
};
