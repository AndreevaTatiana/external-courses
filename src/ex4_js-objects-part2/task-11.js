function countSymbol(str) {
	let result = {};
	for (let i = 0; i < str.length; i++) {
		if (str[i] in result) {
			result[str[i]] += 1;
		} else { 
			result[str[i]] = 1;
		}
	}
	for (let key in result) {
		console.log(key + ': ' + result[key]);
	}
}

module.exports = countSymbol
