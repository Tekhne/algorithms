var swap = require('../util').swap;

module.exports = function (ary) {
    var N = ary.length;
    var min;

    for (var i = 0; i < N; i++) {
        min = i;

        for (var j = (i + 1); j < N; j++) {
            if (ary[j] < ary[min]) min = j;
        }

        swap(ary, i, min);
    }

    return ary;
};
