// Remove all falsy values from an array.

function bouncer(arr) {
  return arr.filter(function (value) {
    if (value) {
      return value;
    }
  });
}
