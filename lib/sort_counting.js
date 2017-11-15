'use strict';

module.exports = (unsorted, k) => {
  let counts = [];
  let sorted = [];

  // Initialize counts.
  for (let i = 0; i <= k; i++) {
    counts[i] = 0;
  }

  // Make counts[i] contain number of elements == i.
  for (let j = 0; j <= unsorted.length - 1; j++) {
    counts[unsorted[j]] = counts[unsorted[j]] + 1;
  }

  // Make counts[i] contain number of element <= i.
  for (let i = 1; i <= k; i++) {
    counts[i] = counts[i] + counts[i - 1];
  }

  for (let j = unsorted.length - 1; j >= 0; j--) {
    sorted[counts[unsorted[j]] - 1] = unsorted[j];
    counts[unsorted[j]] = counts[unsorted[j]] - 1;
  }

  return sorted;
};
