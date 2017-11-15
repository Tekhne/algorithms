'use strict';

module.exports = {
  swap(ary, i, j) {
    const tmp = ary[i];
    ary[i] = ary[j];
    ary[j] = tmp;
  }
};
