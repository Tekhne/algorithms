'use strict';

const assert = require('assert');
const dll = require('../lib/doubly-linked-list');

describe('doubly linked list', () => {
  let list;
  let node1;
  let node2;
  let node3;

  beforeEach(() => {
    node1 = new dll.Node(1, null, null);
    node2 = new dll.Node(2, null, null);
    node3 = new dll.Node(3, null, null);
    list = new dll.DoublyLinkedList(node3);
    list.insert(node2); // Put at front of list.
    list.insert(node1); // Put at front of list.
  });

  describe('search()', () => {
    it('returns null if given key does not match any node.key', () => {
      assert.equal(list.search(9), null);
    });

    it('returns node if given key matches a node.key', () => {
      assert.equal(list.search(1), node1);
    });
  });

  describe('insert()', () => {
    it('sets given node.next to old head of list', () => {
      let node4 = new dll.Node(4, null, null);
      list.insert(node4);
      assert.equal(node4.next, node1);
    });

    describe('when old head is not null', () => {
      it('sets node.previous of old head to given node', () => {
        let node4 = new dll.Node(4, null, null);
        list.insert(node4);
        assert.equal(node1.previous, node4);
      });

      it('sets head to given node', () => {
        let node4 = new dll.Node(4, null, null);
        list.insert(node4);
        assert.equal(list.head, node4);
      });

      it('sets node.previous of given node to null', () => {
        let node4 = new dll.Node(4, null, null);
        list.insert(node4);
        assert.equal(node4.previous, null);
      });
    });
  });

  describe('delete()', () => {
    describe('when given node.previous is not null', () => {
      it('sets given node.previous.next to given node.next', () => {
        list.delete(node2);
        assert.equal(node1.next, node3);
      });
    });

    describe('when given node.previous is null', () => {
      it('sets list head to given node.next', () => {
        list.delete(node1);
        assert.equal(list.head, node2);
      });
    });

    describe('when given node.next is not null', () => {
      it('sets given node.next.previous to given node.previous', () => {
        list.delete(node2);
        assert.equal(node2.next.previous, node2.previous);
      });
    });
  });
});
