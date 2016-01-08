var heap = require('../heap');
var swap = require('../util').swap;

module.exports = function (array) {
  heap.buildMaxHeap(array);

  for (var i = (array.length - 1); i >= 1; i--) {
    swap(array, 0, i);
    array.heapSize = array.heapSize - 1;
    heap.maxHeapify(array, 0);
  }

  delete array.heapSize;
  return array;
}
