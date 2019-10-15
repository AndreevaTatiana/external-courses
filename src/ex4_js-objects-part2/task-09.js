function insertStr(sourceStr,str,pos) {
	let arr = sourceStr.split(' '),
	newArr = [];
	for (let i = 0; i < arr.length; i++) {
		if (i === pos) {
			 newArr.push(arr[i], str)
		} else {
			newArr.push(arr[i]);
		}
	}
	return newArr.join(' ');
}

module.exports = insertStr
