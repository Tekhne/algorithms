var assert = require('assert');
var permute = require('../../lib/permute/by_swapping');

describe('permute()', function () {
  it('permutes the given array by randomized swapping', function () {
    var array = [1, 2, 3, 4, 5];
    var permutedArray = permute(array.slice());
    assert.notDeepEqual(permutedArray, array);
  });
});
