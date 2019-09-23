module.exports = getType

function getType(argument) {
	if (typeof argument === "number") {
		return 'number';
	} else if (typeof argument === "string") {
		return 'string';
	} 
	return undefined;
}









