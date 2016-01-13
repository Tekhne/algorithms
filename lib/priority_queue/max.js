var maxHeapify = require('../heap').maxHeapify;

function heapMaximum(array) {
  return array[0];
}

function heapExtractMaximum(array) {
  var max;

  if (array.heapSize < 1) {
    throw new Error('heap underflow');
  }

  max = array[0];
  array[0] = array[array.heapSize - 1];
  array.heapSize = array.heapSize - 1;
  maxHeapify(array, 0);
  return max;
}

module.exports = {
  heapExtractMaximum: heapExtractMaximum,
  heapMaximum: heapMaximum
};
