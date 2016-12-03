function spinalCase(str) {
  var newStr = str.replace(/([a-z])([A-Z])/g, "$1-$2");
  return newStr.toLowerCase().replace(/[\W_]/g, "-");
}
