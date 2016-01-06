module.exports = {
    swap: function (ary, i, j) {
        var tmp = ary[i];
        ary[i] = ary[j];
        ary[j] = tmp;
    }
};
