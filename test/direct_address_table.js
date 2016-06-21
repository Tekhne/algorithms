'use strict';

const assert = require('assert');
const dat = require('../lib/direct_address_table');

describe('direct address table', () => {
  let object1;
  let object2;
  let table;

  beforeEach(() => {
    object1 = {key: 0, data: 'data'};
    object2 = {key: 9, data: 'data'};
    table = [];
    table[object1.key] = object1;
  });

  describe('search', () => {
    it('returns the object for given key', () => {
      assert.equal(dat.search(table, 0), object1);
    });
  });

  describe('insert', () => {
    it('adds the given object to the table at object.key', () => {
      dat.insert(table, object2);
      assert.equal(dat.search(table, object2.key), object2);
    });
  });

  describe('delete', () => {
    it('removes the given object from the table at object.key', () => {
      dat.delete(table, object1);
      assert.equal(dat.search(table, object1.key), null);
    });
  });
});
