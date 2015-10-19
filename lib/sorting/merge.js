function merge(ary, lo, mid, hi) {
  var left = lo;
  var right = (mid + 1);
  var aux = ary.slice();

  for (var k = lo; k <= hi; k++) {
    if (left > mid) {         // left exhausted
      ary[k] = aux[right++];
    } else if (right > hi) { // right exhausted
      ary[k] = aux[left++];
    } else if (aux[right] < aux[left]) {
      ary[k] = aux[right++];
    } else {
      ary[k] = aux[left++];
    }
  }
};

function do_sort(ary, lo, hi) {
  if (hi <= lo) return;
  var mid = Math.floor(lo + ((hi - lo) / 2));
  do_sort(ary, lo, mid);
  do_sort(ary, (mid + 1), hi);
  merge(ary, lo, mid, hi);
}

module.exports = function (ary) {
  do_sort(ary, 0, (ary.length - 1));
  return ary;
};
