'use strict';

function stackEmpty(stack) {
  if (stack.top < 0) {
    return true;
  } else {
    return false;
  }
}

module.exports = {
  stackEmpty: stackEmpty
};
