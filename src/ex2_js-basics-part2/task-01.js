function getType(argument) {
	if (typeof argument === "number" && !(Number.isNaN(argument))) {
		return 'number';
	} else if (typeof argument === "string") {
		return 'string';
	} 
	return undefined;
}
module.exports = getType