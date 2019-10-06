function checkStr (bigStr,str) {
	let i = 0,
	    flag = false;
	for (let j = 0; j < bigStr.length; j++) {           
		if (str[i] === bigStr[j]) {
			if (i == str.length-1) {
				flag = true; 
				break;
			} else {i++;}
		} else {
			i = 0;
		}
		
	}
	return flag;
}

module.exports = checkStr
