'use strict';

// A queue is an Array with extra properties named 'head' and 'tail' which are
// indexes into the Array. Overflow and underflow errors are not handled.

function enqueue(queue, item) {
  queue[queue.tail] = item;

  if (queue.tail === (queue.length - 1)) {
    queue.tail = 0;
  } else {
    queue.tail += 1;
  }
}

function dequeue(queue) {
  let item = queue[queue.head];

  if (queue.head === (queue.length - 1)) {
    queue.head = 0;
  } else {
    queue.head += 1;
  }

  return item;
}

module.exports = {
  dequeue: dequeue,
  enqueue: enqueue
};
