var assert = require('assert');
var sort = require('../../lib/sorting/shell');

describe('sort()', function () {
    it('sorts the given array', function () {
        var actual = [9, 7, 8, 6, 5, 3, 4, 2, 1, 0];
        var expected = actual.slice(0);

        sort(actual);
        expected.sort();

        assert.strictEqual(actual.length, expected.length);

        for (var i = 0; i < actual.length; i++) {
            assert.strictEqual(actual[i], expected[i]);
        }
    });
});
