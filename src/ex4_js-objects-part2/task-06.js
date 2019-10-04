function getUpCaseSym (str) {
	let newStr = str[0].toUpperCase();
	if (!str) {
		return str;
	}
	for (let i = 1; i < str.length; i++) {
		newStr += (str[i - 1] == ' ') ? str[i].toUpperCase() : str[i];
	}
		return newStr;
}

module.exports = getUpCaseSym
