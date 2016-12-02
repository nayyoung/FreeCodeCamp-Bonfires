
function pairElement(str) {
  var bigArr = [];
  var splitStr = str.split("");
  for (var i = 0; i < splitStr.length; i++) {
    var tempArr = [];
    switch(str[i]) {
      case "A":
        bigArr.push(["A", "T"]);
        break;
      case "T":
        bigArr.push(["T", "A"]);
        break;
      case "C":
        bigArr.push(["C", "G"]);
        break;
      case "G":
        bigArr.push(["G", "C"]);
        break;
    }
  }
  return bigArr;
}


