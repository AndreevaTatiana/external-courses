function addRoundUp(num1,num2) {
	let str,
	str1;
	if (typeof num1 === "number" && !(Number.isNaN(num1)) &&
	typeof num2 === "number" && !(Number.isNaN(num2))) {
		str = String(num1 + num2);
		str1 = str.substring(0, str.indexOf('.') + 5);
		if (str1[str1.length-1] >= 5 && str1[str1.length-1] <= 9) {
			str = str.substring(0, str.indexOf('.') + 3) + (Number(str1[str1.length-2]) + 1) ;
		} else {
			str = str.substring(0, str.indexOf('.') + 4);
		}
	}
	return Number(str);
}

module.exports = addRoundUp