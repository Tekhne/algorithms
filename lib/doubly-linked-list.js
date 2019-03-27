class Node {
  constructor({ data = null, next = null, previous = null } = {}) {
    this.data = data;
    this.next = next;
    this.previous = previous;
  }
}

class DoublyLinkedList {
  constructor(head = null) {
    this.head = head;
  }

  // O(n) time, O(1) space
  // Node positions start at 1 (head).
  insert(node, position) {
    if (position === 1) {
      node.next = this.head;
      node.previous = null;
      if (this.head) this.head.previous = node;
      this.head = node;
      return;
    }

    let k = 1;
    let temp = this.head;

    while (k < position - 1 && temp) {
      temp = temp.next;
      k++;
    }

    if (k !== position - 1) throw new Error('position does not exist');

    node.next = temp.next;
    node.previous = temp;
    if (temp.next) temp.next.previous = node;
    temp.next = node;
  }
}

module.exports = {
  DoublyLinkedList,
  Node
};
