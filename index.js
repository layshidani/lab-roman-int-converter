console.log('******************************************************');
console.log('* Conversor de Algorismos Romanos e Números Inteiros *');
console.log('******************************************************');

const romans = [
  'M',
  'CM',
  'D',
  'CD',
  'C',
  'XC',
  'L',
  'XL',
  'X',
  'IX',
  'V',
  'IV',
  'I'
];
const integers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

const isValidRoman = function validateRoman(userInput) {
  if (typeof userInput !== 'string' || userInput === '') {
    return false;
  }
};

const isValidNumber = function validateNumber(userInput) {
  if (typeof userInput !== 'number' || userInput === 0) {
    return false;
  }
};

function romanToInt(roman) {
  roman = roman.toUpperCase();
  let result = 0;

  for (let i in integers) {
    while (roman.indexOf(romans[i]) === 0) {
      result += integers[i];
      roman = roman.replace(romans[i], '');
    }
  }

  if (!isValidRoman || result < 1) {
    return ':/ Algarismo inválido. Tente de novo...';
  } else {
    return 'Resultado: ' + result;
  }
}

function intToRoman(number) {
  let result = '';
  for (let j in integers) {
    while (number % integers[j] < number) {
      result += romans[j];
      number -= integers[j];
    }
  }

  if (!isValidNumber || result < 1) {
    return ':/ Número inválido. Tente de novo...';
  } else {
    return 'Resultado: ' + result;
  }
}

module.exports = romanToInt;
module.exports = intToRoman;
