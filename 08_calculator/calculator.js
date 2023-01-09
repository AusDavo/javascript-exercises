const add = function(userInputA, userInputB) {
	return userInputA + userInputB;
};

const subtract = function(userInputA, userInputB) {
	return userInputA - userInputB;
};

const sum = function() {
	return arguments[0].reduce((a,b) => a + b, 0);
};

const multiply = function() {
  return arguments[0].reduce((a,b) => a * b);
};

const power = function(userInputA, userInputB) {
	return userInputA ** userInputB;
};

const factorial = function(userInputA) {
	factorialCalculated = 1;
  if (userInputA > 0) {
    for (i = 1; i <= userInputA; i++) {
      factorialCalculated = factorialCalculated * i;
    }
  }
  return factorialCalculated;
  
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
