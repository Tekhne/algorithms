var assert = require('assert');
var sort = require('../../lib/sorting/selection');

describe('sort()', function () {
    it('sorts the given array using selection sort', function () {
        var actual = [9, 7, 8, 6, 5, 3, 4, 2, 1, 0];
        var expected = actual.slice();
        assert.deepEqual(sort(actual), expected.sort());
    });
});
