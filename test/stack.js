'use strict';

const assert = require('assert');
const stack = require('../lib/stack');

describe('stack', () => {
  describe('stackEmpty()', () => {
    it('returns true when given stack is empty', () => {
      const s = [];
      s.top = -1;
      assert.ok(stack.stackEmpty(s));
    });

    it('returns false when given stack is not empty', () => {
      const s = [];
      s.top = 9;
      assert.ok(!stack.stackEmpty(s));
    });
  });

  describe('push()', () => {
    it('pushes given item onto top of stack', () => {
      const item = 'item';
      const s = [];
      s.top = -1;
      stack.push(s, item);
      assert.equal(s[s.top], item);
    });

    it('increments index of top', () => {
      const item = 'item';
      const s = [];
      s.top = -1;
      stack.push(s, item);
      assert.equal(s.top, 0);
    });
  });

  describe('pop()', () => {
    it('pops item off top of stack', () => {
      const s = ['item'];
      s.top = 0;
      assert.equal(stack.pop(s), 'item');
    });

    it('decrements index of top', () => {
      let s = ['item'];
      s.top = 0;
      stack.pop(s);
      assert.ok(stack.stackEmpty(s));
    });

    describe('when stack is empty', () => {
      it('throws an exception', () => {
        const s = [];
        s.top = -1;
        assert.throws(() => {
          stack.pop(s);
        });
      });
    });
  });
});
