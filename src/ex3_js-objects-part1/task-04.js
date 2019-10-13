function checkAddProperty(str,obj) {
	const newObj = obj;  
	if (!(str in newObj)) {
		newObj[str] = "new";
	}
	return newObj;
}

module.exports = checkAddProperty