module.exports = function (array) {
  var length = array.length;

  for (var i = 0; i < length; i++) {
    array[i] = array[Math.random(length)];
  }

  return array;
};
