const assert = require('assert').strict;
const { LinkedList, Node } = require('../lib/linked-list');

describe('Node', function() {
  describe('constructor()', function() {
    it('sets data and next instance variables', function() {
      const data = 'test data';
      const next = new Node();
      const node = new Node({ data, next });
      assert.equal(node.data, data);
      assert.equal(node.next, next);
    });
  });
});

describe('LinkedList', function () {
  describe('constructor()', function () {
    it('sets head instance variable', function() {
      const head = new Node();
      const list = new LinkedList(head);
      assert.equal(list.head, head);
    });
  });

  describe('length()', function () {
    it('returns the number of nodes in the linked list', function() {
      const n1 = new Node();
      const n2 = new Node({ next: n1});
      const ll = new LinkedList(n2);
      assert.equal(ll.length(), 2);
    });
  });
});
