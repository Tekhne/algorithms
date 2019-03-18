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

describe('LinkedList', function() {
  describe('constructor()', function() {
    it('sets head instance variable', function() {
      const head = new Node();
      const list = new LinkedList(head);
      assert.equal(list.head, head);
    });
  });

  describe('length()', function() {
    it('returns the number of nodes in the linked list', function() {
      const n1 = new Node();
      const n2 = new Node({ next: n1 });
      const ll = new LinkedList(n2);
      assert.equal(ll.length(), 2);
    });
  });

  describe('insert()', function() {
    let list, node1, node2, node3, node4;

    beforeEach(function() {
      node4 = new Node({ data: 'node 4' });
      node3 = new Node({ data: 'node 3' });
      node2 = new Node({ data: 'node 2', next: node3 });
      node1 = new Node({ data: 'node 1', next: node2 });
      list = new LinkedList(node1);
    });

    it('can insert a node at the head', function() {
      list.insert(node4, 1);
      assert.equal(list.length(), 4);
      assert.equal(list.head, node4);
    });

    it('can insert a node in the middle', function() {
      list.insert(node4, 2);
      assert.equal(list.head.next, node4);
    });

    it('can insert a node at the tail', function() {
      list.insert(node4, list.length() + 1);
      assert.equal(list.head.next.next.next, node4);
    });
  });

  describe('delete()', function() {
    let list, node1, node2, node3;

    beforeEach(function () {
      node3 = new Node({ data: 'node 3' });
      node2 = new Node({ data: 'node 2', next: node3 });
      node1 = new Node({ data: 'node 1', next: node2 });
      list = new LinkedList(node1);
    });

    it('can delete a node from the head', function() {
      list.delete(1);
      assert.equal(list.head, node2);
      assert.equal(list.head.next, node3);
      assert.equal(list.head.next.next, null);
    });

    it('can delete a node from the middle', function() {
      list.delete(2);
      assert.equal(list.head, node1);
      assert.equal(list.head.next, node3);
      assert.equal(list.head.next.next, null);
    });

    it('can delete a node from the tail', function() {
      list.delete(3);
      assert.equal(list.head, node1);
      assert.equal(list.head.next, node2);
      assert.equal(list.head.next.next, null);
    });
  });
});
