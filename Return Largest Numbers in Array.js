function largestOfFour(arr) {
  var largestSet = [];
  for (var i = 0; i < arr.length; i++) {
    var largestNum = 0;
    for (var j = 0; j < arr[i].length; j++) {
      if (arr[i][j] > largestNum) {
        largestNum = arr[i][j];
      }
    } largestSet.push(largestNum);
  }
  // You can do this!
  return largestSet;
}
