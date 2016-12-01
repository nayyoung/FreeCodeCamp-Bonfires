
function rot13(str) {
  var unicode = [];
  var decoded = [];
  var letter = "";
  str = str.split("");
  
  for (var i = 0; i < str.length; i++) {
    letter = str[i].charCodeAt();
    
    if (letter >= "A".charCodeAt() && letter <= "Z".charCodeAt()) {
    unicode.push((str[i].charCodeAt() - "A".charCodeAt() + 13) % 26 + "A".charCodeAt());
    } else {
      unicode.push(letter);
    }
  }
  for (var j=0; j<unicode.length; j++) {
    decoded.push(String.fromCharCode(unicode[j]));
  }
  return decoded.join("");
}


