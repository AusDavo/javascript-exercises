const convertToCelsius = function(inputFahrenheit) {
  return((Math.round((inputFahrenheit - 32) * (5 / 9) * 10) / 10));
};

const convertToFahrenheit = function(inputCelsius) {
  return(Math.round((inputCelsius * (9 / 5) + 32) * 10) / 10);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
