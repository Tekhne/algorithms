'use strict';

const assert = require('assert');
const permute = require('../lib/permute_by_swapping');

describe('permute()', () => {
  it('permutes the given array by randomized swapping', () => {
    const array = [1, 2, 3, 4, 5];
    const permutedArray = permute(array.slice());
    assert.notDeepEqual(permutedArray, array);
  });
});
