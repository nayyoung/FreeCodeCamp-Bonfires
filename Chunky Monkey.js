
function chunkArrayInGroups(arr, size) {
  // Break it up.
  var outer = [];
  
  for (var i = 0; i < arr.length; i+= size) {
    outer.push(arr.slice(i, i + size));
  }
  return outer;
}
