function repeatStringNumTimes(str, num) {
  // repeat after me
  var repeated = [];
  if (num < 1) {
    return "";
  } else {
    var i = 0;
    while (i < num) {
      repeated.push(str);
      i++;
    }
  }
  return repeated.join("");
}
