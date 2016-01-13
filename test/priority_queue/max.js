var assert = require('assert');
var pq = require('../../lib/priority_queue/max');

describe('heapMaximum()', function () {
  it('returns the maximum element in the priority queue', function () {
    var array = [16, 14, 10, 8, 7, 9, 3, 2, 4, 1];
    assert.equal(pq.heapMaximum(array), 16);
  });
});

describe('heapExtractMaximum()', function () {
  it('throws an error when heap size is < 1', function () {
    var array = [];
    array.heapSize = 0;
    assert.throws(function () { pq.heapExtractMaximum(array) }, Error);
  });

  it('returns the maximum element in the priority queue', function () {
    var array = [16, 14, 10, 8, 7, 9, 3, 2, 4, 1];
    array.heapSize = array.length;
    assert.equal(pq.heapExtractMaximum(array), 16);
  });

  it('reduces the size of the heap by one', function () {
    var array = [16, 14, 10, 8, 7, 9, 3, 2, 4, 1];
    var expectedHeapSize = array.length - 1;
    array.heapSize = array.length;
    pq.heapExtractMaximum(array);
    assert.equal(expectedHeapSize, array.heapSize);
  });

  it('removes the maximum element in the priority queue', function () {
    var actual = [16, 14, 10, 8, 7, 9, 3, 2, 4, 1];
    var expected = [14, 8, 10, 4, 7, 9, 3, 2, 1, 1]; // last element is out
    actual.heapSize = actual.length;
    expected.heapSize = expected.length - 1;
    pq.heapExtractMaximum(actual);
    assert.deepEqual(actual, expected);
  });
});
