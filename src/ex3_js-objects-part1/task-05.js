function getClone(obj) {
	const clone = {};
	for (let key in obj) {
		clone[key] = obj[key];
	}
	return clone;
}

module.exports = getClone