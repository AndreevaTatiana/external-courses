function getDeepClone(obj) {
		const clone = {};
		for (let key in obj) {
			if (typeof obj[key] === 'object') {
				if (Array.isArray(obj[key])) {
					clone[key] = getCloneArr(obj[key]);
				} else {
					clone[key] = getDeepClone(obj[key])
				}
			}	else {
					clone[key] = obj[key];
			}
		}
	return clone;
	
	function getCloneArr(arr) {
		let arrClone = [];
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] === 'object') {
				arrClone.push(getDeepClone(arr[i]))
			} else {
				arrClone.push(arr[i]);
			}
		}
		return arrClone;
	}
}

module.exports = getDeepClone