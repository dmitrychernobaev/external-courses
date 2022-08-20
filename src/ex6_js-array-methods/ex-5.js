function arrMap(array, callback) {
  const newArray = [];

  for (let i = 0; i < array.length; i += 1) {
    newArray.push(callback.call(array[i], i, array));
  }

  return newArray;
}

module.exports = arrMap;
