function calcEvenOdd(arr) {
	let count0 = 0, countEven = 0, countOdd = 0, count = 0;
	let result = [];
	
	for (let i = 0; i < arr.length; i++){
		if (typeof arr[i] === "number") {
			if (arr[i] === 0) {
				count0 += 1;
			} else if (arr[i]%2 == 0) {
				countEven +=1;
			} else {
				countOdd += 1;
			}
		} else {
			count +=1;
		}
	}
	result.push(countEven,countOdd,count0)
	return result;
}
module.exports = calcEvenOdd