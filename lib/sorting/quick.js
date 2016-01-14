'use strict';

const shuffle = require('shuffle-array');
const swap = require('../util').swap;

function partition(ary, lo, hi) {
  const x = ary[hi];
  let i = lo - 1;

  for (let j = lo; j <= (hi - 1); j++) {
    if (ary[j] <= x) {
      i++;
      swap(ary, i, j);
    }
  }

  swap(ary, i + 1, hi);
  return i + 1;
}

function do_sort(ary, lo, hi) {
  if (hi <= lo) return;
  const j = partition(ary, lo, hi);
  do_sort(ary, lo, j - 1);
  do_sort(ary, j + 1, hi);
}

module.exports = (ary) => {
  shuffle(ary);
  do_sort(ary, 0, ary.length - 1);
  return ary;
}
