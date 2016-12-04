// Sum all the prime numbers up to and including the provided number.

function sumPrimes(num) {
  
  var result = 0;
  
  function isPrime(n){
    if (n < 2) {
      return false;
    }
    var q = Math.floor(Math.sqrt(n));
    for (var i = 2; i <= q; i++) {
      if (n % i === 0) {
        return false;
      } 
    }
    return true;
  }
  
  for (var j = 0; j <= num; j++) {
    if (isPrime(j)) {
      result += j;
    }
  }
  return result;
}
