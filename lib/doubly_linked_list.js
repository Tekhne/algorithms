'use strict';

class Node {
    constructor(key, next, previous) {
      this.key = key ? key : null;
      this.next = next ? next : null;
      this.previous = previous ? previous : null;
    }
}

class DoublyLinkedList {
  constructor(head) {
    this.head = head ? head : null;
  }

  search(key) {
    let node = this.head;

    while ((node !== null) && (node.key !== key)) {
      node = node.next;
    }

    return node;
  }

  insert(node) {
    node.next = this.head;

    if (this.head !== null) {
      this.head.previous = node;
    }

    this.head = node;
    this.head.previous = null;
  }

  delete(node) {
    if (node.previous !== null) {
      node.previous.next = node.next;
    } else {
      this.head = node.next;
    }

    if (node.next !== null) {
      node.next.previous = node.previous;
    }
  }
}

module.exports = {
  DoublyLinkedList: DoublyLinkedList,
  Node: Node
};
