function removeSpaces(str) {
	let newStr = '';
	if (str) {
		if (str[0] === " " && str[str.length-1] === " ") {
			for (let i = 1; i < str.length-1; i++) {
				newStr += str[i];
			}
		}
		if (str[0] === " " && str[str.length-1] !== " ") {
			for (let i = 1; i < str.length; i++){
				newStr += str[i];
			}
		}
		if (str[0] !== " " && str[str.length-1] === " ") {
			for (let i = 0; i < str.length-1; i++) {
				newStr += str[i];
			}
		}
	}
	return newStr
}

module.exports = removeSpaces
