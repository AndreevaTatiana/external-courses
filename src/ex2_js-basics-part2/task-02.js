function showCountElem(arr) {
	let count = 0;
	for (let i = 0; i < arr.length; i++) {
	console.log ('arr[' + i + '] ' + arr[i]);
		count += 1;
	}
	console.log ('number of items: ' + count);
}
module.exports = showCountElem