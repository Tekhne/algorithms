'use strict';

const assert = require('assert');
const sort = require('../lib/sort-selection');

describe('sort()', () => {
  it('sorts the given array using selection sort', () => {
    const actual = [9, 7, 8, 6, 5, 3, 4, 2, 1, 0];
    const expected = actual.slice();
    assert.deepEqual(sort(actual), expected.sort());
  });
});
