module.exports = calcEvenOdd
function calcEvenOdd(arr) {
	let count0 = 0;
	let countEven = 0;
	let countOdd = 0;
	let count = 0;
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

