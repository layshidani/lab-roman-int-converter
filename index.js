const romans = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
const integers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

const isValidRoman = (userInput) => {
  const invalidInput = typeof userInput !== 'string' || userInput === '';
  return invalidInput ? false : true; 
};

const isValidNumber = (userInput) => {
  const invalidInput = userInput <= 0;
  return invalidInput ? false : true;
};

const romanToInt = (roman) => {
  isValidRoman(roman);

  let result = 0;
  roman = String(roman).toUpperCase();

  for (let i in integers) {
    while (roman.indexOf(romans[i]) === 0) {
      result += integers[i];
      roman = roman.replace(romans[i], '');
    }
  }
  return (!isValidRoman || result < 1) ? ':/ Algarismo invalido. Tente de novo...' : 'Resultado: ' + result;
}

const intToRoman = (number) => {
  isValidNumber(number);

  let result = '';
  for (let j in integers) {
    while (number % integers[j] < number) {
      result += romans[j];
      number -= integers[j];
    }
  }

  return (!isValidNumber || result < 1) ? ':/ Numero invalido. Tente de novo...' : 'Resultado: ' + result;
}

module.exports = { romanToInt, intToRoman };
