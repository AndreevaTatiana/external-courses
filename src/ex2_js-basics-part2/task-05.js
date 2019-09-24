module.exports = getMaxElem

function getMaxElem(arr) {
	let max = 0;
	for (let i = 0; i < arr.length; i++) {
		for (j = arr.length-1; j > arr[0]; j-- ) {
			if (arr[i] > arr[j]) {
				if (max < arr[i]) {
					max = arr[i];
				}
			}
		}
   }
   return max;
}


