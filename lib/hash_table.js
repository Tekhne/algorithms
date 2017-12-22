'use strict';

const _ = require('lodash');
const bigInt = require('big-integer');

const ALPHABET_SIZE = 65536; // UTF 16.
const DEFAULT_CAPACITY = 4;
const MAX_CAPACITY = Math.pow(2, 32) - 1; // Max valid Array length.

// Uses linear probing for collision resolution.
class HashTable {
  constructor(capacity = DEFAULT_CAPACITY) {
    if (capacity > MAX_CAPACITY) {
      throw new Error(`capacity can't be > ${MAX_CAPACITY}`);
    }

    this.capacity = capacity;
    this.keys = [];
    this.size = 0;
    this.values = [];
  }

  hash(key) {
    if (_.isObject(key) && key.hasOwnProperty('hashCode')) {
      return key.hashCode() % this.capacity;
    }

    // Algorithm from Skiena.

    const k = key.toString();
    let hash = bigInt(0);
    let i, m;

    for (i = 0; i < k.length; i++) {
      m = bigInt(ALPHABET_SIZE).pow(k.length - (i + 1));
      hash = hash.plus(m.multiply(k.charCodeAt(i)));
    }

    return hash.mod(this.capacity).toJSNumber();
  }

  access(key, value) {
    if (!key) {
      throw new Error('invalid key');
    }

    // Ensure there's plenty of free space too handle collisions.
    if (this.size >= this.capacity / 2) {
      this.resize(2 * this.capacity);
    }

    let hash;

    for (hash = this.hash(key); this.keys[hash]; hash = (hash + 1) % this.capacity) {
      if (this.keys[hash] === key) {
        if (value) {
          return this.values[hash] = value;
        } else {
          return this.values[hash];
        }
      }
    }

    if (value) {
      this.keys[hash] = key;
      this.values[hash] = value;
      this.size++;
    }

    return null;
  }

  resize(capacity) {
    if (capacity > MAX_CAPACITY) {
      throw new Error(`new capacity is > ${MAX_CAPACITY}`);
    }

    const tmp = new HashTable(capacity);

    for (let hash = 0; hash < this.capacity; hash++) {
      if (this.keys[hash]) {
        tmp.access(this.keys[hash], this.values[hash]);
      }
    }

    this.keys = tmp.keys;
    this.values = tmp.values;
    this.capacity = tmp.capacity;
  }

  isEmpty() {
    return this.size < 1;
  }

  delete(key) {
    if (!key) {
      throw new Error('invalid key')
    }

    if (!this.access(key)) {
      return;
    }

    let hash = this.hash(key);

    // Find hash for key.
    while (key !== this.keys[hash]) {
      hash = (hash + 1) % this.capacity;
    }

    // Delete key/value pair.
    delete this.keys[hash];
    delete this.values[hash];

    // Eliminate gap in runs.
    hash = (hash + 1) % this.capacity;

    while (this.keys[hash]) {
      tmpKey = this.keys[hash];
      tmpValue = this.values[hash];
      delete this.keys[hash];
      delete this.vals[hash];
      this.size--;
      this.access(tmpKey, tmpValue);
      hash = (hash + 1) % this.capacity;
    }

    this.size--;

    // Don't use up too much space when handling collisions.
    if ((this.size > 0) && (this.size <= (this.capacity / 8))) {
      this.resize(this.capacity / 2);
    }
  }
}

module.exports = {
  HashTable,
  MAX_CAPACITY
};
