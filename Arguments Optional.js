// Create a function that sums two arguments together. 
// If only one argument is provided, 
// then return a function that expects one argument and returns the sum.


function addTogether() {
  function isNum (arg) {
    if(typeof arg === "number") {
      return true;
    } else {
      return false;
    }
  }
  
  if (isNum(arguments[0])) {
    if (arguments[1]) {
      if (isNum(arguments[1])) {
        return arguments[0] + arguments[1];
      }
    } else {
      var num1 = arguments[0];
      return function (num) {
        if (isNum(num)) {
          return num1 + num;
        }
      };
    }
  }
}
