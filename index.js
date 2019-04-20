const romans = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
const integers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

function romanToInt(roman) {
  roman = roman.toUpperCase();
  let result = 0;
  for (let i in integers) {
    while (roman.indexOf(romans[i]) === 0) {
      result += integers[i];
      roman = roman.replace(romans[i], '');
    }
  }
  return result;
}

console.log('romanToInt(XxiV): ', romanToInt('XxiV'));

function intToRoman(number) {
  let result = '';
  for (let j in integers) {
    while (number % integers[j] < number) {
      result += romans[j];
      number -= integers[j];
    }
  }
  return result;
}

console.log('intToRoman(24): ', intToRoman(24));