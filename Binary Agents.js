// Return an English translated sentence of the passed binary string.

function binaryAgent(str) {
  var binary = [128, 64, 32, 16, 8, 4, 2, 1],
      string = [];
  str = str.split(" ");
  for (var i = 0; i < str.length; i++) {
    var word = str[i].split("");
    var charCode = 0;
    for (var j = word.length - 1; j >= 0; j--) {
      if (word[j] == 1) {
        charCode += binary[j];
      } else {
        charCode += 0;
      } 
    } 
    string.push(String.fromCharCode(charCode));
  }
  return string.join("");
}
