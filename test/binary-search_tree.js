'use strict';

const assert = require('assert');
const { BinarySearchTree, Node } = require('../lib/binary-search-tree');

describe('BinarySearchTree', () => {
  let tree;

  beforeEach(() => {
    tree = new BinarySearchTree();
  });

  describe('size()', () => {
    describe('when node is not given', () => {
      describe('when root node is missing', () => {
        it('returns 0', () => {
          assert.strictEqual(tree.size(), 0);
        });
      });

      describe('when root node is present', () => {
        it('returns root.size', () => {
          tree.put('testkey', 'testvalue');
          assert.strictEqual(tree.size(), 1)
        });
      });
    });

    describe('when node is given', () => {
      it('returns node size', () => {
        const node = new Node('testkey', 'testvalue', 1);
        assert.strictEqual(tree.size(node), node.size);
      });
    });
  });

  describe('isEmpty()', () => {
    describe('when size === 0', () => {
      it('returns true', () => {
        assert.strictEqual(tree.isEmpty(), true);
      });
    });

    describe('when size !== 0', () => {
      it('returns false', () => {
        tree.put('testkey', 'testvalue');
        assert.strictEqual(tree.isEmpty(), false);
      });
    });
  });

  describe('put()', () => {
    const key = 'testkey';
    const value = 'testvalue';

    describe('when key is not given', () => {
      it('throws an exception', () => {
        assert.throws(() => tree.put());
      });
    });

    it('increases the tree size by one', () => {
      assert.strictEqual(tree.size(), 0);
      tree.put(key, value);
      assert.strictEqual(tree.size(), 1);
    });

    it('inserts a key/value pair into tree', () => {
      tree.put(key, value);
      assert.strictEqual(tree.get(key), value);
    });
  });

  describe('get()', () => {
    describe('when key is not given', () => {
      it('throws an exception', () => {
        assert.throws(() => tree.get());
      });
    });

    describe('when key is exists in tree', () => {
      it('returns value for key', () => {
        tree.put(2, 'two');
        tree.put(1, 'one');
        const key = 3;
        const value = 'three';
        tree.put(key, value);
        assert.strictEqual(tree.get(key), value);
      });
    });

    describe('when key does not exist in tree', () => {
      it('returns null', () => {
        assert.strictEqual(tree.get('doesnotexist'), null);
      });
    });
  });

  describe('minimum()', () => {
    describe('when tree is empty', () => {
      it('returns null', () => {
        assert.strictEqual(tree.minimum(), null);
      });
    });

    it('returns smallest key in the tree', () => {
      const minimumKey = 1;
      tree.put(minimumKey, 'first');
      tree.put((minimumKey + 1), 'second');
      assert.strictEqual(tree.minimum(), minimumKey);
    });
  });

  describe('maximum()', () => {
    describe('when tree is empty', () => {
      it('returns null', () => {
        assert.strictEqual(tree.maximum(), null);
      });
    });

    it('returns largest key in the tree', () => {
      const maximumKey = 2;
      tree.put(maximumKey, 'first');
      tree.put(maximumKey - 1, 'second');
      assert.strictEqual(tree.maximum(), maximumKey);
    });
  });

  describe('floor()', () => {
    describe('when key is missing', () => {
      it('throws an exception', () => {
        assert.throws(() => tree.floor());
      });
    });

    it('returns largest key in tree <= key', () => {
      tree.put(2, 'two');
      tree.put(1, 'one');
      tree.put(4, 'four');
      assert.strictEqual(tree.floor(3), 2);
    });

    describe('when no matching key can be found', () => {
      it('returns null', () => {
        tree.put(4, 'four')
        tree.put(3, 'three');
        tree.put(5, 'five');
        assert.strictEqual(tree.floor(2), null);
      });
    });
  });

  describe('ceiling()', () => {
    describe('when key is missing', () => {
      it('throws an exception', () => {
        assert.throws(() => tree.ceiling());
      });
    });

    it('returns smallest key in tree >= key', () => {
      tree.put(4, 'four');
      tree.put(2, 'two');
      tree.put(5, 'five');
      assert.strictEqual(tree.ceiling(3), 4);
    });

    describe('when no matching key can be found', () => {
      it('returns null', () => {
      tree.put(4, 'four');
      tree.put(2, 'two');
      tree.put(5, 'five');
      assert.strictEqual(tree.ceiling(6), null);
      });
    });
  });
});
