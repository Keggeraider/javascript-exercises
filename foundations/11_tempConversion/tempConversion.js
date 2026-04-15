const convertToCelsius = function(temp) {
  if ((temp - 32) / (9/5) === 0) return 0;
  else return Math.round((temp - 32) / (9/5) * 10) / 10;
};

const convertToFahrenheit = function(temp) {
  if ((temp * (9/5) + 32) === 0) return 0;
  else return Math.round((temp * (9/5) + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
