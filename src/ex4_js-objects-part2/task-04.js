function getUpCaseFirstSym (str) {
	let s = '';
	if (!str) {
		return str;
	}
	for (let i = 1; i < str.length; i++) {
		s += str[i];
	}
	return str[0].toUpperCase() + s;
}

module.exports = getUpCaseFirstSym