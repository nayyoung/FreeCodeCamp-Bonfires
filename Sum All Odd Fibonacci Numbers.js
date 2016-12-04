// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

function sumFibs(num) {
  var a = 1,
      b = 0,
      sum = 0;
  while (a <= num) {
    if (a % 2 !== 0) {
      sum += a;
    }
    a += b;
    b = a - b;
  }
  return sum;
}
