'use strict';

const swap = require('./util').swap;

module.exports = (ary) => {
  let i, j, key;

  for (j = 1; j < ary.length; j++) {
    key = ary[j];
    i = j - 1;

    while (i >= 0 && ary[i] > key) {
      ary[i + 1] = ary[i];
      i--;
    }

    ary[i + 1] = key;
  }

  return ary;
};
