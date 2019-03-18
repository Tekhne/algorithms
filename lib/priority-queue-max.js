'use strict';

const heap = require('./heap');
const swap = require('./util').swap;

function heapMaximum(array) {
  return array[0];
}

function heapExtractMaximum(array) {
  let max;

  if (array.heapSize < 1) {
    throw new Error('heap underflow');
  }

  max = array[0];
  array[0] = array[array.heapSize - 1];
  array.heapSize = array.heapSize - 1;
  heap.maxHeapify(array, 0);
  return max;
}

function heapIncreaseKey(array, i, key) {
  if (key < array[i]) {
    throw new Error('new key is smaller than current key');
  }

  array[i] = key;

  while (i > 0 && array[heap.parent(i)] < array[i]) {
    swap(array, i, heap.parent(i));
    i = heap.parent(i);
  }
}

module.exports = {
  heapExtractMaximum: heapExtractMaximum,
  heapIncreaseKey: heapIncreaseKey,
  heapMaximum: heapMaximum
};
