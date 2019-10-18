const Calculator = (function(){
	let result = 0;
	
	return {
		getResult: function (){
			return result;
		},
		reset: function (){
			result = 0;
			return result;
		},
		add: function (a = 0) {
			result += a;
			return Calculator.add
		},
		subtract: function subtract(a = 0) {
			result -= a;
			return Calculator.subtract
		},
		multiply: function (a=0) {
			result *= a;
			return Calculator.multiply
		},
		divide: function (a=0) {
			if (a === 0) {
				result = 0;
			} else {
			result /= a;
			}
			return Calculator.divide
		}
	};
}());

module.exports = Calculator
