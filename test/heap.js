'use strict';

const assert = require('assert');
const heap = require('../lib/heap');

describe('maxHeapify()', () => {
  it('ensures subtree rooted at given index obeys max-heap property', () => {
    const actual = [16, 4, 10, 14, 7, 9, 3, 2, 8, 1];
    actual.heapSize = actual.length;
    const expected = [16, 14, 10, 8, 7, 9, 3, 2, 4, 1];
    expected.heapSize = expected.length;
    heap.maxHeapify(actual, 1);
    assert.deepEqual(actual, expected);
  });
});

describe('buildMaxHeap()', () => {
  it('turns array into a max-heap', () => {
    const actual = [4, 1, 3, 2, 16, 9, 10, 14, 8, 7];
    const expected = [16, 14, 10, 8, 7, 9, 3, 2, 4, 1];
    expected.heapSize = expected.length;
    heap.buildMaxHeap(actual);
    assert.deepEqual(actual, expected);
  });
});
