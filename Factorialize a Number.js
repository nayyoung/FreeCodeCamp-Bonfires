function factorialize(num) {
	var factored = 1;
	for (var i = num; i > 0; i--) {
		factored *= i;
	}
  return factored;
}
