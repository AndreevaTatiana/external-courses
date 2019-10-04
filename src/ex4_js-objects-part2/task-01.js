const objProt = {a: 1, b: 2},
			obj = Object.create(objProt);
obj.c = 3;

function getValue(property,obj) {
	if (obj.hasOwnProperty(property)) {
		return 'в прототипе нет такого свойства'
	}
	return obj[property];
}

module.exports = getValueProt
