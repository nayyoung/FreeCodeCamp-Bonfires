// Return true if the passed string is a valid US phone number.

function telephoneCheck(str) {
  var regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?(\d{3})[\s\-]?\d{4}$/;
  return regex.test(str);
}
