const objProt = {a: 1, b: 2},
			obj = Object.create(objProt);
obj.c = 3;

function getValueProt(property,obj) {
	if (!obj.hasOwnProperty(property)) {
		return obj[property];
	}
	return 'в прототипе нет такого свойства'
}

module.exports = getValueProt
