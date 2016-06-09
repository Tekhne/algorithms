'use strict';

function stackEmpty(stack) {
  if (stack.top < 0) {
    return true;
  } else {
    return false;
  }
}

function push(stack, item) {
  stack.top += 1;
  stack[stack.top] = item;
}

function pop(stack) {
  if (stackEmpty(stack)) {
    throw "stack underflow";
  } else {
    stack.top -= 1;
    return stack[stack.top + 1];
  }
}

module.exports = {
  pop: pop,
  push: push,
  stackEmpty: stackEmpty
};
