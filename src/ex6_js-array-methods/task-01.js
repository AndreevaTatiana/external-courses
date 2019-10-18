function isAnalogSlice(array,begin,end) {
	const newArr = [],
	len = array.length;
	if (!begin && !end) {
		return Object.assign(newArr, array)
	} 
	if (!end) { 
		for (let i = getIndex(begin,len); i < array.length; i++) {
			newArr.push(array[i]);
		}
		return newArr;
	}
	for (let i = getIndex(begin,len); i < getIndex(end,len); i++) {
		newArr.push(array[i]);
	}
	
	function getIndex(value,len){
		let index = +value;
		if (Number.isNaN(index)) { 
			index = 0;
		}
		if (value < 0) {
			index = len+index;
		}
		return index;
	}
	return newArr
}
module.exports = isAnalogSlice