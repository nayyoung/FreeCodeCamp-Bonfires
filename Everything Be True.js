// Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

function truthCheck(collection, pre) {
  // Is everyone being true?
  for (var i = 0; i < collection.length; i++) {
    var objKeys = Object.keys(collection[i]);
    if (objKeys.indexOf(pre) == -1) {
      return false;
    } else {
      var value = collection[i][pre];
      if (!Boolean(value)) {
        return false;
      }
    }
  }
   return true;
}
