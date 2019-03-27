const assert = require('assert').strict;
const { DoublyLinkedList, Node } = require('../lib/doubly-linked-list');

describe('Node', function() {
  describe('constructor()', function() {
    it('sets data, next, and previous instance variables', function() {
      const data = 'test data';
      const next = new Node();
      const previous = new Node();
      const node = new Node({ data, next, previous });
      assert.equal(node.data, data);
      assert.equal(node.next, next);
      assert.equal(node.previous, previous);
    });
  });
});

describe('DoublyLinkedList', function() {
  describe('constructor()', function() {
    it('sets head instance variable', function() {
      const head = new Node();
      const list = new DoublyLinkedList(head);
      assert.equal(list.head, head);
    });
  });

  describe('insert()', function() {
    it('can insert a node before the head', function() {
      const node1 = new Node({ data: 'node1' });
      const node2 = new Node({ data: 'node2' });
      const list = new DoublyLinkedList(node1);
      list.insert(node2, 1);
      assert.equal(list.head, node2);
      assert.equal(list.head.previous, null);
      assert.equal(list.head.next, node1);
    });

    describe('when DoublyLinkedList is empty', function() {
      it('inserts node at the head', function() {
        const list = new DoublyLinkedList();
        const node1 = new Node({ data: 'node1' });
        list.insert(node1, 1);
        assert.equal(list.head, node1);
        assert.equal(list.head.next, null);
        assert.equal(list.head.previous, null);
      });
    });

    it('can insert a node in the middle', function() {
      const node1 = new Node({ data: 'node1' });
      const node2 = new Node({ data: 'node2' });
      const node3 = new Node({ data: 'node3' });
      node1.next = node3;
      const list = new DoublyLinkedList(node1);
      list.insert(node2, 2);

      assert.equal(list.head, node1);
      assert.equal(list.head.next, node2);
      assert.equal(list.head.next.next, node3);
      assert.equal(list.head.next.next.next, null);

      assert.equal(list.head.previous, null);
      assert.equal(list.head.next.previous, node1);
      assert.equal(list.head.next.next.previous, node2);
    });

    it('can insert a node after the tail', function() {
      const node1 = new Node({ data: 'node1' });
      const node2 = new Node({ data: 'node2' });
      const node3 = new Node({ data: 'node3' });
      node1.next = node2;
      node2.previous = node1;
      const list = new DoublyLinkedList(node1);
      list.insert(node3, 3);

      assert.equal(list.head, node1);
      assert.equal(list.head.next, node2);
      assert.equal(list.head.next.next, node3);
      assert.equal(list.head.next.next.next, null);

      assert.equal(list.head.previous, null);
      assert.equal(list.head.next.previous, node1);
      assert.equal(list.head.next.next.previous, node2);
    });
  });
});
