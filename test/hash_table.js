'use strict';

const _ = require('lodash');
const assert = require('assert');
const { HashTable, MAX_CAPACITY } = require('../lib/hash_table');

describe('HashTable', () => {
  describe('constructor()', () => {
    it('throws an error when given capacity is > MAX_CAPACITY', () => {
      assert.throws(() => { new HashTable(MAX_CAPACITY + 1)});
    });
  });

  describe('hash()', () => {
    describe('when key is an object with a hashCode property', () => {
      it('it returns the value of key.hashCode() % capcity', () => {
        const code = 987654321;
        const key = { hashCode: () => code };
        const capacity = 12345;
        const table = new HashTable(capacity);
        assert.strictEqual(table.hash(key), code % capacity)
      });
    });

    describe('when key is not an object with a hashCode property', () => {
      it('returns a hash code generated from key.toString()', () => {
        const table = new HashTable(12345);
        assert.strictEqual(_.isNumber(table.hash('this is a test')), true);
      });
    });
  });

  describe('access()', () => {
    const key = 'testkey';
    const value = 'testvalue';
    const value2 = 'testvalue2';
    let table;

    beforeEach(() => {
      table = new HashTable();
    });

    describe('when key is not given', () => {
      it('throws an error', () => {
        assert.throws(() => { table.access() });
      });
    });

    describe('when key is given', () => {
      describe('when table has key', () => {
        describe('when value is given', () => {
          it('changes value at given key in table', () => {
            table.access(key, value);
            table.access(key, value2);
            assert.strictEqual(value2, table.access(key));
          });
        });

        describe('when value is not given', () => {
          it('returns value in table for given key', () => {
            table.access(key, value);
            assert.strictEqual(value, table.access(key));
          });
        });
      });

      describe('when table does not have key', () => {
        describe('when value is given', () => {
          it('adds new key/value pair to table', () => {
            table.access(key, value)
            assert.strictEqual(value, table.access(key))
          });
        });

        describe('when value is not given', () => {
          it('returns null', () => {
            assert.strictEqual(null, table.access('notfound'));
          });
        });
      });
    });
  });

  describe('resize()', () => {
    let table;

    beforeEach(() => {
      table = new HashTable();
    });

    describe('when capacity is > MAX_CAPACITY', () => {
      it('throws an error', () => {
        assert.throws(() => { table.resize(MAX_CAPACITY + 1) });
      });
    });

    it('changes table capacity to the one given', () => {
      const capacity = 12345;
      table.resize(capacity);
      assert.strictEqual(capacity, table.capacity);
    });

    it('retains table key/value pairs', () => {
      const key1  = 'testkey1';
      const key2  = 'testkey2';
      const value1 = 'testvalue1';
      const value2 = 'testvalue2';
      table.access(key1, value1);
      table.access(key2, value2);
      table.resize(12345);
      assert.strictEqual(value1, table.access(key1));
      assert.strictEqual(value2, table.access(key2));
    });

    it('retains table size', () => {
      table.access('key1', 'value1');
      table.access('key2', 'value2');
      const oldSize = table.size;
      table.resize(12345);
      assert.strictEqual(oldSize, table.size);
    });
  });

  describe('isEmpty()', () => {
    describe('when table size is < 1', () => {
      it('returns true', () => {
        const table = new HashTable();
        assert.strictEqual(table.isEmpty(), true);
      });
    });

    describe('when table size is >= 1', () => {
      it('returns false', () => {
        const table = new HashTable();
        table.access('key', 'value');
        assert.strictEqual(table.isEmpty(), false);
      });
    });
  });

  describe('delete()', () => {
    describe('when key is not given', () => {
      it('throws an error', () => {
        const table = new HashTable();
        assert.throws(() => { table.delete() });
      });
    });

    describe('when table does not contain key', () => {
      it('leaves table unchanged', () => {
        const key = 'testkey';
        const value = 'testvalue';
        const capacity = 12345;
        const table = new HashTable(capacity);
        table.access(key, value);
        const size = table.size;
        assert.strictEqual(capacity, table.capacity);
        assert.strictEqual(size, table.size);
        assert.strictEqual(value, table.access(key));
      });
    });

    it('removes key/value pair from table', () => {
      const table = new HashTable();
      const key = 'testkey';
      table.access(key, 'testvalue');
      table.delete(key);
      assert.strictEqual(null, table.access(key));
    });

    // FIXME find colliding keys to enable "runs."
    // describe('when keys inside table have colliding hashes', () => {
      // it('ensures other, colliding key/value pairs are still accessible', () => {
        // ...
      // });
    // });

    it('reduces table size by one', () => {
      const table = new HashTable();
      const key = 'testkey';
      table.access(key, 'value');
      const oldSize = table.size;
      table.delete(key);
      assert.strictEqual(oldSize - 1, table.size);
    });
  });
});
