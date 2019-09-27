function determineSimpleNum(num) {
	function isInteger(n) {
		return (n ^ 0) === n;
	}
	if (num > 1 && num <= 1000 ) {
		if (isInteger(Math.sqrt(num))) {
			return ('Число ' + num + ' - составное число');
		}
		let arr = [2,3,5,7];
		for (let i = 0; i < arr.length; i++) {
			if (num !== arr[i] && num%arr[i] === 0) {
					return ('Число ' + num + ' - составное число');
			}
			return ('Число ' + num + ' - простое число');
		}
	}
	return 'Данные неверны';
}
module.exports = determineSimpleNum