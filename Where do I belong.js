function getIndexToIns(arr, num) {

  arr.sort(function compareNumbers(a, b) {
  return a - b;
});
  
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] >= num) {
      return i;
    } 
      
  }
  return arr.length;
}
