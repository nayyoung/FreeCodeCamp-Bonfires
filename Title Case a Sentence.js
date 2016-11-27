function titleCase(str) {
  var words = str.split(" ");
  var titled = [];
  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    word = word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
    titled.push(word);
  }
  return titled.join(" ");
}
