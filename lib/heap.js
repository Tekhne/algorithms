var swap = require('./util').swap;

function parent(i) {
  return Math.floor((i - 1) / 2);
}

function left(i) {
  return (2 * i) + 1;
}

function right(i) {
  return (2 * i) + 2;
}

function maxHeapify(array, i) {
  var largest;
  var l = left(i);
  var r = right(i);

  if (l <= array.heapSize && array[l] > array[i]) {
    largest = l;
  } else {
    largest = i;
  }

  if (r <= array.heapSize && array[r] > array[largest]) {
    largest = r;
  }

  if (largest !== i) {
    swap(array, i, largest);
    maxHeapify(array, largest);
  }
}

module.exports = {
  maxHeapify: maxHeapify
};
