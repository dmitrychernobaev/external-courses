function sliceArray(array, startIndex = 0, endIndex = array.length) {
  const newArray = [];
  let newStart = 0;
  let newEnd = array.length;

  if (startIndex >= 0) {
    newStart = startIndex;
  } else {
    newStart = startIndex + array.length;
  }

  if ((endIndex >= 0) && (endIndex <= array.length)) {
    newEnd = endIndex;
  } else {
    newEnd = endIndex + array.length;
  }

  for (let i = newStart; i < newEnd; i += 1) {
    newArray.push(array[i]);
  }

  return newArray;
}

module.exports = sliceArray;
