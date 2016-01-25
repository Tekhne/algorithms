'use strict';

const swap = require('./util').swap;

module.exports = (ary) => {
    const N = ary.length;
    let min;

    for (let i = 0; i < N; i++) {
        min = i;

        for (let j = (i + 1); j < N; j++) {
            if (ary[j] < ary[min]) min = j;
        }

        swap(ary, i, min);
    }

    return ary;
};
