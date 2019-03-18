'use strict';

class Node {
  constructor(key = null, next = null, previous = null) {
    this.key = key;
    this.next = next;
    this.previous = previous;
  }
}

class DoublyLinkedList {
  constructor(head = null) {
    this.head = head;
  }

  search(key) {
    let node = this.head;

    while (node && node.key !== key) {
      node = node.next;
    }

    return node;
  }

  // FIXME allow arbitrary insertion
  insert(node) {
    node.next = this.head;

    if (this.head) {
      this.head.previous = node;
    }

    this.head = node;
    this.head.previous = null;
  }

  delete(node) {
    if (node.previous) {
      node.previous.next = node.next;
    } else {
      this.head = node.next;
    }

    if (node.next) {
      node.next.previous = node.previous;
    }
  }
}

module.exports = { DoublyLinkedList, Node };
