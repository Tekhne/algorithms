'use strict';

const swap = require('./util').swap;

function parent(i) {
  return Math.floor((i - 1) / 2);
}

function left(i) {
  return 2 * i + 1;
}

function right(i) {
  return 2 * i + 2;
}

function maxHeapify(array, i) {
  let largest;
  const l = left(i);
  const r = right(i);

  if (l < array.heapSize && array[l] > array[i]) {
    largest = l;
  } else {
    largest = i;
  }

  if (r < array.heapSize && array[r] > array[largest]) {
    largest = r;
  }

  if (largest !== i) {
    swap(array, i, largest);
    maxHeapify(array, largest);
  }
}

function buildMaxHeap(array) {
  array.heapSize = array.length;

  for (let i = Math.floor((array.length - 1) / 2); i >= 0; i--) {
    maxHeapify(array, i);
  }
}

module.exports = {
  buildMaxHeap: buildMaxHeap,
  left: left,
  maxHeapify: maxHeapify,
  parent: parent,
  right: right
};
