'use strict';

const assert = require('assert');
const sort = require('../../lib/sorting/counting');

describe('sort()', () => {
  it('sorts the given array using counting sort', () => {
    const unsorted = [9, 2, 8, 3, 7, 4, 5, 6, 1, 0];
    const expected = unsorted.slice().sort();
    const actual = sort(unsorted, Math.max(...unsorted));
    assert.deepEqual(actual, expected);
  });
});
