'use strict';

class Node {
  constructor(key, value, size) {
    this.key = key;
    this.value = value;
    this.size = size;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  size(node = null) {
    if (!node) {
      return this.root ? this.root.size : 0;
    }

    return node.size;
  }

  isEmpty() {
    return this.size() === 0;
  }

  doPut(key, value, node=null) {
    if (!node) {
      return new Node(key, value, 1);
    }

    if (key < node.key) {
      node.left = this.doPut(key, value, node.left);
    } else if (key > node.key) {
      node.right = this.doPut(key, value, node.right);
    } else {
      node.value = value;
    }

    node.size = 1 + this.size(node.left) + this.size(node.right);
    return node;
  }

  put(key, value) {
    if (!key) {
      throw new Error('invalid key');
    }

    this.root = this.doPut(key, value, this.root);
  }

  doGet(key, node=null) {
    if (!key) {
      throw new Error('invalid key');
    }

    if (!node) {
      return null;
    }

    if (key < node.key) {
      return this.doGet(key, node.left);
    }

    if (key > node.key) {
      return this.doGet(key, node.right);
    }

    return node.value;
  }

  get(key) {
    return this.doGet(key, this.root);
  }

  doMinimum(node) {
    if (!node.left) {
      return node;
    }

    return this.doMinimum(node.left);
  }

  // Return smallest key in tree.
  minimum() {
    if (this.isEmpty()) {
      return null;
    }

    return this.doMinimum(this.root).key;
  }

  doMaximum(node) {
    if (!node.right) {
      return node;
    }

    return doMaximum(node.right);
  }

  // Returns largest key tree.
  maximum() {
    if (this.isEmpty()) {
      return null;
    }

    return this.doMaximum(this.root).key;
  }

  doFloor(node, key, best=null) {
    if (!node) {
      return best;
    }

    if (key < node.key) {
      return this.doFloor(node.left, key, best);
    }

    if (key > node.key) {
      return this.doFloor(node.right, key, node.key);
    }

    return node.key;
  }

  // Return largest key in tree <= key.
  floor(key) {
    if (!key) {
      throw new Error('invalid key');
    }

    return this.doFloor(this.root, key, null);
  }

  doCeiling(node, key) {
    if (!node) {
      return null;
    }

    if (key === node.key) {
      return node;
    }

    if (key < node.key) {
      return this.doCeiling(node.left, key) || node;
    }

    return this.doCeiling(node.right, key);
  }

  // Return smallest key in tree >= key.
  ceiling(key) {
    if (!key) {
      throw new Error('invalid key');
    }

    const node = this.doCeiling(this.root, key);

    if (!node) {
      return null;
    }

    return node.key;
  }

  doSelect(node, k) {
    // FIXME
    // private Node select(Node x, int k) {
        // if (x == null) return null;
        // int t = size(x.left);
        // if      (t > k) return select(x.left,  k);
        // else if (t < k) return select(x.right, k-t-1);
        // else            return x;
    // }
  }

  // Return the kth smallest key in the tree.
  select(k) {
    // FIXME
    // public Key select(int k) {
        // if (k < 0 || k >= size()) {
            // throw new IllegalArgumentException("argument to select() is invalid: " + k);
        // }
        // Node x = select(root, k);
        // return x.key;
    // }
  }
}

module.exports = {
  BinarySearchTree,
  Node
};
