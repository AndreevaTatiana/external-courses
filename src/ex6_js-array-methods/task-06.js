function isAnalogReduce(array, callback, initialValue) {
	let result,
	index;
	if (array.length === 0) {
		return 'Error: empty array'
	}
	if (array.length === 1) {
		return array[0];
	}
	if (initialValue !== undefined) {
		result = initialValue;
		index = 0;
	} else {
		result = array[0];
		index = 1;
	}
	
	for (let i = index; i < array.length; i++) {
		result = callback (result, array[i], i, array);
	}
	return result;
}

module.exports = isAnalogReduce