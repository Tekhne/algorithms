var assert = require('assert');
var heap = require('../lib/heap');

describe('maxHeapify()', function () {
  it('ensures subtree rooted at given index obeys max-heap property', function () {
    var actual = [16, 4, 10, 14, 7, 9, 3, 2, 8, 1];
    actual.heapSize = actual.length;

    var expected = [16, 14, 10, 8, 7, 9, 3, 2, 4, 1];
    expected.heapSize = expected.length;

    heap.maxHeapify(actual, 1);
    assert.deepEqual(actual, expected);
  });
});
