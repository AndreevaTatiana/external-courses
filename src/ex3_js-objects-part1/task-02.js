function getKeyValue(obj){
	for (let key in obj) {
		console.log(key + ': ' + obj[key]);
	}
}

module.exports = getKeyValue
