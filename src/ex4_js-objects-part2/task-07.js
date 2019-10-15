function checkLengthStr(str,num) {
	let newStr = '';
	if (str.length > num ) {
		for (let i = 0; i < num-1; i++) {
			newStr += str[i];
		}
		newStr += '…'
	}
	return newStr;
}

module.exports = checkLengthStr
