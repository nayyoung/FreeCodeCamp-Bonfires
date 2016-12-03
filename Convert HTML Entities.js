function convertHTML(str) {
  var split = str;
  for (var i=0; i<split.length; i++) {
  switch(split[i]) {
      case "&": 
        split = split.replace(split[i], "&amp;");
        break;
      case "<": 
        split = split.replace(split[i], "&lt;");
        break;
      case ">": 
        split = split.replace(split[i], "&gt;");
        break;
      case "\"": 
        split = split.replace(split[i], "&quot;");
        break;
      case "\'": 
        split = split.replace(split[i], "&apos;");
        break;
  }   
  }
  return split;
}
