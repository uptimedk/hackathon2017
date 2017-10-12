function displayFactors() {
	var number = document.getElementById('number').value;
	var btn = document.getElementById('btn');
	var factors = document.getElementById('factors');
	factors.innerHTML = findFactorsOf(number).join(', ');
}

function findFactorsOf(number){
	var factors = [];

	for (var i = 2; i <= number; i++){
		while ((number % i) === 0){
			factors.push(i);
			number = number / i;
		}
	}
	return factors;
}
