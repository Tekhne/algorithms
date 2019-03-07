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

    while (node !== null && node.key !== key) {
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

module.exports = { DoublyLinkedList, Node };
