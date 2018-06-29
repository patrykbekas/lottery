	var btn = document.querySelector("#getNumbers"),
		output = document.querySelector("#showNumbers");

	function getRandom(min, max) {
		return Math.round(Math.random() * (max - min) + min);
	}

	function showRandomNumbers() {
		var smallNumber = parseInt(document.querySelector("#lowNumber").value),
			hightNumber = parseInt(document.querySelector("#highNumber").value),
			numbers = [],
			random;

		for(var i = 0; i < 6; i++) {
			random = getRandom(smallNumber, hightNumber);

			while(numbers.indexOf(random) !== -1) {
				random = getRandom(smallNumber, hightNumber);
			}

			numbers.push(random);
		}

		output.value = numbers.join(", ");
	}

	btn.onclick = showRandomNumbers;