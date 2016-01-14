'use strict';

const assert = require('assert');
const sort = require('../../lib/sorting/heap');

describe('sort()', () => {
  it('sorts the given array using heap sort', () => {
    const actual = [9, 2, 8, 3, 7, 4, 5, 6, 1, 0];
    const expected = actual.slice();
    assert.deepEqual(sort(actual), expected.sort());
  });
});
