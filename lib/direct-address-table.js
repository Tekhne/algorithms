'use strict';

// Below, a table is an Array where each index is a key in the universe of
// possible keys for the data set. Each value in the array is an Object with a
// key attribute.

module.exports = {
  search: (table, key) => {
    return table[key];
  },

  insert: (table, object) => {
    table[object.key] = object;
  },

  delete: (table, object) => {
    table[object.key] = null;
  }
};
