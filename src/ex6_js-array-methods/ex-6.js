function arrReduce(array, callback, initialValue) {
  let previousValue;
  let startIndex = 0;

  if (initialValue === undefined) {
    previousValue = array[0];
    startIndex = 1;
  } else {
    previousValue = initialValue;
  }

  for (let i = startIndex; i < array.length; i += 1) {
    previousValue += callback(previousValue, array[i], i, array);
  }

  return previousValue;
}

module.exports = arrReduce;
