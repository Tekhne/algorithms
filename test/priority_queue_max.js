'use strict';

const assert = require('assert');
const pq = require('../lib/priority_queue_max');

describe('heapMaximum()', () => {
  it('returns the maximum element in the priority queue', () => {
    const array = [16, 14, 10, 8, 7, 9, 3, 2, 4, 1];
    assert.equal(pq.heapMaximum(array), 16);
  });
});

describe('heapExtractMaximum()', () => {
  it('throws an error when heap size is < 1', () => {
    const array = [];
    array.heapSize = 0;
    assert.throws(() => {
      pq.heapExtractMaximum(array);
    }, Error);
  });

  it('returns the maximum element in the priority queue', () => {
    const array = [16, 14, 10, 8, 7, 9, 3, 2, 4, 1];
    array.heapSize = array.length;
    assert.equal(pq.heapExtractMaximum(array), 16);
  });

  it('reduces the size of the heap by one', () => {
    const array = [16, 14, 10, 8, 7, 9, 3, 2, 4, 1];
    const expectedHeapSize = array.length - 1;
    array.heapSize = array.length;
    pq.heapExtractMaximum(array);
    assert.equal(expectedHeapSize, array.heapSize);
  });

  it('removes the maximum element in the priority queue', () => {
    const actual = [16, 14, 10, 8, 7, 9, 3, 2, 4, 1];
    const expected = [14, 8, 10, 4, 7, 9, 3, 2, 1, 1]; // last element is out
    actual.heapSize = actual.length;
    expected.heapSize = expected.length - 1;
    pq.heapExtractMaximum(actual);
    assert.deepEqual(actual, expected);
  });
});

describe('heapIncreaseKey()', () => {
  it('throws an error when new key is smaller than current key', () => {
    const array = [16, 14, 10];
    array.heapSize = array.length;
    assert.throws(() => {
      pq.heapIncreaseKey(array, 1, 5);
    }, Error);
  });

  it('sets given index to given key and enforces max-heap property on it', () => {
    const actual = [16, 14, 10, 8, 7, 9, 3, 2, 4, 1];
    const expected = [17, 16, 10, 8, 14, 9, 3, 2, 4, 7];
    actual.heapSize = actual.length;
    expected.heapSize = expected.length;
    pq.heapIncreaseKey(actual, 9, 17);
    assert.deepEqual(actual, expected);
  });
});
