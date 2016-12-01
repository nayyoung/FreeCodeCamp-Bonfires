function convertToRoman(num) {
  
  var romanNum = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"];
  var decimal = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
  var romaned = [];
  
  for (var i = decimal.length - 1; i >= 0; i--) {
    while (decimal[i] <= num){
      romaned.push(romanNum[i]);
      num -= decimal[i];
    }
  }
  return romaned.join("");
}
