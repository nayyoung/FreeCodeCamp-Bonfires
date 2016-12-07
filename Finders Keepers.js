// Create a function that looks through an array (first argument) and returns the first element 
// in the array 
// that passes a truth test (second argument).

function findElement(arr, func) {
  arr = arr.filter(func);
  return arr[0];
}
