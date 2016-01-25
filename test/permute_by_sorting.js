'use strict';

const assert = require('assert');
const permute = require('../lib/permute_by_sorting');

describe('permute()', () => {
  it('permutes the given array by sorting on randomized priorities', () => {
    const array = [1, 2, 3, 4, 5];
    const permutedArray = permute(array.slice());
    assert.notDeepEqual(permutedArray, array);
  });
});
