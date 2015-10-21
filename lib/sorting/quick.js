var shuffle = require('shuffle-array');
var swap = require('./util').swap;

function partition(ary, lo, hi) {
  var x = ary[hi];
  var i = lo - 1;

  for (var j = lo; j <= (hi - 1); j++) {
    if (ary[j] <= x) {
      i++;
      swap(ary, i, j);
    }
  }

  swap(ary, (i + 1), hi);
  return i + 1;
}

function do_sort(ary, lo, hi) {
  if (hi <= lo) return;
  var j = partition(ary, lo, hi);
  do_sort(ary, lo, (j - 1));
  do_sort(ary, (j + 1), hi);
}

module.exports = function (ary) {
  shuffle(ary);
  do_sort(ary, 0, (ary.length - 1));
  return ary;
}
