function getAnalogSlice(array,begin,end) {
	const newArr = [],
	len = array.length;
	if (begin === undefined && end === undefined) {
		return Object.assign(newArr, array)
	} 
	if (end === undefined) { 
		for (let i = getIndex(begin,len); i < array.length; i++) {
			newArr.push(array[i]);
		}
		return newArr;
	}
	for (let i = getIndex(begin,len); i < getIndex(end,len); i++) {
		newArr.push(array[i]);
	}
	
	function getIndex(value,len){
		value = +value;
		if (Number.isNaN(value)) { 
			return value = 0;
		}
		if (value < 0) {
			return len+value;
		}
		return value;
	}
	return newArr
}

module.exports = getAnalogSlice