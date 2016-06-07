'use strict';

const assert = require('assert');
const stack = require('../lib/stack');

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
