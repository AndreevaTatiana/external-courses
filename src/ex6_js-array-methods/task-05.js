function getAnalogMap(arr,callback) {
	const newArr = [],
	funk = callback,
	array = [];
	Object.assign(array, arr);
	for (let i = 0; i < arr.length; i++){
		newArr.push(funk(arr[i],i,array));
	}
	return newArr;
}
module.exports = getAnalogMap
