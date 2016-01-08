var assert = require('assert');
var sort = require('../../lib/sorting/heap');

describe('sort()', function () {
  it('sorts the given array using heap sort', function () {
    var actual = [9, 2, 8, 3, 7, 4, 5, 6, 1, 0];
    var expected = actual.slice();
    assert.deepEqual(sort(actual), expected.sort());
  });
});
