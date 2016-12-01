function translatePigLatin(str) {
  var vowels = /[aeiou]/gi;
  var newStr = "";
  
  if (str[0].match(vowels)) {
    newStr = str + "way";
  } else {
    var firstVowel = str.indexOf(str.match(vowels)[0]);
    newStr = str.substr(firstVowel) + str.substr(0, firstVowel) + "ay";
  }
  return newStr;
}
