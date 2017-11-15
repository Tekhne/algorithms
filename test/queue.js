'use strict';

const assert = require('assert');
const queue = require('../lib/queue');

describe('queue', () => {
  describe('enqueue()', () => {
    it('sets the tail to the item given', () => {
      let q = [0, 1, null, null, 5];
      q.tail = 2;
      q.head = 4;
      queue.enqueue(q, 2);
      assert.equal(q[2], 2);
    });

    it('increments the tail index', () => {
      let q = [0, 1, null, null, 5];
      q.tail = 2;
      q.head = 4;
      queue.enqueue(q, 2);
      assert.equal(q.tail, 3);
    });
  });

  describe('dequeue()', () => {
    it('returns the item at the head index', () => {
      let q = [0, 1, null, null, 5];
      q.tail = 2;
      q.head = 4;
      assert.equal(queue.dequeue(q), 5);
    });

    it('increments the head index', () => {
      let q = [0, 1, null, null, 5];
      q.tail = 2;
      q.head = 4;
      queue.dequeue(q);
      assert.equal(q.head, 0);
    });
  });
});
