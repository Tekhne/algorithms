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

  length() {
    let current = this.head;
    let count = 0;

    while (current) {
      count++;
      current = current.next;
    }

    return count;
  }
}

module.exports = {
  LinkedList,
  Node
};
