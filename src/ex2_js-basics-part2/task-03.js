function calcEvenOdd(arr) {
	let countZero = 0,
			countEven = 0,
			countOdd = 0,
			result = [];
	
	for (let i = 0; i < arr.length; i++){
		if (typeof arr[i] === "number") {
			if (arr[i] === 0) {
				countZero += 1;
			} else if (arr[i]%2 == 0) {
				countEven +=1;
			} else {
				countOdd += 1;
			}
		}
	}
	result.push(countEven,countOdd,countZero)
	return result;
}

module.exports = calcEvenOdd