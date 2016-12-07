//Drop the elements of an array (first argument), 
// starting from the front, until the predicate (second argument) returns true

function dropElements(arr, func) {
 var length = arr.length;
  for (var i = 0; i < length; i++) {
    if (!func(arr[0])) {
      arr.shift();
    }
  }
  return arr;
}
