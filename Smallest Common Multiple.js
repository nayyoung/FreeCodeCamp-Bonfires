// Find the smallest common multiple of the provided parameters 
// that can be evenly divided by both, as well as by all sequential 
// numbers in the range between these parameters.


function smallestCommons(arr) {
  var max = Math.max.apply(null, arr),
      min = Math.min.apply(null, arr),
      lcm,
      fullArr = [];
  
  for (var i=max; i >= min; i--) {
    fullArr.push(i);
  }
  
  lcm = fullArr[0];
  
  for (i = 1; i < fullArr.length; i++) {
    var GCD = gcd(lcm, fullArr[i]);
    lcm = ((lcm * fullArr[i])/GCD);
  }
  
   function gcd(x, y) {    // Implements the Euclidean Algorithm
    if (y === 0)
        return x;
    else
        return gcd(y, x%y);
    }
  
  return lcm;
}
