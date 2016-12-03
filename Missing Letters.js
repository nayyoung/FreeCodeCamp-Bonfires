function fearNotLetter(str) {
  var map = Array.prototype.map,
      coded = map.call(str, function(x) {
        return x.charCodeAt();
      }),
      missing,
      letter = coded[0];
  
  for(var i = 0; i < coded.length; i++) {
    if (letter === coded[i]) {
     letter++;
    } else {
      missing = String.fromCharCode(letter);
    }
  }
  return missing;
  }
