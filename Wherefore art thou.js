function whatIsInAName(collection, source) {
  // What's in a name?
  var sourceKeys = Object.keys(source);
  
  function filter (obj) {
    for (var i = 0; i < sourceKeys.length; i++) {
      if (!obj.hasOwnProperty(sourceKeys[i]) || source[sourceKeys[i]] !== obj[sourceKeys[i]]) {
        return false;
      }
    } return true;
  }
  var arr = collection.filter(filter);
  return arr;
}
