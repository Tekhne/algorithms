class Node {
  constructor({ data = null, next = null } = {}) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  // O(n) time, O(1) space
  length() {
    let current = this.head;
    let count = 0;

    while (current) {
      count++;
      current = current.next;
    }

    return count;
  }

  // O(n) time, O(1) space
  // Node positions start at 1 (head).
  // Positions beyond the tail are converted to the tail.
  insert(node, position) {
    let p = this.head;

    if (position === 1) {
      node.next = p;
      this.head = node;
      return;
    }

    let k = 1;
    let q;

    while (p && k < position) {
      k++;
      q = p;
      p = p.next;
    }

    q.next = node;
    node.next = p;
  }

  // O(n) time, O(1) space
  // Node positions start at 1 (head).
  delete(position) {
    if (!this.head) return;

    let k = 1;
    let p = this.head;
    let q;

    if (position === 1) {
      this.head = this.head.next;
      return;
    }

    while (p && k < position) {
      k++;
      q = p;
      p = p.next;
    }

    if (!p) throw new Error('position does not exist');

    q.next = p.next;
  }
}

module.exports = {
  LinkedList,
  Node
};
