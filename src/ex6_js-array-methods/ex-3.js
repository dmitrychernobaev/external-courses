function arrEvery(array, callback) {
  let lengthTrue = 0;

  for (let i = 0; i < array.length; i += 1) {
    if (callback(array[i], i, array)) {
      lengthTrue += 1;
    }
  }

  if (lengthTrue === array.length) {
    return true;
  }

  return false;
}

module.exports = arrEvery;
