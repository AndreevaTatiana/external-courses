module.exports = determineSimpleNum

function determineSimpleNum(num) {
	let result;
	if (typeof num !== "number" || num > 1000 || num === 0) {
		result = 'Данные неверны';
		return result;
	}
	if (num === 1) {
		result = 'Единица не относится ни к простым, ни к составным числам';
		return result;
	}
	let arr = [2,3,5,7];
	for (let i = 0; i < arr.length; i++) {
		if (num === arr[i]) {
			result = `Число ${num} - простое число`;
			return result;
		}
		if (num%arr[i] === 0) {
			result = `Число ${num} - составное число`;
			return result;
		}
	}
	result = `Число ${num} - простое число`;
	return result;
}
