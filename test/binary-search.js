'use strict';

const assert = require('assert');
const bs = require('../lib/binary-search');

describe('binary search', () => {
  describe('search()', () => {
    it('returns index of key if found in array', () => {
      const key = 5;
      const array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
      assert.equal(bs.search(key, array), 2);
    });

    it('returns -1 if key is not found in array', () => {
      const key = 1;
      const array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
      assert.equal(bs.search(key, array), -1);
    });

    it('returns -1 for an empty array', () => {
      assert.equal(bs.search(1, []), -1);
    });

    it('returns index of key if found in array of one element', () => {
      assert.equal(bs.search(1, [1]), 0);
    });
  });
});
