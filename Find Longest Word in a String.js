function findLongestWord(str) {
  var longest = "";
  var words = str.split(" ");
  for (var i = 0; i < words.length; i++) {
    if (words[i].length > longest.length) {
      longest = words[i];
    } 
  }
  
  return longest.length;
}
