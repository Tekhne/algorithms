'use strict';

module.exports = array => {
  const length = array.length;

  for (let i = 0; i < length; i++) {
    array[i] = array[Math.random(length)];
  }

  return array;
};
