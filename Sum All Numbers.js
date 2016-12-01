
function sumAll(arr) {
  var newArr = [];
  var max = Math.max.apply(null, arr);
  var min = Math.min.apply(null, arr);
  
  for (var i = min; i <= max; i++) {
    newArr.push(i);
  }
  
  
  return newArr.reduce(function(a, b) {
    return a + b;
  });
}

sumAll([5, 10]);
