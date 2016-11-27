function destroyer(arr) {
  // Remove all the values
  var args = Array.prototype.slice.call(arguments);
  args.slice(1);
  return arr.filter(function (nums) {
    return args.indexOf(nums) === -1;
  });
}
