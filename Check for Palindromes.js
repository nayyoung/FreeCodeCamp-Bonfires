function palindrome(str) {
  // Good luck!
  var regex = /[\W_]/g;
  str = str.toLowerCase().replace(regex, "");
  var reversed = str.split("").reverse().join("");
  if (reversed === str) {
    return true;
  }
  return false;
}
