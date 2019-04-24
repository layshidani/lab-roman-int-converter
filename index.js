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

const isValidRoman = (userInput) => {
  if (typeof userInput !== 'string' || userInput === '') {
    return false;
  }
};

const isValidNumber = (userInput) => {
  if (userInput <= 0) {
    return false;
  }
};

function romanToInt(roman) {
  isValidRoman(roman);
  let result = 0;
  roman = String(roman).toUpperCase();


  for (let i in integers) {
    while (roman.indexOf(romans[i]) === 0) {
      result += integers[i];
      roman = roman.replace(romans[i], '');
    }
  }
  if (!isValidRoman || result < 1) {
    return ':/ Algarismo invalido. Tente de novo...';
  } else {
    return 'Resultado: ' + result;
  }
}

function intToRoman(number) {
  isValidNumber(number);
  let result = '';
  for (let j in integers) {
    while (number % integers[j] < number) {
      result += romans[j];
      number -= integers[j];
    }
  }
  if (!isValidNumber || result < 1) {
    return ':/ Numero invalido. Tente de novo...';
  } else {
    return 'Resultado: ' + result;
  }
}

module.exports.romanToInt = romanToInt;
module.exports.intToRoman = intToRoman;
