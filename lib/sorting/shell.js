var swap = require('../util').swap;

module.exports = function (ary) {
    var N = ary.length;
    var h = 1;

    while (h < Math.floor(N / 3)) {
        h = (3 * h) + 1;
    }

    while (h >= 1) {
        for (var i = h; i < N; i++) {
            for (var j = i; (j >= h) && (ary[j] < ary[j - h]); j -= h) {
                swap(ary, j, j - h);
            }
        }

        h = Math.floor(h / 3);
    }

    return ary;
};
